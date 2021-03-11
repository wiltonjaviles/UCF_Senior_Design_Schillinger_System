import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch8() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.8" id="1.8"><h3>Chapter 8. Coordination of Time Structures</h3></a>
          <p class="bookText">The common element to all music, regardless of culture or complexity, is that it represents motion: the change of place over time. Regardless of the pitches used, rhythms employed, harmony (or lack thereof), anything that can be called music can be annotated as <em>organized time</em>.</p>
          <p class="bookText">Organized time, more commonly referred to as <em>rhythm</em>, can be universally annotated with the following:</p>
          <ol>
            <li class="bookText">The number of individual parts</li>
            <li class="bookText">The quantity of attacks per part</li>
            <li class="bookText">The rhythm pattern per part</li>
            <li class="bookText">The combination (or interference) of parts</li>
            <li class="bookText">Overlaying the result on measures</li>
          </ol>
          <p class="bookText">The exact nature of the parts is only relevant insofar as a particular style is desired; the principles remain the same across mediums.</p>
          <h3>*image*</h3>
          <h3>*image*</h3>
        <a className="chapter-section-link" href="/book1#1.8.a" id="1.8.a"><h5>A. Distribution of a Duration-Group</h5></a>
        <a className="chapter-section-link" href="/book1#1.8.b" id="1.8.b"><h5>B. Synchronization of an Attack-Group</h5></a>
        <a className="chapter-section-link" href="/book1#1.8.c" id="1.8.c"><h5>C. Distribution of a Synchronized Duration-Group</h5></a>
        <a className="chapter-section-link" href="/book1#1.8.d" id="1.8.d"><h5>D. Synchronization of an Instrumental Group</h5></a> 
        <br /> 
        <Row>
          <Col><Link to="/book1ch7" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch9" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch8;
