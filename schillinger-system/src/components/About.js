import '.././Style.css';
import {Container, Row, Col} from 'react-bootstrap'

function About() {
  return (
    <div>
      <Container>
        <h1>About this project</h1>
        <Row>
          <p>
            This website was created as a senior design project for University of Central Florida's computer science 
            program.
            Our team is Michael Alaniz, Wilton Aviles, Michael Duke, and Kathryn Wyrick.
            Our sponsor is Richard Leinecker.
          </p>
        </Row>
        <br />
        <p>
          We hope this project will renew interest in Joseph Schillinger's System of Musical Composition!
        </p>
        <br />
        <br />
        <h3>Meet the Team:</h3>
        <Row>
          <Col><p>Richard Leinecker</p></Col>
          <Col><p>Michael Alaniz</p></Col>
          <Col><p>Wilton Aviles</p></Col>
          <Col><p>Michael Duke</p></Col>
          <Col><p>Kathryn Wyrick</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
