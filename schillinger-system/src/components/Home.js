import '.././Style.css';
// import isAuthenticated from '.././components/authUser';
import React from 'react';
import { Container, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TextToSpeech from "./applets/TextToSpeech";

// function to retrieve and parse applet history items
function getItems(arrName) {
  var schillArr_data = JSON.parse(localStorage.getItem(arrName));
  return schillArr_data;
}

// function to clear local storage (clear applet history button)
function clearStorage() {
  localStorage.clear();
  window.location.reload();
}

function Home() {

  if (localStorage.getItem("schillArr") == null) {

    // make a new array to hold our schillinger applet history, place it in localStorage
    return localStorage.setItem('schillArr', '["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]');
  
  }
  
  // get the current applet history array items
  var schillArr_data = getItems("schillArr");

  return (
    <div>
      <Container>
        <br />
        <h1>Welcome to the Schillinger System of Musical Composition!</h1>
        <br />
        <TextToSpeech text="ae" />
        <p>Welcome to the Schillinger System of Musical Composition!</p>
        <br />
        
      </Container>
    </div>
  );
}

export default Home;
