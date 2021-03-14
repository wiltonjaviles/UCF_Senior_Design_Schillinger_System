import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
// import Ch8Generator from '../../applets/Ch8Generator';

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
          <img src="images/book1/ch8/img1.png" alt="book1image4"></img>
          <img src="images/book1/ch8/img2.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.a" id="1.8.a"><h5>A. Distribution of a Duration-Group</h5></a>
          <h3>Notation</h3>
            <p class="bookText">pli&emsp;number of places in the instrumental group</p>
            <p class="bookText">pla&emsp;number of places in the attack-group.</p>
            <p class="bookText">a<sub>a</sub>&emsp;number of attacks in the attack-group.</p>
            <p class="bookText">a<sub>T</sub>&emsp;number of attacks in the duration-group.</p>
            <p class="bookText">PL&emsp;the ﬁnal number of places.</p>
            <p class="bookText">A&emsp;the synchronized attack—group (the number of attacks synchronized with the number of places).</p>
            <p class="bookText">A’&emsp;the ﬁnal attack group (number of attacks synchronized with the duration—group).</p>
            <p class="bookText">T&emsp;the original duration-group.</p>
            <p class="bookText">T’&emsp;the synchronized duration~group.</p>
            <p class="bookText">T”&emsp;the ﬁnal duration—group.</p>
            <p class="bookText">N<sub>T”</sub>&emsp;the number of ﬁnal duration—groups.</p>
          <h3>Prodecures:</h3>
          <ol>
            <li>
              Interference between the_ number of places in the instrumental group (pli) and the number of places in the attack-group (pla).
              <p class="equation">PL = <sup>pli</sup>/<sub>pla</sub>;&emsp;<sup>pla (pli)</sup><sub>pli (pla)</sub></p>
            </li>
            <li>
              The product of the number of attacks in the attack group (aa) by the complementary factor to the number of places in the attack-group (pli after reduction).
              <p class="equation">A = a<sub>a</sub>&#183;pli</p>
            </li>
            <li>
              Interference between the synchronized attack-group (A) and the number of attacks in the original duration-group (a<sub>T</sub>).
              <p class="equation">A' = <sup>A</sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a</sub>&#183;pli</sup><sub>a<sub>T</sub></sub></p>
            </li>
            <li>
              The product of the original duration-group (T) by the complementary factor to its number of attacks (A’).
              <p class="equation">T' = T&#183;A' = <sup>T&#183;a<sub>a</sub> pli</sup>/<sub>a<sub>T</sub></sub></p>
            </li>
            <li>
              Interference between the synchronized duration-group (T’) and the ﬁnal duration—group (T”).
              <p class="equation">N<sub>T''</sub> = <sup>T'</sup>/<sub>T''</sub></p>
            </li>
          </ol>
        <a className="chapter-section-link" href="/book1#1.8.b" id="1.8.b"><h5>B. Synchronization of an Attack-Group</h5></a>
          <p class="bookText">Distribution of attacks of an attack-group (a<sub>a</sub>) through the number of attacks of a duration—group (a<sub>T</sub>).</p>
          <p class="equation"><em>First Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = 1</p>
          <p class="equation">A = a<sub>T</sub></p>
          <p class="equation">T' = T</p>
          <p class="bookText">Example: a<sub>a</sub> = 4a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation">A = 4a</p>
          <p class="equation">T' = 6t</p>
          <img src="images/book1/ch8/img3.png" alt="book1image4"></img>
          <p class="equation"><em>Second Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> &#8800; 1</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 5a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="bookText"><sup>5</sup>/<sub>4</sub></p>
          <p class="equation">A = 5a&#183;4 = 20a</p>
          <p class="equation">T' = 6t&#183;5 = 30t</p>
          <img src="images/book1/ch8/img4.png" alt="book1image4"></img>
          <p class="equation"><em>Third Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a'</sub></sup>/<sub>a<sub>T'</sub></sub>&emsp;i.e., a reducible fraction</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a'</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 6a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">A = 4a&#183;a3 = 12a</p>
          <p class="equation">T' = 6t&#183;3 = 18t</p>
          <img src="images/book1/ch8/img4.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.c" id="1.8.c"><h5>C. Distribution of a Synchronized Duration-Group</h5></a>
          <p class="equation"><em>First Case:</em> <sup>T'</sup>/<sub>T''</sub> = 1</p>
          <p class="equation">T'' = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 6t</p>
          <img src="images/book1/ch8/img5.png" alt="book1image4"></img>
          <p class="equation"><em>Second Case:</em> <sup>T'</sup>/<sub>T''</sub> &#8800; 1</p>
          <p class="equation">N<sub>T''</sub> = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 5t</p>
          <p class="equation">N5t = 6</p>
          <img src="images/book1/ch8/img6.png" alt="book1image4"></img>
          <p class="equation"><em>Third Case:</em> <sup>T'</sup>/<sub>T''</sub> = <sup>T<sub>'</sub></sup>/<sub>T<sub>''</sub></sub></p>
          <p class="equation">N<sub>T''</sub> = T<sub>'</sub></p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 4t</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">N<sub>4t</sub> = 3</p>
          <img src="images/book1/ch8/img7.png" alt="book1image4"></img>
          <p class="bookText">Example: a<sub>a</sub> = 5a&emsp;t = r<sub>5&#247;2</sub> = 10t;&emsp;a<sub>T</sub> = 6a</p>
          <img src="images/book1/ch8/img8.png" alt="book1image4"></img>
          <ol>
            <li><sup>6</sup>/<sub>5</sub>    <sup>5 (6)</sup> <sub>6 (5)</sub></li>
            <li>10t is equivalent to 6 attacks; 10t X 5 = 50t</li>
            <li>When T'' = <sup>8</sup>/<sub>8</sub>, <sup>50t</sup>/<sub>8</sub> = <sup>25&#183;4</sup>/<sub>4</sub> = 25T''</li>
          </ol>
          <img src="images/book1/ch8/img9.png" alt="book1image4"></img>
          <img src="images/book1/ch8/img10.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.d" id="1.8.d"><h5>D. Synchronization of an Instrumental Group</h5></a> 
          <p class="bookText">Example: pli = 4;&emsp:pla = 3;&emsp;a<sub>a</sub> = 3+2+3 = 8;&emsp;T = r<sub>5&#247;2</sub> = 10t;&emsp;6a</p>
          <ol>
            <li><sup>4</sup>/<sub>3</sub>;  <sup>3 (4)</sup><sub>4 (3)</sub></li>
            <li>8 x 4 = 32</li>
            <li><sup>32</sup>/</li>
            <li></li>
            <li></li>
          </ol>
        <br /> 
        <Row>
          <Col><Link to="/book1ch7" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch9" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        {/* <Ch8Generator /> */}
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch8;
