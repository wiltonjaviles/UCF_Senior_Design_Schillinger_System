import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch6Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 6</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 6
          UTILIZATION OF THREE OR MORE GENERATORS
          It IS CLEAR that just as rhythmic groups may be developed by the use of two generators, so, too, may they be based on the use of three——or more than three—generators. In such a case, the selection of the third generator becomes important.
          It happens that all generators pertaining to one family of rhythm belong to the same series of number-values. Such series are the series of growth; they control not only music and the arts in general, but also the proportions of the human body, as well as various forms of growth in nature. Horns, antlers, cockleshells, maple leaves, sunflower seeds and many other natural developments are controlled by the series of growth. Mathematically, one can produce an infinite number of types of the series of growth, and an infinite number of series of each type.
          The series referring to the developments mentioned above constitute one specific type of summation series. In this type of summation series, every third number-value is the sum of the two preceding number—values. For instance, if in some series, numbers 2 and 3 occur, then the next number is 5, i.e., 2 + 3.
          The best known of all series of this type is:
          1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
          For example, the spiral tangent to a maple leaf grows through 90—degree arcs and each consecutive radius of each arc follows this very series. Formation of the seeds in a sunflower follows the same series. Professor Church of Oxford University devoted his life to this problem. He found that only slight deviations may be found and then in only two cases out of a thousand, the deviations being caused by exceptionally unfavorable climatic conditions.
          An important portrait painter of New York City, Wilford S. Conrow, devoted many years of research in order to find out how this series works in relation to the human body. He found an overwhelming amount of material in the ancient Greek theories of proportions. Conrow’s deductions are that it is this particular series that makes the human body beautiful to us.
          I have found in the field of music that each style (or family) of rhythm evolves through the series of such types. Here are all the series that are useful for musical purposes:
          (1) 1, 2, 3, 5, 8, 13, ...
          (2) 1, 3, 4, 7, 11,18, ...
          (3) 1, 4, 5, 9, 14, 23, ...
          As previously mentioned, all rhythmic groups (or patterns) of one style are the resultants of the generators of the same series. Eor example, if a certain rhythmic group is identified with r 3÷2, then groups of the same style will be produced by r5÷3 or r5÷3÷2.
          For obvious reasons, Schillinger does not here present fully the entire case surrounding this statement, which is a statement of crucial significance in esthetics. His fuller statement is contained in his Mathematical Basis of the Arts, which is to be published shortly.
          The following are the important and practical combinations of generators to be Worked out:
          SERIESI. 2+3+5 3+5+8
          SERIES II. 3+4+7
          SERIES III. 4—2—5 +9.
          ae. THE TECHNIQUE OF SYNCHRONIZATION

          In order to synchronize three or more generators, it is necessary first to find their common product and their complementary factors.
          Let Us Take 2÷3÷5
          The product is 2 X 3 X 5 = 30
          The complementary factors are the quotients of the product by a generator. Thus, 30 divided by 2 = 15 means that 15 is a complementary factor of 2.
          Therefore; 
          15 (2)
          10 (3)
          6 (5)
          This method offers two resultants (r and r prime) at a time, one serving as a theme, the other as a countertheme. Generators produce r, and the complementary factors produce r prime.
          r=2+1+1+1+1+2+1+142+2+1+1+
          2+2+1+1+2+1+1+1+1+2
          H=6+4+2+3+3+2+4+6
          The rule of grouping is: group by any generator or any of the complementary factors. In the case of 2÷3÷5, grouping is available through 2 3,5,6,10,15, i.e. 2 4, 3 4, 5 4,6 8,10 8,15 8.
          Grouped through 6 8, r prime appears as follows:
          It can be seen from this example that no more rhythmically suitable countertheme can be devised. The theme makes three recurrences while the countertheme makes continuous changes in much longer values. The listener has the opportunity to hear both themes together.
          All resultants from three or more generators have these recurrences and variations as their chief characteristics.
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_01.png" alt="book1ch6img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_02.png" alt="book1ch6img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch6/screenshots/book1ch6_03.png" alt="book1ch6img3"></img>
        <Row>
          <Col><Link to="/book1ch6" className="content-links"><h5>Back to Chapter 6</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch6Schillinger;