import '.././Style.css';
import React, { useState } from 'react';
import Waveform from './applets/Waveform';

function Home() {
  return (
    <div>
      <br />
      <h1>Welcome to the Schillinger System of Musical Composition!</h1>
      <br />
      <p>Welcome to the Schillinger System of Musical Composition!</p>
      <Waveform />
    </div>
  );
}

export default Home;
