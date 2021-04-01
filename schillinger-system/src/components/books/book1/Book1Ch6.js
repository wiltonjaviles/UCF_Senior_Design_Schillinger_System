import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch6Generator from '../../applets/Ch6Generator';

function Book1Ch6() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch6#1.6" id="1.6"><h3>Chapter 6. Utilization of Three or more Generators</h3></a>
        <a className="content-links" href="/book1ch6schillinger"><h5>View the source text.</h5></a>
          <p class="bookText">Rhythmic groups may be developed using two generators; this can also be accomplished with three or more generators. In using more than two generators, the selection of the third is crucial. Schillinger stated in his “Mathematical Basis of the Arts” that <em>all generators pertaining to one family of rhythm belong to the same series of number-values</em>. These series are the series of growth, which can be found throughout music, other arts and various forms of growth in nature, such as horns, sunflower seeds, and maple leaves. Mathematically, one can produce an infinite number of <em>types</em> of the series of growth, and an infinite number of series of each type of series. The series of growth is a type of <em>summation series</em>. In this particular series, every third number is the sum of the two preceding numbers (ex. 1, 2, 3, 5, 8, 13, 21, …). Each style, or family, of rhythm evolves through these types of summation series. The following are all the series that are useful for musical purposes:</p>
          <ol type="I">
            <li class="bookText">1, 2, 3, 5, 8, 13, …</li>
            <li class="bookText">1, 3, 4, 7, 11, 18, …</li>
            <li class="bookText">1, 4, 5, 9, 14, 23, ...</li>
          </ol>
          <p class="bookText">All rhythmic groups of one style are the resultants of the generators of the same series (ex. A rhythmic group identified with is the same style as groups <em>r</em><sub>3÷2</sub> produced by <em>r</em><sub>5÷3</sub> or <em>r</em><sub>5÷3÷2</sub>).</p>
          <p class="bookText">The following are the important and practical combinations of generators to be worked out:</p>
          <p class="bookText">Series I. 2 ÷ 3 ÷ 5 3 ÷ 5 ÷ 8</p>
          <p class="bookText">Series II. 3 ÷ 4 ÷ 7</p>
          <p class="bookText">Series III. 4 ÷ 5 ÷ 9</p>
        <a className="chapter-section-link" href="/book1ch6#1.6.a" id="1.6.a"><h5>A. The Technique of Synchronization</h5></a>
          <p class="bookText">To synchronize three or more generators, it is necessary to first find their common product and their complementary factors.</p>
          <p class="bookText">2 ÷ 3 ÷ 5</p>
          <p class="bookText">2 * 3 * 5 = 30</p>
          <p class="bookText">The complementary factors are the quotients of the product by a generator. Thus 30 / 2 = 15 means that 15 is a complementary factor of 2.</p>
          <p class="bookText">Therefore: 15(2); 10(3); 6(5)</p>
          <p class="bookText">This method offers two resultants at a time (r and r’), one being a theme and the other a countertheme. Generators produce r, and the complementary factors produce r’.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch6/img1.png" alt="book1ch7img1"></img>
          <p class="bookText">The rule of grouping is: <em>group by any generator of any of the complementary factors</em>. In 2÷3÷5, grouping is available through 2, 3, 5, 6, 10, 15 (i.e., 2 / 4, 3 / 4, 5 / 4, 6 / 8, 10 / 8, 15 / 8).</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch6/img2.png" alt="book1ch7img2"></img>
          <p class="bookText">In figure 48, no more rhythmically suitable counterthemes can be devised. The theme makes three recurrences while the countertheme makes continuous changes in longer values. This allows the listener to hear both themes together. All resultants from three or more generators are characterized by these recurrences and variations.</p>
        <br />
        <br />
        <Ch6Generator />
        <br /> 
        <Row>
          <Col><Link to="/book1ch5" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch7" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

export default Book1Ch6;
