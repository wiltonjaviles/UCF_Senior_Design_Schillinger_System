import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function BookThree() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/contents" className="content-links"><h1>Book Three (Coming Soon!)</h1></Link>
        <br />
        <Row>
          <Col><Link to="/book2" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/book4" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
        <br />
      </Container>      
    </div>
  );
}

export default BookThree;
