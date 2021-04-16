import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch13Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 13</h1>
        <br />
        <TextToSpeech />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_01.png" alt="book1ch13img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_02.png" alt="book1ch13img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_03.png" alt="book1ch13img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_04.png" alt="book1ch13img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_05.png" alt="book1ch13img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/screenshots/book1ch13_06.png" alt="book1ch13img6"></img>
        <Row>
          <Col><Link to="/book1ch13" className="content-links"><h5>Back to Chapter 13</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch13Schillinger;