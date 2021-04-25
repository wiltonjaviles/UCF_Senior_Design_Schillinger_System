import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import anime from "animejs";
import '../.././Style.css';

function Pendulum() {

  var angle = 60;
  var duration = 3000;

  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch1pendulum" target="_blank">Open Applet in New Tab</a>;
  } else {
    pageLink = <button onClick={window.close}>Close Window</button>
  }

  const [state , setState] = useState({
    angle : 60,
    duration : 3000,
  })

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  angle = state.angle;
  duration = state.duration; 
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#rod',
      rotate: [angle, -angle],
      duration: duration,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });      
  });
  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Pendulum Applet</h2>
          <br />
          <br />
          <div id="rod">
            <div id="pivot"></div>
            <div id="ball"></div>
          </div>
          <br />
          <Form>
            <Row className="justify-content-md-center">
              <Col>
                <Form.Group controlId="angle">
                  <Form.Label>Angle</Form.Label>
                  <Form.Control 
                    type="range"
                    min="1" max="120" 
                    className="rangeSlider" onInput={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="duration">
                  <Form.Label>Period</Form.Label>
                  <Form.Control 
                    type="range"
                    min="500" max="2500" step="10"
                    className="rangeSlider" onInput={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <h3>Instructions</h3>
          <p>
            Use the sliders to adjust the starting angle of the pendulum and the length of the period 
            of the pendulum. Observe how both affect the speed of the pendulum's movement!
          </p>
          {pageLink}
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
}

export default Pendulum;
