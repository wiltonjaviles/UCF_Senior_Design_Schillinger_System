import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch10() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch10#1.10" id="1.10"><h3>Chapter 10. Generalization of Variation Techniques</h3></a>
        <a className="content-links" href="/book1ch10schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1ch10#1.10.a" id="1.10.a"><h5>A. Permutations of the Higher Order</h5></a>
        <br /> 
        <Row>
          <Col><Link to="/book1ch9" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch11" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch10;
