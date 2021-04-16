import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch7Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 7</h1>
        <br />
        <TextToSpeech />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_01.png" alt="book1ch7img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_02.png" alt="book1ch7img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_03.png" alt="book1ch7img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_04.png" alt="book1ch7img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_05.png" alt="book1ch7img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_06.png" alt="book1ch7img6"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch7/screenshots/book1ch7_07.png" alt="book1ch7img7"></img>
        <Row>
          <Col><Link to="/book1ch7" className="content-links"><h5>Back to Chapter 7</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch7Schillinger;