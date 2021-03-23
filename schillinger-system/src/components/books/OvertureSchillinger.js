import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function OvertureSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for the Overture</h1>
        <img class="screenshot" src="images/overture/overture01.png" alt="overtureImg1"></img>
        <img class="screenshot" src="images/overture/overture02.png" alt="overtureImg2" width="auto"></img>
        <Row>
          <Col><Link to="/overture" className="content-links"><h5>Back to the Overture</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default OvertureSchillinger;