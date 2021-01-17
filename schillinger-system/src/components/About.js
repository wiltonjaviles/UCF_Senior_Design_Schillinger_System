import '.././Style.css';
import {Container, Row, Col} from 'react-bootstrap'

function About() {
  return (
    <div>
      <Container>
        <h1>About this project</h1>
        <p>
          This website was created as a senior design project for University of Central Florida's computer science 
          program.
          Our team is Michael Alaniz, Wilton Aviles, Michael Duke, and Kathryn Wyrick.
          Our sponsor is Richard Leinecker.
        </p>
      </Container>
    </div>
  );
}

export default About;
