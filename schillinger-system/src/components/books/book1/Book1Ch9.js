import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch9Generator from '../../applets/Ch9Generator';

function Book1Ch9() {
  return (
    <div>
      <Container>
        <br />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.9" id="1.9"><h3>Chapter 9. Homogeneous Simultaneity and Continuity (Variations)</h3></a>
        <a className="content-links" href="/book1ch9schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1#1.9.a" id="1.9.a"><h5>A. General and Circular Permutations</h5></a>
        <Ch9Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch8" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch10" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch9;
