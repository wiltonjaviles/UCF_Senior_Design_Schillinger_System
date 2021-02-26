import {Container, Row, Col, Card, Form} from 'react-bootstrap'
import React from 'react';
import '../.././Style.css';
import JXGBoard from 'jsxgraph-react-js'

function Waveform() {
  
  const [state , setState] = useState({
    amplitude : 1,
    frequency : 1,
    phase: 0,
    vertical: 0
  })

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  var logicJS = (brd) => {
    brd.suspendUpdate();
    var a = brd.create('slider', [[-5.5, 5], [-3.5, 5], [0, 1, 10]], { name: 'amplitude' });
    var f = brd.create('slider', [[-5.5, 4], [-3.5, 4], [0, 1, 10]], { name: 'frequency' });
    var p = brd.create('slider', [[-5.5, 3], [-3.5, 3], [-10, 0, 10]], { name: 'phase shift' });
    var v = brd.create('slider', [[-5.5, 2], [-3.5, 2], [-10, 0, 10]], { name: 'vertical shift' });
    var c = brd.create('functionGraph', [function (x) {return a.Value()*Math.sin(f.Value()*(x+p.Value()))+v.Value()}], {needsRegularUpdate:true});
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
                  logic={logicJS}
                  boardAttributes={{ axis: true, boundingbox: [-6, 6, 6, -6], needsRegularUpdate: true}}
                  style={{
                    border: "3px solid black"
                  }}
                />
              </Col>
              <Col>
                  <h3>Instructions</h3>
                  <p>
                    Use the sliders on the left to manipulate the appearance of the wave. How does the amplitude, 
                    frequency, phase shift, and vertical shift affect the wave?
                  </p>
              </Col>
              {/* <Col>
                  <h3>Controls</h3>
                  <Form>
                    <Form.Group controlId="amplitude">
                      <Form.Label>Amplitude</Form.Label>
                      <Form.Control 
                        type="range" onInput={handleChange}
                        min="0" max="10" step="0.1" defaultValue="1"
                      />
                    </Form.Group>
                    <Form.Group controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control 
                        type="range" onInput={handleChange}
                        min="0" max="10" step="0.1" defaultValue="1"
                      />
                    </Form.Group>
                    <Form.Group controlId="phase">
                      <Form.Label>Phase Shift</Form.Label>
                      <Form.Control 
                        type="range" onInput={handleChange}
                        min="-5" max="5" step="0.1" defaultValue="0"
                      />
                    </Form.Group>
                    <Form.Group controlId="vertical">
                      <Form.Label>Vertical Shift</Form.Label>
                      <Form.Control 
                        type="range" onInput={handleChange}
                        min="-5" max="5" step="0.1" defaultValue="0"
                      />
                    </Form.Group>
                  </Form>
              </Col> */}
            </Row>
            
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Waveform;
