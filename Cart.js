import React from 'react'
import './Ajio.css'
import { useNavigate } from 'react-router-dom';
function Cart() {
  const navigate = useNavigate('');
  function handleClick(){
    alert("added");
}

  return (

    <div class="container">
      <button onClick = {() => navigate('/')}>Back</button>
        <h1>Your Cart</h1>
        <button id="center" onClick={handleClick}>Confirm your Order</button>
        <table>
          <tr>
            <td></td>
          </tr>
        </table>
    </div>
    
  )
}

export default Cart