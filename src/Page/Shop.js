import React from 'react'
import Hero from '../component/hero/Hero';
import Popular from '../component/Popular/Popular';
import Offers from '../component/Offer/Offers';
import NewCollection from '../component/NewCollection/NewCollection';
import NewsLetter from '../component/NewsLetter/NewsLetter'; 
const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop;