import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assegts/logo.png'
import cart_icon from '../Assegts/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu , setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div  className='nav-logo'>
        <img src={logo} alt=''/>
         <p>shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}><Link to='/' 
        style={{textDecoration : 'none'}}>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       
        <li onClick={() => setMenu("men")}><Link to='/mens' style={{textDecoration : 'none'}} >mens</Link> {menu==="men"?<hr/>:<></>}</li>
        
        <li onClick={() => setMenu("women")}><Link to='womens' style={{textDecoration : 'none'}}>womens</Link> {menu==="women"?<hr/>:<></>}</li>
      
        <li onClick={() => setMenu("kid")}><Link to='/kids' style={{textDecoration : 'none'}}>kids</Link> {menu==="kid"?<hr/>:<></>}</li>
      
      </ul>
      
      <div className='nav-login-cart'>
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
        
        
       
        <div className='nav-cart-count'>0</div>

      </div>
        

    </div>
  )
}
