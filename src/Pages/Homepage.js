import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="mb-5 justify-content-center">
        <Container>
          <Navbar.Brand href="#" className="mx-auto">ElectroMart</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5 pt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">Welcome to ElectroMart</h1>
            <p className="lead text-center mb-5">
              Welcome to ElectroMart, your one-stop destination for all your
              electronic needs. Explore our wide range of products and find the
              perfect fit for your lifestyle.
            </p>
            <div className="d-flex justify-content-center">
              <Link to="/shop">
                <Button variant="primary" size="lg">
                  Go to Shop
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
