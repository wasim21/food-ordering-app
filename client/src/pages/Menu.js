import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Menu.css'; // Import the CSS file for styling

const Menu = () => {
  // Menu items categorized by cuisine
  const cuisines = [
    {
      name: "North Indian",
      items: [
        {
          id: 1,
          name: "Butter Chicken",
          description: "A rich and creamy chicken curry.",
          price: "$12",
          image: "/assets/images/butter-chicken.jpg",
        },
        {
          id: 2,
          name: "Paneer Tikka",
          description: "Marinated paneer cubes grilled to perfection.",
          price: "$10",
          image: "/assets/images/paneer-tikka.jpg",
        },
      ],
    },
    {
      name: "South Indian",
      items: [
        {
          id: 3,
          name: "Masala Dosa",
          description: "Crispy crepes filled with spiced potatoes.",
          price: "$8",
          image: "/assets/images/masala-dosa.jpg",
        },
        {
          id: 4,
          name: "Sambar",
          description: "A lentil-based vegetable stew.",
          price: "$6",
          image: "/assets/images/sambar.jpg",
        },
      ],
    },
    {
      name: "Mexican",
      items: [
        {
          id: 5,
          name: "Tacos",
          description: "Corn tortillas filled with delicious ingredients.",
          price: "$9",
          image: "/assets/images/tacos.jpg",
        },
        {
          id: 6,
          name: "Enchiladas",
          description: "Tortillas rolled around a filling and covered with sauce.",
          price: "$11",
          image: "/assets/images/enchiladas.jpg",
        },
      ],
    },
    // Add more cuisines and items as needed
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Menu</h1>
      {cuisines.map((cuisine, index) => (
        <div key={index} className="cuisine-section mb-5">
          <h2>{cuisine.name}</h2>
          <Row>
            {cuisine.items.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>
                      <strong>{item.price}</strong>
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Menu;
