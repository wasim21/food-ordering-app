import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Cart = () => {
  // This would come from global state or a backend in a real app
  const [cart, setCart] = useState([
    { id: 1, name: 'Pizza', price: 9.99, quantity: 1 },
    { id: 2, name: 'Burger', price: 7.99, quantity: 2 },
  ]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Your Cart</h1>
      <ListGroup variant="flush">
        {cart.length > 0 ? (
          cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ListGroup>
      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
      <Button variant="success" className="mt-3">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
 
