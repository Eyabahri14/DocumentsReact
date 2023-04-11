
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
     <nav>
        <NavLink  style={({isActive})=>{ return isActive ? {color : "red "} : {color :"blue" } } } 
        to="/products" >Products</NavLink>
       
     </nav>
      
    </div>
  )
}
