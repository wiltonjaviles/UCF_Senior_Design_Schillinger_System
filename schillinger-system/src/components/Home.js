import '.././Style.css';
import isAuthenticated from '.././components/authUser';
import React from 'react';
import Speech from 'react-speech';
import { Container } from 'react-bootstrap';
import Ch2Generator from './applets/Ch2Generator';

function Home() {
  isAuthenticated();
  return (
    <div>
      <Container>
        <br />
        <h1>Welcome to the Schillinger System of Musical Composition!</h1>
        <br />
        <p>Welcome to the Schillinger System of Musical Composition!</p>
        <br />
        <Ch2Generator />
        <Speech 
          textAsButton={true}
          displayText="Listen to this text" 
          text="Welcome to the Schillinger System of Musical Composition!" 
        />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Home;
