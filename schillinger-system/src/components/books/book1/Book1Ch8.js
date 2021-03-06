import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch8Generator from '../../applets/Ch8Generator';
import TextToSpeech from '../../TextToSpeech';
import Playback from '../../Playback';
import {r, toABC} from '../../functions/generators';


function Book1Ch8() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch8#1.8" id="1.8"><h3>Chapter 8. Coordination of Time Structures</h3></a>
        <a className="content-links" href="/book1ch8schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          Chapter 8. Coordination of Time Structures.
          
          The common element to all music, regardless of culture or complexity, is that it represents motion.
          the change of place over time. Regardless of the pitches used, rhythms employed, harmony (or lack thereof), 
          anything that can be called music can be annotated as organized time.
          Organized time, more commonly referred to as rhythm, can be universally annotated with the following:
          The number of individual parts.
          The quantity of attacks per part.
          The rhythm pattern per part.
          The combination (or interference) of parts.
          Overlaying the result on measures.
          The exact nature of the parts is only relevant insofar as a particular style is desired; the principles remain the same across mediums.
          A. Distribution of a Duration-Group.
          Notation.
          p l i is the number of places in the instrumental group.
          p l ae is the number of places in the attack-group.
          ae sub ae is the number of attacks in the attack-group.
          ae sub T is the number of attacks in the duration-group.
          P L  is the final number of places.
          ae is the synchronized attack—group (the number of attacks synchronized with the number of places).
          ae prime is the final attack group (number of attacks synchronized with the duration—group).
          T is the original duration-group.
          T prime is the synchronized duration~group.
          T double prime is the final duration—group.
          N sub T double prime is the number of final duration—groups.
          Prodecures.
          1. Interference between the number of places in the instrumental group (p l i) and the number of places in the attack-group (p l ae).
          PL = p l i divided by p l ae; p l ae (p l i)  p l i (p l ae).
          2. The product of the number of attacks in the attack group (ae sub ae) by the complementary factor to the number of places in the attack-group (p l i after reduction).
          ae = ae sub ae times  p l i.
          3. Interference between the synchronized attack-group (ae) and the number of attacks in the original duration-group (ae sub T).
          ae prime = ae divided by ae T = ae sub ae times p l i divided by ae sub T.
          4. The product of the original duration-group (T) by the complementary factor to its number of attacks (A prime).
          T prime = T times ae prime = T times ae sub ae times p l i divided by ae sub T.
          5. Interference between the synchronized duration-group (T prime) and the final duration—group (T prime).
          N sub T prime = T prime divided by T double prime.
          B. Synchronization of an Attack-Group.
          Distribution of attacks of an attack-group (ae sub ae) through the number of attacks of a duration—group (ae sub T).
          First Case: ae sub ae divided by ae T = 1.
          ae = ae sub T.
          T prime = T.
          Example: ae sub ae = 4 ae; T = r 3÷2 = 6 t; ae T = 4 ae.
          ae = 4 ae.
          T prime = 6 t.
          Second Case: ae sub ae divided by ae sub T ≠ 1.
          ae = ae T times ae sub ae.
          T prime = T times ae sub ae.
          Example: ae sub ae = 5 ae; T = r3÷2 = 6t; ae T = 4 ae.
          5 divided by 4.
          ae = 5 ae times 4 = 20 ae.
          T prime = 6 t times 5 = 30 t.
          Third Case: ae sub ae divided by ae sub T = ae sub ae' divided by ae sub T prime i.e., a reducible fraction.
          ae = ae sub T times ae sub ae.
          T prime = T times ae sub ae prime.
          Example: ae sub ae = 6 ae ; T = r3÷2 = 6t; ae sub T = 4 ae.
          6 divided by 4 = 3 divided by 2.
          ae  = 4 ae times 3 = 12 ae.
          T prime = 6 t times 3 = 18 t.
          C. Distribution of a Synchronized Duration-Group.
          First Case: T prime divided by T double prime = 1.
          T double prime = T prime.
          Example: T prime = 6 t; T double prime = 6 t.
          Second Case: T prime divided by T double prime ≠ 1.
          N sub T double prime = T prime.
          Example: T prime = 6 t; T double prime = 5 t.
          N sub 5 t = 6.
          Third Case: T prime divided by T double prime = T prime divided by T double prime.
          N sub T double prime = T prime.
          Example: T prime = 6t; T double prime = 4t.
          6 divided by 4 = 3 divided by 2.
          N sub 4t = 3.
          Example: ae sub ae = 5 ae; t = r 5÷2 = 10t; ae sub T = 6 ae.
          1.
          6 divided by 5 = 5 (6) 6 (5).
          2.
          10 t is equivalent to 6 attacks; 10t times 5 = 50 t.
          3.
          When T double prime = 8 divided by 8, 50 t divided by 8 = 25 times 4 divided by 4 = 25T double prime.
          D. Synchronization of an Instrumental Group.
          Example: p l i = 4; p l ae = 3; ae sub ae = 3+2+3 = 8; T = r 5÷2 = 10 t; 6 ae.
          Example: p l i = 3; p l ae = 3; ae sub ae = 3+2+2+3=10; T = r 4÷3 = 16 t; 10 ae T double prime = 8 t.
          Example of composition of the resultant of instrumental interference.
          "
        />
          <br />
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
        <a className="chapter-section-link" href="/book1ch8#1.8.a" id="1.8.a"><h5>A. Distribution of a Duration-Group</h5></a>
          <h5>Notation</h5>
            <p class="bookText">pli&emsp;number of places in the instrumental group</p>
            <p class="bookText">pla&emsp;number of places in the attack-group.</p>
            <p class="bookText">a<sub>a</sub>&emsp;number of attacks in the attack-group.</p>
            <p class="bookText">a<sub>T</sub>&emsp;number of attacks in the duration-group.</p>
            <p class="bookText">PL&emsp;the final number of places.</p>
            <p class="bookText">A&emsp;the synchronized attack—group (the number of attacks synchronized with the number of places).</p>
            <p class="bookText">A’&emsp;the final attack group (number of attacks synchronized with the duration—group).</p>
            <p class="bookText">T&emsp;the original duration-group.</p>
            <p class="bookText">T’&emsp;the synchronized duration~group.</p>
            <p class="bookText">T”&emsp;the final duration—group.</p>
            <p class="bookText">N<sub>T”</sub>&emsp;the number of final duration—groups.</p>
          <h5>Prodecures:</h5>
          <p class="bookText">1. Interference between the number of places in the instrumental group (pli) and the number of places in the attack-group (pla).</p>
              <p class="equation">PL = <sup>pli</sup>/<sub>pla</sub> ;&emsp;<sup>pla (pli)</sup><sub>pli (pla)</sub></p>
          <p class="bookText">2. The product of the number of attacks in the attack group (a<sub>a</sub>) by the complementary factor to the number of places in the attack-group (pli after reduction).</p>
          <p class="equation">A = a<sub>a</sub>&#183;pli</p>
          <p class="bookText">3. Interference between the synchronized attack-group (A) and the number of attacks in the original duration-group (a<sub>T</sub>).</p>
          <p class="equation">A' = <sup>A</sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a</sub>&#183;pli</sup>/<sub>a<sub>T</sub></sub></p>
          <p class="bookText">4. The product of the original duration-group (T) by the complementary factor to its number of attacks (A’).</p>
          <p class="equation">T' = T&#183;A' = <sup>T&#183;a<sub>a</sub> pli</sup>/<sub>a<sub>T</sub></sub></p>
          <p class="bookText">5. Interference between the synchronized duration-group (T’) and the final duration—group (T”).</p>
          <p class="equation">N<sub>T''</sub> = <sup>T'</sup>/<sub>T''</sub></p>
        <a className="chapter-section-link" href="/book1ch8#1.8.b" id="1.8.b"><h5>B. Synchronization of an Attack-Group</h5></a>
          <p class="bookText">Distribution of attacks of an attack-group (a<sub>a</sub>) through the number of attacks of a duration—group (a<sub>T</sub>).</p>
          <p class="equation"><em>First Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = 1</p>
          <p class="equation">A = a<sub>T</sub></p>
          <p class="equation">T' = T</p>
          <p class="bookText">Example: a<sub>a</sub> = 4a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation">A = 4a</p>
          <p class="equation">T' = 6t</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img1.png" alt="book1ch8img1"></img></Col>
          </Row>
          <p class="equation"><em>Second Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> &#8800; 1</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 5a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation"><sup>5</sup>/<sub>4</sub></p>
          <p class="equation">A = 5a&#183;4 = 20a</p>
          <p class="equation">T' = 6t&#183;5 = 30t</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img2.png" alt="book1ch8img2"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r(3,2),['c','_d','c','E','F'],true)} />
          <p class="equation"><em>Third Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a'</sub></sup>/<sub>a<sub>T'</sub></sub>&emsp;i.e., a reducible fraction</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a'</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 6a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">A = 4a&#183;a3 = 12a</p>
          <p class="equation">T' = 6t&#183;3 = 18t</p>
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img3.png" alt="book1ch8img3"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r(3,2),['c','_d','=d','e','f','_B'],true)} />
          <br /> 
          <Ch8Generator />
          <br /> <br />
        <a className="chapter-section-link" href="/book1ch8#1.8.c" id="1.8.c"><h5>C. Distribution of a Synchronized Duration-Group</h5></a>
          <p class="equation"><em>First Case:</em> <sup>T'</sup>/<sub>T''</sub> = 1</p>
          <p class="equation">T'' = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 6t</p>
          <Row className="justify-content-center">
          <Col className="col-6"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img4.png" alt="book1ch8img4"></img></Col>
          </Row>
          <p class="equation"><em>Second Case:</em> <sup>T'</sup>/<sub>T''</sub> &#8800; 1</p>
          <p class="equation">N<sub>T''</sub> = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 5t</p>
          <p class="equation">N<sub>5t</sub> = 6</p>
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img5.png" alt="book1ch8img5"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r(3,2,3),['c','B','A','G','c','B','A','G','c','B','A','G','c','B','A','G','c','B','A','G'],true)} />
          <p class="equation"><em>Third Case:</em> <sup>T'</sup>/<sub>T''</sub> = <sup>T<sub>'</sub></sup>/<sub>T<sub>''</sub></sub></p>
          <p class="equation">N<sub>T''</sub> = T<sub>'</sub></p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 4t</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">N<sub>4t</sub> = 3</p>
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img6.png" alt="book1ch8img6"></img></Col>
          </Row>
          <p class="bookText">Example: a<sub>a</sub> = 5a;&emsp;t = r<sub>5&#247;2</sub> = 10t;&emsp;a<sub>T</sub> = 6a</p>
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img7.png" alt="book1ch8img7"></img></Col>
          </Row>
          <p class="bookText">1.</p>
          <p class="equation"><sup>6</sup>/<sub>5</sub>    <sup>5 (6)</sup> <sub>6 (5)</sub></p>
          <p class="bookText">2.</p>
          <p class="equation">10t is equivalent to 6 attacks; 10t X 5 = 50t</p>
          <p class="bookText">3.</p>
          <p class="equation">When T'' = <sup>8</sup>/<sub>8</sub>, <sup>50t</sup>/<sub>8</sub> = <sup>25&#183;4</sup>/<sub>4</sub> = 25T''</p>
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img8.png" alt="book1ch8img8"></img></Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img9.png" alt="book1ch8img9"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r(3,2,3),['c','_e','d','^E','G'],true)+toABC(r(3,2,3),['c','_e','d','^E','G'],true)+toABC(r(3,2,3),['c','_e','d','^E','G'],true)} />
          <br /> <br />
        <a className="chapter-section-link" href="/book1ch8#1.8.d" id="1.8.d"><h5>D. Synchronization of an Instrumental Group</h5></a> 
          <p class="bookText">Example: pli = 4;&emsp;pla = 3;&emsp;a<sub>a</sub> = 3+2+3 = 8;&emsp;T = r<sub>5&#247;2</sub> = 10t;&emsp;6a</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img10.png" alt="book1ch8img10"></img></Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-center">
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img11.png" alt="book1ch8img11"></img></Col>
          </Row>
          <p class="bookText">Example: pli = 3;&emsp;pla = 3;&emsp;a<sub>a</sub> = 3+2+2+3=10;&emsp;T = r<sub><u>4&#247;3</u></sub> = 16t;&emsp;10a&emsp;T'' = 8t</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch8/img12.png" alt="book1ch8img12"></img></Col>
          </Row>
          <p class="bookText">Example of composition of the resultant of instrumental interference</p>
        <br /> 
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
