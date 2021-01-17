import '.././Style.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  
  return (
    <nav>
        <Link to="/" className="nav-link-item">
          <h5>Schillinger System of Musical Composition</h5>
        </Link>
        <ul className="nav-links">
          <Link to="/" className="nav-link-item">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-link-item">
            <li>About</li>
          </Link>
          <Link to="/contents" className="nav-link-item">
            <li>Contents</li>
          </Link>
          <Link to="/recordings" className="nav-link-item">
            <li>Recordings</li>
          </Link>
          <Link to="/account" className="nav-link-item">
            <li>Account</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
