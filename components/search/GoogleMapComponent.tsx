'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,} from '@react-google-maps/api';

import { Card, CardBody, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useGetShopsQuery } from '@/redux/service/shop';
import { ShopDetail } from '@/types/shopDtail';

type GoogleMapProps = {
  apiKey: string;
};

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const router = useRouter();

  const handleCardClick = (shop: ShopDetail) => {
    router.push(`/shop/${shop.slug}`);
  };

  const { data, isLoading, error } = useGetShopsQuery({
    page: 1,
    size: 10,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [nearbyShops, setNearbyShops] = useState<ShopDetail[]>([]);
  const [selectedShop, setSelectedShop] = useState<ShopDetail | null>(null);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      setMap(map);
    },
    [setMap]
  );

  const onUnmount = useCallback(
    (map: google.maps.Map) => {
      setMap(null);
    },
    [setMap]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({
            lat: latitude,
            lng: longitude,
          });
          setLatitude(latitude);
          setLongitude(longitude);
          findNearbyShops(latitude, longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
  }, [data]);

  const findNearbyShops = (lat: number, lng: number) => {
    if (data?.payload?.list) {
      const filteredShops = data.payload.list.filter((shop: ShopDetail) => {
        const [shopLat, shopLng] = shop.location.split(',').map(parseFloat);
        const distance = calculateDistance(lat, lng, shopLat, shopLng);
        return distance <= 0.5; // 0.5 is 500m square nearby;
      });

      setNearbyShops(filteredShops);
    }
  };

  const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 10,
    zoom: 14,
  };

  return isLoaded ? (
    <div className="flex h-screen w-full flex-row">
      {/* Card Shop Seciton */}
      <div className="w-[70%] overflow-y-auto pr-4 scrollbar-hide">
        {nearbyShops.length > 0 ? (
          nearbyShops.map((shop, index) => (
            <Card
              key={shop.slug}
              isPressable
              onPress={() => handleCardClick(shop)}
              className="my-8 w-full shadow-none"
            >
              <CardBody className="flex flex-row ">
                {/* image section */}
                <div className="h-64 w-1/3 rounded-2xl">
                  <Image
                    className="h-64 w-screen object-cover"
                    src={
                      shop.profile ||
                      'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
                    }
                    alt={shop.name}
                  />
                </div>

                {/* context section */}
                <div className="my-auto ml-8 w-2/3 text-foreground-600">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-foreground-800 dark:text-white">
                      {shop.name.length > 50
                        ? `${shop.name.substring(0, 20)}...`
                        : shop.name || 'Shop Name'}
                    </h5>
                  </a>
                  <p>
                    {shop.description.length > 115
                      ? `${shop.description.substring(0, 115)}...`
                      : shop.description || 'Product Description'}
                  </p>

                  <div className="my-2 flex flex-col gap-1">
                    <p className=" text-foreground-600">
                      Category :{' '}
                      <span className="font-medium text-foreground-900">
                        {shop.shopType || 'Product Category'}
                      </span>
                    </p>
                    <p className="text-sm text-foreground-600">
                      Open :{' '}
                      <span className="text-sm font-medium text-foreground-900">
                        {shop.openAt.slice(0,5)}
                        {"  to  "}
                        {shop.closeAt.slice(0,5)}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                      <span className=" text-sm text-foreground-900 dark:text-white">
                        Available Now.
                        <p>Get Notified.</p>
                      </span>
                    </div>
                    <a
                      href="#"
                      className="h-[37px] w-[130px] rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 pt-2 text-center text-[14px] text-white"
                    >
                      Check Us Out
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <div>Shop Not Found</div>
        )}
      </div>

      {/* Google Map Section */}
      <div className="sticky right-0 top-0 z-10 h-full w-[30%]">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '91%' }}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
        >
          <Marker position={center} />
          {nearbyShops.map((shop, index) => {
            const [shopLat, shopLng] = shop.location.split(',').map(parseFloat);

            return (
              <Marker
                key={index}
                position={{
                  lat: shopLat,
                  lng: shopLng,
                }}
                onMouseOver={() => setSelectedShop(shop)}
              >
                {selectedShop && selectedShop.location === shop.location && (
                  <InfoWindow
                    onCloseClick={() => setSelectedShop(null)}
                    onDomReady={() => {
                      const infoWindowElement =
                        document.querySelector('.gm-style-iw-c');
                      if (infoWindowElement) {
                        infoWindowElement.addEventListener('click', () => {
                          router.push(`/shop/${shop.slug}`);
                        });
                      }
                    }}
                  >
                    <div className="h-44 w-40">
                      <Image
                        className="h-36 w-40 object-cover"
                        src={shop.profile}
                        alt={shop.name}
                      />
                      <p className="mt-2 font-medium text-foreground-900">
                        {shop.name}
                      </p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMapComponent;
