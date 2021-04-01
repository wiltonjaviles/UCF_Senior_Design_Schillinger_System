import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch14Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 14</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_01.png" alt="book1ch14img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_02.png" alt="book1ch14img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_03.png" alt="book1ch14img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_04.png" alt="book1ch14img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_05.png" alt="book1ch14img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/screenshots/book1ch14_06.png" alt="book1ch14img6"></img>
        <Row>
          <Col><Link to="/book1ch14" className="content-links"><h5>Back to Chapter 14</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch14Schillinger;