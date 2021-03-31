import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch11Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 11</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_01.png" alt="book1ch11img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_02.png" alt="book1ch11img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_03.png" alt="book1ch11img3"></img>
        <Row>
          <Col><Link to="/book1ch11" className="content-links"><h5>Back to Chapter 11</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch11Schillinger;