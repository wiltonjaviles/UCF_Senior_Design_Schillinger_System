import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../.././Style.css';
import TextToSpeech from '../../applets/TextToSpeech';

function Book1Ch1Schillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for Book 1 Chapter 1</h1>
        <br />
        <TextToSpeech 
          text="
          CHAPTER 1
          NOTATION SYSTEM
          THE CUSTOMARY method of musical notation, which is a product of the trial and error method, is inadequate for the analysis and study of rhythmic patterns. It offers no common basis for computations. The history of creative experience in music shows that even the greatest composers have been unnecessarily limited in their rhythmic patterns because they thought in terms of ordinary-musical notation.’
          The arrangement of time—durations, which constitutes the theory-of rhythm, may be studied through three parallel systems of notation. (1) numbers, (2) graphs, (3) musical notes.
          Understanding the nature of these group formations helps us to compose, to arrange any given musical material, and to play the most involved rhythmic patterns.
          Number values will be used in this system in their normal mathematical operations (such as the four actions—addition, subtraction, multiplication, and division—, raising to powers, extracting roots, permutations, etc.)
          A. GRAPHING MUSIC

          The graph method used in this system is the general method of graphs, i e, a record of variation of special components, such as pitch or intensity in music, stocks in fnance , diseases in medicine, etc., during a given time-period. In our theory of rhythm we shall deal with time only. The horizontal coordinate (known as abscissa) reads always from left to right. Here it will express time. The vertical coordinate (known as ordinate) will express the recurrence of a phase, i.6., the moment of attack. This graph method is a general method and therefore objective. 
          Any wave motion records itself automatically. Let the pendulum of a clock swing uniformly over a strip of paper while the latter is being moved uniformly- and in a direction perpendicular to the movements of the pendulum itself.
          Such record will have approximately this appearance.
          If, from experience outside the musical field, you already know how graphs are used, it will be sufficient to say at this point that (a) music can be graphed by allowing the lengths of a number of horizontal lines to stand for the duration. of tones, and causing the distance up or down (ordinate) to stand for the pitch levels of the tones; and (b) when graphing duration only, as in these studies, the énd of one duration and beginning of the next may be indicated by a ‘tum’ (phase change) in the line, as shown in Figure 47.
          Although Schillinger makes much use of mathematics in this work, the reader is not presumed to be a student of mathematics. Each mathematical operation is carefully explained so that those who possess the most elementary knowledge of mathematics will not encounter difficulty either in understanding the text or in performing the necessary operations.
          depending on the speed with which the strip of paper is moving. In case ā (see Figure 1) the speed is less than in case B.
          Similar confgurations of curves of different degrees of complexity may be observed in the projected oscillograms of sound waves. The complexity of a wave depends upon the number of components in such a wave. The simplest wave has the form which is shown in Figure 1. All clock mechanisms produce such waves (pendulum, sewing machine, etc). In frequencies which produce musical pitch, the simplest wave may be found in the sound of tuning forks and of the ﬂute-stops of a pipe organ.
          The general form of the analysis of wave—motion is the Fourier method which Fourier developed in 1822' for the purpose of analyzing heat—waves. This method is very precise. It is used in all felds dealing with oscillatory phenomena. Yet it is a very complicated method to use for the purpose of analyzing the music of human performers. It takes about twelve hours to analyze a wave of thirty components. Machines known as harmonic analyzers have been devised. These machines perform the work of an expert mathematician in about ten minutes without any possibility of error. They are used in various felds of physics and in meteorological departments, mainly to predict tidal variations.
          The simplest (i.e., one-component) wave of one period (recurrence group) has this appearance.
          The distances, ā alpha b and b alpha prime ā prime are equal‘. These curves are phases of the wave. Two phases constitute a period. For the purpose of studying periodic groups and their recurrences. we shall use phases as units of measurement. In continuous sequence they constitute the periodicity of phases.
          The distances, alpha beta and alpha prime beta prime are equal, and constitute amplitudes. The latter are physical expressions of intensity.
          We shall consider intensity in the study of durations in reference to accents only. The coincidence of phases of two diﬂ’erent periodicities intensifes the attack. The recurrence of intensifed attacks (accents) will constitute musical measures (bars). The reality of bars depends actually on the placement of attacks, not on the placement of bar lines on music paper.
          By assuming that the arrangement of durations does not necessitate the expression of amplitudes, we shall use rhythm graphs in the following form.
          Here the horizontal lines are a simplifcation of the general curve; they express time. The vertical segments express the moment of attack. In the following graphs the forms of attack will be constant, and .the time durations will assume various values.
          B. FORMS of PERIODICITY

          Continuous recurrence of a group constitutes periodicity. Periodicity in which all groups are identical constitutes uniform periodicity. The difference between various forms of uniform periodicity may be distinguished by the number of terms (places) in a recurring group.
          Groups with one term (a monom) constitute monomial periodicity.
          The algebraic expression for monomial periodicity is. ā t_1+ā t_2+ā t_3+ . . . + ā t_n 
          where a is the recurring monom and where t1, t2 . . . are the consecutive time moments; a may assume different values. In the feld of musical time durations these values are integers; a may equal 1, 2, 3, . . . n.
          When the forms of such periodicities are expressed in number—values, they have this appearance.
          1+1+1+1+..
          2+2+2+2+.
          3+3+3+
          n+n+n+.
          Their graph expression is —
          where each rectilinear segment represents a time-unit expressed in some space unit (inches, centimeters, etc).
          When a unit is defned, the respective values of units in different monomial periodicities will be.
          Musical notation will serve as a fnal form into which number and graph expressions will be translated.
          Thus. if 1 represents quarter note, 2= half note, 3= dotted half note, 4= whole note , etc.
          "
        />
        <br />
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_01.png" alt="book1ch1img1"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_02.png" alt="book1ch1img2"></img>
        <img className="img-fluid img-thumbnail" src="images/book1/ch1/screenshots/book1ch1_03.png" alt="book1ch1img3"></img>
        <Row>
          <Col><Link to="/book1ch1" className="content-links"><h5>Back to Chapter 1</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book1Ch1Schillinger;