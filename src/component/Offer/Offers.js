import React from 'react'
import './Offeres.css'
import exclusive_image from '../Assegts/exclusive_image.png'

function Offers() {
  return (
    <div className='offeres'>
        <div className="offeres-left">
         <h1>Exclusive</h1>
         <h1>Offeres for you</h1>
         <p>Only best seller produts</p>
         <button>check now</button>
        </div>
        <div className="offeres-right">
          <img src={exclusive_image} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Offers