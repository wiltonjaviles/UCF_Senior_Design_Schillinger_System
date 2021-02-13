import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function BookTwo() {
  return (
    <div>
      <Container>
        <h1>Book Two (Coming Soon!)</h1>
        <br />
        <Row>
          <Col><Link to="/book1" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/book3" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
      </Container>      
    </div>
  );
}

export default BookTwo;
