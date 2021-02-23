import {Container, Row, Col, Card} from 'react-bootstrap'
import '../.././Style.css';
import JXGBoard from 'jsxgraph-react-js'
 
var f = "2sin(x)";

let logicJS = (brd) => {
  brd.suspendUpdate();
 
  var graph = brd.create('functiongraph', [f]);
  brd.unsuspendUpdate();
}


function Waveform() {
  
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <h1>Waveform Applet</h1>
            <JXGBoard
              className="jxboard"
              boardAttributes={{ axis: true, boundingbox: [-1, 2, 8, -2] }}
              logic={logicJS}
              />
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Waveform;
