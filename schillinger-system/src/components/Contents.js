import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Contents() {
  isAuthenticated();
  return (
    <div>
      <Container>
        <h1>Table of Contents</h1>
        <Link to="/overture" className="content-links"><h3>Overture</h3></Link>
        <Link to="/intro" className="content-links"><h3>Introduction</h3></Link>
        <Link to="/book1" className="content-links"><h3>Book One: Theory of Rhythm</h3></Link>
        <Link to="/book2" className="content-links"><h3>Book Two: Theory of Pitch-Scales (Coming Soon!)</h3></Link>
        <Link to="/book3" className="content-links"><h3>Book Three: Variations of Music by Means of Geometrical Projection  (Coming Soon!)</h3></Link>
        <Link to="/book4" className="content-links"><h3>Book Four: Theory of Melody  (Coming Soon!)</h3></Link>
        <Link to="/book5" className="content-links"><h3>Book Five: Special Theory of Harmony  (Coming Soon!)</h3></Link>
        <Link to="/book6" className="content-links"><h3>Book Six: The Correlation of Harmony and Melody  (Coming Soon!)</h3></Link>
        <Link to="/book7" className="content-links"><h3>Book Seven: Theory of Counterpoint  (Coming Soon!)</h3></Link>
      </Container>
    </div>
  );
}

export default Contents;
