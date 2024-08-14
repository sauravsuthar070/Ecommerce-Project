import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive on your email</h1>
        <p>subscribe to our news letter AND STAY UPDATED</p>
        <div>
            <input type="email" placeholder='enter your email id' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter