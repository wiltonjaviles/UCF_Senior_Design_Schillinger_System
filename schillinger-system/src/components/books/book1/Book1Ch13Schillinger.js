import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch13Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 13</h1>
        <p></p>
        <Row>
          <Col><Link to="/book1ch13" className="content-links"><h5>Back to Chapter 13</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch13Schillinger;