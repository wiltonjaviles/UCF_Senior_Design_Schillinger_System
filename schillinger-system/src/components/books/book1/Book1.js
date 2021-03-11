import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Book1Ch1 from './Book1Ch1';

function Book1() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Book One: Theory of Rhythm</h1>
        <p>This book is about blah blah blah</p>
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/book1ch1#1.1" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1;
