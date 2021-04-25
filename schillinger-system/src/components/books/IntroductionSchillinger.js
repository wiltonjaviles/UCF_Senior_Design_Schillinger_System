import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';
import TextToSpeech from '../TextToSpeech';
function IntroductionSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Introduction</h1>
        <br />
        <TextToSpeech 
          text="
          INTRODUCTION
          by ARNOLD SHAW and LYLE DOWLING, coeditors 
          Schillinger System of Musical Composition
          The Schillinger System is a synthesis of musical theory and the most recent discoveries of modern physics, psychology and mathematics.
          Historically, it represents the first successful effort to classify scientifically the resources of our musical system.
          In view of the highly original character of Schillinger’s approach, a brief description of his methodology and underlying ideas seems desirable.

          1. Music and Science

          Efforts to establish musical theory on a scientific basis date back to antiquity. 
          Among the Greeks, Pythagoras and his followers investigated the mathematical ratios underlying harmonic intervals.
          Down the ages the fabrication of musical instruments and the theory of instrumentation have been correlated with developments in physics and mathematics.
          Within the past 200 years, two of the greatest musical theorists based their work on scientific data.
          In Jean-Philippe Rameau’s Treatise on Harmony (17 22), we have the beginnings of a school of thought, recently given new impetus, that makes acoustics the foundation of musical theory. 
          In Sensations of Tone (18 63) Helmholtz developed his theories on the basis of the findings of physiology and psychology. 
          Zarlino, Kircher, Taneiev and others have evolved theories employing data of the various sciences. 
          In The Craft of Musical Composition, Paul Hindemith, commenting on the pleasure derived from hearing vibration-combinations in simple ratios, writes: This basic fact of our hearing process reveals to us how closely related are number and beauty, mathematics and art.
          Despite this history, the idea of mixing music with mathematics is a disquieting one to some. 
          Since music is generally portrayed as the most evanescent of the arts, to wed it to the most exacting and the most rigid of the sciences seems to produce an ill-conceived union. 
          In part the feeling of uneasiness may stem also from an unconscious desire on the part of some composers to keep their craft in the realm of the cabalistic mysteries.
          From the historical point of view, the clash between the arts and sciences is of comparatively recent origin for us, largely the result of the romantic movement. 
          We are heirs of the tradition that swept across Europe and the United States toward the end of the eighteenth century and that revived Plato’s view of the artist as an inspired madman. 
          As a result both critical and lay musical circles tend to exalt inspiration, genius and intuition over knowledge of resources, mastery of technique, craftsmanship, etc. 
          Viewed practically, the dichotomy between learning and genius, between science and art, is not merely a product of romanticism. 
          It has also been the result of the limitations of musical theory and pedagogy. 
          If you cannot define and explain certain aspects of musical composition, you fall back, of necessity, on that vague and indefinable thing called ‘genius’ or ‘inspiration’. 
          Schillinger’s own experience as a student at the St. Petersburg Conservatory led him to embark on the investigation that yielded, after twentyfive years of work, the theory now known as the Schillinger System. 
          Schillinger’s voyage of intellectual discovery began in 19 14 while he was a student at the St. Petersburg Conservatory. 
          It continued during a period of ten years (19 18 to 19 28) while he held various teaching posts in his native Russia. 
          On coming to the United States in 19 28, it took on new impetus as a result of his collaborating with Leon Theremin on electro-magnetic musical experiments and inventions. 
          From 19 32 on, when much of the system had taken form, Schillinger had opportunities to test it at various American schools and colleges. 
          He was either a lecturer or an instructor at the David Berend School of Music, the Florence Cane School of Art, the New School for Social Research, and New York University. 
          The reaches of his theory, embracing as it did mathematics, music and the spatial arts, were afforded varied expression at Columbia University where he gave courses or lectures in three departments: the Mathematics,fine Arts and Music departments of Teachers College. 
          When Schillinger was convinced of the practical nature of his discoveries, he turned also to private instruction. 
          So successful were his students as composers and arrangers for radio, the motion pictures and the theatre that Schillinger attracted to his studio many of America’s best known musicians. By the time of his sudden death in March, nineteen forty-three, Schillinger regarded his theories as sufficiently formulated to have incorporated them in two significant works: Mathematical Basis of the Arts and the present publication.
          (The material in this Introduction is based in part on lectures delivered by Arnold Shaw at the Julliard School of Music during the summer of 19 45.)

          2. Mathematics of Voice Leading

          (One of our most enlightened contemporary theorists and composers, Walter Piston of Harvard University, describes musical theory in his book on Harmony as follows: If we reflect that theory must follow practice, rarely preceding it except by chance, we must realize that musical theory is not a set of directions for composing music. 
          It is rather the collected and systematized deductions gathered by observing the practice of composers over a long time, and it attempts to set forth what is or has been the common practice. 
          It tells not how music will be written in the future, but how music has been written in the past.)
          (Schillinger (18 95-19 43) entered the St. Petersburg Imperial Conservatory in 19 14 and was graduated in 19 18. 
          A biographical sketch is included at the end of Volume 2 of the present work.)
          (A partial list of Schillinger students would include: George Gershwin, who studied for more than four years; Oscar Levant, Glenn Miller, Benny Goodman, Paul Lavalle, Nathan Van Cleave, Lyn Murray, Charles Previn, Will Bradley, Jesse Crawford, Carmine Coppola, Lennie Hayton, Joseph Lilley, Jeff Alexander, Franklyn Marks, Jack Miller, Edward Powell, Alvino Rey, Ted Royal, Frank Skinner, Herbert Spencer, Paul Sterrett, Leith Stevens, Mme Koshetz, Lazar Weiner; also Doctor Myron Schaeffer, formerly head of the music department of the University of Panama: and Edwin Gerschefski, Dean of the School of Music of,Converse College.)
          A valuable clue to Schillinger’s approach to music is offered by him in his introduction to Book 5, Special Theory of Harmony. 
          The main defect of existing theories of harmonies, he writes, is in the use of the descriptive method. 
          Each case is analyzed apart from all other cases and without yielding any general underlying principles. 
          But the mathematical treatment of the subject discloses general properties of the positions and movements of the voices in terms of the transformation of chordal functions. 
          Schillinger thereupon proceeds on the assumption that any chord is an assemblage of pitch-units, or to use mathematical terminology, a group of conjugate elements. 
          In three-part structures (S = 3p), the voices or functions may be designated as ae, b, and c, or 1, 3, 5.
          It is to be observed that clockwise structures (reading downwards) are traditionally known as open positions, and counterclockwise structures (reading downwards) as close.
          Insofar as voice-leading is concerned, these voices behave, Schillinger demonstrates, not through any musical specifications but through general forms of transformation. 
          They move in a clockwise direction, a counterclockwise direction, or in some variation of these when one voice is constant.
          Without developing the theory, which is presented in detail in Book 5, but simply to illustrate-suppose we have a triad on C followed by a triad on F.
          From a mathematical standpoint, and we soon discover, also from a musical standpoint, depending on sequence and the effect desired-«here is what may happen according to the general forms of transformation:
          Additional possibilities may be developed if one of the voices is constant, i.e., 3 to 3, 1 to 1, or 5 to 5.

          3. Schillinger’s Major Aims

          On the basis of these illustrations, certain inferences may be drawn concerning Schillinger’s aims. 
          first, that he is concerned with discovering general underlying principles of the behavior of tonal phenomena. 
          Unlike most theoreticians who have preceded him, his generalizations are not based on the practices of selected composers, or selected schools of music. 
          He is not interested in dogmatic rules, based on the achievements of given composers, or in countless exceptions to such rules, coined to explain practices characteristic of other composers. 
          Schillinger is interested in generalizations based on the properties of tonal materials themselves and on the possible combinations, permutations and structural relations of such materials. 
          Secondly, he is interested in uncovering and classifying all of the available resources of our tonal system. 
          To be sure, this is a gargantuan task. 
          Yet in a sense, it has been the expressed or unexpressed goal of all musical theorists. 
          Some approached it by way of musical usage. 
          Along this road, success was attainable provided analysis was not limited to given composers, given schools, or given musical civilizations— and then this procedure could not encompass the future. 
          Some theorists approached the goal of exhaustiveness by way of tonal materials themselves, which could chart the future. 
          Unfortunately, no theorist prior to Schillinger adopted a methodology of sufficient scope to achieve the desired result.
          This is another way of saying that no theorist adopted the method of mathematics.
          For it must be evident that mathematics as the general science of number, sequence, combination and structure presents the necessary and most practical tool for achieving complete classification.
          Beyond these two purposes, Schillinger set himself a third and larger goal, but a necessary corollary of the first two. 
          From the standpoint of science; analysis implies synthesis. 
          Success in reducing a process or a substance to its component elements implies the ability to reconstruct the object or process through synthesizing such elements. 
          The ultimate in science is not attained when we discover that atomic energy is the source of the sun’s power. 
          We achieve the ultimate when we can reproduce such power in the atomic bomb. 
          From Schillinger’s standpoint, therefore, scientific analysis of the tonal art implied scientific synthesis as a corollary. 
          If one could take a composition and reduce it through computation to its component elements, then mastery of the process implied an ability to compose through computation. 
          To be sure, this is the juncture at which Schillinger would run into conflict most sharply with tradition. 
          Insofar as he succeeded in elaborating a method of composing through the preselection and synthesis of component tonal elements, he could expect strong opposition from certain quarters. 
          But this was unavoidable.
          From a scientific standpoint Schillinger’s achievement of his first two aims [1) generalizing underlying principles and 2) classifying tonal resources] is demonstrated by his success in applying the methodology to composition itself. 
          Earlier scientific approaches to musical theory were partial in character. 
          Their generalizations were applicable to given aspects, not to the art of composition as a whole.
          In Schillinger we encounter for the first time a comprehensive application of scientific method to all components of the tonal art, to problems of rhythm, melody, harmony, counterpoint, instrumentation, etc., and to the fundamental problem of all—composition itself. 
          The individual techniques evolved in the different books—(1) temporal organization (Book 1); (2) development of pitch-scales (Book 2); (3)-composition of melody (Books 3 and 4 ); (4) formation of chord structures and progressions (Books 5 and 6); (5) melodization of harmony (Book 6); and (6) correlation of melodies-counterpoint and melodic forms (Book 7)———these individual techniques are all integrated in Book 4, Theory of Composition. 
          As Schillinger phrases it, his complete method involves the prefabrication and the essembly of components according to a preconceived design of the whole.

          4. Tools and Concepts

          It is to be noted that the tools of analysis employed by Schillinger were available to musical theorists long before he used them. 
          The graph method, a commonplace in our daily stock reports, is almost three hundred years old. 
          Trigonometry and algebra are of ancient origin. 
          The marriage of music and mathematics was not achieved because the basic concepts to make it possible were lacking. 
          These concepts are of comparatively recent origin although the tools are not. 
          These concepts stem from the findings of modern physics, modern psychology and modern mathematics. 
          What are they?
          Modern physics suggested to Schillinger his own theory of interference.
          Modern psychology offered usable ideas in the Weber-Fechner law of sensation and other discoveries concerning the correlation of stimulus configurations and reaction configurations. 
          Modern mathematics provided the highly valuable ideas of relativity and mathematical logic. 
          It is not within the scope of this brief essay to trace in detail the relation of these ideas to Schillinger’s system; but some description will be useful in guiding future research.

          5. Theory of Rhythm

          The foundation of Schillinger’s work is the theory of rhythm developed in Book 1. 
          Viewed simply from the standpoint of problems of duration, meter and accent, this theory provides the means for evolving all conceivable rhythms of the past, present and future, a remarkable achievement considering that most musical pedagogy has had no comprehensive theory of rhythm.

          In The Craft of Musical Composition Paul Hindemith writes: The domain of harmony has been explored from end to end, while rhythm, as I have previously said has escaped all attempts to tidy it systematically. 

          Schillinger’s theory is based on the phenomena of interference as revealed in the physics of wave motion. 
          We find that non-unifarm durations may be produced by combining or causing interference between two uniform series of durations. 
          Thus, the rhythm may be evolved by causing a uniform series of durations of numerical value 4 to interfere with a series of durations of numerical value 3. 
          The student may perform this operation by beating one series with the right hand, the other with the left hand, and listening to the result or resultant. 
          Pursuing the process methodically and using different durations or number values (2 divided by 1, 3 divided by 2, 4 divided by 3, etc.), the student may evolve for himself every conceivable type of rhythm. 
          Thereafter, he may apply mathematical combinations and permutations to discover thousands of possible variant patterns.
          Schillinger’s theory of rhythm, of inestimable value to the student and teacher of music, is more basic and comprehensive than the foregoing would suggest.
          The process of producing rhythmic resultants is based on numbers and the resultants are a series of numbers. 
          The number values underlying the two musical illustrations (presented in the preceding paragraph) are, for example, 3+1+2+2+1+3. 
          As Schillinger turns from rhythm to other aspects of the tonal art, these series or patterns become coéflm'ents of recurrence, and are applied to pitch—units, to pitch—scales, to harmonic cycles, to correlated melodies, to densities, etc.
          Applied to scales, these coefficients of recurrence yield melodies; applied to two or more melodies, they produce counterpoint; applied to tonal cycles, they produce harmonic patterns; applied to harmonic patterns, they produce different styles, etc. 

          6. Patterns of Music and Nature

          Schillinger designates his theory of rhythm, the theory of regularity and coordination; it represents an effort to set down the basis of all pattern-making in the universe. 
          Musical patterns, viewed in the universe of biological, physical and aesthetic objects, are really only special cases of the general process of pattern-making. 
          Before man appeared to produce physical objects and to create art forms, there were obviously natural objects. 
          When man appeared, some of these objects excited aesthetic reactions. 
          Painting and sculpture sought to reproduce the spatial forms of nature that appealed to man’s senses. 
          Whether the artist realized it or not, he was abstracting quantities, forms and structures and reproducing them in the hope of exciting sensations similar to those provoked by the natural objects. 
          Recent researches in the field of psychology have supplied concrete data to validate this procedure. 
          In studying sensation, modern psychology has found that similar configurations, whether in nature, on a canvas, or in a piece of music, excite similar sensations. 
          Thus, just as a series of jagged rocks produce an impression of imbalance and tension, so a melody having a similar configuration will produce like sensations. 
          Operating on this assumption, Schillinger became interested in discovering the basic patterns of growth, motion and evolution in the universe. 
          This is what the theory of regularity and coordination represents. 
          This is the theory of rhythm in the Schillinger System.
          In addition to the resultants of interference, the basic patterns of growth, motion and evolution involve various number series, especially the series of acceleration. 
          These include the natural series: 1, 2, 3, 4, 5, 6, 7, 8, 9; the harmonic series: 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9; arithmetic progressions: 1, 3, 5, 7, 9;
          geometric progressions: 1, 2, 4, 8, 16, etc., including various power series: 3, 9, 27, 81, 243, etc.; prime number series: 1, 3, 5, 7, 11, 13, etc.; and various summation series: 1, 2, 3, 5, 8, 13, 21, etc.——all of which are fully discussed in Book 1. 
          The most interesting phase of the theory of rhythm is that the resultant patterns have a universality which is breathtaking. 
          Time and again it has been found that patterns repeat themselves in phenomena as diverse as the division and multiplication of cells, the formation of crystals, the ratios of curvature of celestial trajectories, the tangent trajectories of planetary motion, etc. 
          Beginning with the assumption that great music might also make use of these basic patterns, Schillinger subjected the works of Bach, Beethoven, Brahms, Wagner and other immortal composers to intensive analysis. 
          After such tests, he concluded that these great musicians had intuitively employed these patterns in their works.
          Through their sensuous experience, he concluded, they had realized the mathematical logic of structure.
          The patterns of growth, Schillinger writes in his Theory of Melody, stimulate in human beings a response which is more powerful than many other similar but casual formations. 
          Thus, we see that the forms of organic growth associated with life, well-being, self-preservation and evolution appeal to us as forms of beauty when expressed through the art medium. 

          Schillinger employs this term in Mathmatical Basis of the arts, in which he evolves the fundamental theory and practice of scientific art production with regard to all of the arts.
          The present publication represents only one phase (musical) of Schillinger's discoveries just as the theory of rhythm in music is to be regarded as one phase of pattern-making in the universe.

          Intuitive artists of great merit are usually endowed with great sensitiveness and intuitive knowledge of the underlying scheme of things. 
          This is why a composer like Wagner is capable of projecting spiral formations... without any analytical knowledge of the process involved.

          7. Aristotle, Einstein and Geometry

          While the influence of modern physics in Schillinger’s thinking is methodological, the impact of modern mathematics is conceptual. 
          Schillinger makes direct use of the theory of interference. 
          He does not use any of the special techniques of the mathematics of relativity: The impact of relativity is through its underlying ideas.
          Schillinger arrived at the aesthetic concept that great music and all great art reproduce the laWs of development of the universe, not the appearance of this development, but the actual processes themselves. 
          This suggests an Aristotelian idea. 
          Art imitates nature, Aristotle wrote, and meant that the artist did not copy appearances, but reproduced and perfected nature’s forms and processes. 
          Now Schillinger made the interrelation of music and nature (of musical forms and natural forms) basic in his thinking. 
          He was continually at pains to point out that various musical forms were not purely aesthetic developments.
          He reminds us, for example, that the canon is to be found in nature in the echo.
          Music imitates nature, and particularly the forms of motion in the universe, i.e. the growth and evolution of natural forms. 
          Living fully and conceptually in our mathematical universe, Schillinger may be said to have given to the Aristotelian idea a materialist interpretation running far beyond the ancient concept and bulwarked by extensive musical research.
          Now, what relation could be established between musical forms (tonal assemblages) and natural forms? Patently, a congruence of structure... a similarity of inner relations... an equivalence of structural quantities. 
          It was relativity that provided foundation ideas for developing this geometrical interrelationship.
          For our purposes, the significant aspect of relativity is its new treatment of time and space. 
          Einstein demonstrated that measurements of Space and time are not independent and absolute properties of the object measured—but properties of the relation between observer and object. 
          Having 'relatived' all measurements by projecting the observer into them, Einstein searched for invariant measurements not dependent on the observer. 
          These he discovered by emphasizing the fourth dimension (time) in relation to space. 
          Thus, we no longer talk of time and space, but of space—time, and we designate events through space-time coordinates. 
          Now, Einstein demonstrated that such space-time coordinates express both the metric properties of space and the physical properties of the natural universe. 
          Nature (including music) was grasped as measure relations. 
          In other words, it became possible to study natural phenomena, or, as Schillinger concluded, artistic phenomena, through analyzing the coincidence and correspondence of their space-time coordinates.

          8. The Graph Method: Music and Motion

          Schillinger’s idea was to transform musical qualities into time-space structures, i.e., into the geometric relations of their components. 
          How? At this juncture the graph method came to Schillinger’s aid. 
          Through graphs, music could be projected into space, and sonic symbols converted into linear configurations.
          Here, for example, is a graph representation of Bach’s Two-Part Invention No. 8.
          (Each horizontal square represents an eighth-note and each vertical square represents a semi-tone).
          ‘Musical motion’, when projected into spatial configuration, Schillinger writes in Book 11, possesses characteristics similar to that of motion, action, growth or other eventual processes. 
          It particularly resembles mechanical trajectories and projections of periodic phenomena, i.e., processes which are characterized by a high degree of regularity. 
          As mechanical trajectories are the inherent patterns of ‘musical motion', music is capable of expressing everything which can be translated into a form of motion.
          Schillinger’s statement and the graph vivify one aspect of the relationship between music and motion. 
          It is quite evident that just as music may be projected into a form of motion, so forms of motion may be converted into music. 
          The graph method of notation, i.e., the rectangular projection of music, offers a device for securing congruence of quantity and structure. It offers a new, vivid approach to such problems as variation through inversion, the analysis of melody, the modernization and antiquation of music, the variation of density in orchestration, the correlation of music and emotion, and other phases of composition. 
          To Schillinger, the problems of musical components therefore presented these general aspects: 1) substitution of a scientific method of recording a musical composition for inadequate systems of notation; 2) modification of a musical work through variation of its geometric properties; and 3) production of music from a system of number values translated into geometric relations and thereafter into corresponding components of the tonal art.

          9. Schillinger’s Masterful Pedagogy

          One other aspect of Schillinger’s method requires discussion. 
          This relates to the masterful pedagogy underlying his system. 
          Discussion of the concepts basic to it may give the impression that mastery of the material is difficult.
          This is not true. 
          A student does not need to be aware of the influence of modern mathematics and psychology on Schillinger’s System in order to study his work.
          Insofar as mathematics is concerned, he does not need to know more than ordinary arithmetic. 
          Many students studied with Schillinger by correspondence without having more than a knowledge of elementary mathematics. 
          Beginning simply with an understanding of musical notation, students learned all phases of composition, and completed the course equipped to compose in the larger forms to orchestrate their work, and to compose directly for orchestral groups.
          Schillinger’s technique is one of building complex units from simple ones.
          In pitch—scales, for example, he begins with a one-unit scale and proceeds numerically to construct scales of a larger and larger number of units.
          Mathematical theories of combination and permutation serve to reveal all of the possible variations within certain scale patterns.
          From scales built on units of the diatonic system, Schillinger proceeds to expanded scales, and finally to scales based on symmetric intervals, a type unknown in traditional theory. 
          By the time the student has concluded his study of Book II, he has become aware of all the scales which may be built on the 12 semitones of the equal temperament system. 
          The possibilities revealed by mathematical analysis are correlated with the practices of different composers, for Schillinger had an encyclopedic knowledge of musical usage and history. 
          Copious illustration, including original compositions produced by his techniques, vivifies every step of the presentation.
          A similar comprehensiveness and exhaustiveness marks the other phases of the Schillinger System. 
          Previous theorists had systematized and classified certain areas of the tonal art. [ It is Schillinger’s achievement—through the methods of mathematics—that he systematizes, classifies and analyzes all the resources of the tonal art. 
          This is not to imply that music theory stops with Schillinger.
          Rather it suggests that he has opened the door to the most exacting and the most scientific explorations of the art. 
          As Nicolas Slonimsky has phrased it, Schillinger has done for music what Mendeleyeff did for chemistry: he has provided an exhaustive periodic chart of all its elements making possible the discovery of those that are not now known. 

          Each branch of Schillinger's work contains novel ideas and techniques as practical as they are daring. 
          To be of use, a summary description of these would require more space than this introductory essay Will permit. 
          he reader is referred instead to the following materials in the text itself: factorial continuity (roman numeral 1, 12), distributive powers (roman numeral 1, 12), displacement (roman numeral 2,3), tonal expansion (roman numeral 2, 5), symmetric tonics (roman numeral 2, 6), geometrical expansion (roman numeral 3, 2), primary and secondary axes of melody (roman numeral 4, 3), psychological dial (roman numeral 4, 4), forms of trajectorial motion (roman numeral 4, 5), symmetric harmony (roman numeral 5, 3 and S), theory of indirect modulation (roman numeral 5, 14), sigma concept (roman numeral 5, 22 and roman numeral 6, 2), melodization (roman numeral 6, 1), harmonization of two-part counterpoint (roman numeral 7, 11), and strata harmony (roman numeral 9).
          Roman numerals refer to the' Books and Arabic numerals to the Chapters.
          In his book on Harmony, for example, Walter Piston describes his purpose as follows:
          The aim of this book is to present as concisely as possible the harmonic common practice of composers of the eighteenth and nineteenth centuries. 
          Rules are announced as observations reported, without attempt at their justification on aesthetic grounds or as laws of nature.

          10. Summary of Theoretical Foundations.

          By way of summary, the theoretical foundations of the Schillinger System may be described as follows. 
          Viewing music as a space-time entity capable of graphic projection into space, Schillinger arrived at these fundamental ideas:
          1. That music is determined as a logical system in the Cartesian or Einsteinian manner, i.e., that it consists of a system of correlated variables.
          2. The aesthetic qualities of music may be analyzed into the geometric relation of its components: rhythm, melody, harmony.
          3. Variation may be achieved through modification of the inherent geometric relations.
          4. Music may be composed by taking a system of number values, transforming them into geometric relations, and thereafter into corresponding components of rhythm, melody and harmony.
          5. Just as the understanding of natural and biological forms requires an understanding of the laws of their growth, i.e., the forms of regularity and evolution, so an insight into music necessitates discovery of the patterns of regularity and evolution. 
          This is what rhythm is.
          6. Musical patterns,viewed in the universe of physical, biological and aesthetic objects, are only special cases of the general scheme of pattern-making.
          7. Schemes of pattern-making take their origin in natural and biological objects, the ratios of curvature of celestial trajectories; the formation of crystals; the division and multiplication of cells in growing things etc.
          When they are analyzed quantitatively, such patterns yield various number series.
          8. These number series or quantities projected into music excite the same cerebral centers as were stimulated by animate beauty.
          9. Thus, every great work of art, every great musical composition, realizes a certain mathematical logic. 
          The creations of the non—mathematical musician involve such logic regardless of whether he is conscious of it or not. 
          The aesthetic harmony embodied in all great musical compositions may be discovered through the application of mathematical techniques of analysis.

          In terms of the history of music and art, Schillinger has summarized his basic ideas as follows:
          1. Nature produces physical phenomena which reveal an aesthetic harmony to us; this harmony is due to periodic and combinatory processes; aesthetic realities embody mathematical logic.
          2. Man recreates aesthetic realities by reproducing the appearance of the physical realities through his own body or through a material at his command; this process involves mathematical logic regardless of whether the artist is conscious of it or not. 
          imitating nature in an artistic medium, the artist achieves the laws of mathematical logic through his sensuous experience. 
          This is the intuitive period of art creation.
          3. Becoming more and more conscious in the course of his evolution, man begins to produce directly from the laws themselves. 
          With the development of the technique of handling the materials of the art medium (special components) as well as rhythm of the composition as a whole (general components: space, time), man is enabled to select the desired product and the machine does the rest; this is the period of rational art creation. 
          Thus the evolution of art falls into a closed system. 
          An aesthetic reality may be either a natural product, a product of human creative intuition, or a product of composition, realized through computation by mathematical logic. 
          These ideas are developed in Schillinger’s masterwork Mathematical Basis of the Arts, a work of world—shaking importance and revolutionary implications in the field of aesthetics, in which he formulates the general laws of mathematical logic underlying all art structures.

          11. Achievements of the Schillinger System.

          Percy Scholes, the well-known writer on music, has recently said: In every other age, the rules have been based more or less upon the music of the time...
          We are still teaching on the basis of these (traditional) rules, as every published harmony textbook shows, even Schoenberg’s.
          Yet not merely the idiom but the very principles of the art have changed ... 
          The Schillinger System is the culmination, not only of century-old efforts to approach music scientifically, but of the practices of modern composers for the past Century who broke away from long-established traditions and limitations.
          Schillinger’s work is comprehensive enough to rationalize, not only the practices of the great composers of the past, but the new usages of composers of the present.
          For the first time, the materials of contemporary music, both its polychords and polyrhythms, including, for example, the tonal resources of Hindemith and Schoenberg are organized into a unified system.
          In addition, the Schillinger System achieves the following:
          1. It establishes general laws, true in any special instance.
          2. It offers techniques for composing an incredible number of variations.
          3. It develops the first rational theory of melodyT, removing this aspect of the tonal art from the realm of the inexplicable.
          4. It makes possible the modernization or antiquation of music.
          5. It marshals exhaustively all the rhythmic patterns of past, present and future.
          6. It presents techniques for harmony involving as many as 576 voices.
          7. It evolves objective methods for analyzing music, making it possible to compose in any selected style.
          8. It makes the processes of composition available for the first time to all persons regardless of inborn ability. 
          It makes it possible for all reasonably intelligent people to master the art of composition.
          9. It provides the foundation for a more objective criticism of music.
          10. It establishes an objective and verifiable relation between musical works of definite form and variations (as generating excitors) and desired emotional reactions—simplifying and effectualizing the efforts of those who write background music for radio, motion pictures or television.
          11. It substantially shortens the period required for mastery of musical materials and form.
          12. It does not circumscribe the freedom of the individual composer but merely releases him from vagueness by giving him an exhaustive knowledge of his material and by making available prodigious resources to satisfy requirements set by any problem.

          12. Conclusion.

          The monumental character of Schillinger’s work must be evident even from this cursory description of its methodology and scope. 
          Apart from the highly original nature of its approach, the work will stand as one of the most comprehensive studies ever written of the materials and processes of musical composition. 
          Schillinger had an encyclopedic mind, was a master of musical history, including the tonal material of primitive societies, and knew intimately the scores, styles and methods of the outstanding composers of Europe, Asia and America.
          To this musical erudition, he added a thorough and practical knowledge of the most recent discoveries in the sciences. 
          An accomplished composer himself, he was a student of the other arts as well and developed an aesthetic based on a knowledge of the different art forms. 
          Basic to Schillinger’s approach is the scientific method, the correlation of music with the forms of motion, and the conception of the tonal art as space-time patterns translatable into sound. 
          The Schillinger System establishes its creator as one of the great musical theorists of all times, for Schillinger achieved a synthesis as rare in cultural history as Leonardo da Vinci’s, a synthesis of science and art.
          "
        />
        <br />
        <img class="screenshot" src="images/intro/screenshots/intro01.png" alt="introImg1"></img>
        <img class="screenshot" src="images/intro/screenshots/intro02.png" alt="introImg2"></img>
        <img class="screenshot" src="images/intro/screenshots/intro03.png" alt="introImg3"></img>
        <img class="screenshot" src="images/intro/screenshots/intro04.png" alt="introImg4"></img>
        <img class="screenshot" src="images/intro/screenshots/intro05.png" alt="introImg5"></img>
        <img class="screenshot" src="images/intro/screenshots/intro06.png" alt="introImg6"></img>
        <img class="screenshot" src="images/intro/screenshots/intro07.png" alt="introImg7"></img>
        <img class="screenshot" src="images/intro/screenshots/intro08.png" alt="introImg8"></img>
        <img class="screenshot" src="images/intro/screenshots/intro09.png" alt="introImg9"></img>
        <img class="screenshot" src="images/intro/screenshots/intro10.png" alt="introImg10"></img>
        <img class="screenshot" src="images/intro/screenshots/intro11.png" alt="introImg11"></img>
        <img class="screenshot" src="images/intro/screenshots/intro12.png" alt="introImg12"></img>
        <img class="screenshot" src="images/intro/screenshots/intro13.png" alt="introImg13"></img>
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Back to the Introduction</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroductionSchillinger;