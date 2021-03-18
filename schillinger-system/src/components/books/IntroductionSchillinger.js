import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function IntroductionSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Introduction</h1>
        <h3>by Arnold Shaw and Lyle Dowling</h3>
        <h4>Co-editors <em>Schillinger System of Muscial Composition</em></h4>
          <p class="srcText">&emsp;The Schillinger System is a synthesis of musical theory and the most recent discoveries of modern physics, psychology and mathematics. Historically, it represents the ﬁrst successful effort to classify scientiﬁcally the resources of our musical system. In view of the highly original character of Schillinger’s approach, a brief description of his methodology and underlying ideas seems desirable.*</p>
        <h5>1. Music and Science</h5>
          <p class="srcText">&emsp;Efforts to establish musical theory on a scientiﬁc basis date back to antiquity. Among the Greeks, Pythagoras and his followers investigated the mathematical ratios underlying harmonic intervals. Down the ages the fabrication of musical instruments and the theory of instrumentation have been correlated with developments in physics and mathematics. Within the past 200 years, two of the greatest musical theorists based their work on scientiﬁc data. In Jean-Philippe Rameau’s <em>Treatise on Harmony</em> (1722), we have the beginnings of a school of thought, recently given new impetus, that makes acoustics the foundation of musical theory. In <em>Sensations of Tone</em> (1863) Helmholtz developed his theories on the basis of the ﬁndings of physiology and psychology. Zarlino, Kircher, Taneiev and others have evolved theories employing data of the various sciences. In <em>The Craft of Musical Composition</em>, Paul Hindemith, commenting on the pleasure derived from hearing vibration-combinations in simple ratios, writes: “This basic fact of our hearing process reveals to us how closely related are number and beauty, mathematics and art”.</p>
          <p class="srcText">&emsp;Despite this history, the idea of mixing music with mathematics is a disquieting one to some. Since music is generally portrayed as the most evanescent of the arts, to wed it to the most exacting and the most rigid of the sciences seems to produce an ill-conceived union. In part the feeling of uneasiness may stem also from an unconscious desire on the part of some composers to keep their craft in the realm of the cabalistic mysteries.</p>
          <p class="srcText">&emsp;From the historical point of view, the clash between the arts and sciences is of comparatively recent origin-for us, largely the result of the romantic movement. We are heirs of the tradition that swept across Europe and the United States toward the end of the eighteenth century and that revived Plato’s view of the artist as an inspired madman. As a result both critical and lay musical circles tend to exalt inspiration, genius and intuition over knowledge of resources, mastery of technique, craftsmanship, etc. Viewed practically, the dichotomy between learning and genius—between science and art—is not merely a product of romanticism. It has also been the result of the limitations of musical theory and pedagogy. If you cannot define and explain certain aspects of musical composition, you fall back, of necessity, on that vague and indefinable thing called "genius" or "inspiration". Schillinger's own experience as a student at the St. Peterburg Conservatory&dagger; led him to embark on the investigation that yielded, after twenty-five years of work, the theory now known as the Schillinger System.</p>
          <p class="srcText">*The material in this Introduction is based in the Julliard School of Music during the sum-part on lectures delivered by Arnold Shaw at mer of 1945.</p>
          <p class="srcText">&emsp;Schillinger’s voyage of intellectual discovery began in 1914 while he was a student at the St. Petersburg Conservatory. It continued during a period of ten years (1918—1928) while he held various teaching posts in his native Russia. On coming to the United States in 1928, it took on new impetus as a result of his collaborating with Leon Theremin on electro-magnetic musical experiments and inventions. From 1932 on, when much of the system had taken form, Schillinger had opportunities to test it at various American schools and colleges. He was either a lecturer or an instructor at the David Berend School of Music, the Florence Cane School of Art, the New School for Social Research, and New York University. The reaches of his theory, embracing as it did mathematics, music and the spatial arts, were afforded varied expression at Columbia University where he gave courses or lectures in three departments: the Mathematics, Fine Arts and Music departments of Teachers College. When Schillinger was convinced of the practical nature of his discoveries, he turned also to private instruction. So successful were his students as composers and arrangers for radio, the motion pictures and the theatre that Schillinger attracted to his studio many of America’s best known musicans&Dagger;. By the time of his sudden death in March 1943, Schillinger regarded his theories as sufficiently formulated to have incorporated them in two signiﬁcant works: <em>Mathematical Basis of the Arts</em> and the present publication.</p>
        <h5>2. Mathematics of Voice Leading</h5>
          <p class="srcText">&emsp;A valuable clue to Schillinger’s approach to music is offered by him in his introduction to Book V, <em>Special Theory of Harmony</em>. “The main defect of existing theories of harmonies", he writes, “is in the use of the <em>descriptive method</em>. Each case is analyzed apart from all other cases and without yielding any general underlying principles. But the mathematical treatment of the subject discloses general properties of the positions and movements of the voices in terms of the transformation of chordal functions.”</p>
          <p class="srcText">*One of our most enlightened contemporary theorists and composers, Walter Piston of Harvard University, describes musical theory in his book on <em>Harmony</em> as follows: ”If we reﬂect that theory must follow practice, rarely preceding it except by chance, we must realize that musical theory is not a set of directions for composing music. It is rather the collected and systematized deductions gathered by observing the practice of composers over a long time, and it attempts to set forth what is or has been the common practice. It tells not how music will be written in the future, but how music has been written in the past.”</p>
          <p class="srcText">&dagger;Schillinger (1895-1943) entered the St. Petersburg Imperial Conservato in 1914 and was graduated in 1918. A biographical sketch is included at the end of Volume II of the present work.</p>
          <p class="srcText">&Dagger;A partial list of Schillinger students would include: George Gershwin, who studied for more than four years; Oscar Levant, Glenn Miller, Benny Goodman, Paul Lavalle, Nathan Van Cleave, Lyn Murray, Charles Previn, Will Bradley, Jesse Crawford, Carmine Coppola, Lennie Hayton, Joseph Lilley, Jeff Alexander, Franklyn Marks, Jack Miller, Edward Powell, Alvino Rey, Ted Royal, Frank Skinner, Herbert Spencer, Paul Sterrett, Leith Stevens, Mme Koshetz, Lazar Weiner; also Dr. Myron Schaeffer, formerly head of the music department of the University of Panama: and Edwin Gerschefski, Dean of the School of Music of Converse College.</p>
          <p class="srcText">Schillinger thereupon proceeds on the assumption that any chord is an assemblage of pitch-units, or to use mathematical terminology, a group of conjugate elements. In three-part structures (5 = 3p), the voices or functions may be designated as a, b, and c, or 1, 3, 5.</p>
          <img src="images/intro/img3.png" alt="srcIntro1"></img>
          <p class="srcText">It is to be observed that clockwise structures (reading downwards) are traditionally known as <em>open</em> positions,</p>
          <img src="images/intro/img4.png" alt="srcIntro2"></img>
          <p class="srcText">and counterclockwise structures (reading downwards) as <em>close</em>.</p>
          <img src="images/intro/img5.png" alt="srcIntro3"></img>
          <p class="srcText">&emsp;Insofar as voice-leading is concerned, these voices behave, Schillinger demonstrates, not through any musical speciﬁcations but through <em>general forms of tramformation</em>. They move in a clockwise (&#8635;) direction, a counterclockwise (&#8634;) direction, or in some variation of these when one voice is constant.</p>
          <img src="images/intro/img6.png" alt="srcIntro4"></img>
          <p class="srcText">&emsp;Without developing the theory, which is presented in detail in Book V, but simply to illustrate-suppose we have a triad on C followed by a triad on F. From a mathematical standpoint-and we soon discover, also from a musical standpoint, depending on sequence and the effect desired-here is what may happen according to the general forms of transformation:</p>
          <img src="images/intro/img7.png" alt="srcIntro5"></img>
          <br></br>
          <img src="images/intro/img8.png" alt="srcIntro6"></img>
          <br></br>
          <img src="images/intro/img9.png" alt="srcIntro7"></img>
          <p class="srcText">Additional possibilities may be developed if one of the voices is constant, i.e., 3&rarr;3, 1&rarr;1 or 5&rarr;5.</p>
        <h5>3. Schillinger's Major Aims</h5>
          <p class="srcText">&emsp;On the basis of these illustrations, certain inferences may be drawn concerning Schillinger’s aims. First, that he is concerned with discovering <em>general underlying principles</em> of the behavior of tonal phenomena. Unlike most theoreticians who have preceded him, his generalizations are not based on the practices of selected composers, or selected schools of music. He is not interested in dogmatic rules, based on the achievements of given composers, or in countless exceptions to such rules, coined to explain practices characteristic of other term posers. Schillinger is interested in generalizations based on the properties of tonal materials themselves and on the possible combinations, permutations and structural relations of such materials.</p>
          <p class="srcText">&emsp;Secondly, he is interested in uncovering and classifying <em>all of the available resources of our tonal system</em>. To be sure, this is a gargantuan task. Yet in a sense, it has been the expressed or unexpressed goal of all musical theorists. Some approached it by way of musical usage. Along this road, success was attainable provided analysis was not limited to given composers, given schools, or given musical civilizations—and then this procedure could not encompass the future. Some theorists approached the goal of exhaustiveness by way of tonal materials themselves, which could chart the future. Unfortunately, no theorist prior to Schillinger adopted a methodology of sufficient scope to achieve the desired result. This is another way of saying that no theorist adopted the method of mathematics For it must be evident that mathematics as the general science of number, sequence, combination and structure presents the necessary and most practical tool for achieving complete classiﬁcation.</p>
          <p class="srcText">&emsp;Beyond these two purposes, Schillinger set himself a third and larger goal, but a necessary corollary of the ﬁrst two. From the standpoint of science; analysis implies synthesis. Success in reducing a process or a substance to its component elements implies the ability to reconstruct the object or process through synthesizing such elements. The ultimate in science is not attained when. we discover that atomic energy is the source of the sun’s power. We achieve the ultimate when we can reproduce such power in the atomic bomb. From Schillinger’s standpoint, therefore, scientiﬁc analysis of the tonal art implied scientiﬁc synthesis as a corollary. If one could take a composition and reduce it through computation to its component elements, then mastery of the process implied an ability to compose through computation. To be sure, this is the juncture at which Schillinger would run into conﬂict most sharply with tradition. Insofar as he succeeded in elaborating a method of composing through the preselection and synthesis of component tonal elements, he could expect strong opposition from certain quarters. But this was unavoidable.</p>
          <p class="srcText">&emsp;From a scientiﬁc standpoint Schillinger’s achievement of his ﬁrst two aims [1) generalizing underlying principles and 2) classifying tonal resources] is demonstrated by his success in applying the methodology to composition itself. Earlier scientiﬁc approaches to musical theory were partial in character. Their generalizations were applicable to given aspects, not to the art of composition as a whole. In Schillinger we encounter for the ﬁrst time a comprehensive application of scientiﬁc method to all components of the tonal art, to problems of rhythm, melody, harmony, counterpoint, instrumentation, etc., and to the fundamental problem of all—composition itself. The individual techniques evolved in the different books—(1) temporal organization (Book I); (2) development of pitch-scales (Book II); (3) composition of melody (Books III and IV); (4) formation of chord structures and progressions (Books V and IX); (5) melodization of harmony (Book VI); and (6) correlation oi melodies-counterpoint and melodic forms (Book VII)—these individual techniques are all integrated in Book XI, <em>Theory of Composition</em>. As Schillinger phrases it, his complete method involves “the prefabrication and the essembly of components according to a preconceived design of the whole."</p>
        <h5>4. Tools and Concepts</h5>
          <p class="srcText">&emsp;It is to be noted that the tools of analysis employed by Schillinger were available to musical theorists long before he used them. The graph method, a commonplace in our daily stock reports, is almost three hundred years old. Trigonometry and algebra are of ancient origin. The marriage of music and mathematics was not achieved because the basic concepts to make it possible were lacking. These concepts are of comparatively recent origin although the tools are not. These concepts stem from the ﬁndings of modern physics, modern psychology and modem mathematics. What are they?</p>
          <p class="srcText">&emsp;Modern physics suggested to Schillinger his own theory of interference. Modern psychology offered usable ideas in the Weber-Fechner law of sensation and other discoveries concerning the correlation of stimulus conﬁgurations and reaction conﬁgurations. Modern mathematics provided the highly valuable ideas of relativity and mathematical logic. It is not within the scope of this brief essay to trace in detail‘the relation of these ideas to Schillinger’s system; but some description will be useful in guiding future research.</p>
        <h5>5. Theory of Rhythm</h5>
          <p class="srcText">&emsp;The foundation of Schillinger’s work is the theory of rhythm developed in Book I. Viewed simply from the standpoint of problems of duration, meter and accent, this theory provides the means for evolving all conceivable rhythms of the past, present and future—a remarkable achievement considering that most musical pedagogy has had no comprehensive theory of rhythm.*</p>
          <p class="srcText">&emsp;Schillinger’s theory is based on the phenomena of interference as revealed in the physics of wave motion. We ﬁnd that <em>non-uniform</em> durations may be produced by combining or causing interference between <em>two uniform series</em> of durations. Thus, the rhythm</p>
          <img src="images/intro/img10.png" alt="srcIntro8"></img>
          <p class="srcText">may be evolved by causing a uniform series of durations of numerical value 4 to interfere with a series of durations of numerical value 3. The student may perform this operation by beating one series with the right hand, the other with the left hand, and listening to the result or resultant. Pursuing the process methodically and using different durations or number values [2&#247;1, 3&#247;2, 4&#247;3, etc.], the student may evolve for himself every conceivable type of rhythm. Thereafter, he may apply mathematical combinations and permutations to discover thousands of possible variant patterns.</p>
          <p class="srcText">&emsp;Schillinger’s theory of rhythm, of inestimable value to the student and teacher of music, is more basic and comprehensive than the foregoing would suggest. The process of producing rhythmic resultants is based on numbers and the resultants are a series of numbers. 'The number values underlying the two musical illustrations (presented in the preceding paragraph) are, for example, 3+1+2+2+1+3. As Schillinger turns from rhythm to other aspects of the tonal art, these'series or patterns become <em>coefficients of recurrence</em>, and are applied to pitch—units, to pitch—scales, to harmonic cycles, to correlated melodies, to densities, etc. Applied to scales, these coefficients of recurrence yield melodies; applied to two or more melodies, they produce counterpoint; applied to tonal cycles, they produce harmonic patterns; applied to harmonic patterns, they produce different styles, etc.</p>
          <p class="srcText">*In <em>The Craft of Musical Composition</em> Paul Hindemith writes: "The domain of harmony has been explored from end to end, while rhythm, as I have previously said, has escaped all attempts to study it systematically."</p>
        <h5>6. Patterns of Music and Nature</h5>
          <p class="srcText">&emsp;Schillinger designates his theory of rhythm, the <em>theory of regularity and coordination</em>*; it represents an effort to set down the basis of all pattern-making in the universe. Musical patterns, viewed in the universe of biological, physical and esthetic objects, are really only special cases of the general process of pattern-making. Before man appeared to produce physical objects and to create art forms, there were obviously natural objects. When man appeared, some of these objects excited esthetic reactions. Painting and sculpture sought to reproduce the spatial forms of nature that appealed to man’s senses. Whether the artist realized it or not, he was abstracting quantities, forms and structures and reproducing them in the hope of exciting sensations similar to those provoked by the natural objects. Recent researches in the ﬁeld of psychology have supplied concrete data to validate this procedure. In studying sensation, modern psychology has found that similar conﬁgurations, whether in nature, on a canvas, or in a piece of music, excite similar sensations. Thus, just as a series of jagged rocks produce an impression of imbalance and tension, so a melody having a similar conﬁguration will produce like sensations. Operating on this assumption, Schillinger became interested in discovering the basic patterns of growth, motion and evolution in the universe. This is what the theory of regularity and coordination represents. This is the theory of rhythm in the Schillinger System.</p>
          <p class="srcText">&emsp;In addition to the resultants of interference, the basic patterns of growth, motion and evolution involve various number series, especially the <em>series of acceleration</em>. These include the natural series 1, 2, 3, 4, 5, 6, 7, 8, 9; the harmonic series 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9; arithmetic progressions 1, 3, 5, 7, 9; geometric progressions 1, 2, 4, 8, 16, etc., including various power series 3, 9, 27, 81, 243, etc.; prime number series 1, 3, 5, 7, 11, 13, etc.; and various summation series 1, 2, 3, 5, 8, 13, 21, etc.—all of which are fully discussed in Book I. The most interesting phase of the theory of rhythm is that the resultant patterns have a universality which is breathtaking. Time and again it has been found that patterns repeat themselves in phenomena as diverse as the division and multiplication of cells, the formation of crystals, the ratios of curvature of celestial trajectories, the tangent trajectories of planetary motion, etc. Beginning with the assumption that great music might also make use of these basic patterns, Schillinger subjected the works of Bach, Beethoven, Brahms, Wagner and other immortal composers to intensive analysis. After such tests. he concluded that these great musicians had intuitively employed these patterns in their works. Through their sensuous experience, he concluded, they had realized the mathematical logic of structure.</p>
          <p class="srcText">&emsp;“The patterns of growth," Schillinger writes in his <em>Theory of Melody</em>, “stimulate in human beings a response which is more powerful than many other similar but casual formations. Thus, we see that the forms of organic growth associated with life, well-being, self-preservation and evolution appeal to us as forms of beauty when expressed through the art medium. Intuitive artists of great merit are usually endowed with great sensitiveness and intuitive knowledge of the underlying scheme of things. This is why a composer like Wagner is capable of projecting spiral formations . . . without any analytical knowledge of the process involved.”</p>
          <p class="srcText">*Schillinger employs this term in <em>Mathematical Basis of the Arts</em>, in which he evolves the fundamental theory and practice of scientific art production with regard to all of the arts. The present publication represents only one phase (musical) of Schillinger's discoveries just as the theory of rhythm in music is to be regarded as one phase of patter-making in the universe.</p>
        <h5>7. Aristotle, Einstein and Geometry</h5>
          <p class="srcText">&emsp;While the inﬂuence of modern physics in Schillinger’s thinking is methodological, the impact of modern mathematics is conceptual. Schillinger makes direct use of the theory of interference. He does not use any of the special techniques of the mathematics of relativity. The impact of relativity is through its underlying ideas.</p>
          <p class="srcText">&emsp;Schillinger arrived at the esthetic concept that great music and all great art reproduce the laws of development of the universe—not the appearance of this development, but the actual processes themselves. This suggests an Aristotelian idea. “Art imitates nature”, Aristotle wrote, and meant that the artist did not copy appearances, but reproduced and perfected nature’s forms and processes. Now Schillinger made the interrelation of music and nature (of musical forms and natural forms) basic in his thinking. He was continually at pains to point out that various musical forms were not purely esthetic developments. He reminds us, for example, that the canon is to be found in nature in the echo. Music imitates nature, and particularly the forms of motion in the universe, i.e. the growth and evolution of natural forms. Living fully and conceptually in our mathematical universe, Schillinger may be said to have given to the Aristotelian idea a materialist interpretation running far beyond the ancient concept and bulwarked by extensive musical research.</p>
          <p class="srcText">&emsp;Now, what relation could be established between musical forms (tonal assemblages) and natural forms? Patently, a congruence of structure . . . a similarity of inner relations . . . an equivalence of structural quantities. It was relativity that provided foundation ideas for developing this geometrical interrelationship.</p>
          <p class="srcText">&emsp;For our purposes, the signiﬁcant aspect of relativity is its new treatment of time and space. Einstein“ demonstrated that measurements of Space and time are not independent and absolute properties of the object measured—but properties of the relation between observer and object. Having “relatived” all measurements by projecting the observer into them, Einstein searched for invariant measurements not dependent on the observer. These he discovered by emphasizing the fourthdimension (time) in relation to space. Thus, we no longer talk of time and space, but of space—time, and we designate events through space-time coordinates. Now, Einstein demonstrated that such space-time coordinates express both the <em>metric</em> properties of space and the <em>physical</em> properties of the natural universe. Nature (including music) was grasped as measure relations. In other words, it became possible to study natural phenomena-or, as Schillinger concluded, artistic phenomena-through analyzing the coincidence and correspondence of their space-time coordinates.</p>
        <h5>8. The Graph Method: Music and Motion</h5>
          <p class="srcText">&emsp;Schillinger’s idea was to transform musical qualities into time-space structures, i.e., into the geometric relations of their components. How? At this juncture the graph method came to Schillinger’s aid. Through graphs, music could be projected into space, and sonic symbols converted into linear conﬁgurations. Here, for example, is a graph representation of Bach’s <em>Two-Part Invention No. 8</em>.</p>
          <img src="images/intro/img2.png" alt="srcIntro9"></img>
          <p class="srcText">(Each horizontal square represents an eighth-note and each vertical square represents a semitone).</p>
          <p class="srcText">&emsp;“ ‘Musical motion’, when projected into spatial conﬁguration,” Schillinger writes in Book XI, “possesses characteristics similiar to that of motion, action, growth or other eventual processes. It particularly resembles mechanical trajectories and projections of periodic phenomena, i.e., processes which are characterized by a high degree of regularity. As mechanical trajectories are the inherent patterns of ‘musical motion', music is capable of expressing everything which can be translated into a form of motion.”</p>
          <p class="srcText">&emsp;Schillinger’s statement and the graph vivify one aspect of the relationship between music and motion. It is quite evident that just as music may be projected into a form of motion, so forms of motion may be converted into music. The graph method of notation, i.e., the rectangular projection of music, offers a device for securing congruence of quantity and structure. It offers a new, vivid approach to such problems as variation through inversion, the analysis of melody, the modernization and “antiquation” of music, the variation of density in orchestration, the correlation of music and emotion, and other phases of composition. To Schillinger, the problems of musical components therefore presented these general aspects: 1) substitution of a scientiﬁc method of recording a musical composition for inadequate systems of notation; 2) modiﬁcation of a musical work through variation of its geometric properties; and 3) production of music from a system of number values translated into geometric relations and thereafter into corresponding components of the tonal art.</p>
        <h5>9. Schillinger's Masterful Pedagogy</h5>
          <p class="srcText"></p>
        
        <h1>yeet</h1>
        <h5>Conclusion:</h5>
          <p class="srcText">Schillinger's system provides a scientific system for writing and analyzing music.</p>
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Back to the Introduction</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroductionSchillinger;