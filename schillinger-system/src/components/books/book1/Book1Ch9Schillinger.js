import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch9Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 9</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_01.png" alt="book1ch9img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_02.png" alt="book1ch9img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_03.png" alt="book1ch9img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_04.png" alt="book1ch9img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_05.png" alt="book1ch9img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_06.png" alt="book1ch9img6"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_07.png" alt="book1ch9img7"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_08.png" alt="book1ch9img8"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_09.png" alt="book1ch9img9"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_10.png" alt="book1ch9img10"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_11.png" alt="book1ch9img11"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_12.png" alt="book1ch9img12"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_13.png" alt="book1ch9img13"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_14.png" alt="book1ch9img14"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_15.png" alt="book1ch9img15"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_16.png" alt="book1ch9img16"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/screenshots/book1ch9_17.png" alt="book1ch9img17"></img>
        <Row>
          <Col><Link to="/book1ch9" className="content-links"><h5>Back to Chapter 9</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch9Schillinger;