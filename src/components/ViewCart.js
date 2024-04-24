// ViewCart.js
import React from 'react';

function ViewCart({ cart, removeFromCart }) {
  return (
    <div className="view-cart">
      <h4>View Cart</h4>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCart;
