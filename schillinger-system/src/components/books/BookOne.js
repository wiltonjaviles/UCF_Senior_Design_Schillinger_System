import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TableOfContentsBar from '../TableOfContentsBar';
import Ch2Generator from '../applets/Ch2Generator';
import '../.././Style.css';

const string = "images/intro/img1.png"

function BookOne() {
  return (
    <div>
      <Container>
        < TableOfContentsBar />
        <h1>Book One: Theory of Rhythm</h1>
        <a className="chapter-section-link" href="/book1#1.1" id="1.1"><h3>Chapter 1. Notation System</h3></a>
          <p class="bookText">The customary method of musical notation is inadequate for the analysis and study of rhythmic patterns bc it offers no basis for computations. It is limiting even for the greatest composers.</p>
          <p class="bookText">Time durations can be broken into 3 parallel systems: numbers, graphs, and musical notes. Understanding these groups is key to learning composition.</p>
          <p class="bookText">Understanding these groups is key to learning composition.</p>
          <p class="bookText">Numbers will be used in their normal operations (addition, subtraction, multiplication, division, raising to powers, extracting roots, permutations, etc)</p>
        <a className="chapter-section-link" href="/book1#1.1.a" id="1.1.a"><h5>A. Graphing Music</h5></a>
          <p class="bookText">Graphs in this system are similar to the general use of graphs (to record changes in variables over time). The horizontal coordinate will be read from left to right and express time. The vertical coordinate will express the recurrence of a phase (the change in direction which is called an attack)</p>
          <p class="bookText">A wave motion records itself automatically, and look like this (depending on the speed): </p>
          <img src="images/book1/ch1/img1.png" alt="book1ch1img1"></img>
          <p class="bookText">If you already know how graphs work, then you will understand that music can be graphed by allowing the lengths of horizontal lines be the durations of tones and vertical distance represent the pitch levels of tones.</p>
          <p class="bookText">When graphing duration only (not pitch), the end of one duration and the beginning of the next is indicated by a “turn” in the line.</p>
          <p class="bookText">Readers of this work are not assumed to be students of mathematics, so every mathematical operation shall be explained carefully.</p>
          <p class="bookText">The complexity of a wave depends on the number of components. The simplest wave is shown in figure 1.The general form of the analysis of wave-motion is the Fourier method developed in 1822. This method is very precise, but is very complicated for analyzing music. It takes several hours to analyze a wave with so many components, thus machines have been developed that can do the work of a mathematician in a fraction of the time.</p>
          <p class="bookText">A simple, 1 component wave for one period (recurrence) looks like this:</p>
          <img src="images/book1/ch1/img2.png" alt="book1ch1img2"></img>
          <p class="bookText">The distance from a to ɑ to b and from b to ɑ’ to a’ are the same. The curves are <em>phases</em> of the wave, and two phases is called a <em>period</em>. We will use phases as units of measurement. The distances from ɑ to ꞵ and a’ to ꞵ’ are equal and called the <em>amplitude</em>. They express the <em>intensity</em> of the wave</p>
          <p class="bookText">We only care about intensity in reference to accents only.</p>
          <p class="bookText">By assuming that the arrangement of durations is not showing the amplitude, we shall use rhythm graphs that look like this:</p>
          <img src="images/book1/ch1/img3.png" alt="book1image3"></img>
          <p class="bookText">The horizontal lines are a simple general curve that show time. The vertical lines show attacks (i.e. the change in rhythm). In this section all forms of attack will be constant and the time durations will change.</p>
        <a className="chapter-section-link" href="/book1#1.1.b" id="1.1.b"><h5>B. Forms of Periodicity</h5></a>
          <p class="bookText">Continuous recurrence of a group is <em>periodicity</em>. Periodicity where all groups are exactly the same is <em>uniform periodicity</em>. Different forms of uniform periodicity can be compared by the number of <em>terms</em> (places) in a recurrence.</p>
          <p class="bookText">Groups with 1 term are called <em>monomial periodicity</em>. For example:</p>
          <p class="bookText">at<sub>1</sub>+at<sub>2</sub>+...+at<sub>n</sub></p>
          <p class="bookText">a is the recurring term and t<sub>n</sub> are the times that a occurs. In music these values are integers, a may be 1, 2, 3, … , n.</p>
          <p class="bookText">When expressed using numbers, they look like this:</p>
          <img src="images/book1/ch1/img4.png" alt="book1image4"></img>
          <p class="bookText">Where each horizontal segment in the wave represents a time unit</p>
          <p class="bookText">When the unit is defined, the values of units in different periodicities will be:</p>
          <img src="images/book1/ch1/img5.png" alt="book1image5"></img>
          <p class="bookText">Musical notation will be the final form of number and graph expressions, where where 1 = ♩, 2 = 𝅗𝅥, 3 = 𝅗𝅥., 4 = 𝅝, etc.</p>
        <a className="chapter-section-link" href="/book1#1.2" id="1.2"><h3>Chapter 2. Interferences of Periodicities</h3></a>
          <p class="bookText">Now we shall discuss combining one periodicity (say, 3, 3, 3, 3) with another (say, 4, 4, 4, 4), called interference.</p>
          <p class="bookText">The periodicity with larger numbers (in our case, 4) will be called the “major generator”; the smaller will be called the “minor generator”. The way we will express two synchronized generators producing one interference group is a ÷ b *. The resultant of interference is r<sub>a ÷ b</sub>.</p>
        <a className="chapter-section-link" href="/book1#1.2.a" id="1.2.a"><h5>A. Binary Synchronization</h5></a>
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
          <img src="images/book1/ch2/img1.png" alt="book1image6"></img>
          <p class="bookText">*note: sometimes Schillinger uses ÷ to indicate the a and b relationship, but also sometimes uses : to indicate the relationship instead. These both mean <em>interference</em></p>
          <p class="bookText">Here is the example in numbers, graph, and musical notation:</p>
          <img src="images/book1/ch2/img2.png" alt="book1image7"></img>
          <p class="bookText">The resultant differs from b with respect to the accent in r (because both generators had an attack there). </p>
          <p class="bookText">This establishes a bar with a numerator of 2 i.e. 2/2, 2/4, etc. When the bar is 2/2, 1/2 = 𝅗𝅥, when the bar is 2/4, 1/2 = ♩. </p>
          <p class="bookText">Another example:</p>
          <img src="images/book1/ch2/img3.png" alt="book1image8"></img>
          <p class="bookText">This case shows musical bars with 3 as a numerator. I.e.: </p>
          <img src="images/book1/ch2/img4.png" alt="book1image9"></img>
          <p class="bookText">A third example:</p>
          <img src="images/book1/ch2/img5.png" alt="book1image10"></img>
          <p class="bookText">The importance of this is that even the most noted composers do not seem to know that an accent should not be forced but should result from the superimposition of a on b.</p>
          <p class="bookText">When it comes to the application of higher numerators (5, 7, 11, etc) that the music becomes incomprehensible to the average listener and the composer is the one to blame. When it comes to the shifting of accents which aren’t correctly expressed (through a and b), the performance suffers and listeners are confused.</p>
          <p class="bookText">Non-uniform rhythmic resultants occur when b ≠ 1. With the procedure we described above, you can find all rhythmic patterns used in the past, present, and future.</p>
          <p class="bookText">Example:</p>
          <img src="images/book1/ch2/img6.png" alt="book1image11"></img>
        <a className="chapter-section-link" href="/book1#1.2.b" id="1.2.b"><h5>B. Grouping</h5></a>
          <p class="bookText">There are three forms of grouping:</p>
          <ol>
            <li class="bookText">
              <b>Grouping by c.p.</b> In this case, c.p. = 6
              <img src="images/book1/ch2/img7.png" alt="book1image12"></img>
            </li>
            <li class="bookText">
              <b>Superimposition of a</b> a = 3. In this case, c.p. is excluded and b becomes merely an optional component.
              <img src="images/book1/ch2/img8.png" alt="book1image13"></img>
            </li>
            <li class="bookText">
              <b>Superimposition of b.</b> b = 2. c.p. is excluded; a becomes optional
              <img src="images/book1/ch2/img9.png" alt="book1image14"></img>
              Another Example:
              <img src="images/book1/ch2/img10.png" alt="book1image15"></img>
              <img src="images/book1/ch2/img11.png" alt="book1image16"></img>
            </li>
          </ol>
          <img src="images/book1/ch2/img12.png" alt="book1image17"></img>
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
          <img src="images/book1/ch2/img13.png" alt="book1image18"></img>
          <p class="bookText">When c.p. is greater than 15, use a or b superimposition only.</p>
          <p class="bookText">When the numbers get large, a musical eight note (♪) is the best denominator. All reducible fractions have been excluded from the above chart.</p>
          <p class="bookText">The a and b components show how ‘cross-rhythms’ should be performed. Beating a and be with both hands, listen to the resultant.</p>
        <a className="chapter-section-link" href="/book1#1.3" id="1.3"><h3>Chapter 3. The Techniques of Grouping</h3></a>
          <p class="bookText">Now we will look at how the patterns may be grouped.</p>
          <p class="bookText">There’s three fundamental forms of group of a ÷ b:</p>
          <ol>
            <li class="bookText">Grouping by the product (by ab)</li>
            <li class="bookText">Grouping by the Major generator (by a)</li>
            <li class="bookText">Grouping by the Minor generator</li>
          </ol>
          <p class="bookText">Using arbitrary variables, in order to group m elements by n groups, you divide m by n. If you were using grouping method 1 (by ab) then you would divide m by ab.</p>
          <p class="bookText">In this case of binary synchronization the duration of the score equals ab. Grouping that by ab would result in the following formula:</p>
          <p class="bookText"><sup>ab</sup>/<sub>ab</sub>=T    (1)</p>
          <p class="bookText">ie. grouping by ab produces one T with abt</p>
          <p class="bookText">Example:</p>
          <p class="bookText">3 ÷ 2              <sup>ab</sup>/<sub>ab</sub>=<sup>6</sup>/<sub>6</sub> T, one measure with 6t.</p>
          <p class="bookText">6t can be represented as any measure with 6 single units. For instance, <sup>3</sup>/<sub>4</sub> time where t = ♪, or <sup>6</sup>/<sub>4</sub> time where t = ♩, or 8 time where t = ♪</p>
          <img src="images/book1/ch3/img1.png" alt="book1image19"></img>
          <p class="bookText">Grouping by a:       <sup>ab</sup>/<sub>a</sub> = bT  (2)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>3*2</sup>/<sub>2</sub>=2T     ie two measures with 3t.</p>
          <p class="bookText">When grouping by a, ab must be excluded from the score or else it will sound like one T.</p>
          <p class="bookText">Also, b becomes an optional component, causing an effect known as syncopation.</p>
          <p class="bookText">     Syncopation - <em>a temporary displacement of the regular metrical accent in music caused typically by stressing the weak beat.</em> (Merriam-Webster)</p>
          <img src="images/book1/ch3/img2.png" alt="book1image20"></img>
          <p class="bookText">Grouping by b:       <sup>ab</sup>/<sub>b</sub> = aT  (3)</p>
          <p class="bookText">3 ÷ 2      <sup>3*2</sup>/<sub>3</sub>=<sup>6</sup>/<sub>2</sub>=3T     ie three measures with 2t.</p>
          <p class="bookText">Again, exclude ab from the score and a is an optional component.</p>
          <img src="images/book1/ch3/img3.png" alt="book1image21"></img>
          <p class="bookText">It’s possible to score all the 19 cases of binary synchronization by ab, by a, and by b, unless ab is too great to be used as one T.</p>
          <p class="bookText">This table includes all the necessary scores. Some forms of T are not in common use due to the lack of adequate rhythmic patterns for their representation. ( <sup>10</sup>/<sub>8</sub> , <sup>14</sup>/<sub>8</sub> )</p>
          <img src="images/book1/ch3/img4.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.4" id="1.4"><h3>Chapter 4. The Techniques of Fractioning</h3></a>
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
          <img src="images/book1/ch4/img1.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img2.png" alt="book1image4"></img>
          <p class="bookText">(Fig. 26) Note the alignment of the b groups to the waveform of a. This is what step 3 means when you “start b<sub>2</sub> at the beginning of the second phase of a.” second phase being the change in the waveform. (I’m using waveform informally here)</p>
          <img src="images/book1/ch4/img3.png" alt="book1image4"></img>
          <p class="bookText">(Fig. 27) This is a musical note representation of Figure 26.</p>
          <img src="images/book1/ch4/img4.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img5.png" alt="book1image4"></img>
          <p class="bookText">Grouping by b produces syncopated rhythms. The resultant and the bar do not close at the same time during the first run of the resultant. This means the resultant needs to be repeated so they stop at the same time.</p>
          <p class="bookText">We can find when they will align from the following:</p>
          <img src="images/book1/ch4/img6.png" alt="book1image4"></img>
          <p class="bookText">This will give us the number of bars the resultant will have. It will always have a remainder. The denominator of the remainder will tell us how many times the resultant will have to be repeated.</p>
          <img src="images/book1/ch4/img7.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img8.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img9.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img10.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img11.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img12.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img13.png" alt="book1image4"></img>
          <img src="images/book1/ch4/img14.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.5" id="1.5"><h3>Chapter 5. Composition of Groups by Pairs</h3></a>
          <p class="bookText">The techniques of obtaining resultants can be extended into expanding processes of composing rhythmic resultants in pairs. In the traditional exposition of musical themes, the theme is stated twice, where the first time it sounds incomplete and the second time it is a complete sound.</p>
          <p class="bookText">When attempting to do so, composers tend to make variations of the theme’s cadence <em>harmonically</em>. Composers also struggle with expansion, moving from a short group to an adjacent long group, and contraction, moving from a long group to an adjacent short group. Beethoven made clumsy attempts at expansion and contraction in some of his piano sonatas. In No. 1 in the first movement at the end of the exposition, he states a two-bar group three times. He makes an expansion on the third statement by holding the chord through the whole bar, a whole note, adding one more bar. In No. 7 in the beginning of the finale, he has a four-bar group. There are several rests in the group and he makes a three-bar group by simply omitting those rests.</p>
          <p class="bookText">Here, we will present a general method of <em>balancing</em>, <em>expanding</em>, and <em>contracting</em> a pair of adjacent groups.</p>
          <p class="bookText">A. Balance</p>
          <img src="images/book1/ch5/img1.png" alt="book1image4"></img>
          <p class="bookText">Figure 37 shows that in order to balance two resultants with identical generators, take the resultant of <em>a</em> to <em>b</em>, with fractioning, add the resultant of <em>a</em> to <em>b</em> and add <em>a</em> times the difference of <em>a</em> and <em>b</em>. Grouping for such pairs is through <em>a</em> only.</p>
          <img src="images/book1/ch5/img2.png" alt="book1image4"></img>
          <img src="images/book1/ch5/img3.png" alt="book1image4"></img>
          <p class="bookText">Balance does not seem natural when <em>a</em> > <em>2b</em> or <em>a</em> > <em>3b</em> . It can be accomplished through a general procedure.</p>
          <img src="images/book1/ch5/img4.png" alt="book1image4"></img>
          <p class="bookText">Expansion</p>
          <img src="images/book1/ch5/img5.png" alt="book1image4"></img>
          <p class="bookText">E = expansion</p>
          <img src="images/book1/ch5/img6.png" alt="book1image4"></img>
          <p class="bookText">C. Contraction</p>
          <img src="images/book1/ch5/img7.png" alt="book1image4"></img>
          <p class="bookText">C = contraction</p>
          <img src="images/book1/ch5/img8.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.6" id="1.6"><h3>Chapter 6. Utilization of Three or more Generators</h3></a>
          <p class="bookText">Rhythmic groups may be developed using two generators; this can also be accomplished with three or more generators. In using more than two generators, the selection of the third is crucial. Schillinger stated in his “Mathematical Basis of the Arts” that <em>all generators pertaining to one family of rhythm belong to the same series of number-values</em>. These series are the series of growth, which can be found throughout music, other arts and various forms of growth in nature, such as horns, sunflower seeds, and maple leaves. Mathematically, one can produce an infinite number of <em>types</em> of the series of growth, and an infinite number of series of each type of series. The series of growth is a type of <em>summation series</em>. In this particular series, every third number is the sum of the two preceding numbers (ex. 1, 2, 3, 5, 8, 13, 21, …). Each style, or family, of rhythm evolves through these types of summation series. The following are all the series that are useful for musical purposes:</p>
          <ol type="I">
            <li class="bookText">1, 2, 3, 5, 8, 13, …</li>
            <li class="bookText">1, 3, 4, 7, 11, 18, …</li>
            <li class="bookText">1, 4, 5, 9, 14, 23, ...</li>
          </ol>
          <p class="bookText">All rhythmic groups of one style are the resultants of the generators of the same series (ex. A rhythmic group identified with is the same style as groups <em>r</em><sub>3÷2</sub> produced by <em>r</em><sub>5÷3</sub> or <em>r</em><sub>5÷3÷2</sub>).</p>
          <p class="bookText">The following are the important and practical combinations of generators to be worked out:</p>
          <p class="bookText">Series I. 2 ÷ 3 ÷ 5 3 ÷ 5 ÷ 8</p>
          <p class="bookText">Series II. 3 ÷ 4 ÷ 7</p>
          <p class="bookText">Series III. 4 ÷ 5 ÷ 9</p>
        <a className="chapter-section-link" href="/book1#1.6.a" id="1.6.a"><h5>A. The Technique of Synchronization</h5></a>
          <p class="bookText">To synchronize three or more generators, it is necessary to first find their common product and their complementary factors.</p>
          <p class="bookText">2 ÷ 3 ÷ 5</p>
          <p class="bookText">2 * 3 * 5 = 30</p>
          <p class="bookText">The complementary factors are the quotients of the product by a generator. Thus 30 / 2 = 15 means that 15 is a complementary factor of 2.</p>
          <p class="bookText">Therefore: 15(2); 10(3); 6(5)</p>
          <p class="bookText">This method offers two resultants at a time (r and r’), one being a theme and the other a countertheme. Generators produce r, and the complementary factors produce r’.</p>
          <img src="images/book1/ch6/img1.png" alt="book1image4"></img>
          <p class="bookText">The rule of grouping is: <em>group by any generator of any of the complementary factors</em>. In 2÷3÷5, grouping is available through 2, 3, 5, 6, 10, 15 (i.e., 2 / 4, 3 / 4, 5 / 4, 6 / 8, 10 / 8, 15 / 8).</p>
          <img src="images/book1/ch6/img2.png" alt="book1image4"></img>
          <p class="bookText">In figure 48, no more rhythmically suitable counterthemes can be devised. The theme makes three recurrences while the countertheme makes continuous changes in longer values. This allows the listener to hear both themes together. All resultants from three or more generators are characterized by these recurrences and variations.</p>
        <a className="chapter-section-link" href="/book1#1.7" id="1.7"><h3>Chapter 7. Resultants Applied to Instrumental Forms</h3></a>
          <p class="bookText">Time rhythm refers to the periodicity of attacks, or the intervals of time at which the attacks occur.</p>
        <a className="chapter-section-link" href="/book1#1.7.a" id="1.7.a"><h5>A. Instrumental Rhythm</h5></a>
          <p class="bookText">Instrumental rhythm is made up of the number of <em>places</em> of attack. For example, beating two kettle drums of different pitches in sequence results in two places of attack. Synchronizations of time rhythm and instrumental rhythm are subject to the same laws of synchronization and interference as time periodicity. When the number of places in an instrumental group does not coincide with the number of terms in a time group, then a common denominator will define the number of time groups and the number of instrumental groups until their recurrence. For example, if we use two differently pitched kettle drums on , the entire figure <em>r</em><sub>3÷2</sub> will close after the first group is over because the number of places in the group is 2 (2 drums) and the number of terms in the time group is four (4 ÷ 2 = 2). In essence, the instrumental group appears twice, while the rhythmic resultant appears once.</p>
          <img src="images/book1/ch7/img1.png" alt="book1image4"></img>
          <p class="bookText">Taking the same case of the two kettle drums for <em>r</em><sub><u>3÷2</u></sub>, we get a totally different result. The number of attacks in the instrumental groups is still 2, while the number of terms in the rhythmic result is 7, (2+1+1+1+1+1+2). 7*2=14. Seven has a complementary factor 2, and vice versa. The kettle drum 2 attack figure will appear 7 times, while the rhythmic resultant appears twice.</p>
          <img src="images/book1/ch7/img2.png" alt="book1image4"></img>
          <p class="bookText">This principle can be carried out to any desired degree of complexity, depending on the common denominator between the number of terms in a rhythmic group and the number of attacks in an instrumental group.</p>
          <p class="bookText">Let us take a motif consisting of four different pitches, such as c, d, e, f. By superimposing <em>r</em><sub>3÷2</sub>, we obtain one group without recurrence because the number of pitches (intonation attacks) and the number of terms in the rhythmic resultant (time attacks) are equal (4 / 4 = 1). Taking the same four notes and superimposing <em>r</em><sub>3÷2</sub> we get 7 * 4 = 28. The rhythmic group has 7 attacks has the complementary factor of 4, and the melody having 4 attacks has the complementary factor of 7.</p>
          <img src="images/book1/ch7/img3.png" alt="book1image4"></img>
          <p class="bookText">Utilizing this technique makes it possible to run a very simple motif almost infinitely. The duration of continuous variability depends on a common denominator. Rhythmic continuity through instrumental interference may be found in many arrangements of fox-trots. 6 uniform attacks (2 false triplets) placed in a common time measure (= 8/8) produces and interference of 8 ÷ 6. 8 ÷ 6 reduces to 4 ÷ 3. Six gets the complementary factor 4, and eight gets the complementary factor of 3.</p>
          <img src="images/book1/ch7/img4.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.7.b" id="1.7.b"><h5>B. Applying the Principles of Interference to Harmony</h5></a>
          <p class="bookText">The most effective forms of accompaniment are produced when the principles of interference of rhythmic and instrumental groups are applied to harmony. Applying the principles makes it possible to correlate a number of accompaniments simultaneously. The illustrations of harmony are restricted to three of the simplest instrumental forms:</p>
          <ol>
            <li class="bookText">The two-attack instrumental figure. The first attack is the lower bass. The second attack is the remaining upper parts of the chord. Ex. Polka</li>
            <li class="bookText">The four-attack instrumental figure. The first attack is the lower bass. The second attack is the upper part of the chord. The third attack is another detached bass. The fourth attack is the upper part of a chord. Ex. Fox-trot</li>
            <li class="bookText">The six-attack instrumental figure. The first attack is the lower detached bass. The second attack is the upper part of the chord. The third attack is the middle detached bass. The fourth attack is the upper part of the chord. The fifth attack is the upper detached bass. The sixth attack is the upper part of the chord.</li>
          </ol>
          <img src="images/book1/ch7/img5.png" alt="book1image4"></img>
          <p class="bookText">The following illustrate the continuous run of these instrumental forms of harmony with various simpler rhythmic resultants, all used one chord:</p>
          <p class="bookText">3 ÷ 2</p>
          <img src="images/book1/ch7/img6.png" alt="book1image4"></img>
          <img src="images/book1/ch7/img7.png" alt="book1image4"></img>
          <img src="images/book1/ch7/img8.png" alt="book1image4"></img>
          <p class="bookText">One can compose other instrumental forms of harmony with as many as 16 attacks - such as an alternation of the four different notes in the bass, with the upper part of the chord doubled in two octaves:</p>
          <img src="images/book1/ch7/img9.png" alt="book1image4"></img>
          <p class="bookText">A greater number of attacks in an instrumental figure can be produced using the arpeggio technique.</p>
          <p class="bookText">When one time-group is distributed through the different places of attack, different individual parts become the <em>resultants of interference between the time and the instrumental groups</em>. For example, if we start with four attacks and superimpose 2+1+1 over it, the resultant is 2+3+3 and the bass 3+2+3, as shown in the following:</p>
          <img src="images/book1/ch7/img10.png" alt="book1image4"></img>
          <p class="bookText">In the following example, the melody is generated from the resultant of 5%2, the resultant is in 5/4 time, but the accompaniment is in common time.</p>
          <img src="images/book1/ch7/img11.png" alt="book1image4"></img>
          <p class="bookText">For now this result is more of a curiosity, but techniques like this will be used later to develop rich textures in a full score.</p>
        <a className="chapter-section-link" href="/book1#1.8" id="1.8"><h3>Chapter 8. Coordination of Time Structures</h3></a>
          <p class="bookText">The common element to all music, regardless of culture or complexity, is that it represents motion: the change of place over time. Regardless of the pitches used, rhythms employed, harmony (or lack thereof), anything that can be called music can be annotated as <em>organized time</em>.</p>
          <p class="bookText">Organized time, more commonly referred to as <em>rhythm</em>, can be universally annotated with the following:</p>
          <ol>
            <li class="bookText">The number of individual parts</li>
            <li class="bookText">The quantity of attacks per part</li>
            <li class="bookText">The rhythm pattern per part</li>
            <li class="bookText">The combination (or interference) of parts</li>
            <li class="bookText">Overlaying the result on measures</li>
          </ol>
          <p class="bookText">The exact nature of the parts is only relevant insofar as a particular style is desired; the principles remain the same across mediums.</p>
          <img src="images/book1/ch8/img1.png" alt="book1image4"></img>
          <img src="images/book1/ch8/img2.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.a" id="1.8.a"><h5>A. Distribution of a Duration-Group</h5></a>
          <h3>Notation</h3>
            <p class="bookText">pli&emsp;number of places in the instrumental group</p>
            <p class="bookText">pla&emsp;number of places in the attack-group.</p>
            <p class="bookText">a<sub>a</sub>&emsp;number of attacks in the attack-group.</p>
            <p class="bookText">a<sub>T</sub>&emsp;number of attacks in the duration-group.</p>
            <p class="bookText">PL&emsp;the ﬁnal number of places.</p>
            <p class="bookText">A&emsp;the synchronized attack—group (the number of attacks synchronized with the number of places).</p>
            <p class="bookText">A’&emsp;the ﬁnal attack group (number of attacks synchronized with the duration—group).</p>
            <p class="bookText">T&emsp;the original duration-group.</p>
            <p class="bookText">T’&emsp;the synchronized duration~group.</p>
            <p class="bookText">T”&emsp;the ﬁnal duration—group.</p>
            <p class="bookText">N<sub>T”</sub>&emsp;the number of ﬁnal duration—groups.</p>
          <h3>Prodecures:</h3>
          <ol>
            <li>
              Interference between the_ number of places in the instrumental group (pli) and the number of places in the attack-group (pla).
              <p class="equation">PL = <sup>pli</sup>/<sub>pla</sub>;&emsp;<sup>pla (pli)</sup><sub>pli (pla)</sub></p>
            </li>
            <li>
              The product of the number of attacks in the attack group (aa) by the complementary factor to the number of places in the attack-group (pli after reduction).
              <p class="equation">A = a<sub>a</sub>&#183;pli</p>
            </li>
            <li>
              Interference between the synchronized attack-group (A) and the number of attacks in the original duration-group (a<sub>T</sub>).
              <p class="equation">A' = <sup>A</sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a</sub>&#183;pli</sup><sub>a<sub>T</sub></sub></p>
            </li>
            <li>
              The product of the original duration-group (T) by the complementary factor to its number of attacks (A’).
              <p class="equation">T' = T&#183;A' = <sup>T&#183;a<sub>a</sub> pli</sup>/<sub>a<sub>T</sub></sub></p>
            </li>
            <li>
              Interference between the synchronized duration-group (T’) and the ﬁnal duration—group (T”).
              <p class="equation">N<sub>T''</sub> = <sup>T'</sup>/<sub>T''</sub></p>
            </li>
          </ol>
        <a className="chapter-section-link" href="/book1#1.8.b" id="1.8.b"><h5>B. Synchronization of an Attack-Group</h5></a>
          <p class="bookText">Distribution of attacks of an attack-group (a<sub>a</sub>) through the number of attacks of a duration—group (a<sub>T</sub>).</p>
          <p class="equation"><em>First Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = 1</p>
          <p class="equation">A = a<sub>T</sub></p>
          <p class="equation">T' = T</p>
          <p class="bookText">Example: a<sub>a</sub> = 4a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation">A = 4a</p>
          <p class="equation">T' = 6t</p>
          <img src="images/book1/ch8/img3.png" alt="book1image4"></img>
          <p class="equation"><em>Second Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> &#8800; 1</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 5a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="bookText"><sup>5</sup>/<sub>4</sub></p>
          <p class="equation">A = 5a&#183;4 = 20a</p>
          <p class="equation">T' = 6t&#183;5 = 30t</p>
          <img src="images/book1/ch8/img4.png" alt="book1image4"></img>
          <p class="equation"><em>Third Case:</em> <sup>a<sub>a</sub></sup>/<sub>a<sub>T</sub></sub> = <sup>a<sub>a'</sub></sup>/<sub>a<sub>T'</sub></sub>&emsp;i.e., a reducible fraction</p>
          <p class="equation">A = a<sub>T</sub>&#183;a<sub>a</sub></p>
          <p class="equation">T' = T&#183;a<sub>a'</sub></p>
          <p class="bookText">Example: a<sub>a</sub> = 6a; T = r<sub>3&#247;2</sub> = 6t; a<sub>T</sub> = 4a</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">A = 4a&#183;a3 = 12a</p>
          <p class="equation">T' = 6t&#183;3 = 18t</p>
          <img src="images/book1/ch8/img4.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.c" id="1.8.c"><h5>C. Distribution of a Synchronized Duration-Group</h5></a>
          <p class="equation"><em>First Case:</em> <sup>T'</sup>/<sub>T''</sub> = 1</p>
          <p class="equation">T'' = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 6t</p>
          <img src="images/book1/ch8/img5.png" alt="book1image4"></img>
          <p class="equation"><em>Second Case:</em> <sup>T'</sup>/<sub>T''</sub> &#8800; 1</p>
          <p class="equation">N<sub>T''</sub> = T'</p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 5t</p>
          <p class="equation">N5t = 6</p>
          <img src="images/book1/ch8/img6.png" alt="book1image4"></img>
          <p class="equation"><em>Third Case:</em> <sup>T'</sup>/<sub>T''</sub> = <sup>T<sub>'</sub></sup>/<sub>T<sub>''</sub></sub></p>
          <p class="equation">N<sub>T''</sub> = T<sub>'</sub></p>
          <p class="bookText">Example: T' = 6t;&emsp;T'' = 4t</p>
          <p class="equation"><sup>6</sup>/<sub>4</sub> = <sup>3</sup>/<sub>2</sub></p>
          <p class="equation">N<sub>4t</sub> = 3</p>
          <img src="images/book1/ch8/img7.png" alt="book1image4"></img>
          <p class="bookText">Example: a<sub>a</sub> = 5a&emsp;t = r<sub>5&#247;2</sub> = 10t;&emsp;a<sub>T</sub> = 6a</p>
          <img src="images/book1/ch8/img8.png" alt="book1image4"></img>
          <ol>
            <li><sup>6</sup>/<sub>5</sub>    <sup>5 (6)</sup> <sub>6 (5)</sub></li>
            <li>10t is equivalent to 6 attacks; 10t X 5 = 50t</li>
            <li>When T'' = <sup>8</sup>/<sub>8</sub>, <sup>50t</sup>/<sub>8</sub> = <sup>25&#183;4</sup>/<sub>4</sub> = 25T''</li>
          </ol>
          <img src="images/book1/ch8/img9.png" alt="book1image4"></img>
          <img src="images/book1/ch8/img10.png" alt="book1image4"></img>
        <a className="chapter-section-link" href="/book1#1.8.d" id="1.8.d"><h5>D. Synchronization of an Instrumental Group</h5></a> 
          <p class="bookText">Example: pli = 4;&emsp:pla = 3;&emsp;a<sub>a</sub> = 3+2+3 = 8;&emsp;T = r<sub>5&#247;2</sub> = 10t;&emsp;6a</p>
          <ol>
            <li><sup>4</sup>/<sub>3</sub>;  <sup>3 (4)</sup><sub>4 (3)</sub></li>
            <li>8 x 4 = 32</li>
            <li><sup>32</sup>/</li>
            <li></li>
            <li></li>
          </ol>
        <a className="chapter-section-link" href="/book1#1.9" id="1.9"><h3>Chapter 9. Homogeneous Simultaneity and Continuity (Variations)</h3></a>
        <a className="chapter-section-link" href="/book1#1.9.a" id="1.9.a"><h5>A. General and Circular Permutations</h5></a>
        <a className="chapter-section-link" href="/book1#1.10" id="1.10"><h3>Chapter 10. Generalization of Variation Techniques</h3></a>
        <a className="chapter-section-link" href="/book1#1.10.a" id="1.10.a"><h5>A. Permutations of the Higher Order</h5></a>
        <a className="chapter-section-link" href="/book1#1.11" id="1.11"><h3>Chapter 11. Composition of Homogeneous Rhythmic Continuity</h3></a>
        <a className="chapter-section-link" href="/book1#1.12" id="1.12"><h3>Chapter 12. Distributive Powers</h3></a>
        <a className="chapter-section-link" href="/book1#1.12.a" id="1.12.a"><h5>A. Continuity of Harmonic Contrasts</h5></a>
        <a className="chapter-section-link" href="/book1#1.12.b" id="1.12.b"><h5>B. Composition of Rhythmic Counterthemes</h5></a>
        <a className="chapter-section-link" href="/book1#1.13" id="1.13"><h3>Chapter 13. Evolution of Rhythm Styles (Families)</h3></a>
        <a className="chapter-section-link" href="/book1#1.13.a" id="1.13.a"><h5>A. Swing Music</h5></a>
        <a className="chapter-section-link" href="/book1#1.14" id="1.14"><h3>Chapter 14. Rhythms of Variable Velocities</h3></a>
        <a className="chapter-section-link" href="/book1#1.14.a" id="1.14.a"><h5>A. Acceleration in Uniform Groups</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.b" id="1.14.b"><h5>B. Acceleration in Non-uniform Groups</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.c" id="1.14.c"><h5>C. Rubato</h5></a>
        <a className="chapter-section-link" href="/book1#1.14.d" id="1.14.d"><h5>D. Fermata</h5></a>
        <br />
        <Row>
          <Col><Link to="/intro" className="content-links"><h5>Previous Book</h5></Link></Col>
          <Col><Link to="/book2" className="content-links"><h5>Next Book</h5></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookOne;
