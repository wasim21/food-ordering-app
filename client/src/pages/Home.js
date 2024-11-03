import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import the CSS file for additional styling

const Home = () => {
  return (
    <Container className="text-center mt-5 home-container">
      <Row>
        <Col>
          <h1>Welcome to the SnapEats</h1>
          <p className="lead">
            Discover delicious meals and order from the comfort of your home!
          </p>
          <p>
            Our app features a variety of cuisines to suit all tastes. 
            Whether you’re craving Italian, Mexican, or a classic burger, 
            we've got you covered! Enjoy seamless ordering and quick delivery.
          </p>
          <p>
            Sign up now to enjoy exclusive discounts and offers, and don’t miss 
            out on our special deals every week!
          </p>
          <div>
            <Link to="/menu">
              <Button variant="primary" className="m-2">
                View Menu
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="success" className="m-2">
                Go to Cart
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
