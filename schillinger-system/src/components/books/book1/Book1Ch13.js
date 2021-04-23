import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch13Generator from '../../applets/Ch13Generator';
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
        <br />
        <a className="chapter-section-link" href="/book1ch13#1.13.a" id="1.13.a"><h5>A. Swing Music</h5></a>
        <p class="bookText">Tracing the origin of a binomial:
        <p class="bookText">For any given binomial a + b, it is easy to determine the most basic generator that contains the binomial: the first term is given by the sum of the binomial, and the second term is the greater of a and b.  So for example, for the binomial 5 + 3 (<img src="images/book1/ch13/small_img1.png" alt="book1ch13note1" />), the first term would be 8, and the second term would be 5, giving r 8%5. </p>
        <p class="bookText"></p>It should be observed that the closer a and b are to each other, the more dramatic the imbalance of the first two notes. This imbalance can be expressed within each family, starting from perfect balance (dividing in half) and stretching to maximum imbalance with a binomial of n+1 or 1+n, along with all accompanying resultants.</p>
        <Ch13Generator />
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img1.png" alt="book1ch13img1"></img>
        <p class="bookText">Chronologically, music tends to start in a balanced state and move approximately towards imbalance. As it does so, it tends to merge families into each other, which can be seen whenever specially marked note durations (think triplets in 4/4 or duplets in 6/8) make their appearance. For example, as 2+1 is closer to balance than 3+1, 3/4 time is more likely to become 9/8 time than 16/8, as (2+1) + (2+1) + (2+1) is a more natural evolution from 3/4 than a grouping of (3+1).</p>
        <p class="bookText">An example of this type of evolution can be demonstrated in the Rosenkavalier waltz by Richard Strauss.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img2.png" alt="book1ch13img2"></img>
        <p class="bookText">The above is 3 + 1 + 5 + 1 + 5 + 1 + 2. Taking note of the 3/4 time signature, this should evolve into a 9/9 series (second power of 3), but by staying in 3/4 time only an approximation is available, in this case the 5+1+5 figure is close to a the 4+1+4 figure of a nearly balanced 9 series resultant.</p>
        <p class="bookText">In many cases, more direct hybrids can be found in waltzes. For example:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img3.png" alt="book1ch13img3"></img>
        <p class="bookText">This is a 4 series binomial (3+1) overlayed on a 3 series time signature.</p>
        <p class="bookText">In many Viennese waltzes, there will appear a 6/6 series figure with a high degree of imbalance:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img4.png" alt="book1ch13img4"></img>
        <p class="bookText">Leaving Waltzes, swing will frequently overlay a 3 multiple series over another series, most commonly experienced as syncopation.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch13/img5.png" alt="book1ch13img5"></img>
        <p class="bookText">For all cases of these hybridizations and approximations of higher series patterns, there is a  sense of wanting to break out from the base 2 series that standard musical notation tends to stay locked into, resulting in hybridizations forced into a 3/4 time signature or the use of 12/12 instead of 9/9.</p>
        <p class="bookText">In general, the evolution pattern for rhythmic families may be expressed as follows:</p>
        <p class="equation">r<sub>1</sub> . . . Pr<sub>1</sub> . . . SPr<sub>1</sub> . . . i<sub>1</sub></p>
        <p class="equation">r<sub>2</sub> . . . Pr<sub>2</sub> . . . SPr<sub>2</sub> . . . i<sub>2</sub></p>
        <p class="equation">. . . . . . . . . . . . . . . . . . . .</p>
        <p class="equation">r<sup>2</sup><sub>1</sub> . . . Pr<sup>2</sup><sub>1</sub> . . . SPr<sup>2</sup><sub>1</sub> . . . i<sub>1</sub></p>
        <p class="equation">r<sup>2</sup><sub>2</sub> . . . Pr<sup>2</sup><sub>2</sub> . . . SPr<sup>2</sup><sub>2</sub> . . . i<sub>1</sub></p>
        <p class="equation">. . . . . . . . . . . . . . . . . . . .</p>
        <p class="equation">r<sup>n</sup><sub>1</sub> . . . Pr<sup>n</sup><sub>1</sub> . . . SPr<sup>n</sup><sub>1</sub> . . . i<sup>n</sup><sub>1</sub></p>
        <p class="equation">. . . . . . . . . . . . . . . . . . . .</p>
        <p class="equation">r<sup>n</sup><sub>n</sub> . . . Pr<sup>n</sup><sub>n</sub> . . . SPr<sup>n</sup><sub>n</sub> . . . i<sup>n</sup><sub>n</sub></p>
        <p class="equation">. . . . . . . . . . . . . . . . . . . .</p>
        <p class="bookText">r - is the resultant</p>
        <p class="bookText">P - Permutations</p>
        <p class="bookText">S - Synchronization</p>
        <p class="bookText">i - Interference</p>
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
