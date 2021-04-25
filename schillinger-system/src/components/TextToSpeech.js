import {Container, Card, Row, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap' 
import '.././Style.css';

function TextToSpeech(props) {
  var isPlaying = false;
  var isPaused = false;
  var text = String(props.text);
  var speech = new SpeechSynthesisUtterance(text);
  speech.lang='en-US';
  const playText = () => {
    if(!isPlaying) {
      speechSynthesis.speak(speech);
      isPlaying = true;
    }
  }

  speech.onend = function() {
    isPlaying = false;
  }

  const stopText = () => {
    speechSynthesis.pause();
    speechSynthesis.cancel();
    isPlaying = false;
  }

  const pauseText = () => {
    speechSynthesis.pause();
    isPaused = true;
  }

  const resumeText = () => {
    if(isPaused) {
      speechSynthesis.resume();
    }
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Card className="playback-card">
            <Card.Body className="mt-0 mb-0">
              <Row className="m-0 justify-content-center"><p className="m-0"><b>Listen to this text:</b></p></Row>
              <Row className="justify-content-center">
                <ButtonToolbar>
                  <ButtonGroup className="mr-2 mt-0 mb-0">              
                    <Button className="btn-secondary btn-sm" onClick={playText}>Play</Button>
                  </ButtonGroup>
                  <ButtonGroup>              
                    <Button className="btn-secondary btn-sm mr-2 mt-0 mb-0" onClick={stopText}>Stop</Button>
                  </ButtonGroup>
                  <ButtonGroup className="mr-2 mt-0 mb-0">              
                    <Button className="btn-secondary btn-sm" onClick={pauseText}>Pause</Button>
                  </ButtonGroup>
                  <ButtonGroup>              
                    <Button className="btn-secondary btn-sm mt-0 mb-0" onClick={resumeText}>Resume</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default TextToSpeech;