import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';
import {r3,toABC} from '../functions/./generators';

function Ch6Generator() {
  const [state , setState] = useState({
    variableA : 2,
    variableB : 3,
    variableC : 5,
    groupBy : 'a',
    showing : 'Show Rs',
    OutputABC : '',
    abcString: ""
  })

  let show = true;

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
    const vC = Number(state.variableC);
    let vG = 0;
    
    switch(state.groupBy) {
      case 'a':
        vG = state.variableA;
        break;
      case 'b':
        vG = state.variableB;
        break;
      case 'c':
        vG = state.variableC;
        break;
      case 'ab':
        vG = state.variableA * state.variableB;
        break;
      case 'ac':
        vG = state.variableA * state.variableC;
        break;
      case 'bc':
        vG = state.variableB * state.variableC;
        break;
      case 'abc':
        vG = state.variableA * state.variableB * state.variableC;
        break;
      default: break;
    }

    switch(state.showing) {
      case 'Show All':
        show = true;
        break;
      case 'Show Rs':
        show = false;
        break;
    }

    
    let outArr = r3(vA,vB,vC,vG,'all');
    let abcOutput = '';
    if(show) {
      var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\nV: V6 clef=treble\nV: V7 clef=treble\nV: V8 clef=treble\nV: V9 clef=treble";
      abc = abc+"\n[V: V1]"+toABC(outArr[0]).join("");
      abc = abc+"\n[V: V2]"+toABC(outArr[1]).join("");
      abc = abc+"\n[V: V3]"+toABC(outArr[2]).join("");
      abc = abc+"\n[V: V4]"+toABC(outArr[3]).join("");
      abc = abc+"\n[V: V5]"+toABC(outArr[4]).join("");
      abc = abc+"\n[V: V6]"+toABC(outArr[5]).join("");
      abc = abc+"\n[V: V7]"+toABC(outArr[6]).join("");
      abc = abc+"\n[V: V8]"+toABC(outArr[7]).join("");
      abc = abc+"\n[V: V9]"+toABC(outArr[8]).join("");
      abc = abc+"\n[V: V10]"+toABC(outArr[9]).join("");
      abcOutput = "X:1\nK:C\n" + toABC(outArr[5]).join('') + "\n";
    } else {
      var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble";
      abc = abc+"\n[V: V1]"+toABC(outArr[5]).join("");
      abc = abc+"\n[V: V2]"+toABC(outArr[9]).join("");
      abcOutput = abc;
    }

    abcjs.renderAbc("outputABC", abc);
    
    setState(prevState => ({
        ...prevState,
        abcString : abcOutput
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Trinomial Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select three integers a, b and c, then select a measure length.  Click Generate to view output. Large inputs will go off the screen.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" value={state.variableA} onChange={handleSelect}>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
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
                <Col className="col-1">
                  <h1>÷</h1>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableC">
                    <Form.Control as="select" value={state.variableC} onChange={handleSelect}>
                      <option>2</option>
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
              </Row>
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">              
                  <Form.Group controlId="groupBy">
                    <Form.Control as="select" value={state.groupBy} onChange={handleSelect}>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>ab</option>
                      <option>ac</option>
                      <option>bc</option>
                      <option>abc</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="showing">
                    <Form.Control as="select" value={state.showing} onChange={handleSelect}>
                      <option>Show All</option>
                      <option>Show Rs</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>
                
                
                <Row className="justify-content-md-center">
                    
                      <div id="outputABC"></div>
                      
                    
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

export default Ch6Generator;