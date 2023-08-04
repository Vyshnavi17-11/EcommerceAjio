import React from 'react'
import './Ajio.css'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
function Ajiohome() {
  return (
    <div class="container">
        <nav class="navbar background">
        <div class='navlist'>
          <div class="logo">
            <img src="https://www.dealnloot.com/wp-content/uploads/2019/12/ajio-logo.png" width="30%" height="20%" />
              </div>
                <h1><Link id="navlink" to="/" >Home</Link></h1><br/>
                <h1><Link id="navlink"to="/men">  Mens</Link></h1>
                <h1><Link id="navlink" to="/women">Women</Link></h1>
                <h1><Link id="navlink" to="/cart">Cart
                <FaShoppingCart color="white" font="25px"></FaShoppingCart></Link></h1>
                <input type="text" name="search" id="search"/>
                <button class="btn1">Search</button>
                
                </div>
                </nav>
                <img src="https://lh3.googleusercontent.com/B90GJVxEmuhLU-It_ZpQK4wlCU5O3uOYf3ipr93ZW0mNaJ0UnX1pqaSvXqFjI8hRkSd5lSGwAYGa9Yjz0z_EpU3zFfY=s750" width="90%"/>
                <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1645271874/kg6x6ijcbswlcrgfdqjy.jpg" width="90%"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/06082020-D-AHP-topbanner-P1-60to80.jpg"/>
        
    </div>
                       
     
    
  )
}

export default Ajiohome