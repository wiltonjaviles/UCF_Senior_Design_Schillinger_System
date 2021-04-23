import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import Ch2Generator from '../../applets/Ch2Generator';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch2() {
  return (
    <div>
      <Container>
        <br /> 
        <Link to="/book1" className="content-links"><h1>Book One: Theory of Rhythm</h1></Link>
        <a className="chapter-section-link" href="/book1ch2#1.2" id="1.2"><h3>Chapter 2. Interferences of Periodicities</h3></a>
        <a className="content-links" href="/book1ch2schillinger"><h5>View the source text.</h5></a>
        <TextToSpeech 
        text="
          Chapter 2. Interferences of Periodicities.

          Now we shall discuss combining one periodicity (say, 3, 3, 3, 3) with another (say, 4, 4, 4, 4), called interference.
          The periodicity with larger numbers (in our case, 4) will be called the “major generator”; the smaller will be called the “minor generator”. The way we will express two synchronized generators producing one interference group is a ÷ b . The resultant of interference is r a ÷ b.
          
          Binary Synchronization.
          
          To synchronize two periodicities, you must.
          1. Find common product or common denominator (c.p. or c.d.).
          2. Find complementary factors of both generators; the complementary factor of a is (a b)÷a=b, and the complementary factor of b is (a b)÷b=a.
          After this, you must draw a graph of both generators. To find the resultant (r), draw vertical lines from all attack points on both generators. The resultant is found by drawing lines through these points, placing accents over intersecting points. Then the common product is written, numbers are drawn out, and the whole thing is translated into musical notation.
          When a equals any number and b equals 1, the resultant (r) represents a musical “bar”. The formula for a musical bar is.
          T=r a ÷ 1.
          (the musical bar (T) is the resultant of a to one)
          Example:
          
          note: sometimes Schillinger uses ÷ to indicate the a and b relationship, but also sometimes uses colon to indicate the relationship instead. These both mean interference.
          Here is the example in numbers, graph, and musical notation:
          
          The resultant differs from b with respect to the accent in r (because both generators had an attack there).
          This establishes a bar with a numerator of 2 i.e. 2 2, 2 4, etc. When the bar is 2 2, 1/2 = half note, when the bar is 2 4, 1/2 = quarter note.
          Another example.
          
          This case shows musical bars with 3 as a numerator. I.e..
          
          A third example.
          
          The importance of this is that even the most noted composers do not seem to know that an accent should not be forced but should result from the superimposition of a on b.
          When it comes to the application of higher numerators (5, 7, 11, etc), the music becomes incomprehensible to the average listener and the composer is the one to blame. When it comes to the shifting of accents which aren’t correctly expressed (through a and b), the performance suffers and listeners are confused.
          Non-uniform rhythmic resultants occur when b ≠ 1. With the procedure we described above, you can find all rhythmic patterns used in the past, present, and future.
          Example:
          
          
          Grouping.
          
          There are three forms of grouping.
          1. Grouping by c.p. In this case, c.p. = 6.
          
          2. Superimposition of a. 
          a = 3. In this case, c.p. is excluded and b becomes merely an optional component.
          
          3. Superimposition of b. 
          b = 2. c.p. is excluded; ae becomes optional.
          
          Another Example.
          
          These show the natural nucleus of a musical score, in which c.d. Units are arpeggio or obligato figures, a and b are chords, r rhythms of the theme, and c.p. Sustained tones (“pedla point”).
          Resultants have the following characteristics:
          Recurrence.
          Balance.
          Contrasts.
          Inversion.
          Thus, harmony of form is a product of physical efficiency.
          All rhythmic patterns in music are either complete or incomplete resultants.
          When all of the resultants up to ae = 9 have been found, you can create all rhythm patterns in the past, present, and even the future.
          All the necessary generators are:
          
          When c.p. is greater than 15, use ae or b superimposition only.
          When the numbers get large, a musical eighth note is the best denominator. All reducible fractions have been excluded from the above chart.
          The a and b components show how ‘cross-rhythms’ should be performed. Beat ae and b with both hands, listen to the resultant.
          " 
        />
          <br></br>
          <p class="bookText">Now we shall discuss combining one periodicity (say, 3, 3, 3, 3) with another (say, 4, 4, 4, 4), called interference.</p>
          <p class="bookText">The periodicity with larger numbers (in our case, 4) will be called the “major generator”; the smaller will be called the “minor generator”. The way we will express two synchronized generators producing one interference group is a ÷ b *. The resultant of interference is r<sub>a ÷ b</sub>.</p>
        <a className="chapter-section-link" href="/book1ch2#1.2.a" id="1.2.a"><h5>A. Binary Synchronization</h5></a>
          <p class="bookText">To synchronize two periodicities, you must:</p>
          <ol>
            <li class="bookText">Find common product or common denominator (c.p. or c.d.)</li>
            <li class="bookText">Find complementary factors of both generators; the complementary factor of a is (ab)/a=b, and the complementary factor of b is (ab)/b=a.</li>
          </ol>
          <p class="bookText">After this, you must draw a graph of both generators. To find the resultant (r), draw vertical lines from all attack points on both generators. The resultant is found by drawing lines through these points, placing accents over intersecting points. Then the common product is written, numbers are drawn out, and the whole thing is translated into musical notation.</p>
          <p class="bookText">When a equals any number and b equals 1, the resultant (r) represents a musical “bar”. The formula for a musical bar is:</p>
          <p class="bookText">T=r<sub>a ÷ 1</sub></p>
          <p class="bookText">(the musical bar (T) is the resultant of a to one)</p>
          <p class="bookText">Example:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img1.png" alt="book1ch2img1"></img>
          <p class="bookText">*note: sometimes Schillinger uses ÷ to indicate the a and b relationship, but also sometimes uses : to indicate the relationship instead. These both mean <em>interference</em></p>
          <p class="bookText">Here is the example in numbers, graph, and musical notation:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img2.png" alt="book1ch2img2"></img>
          
          <p class="bookText">The resultant differs from b with respect to the accent in r (because both generators had an attack there). </p>
          <p class="bookText">This establishes a bar with a numerator of 2 i.e. 2/2, 2/4, etc. When the bar is 2/2, 1/2 = 𝅗𝅥, when the bar is 2/4, 1/2 = ♩. </p>
          <p class="bookText">Another example:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img3.png" alt="book1ch2img3"></img>
          <p class="bookText">This case shows musical bars with 3 as a numerator. I.e.: </p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img4.png" alt="book1ch2img4"></img>
          <p class="bookText">A third example:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img5.png" alt="book1ch2img5"></img>
          <p class="bookText">The importance of this is that even the most noted composers do not seem to know that an accent should not be forced but should result from the superimposition of a on b.</p>
          <p class="bookText">When it comes to the application of higher numerators (5, 7, 11, etc), the music becomes incomprehensible to the average listener and the composer is the one to blame. When it comes to the shifting of accents which aren’t correctly expressed (through a and b), the performance suffers and listeners are confused.</p>
          <p class="bookText">Non-uniform rhythmic resultants occur when b ≠ 1. With the procedure we described above, you can find all rhythmic patterns used in the past, present, and future.</p>
          <p class="bookText">Example:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img6.png" alt="book1ch2img6"></img>
        <a className="chapter-section-link" href="/book1ch2#1.2.b" id="1.2.b"><h5>B. Grouping</h5></a>
          <p class="bookText">There are three forms of grouping:</p>
          <p class="bookText">1. <b>Grouping by c.p.</b> In this case, c.p. = 6</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img7.png" alt="book1ch2img7"></img>
          <p class="bookText">2. <b>Superimposition of a</b> a = 3. In this case, c.p. is excluded and b becomes merely an optional component.</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img8.png" alt="book1ch2img8"></img>
          <p class="bookText">3. <b>Superimposition of b.</b> b = 2. c.p. is excluded; a becomes optional</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img9.png" alt="book1ch2img9"></img>
          <p class="bookText">Another Example:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img10.png" alt="book1ch2img10"></img>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img11.png" alt="book1ch2img11"></img>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img12.png" alt="book1ch2img12"></img>
          <p class="bookText">These show the natural nucleus of a musical score, in which c.d. Units are arpeggio or obligato figures, a and b are chords, r rhythms of the theme, and c.p. Sustained tones (“pedla point”).</p>
          <p class="bookText">Resultants have the following characteristics:</p>
          <ol>
            <li class="bookText">Recurrence</li>
            <li class="bookText">Balance</li>
            <li class="bookText">Contrasts</li>
            <li class="bookText">Inversion</li>
          </ol>
          <p class="bookText">Thus, harmony of form is a product of physical efficiency.</p>
          <p class="bookText">All rhythmic patterns in music are either complete or incomplete resultants.</p>
          <p class="bookText">When all of the resultants up to a = 9 have been found, you can create all rhythm patterns in the past, present, and even the future.</p>
          <p class="bookText">All the necessary generators are:</p>
          <img className="img-fluid img-thumbnail" src="images/book1/ch2/img13.png" alt="book1ch2img13"></img>
          <p class="bookText">When c.p. is greater than 15, use a or b superimposition only.</p>
          <p class="bookText">When the numbers get large, a musical eight note (♪) is the best denominator. All reducible fractions have been excluded from the above chart.</p>
          <p class="bookText">The a and b components show how ‘cross-rhythms’ should be performed. Beating a and be with both hands, listen to the resultant.</p>
          <br />
        <br />
        <Ch2Generator />
        <br />
        <Row>
          <Col><Link to="/book1ch1" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch3" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
export default Book1Ch2;
