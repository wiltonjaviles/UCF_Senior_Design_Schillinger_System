import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch12Generator from '../../applets/Ch12Generator';

function Book1Ch12() {
  return (
    <div>
      <Container>
        <br />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.12" id="1.12"><h3>Chapter 12. Distributive Powers</h3></a>
        <a className="content-links" href="/book12ch1schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1#1.12.a" id="1.12.a"><h5>A. Continuity of Harmonic Contrasts</h5></a>
        <a className="chapter-section-link" href="/book1#1.12.b" id="1.12.b"><h5>B. Composition of Rhythmic Counterthemes</h5></a>
        <Ch12Generator />
        <br />
        <Row>
          <Col><Link to="/book1ch11" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch13" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch12;
