import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch5Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 5</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 5. COMPOSITION OF GROUPS BY PAIRS
          THESE TECHNIQUES of obtaining resultants may be extended further so as to evolve processes by which we may compose rhythmic resultants in pairs.
          In the ordinary exposition of a musical theme, it is customary to state the theme twice in such a way that for the first time the theme does not sound entirely completed, while for the second time it is brought to a completion. As composers of the past (as well as composers of the present) do not know how to do it, they usually resort to variations of the cadence harmomically. But it remains a pure problem of rhythm nevertheless.
          Composers have also been confronted with the problems of expansion and contraction in the two adjacent groups. Moving from a long to a short group is what we mean by contraction, the opposite is expansion.
          These procedures were performed crudely even by well—reputed composers. For instance, L. van Beethoven in his piano sonata, No. 1, in the first movement at the end of exposition, states a two—bar group three times. On the third statement, he makes an expansion by merely holding the chord through the whole bar (a whole note), thus adding one more bar. In his piano sonata, No. 7, (in the beginning of the finale) he has a four—bar group. There are many rests in this group, and the rests are injected a priori with the idea of taking them out afterwards. Thus he makes a three-bar group out of a four-bar group. Even this crude form of contraction was rarely attempted by Beethoven in his long career. 
          Here, we shall present a general method of balancing, expanding, and contracting a pair of adjacent groups, no matter what the rhythmic constitution of such groups may be. .
          As the resultants which have identical generators have a great deal in common, such performance gives the utmost esthetic satisfaction.
          (ae) Balance B = balance

          B = r underlined ae divided by b + r ae divided by b + ae times (ae-b)
          The above means that in order to balance two resultants with identical generators, take the resultant of ae to b, with fractioning, add the resultant of ae. to b and add ae times a minus b. Grouping for such pairs is through ae only.
          Example:
          B =r3÷2+r3÷2+3 times (3—2) =[(2+1)+(1+1+1)+(1+2)]+
          [(2+1)+(1+2)+3]
          B= r4÷3+r4÷3+4 times (4-3)=[(3+1)+(2+1+1)+
          (1+1+2)+(1+3)]+[(3+1)+(2+2)+(1+3)+4].
          Balance does not seem natural when ae > 2b, ae > 3b, i.e., when ae is greater than 2b or greater than 3b. Yet it may be accomplished through a general procedure.
          (1) Take r underlined ae÷b
          (2) Take r ae÷b as many times as it enters (as divisor) into ae squared.
          (3) Add one total duration which equals the difference between ae squared and 2 ae b, ae squared and 3 ae b, etc.
          Example:
          5+2 5> 2 times 2
          (B) Expansion E = expansion

          E =r ae÷b=r underlined ae+b Grouping by ae only
          Example:
          E = r3÷2+ r3÷2= [(2+1) + (1+2) 1 + [ (2+1) + (1+1+1) + (1+2)]
          (C) Contraction C = contraction
          
          C=r underlined ae÷b+ r ae÷b  Grouping by ae only.
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_01.png" alt="book1ch5img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_02.png" alt="book1ch5img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch5/screenshots/book1ch5_03.png" alt="book1ch5img3"></img>
        <Row>
          <Col><Link to="/book1ch5" className="content-links"><h5>Back to Chapter 5</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch5Schillinger;