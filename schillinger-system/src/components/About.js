import '.././Style.css';
import {Container, Row, Col} from 'react-bootstrap'
import isAuthenticated from '.././components/authUser';

function About() {
  // isAuthenticated();
  return (
    <div>
      <br />
      <Container>
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
          <Col><p>Richard Leinecker</p></Col>
          <Col><p>Michael Alaniz</p></Col>
          <Col><p>Wilton Aviles</p></Col>
          <Col><p>Michael Duke</p></Col>
          <Col><p>Kathryn Wyrick</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
