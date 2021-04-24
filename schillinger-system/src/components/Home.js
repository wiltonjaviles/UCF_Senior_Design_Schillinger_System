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
        <TextToSpeech />
        {/* <p>Welcome to the Schillinger System of Musical Composition!</p> */}
        {/* <br /> */}

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
