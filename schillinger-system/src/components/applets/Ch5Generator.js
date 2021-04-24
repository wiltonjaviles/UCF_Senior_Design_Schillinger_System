import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/Playback';
import {balance,expand,contract,toABC} from '../functions/./generators';

function Ch5Generator() {
  const [state , setState] = useState({
    variableA : 3,
    variableB : 2,
    variant : 'Balance',
    Output : '',
    abcString: ""
  })


  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const generateR = event => {

    event.preventDefault();    
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    const vV = String(state.variant);

    let outArr = [];
    
    switch(vV) {
      case 'Balance':
        outArr = balance(vA,vB);
        break;
      case 'Contract':
        outArr = contract(vA,vB);
        break;
      case 'Expand':
        outArr = expand(vA,vB);
        break;
      default: break;
    }
    
    outArr = toABC(outArr);
    let abcOut = "X:1\nK:C\n"+outArr.join("")+"\n";

    abcjs.renderAbc("output", abcOut);

    setState(prevState => ({
        ...prevState,
        abcString : abcOut
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Variation Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, and method of pairing.  Click Generate to view output.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" value={state.variableA} onChange={handleSelect}>
                      
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h1>÷</h1>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" value={state.variableB} onChange={handleSelect}>
                     
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                
                <Col className="col-2">              
                  <Form.Group controlId="variant">
                    <Form.Control as="select" defaultValue="Balance" value={state.variant} onChange={handleSelect}>
                      <option>Balance</option>
                      <option>Expand</option>
                      <option>Contract</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>

                <Row className="justify-content-md-center">
                  <div id="output"></div>
                </Row>

                
                <Playback abc = {state.abcString}/>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch5Generator;