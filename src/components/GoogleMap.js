import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as React from "react";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const defaultMapOptions = {};

function Map() {
  const center = useMemo(
    () => ({ lat: 60.160100694180876, lng: 24.944058145469764 }),
    []
  );
  //60.160100694180876, 24.944058145469764
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      defaultOptions={defaultMapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
