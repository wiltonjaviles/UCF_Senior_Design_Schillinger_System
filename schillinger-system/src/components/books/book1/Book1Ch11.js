import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch11() {
  return (
    <div>
      <Container>
        <br />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.11" id="1.11"><h3>Chapter 11. Composition of Homogeneous Rhythmic Continuity</h3></a>
        <br /> 
        <Row>
          <Col><Link to="/book1ch10" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch12" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch11;
