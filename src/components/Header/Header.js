import React from 'react'


import SearchBlock from './SearchBlock';
import Information from './Information';

import './header.css';

export default function Header({ result, setResult, ChangeView }) {
   var location;
   result.locationsCity ? location = result.locationsCity + ", " + result.locationsRegion + ", " + result.locationsPostalCode : location = undefined
   return (
      <div className='header'>
         <h1 className='title'>IP Address Tracker</h1>
         <SearchBlock result={result} setResult={setResult} ChangeView={ChangeView} />
         <div className='info'>
            <Information title={"IP ADDRESS"} text={result.ipAddress ? result.ipAddress : "_ _ _"} />
            <span className='vert-line'></span>
            <Information title={"LOCATIONS"} text={location ? location : "_ _ _"} />
            <span className='vert-line'></span>
            <Information title={"TIME ZONE"} text={result.timeZone ? result.timeZone : "_ _ _"} />
            <span className='vert-line'></span>
            <Information title={"ISP"} text={result.isp ? result.isp : "_ _ _"} />
         </div>

      </div>
   )
}; 
