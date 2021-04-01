import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch3Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 3</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_01.png" alt="book1ch3img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_02.png" alt="book1ch3img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_03.png" alt="book1ch3img3"></img>
        <Row>
          <Col><Link to="/book1ch3" className="content-links"><h5>Back to Chapter 3</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch3Schillinger;