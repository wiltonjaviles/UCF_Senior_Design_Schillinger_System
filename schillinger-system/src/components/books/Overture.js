import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function Overture() {
  return (
    <div>
      <Container>
        <h1>Overture</h1>
        <p>
          The Schillinger System offers more possibilities for development, 
          as opposed to existing rules that are limiting. Music theory tends 
          to be lacking in terms of creativity. The majority of musical theory 
          is biased and filled with misinterpretations of theories; this evolves 
          into rules that are imposed on students of later generations as rules 
          to follow. Theory writers were not scientists, and scientists did not 
          write musical theory; Joseph Schillinger is the sole scientist who wrote 
          musical theory. He synthesized mathematical logic and theory studies to 
          provide a new approach towards musical composition. The Schillinger System 
          provides possibilities, not limitations like traditional musical theory, 
          while being applicable to all styles of music. He has been criticized for 
          reducing composition to mathematics and for lacking creativity and subjective 
          views.
        </p>
        <Row>
          <Col><Link to="/" className="content-links"><h5>Back to Home</h5></Link></Col>
          <Col><Link to="/intro" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Overture;
