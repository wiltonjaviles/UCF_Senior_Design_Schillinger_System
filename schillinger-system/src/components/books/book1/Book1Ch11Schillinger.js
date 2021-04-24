import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch11Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 11</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 11. COMPOSITION OF HOMOGENEOUS RHYTHMIC CONTINUITY
          ANY rhythmic group may be adapted to the processes of growth in simultaneity and continuity. There are three fundamental procedures, varying with regard to the quantity of material to be evolved. The ﬁrst process gives the minimum quantity; the second, the intermediate; and the third, the maximum quantity. Select them in accordance with the requirements of each speciﬁc case
          (1) We may produce elements from a given rhythmic group by means of splitting the group through the simplest divisor. For example, the group r4÷ 3(grouped by 4) represents a 4- bar continuity in 4/4 time. 4 may be divided by 2 and thus we obtain two groups: a_1 comprising the ﬁrst two bars, and  comprising the second two bars. This gives us an 8-bar, 2-part continuity, i.e., the quantity of the original material is doubled both in simultaneity and continuity
          When a group is not divisible by 2, like r5÷3 (grouped by 5), it may become divisible by 3. In this case it produces 3 bars in 5 4 , 5 8, or any other quintuplc time—the ﬁrst bar being 211, the second b_1 and the third c_1.
          (2) We may produce elements from a given rhythmic group by means of splitting it through individual bars. For example, in r4÷3 grouped in 4 bars, each individual .bar becomes an element. The ﬁrst is al, the second b1, the third ' c_1, and the fourth d_1. This splitting process produces a 16-bar continuity in 4 parts, ie, both simultaneity and continuity of the original group become quadrupled.
          This continuity is the result of circular permutations. Using general permutations for this group, and splitting it in this particular fashion, we obtain 4 bars in 4 parts with 24 different variations, i.e., 96 bars in 4 parts. In a casein which the simplest divisor corresponds to the splitting by individual bars,as in the above-mentioned case of r5÷3, this becomes the only possible procedure.
          Any bar splitting will ultimately give a score in which the number of parts equals the number of bars, and the number of bars equals the number of circular or general permutations available for such number. For example, taking r3÷5 and having it grouped in 8 bars, we obtain 8-part simultaneity in 64-bar continuity through circular permutations, and 276,480 bar continuity through general permutations as the total number of permutations of 8 elements equals 40,320.
          (3)We may produce elements from a given rhythmic group by means of splitting the group through the individual attacks (terms). For example, if we take the group r4÷3 we obtain 10 individual terms. These 10 terms are subjected to growth in simultaneity and continuity. The original group arranged in 4 bars of the 4/4 time produces a 10-part simultaneity. These 10 bars evolve into a 40-bar continuity (4 X 10). Thus the total original score has 40 bars in 10 parts.
          While in this case there is a coincidence ot the ﬁgure 1 + 2 + 1, the number of parts moving simultaneously obscures it entirely to the human ear. This 40-bar, 10-part score produces 10 elements of 4 bars each. 10 elements give 3,628,800 permutations, which give a total of 145,152,000 bars in 10 parts.
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_01.png" alt="book1ch11img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_02.png" alt="book1ch11img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch11/screenshots/book1ch11_03.png" alt="book1ch11img3"></img>
        <Row>
          <Col><Link to="/book1ch11" className="content-links"><h5>Back to Chapter 11</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch11Schillinger;