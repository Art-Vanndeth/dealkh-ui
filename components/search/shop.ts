// @/types/shop.ts
export type Shop = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
  };
  
  // Sample shops
  export const sampleShops: Shop[] = [
    {
      id: '1',
      name: 'Acme Coffee Roasters',
      latitude: 37.7749,
      longitude: -122.4194,
      googleMapsUrl: 'https://www.google.com/maps/place/Acme+Coffee+Roasters/@37.7749,-122.4194,15z/data=!4m5!3m4!1s0x0:0xd7a0dee5ac7a1b52!8m2!3d37.7749!4d-122.4194'
    },
    {
      id: '2',
      name: 'Boba Hut',
      latitude: 37.7810,
      longitude: -122.4150,
      googleMapsUrl: 'https://www.google.com/maps/place/Boba+Hut/@37.7810,-122.4150,15z/data=!4m5!3m4!1s0x0:0x1a8fc2c8d4f12bc3!8m2!3d37.7810!4d-122.4150'
    },
    {
      id: '3',
      name: 'Artisan Bakery',
      latitude: 37.7784,
      longitude: -122.4212,
      googleMapsUrl: 'https://www.google.com/maps/place/Artisan+Bakery/@37.7784,-122.4212,15z/data=!4m5!3m4!1s0x0:0xc2aa3bea395bdd86!8m2!3d37.7784!4d-122.4212'
    },
    {
      id: '4',
      name: 'Organic Grocers',
      latitude: 37.7790,
      longitude: -122.4170,
      googleMapsUrl: 'https://www.google.com/maps/place/Organic+Grocers/@37.7790,-122.4170,15z/data=!4m5!3m4!1s0x0:0xc1a8f7c00d5da8d0!8m2!3d37.7790!4d-122.4170'
    },
    {
      id: '5',
      name: 'Indie Bookstore',
      latitude: 37.7804,
      longitude: -122.4188,
      googleMapsUrl: 'https://www.google.com/maps/place/Indie+Bookstore/@37.7804,-122.4188,15z/data=!4m5!3m4!1s0x0:0x44e270e0d8b3ed90!8m2!3d37.7804!4d-122.4188'
    }
  ];