// ProductInformation.js
import React from 'react';

function Products({ number, name, price, id, description }) {
  return (
    <div className="product">
      <h3>{number} Product: {name}</h3>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Products;