import React from "react"
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from "react-leaflet";

import './body.css';
import './leaflet.css';

export default function Body({ position }) {
   return (

      <div>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={position}>
            <Popup>You are here</Popup>
         </Marker>
      </div >
   )
}
