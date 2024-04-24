import React from 'react';
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartSummary({ cart }) {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Cart Summary</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Text>Total Items: {cart.length}</Card.Text>
        <Card.Text>Total Price: ${totalPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartSummary;