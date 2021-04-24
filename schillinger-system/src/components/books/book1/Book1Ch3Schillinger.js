import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch3Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 3</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 3. THE TECHNIQUES 0F GROUPING.

          HAVING SEEN how two monomial periodicities produce a resultant, we have now to consider the manner in which these patterns may be grouped.
          There are three fundamental forms of grouping of ae÷b.
          (l) Grouping by the product (by ae b); 
          (2) Grouping by the major generator (by ae);
          (3) Grouping by the minor generator (by b).
          In order to group m elements by n, it is necessary to divide m by n. Thus grouping by ae b is the quotient of m/ae b.
          As in the case of binary synchronization the duration of the entire score equals ae b. The formula for grouping by ae b is:
          ae b/ae b=T (1)
          i.e., grouping by ae b produces one T with ae bt.
          Example:
          3÷2 ae b/ae b=6/6=T, one measure with 6t.
          The 6t; can be represented in musical notation as any measure with 6 single units. For instance, 3/4; time, where t = eigth note, or 6/4 time, where t = quarter note, or 6/8 time,
          where t = eighth note.
          Grouping by a: ae b/ae= bT (2)
          In grouping by a, ae b must be excluded from the score, as the presence of the latter neutralizes one of the accents, which as a result makes it sound like one T.
          3÷2 ae b/ae=6/3=2T, i.e., two measures with 3t.
          When grouped by a, b becomes an optional component, causing an effect known as syncopation.
          Grouping by b: ae b/b=ae T (3)
          Exclude ae b from the score and assign a as an optional component.
          3÷2 ae b/b=6/2=#T i.e., three measures with 2t.
          It is practical to score all the 19 cases of binary synchronization by ae b, by a, and by b, with the exception of cases in which ae b is too great to be used as one T. The latter consideration is merely a concession to musical habits.
          The following table includes all the necessary scores. The reason that some of the forms of T, like 10/8 or 14/8, are not in common use is merely clue to the lack of adequate rhythmic patterns for their representation
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_01.png" alt="book1ch3img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_02.png" alt="book1ch3img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch3/screenshots/book1ch3_03.png" alt="book1ch3img3"></img>
        <Row>
          <Col><Link to="/book1ch3" className="content-links"><h5>Back to Chapter 3</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch3Schillinger;