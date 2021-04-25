import {Container, Row, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import '../.././Style.css';
// import abcjs from 'abcjs';
import abcjs from 'abcjs/midi';



function Playback(props) {
  var abcString=String(props.abc);
  var visualObj = abcjs.renderAbc("*", abcString)[0];
  var midiBuffer = new abcjs.synth.CreateSynth();

  const play = () => {
      midiBuffer.init({
        audioContext: new AudioContext(),
        visualObj: visualObj,
        options: {}
      }).then(function (response) {
        console.log(response);
        midiBuffer.prime().then(function (response) {
          midiBuffer.start();
        });
      }).catch(function (error) {
        console.warn("Audio problem:", error);
      });
  }
  const stop = () => {
    if(midiBuffer) {
      midiBuffer.stop();
    }
  }

  return (
    <Container>
      <div id="paper"></div>
      <Row className="justify-content-center">
          <ButtonToolbar>
            <ButtonGroup className="mr-2">              
              <Button className="btn-light btn-sm" onClick={play}>Play</Button>
            </ButtonGroup>
            <ButtonGroup>              
              <Button className="btn-light btn-sm" onClick={stop}>Stop</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Row>
    </Container>
  );
}
  
export default Playback;