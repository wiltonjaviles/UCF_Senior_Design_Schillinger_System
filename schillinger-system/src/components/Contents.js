import '.././Style.css';
import {Link} from 'react-router-dom';

function Contents() {
  return (
    <div>
      <h1>Table of Contents</h1>
      <Link to="/book1" className="content-links"><h3>Book One: Theory of Rhythm</h3></Link>
    </div>
  );
}

export default Contents;
