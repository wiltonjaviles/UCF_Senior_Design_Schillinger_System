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
        <h2>Introduction</h2>
        <p>The <b>Schillinger System of Musical Composition</b>, named after Joseph Schillinger, is a method of musical composition based on mathematical processes. It comprises theories of rhythm, harmony, melody, counterpoint, form and semantics (emotional meaning, as in movie music). It offers a systematic and non-genre approach to music analysis and composition, a descriptive rather than prescriptive grammar of music. The Schillinger System might have served as a road map for many later developments in music theory and composition. Instead, it languished in relative obscurity <a href="https://en.wikipedia.org/wiki/Schillinger_System">(source)</a>.</p>
        <p><b>Joseph Moiseyevich Schillinger</b> (1895-1943), was a composer, music theorist, and composition teacher; he was born in Kharkiv, in the Kharkov Governorate of the Russian Empire (present-day Ukraine) and died in New York City <a href="https://en.wikipedia.org/wiki/Joseph_Schillinger">(source)</a>.</p>
        <img className="img-fluid img-thumbnail" src="images/schillinger/JosephSchillinger.png" alt="SchillingerPhoto"></img>
        <br />
        <br /> 
        <br />
        <h2>About this project</h2>
        <Row>
          <p>
            This website was created as a senior design project for University of Central Florida's computer science 
            program.
            Our team is Michael Alaniz, Wilton Aviles, Michael Duke, and Kathryn Wyrick.
            Our sponsor is Dr. Richard Leinecker.
          </p>
        </Row>
        
        <p>This project, once completed, will provide a comprehensive Schillinger System learning tool for musicians and software developers that can be used to create computer-assisted musical composition software. Since Schillinger never finished refining his ideas for the System it fell into obscurity after his death. This project aims bring his system back to the forefront of musical composition. It could also provide substantial guidance for composers and software developers to implement Schillinger’s ideas, which has never been done before.</p>
        <p>In addition to the applications in composition software, this project will provide easy access to Schillinger’s system for people who simply want to learn music theory. Since it is more math-based than the traditional system, Schillinger’s System may be easier for some people to understand.</p>
        <p>There is also a small chance that because our project revives interest in Schillinger’s System of Musical Composition, in time it could replace the existing system of composing music. A clear understanding of his ideas could result in a shift in how music is written to his system.</p>
        
        <br />
        <br />
        <h3>Meet the Team:</h3>
        <Row>
          <Col><h4>Dr. Richard Leinecker</h4><br/><h5>Sponsor</h5><br/><img className="img-fluid img-thumbnail" src="images/teamphotos/RichardLeinecker.png" alt="LeineckerPhoto"></img></Col>
          <Col><br/><br/><p>Rick has worked on a wide variety of projects as lead software engineer. This includes enterprise-level applications as well as kernel-level security applications as senior software engineer at MCI. Rick started life as a musician, playing in the Miami philharmonic. Beginning as an undergraduate, he has written hundreds of fine pieces of music for large orchestra, small ensemble, and soloists. Rick does research on a regular basis. Much of it is within the area of data compression. He also researches computer assisted music composition, and is currently writing about Hindemith music composition and the Schillinger system of musical composition.</p></Col>
        </Row>
        <Row><br/></Row>
        <Row>
          <Col><h4>Michael Alaniz</h4><br/><h5>Full Stack Float</h5><br/><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelAlaniz.png" alt="AlanizPhoto"></img></Col>
          <Col><br/><br/><p>Stuff about Michael</p></Col>
        </Row>
        <Row><br/></Row>
        <Row>
          <Col><h4>Wilton Aviles</h4><br/><h5>Project Manager</h5><br/><img className="img-fluid img-thumbnail" src="images/teamphotos/WiltonAviles.png" alt="AvilesPhoto"></img></Col>
          <Col><br/><br/><p>About Wilton</p></Col>
        </Row>
        <Row><br/></Row>
        <Row>
          <Col><h4>Michael Duke</h4><br/><h5>Document Lead, Applet Design</h5><br/><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelDuke.png" alt="DukePhoto"></img></Col>
          <Col><br/><br/><p>Stuff about Duke</p></Col>
        </Row>
        <Row><br/></Row>
        <Row>
          <Col><h4>Kathryn Wyrick</h4><br/><h5>Front End, Applet Implementation</h5><br/><img className="img-fluid img-thumbnail" src="images/teamphotos/KathrynWyrick.png" alt="WyrickPhoto"></img></Col>
          <Col><br/><br/><p>Stuff About Kathryn</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
