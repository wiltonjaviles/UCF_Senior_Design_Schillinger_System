import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch11Generator from '../../applets/Ch11Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch11() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch11#1.11" id="1.11"><h3>Chapter 11. Composition of Homogeneous Rhythmic Continuity</h3></a>
        <a className="content-links" href="/book1ch11schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          Chapter 11. Composition of Homogeneous Rhythmic Continuity.
          
          There are three methods for creating great variety out of a single rhythmic group. The first creates the least variety, the second is in the middle, and the final can create an enormous amount of variety.
          Method one is to divide the group by its simplest divisor. Typically, this will be to divide the group into halves or into thirds, which can then be rotated.
          Method two is to divide the group by measures, and to then rotate.
          Method three is to divide the group by all of its attacks.
          To apply the first method to r 4 divided by 3, start by observing that the number of measures is an even number, meaning that the simplest divisor is 2. r 4 divided by 3 contains 4 measures, and so in this method is split into groups of 2, which are then subjected to a simple rotation.
          In the above figure, ae2 is the original r 4 divided by 3, and b2 is a simple rotation of ae2. Notice that if b2+ae2 is stacked with ae2+b2, the result (if played simultaneously) is a continuous stream of quarter notes.
          While many resultants are divisible by 2, not all are. In some cases they will be divisible by 3 (as in the case of r 5 divided by 3 grouped by 5), or some even higher prime number. Note however, that in the case of r 5 divided by 3 grouped by 5, dividing by 3 results in it being split down to the measure, meaning that by default the second method is what is applied.
          With the second method, r 4 divided by 3 is split along all of its measures, 4 in this case. These 4 groups can then be rotated clockwise, creating a total of 4 groups, which themselves can be rotated (creating 4 parts each with 4 4-part groups).
          This method is not limited to clockwise, circular rotation. Counterclockwise rotation, general permutations, etc all can be used, to create potentially massive sets of variations within the same family.
          This method in general will result in a score where the number of parts equals the number of bars (that is an n x n square), and that number n equals the permutations made available by whatever method was chosen. For example, r 8 divided by 5 results in 8 bars in 8 parts when a circular permutation is applied to it, or a gratuitous 40,320 bars in 40,320 parts when a general permutation is applied.
          In the third method, the entire rhythm group is broken down to its individual attacks, and rotated on these. In our example r 4 divided by 3, we have 10 individual notes; when these are permuted upon in a circle, the result is 10 parts with a length of four bars.
          This method can rapidly produce far more permutations and concurrent sound than any human ear could hope to hear, where even a single circular permutation creates a wall of notes.
          Were this to be fully expanded with general permutations, there would be 3,628,800 permutations with a total of 145,152,000 bars over 10 parts.
          "
        />
        <br />
        <p class="bookText">There are three methods for creating great variety out of a single rhythmic group. The first creates the least variety, the second is in the middle, and the final can create an enormous amount of variety.</p>
        <ol>
          <li>Method one is to divide the group by its simplest divisor. Typically, this will be to divide the group into halves or into thirds, which can then be rotated.</li>
          <li>Method two is to divide the group by measures, and to then rotate.</li>
          <li>Method three is to divide the group by all of its attacks.</li>
        </ol>
        
        <p class="bookText">To apply the first method to r<sub>4%3</sub>, start by observing that the number of measures is an even number, meaning that the simplest divisor is 2.  r<sub>4%3</sub> contains 4 measures, and so in this method is split into groups of 2, which are then subjected to a simple rotation.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/img1.png" alt="book1ch11img1"></img>
        <h4>playable example?</h4>
        <p class="bookText">In the above figure, a<sub>2</sub> is the original r<sub>4%3</sub>, and b<sub>2</sub> is a simple rotation of a<sub>2</sub>. Notice that if b<sub>2</sub>+a<sub>2</sub> is stacked with a<sub>2</sub>+b<sub>2</sub>, the result (if played simultaneously) is a continuous stream of quarter notes.</p>
        <p class="bookText">While many resultants are divisible by 2, not all are. In some cases they will be divisible by 3 (as in the case of r<sub>5%3</sub> grouped by 5), or some even higher prime number. Note however, that in the case of r<sub>5%3</sub> grouped by 5, dividing by 3 results in it being split down to the measure, meaning that by default the second method is what is applied.</p>
        <p class="bookText">With the second method, r<sub>4%3</sub> is split along all of its measures, 4 in this case. These 4 groups can then be rotated clockwise, creating a total of 4 groups, which themselves can be rotated (creating 4 parts each with 4 4-part groups).</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/img2.png" alt="book1ch11img2"></img>
        <br /> <br />
        <p class="bookText">This method is not limited to clockwise, circular rotation. Counterclockwise rotation, general permutations, etc all can be used, to create potentially massive sets of variations within the same family.</p>
        <p class="bookText">This method in general will result in a score where the number of parts equals the number of bars (that is an n x n square), and that number n equals the permutations made available by whatever method was chosen. For example, r<sub>8%5</sub> results in 8 bars in 8 parts when a circular permutation is applied to it, or a gratuitous 40,320 bars in 40,320 parts when a general permutation is applied.</p>
        <p class="bookText">In the third method, the entire rhythm group is broken down to its individual attacks, and rotated on these. In our example r<sub>4%3</sub>, we have 10 individual notes; when these are permuted upon in a circle, the result is 10 parts with a length of four bars.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/img3.png" alt="book1ch11img3"></img>
        <br /> <br />
        <p class="bookText">This method can rapidly produce far more permutations and concurrent sound than any human ear could hope to hear, where even a single circular permutation creates a wall of notes.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/img4.png" alt="book1ch11img4"></img>
        
        <p class="bookText">Were this to be fully expanded with general permutations, there would be 3,628,800 permutations with a total of 145,152,000 bars over 10 parts.</p>
        <br />
        <br />
        <Ch11Generator />
        <br />
        <Row>
          <Col><Link to="/book1ch10" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch12" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch11;
