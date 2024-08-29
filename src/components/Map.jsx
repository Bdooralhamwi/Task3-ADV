// import React from 'react'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer style={{zIndex:-1}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer style={{zIndex:-1}} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
}
