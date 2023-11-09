import React from 'react'

export default function Information({ title, text }) {
   return (
      <div className='info-item'>
         <h2 className='info-title'>{title}</h2>
         <p className='info-text'>{text}</p>
      </div>
   )
}
