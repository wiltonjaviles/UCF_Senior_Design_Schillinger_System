import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function IntroductionSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for the Introduction</h1>
        <p></p>
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Back to the Introduction</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroductionSchillinger;