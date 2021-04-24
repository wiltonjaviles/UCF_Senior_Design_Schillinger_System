import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch4Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 4</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 4. THE TECHNIQUES 0F FRACTIONING

          THE FIRST process by which rhythmic resultants are generated—the process just explained in the foregoing— is not entirely satisfactory for all musical purposes; it is too rich in its variety for all uses, and one may feel the need for a higher degree of uniformity which would complement this variety. Thus, the second process by which rhythmic resultants may be generated is now offered with this purpose in mind.
          Groups arrived at by means of this second process will be known as rhythmic resultants with fractioning around the axis of symmetry.
          Symbols: (ae÷b (underlined) and r ae÷b underlined
          The process of synchronization is:
          (1) Take the product of ae by ae, i.e., ae squared (read: ae square). ae becomes its own complementary factor.
          (2) Use ae as a complementary factor of b, i.e., b appears ae times.
          (3) The minor generator completes itself before the major generator. Call the first group of the minor generator b_1 (the first b). Start the second b (b_2) at the beginning of the second phase of ae. Start the third b (b_3) at the beginning of the third phase of ae, when present. This procedure is continued until both generators complete at the same time.
          b_1, b_2, b_3, . . . always appear ae times.
          To find the total number of b groups this formula is used:
          N b = ae-b+1 i.e., the number of b groups equals ae minus b plus 1.
          Example:
          3÷2 find r3÷2
          3 times 3=3 squared = 9
          3 (3)
          3 (2)
          N2=3-2+1=2, i.e., b_1 and b_2
          Fundamental Grouping by ae squared or ae only
          Grouping by ae squared.
          Grouping by ae.
          Grouping by b of the resultant: with fractioning serves the purpose of producing syncopated rhythms. In such cases the resultant and the bar do not close simultaneously in the first run of the resultant. Therefore, the resultant should be repeated from the point where it stops.
          Just when the resultant and the bar come out even may be found in the following manner:
          ae squared divided by b=Q
          The Q stands for the quotient which indicates the number of bars. It always has a remainder. The denominator of the remainder indicates how many times the resultant will have to run. For the b grouping, the resultant is used alone.
          b X Q = b Q
          Example: (1)
          ae squared divided by b=9 divided by 2=4 1 divided by 2 indicates the number of bars. 2 indicates the number of groups of r. 2 (4 1 divided by 2) = 9 
          Example: (2)
          4÷3 Find r4÷3
          4 squared =16
          4 (4)
          4 (3)
          N_3=4-3+1=2
          Grouping by ae squared
          Grouping by ae
          Grouping by b
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_01.png" alt="book1ch4img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_02.png" alt="book1ch4img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_03.png" alt="book1ch4img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_04.png" alt="book1ch4img4"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_05.png" alt="book1ch4img5"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch4/screenshots/book1ch4_06.png" alt="book1ch4img6"></img>
        <Row>
          <Col><Link to="/book1ch4" className="content-links"><h5>Back to Chapter 4</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch4Schillinger;