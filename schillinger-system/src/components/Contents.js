import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Contents() {
  isAuthenticated();
  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col className="col-3"></Col>
          <Col className="col-6">
            <h1>Table of Contents</h1>
            <hr />
            <Link to="/overture" className="content-links"><h5 className="text-justify"><strong>Overture</strong></h5></Link>
            <hr />
            <Link to="/intro" className="content-links"><h5 className="text-justify"><strong>Introduction</strong></h5></Link>
            <hr />
            <Link to="/book1" className="content-links"><h5 className="text-justify"><strong>Book One:</strong> Theory of Rhythm</h5></Link>
            <hr />
            <Link to="/book2" className="content-links"><h5 className="text-justify"><strong>Book Two:</strong> Theory of Pitch-Scales (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book3" className="content-links"><h5 className="text-justify"><strong>Book Three:</strong> Variations of Music by Means of Geometrical Projection  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book4" className="content-links"><h5 className="text-justify"><strong>Book Four:</strong> Theory of Melody  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book5" className="content-links"><h5 className="text-justify"><strong>Book Five:</strong> Special Theory of Harmony  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book6" className="content-links"><h5 className="text-justify"><strong>Book Six:</strong> The Correlation of Harmony and Melody  (Coming Soon!)</h5></Link>
            <hr />
            <Link to="/book7" className="content-links"><h5 className="text-justify"><strong>Book Seven:</strong> Theory of Counterpoint  (Coming Soon!)</h5></Link>
            <hr />

          </Col>
          <Col className="col-3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contents;
