import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch14() {
  return (
    <div>
      <Container>
        <br />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.14" id="1.14"><h3>Chapter 14. Rhythms of Variable Velocities</h3></a>
        <a className="chapter-section-link" href="/book1#1.14.a" id="1.14.a"><h5>A. Acceleration in Uniform Groups</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.b" id="1.14.b"><h5>B. Acceleration in Non-uniform Groups</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.c" id="1.14.c"><h5>C. Rubato</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.d" id="1.14.d"><h5>D. Fermata</h5></a>
        <br /> 
        <Row>
          <Col><Link to="/book1ch13" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book2" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Book1Ch14;
