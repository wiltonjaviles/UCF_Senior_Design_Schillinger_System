import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book7() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/contents" className="content-links"><h1>Book Seven (Coming Soon!)</h1></Link>
        <br />
        <Row>
          <Col><Link to="/book6" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/" className="content-links"><h5>Return to Home</h5></Link></Col>
        </Row>
        <br />
      </Container>      
    </div>
  );
}

export default Book7;
