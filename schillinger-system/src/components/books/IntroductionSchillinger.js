import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../.././Style.css';

function IntroductionSchillinger() {
  return (
    <div>
      <Container>
        <br /> 
        <h1>Introduction</h1>
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