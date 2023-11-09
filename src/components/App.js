import React, { useState } from 'react';

import Header from './Header/Header';
import Body from './Body/Body'
import { MapContainer } from 'react-leaflet';
import ChangeView from './hooks/Changeview';

export default function App() {

   const [result, setResult] = useState({
      ipAddress: undefined,
      timeZone: undefined,
      locationsCity: undefined,
      locationsRegion: undefined,
      locationsPostalCode: undefined,
      isp: undefined,
      lat: 32.7813368,
      lng: -17.0426368,
   });

   return (
      <div id='map'>
         <Header result={result} setResult={setResult} changeView={ChangeView} />
         <MapContainer center={[result.lat, result.lng]} zoom={13} scrollWheelZoom={true} animate={true}>

            {/* <ChangeView center={[result.lat, result.lng]} zoom={13} /> */}
            {result.lat === undefined ? <ChangeView center={[32.7813368, -17.0426368]} zoom={13} /> : <ChangeView center={[result.lat, result.lng]} zoom={13} />}
            {result.lat === undefined ? <Body position={[32.7813368, -17.0426368]} /> : <Body position={[result.lat, result.lng]} />}

         </MapContainer >
      </div>

   )
};
