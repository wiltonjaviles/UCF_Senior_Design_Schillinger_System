import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch14Generator from '../../applets/Ch14Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch14() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch14#1.14" id="1.14"><h3>Chapter 14. Rhythms of Variable Velocities</h3></a>
        <a className="content-links" href="/book1ch14schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          ā
          "
        />
        <p class="bookText">Few things in the universe are constant; really, it would be very boring were that the case. This is also true for music. Traditionally in music this is indicated by the composer, and executed by the performer or conductor by intuition. Schillinger provides a variety of means by which acceleration, deceleration, holds and syncopations can be included in the music more literally and not depend on the intuitions of the musician. This is accomplished with mathematical series. The relevant series are as follows:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/img1.png" alt="book1ch14img1"></img>
        <p class="bookText">The most obvious distinction between these series is the significant difference in rate of change between them. For example, the ratios in a natural harmonic series (2:1, 3:2, 4:3…) become rapidly smaller as you move through the series, while this is less true in for example the first summation series (2:1, 3:2, 5:3, 8:5…). When applied as a change in tempo over time, this means that the natural harmonic series will sound like the acceleration or deceleration plateaus, especially when compared to a summation series.</p>
        <p class="bookText">Speaking generally, there are four ways to apply as series:</p>
        <ol>
          <li>Accelerando</li>
          <li>Rallentando</li>
          <li>1 and 2 combined</li>
          <li>The resultant of acceleration</li>
        </ol>
        <p class="bookText">In general, 1 and 2 are used when introducing or concluding a section, while 3 and 4 are typical of climaxes. In every case, when determining which series to use (and what that series would look like), it is best to start with rallentando, for the simple reason that it is easier to start with 1. The goal when choosing a series is to look at the factors of the sum.</p>
        <p class="bookText">Take for example the natural harmonic series. The first 8 members of this series (1, 2, 3, 4, 5, 6, 7, 8) add up to 36. This makes acceleration over 8 members in this series highly convenient; 36 can represent nine measures of 4/4 time, four measures of 9/8 time, six measures of 6/8 time, or twelve bars in 3/4 time. This ability to divide into the sum of the series allows for the sense of rhythm to be preserved even as the tempo changes.</p>
        <p class="bookText">For another example, the first summation series works very kindly with the 8/8 family with the first 6 members of the series being neatly divisible by 8 (1 + 2 + 3 + 5 + 8 + 13 = 32).</p>
        <Ch14Generator />
        <p class="bookText"> Thus far, the methods for acceleration or deceleration apply to uniform rhythms (1 + 1 + 1 + 1…). Applying this method to non-uniform rhythms is straightforward: the group, A, is multiplied as a variable to each member of the series. So for example, the rhythm A = (3 + 1 + 2) applied to a natural harmonic series would be 1A + 2A + 3A + 4A… or </p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/img2.png" alt="book1ch14img2"></img>
        <p class="bookText"><b>Rubato</b></p>
        <p class="bookText">Within the Schillinger system, the definition of rubato is made narrow. Rubato is any case where a pair of notes is brought either closer or further from balance, changing its complexity. This is accomplished by taking a unit of deviation from one of the notes and adding it to the other. It is easier to see this in an example:</p>
        <h4>example</h4>
        <p class="bookText">In the above, the first pair of notes may be unbalanced by taking a sixteenth from one of the notes and adding it to the other note, with the result:</p>
        <h4>example</h4>
        <p class="bookText">Expressed mathematically, this is *image*, where the unit of deviation tau is equal to 1 over 4.</p>
        <p class="bookText">A second example: in a fox-trot, the pair *image* is frequently performed as *image*. If we take this figure as belonging to the 8 8 series, then they would be expressed as 8/8 = 4/8 + 4/8. A denominator of 8 means that the unit of deviation tau = 1/8. This results in the math (4/8 + 1/8) + (4/8 - 1/8) = 5/8 + 3/8.</p>
        <p class="bookText">In both of these examples, the unbalancing can be done in reverse, so 3/4 + 1/4 becomes 1/4 + 3/4.</p>
        <p class="bookText">Bringing a pair of notes closer to balance is frequently seen in the case where *image* is made into *image*; in this case, the 3 + 1 figure is made into the closer ratio of 2 + 1.</p>
        <p class="bookText">In the Schillinger system, anything else which would be described as rubato is converted into systems of acceleration and deceleration, or is a fermata.</p>
        <p class="bookText"><b>Fermata</b></p>
        <p class="bookText">Schillinger provides two methods for quantifying fermata. The first is simply to multiply or add up the preceding notes.  This is typically done when the fermata represents a full stop, ending, or transition of a piece.  The effect is to end the fermata in time with the meter of the music, or in other words to recognize that even if the fermata notation has “stopped” the rhythm pattern, the listener will still notice when that pattern is broken.</p>
        <p class="bookText">The second case of fermata is somewhat more complex, and is used when a fermata is used to bring unusual emphasis to a note within a rhythm pattern. He gives the following example:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/img3.png" alt="book1ch14img3"></img>
        <p class="bookText">This pattern can be split into three groups: <img src="images/book1/ch14/small_img1.png" alt="book1ch14note1" />, <img src="images/book1/ch14/small_img2.png" alt="book1ch14note2" />, and the whole note. Put together, this forms:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/img4.png" alt="book1ch14img4"></img>
        <p class="bookText">From here we do a little bit of math with fractions. To compare a 3/4 time signature to 2/8, we multiply by 2/2 to create 6/8. The ratio between 6/8 and 2/8 is 3:1. We simplify this ratio, and apply it to the second measure; in this case, simplifying from 3:1 to 2:1. All of this is to say that we isolate the second measure and expand it to a 3/8 measure, and simplify the syncopation from a 3:1 ratio to a 2:1 ratio.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch14/img5.png" alt="book1ch14img5"></img>
        <br />
        <br />
        
        <br /> 
        <Row>
          <Col><Link to="/book1ch13" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book2" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Book1Ch14;
