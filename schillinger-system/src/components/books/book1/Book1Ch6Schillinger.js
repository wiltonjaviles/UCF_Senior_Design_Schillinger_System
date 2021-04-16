import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch6Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 6</h1>
        <br />
        <TextToSpeech />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_01.png" alt="book1ch6img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_02.png" alt="book1ch6img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_03.png" alt="book1ch6img3"></img>
        <Row>
          <Col><Link to="/book1ch6" className="content-links"><h5>Back to Chapter 6</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch6Schillinger;