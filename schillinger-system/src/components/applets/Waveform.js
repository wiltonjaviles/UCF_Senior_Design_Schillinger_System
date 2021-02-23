import {Container, Row, Col, Card, Form} from 'react-bootstrap'
import React, { useState } from 'react';
import '../.././Style.css';
import JXGBoard from 'jsxgraph-react-js'

function Waveform() {
  var amplitude = 1;
  var period = 2*Math.PI;
  var hPhase = 0;
  var vPhase = 0;

  const [state , setState] = useState({
    amplitude : 1,
    period : 2*Math.PI,
    hPhase: 0,
    vPhase: 0
  })

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  var p = state.period/(2*Math.PI);
  var A = String(state.amplitude);
  var B = String(p);
  var C = String(-state.hPhase);
  var D = String(state.vPhase);

  //y = Asin(B(x+C))+D
  var f = A+"*sin("+B+"*(x+"+C+"))+"+D;
  let logicJS = (brd) => {
    brd.suspendUpdate();
    var graph = brd.create('functiongraph', [f], {strokeColor: "black", strokeWidth: 2});
    brd.unsuspendUpdate();
  }
  
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <h1>Waveform Applet</h1>
            <br />
            <Row>
              <Col>
                <JXGBoard
                className="jxboard"
                boardAttributes={{ axis: true, boundingbox: [-1, 4.5, 8, -4.5] }}
                logic={logicJS}
                />
              </Col>
              <Col>
                <h3>Controls</h3>
                <Form>
                  <Form.Group controlId="amplitude">
                    <Form.Label>Amplitude</Form.Label>
                    <Form.Control 
                      type="range"
                      min="0.1" max="4" step="0.1"
                      className="rangeSlider" onInput={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="period">
                    <Form.Label>Frequency</Form.Label>
                    <Form.Control 
                      type="range"
                      min="0.1" max="8" step="0.1"
                      className="rangeSlider" onInput={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="hPhase">
                    <Form.Label>Horizontal Phase</Form.Label>
                    <Form.Control 
                      type="range"
                      min="0.1" max="8" step="0.1"
                      className="rangeSlider" onInput={handleChange}
                    /> 
                  </Form.Group>
                  <Form.Group controlId="vPhase">
                    <Form.Label>Vertical Phase</Form.Label>
                    <Form.Control 
                      type="range"
                      min="0.1" max="8" step="0.1"
                      className="rangeSlider" onInput={handleChange}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Waveform;
