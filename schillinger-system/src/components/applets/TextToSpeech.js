import {Container, Row, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap' 
import '../.././Style.css';

function TextToSpeech(props) {
  var isPlaying = false;
  var text = String(props.text);
  var speech = new SpeechSynthesisUtterance(text);
  const playText = () => {
    // alert(text);
    speechSynthesis.speak(speech);
    isPlaying = true;
  }

  const stopText = () => {
    if(isPlaying) {
      speechSynthesis.cancel();
    }
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <ButtonToolbar>
            <ButtonGroup className="mr-2">              
              <Button className="btn-secondary btn-sm" onClick={playText}>Listen to this text</Button>
            </ButtonGroup>
            <ButtonGroup>              
              <Button className="btn-secondary btn-sm" onClick={stopText}>Stop listening</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Row>
      </Container>
    </div>
  );
}

export default TextToSpeech;