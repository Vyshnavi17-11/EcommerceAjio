import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Ajio.css'
function Womens() {
    const navigate = useNavigate();
  return (
    <div class="women">
        <button onClick = {() => navigate('/')}>Home</button>
       

        <img src="https://couponswala.com/blog/wp-content/uploads/2022/11/ajio-sale-for-women.jpg.webp" width="100%"/>
        <div class="column">
            <Link to='/kurtas'> <img src="https://assets.ajio.com/cms/AJIO/WEB/01072023-D-ajio1-WHP-bestdeals-under699-kurtas&kurtis.jpg"/></Link>
          </div>
          <div class= "column">
          <Link to='/tshirt'><img src="https://assets.ajio.com/cms/AJIO/WEB/01072023-D-ajio1-WHP-bestdeals-under399-tshirts.jpg"/></Link>
          </div>
          <div class="column">
            <Link to='/beauty'> <img src="https://assets.ajio.com/cms/AJIO/WEB/01072023-D-ajio1-WHP-bestdeals-under399-beauty.jpg"/></Link>
          </div>
         
    </div>
  )
}

export default Womens