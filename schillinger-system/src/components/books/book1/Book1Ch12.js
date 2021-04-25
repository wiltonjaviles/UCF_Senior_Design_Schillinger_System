import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch12Generator from '../../applets/Ch12Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch12() {
  return (
    <div>
      <Container>
        <br />
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch12#1.12" id="1.12"><h3>Chapter 12. Distributive Powers</h3></a>
        <a className="content-links" href="/book1ch12schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          Chapter 12. Distributive Powers.
          
          ae. Continuity of Harmonic Contrasts.
          All rhythms can be identified to a rhythmic family t. Each rhythmic family has two components: fractional continuity (expressed as 1/tn), and factorial continuity (expressed as tn). The following demonstrates all of the series which have been used by humans, ever.
          Most of western music, and most current music theory, is a combination of the family t = 2, with the occasional t = 3 and t = 6. This is likely due in no small part to the western writing system being based very directly on the two families; wholes, halves, quarters etc are all based on powers of 2, and so the standard western musical notation assumes by default that music will be in the two families of rhythm. There are of course ways to expand into other families. Typically this will involve either increasingly large numbers, or the inclusion of specially notated triplets, quintuplets, etc.
          B. Composition of Rhythmic Counterthemes.
          What follows are a series of examples demonstrating rhythmic expansion and variation based on algebra.
           ae. Square of a Binomial.
          Formula:
          (a) Factorial: (ae+b) squared = ae squared + ae b + ae b + b squared 
          (b) Fractional: (a/ae + b + b/ae + b) squared  = ae squared /(ae + b) squared  + ae b/(ae + b) squared  + ae b/(ae + b) squared  + b squared /(ae + b) squared 
          Formula for Synchronization:
          (a) Factorial: S = ae(ae + b)  +  b(ae + b)
          (b) Fractional: S = ae/ae + b · (ae + b/ae + b)  +  b/ae + b · (ae + b/ae + b)
          Example:
          Series 3/3 Factorial binomials: 2 + 1 and 1 + 2
          Fractional binomials: 2/3 + 1/3 and 1/3 + 2/3
          (2/3  +  1/3)squared = 4/9 + 2/9 + 2/9 + 1/9 (squaring)
          3/3(2/3  +  1/3) = 6/9 + 3/9 (synchronization)
          (1/3  +  2/3)squared = 1/9 + 2/9 + 2/9 + 4/9 (squaring)
          3/3(1/3  +  2/3) = 3/9 + 6/9 (synchronization)
          The initial binomials synchronized with their distributive squares represent the themes. The distributive squares themselves represent counter themes. The proportion ae squared/ae b = ae b/b squared produces harmonic contrast and gives aesthetic satisfaction.
          Here is a graph and the musical notation of the entire score:
          As numbers grow it’s practical to find the resultants of interferences between the initial binomials (synchronized) and the resultants of distributive squares. Having these groups may be later utilized in scoring.
          In addition to this, it is important to supplement the score by r ae/b where ae is the determinant in the series. For example, in the previous case of 3/3. The determinant is 3; therefore r 3÷2 may be added to the score.
          Here is a complete graph and musical notation of the power groups, their resultants, and r_.
          Factorial groups of rhythm build the entire continuity in terms of bars, while fractional groups build the bars in terms of duration-units.
           b. Square of a Trinomial.
          Formula: (ae+b+c) squared = (ae squared +ae b+ae c) + (ae b+b squared +bc) + (ae c + bc + c squared).
          The number of terms in a distributive square of any polynomial equals the square of the number of terms in the polynomial. Thus, a binomial gives 4 terms (2 squared = 4), a trinomial gives 9 terms (3 squared = 9). The denominator of all terms in the distributive square power-groups equals the square of the sum of all the terms. In a trinomial it equals (a+b+c) squared, like (3+2+1) squared = (6) squared = 36.
          In order to synchronize any initial polynomial with its distributive square, you need to find the products of each term but the sum of the polynomial. For example, to synchronize a trinomial with its distributive square.
          You can express the above score in four bars in 4 4 assuming 1/16 = quarter note. You can also write the whole thing in integers, i.e., using the numerators only. Just like binomials, you would want to supplement this score with the first and second power resultants and the rae%b.
          Here is the entire score.
          In the case of 2+1+1 and 1+1+2, classical composers were able to find the exact distributive squares intuitively. They could not however find 1+2+1.
          (1+2+1)+(2+4+2)+(1+2+1) is very useful for the tango.
          The reason for choosing these as the most practical trinomials will be given later when we discuss the evolution of style in rhythm.
           c. Square of any Polynomial.
          Formula: (ae +b+c+...+m) squared = (ae  squared+ae b+ae c+...+ae m) + (ae b+b squared+bc+...+bm) + (ae c+bc+c squared+...+cm)+ ... + (ae m+bm+cm+...+m squared).
          The following graphs and scores on quintinomials of the 8 8 series should be worked out.
          2+1+2+1+2.
          2+1+2+2+1.
          2+2+1+2+1.
          1+2+1+2+2.
          1+2+2+1+2.
          The following is an illustration of the first one.
          (2+1+2+1+2)2 = (4+2+4+2+4) + (2+1+2+1+2) + (4+2+4+2+4) + (2+1+2+1+2) + (4+2+4+2+4).
          Synchronization.
          8(2+1+2+1+2) = 16+8+16+8+16.
          This is the square of the real “hot” rhythms. Any bar of 4 4 treated as 8 8 will give a perfect countertheme for 8 bars. Take Pennies from Heaven (Copyright 1936 by Santly-Joy, Inc., New York, USA. Reprinted by permission of the publishers). The first bar is 3+1+2+2. It is then squared to get a countertheme for the first 8 bars.
          (3+1+2+2) squared = (9+3+6+6)+(3+1+2+2)+(6+2+4+4)+(6+2+4+4).
           d. Cube of a Binomial.
          Cubes add a whole new degree of harmonic contrasts. Distributive cubes serve as a new countertheme to the groups of the first and second power groups that they will be synchronized with. Cubes are related to squares as the squares are related to the first powers. The number of terms in a binomial to the third power is 2 to the 3 = 8.
          The denominator is the cube of the sum of the terms.
          To synchronize the cube of a binomial with the square, you must multiply each term of the square with the sum of the first power binomial.
          To synchronize the first power binomial with the cube, you must multiply each term with the square of the sum of the binomial.
          (2+1) cubed = 2 times (4+2+2+1)+(4+2+2+1) = (8+4+4+2)+(4+2+2+1) = 27.
          Synchronization of the square with the cube.
          3 times (4+2+2+1) = 12+6+6+3 = 27.
          Synchronization of the first power with the cube.
          9 times (2+1) = 18+9 = 27.
          1+2 gives the converse.
          This gives three contrasting pairs. Using the 1st, 2nd, and 3rd power groups in sequence gives a growing animation.
          As cubes become relatively large very quickly, it’s practical to limit them for musical purposes up to the value 3. The only practical binomials are.
          The previous second power resultants can easily be synchronized by multiplying the corresponding determinants.
           e. Cube of a Trinomial.
          This process is similar to the square, just multiply each term in the group by the distributed square of a trinomial.
          Formula:
          (ae +b+c) cubed = ae [(ae  squared +ae b+ae c) + (ae b+b squared +bc) + (ae c+bc+c squared )] + b[(ae  squared +ae b+ae c) + (ae b+b squared +bc) + (ae c+bc+c squared )] + c[(ae  squared +ae b+ae c) + (ae b+b squared +bc) + (ae c+bc+c squared )] = (ae  cubed+ae  squared b+ae  squared c+ae  squared b+ae b squared +ae bc+ae  squared c+ae bc+ae c squared ) + (ae  squared b+ae b squared +ae bc+ae b squared +b cubed+b squared c+ae bc+b squared c+bc squared ) + (ae  squared c+ae bc+ae c squared +ae bc+b squared c+bc squared +ae c squared +bc squared +c cubed)
          The denominator is the sum of the trinomial cubed.
          Synchronizing the first and second trinomials with the cube are done by multiplying each term of the first trinomial by the square of the sum of its terms, and for synchronizing the square, by the sum of its terms.
          Example:
          4 4 2+1+1
          (2+1+1) cubed =
          2[(4+2+2) + (2+1+1) + (2+1+1)] +
          [(4+2+2) + (2+1+1) + (2+1+1)] +
          [(4+2+2) + (2+1+1) + (2+1+1)] =
          [(8+4+4) + (4+2+2) + (4+2+2)] +
          [(4+2+2) + (2+1+1) + (2+1+1)] +
          [(4+2+2) + (2+1+1) + (2+1+1)]
          Synchronization of the square:
          4(4+2+2) + (2+1+1) + (2+1+1) = (16+8+8) + (8+4+4) + (8+4+4)
          Synchronization of the first power:
          16(2+1+1) = 32+16+16
          book1ch12img9
          Trinomials to be cubed and synchronized:
          4 4		5 5			
          2+1+1		2+2+1		3+1+1
          1+2+1		2+1+2		1+3+1
          1+1+2		1+2+2		1+1+3
          6 6		7 7		8 8	
          3+2+1		2+2+3		3+3+2
          3+1+2		2+3+2		3+2+3
          1+3+2		3+2+2		2+3+3
          2+3+1				
          2+1+3				
          1+2+3				
           f. Cube of any polynomial
          To find the cube of any group (polynomial) you must obtain the square first, and multiply all its terms by the terms of the first power polynomial consecutively; then add all the products in sequence.
          Formula:
          (ae +b+c+...+m) cubed = ae [(ae  squared +ae b+ae c+...+ae m) + (ae b+b squared +bc+...+bm) + (ae c+bc+c squared +...+cm)] + ... + b[(ae  squared +ae b+ae c+...+ae m) + (ae b+b squared +bc+...+bm) + (ae c+bc+c squared +...+cm)] + ... + c[(ae  squared +ae b+ae c+...+ae m) + (ae b+b squared +bc+...+bm) + (ae c+bc+c squared +...+cm)] + ... + m[(ae  squared +ae b+ae c+...+ae m) + (ae b+b squared +bc+...+bm) + (ae c+bc+c squared +...+cm)]
          Synchronization is found the same way, by consecutively multiplying by the square of the sum, or by the sum respectively
          One bar of 8 8 will give an entire countertheme of 64 bars. You should make charts and scores of the following quintomials:
          2+1+2+1+2
          2+1+2+2+1
          2+2+1+2+1
          1+2+1+2+2
          1+2+2+1+2
           g. Generalization of all Powers (any polynomial to any power)
          When you want more contrasting parts, powers higher than the cube may be used. You will mostly use small groups and small numbers.
          The procedure is the same. To get the nth power of any group, you must find the n-1 power of the same group, multiply each term of the group by the terms of the original power group, then add the products in sequence.
          If G stands for a group, this is the formula:
          G sub n = G(G sub n-1) with distribution.
          To synchronize, multiply each term of the original group by the sum of the n-1 power of the same group. To synchronize the second power group, multiply by the sum of the n-2 power of the same group, etc.
          All permutations in the power groups must be done through terms of the previous power.
          Example:
          "
        />
        <br />
        <a className="chapter-section-link" href="/book1#1.12.a" id="1.12.a"><h5>A. Continuity of Harmonic Contrasts</h5></a>
          <p class="bookText">All rhythms can be identified to a rhythmic family t. Each rhythmic family has two components: fractional continuity (expressed as <sup>1</sup>/<sub>t<sup>n</sup></sub>), and factorial continuity (expressed as t<sup>n</sup>). The following demonstrates all of the series which have been used by humans, ever.</p>
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img1.png" alt="book1ch12img1"></img></Col>
          <br />
          <br />
          <p class="bookText">Most of western music, and most current music theory, is a combination of the family t = 2, with the occasional t = 3 and t = 6.  This is likely due in no small part to the western writing system being based very directly on the two families; wholes, halves, quarters etc are all based on powers of 2, and so the standard western musical notation assumes by default that music will be in the two families of rhythm. There are of course ways to expand into other families. Typically this will involve either increasingly large numbers, or the inclusion of specially notated triplets, quintuplets, etc.</p>
          <br />
        <a className="chapter-section-link" href="/book1#1.12.b" id="1.12.b"><h5>B. Composition of Rhythmic Counterthemes</h5></a>
          <p class="bookText">What follows are a series of examples demonstrating rhythmic expansion and variation based on algebra</p>
          <p class="bookText">&emsp;a. Square of a Binomial</p>
            <p class="bookText">Formula:</p>
            <p class="equation">(a) Factorial: (a+b)<sup>2</sup> = a<sup>2</sup>+ab+ab+b<sup>2</sup></p>
            <p class="equation">(b) Fractional: (<sup>a</sup>/<sub>a+b</sub>+<sup>b</sup>/<sub>a+b</sub>)<sup>2</sup> = <sup>a<sup>2</sup></sup>/<sub>(a+b)<sup>2</sup></sub>+<sup>ab</sup>/<sub>(a+b)<sup>2</sup></sub>+<sup>ab</sup>/<sub>(a+b)<sup>2</sup></sub>+<sup>b<sup>2</sup></sup>/<sub>(a+b)<sup>2</sup></sub></p>
            <p class="bookText">Formula for Synchronization:</p>
            <p class="equation">(a) Factorial: S = a(a+b) + b(a+b)</p>
            <p class="equation">(b) Fractional: S = <sup>a</sup>/<sub>a+b</sub> &#183; (<sup>a+b</sup>/<sub>a+b</sub>) + <sup>b</sup>/<sub>a+b</sub> &#183; (<sup>a+b</sup>/<sub>a+b</sub>)</p>
            <p class="bookText">Example:</p>
            <p class="bookText">Series <sup>3</sup>/<sub>3</sub> Factorial binomials: 2+1 and 1+2</p>
            <p class="bookText">Fractional binomials: <sup>2</sup>/<sub>3</sub>+<sup>1</sup>/<sub>3</sub> and <sup>1</sup>/<sub>3</sub>+<sup>2</sup>/<sub>3</sub></p>
            <p class="equation">(<sup>2</sup>/<sub>3</sub> + <sup>1</sup>/<sub>3</sub>)<sup>2</sup> = <sup>4</sup>/<sub>9</sub>+<sup>2</sup>/<sub>9</sub>+<sup>2</sup>/<sub>9</sub>+<sup>1</sup>/<sub>9</sub>&emsp;(squaring)</p>
            <p class="equation"><sup>3</sup>/<sub>3</sub>(<sup>2</sup>/<sub>3</sub> + <sup>1</sup>/<sub>3</sub>) = <sup>6</sup>/<sub>9</sub>+<sup>3</sup>/<sub>9</sub>&emsp;(synchronization)</p>
            <p class="equation">(<sup>1</sup>/<sub>3</sub> + <sup>2</sup>/<sub>3</sub>)<sup>2</sup> = <sup>1</sup>/<sub>9</sub>+<sup>2</sup>/<sub>9</sub>+<sup>2</sup>/<sub>9</sub>+<sup>4</sup>/<sub>9</sub>&emsp;(squaring)</p>
            <p class="equation"><sup>3</sup>/<sub>3</sub>(<sup>1</sup>/<sub>3</sub> + <sup>2</sup>/<sub>3</sub>) = <sup>3</sup>/<sub>9</sub>+<sup>6</sup>/<sub>9</sub>&emsp;(synchronization)</p>
            <p class="bookText">The initial binomials synchronized with their distributive squares represent the themes. The distributive squares themselves represent counter themes. The proportion <sup>a<sup>2</sup></sup>/<sub>ab</sub> = <sup>ab</sup>/<sub>b<sup>2</sup></sub> produces harmonic contrast and gives aesthetic satisfaction.</p>
            <br />
            <Row>
              <Col>
                <br />
                <br />
                <p class="bookText">Here is a graph and the musical notation of the entire score: </p>
                <p class="bookText">As numbers grow it’s practical to find the resultants of interferences between the initial binomials (synchronized) and the resultants of distributive squares. Having these groups may be later utilized in scoring.</p>
                <br />
                <p class="bookText">In addition to this, it is important to supplement the score by r<sub>a/b</sub> where a is the determinant in the series. For example, in the previous case of <sup>3</sup>/<sub>3</sub>. The determinant is 3; therefore r<sub>3&#247;2</sub> may be added to the score.</p>
              </Col>
              <Col><img className="img-fluid img-thumbnail" src="images/book1/ch12/img2.png" alt="book1ch12img2"></img></Col>
            </Row>
            <br />
            <p class="bookText">Here is a complete graph and musical notation of the power groups, their resultants, and r_.</p>
            <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img3.png" alt="book1ch12img3"></img></Col>
            <br />
          <br />
            <p class="bookText">Factorial groups of rhythm build the entire continuity in terms of bars, while fractional groups build the bars in terms of duration-units.</p>
          <p class="bookText">&emsp;b. Square of a Trinomial</p>
          <p class="equation">Formula: (a+b+c)<sup>2</sup> = (a<sup>2</sup>+ab+ac) + (ab+b<sup>2</sup>+bc) + (ac + bc + c<sup>2</sup>)</p>
          <p class="bookText">The number of terms in a distributive square of any polynomial equals the square of the number of terms in the polynomial. Thus, a binomial gives 4 terms (2<sup>2</sup> = 4), a trinomial gives 9 terms (3<sup>2</sup> = 9). The denominator of all terms in the distributive square power-groups equals the square of the sum of all the terms. In a trinomial it equals (a+b+c)<sup>2</sup>, like (3+2+1)<sup>2</sup> = (6)<sup>2</sup> = 36.</p>
          <p class="bookText">In order to synchronize any initial polynomial with its distributive square, you need to find the products of each term but the sum of the polynomial. For example, to synchronize a trinomial with its distributive square:</p>
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img4.png" alt="book1ch12img4"></img></Col>
          <br />
          <br />
          <p class="bookText">You can express the above score in four bars in <sup>4</sup>/<sub>4</sub> assuming <sup>1</sup>/<sub>16</sub> = quarter note. You can also write the whole thing in integers, i.e., using the numerators only. Just like binomials, you would want to supplement this score with the first and second power resultants and the r<sub>a%b</sub>.</p>
          <p class="bookText">Here is the entire score:</p>
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img5.png" alt="book1ch12img5"></img></Col>
          <br />
          <br />
          <p class="bookText">In the case of 2+1+1 and 1+1+2, classical composers were able to find the exact distributive squares intuitively. They could not however find 1+2+1.</p>
          <p class="bookText">(1+2+1)+(2+4+2)+(1+2+1) is very useful for the tango.</p>
          <h4>Chart of Trinomials</h4>
          <table class="bookTextTable">
            <tr>
              <td></td>
              <td>2+1+1</td>
              <td></td>
              <td>2+2+1</td>
              <td>3+1+1</td>
              <td></td>
              <td>4+1+1</td>
            </tr>
            <tr>
              <td><sup>4</sup>/<sub>4</sub></td>
              <td>1+2+1</td>
              <td><sup>5</sup>/<sub>5</sub></td>
              <td>2+1+2</td>
              <td>1+3+1</td>
              <td><sup>6</sup>/<sub>6</sub></td>
              <td>1+4+1</td>
            </tr>
            <tr>
              <td></td>
              <td>1+1+2</td>
              <td></td>
              <td>1+2+2</td>
              <td>1+1+3</td>
              <td></td>
              <td>1+1+4</td>
            </tr>
            <tr>
              <td></td>
              <td>3+3+1</td>
              <td>2+2+3</td>
              <td>5+1+1</td>
              <td></td>
              <td>3+3+2</td>
              <td>6+1+1</td>
            </tr>
            <tr>
              <td><sup>7</sup>/<sub>7</sub></td>
              <td>3+1+3</td>
              <td>2+3+2</td>
              <td>1+5+1</td>
              <td><sup>8</sup>/<sub>8</sub></td>
              <td>3+2+3</td>
              <td>1+6+1</td>
            </tr>
            <tr>
              <td></td>
              <td>1+3+3</td>
              <td>3+2+2</td>
              <td>1+1+5</td>
              <td></td>
              <td>2+3+3</td>
              <td>1+1+6</td>
            </tr>
            <tr>
              <td></td>
              <td>4+4+1</td>
              <td>2+2+5</td>
              <td>7+1+1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><sup>9</sup>/<sub>9</sub></td>
              <td>4+1+4</td>
              <td>2+5+2</td>
              <td>1+7+1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>1+4+4</td>
              <td>5+2+2</td>
              <td>1+1+7</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <br />
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
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img6.png" alt="book1ch12img6"></img></Col>
          <br />
          <br />
          <p class="bookText">This is the square of the real “hot” rhythms. Any bar of   treated as 8/8 will give a perfect countertheme for 8 bars. Take Pennies from Heaven (Copyright 1936 by Santly-Joy, Inc., New York, USA. Reprinted by permission of the publishers). The first bar is 3+1+2+2. It is then squared to get a countertheme for the first 8 bars.</p>
          <p class="equation">(3+1+2+2)^2 = (9+3+6+6)+(3+1+2+2)+(6+2+4+4)+(6+2+4+4)</p>
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img7.png" alt="book1ch12img7"></img></Col>
          <br />
          <br />
        <p class="bookText">&emsp;d. Cube of a Binomial</p>
          <p class="bookText">Cubes add a whole new degree of harmonic contrasts. Distributive cubes serve as a new countertheme to the groups of the first and second power groups that they will be synchronized with. Cubes are related to squares as the squares are related to the first powers. The number of terms in a binomial to the third power is 2<sup>3</sup> = 8.</p>
          <p class="bookText">Formula:</p>
          <p class="equation">(a+b)<sup>3</sup> = a(a<sup>2</sup>+ab+ab+b<sup>2</sup> + b(a<sup>2</sup>+ab+ab+b<sup>2</sup>) = a<sup>3</sup>+a<sup>2</sup>b+a<sup>2</sup>b+ab<sup>2</sup>+a<sup>2</sup>b+ab<sup>2</sup>+ab<sup>2</sup>+b<sup>3</sup></p>
          <p class="bookText">The denominator is the cube of the sum of the terms. </p>
          <p class="bookText">To synchronize the cube of a binomial with the square, you must multiply each term of the square with the sum of the first power binomial.</p>
          <p class="bookText">To synchronize the first power binomial with the cube, you must multiply each term with the square of the sum of the binomial.</p>
          <p class="equation">(2+1)^3 = 2(4+2+2+1)+(4+2+2+1) = (8+4+4+2)+(4+2+2+1) = 27</p>
          <p class="bookText">Synchronization of the square with the cube:</p>
          <p class="equation">3(4+2+2+1) = 12+6+6+3 = 27</p>
          <p class="bookText">Synchronization of the first power with the cube:</p>
          <p class="equation">9(2+1) = 18+9 = 27</p>
          <p class="bookText">1+2 gives the converse.</p>
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img8.png" alt="book1ch12img8"></img></Col>
          <br />
          <br />
          <p class="bookText">This gives three contrasting pairs. Using the 1st, 2nd, and 3rd power groups in sequence gives a growing animation.</p>
          <p class="bookText">As cubes become relatively large very quickly, it’s practical to limit them for musical purposes up to the value 3. The only practical binomials are: </p>
          <table class="bookTextTable">
            <tr>
              <td>in <sup>3</sup>/<sub>3</sub></td>
              <td>in <sup>4</sup>/<sub>4</sub></td>
              <td>in <sup>5</sup>/<sub>5</sub></td>
            </tr>
            <tr>
              <td>&emsp;2+1</td>
              <td>&emsp;3+1</td>
              <td>&emsp;3+2</td>
            </tr>
            <tr>
              <td>&emsp;1+2</td>
              <td>&emsp;1+3</td>
              <td>&emsp;2+3</td>
            </tr>
          </table>
          <br />
          <p class="bookText">The previous second power resultants can easily be synchronized by multiplying the corresponding determinants.</p>
        <p class="bookText">&emsp;e. Cube of a Trinomial</p>
          <p class="bookText">This process is similar to the square, just multiply each term in the group by the distributed square of a trinomial.</p>
          <p class="bookText">Formula:</p>
          <p class="equation">(a+b+c)<sup>3</sup> = a[(a<sup>2</sup>+ab+ac) + (ab+b<sup>2</sup>+bc) + (ac+bc+c<sup>2</sup>)] + b[(a<sup>2</sup>+ab+ac) + (ab+b<sup>2</sup>+bc) + (ac+bc+c<sup>2</sup>)] + c[(a<sup>2</sup>+ab+ac) + (ab+b<sup>2</sup>+bc) + (ac+bc+c<sup>2</sup>)] = (a<sup>3</sup>+a<sup>2</sup>b+a<sup>2</sup>c+a<sup>2</sup>b+ab<sup>2</sup>+abc+a<sup>2</sup>c+abc+ac<sup>2</sup>) + (a<sup>2</sup>b+ab<sup>2</sup>+abc+ab<sup>2</sup>+b<sup>3</sup>+b<sup>2</sup>c+abc+b<sup>2</sup>c+bc<sup>2</sup>) + (a<sup>2</sup>c+abc+ac<sup>2</sup>+abc+b<sup>2</sup>c+bc<sup>2</sup>+ac<sup>2</sup>+bc<sup>2</sup>+c<sup>3</sup>)</p>
          <p class="bookText">The denominator is the sum of the trinomial cubed.</p>
          <p class="bookText">Synchronizing the first and second trinomials with the cube are done by multiplying each term of the first trinomial by the square of the sum of its terms, and for synchronizing the square, by the sum of its terms.</p>
          <p class="bookText">Example:</p>
          <p class="equation"><sup>4</sup>/<sub>4</sub>&emsp;2+1+1</p>
          <p class="equation">(2+1+1)<sup>3</sup> =<br/> 2[(4+2+2) + (2+1+1) + (2+1+1)] +<br/> [(4+2+2) + (2+1+1) + (2+1+1)] +<br/> [(4+2+2) + (2+1+1) + (2+1+1)] =<br/> [(8+4+4) + (4+2+2) + (4+2+2)] +<br/> [(4+2+2) + (2+1+1) + (2+1+1)] +<br/> [(4+2+2) + (2+1+1) + (2+1+1)]</p>
          <p class="bookText">Synchronization of the square:</p>
          <p class="equation">4(4+2+2) + (2+1+1) + (2+1+1) = (16+8+8) + (8+4+4) + (8+4+4)</p>
          <p class="bookText">Synchronization of the first power:</p>
          <p class="equation">16(2+1+1) = 32+16+16</p>
          <Col className="col-8"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img9.png" alt="book1ch12img9"></img></Col>
          <br />
          <br />
          <p class="bookText">Trinomials to be cubed and synchronized:</p>
          <table class="bookTextTable">
            <tr>
              <td><sup>4</sup>/<sub>4</sub></td>
              <td></td>
              <td><sup>5</sup>/<sub>5</sub></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>2+1+1</td>
              <td></td>
              <td>2+2+1</td>
              <td></td>
              <td>3+1+1</td>
            </tr>
            <tr>
              <td></td>
              <td>1+2+1</td>
              <td></td>
              <td>2+1+2</td>
              <td></td>
              <td>1+3+1</td>
            </tr>
            <tr>
              <td></td>
              <td>1+1+2</td>
              <td></td>
              <td>1+2+2</td>
              <td></td>
              <td>1+1+3</td>
            </tr>
            <tr>
              <td><sup>6</sup>/<sub>6</sub></td>
              <td></td>
              <td><sup>7</sup>/<sub>7</sub></td>
              <td></td>
              <td><sup>8</sup>/<sub>8</sub></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>3+2+1</td>
              <td></td>
              <td>2+2+3</td>
              <td></td>
              <td>3+3+2</td>
            </tr>
            <tr>
              <td></td>
              <td>3+1+2</td>
              <td></td>
              <td>2+3+2</td>
              <td></td>
              <td>3+2+3</td>
            </tr>
            <tr>
              <td></td>
              <td>1+3+2</td>
              <td></td>
              <td>3+2+2</td>
              <td></td>
              <td>2+3+3</td>
            </tr>
            <tr>
              <td></td>
              <td>2+3+1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>2+1+3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>1+2+3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <br />
        <p class="bookText">&emsp;f. Cube of any polynomial</p>
          <p class="bookText">To find the cube of any group (polynomial) you must obtain the square first, and multiply all its terms by the terms of the first power polynomial consecutively; then add all the products in sequence.</p>
          <p class="bookText">Formula:</p>
          <p class="equation">(a+b+c+...+m)<sup>3</sup> = a[(a<sup>2</sup>+ab+ac+...+am) + (ab+b<sup>2</sup>+bc+...+bm) + (ac+bc+c<sup>2</sup>+...+cm)] + ... + b[(a<sup>2</sup>+ab+ac+...+am) + (ab+b<sup>2</sup>+bc+...+bm) + (ac+bc+c<sup>2</sup>+...+cm)] + ... + c[(a<sup>2</sup>+ab+ac+...+am) + (ab+b<sup>2</sup>+bc+...+bm) + (ac+bc+c<sup>2</sup>+...+cm)] + ... + m[(a<sup>2</sup>+ab+ac+...+am) + (ab+b<sup>2</sup>+bc+...+bm) + (ac+bc+c<sup>2</sup>+...+cm)]</p>
          <p class="bookText">Synchronization is found the same way, by consecutively multiplying by the square of the sum, or by the sum respectively</p>
          <p class="bookText">One bar of 8/8 will give an entire countertheme of 64 bars. You should make charts and scores of the following quintomials:</p>
          <p class="equation">2+1+2+1+2</p>
          <p class="equation">2+1+2+2+1</p>
          <p class="equation">2+2+1+2+1</p>
          <p class="equation">1+2+1+2+2</p>
          <p class="equation">1+2+2+1+2</p>
        <p class="bookText">&emsp;g. Generalization of all Powers (any polynomial to any power)</p>
          <p class="bookText">When you want more contrasting parts, powers higher than the cube may be used. You will mostly use small groups and small numbers.</p>
          <p class="bookText">The procedure is the same. To get the nth power of any group, you must find the n-1 power of the same group, multiply each term of the group by the terms of the original power group, then add the products in sequence.</p>
          <p class="bookText">If G stands for a group, this is the formula:</p>
          <p class="equation">G<sup>n</sup> = G(G<sup>n-1</sup>) with distribution.</p>
          <p class="bookText">To synchronize, multiply each term of the original group by the sum of the  n-1 power of the same group. To synchronize the second power group, multiply by the sum of the n-2 power of the same group, etc.</p>
          <p class="bookText">All permutations in the power groups must be done through terms of the previous power.</p>
          <p class="bookText">Example:</p>
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch12/img10.png" alt="book1ch12img10"></img></Col>
          <br />
          <br />
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
