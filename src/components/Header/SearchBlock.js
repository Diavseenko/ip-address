import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMap, useMapEvents } from 'react-leaflet/hooks';

export default function SearchBlock({ result, setResult }) {

   const baseObj = {
      ipAddress: "192.212.174.101",
      timeZone: "-07:00",
      locationsCity: "South San Gabriel",
      locationsRegion: "California",
      locationsPostalCode: "123456",
      isp: "Southern California Edison",
      lat: 34.04915,
      lng: -118.09462,
   };

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
      let infoSB = Object.assign(resultSB);
      // let result = [];
      // infoSB.map((inf) => {
      //    if (inf[0] === 'ipAddress') {
      //       result.push(inf)
      //    } else if (inf[0] === 'ipAddress') {
      //       result.push(inf)
      //    } else if (inf[0] === 'ipAddress') {
      //       result.push(inf)
      //    } else if (inf[0] === 'ipAddress') {
      //       result.push(inf)
      //    }

      // })
      // setInfo(info.map((inf) => {
      //    inf[0] = []push(infoSB[0])
      // }))
   }, [resultSB]);


   const onSubmit = (e) => {
      e.preventDefault();
      // var ip = input.toString();

      // axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_4KUoFiBFxHG1eXz6wa6sOqt9oFplt&ipAddress=' + ip).then(
      //    res => {
      //       console.log(res);
      //       resultSB.ipAddress = res.data.ip;
      //       resultSB.timeZone = res.data.location.timezone;
      //       resultSB.locations = res.data.location.city + res.data.location.region + res.data.location.postalCode;
      //       resultSB.isp = res.data.isp;
      //       resultSB.lat = res.data.location.lat;
      //       resultSB.lng = res.data.location.lng;
      //       cc
      //    });
      // ChangeView([baseObj.lat, baseObj.lng], 13);

      return setResultSB({
         ...resultSB,
         ipAddress: baseObj.ipAddress,
         timeZone: baseObj.timeZone,
         locationsCity: baseObj.locationsCity,
         locationsRegion: baseObj.locationsRegion,
         locationsPostalCode: baseObj.locationsPostalCode,
         isp: baseObj.isp,
         lat: baseObj.lat,
         lng: baseObj.lng,
      });

      // resultSB.ipAddress = baseObj.ipAddress;
      // resultSB.timeZone = baseObj.timeZone;
      // resultSB.locationsCity = baseObj.locationsCity;
      // resultSB.locationsRegion = baseObj.locationsRegion;
      // resultSB.locationsPostalCode = baseObj.locationsPostalCode;
      // resultSB.isp = baseObj.isp;
      // resultSB.lat = baseObj.lat;
      // resultSB.lng = baseObj.lng;
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
