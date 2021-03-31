import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch5Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 5</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_01.png" alt="book1ch5img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_02.png" alt="book1ch5img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_03.png" alt="book1ch5img3"></img>
        <Row>
          <Col><Link to="/book1ch5" className="content-links"><h5>Back to Chapter 5</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch5Schillinger;