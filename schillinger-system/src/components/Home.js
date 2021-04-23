import '.././Style.css';
// import isAuthenticated from '.././components/authUser';
import React from 'react';
import { Container, Button, ButtonGroup, OverlayTrigger, Row, Col, Tooltip } from 'react-bootstrap';
import TextToSpeech from "./applets/TextToSpeech";

// function to retrieve and parse applet history items
function getItems(arrName) {

    var schillArr_data = JSON.parse(localStorage.getItem(arrName));
    return schillArr_data;
  
}

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
        <TextToSpeech />
        {/* <p>Welcome to the Schillinger System of Musical Composition!</p> */}
        {/* <br /> */}
        <h2>Applet History</h2>
        <br />
        <p>Applet History saves previous versions of your executed applets. These actions are ordered from most recent to least recent.</p>
        <p>Hover the buttons below to see the book, chapter, and chapter title that each button corresponds to.</p>
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
              {/* {schillArr_data[9].id} */}
              10
            </Button>
          </OverlayTrigger>
        </ButtonGroup>

        <br /> 
        <br />
        <h1>About this project</h1>
        <Row>
          <p>
            This website was created as a senior design project for University of Central Florida's computer science 
            program.
            Our team is Michael Alaniz, Wilton Aviles, Michael Duke, and Kathryn Wyrick.
            Our sponsor is Richard Leinecker.
          </p>
        </Row>
        <br />
        <p>This project, once completed, will provide a comprehensive Schillinger System learning tool for musicians and software developers that can be used to create computer-assisted musical composition software. Since Schillinger never finished refining his ideas for the System it fell into obscurity after his death. This project aims bring his system back to the forefront of musical composition. It could also provide substantial guidance for composers and software developers to implement Schillinger’s ideas, which has never been done before.</p>
        <p>In addition to the applications in composition software, this project will provide easy access to Schillinger’s system for people who simply want to learn music theory. Since it is more math-based than the traditional system, Schillinger’s System may be easier for some people to understand.</p>
        <p>There is also a small chance that because our project revives interest in Schillinger’s System of Musical Composition, in time it could replace the existing system of composing music. A clear understanding of his ideas could result in a shift in how music is written to his system.</p>
        
        <br />
        <br />
        <h3>Meet the Team:</h3>
        <Row>
          <Col><h5>Richard Leinecker</h5></Col>
          <Col><h5>Michael Alaniz</h5></Col>
          <Col><h5>Wilton Aviles</h5></Col>
          <Col><h5>Michael Duke</h5></Col>
          <Col><h5>Kathryn Wyrick</h5></Col>
        </Row>
        <Row>
          <Col><img className="img-fluid img-thumbnail" src="images/teamphotos/RichardLeinecker.png" alt="LeineckerPhoto"></img></Col>
          <Col><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelAlaniz.png" alt="AlanizPhoto"></img></Col>
          <Col><img className="img-fluid img-thumbnail" src="images/teamphotos/WiltonAviles.png" alt="AvilesPhoto"></img></Col>
          <Col><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelDuke.png" alt="DukePhoto"></img></Col>
          <Col><img className="img-fluid img-thumbnail" src="images/teamphotos/KathrynWyrick.png" alt="WyrickPhoto"></img></Col>
        </Row>
        <Row>
          <Col><p>About Leinecker</p></Col>
          <Col><p>About Michael</p></Col>
          <Col><p>About Wilton</p></Col>
          <Col><p>About Duke</p></Col>
          <Col><p>About Kathryn</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
