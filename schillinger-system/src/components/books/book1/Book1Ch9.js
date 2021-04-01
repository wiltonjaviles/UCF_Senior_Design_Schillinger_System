import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch9Generator from '../../applets/Ch9Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch9() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch9#1.9" id="1.9"><h3>Chapter 9. Homogeneous Simultaneity and Continuity (Variations)</h3></a>
        <a className="content-links" href="/book1ch9schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          ā
          "
        />
        <a className="chapter-section-link" href="/book1ch9#1.9.a" id="1.9.a"><h5>A. General and Circular Permutations</h5></a>
        <p class="bookText">In previous chapters, we have learned that all rhythms can be expressed as combinations or portions of resultants. Useful as they are, there are limits to what can be done with them alone. The human ear can rarely track a large pattern as one indivisible rhythm, however to repeat the same pattern over and over again would lead to boredom. It is therefore necessary to develop techniques that extend the novelty of a short rhythmic expression when used repeatedly; in short, we need variations.</p>
        <p class="bookText">In general, variations can be made of any rhythm by forming permutations of the constituent notes, with the number of available permutations being equal to n!, where n is the number of elements. For example, 3 + 2 + 1 (a dotted quarter, quarter and eighth) has a total of 3 x 2 x 1 = 6 permutations:</p>
        <p class="bookText">3 + 2 + 1;&emsp;3 + 1 + 2;&emsp;2 + 3 + 1;&emsp;2 + 1 + 3;&emsp;1 + 2 + 3;&emsp;1 + 3 + 2</p>
        <p class="bookText">As the complexity of a rhythm increases, the number of available permutations increases dramatically.  While this can be useful in filling large volumes of time with similar-but-different variations, it is often preferable to have a smaller, more controlled set of permutations. This can be accomplished with circular permutations.</p>
        <p class="bookText">Circular permutations are formed by arranging the elements of a rhythm into a circle, then starting with the first element, build a rhythm by going about the circle once. Then move to the next element and go about the circle again; do this for each element.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/img1.png" alt="book1ch9img1"></img>
        <p class="bookText">This circle of three elements forms the permutation | a + b + c | b + c + a | c + a + b |.</p>
        <h3>TODO</h3>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/img2.png" alt="book1ch9img2"></img>
        <p class="bookText">You can spin the circle in either direction. Counterclockwise, it would form the permutation<br/>| a + c + b | c + b + a | b + a + c |</p>
        <h3>TODO</h3>
        <p class="bookText">This circle can be used for more than rhythm patterns. A rest can be rotated this way:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/img3.png" alt="book1ch9img3"></img>
        <p class="bookText">or an accent:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch9/img4.png" alt="book1ch9img4"></img>
        <br /> 
        <br /> 
        <Ch9Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch8" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch10" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch9;
