import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch12Generator from '../../applets/Ch12Generator';

function Book1Ch12() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch12#1.12" id="1.12"><h3>Chapter 12. Distributive Powers</h3></a>
        <a className="content-links" href="/book1ch12schillinger"><h5>View the source text.</h5></a>
        <a className="chapter-section-link" href="/book1#1.12.a" id="1.12.a"><h5>A. Continuity of Harmonic Contrasts</h5></a>
          <p class="bookText">All rhythms can be identified to a rhythmic family t. Each rhythmic family has two components: fractional continuity (expressed as <sup>1</sup>/<sub>t<sup>n</sup></sub>), and factorial continuity (expressed as t<sup>n</sup>). The following demonstrates all of the series which have been used by humans, ever.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img1.png" alt="book1ch12img1"></img>
          <p class="bookText">Most of western music, and most current music theory, is a combination of the family t = 2, with the occasional t = 3 and t = 6.  This is likely due in no small part to the western writing system being based very directly on the two families; wholes, halves, quarters etc are all based on powers of 2, and so the standard western musical notation assumes by default that music will be in the two families of rhythm. There are of course ways to expand into other families. Typically this will involve either increasingly large numbers, or the inclusion of specially notated triplets, quintuplets, etc.</p>
        <a className="chapter-section-link" href="/book1#1.12.b" id="1.12.b"><h5>B. Composition of Rhythmic Counterthemes</h5></a>
          <p class="bookText">What follows are a series of examples demontrating rhythmic expansion and variation based on algebra</p>
          <p class="bookText">&emsp;a. Square of a Binomial</p>
            <img className="img-fluid img-thumbnail" src="images/book1/ch12/img2.png" alt="book1ch12img2"></img>
            <p class="bookText">The initial binomials synchronized with their distributive squares represent the themes. The distributive squares themselves represent counter themes. The proportion <sup>a<sup>2</sup></sup>/<sub>ab</sub> = <sup>ab</sup>/<sub>b<sup>2</sup></sub> produces harmonic contrast and gives aesthetic satisfaction.</p>
            <p class="bookText">Here is a graph and the musical notation of the entire score: </p>
            <img className="img-fluid img-thumbnail" src="images/book1/ch12/img3.png" alt="book1ch12img3"></img>
            <p class="bookText">As numbers grow it’s practical to find the resultants of interferences between the initial binomials (synchronized) and the resultants of distributive squares. Having these groups may be later utilized in scoring.</p>
            <p class="bookText">In addition to this, it is important to supplement the score by r<sub>a/b</sub> where a is the determinant in the series. For example, in the previous case of <sup>3</sup>/<sub>3</sub>. The determinant is 3; therefore r<sub>3&#247;2</sub> may be added to the score.</p>
            <p class="bookText">Here is a complete graph and musical notation of the power groups, their resultants, and r_.</p>
            <img className="img-fluid img-thumbnail" src="images/book1/ch12/img4.png" alt="book1ch12img4"></img>
            <p class="bookText">Factorial groups of rhythm build the entire continuity in terms of bars, while fractional groups build the bars in terms of duration-units.</p>
          <p class="bookText">&emsp;b. Square of a Trinomial</p>
          <p class="equation">Formula: (a+b+c)<sup>2</sup> = (a<sup>2</sup>+ab+ac) + (ab+b<sup>2</sup>+bc) + (ac + bc + c<sup>2</sup>)</p>
          <p class="bookText">The number of terms in a distributive square of any polynomial equals the square of the number of terms in the polynomial. Thus, a binomial gives 4 terms (2<sup>2</sup> = 4), a trinomial gives 9 terms (3<sup>3</sup>)<sup>2</sup>. The denominator of all terms in the distributive square power-groups equals the square of the sum of all the terms. In a trinomial it equals (a+b+c)<sup>2</sup>, like (3+2+1)<sup>2</sup> = (6)<sup>2</sup> = 36.</p>
          <p class="bookText">In order to synchronize any initial polynomial with its distributive square, you need to find the products of each term but the sum of the polynomial. For example, to synchronize a trinomial with its distributive square:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img5.png" alt="book1ch12img5"></img>
          <p class="bookText">You can express the above score in four bars in <sup>4</sup>/<sub>4</sub> assuming <sup>1</sup>/<sub>16</sub> = quarter note. You can also write the whole thing in integers, i.e., using the numerators only. Just like binomials, you would want to supplement this score with the first and second power resultants and the r<sub>a%b</sub>.</p>
          <p class="bookText">Here is the entire score:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img6.png" alt="book1ch12img6"></img>
          <p class="bookText">In the case of 2+1+1 and 1+1+2, classical composers were able to find the exact distributive squares intuitively. They could not however find 1+2+1.</p>
          <p class="bookText">(1+2+1)+(2+4+2)+(1+2+1) is very useful for the tango.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img7.png" alt="book1ch12img7"></img>
          <p class="bookText">The reason for choosing these as the most practical trinomials will be given later when we discuss the evolution of style in rhythm.</p>
        <p class="bookText">&emsp;c. Square of any Polynomial</p>
          <p class="equation">Formula: (a+b+c+...+m)<sup>2</sup> = (a<sup>2</sup>+ab+ac+...+am) + (ab+b<sup>2</sup>+bc+...+bm) + (ac+bc+c<sup>2</sup>+...+cm)+ ... + (am+bm+cm+...+m<sup>2</sup>)</p>
          <p class="bookText">The following graphs and scores on quintinomials of the <sup>8</sup>/<sub>8</sub> series should be worked out.</p>
          <p class="equation">2+1+2+1+2</p>
          <p class="equation">2+1+2+2+1</p>
          <p class="equation">2+2+1+2+1</p>
          <p class="equation">1+2+1+2+2</p>
          <p class="equation">1+2+2+1+2</p>
          <p class="bookText">The following is an illustration of the first one:</p>
          <p class="equation">(2+1+2+1+2)<sup>2</sup> = (4+2+4+2+4) + (2+1+2+1+2) + (4+2+4+2+4) + (2+1+2+1+2) + (4+2+4+2+4)</p>
          <p class="bookText">Synchronization:</p>
          <p class="equation">8(2+1+2+1+2) = 16+8+16+8+16</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img8.png" alt="book1ch12img8"></img>
          <p class="bookText">This is the square of the real “hot” rhythms. Any bar of 4/4 treated as 8/8 will give a perfect countertheme for 8 bars. Take Pennies from Heaven (Copyright 1936 by Santly-Joy, Inc., New York, USA. Reprinted by permission of the publishers). The first bar is 3+1+2+2. It is then squared to get a countertheme for the first 8 bars.</p>
          <p class="equation">(3+1+2+2)^2 = (9+3+6+6)+(3+1+2+2)+(6+2+4+4)+(6+2+4+4)</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img9.png" alt="book1ch12img9"></img>
        <p class="bookText">&emsp;d. Cube of a Binomial</p>
          <p class="bookText">Cubes add a whole new degree of harmonic contrasts. Distributive cubes serve as a new countertheme to the groups of the first and second power groups that they will be synchronized with. Cubes are related to squares as the squares are related to the first powers. The number of terms in a binomial to the third power is 2^3 = 8.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img88.png" alt="book1ch12img88"></img>
          <p class="bookText">The denominator is the cube of the sum of the terms. </p>
          <p class="bookText">To synchronize the cube of a binomial with the square, you must multiply each term of the square with the sum of the first power binomial.</p>
          <p class="bookText">To synchronize the first power binomial with the cube, you must multiply each term with the square of the sum of the binomial.</p>
          <p class="equation">(2+1)^3 = 2(4+2+2+1)+(4+2+2+1) = (8+4+4+2)+(4+2+2+1) = 27</p>
          <p class="bookText">Synchronization of the square with the cube:</p>
          <p class="equation">3(4+2+2+1) = 12+6+6+3 = 27</p>
          <p class="bookText">Synchronization of the first power with the cube:</p>
          <p class="equation">9(2+1) = 18+9 = 27</p>
          <p class="bookText">1+2 gives the converse.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img10.png" alt="book1ch12img10"></img>
          <p class="bookText">This gives three contrasting pairs. Using the 1st, 2nd, and 3rd power groups in sequence gives a growing animation.</p>
          <p class="bookText">As cubes become relatively large very quickly, it’s practical to limit them for musical purposes up to the value 3. The only practical binomials are: </p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch12/img11.png" alt="book1ch12img11"></img>
          <p class="bookText">The previous second power resultants can easily be synchronized by multiplying the corresponding determinants.</p>
        <p class="bookText">&emsp;e. Cube of a Trinomial</p>

        <Ch12Generator />
        <br />
        <Row>
          <Col><Link to="/book1ch11" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch13" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch12;
