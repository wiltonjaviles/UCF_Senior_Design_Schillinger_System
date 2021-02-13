import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function BookSeven() {
  return (
    <div>
      <Container>
        <h1>Book Seven (Coming Soon!)</h1>
        <br />
        <Row>
          <Col><Link to="/book6" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/" className="content-links"><h5>Return to Home</h5></Link></Col>
        </Row>
      </Container>      
    </div>
  );
}

export default BookSeven;
