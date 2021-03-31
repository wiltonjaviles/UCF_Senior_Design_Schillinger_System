import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch12Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 12</h1>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_01.png" alt="book1ch12img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_02.png" alt="book1ch12img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_03.png" alt="book1ch12img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_04.png" alt="book1ch12img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_05.png" alt="book1ch12img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_06.png" alt="book1ch12img6"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_07.png" alt="book1ch12img7"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_08.png" alt="book1ch12img8"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_09.png" alt="book1ch12img9"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_10.png" alt="book1ch12img10"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_11.png" alt="book1ch12img11"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_12.png" alt="book1ch12img12"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_13.png" alt="book1ch12img13"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch12/screenshots/book1ch12_14.png" alt="book1ch12img14"></img>
        <Row>
          <Col><Link to="/book1ch12" className="content-links"><h5>Back to Chapter 12</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch12Schillinger;