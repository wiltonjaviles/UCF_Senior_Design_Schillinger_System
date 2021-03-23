import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch10Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 10</h1>
        <img class="screenshot" src="images/book1/ch10/screenshots/book1ch10_01.png" alt="book1ch10img1"></img>
        <img class="screenshot" src="images/book1/ch10/screenshots/book1ch10_02.png" alt="book1ch10img2"></img>
        <img class="screenshot" src="images/book1/ch10/screenshots/book1ch10_03.png" alt="book1ch10img3"></img>
        <img class="screenshot" src="images/book1/ch10/screenshots/book1ch10_04.png" alt="book1ch10img4"></img>
        <Row>
          <Col><Link to="/book1ch10" className="content-links"><h5>Back to Chapter 10</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch10Schillinger;