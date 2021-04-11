import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch13() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch13#1.13" id="1.13"><h3>Chapter 13. Evolution of Rhythm Styles (Families)</h3></a>
        <a className="content-links" href="/book1ch13schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          Chapter 13. Evolution of Rhythm Styles (Families).
          
          ā. Swing Music.
          Tracing the origin of a binomial.
          For any given binomial ā + b, it is easy to determine the most basic generator that contains the binomial: the first term is given by the sum of the binomial, and the second term is the greater of a and b. So for example, for the binomial 5 + 3 (), the first term would be 8, and the second term would be 5, giving r 8%5.
          It may be observed that imbalances such as the one listed above can expand through a rhythmic family by the process of merging rhythm families, and then by unbalancing the rhythms.
          "
        />
        <a className="chapter-section-link" href="/book1ch13#1.13.a" id="1.13.a"><h5>A. Swing Music</h5></a>
        <p class="bookText">Tracing the origin of a binomial:
        <p class="bookText">For any given binomial a + b, it is easy to determine the most basic generator that contains the binomial: the first term is given by the sum of the binomial, and the second term is the greater of a and b.  So for example, for the binomial 5 + 3 (), the first term would be 8, and the second term would be 5, giving r 8%5. </p>
        <p class="bookText"></p>It may be observed that imbalances such as the one listed above can expand through a rhythmic family by the process of merging rhythm families, and then by unbalancing the rhythms.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img1.png" alt="book1ch13img1"></img>
        <br />
        <br />
        <Row>
          <Col><Link to="/book1ch12" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch14" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch13;
