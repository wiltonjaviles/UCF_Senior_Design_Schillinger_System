import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch4Generator from '../../applets/Ch4Generator';
import Speech from 'react-speech';

function Book1Ch4() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.4" id="1.4"><h3>Chapter 4. The Techniques of Fractioning</h3></a>
        <a className="content-links" href="/book1ch4schillinger"><p>View the source text.</p></a>
        <Speech 
          textAsButton={true}
          displayText="Listen to this text" 
          text="
          Chapter 4. The Techniques of Fractioning

          The first process to generate rhythmic resultants is not going to work for all musical purposes as it is too “rich” in its variety for all uses. The following second process helps this issue by providing a higher degree of uniformity.
          The groups derived from the second process are referred to as “rhythmic resultants with fractioning around the axis of symmetry.”
          Symbols: a ÷ b and r a ÷ b. note the underline
          The process of synchronization is:
          1. Take the product of a by a (ie a2 ) a becomes its own complementary factor
          2. Use a as a complementary factor of b. (ie b appears a times)
          3. The minor generator completes itself before the major generator. Lets call the first group of the minor generator b1. Start b1 at the beginning of the first phase of a. Start b2 at the beginning of the second phase of a. And repeat this process until both generators complete at the same time.
          To find the total number of b groups:
          Nb=a-b+1
          *image*
          *image*
          (Fig. 26) Note the alignment of the b groups to the waveform of a. This is what step 3 means when you “start b2 at the beginning of the second phase of a.” second phase being the change in the waveform. (I’m using waveform informally here)
          *image*
          (Fig. 27) This is a musical note representation of Figure 26.
          *image*
          *image*
          Grouping by b produces syncopated rhythms. The resultant and the bar do not close at the same time during the first run of the resultant. This means the resultant needs to be repeated so they stop at the same time.
          We can find when they will align from the following:
          *image*
          This will give us the number of bars the resultant will have. It will always have a remainder. The denominator of the remainder will tell us how many times the resultant will have to be repeated.
          *image*
          *image*
          *image*
          *image*
          *image*
          *image*
          *image*
          *image*
          " 
        />
          <p class="bookText">The first process to generate rhythmic resultants is not going to work for all musical purposes as it is too “rich” in its variety for all uses. The following second process helps this issue by providing a higher degree of uniformity.</p>
          <p class="bookText">The groups derived from the second process are referred to as “rhythmic resultants with fractioning around the axis of symmetry.”</p>
          <p class="bookText">Symbols:   <u>a ÷ b</u> and r<sub><u>a ÷ b</u></sub> note the underline</p>
          <p class="bookText">The process of synchronization is:</p>
          <ol>
            <li class="bookText">Take the product of a by a. (ie a<sup>2</sup> ) a becomes its own complementary factor</li>
            <li class="bookText">Use a as a complementary factor of b. (ie b appears a times)</li>
            <li class="bookText">The minor generator completes itself before the major generator. Lets call the first group of the minor generator b<sub>1</sub>. Start b<sub>1</sub> at the beginning of the first phase of <em>a</em>. Start b<sub>2</sub> at the beginning of the second phase of a. And repeat this process until both generators complete at the same time.</li>
          </ol>
          <p class="bookText">To find the total number of b groups:</p>
          <p class="bookText">         N<sub>b</sub>=a-b+1</p>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <p class="bookText">(Fig. 26) Note the alignment of the b groups to the waveform of a. This is what step 3 means when you “start b<sub>2</sub> at the beginning of the second phase of a.” second phase being the change in the waveform. (I’m using waveform informally here)</p>
          <h3>*image*</h3>
          <p class="bookText">(Fig. 27) This is a musical note representation of Figure 26.</p>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <p class="bookText">Grouping by b produces syncopated rhythms. The resultant and the bar do not close at the same time during the first run of the resultant. This means the resultant needs to be repeated so they stop at the same time.</p>
          <p class="bookText">We can find when they will align from the following:</p>
          <h3>*image*</h3>
          <p class="bookText">This will give us the number of bars the resultant will have. It will always have a remainder. The denominator of the remainder will tell us how many times the resultant will have to be repeated.</p>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <h3>*image*</h3>
          <Ch4Generator />      
        <br /> 
        <Row>
          <Col><Link to="/book1ch3" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch5" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch4;
