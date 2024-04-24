import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

const ViewCart = ({ cartItems, removeFromCart, handleProceed }) => {
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenCart}>
        View Cart ({cartItems.length})
      </Button>
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeFromCart(item)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewCart;