import React from 'react';

// Interface for Map props with flexible location and API key
interface MapProps {
  location: string | { lat: number; lng: number };
  width?: string;
  height?: string;
  apiKey?: string;
}

const MapUser: React.FC<MapProps> = ({ location, width = "300px", height = "160px", apiKey }) => {
  // Construct the map URL based on location type
  let src: string;
  if (typeof location === 'string') {
    src = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=${apiKey}`;
  } else {
    const { lat, lng } = location;
    src = `https://www.google.com/maps/embed/v1/view?center=${lat},${lng}&zoom=14&key=${apiKey}`;
  }

  return (
    <div className="map-container" style={{ width, height }}>
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapUser;
