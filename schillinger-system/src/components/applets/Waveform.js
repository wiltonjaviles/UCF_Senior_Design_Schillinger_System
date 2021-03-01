import {Container, Row, Col, Card, Form} from 'react-bootstrap'
import React from 'react';
import '../.././Style.css';
import JXGBoard from 'jsxgraph-react-js'

function Waveform() {

  var logicJS = (brd) => {
    brd.suspendUpdate();
    var a = brd.create('slider', [[-5.5, 5], [-3.5, 5], [0, 1, 10]], { name: 'amplitude' });
    var f = brd.create('slider', [[-5.5, 4], [-3.5, 4], [0, 1, 10]], { name: 'frequency' });
    var p = brd.create('slider', [[-5.5, 3], [-3.5, 3], [-10, 0, 10]], { name: 'phase shift' });
    var v = brd.create('slider', [[-5.5, 2], [-3.5, 2], [-10, 0, 10]], { name: 'vertical shift' });
    var c = brd.create('functionGraph', [function (x) {return a.Value()*Math.sin(f.Value()*(x+p.Value()))+v.Value()}], {needsRegularUpdate:true});
    var p1 = brd.create('point', [0, 0], {slideObject: c, name: ""});

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
                  <p>Drag the point along the wave to see the exact coordinates of the point. </p>
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
