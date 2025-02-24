'use client';
import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure } from '@nextui-org/react';

type Coordinates = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter: Coordinates = {
  lat: 11.5758609956468,
  lng: 104.90154057741165,
};

const getGoogleMapsApiKey = () => process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const apiKey = getGoogleMapsApiKey();

interface MapComponentProps {
  onLocationSelect: (location: Coordinates, address: string) => void;
}

const MapCreateShopComponent: React.FC<MapComponentProps> = ({ onLocationSelect }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedLocation, setSelectedLocation] = useState<Coordinates | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const mapRef = useRef<GoogleMap>(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const location: Coordinates = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setSelectedLocation(location);
      fetchAddressFromCoordinates(location).then((address) => {
        setSelectedAddress(address);
        onLocationSelect(location, address);
      });
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ['geometry', 'drawing'],
  });

  const fetchAddressFromCoordinates = async ({ lat, lng }: Coordinates): Promise<string> => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const relevantAreas = [
          'Chamkar Mon', 'Chbar Ampov', 'Chrouy Changvar', 'Dangkor', 'Doun Penh', 'Mean Chey',
          'Prampi Makara', 'Preaek Pnov', 'Pur Senchey', 'Russey Keo', 'Sensok', 'Tuol Kouk',
        ];

        const filteredResults = data.results.filter((result: { formatted_address: string; types: string[] }) => {
          const addressContainsRelevantArea = relevantAreas.some(area => result.formatted_address.includes(area));
          return result.formatted_address.includes('Phnom Penh') && addressContainsRelevantArea;
        });

        const detailedResults = filteredResults.filter((result: { formatted_address: string }) =>
          /\d/.test(result.formatted_address) || result.formatted_address.includes('Street')
        );

        const addressResult = detailedResults.length > 0 ? detailedResults[0] : filteredResults[0];

        if (addressResult) {
          let address = addressResult.formatted_address;
          address = address.replace(/^Khan\s/, '');
          return address;
        } else {
          return 'Default Address: Street, Sangkat, Khan, City, Country';
        }
      } else {
        return 'Address not found';
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return 'Error fetching address';
    }
  };

  return (
    <div className="space-y-2">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-700">
          {selectedAddress ? `Selected Address: ${selectedAddress}` : 'No location selected'}
        </p>
      </div>
      <Button
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full py-2 px-4 shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300"
        onPress={onOpen}>
        Select Location
      </Button>
      <Modal
        isOpen={isOpen}
        size="lg"
        className="w-[90vw] max-w-[800px]"
        onOpenChange={onOpenChange}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader>Select Location</ModalHeader>
              <ModalBody>
                {isLoaded && (
                  <div className="flex flex-col items-center justify-center">
                    <GoogleMap
                      ref={mapRef}
                      mapContainerStyle={containerStyle}
                      center={defaultCenter}
                      zoom={15}
                      onClick={handleMapClick}
                    >
                      {selectedLocation && <Marker position={selectedLocation} />}
                    </GoogleMap>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onPress={onClose} className="mr-2">
                  Cancel
                </Button>
                <Button onPress={onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MapCreateShopComponent;
