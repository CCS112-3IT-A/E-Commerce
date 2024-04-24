// Shop.js
import React, { useState } from 'react';
import Product from '../components/Product';
import CartSummary from '../components/CartSummary';
import ViewCart from '../components/ViewCart';

function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.id !== productToRemove.id);
    setCart(updatedCart);
  };

  return (
    <div className="Shop">
      <header className="Shop-header">
        <h3>An E-commerce Product Page</h3>
        <CartSummary cart={cart} />
        <ViewCart cart={cart} removeFromCart={removeFromCart} />
        <Product addToCart={addToCart} />
      </header>
    </div>
  );
}

export default Shop;
