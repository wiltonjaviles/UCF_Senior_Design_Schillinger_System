import '.././Style.css';
import Pendulum from './applets/Pendulum';
import React, { useState } from 'react';

function Home() {
  return (
    <div>
      <br />
      <h1>Welcome to the Schillinger System of Musical Composition!</h1>
      <br />
      <p>Welcome to the Schillinger System of Musical Composition!</p>
      <Pendulum />
    </div>
  );
}

export default Home;
