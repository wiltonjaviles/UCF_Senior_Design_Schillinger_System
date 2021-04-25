import '.././Style.css';
import React from 'react';
import { Container, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

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

function AppletHistory() {
    if (localStorage.getItem("schillArr") == null) {

        // make a new array to hold our schillinger applet history, place it in localStorage
        return localStorage.setItem('schillArr', '["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]');
      
      }
      
      // get the current applet history array items
      var schillArr_data = getItems("schillArr");
    
      return (
        <div style = {{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
          <Container>

            <h1>Applet History</h1>
            <br />
            <p>Applet History saves previous versions of your executed applets. These actions are ordered from most recent to least recent.</p>
            <p>Hover the buttons below to see the book, chapter, and chapter title that each button corresponds to.</p>
            <p>Once you click a button it will take you back to that book/chapter while reloading your saved input so that you may run it again and receive the same output.</p>
            <br />

            <Button variant="success" onClick={clearStorage}>
              Clear Applet History
            </Button>

            <br />
            <br />
    
            <ButtonGroup>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[0].id} <br /> Title: {schillArr_data[0].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[0].id}`}>
                  1
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[1].id} <br /> Title: {schillArr_data[1].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[1].id}`}>
                  2
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[2].id} <br /> Title: {schillArr_data[2].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[2].id}`}>
                  3
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[3].id} <br /> Title: {schillArr_data[3].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[3].id}`}>
                  4
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[4].id} <br /> Title: {schillArr_data[4].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[4].id}`}>
                  5
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[5].id} <br /> Title: {schillArr_data[5].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[5].id}`}>
                  6
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[6].id} <br /> Title: {schillArr_data[6].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[6].id}`}>
                  7
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[7].id} <br /> Title: {schillArr_data[7].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[7].id}`}>
                  8
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[8].id} <br /> Title: {schillArr_data[8].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[8].id}`}>
                  9
                </Button>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Book/Chapter: {schillArr_data[9].id} <br /> Title: {schillArr_data[9].title}</Tooltip>} placement="bottom">
                <Button variant="success" href={`/${schillArr_data[9].id}`}>
                  10
                </Button>
              </OverlayTrigger>
            </ButtonGroup>
    
            <br /> 
            <br />
          </Container>
        </div>
      );
    }
    
    export default AppletHistory;