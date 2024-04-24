import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Product from '../components/Product';
import CartSummary from '../components/CartSummary';
import ViewCart from '../components/ViewCart';

function Shop() {
  const [cart, setCart] = useState([]);
  const [showCartSummary, setShowCartSummary] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== productToRemove.id);
    setCart(updatedCart);
  };

  const handleProceed = () => {
    setShowCartSummary(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>ELECTRO MART</h3>
        <Routes>
          <Route path="/cart-summary" element={<CartSummary cart={cart} isVisible={showCartSummary} />} />
          <Route
            path="/"
            element={
              <>
                <ViewCart cartItems={cart} removeFromCart={removeFromCart} handleProceed={handleProceed} />
                <Product addToCart={addToCart} />
                <Link to="/cart-summary">
                 
                </Link>
              </>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default Shop;
