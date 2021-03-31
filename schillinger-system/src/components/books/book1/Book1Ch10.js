import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch10() {
  return (
    <div>
      <Container>
        <br />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.10" id="1.10"><h3>Chapter 10. Generalization of Variation Techniques</h3></a>
        <a className="content-links" href="/book1ch10schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1#1.10.a" id="1.10.a"><h5>A. Permutations of the Higher Order</h5></a>
        <p class="bookText">We can use <em>permutations of a higher order</em> to create variations of a group and increase the total material. The total  number of elements in a certain permutation is equal to the square of the number of elements in the previous permutation. For example, if there are three elements in the original group, there will be 9 in the next (second) group, and 27 in the next (third group) and so on in circular permutations. If general permutations are used, then the second group will have 6 elements, and the third will have 720 elements, and so on.</p>
        <p class="bookText">If we label the original elements of the group as a1, b1 … for however many elements we have, we can permute the order of those elements for the next set of groups. The formula for an original group of 2 elements (a1 and b1) is the following:</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img1.png" alt="book1ch10img1"></img>
        <p class="bookText">This is a really easy way to evolve a large amount of material from a small group. If you repeat this formula using only two elements in a group 6 times, you will end up with 64 total elements.</p>
        <p class="bookText">Music of animated motion often has a lot of rhythmic elements (durations, rest, etc.). Take a waltz for example: with four bars to a line, 5 lines to a page, in eighth notes for 3 pages, we would have 360 durations.</p>
        <p class="bookText">Here is an example breakdown of 5 permutations of two elements: </p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img2.png" alt="book1ch10img2"></img>
        <p class="bookText">If you add in the missing 8 bars for b<sub>5</sub> (b<sub>4</sub>+a<sub>4</sub>) of the fifth permutation, you would have 16 continuous bars with a lot of variety when compared to simply repeating a<sub>1</sub>+b<sub>1</sub> for 16 bars. It’s a lot more useful to continue this pattern rather than simple repetition when you need to extend a section of music but maintain its character.</p>
        <p class="bookText">In musical scores, for example, it may be useful to maintain rhythm forms and keep them going for 10-15 minutes. Using this technique is preferred to simple repetition to avoid annoying the audience with repeating composition for that long. A neutral background that is homogenous yet continually varied through permutation, will serve its purpose much better.</p>
        <p class="bookText">Permutations based on a group with 3 elements (a<sub>1</sub>, b<sub>1</sub>, c<sub>1</sub>), will have the following combinations of 2: a<sub>1</sub>+b<sub>1</sub>, a<sub>1</sub>+c<sub>1</sub>, b<sub>1</sub>+c<sub>1</sub>. These are the three possible alternatives when 2 elements out of 3 are used. (note: in combinations, the order of elements does not matter. If we had done permutations of the original group we would include all of the previous groups and also b<sub>1</sub>+a<sub>1</sub>, c<sub>1</sub>+a<sub>1</sub>, and c<sub>1</sub>+b<sub>1</sub>). </p>
        <p class="bookText">There is only one combination by 3 of the original group: a<sub>1</sub>+b<sub>1</sub>+c<sub>1</sub>. The permutations by 3 for the original group is:</p>
        <p class="bookText">&emsp;&emsp;a<sub>1</sub> + b<sub>1</sub> + c<sub>1</sub> = a<sub>2</sub></p>
        <p class="bookText">&emsp;&emsp;a<sub>1</sub> + c<sub>1</sub> + b<sub>1</sub> = b<sub>2</sub></p>
        <p class="bookText">&emsp;&emsp;c<sub>1</sub> + a<sub>1</sub> + b<sub>1</sub> = c<sub>2</sub></p>
        <p class="bookText">&emsp;&emsp;b<sub>1</sub> + a<sub>1</sub> + c<sub>1</sub> = d<sub>2</sub></p>
        <p class="bookText">&emsp;&emsp;b<sub>1</sub> + c<sub>1</sub> + a<sub>1</sub> = e<sub>2</sub></p>
        <p class="bookText">&emsp;&emsp;c<sub>1</sub> + b<sub>1</sub> + a<sub>1</sub> = f<sub>2</sub></p>
        <p class="bookText">These 6 elements of the second order produce, in turn, combinations by 2, by 3, by 4, by 5 and by 6.</p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img3.png" alt="book1ch10img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img4.png" alt="book1ch10img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img5.png" alt="book1ch10img5"></img>
        <p class="bookText">All of the combinations with recurrences (ie two or more of the elements are identical. a<sub>2</sub>+a<sub>2</sub>+b<sub>2</sub> is an example of a combination with a recurrence). These can be consulted for coefficients of recurrence (ie a<sub>2</sub>+a<sub>2</sub>+b<sub>2</sub> = 2a<sub>2</sub>+b<sub>2</sub>). An example of this is: </p>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/img6.png" alt="book1ch10img6"></img>
        <p class="bookText">When the quantities exceed the necessary amount, you can limit the number of variations by reducing them to circular permutations only. A circular permutation means only rotating all of the elements around.</p>

        <br /> 
        <Row>
          <Col><Link to="/book1ch9" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch11" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch10;
