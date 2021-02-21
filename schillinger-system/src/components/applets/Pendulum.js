import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import React from "react";
import '../.././Style.css';

function Pendulum() {
  
  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Pendulum Applet</h2>
          <Form>
            <Form.Group controlId="formLength">
              <Form.Label>Length</Form.Label>
              <Form.Control type="range" min="0.1" max="2" step="0.1" />
            </Form.Group>
            <Form.Group controlId="formPeriod">
              <Form.Label>Angle</Form.Label>
              <Form.Control type="range" min="1" max="179" step="1" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Pendulum;
