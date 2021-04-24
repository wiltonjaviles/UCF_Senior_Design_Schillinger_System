import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';
import {r_,toABC} from '../functions/./generators';

function Ch4Generator() {

  const [state , setState] = useState({
    variableA : 3,
    variableB : 2,
    showing : 'Show R',
    testOutput : "",
    abcString: ""
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const generateR_ = event => {

    event.preventDefault();    
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);



    let outArr = [];
    
    if(state.showing === 'Show All') {
      outArr = r_(vA,vB,true,'all');
      var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble";
      abc = abc+"\n[V: V1]"+toABC(outArr[0]).join("");
      abc = abc+"\n[V: V2]"+toABC(outArr[1]).join("");
      abc = abc+"\n[V: V3]"+toABC(outArr[2]).join("");
      abc = abc+"\n[V: V4]"+toABC(outArr[3]).join("");
      abc = abc+"\n[V: V5]"+toABC(outArr[4]).join("");
      abc = abc+"\n[V: V6]"+toABC(outArr[5]).join("");
      abcjs.renderAbc("outputR_", abc);
    } else {
      outArr = r_(vA,vB,true);
      var abc = "X:1\nK:C\n" + toABC(outArr).join("");
      abcjs.renderAbc("outputR_",abc);
    }
    
    

    setState(prevState => ({
        ...prevState,
        abcString : abc
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>R_ Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b.  Click Generate to view output.
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
                  <Form.Group controlId="showing">
                    <Form.Control as="select" value={state.showing} onChange={handleSelect}>
                      <option>Show R</option>
                      <option>Show All</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR_}>Generate</Button>
                </Col>
              </Row>
              
              <Row className="justify-content-md-center">
                <div id="outputR_"></div>
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

export default Ch4Generator;