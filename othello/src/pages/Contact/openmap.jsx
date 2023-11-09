/* eslint-disable */
import React from 'react'
import '../../App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

export default function StreetMap() {
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
    <MapContainer
      className="border-t-2 border-black"
      style={{ width: '100%', height: '600px' }}
      center={[53.563999531581786, -0.08794536619049058]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[53.563999531581786, -0.08794536619049058]}>
        <Popup>
          The Othello <br /> We are here
        </Popup>
      </Marker>
    </MapContainer>
  )
}
