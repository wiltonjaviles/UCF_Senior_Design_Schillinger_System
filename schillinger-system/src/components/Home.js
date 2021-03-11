import '.././Style.css';
import isAuthenticated from '.././components/authUser';
import React, { useState } from 'react';
import Ch12Generator from './applets/Ch12Generator';
import Speech from 'react-speech';

function Home() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Welcome to the Schillinger System of Musical Composition!</h1>
      <br />
      <p>Welcome to the Schillinger System of Musical Composition!</p>
      <br />
      <Speech 
        textAsButton={true}
        displayText="Listen to this text" 
        text="Welcome to the Schillinger System of Musical Composition!" 
      />
    </div>
  );
}

export default Home;
