import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch11Generator from '../../applets/Ch11Generator';

function Book1Ch11() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch11#1.11" id="1.11"><h3>Chapter 11. Composition of Homogeneous Rhythmic Continuity</h3></a>
        <a className="content-links" href="/book1ch11schillinger"><h5>View the source text.</h5></a>
        <br />
        <br />
        <Ch11Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch10" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch12" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch11;
