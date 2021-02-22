import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import React from "react";
import anime from "animejs";
import '../.././Style.css';

function Pendulum() {

  var angle = 80;
  var duration = 1000;
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
  }, []);
  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Pendulum Applet</h2>
          <br />
          <div id="rod">
            <div id="pivot"></div>
            <div id="ball"></div>
          </div>
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
}

export default Pendulum;
