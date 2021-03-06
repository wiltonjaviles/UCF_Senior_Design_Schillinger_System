import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch7Generator from '../../applets/Ch7Generator';
import TextToSpeech from '../../TextToSpeech';
import Playback from '../../Playback';
import {r_,r,toABC} from '../../functions/generators';



function Book1Ch7() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch7#1.7" id="1.7"><h3>Chapter 7. Resultants Applied to Instrumental Forms</h3></a>
        <a className="content-links" href="/book1ch7schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
          text="
          Chapter 7. Resultants Applied to Instrumental Forms.
          
          Time rhythm refers to the periodicity of attacks, or the intervals of time at which the attacks occur.
          A. Instrumental Rhythm.
          Instrumental rhythm is made up of the number of places of attack. For example, beating two kettle drums of different pitches in sequence results in two places of attack. 
          Synchronizations of time rhythm and instrumental rhythm are subject to the same laws of synchronization and interference as time periodicity. When the number of places in an instrumental group does not coincide with the number of terms in a time group, then a common denominator will define the number of time groups and the number of instrumental groups until their recurrence.
          For example, if we use two differently pitched kettle drums, the entire figure r3÷2 will close after the first group is over because the number of places in the group is 2 (2 drums) and the number of terms in the time group is four (4 ÷ 2 = 2). In essence, the instrumental group appears twice, while the rhythmic resultant appears once.
          Taking the same case of the two kettle drums for r underlined 3÷2, we get a totally different result. The number of attacks in the instrumental groups is still 2, while the number of terms in the rhythmic result is 7, (2+1+1+1+1+1+2). 7×2=14. Seven has a complementary factor 2, and vice versa. The kettle drum 2 attack figure will appear 7 times, while the rhythmic resultant appears twice.
          This principle can be carried out to any desired degree of complexity, depending on the common denominator between the number of terms in a rhythmic group and the number of attacks in an instrumental group.
          Let us take a motif consisting of four different pitches, such as c, d, e, f. By superimposing r3÷2, we obtain one group without recurrence because the number of pitches (intonation attacks) and the number of terms in the rhythmic resultant (time attacks) are equal (4 ÷ 4 = 1). Taking the same four notes and superimposing r3÷2 we get 7 × 4 = 28. The rhythmic group has 7 attacks has the complementary factor of 4, and the melody having 4 attacks has the complementary factor of 7.
          Utilizing this technique makes it possible to run a very simple motif almost infinitely. The duration of continuous variability depends on a common denominator. Rhythmic continuity through instrumental interference may be found in many arrangements of fox-trots. 6 uniform attacks (2 false triplets) placed in a common time measure (= 8 8) produces and interference of 8 ÷ 6. 8 ÷ 6 reduces to 4 ÷ 3. Six gets the complementary factor 4, and eight gets the complementary factor of 3.
          B. Applying the Principles of Interference to Harmony.
          The most effective forms of accompaniment are produced when the principles of interference of rhythmic and instrumental groups are applied to harmony. Applying the principles makes it possible to correlate a number of accompaniments simultaneously. The illustrations of harmony are restricted to three of the simplest instrumental forms:
          The two-attack instrumental figure. The first attack is the lower bass. The second attack is the remaining upper parts of the chord. Example. Polka
          The four-attack instrumental figure. The first attack is the lower bass. The second attack is the upper part of the chord. The third attack is another detached bass. The fourth attack is the upper part of a chord. Example. Fox-trot
          The six-attack instrumental figure. The first attack is the lower detached bass. The second attack is the upper part of the chord. The third attack is the middle detached bass. The fourth attack is the upper part of the chord. The fifth attack is the upper detached bass. The sixth attack is the upper part of the chord.
          The following illustrate the continuous run of these instrumental forms of harmony with various simpler rhythmic resultants, all used one chord:
          One can compose other instrumental forms of harmony with as many as 16 attacks - such as an alternation of the four different notes in the bass, with the upper part of the chord doubled in two octaves:
           16 attacks
          A greater number of attacks in an instrumental figure can be produced using the arpeggio technique.
          When one time-group is distributed through the different places of attack, different individual parts become the resultants of interference between the time and the instrumental groups. For example, if we start with four attacks and superimpose 2+1+1 over it, the resultant is 2+3+3 and the bass 3+2+3, as shown in the following:
           Four attacks  2+1+1 (three attacks)
          In the following example, the melody is generated from the resultant of 5÷2, the resultant is in 5 4 time, but the accompaniment is in common time.
          For now this result is more of a curiosity, but techniques like this will be used later to develop rich textures in a full score.
          "
        />
          <br />
          <p class="bookText">Time rhythm refers to the periodicity of attacks, or the intervals of time at which the attacks occur.</p>
        <a className="chapter-section-link" href="/book1ch7#1.7.a" id="1.7.a"><h5>A. Instrumental Rhythm</h5></a>
          <p class="bookText">Instrumental rhythm is made up of the number of <em>places</em> of attack. For example, beating two kettle drums of different pitches in sequence results in two places of attack. Synchronizations of time rhythm and instrumental rhythm are subject to the same laws of synchronization and interference as time periodicity. When the number of places in an instrumental group does not coincide with the number of terms in a time group, then a common denominator will define the number of time groups and the number of instrumental groups until their recurrence. For example, if we use two differently pitched kettle drums, the entire figure <em>r</em><sub>3÷2</sub> will close after the first group is over because the number of places in the group is 2 (2 drums) and the number of terms in the time group is four (4 ÷ 2 = 2). In essence, the instrumental group appears twice, while the rhythmic resultant appears once.</p>
          <Row className="justify-content-center">
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img1.png" alt="book1ch7img1"></img></Col>
          </Row><br />
          <Playback abc={toABC(r(3,2),['C','G'],true)} /><br />
          <Row className="justify-content-center">
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch6/img2.png" alt="book1ch7img2"></img></Col>
          </Row>
          <br /> <br />
          <p class="bookText">Taking the same case of the two kettle drums for <em>r</em><sub><u>3÷2</u></sub>, we get a totally different result. The number of attacks in the instrumental groups is still 2, while the number of terms in the rhythmic result is 7, (2+1+1+1+1+1+2). 7×2=14. Seven has a complementary factor 2, and vice versa. The kettle drum 2 attack figure will appear 7 times, while the rhythmic resultant appears twice.</p>
          <Row className="justify-content-center">
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img2.png" alt="book1ch7img2"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r_(3,2,true),['C','G'],true)} />
          <br /> <br />
          <p class="bookText">This principle can be carried out to any desired degree of complexity, depending on the common denominator between the number of terms in a rhythmic group and the number of attacks in an instrumental group.</p>
          <p class="bookText">Let us take a motif consisting of four different pitches, such as c, d, e, f. By superimposing <em>r</em><sub>3÷2</sub>, we obtain one group without recurrence because the number of pitches (intonation attacks) and the number of terms in the rhythmic resultant (time attacks) are equal (4 ÷ 4 = 1). Taking the same four notes and superimposing <em>r_</em><sub>3÷2</sub> we get 7 × 4 = 28. The rhythmic group has 7 attacks has the complementary factor of 4, and the melody having 4 attacks has the complementary factor of 7.</p>
          <Row className="justify-content-center">
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img3.png" alt="book1ch7img3"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(r_(3,2,true),['c','d','e','f'],true)} />
          <br /> <br />
          <p class="bookText">Utilizing this technique makes it possible to run a very simple motif almost infinitely. The duration of continuous variability depends on a common denominator. Rhythmic continuity through instrumental interference may be found in many arrangements of fox-trots. 6 uniform attacks (2 false triplets) placed in a common time measure (= 8/8) produces and interference of 8 ÷ 6. 8 ÷ 6 reduces to 4 ÷ 3. Six gets the complementary factor 4, and eight gets the complementary factor of 3.</p>
          <Row className="justify-content-center">
          <Col className="col-10"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img4.png" alt="book1ch7img4"></img></Col>
          </Row>
          <br />
          <Playback abc={toABC(['1','+','1','+','1','+','1','+','1','+','1','+','1','+','1'],['e','c','G'],true)} />
          <br /> <br />
        <a className="chapter-section-link" href="/book1ch7#1.7.b" id="1.7.b"><h5>B. Applying the Principles of Interference to Harmony</h5></a>
          <p class="bookText">The most effective forms of accompaniment are produced when the principles of interference of rhythmic and instrumental groups are applied to harmony. Applying the principles makes it possible to correlate a number of accompaniments simultaneously. The illustrations of harmony are restricted to three of the simplest instrumental forms:</p>
          <ol>
            <li class="bookText">The two-attack instrumental figure. The first attack is the lower bass. The second attack is the remaining upper parts of the chord. Ex. Polka</li>
            <li class="bookText">The four-attack instrumental figure. The first attack is the lower bass. The second attack is the upper part of the chord. The third attack is another detached bass. The fourth attack is the upper part of a chord. Ex. Fox-trot</li>
            <li class="bookText">The six-attack instrumental figure. The first attack is the lower detached bass. The second attack is the upper part of the chord. The third attack is the middle detached bass. The fourth attack is the upper part of the chord. The fifth attack is the upper detached bass. The sixth attack is the upper part of the chord.</li>
          </ol>
          <Row className="justify-content-center">
          <Col className="col-9"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img5.png" alt="book1ch7img5"></img></Col>
          </Row>
          <br /> <br />
          <p class="bookText">The following illustrates the continuous run of these instrumental forms of harmony with various simpler rhythmic resultants, all using one chord:</p>
          <Ch7Generator />
          
          
          <p class="bookText">One can compose other instrumental forms of harmony with as many as 16 attacks - such as an alternation of the four different notes in the bass, with the upper part of the chord doubled in two octaves:</p>
          <p class="bookText">&emsp;16 attacks</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img10.png" alt="book1ch7img10"></img></Col>
          </Row>
          <p class="bookText">A greater number of attacks in an instrumental figure can be produced using the arpeggio technique.</p>
          <p class="bookText">When one time-group is distributed through the different places of attack, different individual parts become the <em>resultants of interference between the time and the instrumental groups</em>. For example, if we start with four attacks and superimpose 2+1+1 over it, the resultant is 2+3+3 and the bass 3+2+3, as shown in the following:</p>
          <p class="bookText">&emsp;Four attacks&emsp;&emsp;2+1+1 (three attacks)</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img11.png" alt="book1ch7img11"></img></Col>
          </Row>
          <br /> <br />
          <p class="bookText">In the following example, the melody is generated from the resultant of 5%2, the resultant is in 5/4 time, but the accompaniment is in common time.</p>
          <Row className="justify-content-center">
          <Col className="col-7"><img className="img-fluid img-thumbnail" src="images/book1/ch7/img12.png" alt="book1ch7img12"></img></Col>
          </Row>
          <p class="bookText">For now this result is more of a curiosity, but techniques like this will be used later to develop rich textures in a full score.</p>
          <br />
        <br />
        
        <br /> 
        <Row>
          <Col><Link to="/book1ch6" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch8" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br /> 
      </Container>
    </div>
  );
}

/*
<p class="bookText">3 ÷ 2</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch7/img6.png" alt="book1ch7img6"></img>
          <br />
          <br />
          <img className="img-fluid img-thumbnail" src="images/book1/ch7/img7.png" alt="book1ch7img7"></img>
          <p class="bookText">4 ÷ 3</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch7/img8.png" alt="book1ch7img8"></img>
          <br />
          <br />
          <img className="img-fluid img-thumbnail" src="images/book1/ch7/img9.png" alt="book1ch7img9"></img>
*/

export default Book1Ch7;
