import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch1Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 1</h1>
        <br />
        <TextToSpeech />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_01.png" alt="book1ch1img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_02.png" alt="book1ch1img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_03.png" alt="book1ch1img3"></img>
        <Row>
          <Col><Link to="/book1ch1" className="content-links"><h5>Back to Chapter 1</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch1Schillinger;