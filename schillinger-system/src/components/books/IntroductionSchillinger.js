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
          

        <h1>yeet</h1>
        <img src="images/intro/img1.png" alt="image1"></img>         
        <h1>yeet</h1>
        <img src="images/intro/img2.png" alt="image1"></img>
        
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