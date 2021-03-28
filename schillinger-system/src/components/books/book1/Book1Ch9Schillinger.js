import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch9Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 9</h1>
        <p></p>
        <Row>
          <Col><Link to="/book1ch9" className="content-links"><h5>Back to Chapter 9</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch9Schillinger;