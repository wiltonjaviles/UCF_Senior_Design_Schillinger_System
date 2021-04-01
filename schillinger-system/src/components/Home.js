import '.././Style.css';
import isAuthenticated from '.././components/authUser';
import React from 'react';
import Speech from 'react-speech';
import { Container, Button, ButtonGroup } from 'react-bootstrap';

function getItems(arrName) {

    var schillArr_data = JSON.parse(localStorage.getItem(arrName));
    return schillArr_data;
  
}

function Home() {

  // isAuthenticated();

  if (localStorage.getItem("schillArr") == null) {

    // make a new array to hold our schillinger applets, place it in localStorage
    return localStorage.setItem('schillArr', '["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]');
  
  }
  
  var schillArr_data = getItems("schillArr");
  console.log(schillArr_data);

  // if the array is undefined, make a new array
  // if (localStorage.getItem('schillArr') === null) {

  //   // make a new array to hold our schillinger applets, place it in localStorage
  //   localStorage.setItem('schillArr', '[]');

  //   // grab the current array sitting in local storage
  //   var schillArr_data = JSON.parse(localStorage.getItem('schillArr'));
    
  //   // use unshift to push the new applet ID to the front of the array
  //   // schillArr_data.unshift(new_data);

  //   // update the schillinger applet array in localStorage
  //   localStorage.setItem('schillArr', JSON.stringify(schillArr_data));

  // }

  return (
    <div>
      <Container>
        <br />
        <h1>Welcome to the Schillinger System of Musical Composition!</h1>
        <br />
        <p>Welcome to the Schillinger System of Musical Composition!</p>
        <br />
        <h2>Applet History</h2>
        <ButtonGroup aria-label="Hello Test">
          <Button variant="success" href={`/${schillArr_data[0].id}`} size="sm">
            {schillArr_data[0].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[1]}`} size="sm">
            {schillArr_data[1].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[2]}`} size="sm">
            {schillArr_data[2].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[3]}`} size="sm">
            {schillArr_data[3].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[4]}`} size="sm">
            {schillArr_data[4].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[5]}`} size="sm">
            {schillArr_data[5].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[6]}`} size="sm">
            {schillArr_data[6].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[7]}`} size="sm">
            {schillArr_data[7].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[8]}`} size="sm">
            {schillArr_data[8].id}
          </Button>
          <Button variant="success" href={`/${schillArr_data[9]}`} size="sm">
            {schillArr_data[9].id}
          </Button>
        </ButtonGroup>
        <br />
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
