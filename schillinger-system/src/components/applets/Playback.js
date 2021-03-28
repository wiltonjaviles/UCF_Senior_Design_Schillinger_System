import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
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
          <Row>
            <Col className="col-5"></Col>
            <Col><Button className="btn-light" onClick={play}>Play</Button></Col>
            <Col><Button className="btn-light" onClick={stop}>Stop</Button></Col>
            <Col className="col-5"></Col>
          </Row>
    </Container>
  );
}
  
export default Playback;