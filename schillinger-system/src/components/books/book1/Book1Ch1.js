import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';

function Book1Ch1() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1ch1#1.1" id="1.1"><h3>Chapter 1. Notation System</h3></a>
          <p class="bookText">The customary method of musical notation is inadequate for the analysis and study of rhythmic patterns bc it offers no basis for computations. It is limiting even for the greatest composers.</p>
          <p class="bookText">Time durations can be broken into 3 parallel systems: numbers, graphs, and musical notes. Understanding these groups is key to learning composition.</p>
          <p class="bookText">Understanding these groups is key to learning composition.</p>
          <p class="bookText">Numbers will be used in their normal operations (addition, subtraction, multiplication, division, raising to powers, extracting roots, permutations, etc)</p>
        <a className="chapter-section-link" href="/book1ch1#1.1.a" id="1.1.a"><h5>A. Graphing Music</h5></a>
          <p class="bookText">Graphs in this system are similar to the general use of graphs (to record changes in variables over time). The horizontal coordinate will be read from left to right and express time. The vertical coordinate will express the recurrence of a phase (the change in direction which is called an attack)</p>
          <p class="bookText">A wave motion records itself automatically, and look like this (depending on the speed): </p>
          <h3>*image*</h3>
          <p class="bookText">If you already know how graphs work, then you will understand that music can be graphed by allowing the lengths of horizontal lines be the durations of tones and vertical distance represent the pitch levels of tones.</p>
          <p class="bookText">When graphing duration only (not pitch), the end of one duration and the beginning of the next is indicated by a “turn” in the line.</p>
          <p class="bookText">Readers of this work are not assumed to be students of mathematics, so every mathematical operation shall be explained carefully.</p>
          <p class="bookText">The complexity of a wave depends on the number of components. The simplest wave is shown in figure 1.The general form of the analysis of wave-motion is the Fourier method developed in 1822. This method is very precise, but is very complicated for analyzing music. It takes several hours to analyze a wave with so many components, thus machines have been developed that can do the work of a mathematician in a fraction of the time.</p>
          <p class="bookText">A simple, 1 component wave for one period (recurrence) looks like this:</p>
          <h3>*image*</h3>
          <p class="bookText">The distance from a to ɑ to b and from b to ɑ’ to a’ are the same. The curves are <em>phases</em> of the wave, and two phases is called a <em>period</em>. We will use phases as units of measurement. The distances from ɑ to ꞵ and a’ to ꞵ’ are equal and called the <em>amplitude</em>. They express the <em>intensity</em> of the wave</p>
          <p class="bookText">We only care about intensity in reference to accents only.</p>
          <p class="bookText">By assuming that the arrangement of durations is not showing the amplitude, we shall use rhythm graphs that look like this:</p>
          <h3>*image*</h3>
          <p class="bookText">The horizontal lines are a simple general curve that show time. The vertical lines show attacks (i.e. the change in rhythm). In this section all forms of attack will be constant and the time durations will change.</p>
        <a className="chapter-section-link" href="/book1ch1#1.1.b" id="1.1.b"><h5>B. Forms of Periodicity</h5></a>
          <p class="bookText">Continuous recurrence of a group is <em>periodicity</em>. Periodicity where all groups are exactly the same is <em>uniform periodicity</em>. Different forms of uniform periodicity can be compared by the number of <em>terms</em> (places) in a recurrence.</p>
          <p class="bookText">Groups with 1 term are called <em>monomial periodicity</em>. For example:</p>
          <p class="bookText">at<sub>1</sub>+at<sub>2</sub>+...+at<sub>n</sub></p>
          <p class="bookText">a is the recurring term and t<sub>n</sub> are the times that a occurs. In music these values are integers, a may be 1, 2, 3, … , n.</p>
          <p class="bookText">When expressed using numbers, they look like this:</p>
          <h3>*image*</h3>
          <p class="bookText">Where each horizontal segment in the wave represents a time unit</p>
          <p class="bookText">When the unit is defined, the values of units in different periodicities will be:</p>
          <h3>*image*</h3>
          <p class="bookText">Musical notation will be the final form of number and graph expressions, where where 1 = ♩, 2 = 𝅗𝅥, 3 = 𝅗𝅥., 4 = 𝅝, etc.</p>
        <br />
        <Row>
          <Col><Link to="/book1" className="content-links"><h5>Previous Chapter</h5></Link></Col>
          <Col><Link to="/book1ch2#1.2" className="content-links"><h5>Next Chapter</h5></Link></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Book1Ch1;
