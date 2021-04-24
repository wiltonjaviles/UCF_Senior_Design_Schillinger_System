import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch10Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 10</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 10. GENERALIZATION oF VARIATION TECHNIQUES
          ae. PERMUTATIONS OF THE HIGHER ORDER.
          
          In order to increase the quantity of material evolving through the variation method from the original group, the method of permutations of a higher order may be used. The original element or group produces variations which in turn become the elements of the next order. The quantity of elements in the next successive order equals the square of the number of the elements of the preceding order. If the original number of elements in a group is 3, there will be 9 elements on the second order, 27 on the third, etc., through circular permutations. If the original number of elements in a group is 3, and general permutations are used, this will give 6 elements in the second order, 720 in the third order, etc.
          Indicating the original elements as a of the first order (ae 1), b of the first order (b 1) . . ..and permuting them, the elements of the following order, which represent a group of the elements of the preceding order, are acquired. The technique of evolving the elements of the following order acquires this appearance:
          This device is particularly important when one wishes to evolve a large quantity of material from the original group. or when the number of elements in the original group is exceedingly small. If the procedure of the permutations carried out through the sixth order concerned only 2 elements in a group, we would obtain ultimately only 2 to the 6 = 64 elements.
          Music of animated motion often contains a much greater quantity of rhythmic elements (durations, rests, etc.). For example, take an average waltz. In ordinary printing we get at least 4- bars to a line, and 5 lines to a page. In music moving in eighth notes for 3 pages, we would get 360 durations
          Example:
          Application of the Permutations of the Higher Orders to the Original Group.
          Moving for 8 more- bars, i.e., carrying out the permutations of the 4th order to their completion, we obtain 16- bars containing great variety as compared to the usual continuous recurrence. This device is particularly useful when the character of music must be retained for considerably longer time than the original rhythmic group permits. Instead of making continuous repetitions of the original group, or recurrences of the larger groups, it is possible with this device to go on continuously for an indefinite period of time.
          In musical backgrounds for motion picture photoplays, when the scene develops in a definite locality—associated with definite rhythmic forms of expression, it may be desirable to extend this homogeneous rhythmic character to 10 or 15 minutes. In the case of a Cuban scene, rhumba rhythms are considered characteristic of the locality. The audience is distracted from action on the screen by the musical background when a definite dance composition is played repeatedly. This annoys the audience and never helps to bring out the dramatic plot. on the contrary, it produces conflicts with the plot. A neutral background, being homogeneous and yet continuously varied, will serve the purpose much better.
          Permutations of the higher orders based on the original group with 3 elements (ae 1, b 1, c 1) offer the following combinations by 2: ae 1 + b 1, ae 1 + C 1, b 1 + C 1. These are the three possible alternatives when 2 elements out of 3 are used. The 2 elements form a group of 3, following the regulations described in the preceding paragraph concerning the higher orders of the 2 elements.
          The original group containing 3 elements has only one combination by 3:
          ae 1+ b 1+ c 1
          The second order permutations on the 3 elements appear as follows:
          ae 1+b 1+C 1=ae 2
          ae 1+C 1+b 1=b 2
          C 1+ae 1+b 1=c 2
          b 1+ae 1+C 1=d 2
          b 1+C 1+ae 1=e 2
          C 1+b 1+ ae 1=f 2
          These 6 elements of the second order produce, in turn, combinations by 2, by 3, by 4, by 5 and by 6.
          Combinations by 2:
          The total number of cases: 15 times 2 = 30
          Combinations by 3:
          The total number of cases: 20 times 6=120
          Combinations by 4:
          Total number of cases: 15 times 24 = 360
          Combinations by 5:
          Total number of cases: 6 times 120 = 720
          Combinations by 6 :
          Total number of cases: 1 times 720 = 720
          All the recurring elements are eliminated from these charts, which may be consulted for coefficients of recurrence. For example, a trinomial combination from 2 elements, ae1 and b1, with a coefficient 2 for the first element becomes 2ae 1 + b 1. This is a trinomial with 2 identical elements, and is subjected to circular permutations only. Similar cases occur with 4 elements having 2 identical terms, 2 identical pairs or 3 identical terms. Similar cases occurring with 5 and 6 elements may contain 2, 3 and more identical elements. They will be treated as coefficients of recurrence.
          Example:
          Trinomial Of The Third Order
          When the quantities exceed the necessary amount, one can limit the number of variations by reducing them to circular permutations only. The illustrations above are applicable to rests, accents and other group formations.
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/screenshots/book1ch10_01.png" alt="book1ch10img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/screenshots/book1ch10_02.png" alt="book1ch10img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/screenshots/book1ch10_03.png" alt="book1ch10img3"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch10/screenshots/book1ch10_04.png" alt="book1ch10img4"></img>
        <Row>
          <Col><Link to="/book1ch10" className="content-links"><h5>Back to Chapter 10</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch10Schillinger;