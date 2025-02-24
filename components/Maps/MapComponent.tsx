'use client';

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { Shop } from '@/types/shop';

type MapComponentProps = {
  shops: Shop[];
};

export const fetchShops = (): Shop[] => [
  {
    id: 1,
    latitude: 11.5756726,
    longitude: 104.9021685,
    name: 'Coffee​ 612',
    googleMapsUrl: 'https://www.google.com/maps/@11.5756726,104.9021685,21z',
  },
  {
    id: 2,
    latitude: 11.574863,
    longitude: 104.8988427,
    name: "D'August Coffee & Wine",
    googleMapsUrl: 'https://www.google.com/maps/@11.574863,104.8988427,21z',
  },
  {
    id: 3,
    latitude: 11.5781415,
    longitude: 104.9009531,
    name: 'CHASHINE',
    googleMapsUrl: 'https://www.google.com/maps/@11.5781415,104.9009531,21z',
  },
  {
    id: 4,
    latitude: 11.5784219,
    longitude: 104.9008311,
    name: 'Donner Kebab Stand',
    googleMapsUrl: 'https://www.google.com/maps/@11.5784219,104.9008311,21z',
  },
  {
    id: 5,
    latitude: 11.5784466,
    longitude: 104.9006376,
    name: 'ម្លិះកាហ្វេ Mliss Café',
    googleMapsUrl: 'https://www.google.com/maps/@11.5784466,104.9006376,21z',
  },
];

const containerStyle = {
  width: '100%',
  height: '300px',
};

const MapComponent: React.FC<MapComponentProps> = ({ shops }) => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  // console.log(shops);
  const handleMouseOver = useCallback((shop: Shop) => {
    setSelectedShop(shop);
  }, []);

  const handleMouseOut = useCallback(() => {
    setSelectedShop(null);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {shops.map((shop) => (
          <Marker
            key={shop.id}
            position={{ lat: shop.latitude, lng: shop.longitude }}
            onMouseOver={() => handleMouseOver(shop)}
            onMouseOut={handleMouseOut}
          />
        ))}
        {selectedShop && (
          <InfoWindow
            position={{
              lat: selectedShop.latitude,
              lng: selectedShop.longitude,
            }}
            onCloseClick={() => setSelectedShop(null)}
          >
            <div>{selectedShop.name}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
