import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/contents" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <p>Click on Book One: Theory of Rhythm to go back to the Contents Page</p>
        <Row>
          <Col className="col-3"></Col>
          <Col className="col-6">
            <h2>Book One Contents</h2>
            <hr />
            <Link to="/book1ch1" className="content-links"><h5 className="text-left"><strong>Chapter 1.</strong> Notation System</h5></Link>
            <hr />
            <Link to="/book1ch2" className="content-links"><h5 className="text-left"><strong>Chapter 2.</strong> Interferences of Periodicities</h5></Link>
            <hr />
            <Link to="/book1ch3" className="content-links"><h5 className="text-left"><strong>Chapter 3.</strong> The Techniques of Grouping</h5></Link>
            <hr />
            <Link to="/book1ch4" className="content-links"><h5 className="text-left"><strong>Chapter 4.</strong> The Techniques of Fractioning</h5></Link>
            <hr />
            <Link to="/book1ch5" className="content-links"><h5 className="text-left"><strong>Chapter 5.</strong> Composition of Groups by Pairs</h5></Link>
            <hr />
            <Link to="/book1ch6" className="content-links"><h5 className="text-left"><strong>Chapter 6.</strong> Utilization of Three or more Generators</h5></Link>
            <hr />
            <Link to="/book1ch7" className="content-links"><h5 className="text-left"><strong>Chapter 7.</strong> Resultants Applied to Instrumental Forms</h5></Link>
            <hr />
            <Link to="/book1ch8" className="content-links"><h5 className="text-left"><strong>Chapter 8.</strong> Coordination of Time Structures</h5></Link>
            <hr />
            <Link to="/book1ch9" className="content-links"><h5 className="text-left"><strong>Chapter 9.</strong> Homogeneous Simultaneity and Continuity (Variations)</h5></Link>
            <hr />
            <Link to="/book1ch10" className="content-links"><h5 className="text-left"><strong>Chapter 10.</strong> Generalization of Variation Techniques</h5></Link>
            <hr />
            <Link to="/book1ch11" className="content-links"><h5 className="text-left"><strong>Chapter 11.</strong> Composition of Homogeneous Rhythmic Continuity</h5></Link>
            <hr />
            <Link to="/book1ch12" className="content-links"><h5 className="text-left"><strong>Chapter 12.</strong> Distributive Powers</h5></Link>
            <hr />
            <Link to="/book1ch13" className="content-links"><h5 className="text-left"><strong>Chapter 13.</strong> Evolution of Rhythm Styles (Families)</h5></Link>
            <hr />
            <Link to="/book1ch14" className="content-links"><h5 className="text-left"><strong>Chapter 14.</strong> Rhythms of Variable Velocities</h5></Link>
            <hr />

          </Col>
          <Col className="col-3"></Col>
        </Row>
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/book2" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1;
