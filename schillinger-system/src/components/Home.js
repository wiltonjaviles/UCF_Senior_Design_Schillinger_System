import '.././Style.css';
import isAuthenticated from '.././components/authUser';
import React, { useState } from 'react';
import Ch12Generator from './applets/Ch12Generator';

function Home() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Welcome to the Schillinger System of Musical Composition!</h1>
      <br />
      <p>Welcome to the Schillinger System of Musical Composition!</p>
      <Ch12Generator />
      <br />
    </div>
  );
}

export default Home;
