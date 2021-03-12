import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Contents() {
  isAuthenticated();
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-3"></Col>
          <Col className="col-6">
            <h1>Table of Contents</h1>
            <hr />
            <Link to="/overture" className="content-links"><h5 className="text-justify">Overture</h5></Link>
            <hr />
            <Link to="/intro" className="content-links"><h5 className="text-justify">Introduction</h5></Link>
            <hr />
            <Link to="/book1" className="content-links"><h5 className="text-justify">Book One: Theory of Rhythm</h5></Link>
            <hr />
            <Link to="/book2" className="content-links"><h5 className="text-justify">Book Two: Theory of Pitch-Scales (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book3" className="content-links"><h5 className="text-justify">Book Three: Variations of Music by Means of Geometrical Projection  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book4" className="content-links"><h5 className="text-justify">Book Four: Theory of Melody  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book5" className="content-links"><h5 className="text-justify">Book Five: Special Theory of Harmony  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book6" className="content-links"><h5 className="text-justify">Book Six: The Correlation of Harmony and Melody  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book7" className="content-links"><h5 className="text-justify">Book Seven: Theory of Counterpoint  (Coming Soon!)</h5></Link>
            <hr />

          </Col>
          <Col className="col-3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contents;
