// CartSummary.js
import React from 'react';

function CartSummary({ cart }) {
  const totalItems = cart.length;

  return (
    <div className="cart-summary">
      <h4>Cart Summary</h4>
      <p>Total Items: {totalItems}</p>
    </div>
  );
}

export default CartSummary;
