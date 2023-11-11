import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMap, useMapEvents } from 'react-leaflet/hooks';

export default function SearchBlock({ result, setResult }) {

   // const baseObj = {
   //    ipAddress: "192.212.174.101",
   //    timeZone: "-07:00",
   //    locationsCity: "South San Gabriel",
   //    locationsRegion: "California",
   //    locationsPostalCode: "123456",
   //    isp: "Southern California Edison",
   //    lat: 34.04915,
   //    lng: -118.09462,
   // };

   const [input, setInput] = useState("");
   var [resultSB, setResultSB] = useState({});

   useEffect(() => {
      setResult({
         ...result,
         ipAddress: resultSB.ipAddress,
         timeZone: resultSB.timeZone,
         locationsCity: resultSB.locationsCity,
         locationsRegion: resultSB.locationsRegion,
         locationsPostalCode: resultSB.locationsPostalCode,
         isp: resultSB.isp,
         lat: resultSB.lat,
         lng: resultSB.lng,
      });
   }, [resultSB]);

   const onSubmit = (e) => {
      e.preventDefault();
      var ip = input.toString();

      axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_4KUoFiBFxHG1eXz6wa6sOqt9oFplt&ipAddress=' + ip).then(
         res => {
            console.log(res);
            setResultSB({
               ...resultSB,
               ipAddress: res.data.ip,
               timeZone: res.data.location.timezone,
               locationsCity: res.data.location.city,
               locationsRegion: res.data.location.region,
               locationsPostalCode: res.data.location.postalCode,
               isp: res.data.isp,
               lat: res.data.location.lat,
               lng: res.data.location.lng,
            })
         });

   };
   return (
      <form className='search' onSubmit={(e) => onSubmit(e)}>
         <div className='search-container'>
            <input className='search-input' type='text' placeholder='IP XXX.XXX.XXX.XXX' value={input} onChange={(e) => setInput(e.target.value)} />
            <input className='search-submit' type='submit' value="&gt;" />
         </div>
      </form>
   )
};
