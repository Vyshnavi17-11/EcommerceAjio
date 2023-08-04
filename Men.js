import React from 'react'
import './Ajio.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Men() {
  const navigate = useNavigate();
  function handleClick(){
    alert("added");
}
  return (
    <div className='mens'>
      <button onClick = {() => navigate('/')}>Home</button>
        
      <img src="https://assets.ajio.com/cms/AJIO/MOBILE/31072023-M-UHP-prebuzz-mainbanner-1024x672.gif" width="100%"/>
      <img src="https://assets.ajio.com/cms/AJIO/MOBILE/01072023-UHP-M-wallet-relianceone1.jpg" width="95%"/>
      <div class="column">
         <img src="https://assets.ajio.com/medias/sys_master/root/20220805/Ss2d/62ed50dbf997dd03e228a2fa/-473Wx593H-469220177-multicolour-MODEL.jpg" width="100%"/>
        <p>THE INDIAN GARAGE CO</p>
        <p>CO Slim Fit Shirt</p>
         <p> ₹647</p>
          <p>MRP₹1,749 (63% OFF)</p>
          <h6>Price inclusive of all taxes</h6>
          <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
      </div>
       <div class="column">
            <img src="https://i.pinimg.com/736x/ce/20/c8/ce20c8cd28c06a65024303f7ce0e1974.jpg"  width="100%"/>
             <p>KETCH</p>
             <p> Slim Fit Shirt with Mandarin Collar</p>
              <p>₹550</p>
               <p>MRP₹1,249 (56% OFF)</p>
                <h6>Price inclusive of all taxes</h6>
                <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>

       </div>
       <div class="column">
           <img src="https://assets.ajio.com/medias/sys_master/root/20230703/ampp/64a2d083eebac147fc476446/lakaala_beige_mandarin_collar_shirt_with_full_sleeves.jpg"  width="100%"/>
           <p>NETPLAY</p>
             <p> Slim Fit Shirt with Mandarin Collar</p>
              <p>₹550</p>
               <p>MRP₹1,249 (56% OFF)</p>
                <h6>Price inclusive of all taxes</h6>
                <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
      </div>
      <div class="column">
           <img src="https://assets.ajio.com/medias/sys_master/root/20230624/gEoj/64964ed7eebac147fcef2676/eyebogler_green_checked_print_polo_t-shirt.jpg"  width="100%"/>
           <p>NETPLAY</p>
             <p> Slim Fit Shirt with Mandarin Collar</p>
              <p>₹550</p>
               <p>MRP₹1,249 (56% OFF)</p>
                <h6>Price inclusive of all taxes</h6>
                <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>

      </div>
      <div class="column">
           <img src="https://assets.ajio.com/medias/sys_master/root/20220429/DA0v/626ae741aeb26921af4965e5/-473Wx593H-441136995-khaki-MODEL.jpg"  width="100%" />
           <p>KETCH</p>
             <p> Slim Fit Shirt with Mandarin Collar</p>
              <p>₹550</p>
               <p>MRP₹1,249 (56% OFF)</p>
                <h6>Price inclusive of all taxes</h6>
                <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
      </div>
      <div class="column">
        <img src="https://assets.ajio.com/medias/sys_master/root/20210518/hNj4/60a3d8b5aeb269a9e3c2147d/-473Wx593H-460907275-yellow-MODEL.jpg" width="100%"/>
        <p>KETCH</p>
             <p> Slim Fit Shirt with Mandarin Collar</p>
              <p>₹550</p>
               <p>MRP₹1,249 (56% OFF)</p>
                <h6>Price inclusive of all taxes</h6>
                <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
      </div>
      
      </div>
      

    
  )
}

export default Men