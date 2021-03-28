import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch5Generator from '../../applets/Ch5Generator';

function Book1Ch5() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch5#1.5" id="1.5"><h3>Chapter 5. Composition of Groups by Pairs</h3></a>
        <a className="content-links" href="/book1ch5schillinger"><h5>View the source text.</h5></a>
          <p class="bookText">The techniques of obtaining resultants can be extended into expanding processes of composing rhythmic resultants in pairs. In the traditional exposition of musical themes, the theme is stated twice, where the first time it sounds incomplete and the second time it is a complete sound.</p>
          <p class="bookText">When attempting to do so, composers tend to make variations of the theme’s cadence <em>harmonically</em>. Composers also struggle with expansion, moving from a short group to an adjacent long group, and contraction, moving from a long group to an adjacent short group. Beethoven made clumsy attempts at expansion and contraction in some of his piano sonatas. In No. 1 in the first movement at the end of the exposition, he states a two-bar group three times. He makes an expansion on the third statement by holding the chord through the whole bar, a whole note, adding one more bar. In No. 7 in the beginning of the finale, he has a four-bar group. There are several rests in the group and he makes a three-bar group by simply omitting those rests.</p>
          <p class="bookText">Here, we will present a general method of <em>balancing</em>, <em>expanding</em>, and <em>contracting</em> a pair of adjacent groups.</p>
          <p class="bookText">A. Balance</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img1.png" alt="book1image4"></img>
          <p class="bookText">Figure 37 shows that in order to balance two resultants with identical generators, take the resultant of <em>a</em> to <em>b</em>, with fractioning, add the resultant of <em>a</em> to <em>b</em> and add <em>a</em> times the difference of <em>a</em> and <em>b</em>. Grouping for such pairs is through <em>a</em> only.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img2.png" alt="book1image4"></img>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img3.png" alt="book1image4"></img>
          <p class="bookText">Balance does not seem natural when <em>a</em> <em>2b</em> or <em>a</em> <em>3b</em> . It can be accomplished through a general procedure.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img4.png" alt="book1image4"></img>
          <p class="bookText">Expansion</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img5.png" alt="book1image4"></img>
          <p class="bookText">E = expansion</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img6.png" alt="book1image4"></img>
          <p class="bookText">C. Contraction</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img7.png" alt="book1image4"></img>
          <p class="bookText">C = contraction</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch5/img8.png" alt="book1image4"></img>
          <br />
          <br />
          <Ch5Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch4" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch6" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch5;
