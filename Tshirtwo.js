import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Tshirtwo() {
    const navigate = useNavigate('');
    function handleClick(){
        alert("added");
    }
  return (
    <div class="container">
        
        <button onClick = {() => navigate('/')}>Home</button>
        <button onClick = {() => navigate('/women')}>Back</button>
      
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220927/bM6x/63332fe0aeb269dbb3aafb41/-473Wx593H-441149347-yellow-MODEL.jpg"/>
            <p >DNMX</p>
            <p > Tie and Dye with Chest Graphic print</p>
            <p>₹254  <strike>₹499</strike> 49% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20230202/WTDC/63db930baeb269c6510bf4fc/-473Wx593H-443005991-khaki-MODEL.jpg"/>
            <p>DNMX</p>
            <p>Printed slim fit</p>
            <p>₹239  <strike>₹299</strike> 20% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20230705/6fBk/64a544bdeebac147fc4eaae1/-473Wx593H-466250805-mauve-MODEL.jpg"/>
            <p>AUSK</p>
            <p>Color-Block print</p>
            <p>₹300  <strike>₹1499</strike> 80% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20230322/9LPp/641b147d711cf97ba7e88c75/-473Wx593H-465940350-black-MODEL.jpg"/>
            <p>MAX</p>
            <p>Stripped Crew-Neck</p>
            <p>₹359  <strike>₹399</strike> 20% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220429/OL0f/626c119daeb26921af4c33b6/-473Wx593H-441141856-peach-MODEL2.jpg"/>
            <p>TEAMSPIRIT</p>
            <p>CREW neck tshirt</p>
            <p>₹288  <strike>₹599</strike> 52% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
        <div class='column'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20230622/9YoU/64937885d55b7d0c639f2f3e/-473Wx593H-466297391-yellow-MODEL.jpg"/>
            <p>LEE COOPER</p>
            <p>Typographic Print Crew-Neck T-shirt</p>
            <p>₹294  <strike>₹599</strike> 51% off</p>
            <Link to='/cart'><button id="cartbtn" >Add to Cart</button></Link>
            <button onClick={handleClick}  id="cartbtn">WishList</button>
        </div>
    </div>
  )
}

export default Tshirtwo