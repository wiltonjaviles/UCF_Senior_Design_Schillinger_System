import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch8Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 8</h1>
        <br />
        <TextToSpeech 
          text="
          
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_01.png" alt="book1ch8img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_02.png" alt="book1ch8img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_03.png" alt="book1ch8img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_04.png" alt="book1ch8img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_05.png" alt="book1ch8img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_06.png" alt="book1ch8img6"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_07.png" alt="book1ch8img7"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_08.png" alt="book1ch8img8"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_09.png" alt="book1ch8img9"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_10.png" alt="book1ch8img10"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_11.png" alt="book1ch8img11"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch8/screenshots/book1ch8_12.png" alt="book1ch8img12"></img>
        <Row>
          <Col><Link to="/book1ch8" className="content-links"><h5>Back to Chapter 8</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch8Schillinger;