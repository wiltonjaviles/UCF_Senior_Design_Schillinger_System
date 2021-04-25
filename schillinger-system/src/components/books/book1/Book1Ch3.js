import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch3Generator from '../../applets/Ch3Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch3() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <p>This is your last warning! Click on Book One: Theory of Rhythm on any chapter page to go back to the Book One table of contents!</p>
        <a className="chapter-section-link" href="/book1ch3#1.3" id="1.3"><h3>Chapter 3. The Techniques of Grouping</h3></a>
        <a className="content-links" href="/book1ch3schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech
          text="
          Chapter 3. The Techniques of Grouping.

          Now we will look at how the patterns may be grouped.
          There’s three fundamental forms of group ae ÷ b.
          Grouping by the product (by ae b).
          Grouping by the Major generator (by ae ).
          Grouping by the Minor generator.
          Using arbitrary variables, in order to group m elements by n groups, you divide m by n. If you were using grouping method 1 (by ae b) then you would divide m by ae b.
          In this case of binary synchronization the duration of the score equals ae b. 
          Grouping that by ae b would result in the following formula:
          ae b÷ae b=T (1)
          ie. grouping by ae b produces one T with ae b t.
          Example:
          3 ÷ 2   
          ae b÷ae b=
          6÷6 T, one measure with 6t.
          6t can be represented as any measure with 6 single units. For instance, 3 4 time where t = eighth note, or 6 4 time where t = quarter note, or 6 8 time where t = eighth note.
          Grouping by a: ae b÷a = b T (2)
          3 ÷ 2 3×2÷3=3×2÷2=2T ie two measures with 3t.
          When grouping by a, ae b must be excluded from the score or else it will sound like one T.
          Also, b becomes an optional component, causing an effect known as syncopation.
          Syncopation - a temporary displacement of the regular metrical accent in music caused typically by stressing the weak beat. (Merriam-Webster)
          Grouping by b: ae b÷b = a T (3)
          3 ÷ 2 
          3×2÷3 
          = 6÷2 
          =3T ie three measures with 2t.
          Again, exclude ae b from the score and ae is an optional component.
          It’s possible to score all the 19 cases of binary synchronization by ae b, by ae, and by b, unless ae b is too great to be used as one T.
          This table includes all the necessary scores. Some forms of T are not in common use due to the lack of adequate rhythmic patterns for their representation. ( 10 8 , 14 8 ).   
          " 
        />
        <br />
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
          <p class="bookText">6t can be represented as any measure with 6 single units. For instance, <sup>3</sup>/<sub>4</sub> time where t = ♪, or <sup>6</sup>/<sub>4</sub> time where t = ♩, or <sup>6</sup>/<sub>8</sub> time where t = ♪</p>
          <Row className="justify-content-center">
          <Col className="col-6"><img className="img-fluid img-thumbnail" src="images/book1/ch3/img1.png" alt="book1ch3img1"></img></Col>
          </Row>
          <p class="bookText">Grouping by a:       <sup>ab</sup>/<sub>a</sub> = bT  (2)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>3*2</sup>/<sub>2</sub>=2T     ie two measures with 3t.</p>
          <p class="bookText">When grouping by a, ab must be excluded from the score or else it will sound like one T.</p>
          <p class="bookText">Also, b becomes an optional component, causing an effect known as syncopation.</p>
          <p class="bookText">     Syncopation - <em>a temporary displacement of the regular metrical accent in music caused typically by stressing the weak beat.</em> (Merriam-Webster)</p>
          <Row className="justify-content-center">
          <Col className="col-6"><img className="img-fluid img-thumbnail" src="images/book1/ch3/img2.png" alt="book1ch3img2"></img></Col>
          </Row>
          <p class="bookText">Grouping by b:       <sup>ab</sup>/<sub>b</sub> = aT  (3)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>6</sup>/<sub>2</sub>=3T     ie three measures with 2t.</p>
          <p class="bookText">Again, exclude ab from the score and a is an optional component.</p>
          <Row className="justify-content-center">
          <Col className="col-6"><img className="img-fluid img-thumbnail" src="images/book1/ch3/img3.png" alt="book1ch3img3"></img></Col>
          </Row>
          <p class="bookText">It’s possible to score all the 19 cases of binary synchronization by ab, by a, and by b, unless ab is too great to be used as one T.</p>
          <br />
          <Ch3Generator />
          <br />
          <p class="bookText">This table includes all the necessary scores. Some forms of T are not in common use due to the lack of adequate rhythmic patterns for their representation. ( <sup>10</sup>/<sub>8</sub> , <sup>14</sup>/<sub>8</sub> )</p>
          <Row className="justify-content-center">
          <Col className="col-6"><img className="img-fluid img-thumbnail" src="images/book1/ch3/img4.png" alt="book1ch3img4"></img></Col>
          </Row>
          <br />
          
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
