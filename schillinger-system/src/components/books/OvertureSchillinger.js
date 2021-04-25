import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';
import TextToSpeech from '../TextToSpeech';

function OvertureSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Schillinger Source Text for the Overture</h1>
        <br />
        <TextToSpeech
          text="
          OVERTURE TO THE SCHILLINGER SYSTEM
          by HENRY COWELL
          The Schillinger System makes a positive approach to the theory of musical composition by offering possibilities for choice and development by the student, instead of the rules hedged round with prohibitions, limitations and exceptions, which have characterized conventional studies.
          If a creative musician has something of importance to say, his need for studying the materials with which he must say-it is acknowledged as a matter of course. No great composer has ever omitted the study of techniques. Musical theory as traditionally taught, however, has always been a profound disappointment to truly creative individuals. Such men have invariably added to the body of musical theory with researches of their own. Invariably, also, they have not followed the ”rules” laid down in conventional textbooks with any consistency.
          If these rules had been based on something inevitable in the nature of music, composers would have had no reason to disregard them.
          Actually, musical theory has dealt with no more than a small part of the potential musical materials; its assumptions concerning the science of sound have often been based on misapprehension, and the rules it lays down often reflect the personal taste of a certain theorist, or they may be based on the study of a single composer or of some one historical period. The resulting generalizations are far from being objective, but they are nonetheless imposed upon the student in the form of “rules”. Writers on theory have not been scientists, and no scientist has tried to make a complete and coordinated system of musical possibilities.
          Joseph Schillinger is the single exception: he was superbly competent in the two fields of musical composition and science. His monumental System of Musical Composition represents a lifetime of work in research, coordination and creative discovery. The synthesis he achieved has resulted in an entirely new point of view about the function of theory studies.
          In the course of the research which led to the formulation of his system of musical composition, Schillinger took all known facts concerning the nature of musical materials from conventional theory studies, and added to the discoveries and speculations of modern and less conventional theorists such as Schoenberg, Conus and myself. By applying the laws of mathematical logic as developed by modern science, he found that he could co-ordinate all of the seemingly diverse factors. He found also that he could open further untried possibilities for the development of new materials. A glance at his Table of Contents will show an extraordinary number of aspects of music here organized for the first time for inclusion in the theoretical approach to the study of composition.
          The idea behind the Schillinger System is simple and inevitable: it undertakes the application of mathematical logic to all the materials of music and to their functions, so that the student may know the unifying principles behind these functions, may grasp the method of analyzing and synthesizing any musical materials that he may find anywhere or may discover for himself, and may perceive how to develop new materials as he feels the need for them. Thus the Schillinger system offers possibilities, not limitations; it is a positive, not a negative approach to the choice of musical materials. Because of the universality of the esthetic concepts underlying it, the System applies equally to old and new styles in music and to popular and serious composition.
          Schillinger is sometimes criticized on the basis that his system reduces everything to mathematics and that musical intuition and the subjective side of creativity are neglected. I have never been able to understand this criticism. The currently taught rules of harmony, counterpoint, and orchestration certainly do not suggest to the student materials adapted to his own expressive desires. Instead he is given a small and circumscribed set of materials, already much used, together with a set of prohibitions to apply to them, and then he is asked to express himself only within these limitations. It has been the constant complaint from students of composition that their teachers fail to make clear the distinction between the objective and subjective factors in music. A young composer is constrained, as things are now, to spend several years following rules deduced or assumed from the works of his predecessors. but as soon as his works begin to be heard he is reproached, and rightly so, if they sound like somebody else's.  He has not been shown what possibilities there really are in music in any objective, scientific way, nor has he been trained in the manner best calculated to develop an original talent, by exercising his own taste and judgment in choosing from among those possibilities the materials best suited to his musical intention.
          Whether or not one agrees with Schillinger’s great personal interest in the scientific realities of music, it is nevertheless true that no composer is well equipped to express himself subjectively until he has so profound a knowledge of musical materials and their relationships that, consciously or unconsciously, he seizes on just the right ones to use for whatever he wishes to say in music. He can be trained to do this if he will subject himself to the disciplines inherent in musical materials themselves, as they are set before him by the Schillinger System.
          "
          />
        <br />
        <img class="screenshot" src="images/overture/overture01.png" alt="overtureImg1"></img>
        <img class="screenshot" src="images/overture/overture02.png" alt="overtureImg2" width="auto"></img>
        <Row>
          <Col><Link to="/overture" className="content-links"><h5>Back to the Overture</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default OvertureSchillinger;