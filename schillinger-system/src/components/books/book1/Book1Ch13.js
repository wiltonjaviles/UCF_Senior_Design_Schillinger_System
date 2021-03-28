import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch13() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch13#1.13" id="1.13"><h3>Chapter 13. Evolution of Rhythm Styles (Families)</h3></a>
        <a className="content-links" href="/book1ch13schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1ch13#1.13.a" id="1.13.a"><h5>A. Swing Music</h5></a>
        <br /> 
        <Row>
          <Col><Link to="/book1ch12" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch14" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch13;
