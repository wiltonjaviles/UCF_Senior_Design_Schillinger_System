import '.././Style.css';
// import isAuthenticated from '.././components/authUser';
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TextToSpeech from "./applets/TextToSpeech";

function Home() {
  return (
    <div>
      <Container>
        <br />
        <h1>Welcome to the Schillinger System of Musical Composition!</h1>
        <hr />
        <br />
        <TextToSpeech 
          text="Welcome to the Schillinger System of Musical Composition!
          Introduction.
          The Schillinger System of Musical Composition, named after Joseph Schillinger, is a method of musical composition based on mathematical processes. 
          It comprises theories of rhythm, harmony, melody, counterpoint, form and semantics (emotional meaning, as in movie music). 
          It offers a systematic and non-genre approach to music analysis and composition, a descriptive rather than prescriptive grammar of music. 
          The Schillinger System might have served as a road map for many later developments in music theory and composition. 
          Instead, it languished in relative obscurity .
          Joseph Moiseyevich Schillinger (1895-1943), was a composer, music theorist, and composition teacher; he was born in Kharkiv, in the Kharkov Governorate of the Russian Empire (present-day Ukraine) and died in New York City .
          his website was created as a senior design project for University of Central Florida's computer science program. Our team is Michael Alaniz, Wilton Aviles, Michael Duke, and Kathryn Wyrick. Our sponsor is Dr. Richard Leinecker.
          This project, once completed, will provide a comprehensive Schillinger System learning tool for musicians and software developers that can be used to create computer-assisted musical composition software. Since Schillinger never finished refining his ideas for the System it fell into obscurity after his death. This project aims bring his system back to the forefront of musical composition. It could also provide substantial guidance for composers and software developers to implement Schillinger’s ideas, which has never been done before.
          In addition to the applications in composition software, this project will provide easy access to Schillinger’s system for people who simply want to learn music theory. Since it is more math-based than the traditional system, Schillinger’s System may be easier for some people to understand.
          There is also a chance that our project revives interest in Schillinger’s System of Musical Composition and in time it could replace the existing system of composing music. A clear understanding of his ideas could result in a shift in how music is written to his system.
          Meet the Team:
          Dr. Richard Leinecker
          Sponsor
          Rick has worked on a wide variety of projects as lead software engineer. 
          This includes enterprise-level applications as well as kernel-level security applications as senior software engineer at MCI.
          Rick started life as a musician, playing in the Miami philharmonic. Beginning as an undergraduate, he has written hundreds of fine pieces of music for large orchestra, small ensemble, and soloists. Rick does research on a regular basis. Much of it is within the area of data compression. He also researches computer assisted music composition, and is currently writing about Hindemith music composition and the Schillinger system of musical composition.
          
          "
        />
        <br />
        <h2>Introduction</h2>
        <p>The <b>Schillinger System of Musical Composition</b>, named after Joseph Schillinger, is a method of musical composition based on mathematical processes. It comprises theories of rhythm, harmony, melody, counterpoint, form and semantics (emotional meaning, as in movie music). It offers a systematic and non-genre approach to music analysis and composition, a descriptive rather than prescriptive grammar of music. The Schillinger System might have served as a road map for many later developments in music theory and composition. Instead, it languished in relative obscurity <a href="https://en.wikipedia.org/wiki/Schillinger_System" target="_blank" rel="noopener noreferrer">(source)</a>.</p>
        <p><b>Joseph Moiseyevich Schillinger</b> (1895-1943), was a composer, music theorist, and composition teacher; he was born in Kharkiv, in the Kharkov Governorate of the Russian Empire (present-day Ukraine) and died in New York City <a href="https://en.wikipedia.org/wiki/Joseph_Schillinger" target="_blank" rel="noopener noreferrer">(source)</a>.</p>
        <Row>
          <Col></Col>
          <Col><img className="img-fluid img-thumbnail" src="images/schillinger/JosephSchillinger.png" alt="SchillingerPhoto"></img></Col>
          <Col></Col>
        </Row>
        <br />
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
        <hr />
        <br />
        <h3>Meet the Team:</h3>
        <Row>
          <Col className=""><h4>Dr. Richard Leinecker</h4></Col>
        </Row>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-3"><img className="img-fluid img-thumbnail" src="images/teamphotos/RichardLeinecker.png" alt="LeineckerPhoto"></img><h5>Sponsor</h5></Col>
          <Col><p className="bookText">
            Rick has worked on a wide variety of projects as lead software engineer. This includes enterprise-level applications as well as kernel-level security applications as senior software engineer at MCI. Rick started life as a musician, playing in the Miami philharmonic. Beginning as an undergraduate, he has written hundreds of fine pieces of music for large orchestra, small ensemble, and soloists.
            Rick does research on a regular basis. Much of it is within the area of data compression. He also researches computer assisted music composition, and is currently writing about Hindemith music composition and the Schillinger system of musical composition.
            </p></Col>
          <Col className="col-1"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className=""><h4>Michael Alaniz</h4></Col>
        </Row>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-3"><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelAlaniz.png" alt="AlanizPhoto"></img><h5>Full Stack Float</h5></Col>
          <Col>
            <p className="bookText">
              Michael Alaniz is a Computer Science graduate from UCF, Spring 2021, and was a member of the first team to work on the Learn Schillinger project. He was in charge of the Web Server implementation, management, and a Full-Stack float.
              Michael enjoys playing the piano, music production, machine learning, and deep learning. <a href="https://www.linkedin.com/in/michael-alaniz-825393136/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </p>
          </Col>
          <Col className="col-1"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className=""><h4>Wilton Aviles</h4></Col>
        </Row>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-3"><img className="img-fluid img-thumbnail" src="images/teamphotos/WiltonAviles.png" alt="AvilesPhoto"></img><h5>Project Manager</h5></Col>
          <Col>
            <p className="bookText">
              Wilton Aviles is a Computer Science graduate from the University of Central Florida, Spring 2021, and was a member of the first team to work on this project. He was the project manager and was in charge of filling website, delegating tasks, design decisions, and making sure the team was prompt and completing tasks in a timely manner.
              He has enjoyed music since an early age, and has produced music for various musicians throughout his time in college. He enjoys coding, music, video games, basketball, and being a student of life.
              Wilton was involved with the Engineering Leadership and Innovation Institute at UCF (eli<sup>2</sup>) as a Student Leader and Project Lead. <a href="https://www.linkedin.com/in/wilton-jose-aviles/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </p>
          </Col>
          <Col className="col-1"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className=""><h4>Michael Duke</h4></Col>
        </Row>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-3"><img className="img-fluid img-thumbnail" src="images/teamphotos/MichaelDuke.png" alt="DukePhoto"></img><h5>Document Lead, Applet Design</h5></Col>
          <Col><p className="bookText">Stuff about Duke</p></Col>
          <Col className="col-1"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className=""><h4>Kathryn Wyrick</h4></Col>
        </Row>
        <Row>
          <Col className="col-1"></Col> 
          <Col className="col-3"><img className="img-fluid img-thumbnail" src="images/teamphotos/KathrynWyrick.png" alt="WyrickPhoto"></img><h5>Front End, Applet Design</h5></Col>
          <Col>
            <p className="bookText">
              Kathryn is a senior graduating in the class of Spring 2021 (woo!) and was a member of the first team to work on this project. She majored in Computer Science and minored in Mathematics. She was in charge of the initial website setup, including creating 
              a skeleton of all the pages for the project, designing the navigation and routing, and creating some general-use components such as the text-to-speech, music playback, and templates for the other applets. She also designed
              and implemented the waveform and pendulum applets and implemented several of the applets in Book 1.
              She has been interested in music her whole life and can play (with varying degrees of success) the violin, piano, ukulele, ocarina, melodica, and trumpet. Her cat's name is Mochi! After graduating,
              she has accepted a position with Lockheed Martin and will start working there in June 2021.
            </p>
          </Col>
          <Col className="col-1"></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Home;
