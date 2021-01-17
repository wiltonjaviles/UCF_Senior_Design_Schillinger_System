import '.././Style.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
        <Link style={navStyle} to="/">
          <h3>Schillinger System of Musical Composition</h3>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/contents">
            <li>Contents</li>
          </Link>
          <Link style={navStyle} to="/recordings">
            <li>Recordings</li>
          </Link>
          <Link style={navStyle} to="/account">
            <li>Account</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
