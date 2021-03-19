import '.././Style.css';
import isAuthenticated from '.././components/authUser';
import React from 'react';
import Speech from 'react-speech';
import { Container } from 'react-bootstrap';

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
        <Speech 
          textAsButton={true}
          stop={true}
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
