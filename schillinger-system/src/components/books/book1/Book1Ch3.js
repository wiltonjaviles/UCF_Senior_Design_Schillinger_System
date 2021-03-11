import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch3Generator from '../../applets/Ch3Generator';

function Book1Ch3() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.3" id="1.3"><h3>Chapter 3. The Techniques of Grouping</h3></a>
        <a className="content-links" href="/book1ch3schillinger"><h5>View the source text.</h5></a>
          <p class="bookText">Now we will look at how the patterns may be grouped.</p>
          <p class="bookText">There’s three fundamental forms of group of a ÷ b:</p>
          <ol>
            <li class="bookText">Grouping by the product (by ab)</li>
            <li class="bookText">Grouping by the Major generator (by a)</li>
            <li class="bookText">Grouping by the Minor generator</li>
          </ol>
          <p class="bookText">Using arbitrary variables, in order to group m elements by n groups, you divide m by n. If you were using grouping method 1 (by ab) then you would divide m by ab.</p>
          <p class="bookText">In this case of binary synchronization the duration of the score equals ab. Grouping that by ab would result in the following formula:</p>
          <p class="bookText"><sup>ab</sup>/<sub>ab</sub>=T    (1)</p>
          <p class="bookText">ie. grouping by ab produces one T with abt</p>
          <p class="bookText">Example:</p>
          <p class="bookText">3 ÷ 2              <sup>ab</sup>/<sub>ab</sub>=<sup>6</sup>/<sub>6</sub> T, one measure with 6t.</p>
          <p class="bookText">6t can be represented as any measure with 6 single units. For instance, <sup>3</sup>/<sub>4</sub> time where t = ♪, or <sup>6</sup>/<sub>4</sub> time where t = ♩, or 8 time where t = ♪</p>
          <h3>*image*</h3>
          <p class="bookText">Grouping by a:       <sup>ab</sup>/<sub>a</sub> = bT  (2)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>3*2</sup>/<sub>2</sub>=2T     ie two measures with 3t.</p>
          <p class="bookText">When grouping by a, ab must be excluded from the score or else it will sound like one T.</p>
          <p class="bookText">Also, b becomes an optional component, causing an effect known as syncopation.</p>
          <p class="bookText">     Syncopation - <em>a temporary displacement of the regular metrical accent in music caused typically by stressing the weak beat.</em> (Merriam-Webster)</p>
          <h3>*image*</h3>
          <p class="bookText">Grouping by b:       <sup>ab</sup>/<sub>b</sub> = aT  (3)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>6</sup>/<sub>2</sub>=3T     ie three measures with 2t.</p>
          <p class="bookText">Again, exclude ab from the score and a is an optional component.</p>
          <h3>*image*</h3>
          <p class="bookText">It’s possible to score all the 19 cases of binary synchronization by ab, by a, and by b, unless ab is too great to be used as one T.</p>
          <p class="bookText">This table includes all the necessary scores. Some forms of T are not in common use due to the lack of adequate rhythmic patterns for their representation. ( <sup>10</sup>/<sub>8</sub> , <sup>14</sup>/<sub>8</sub> )</p>
          <h3>*image*</h3>
          <Ch3Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch2" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch4" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch3;
