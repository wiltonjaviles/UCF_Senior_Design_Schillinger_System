import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch2Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 2</h1>
        <br />
        <TextToSpeech />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_01.png" alt="book1ch2img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_02.png" alt="book1ch2img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_03.png" alt="book1ch2img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_04.png" alt="book1ch2img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_05.png" alt="book1ch2img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_06.png" alt="book1ch2img6"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_07.png" alt="book1ch2img7"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch2/screenshots/book1ch2_08.png" alt="book1ch2img8"></img>
        <Row>
          <Col><Link to="/book1ch2" className="content-links"><h5>Back to Chapter 2</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch2Schillinger;