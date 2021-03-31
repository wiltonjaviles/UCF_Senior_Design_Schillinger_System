import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch4Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 4</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_01.png" alt="book1ch4img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_02.png" alt="book1ch4img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_03.png" alt="book1ch4img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_04.png" alt="book1ch4img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_05.png" alt="book1ch4img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_06.png" alt="book1ch4img6"></img>
        <Row>
          <Col><Link to="/book1ch4" className="content-links"><h5>Back to Chapter 4</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch4Schillinger;