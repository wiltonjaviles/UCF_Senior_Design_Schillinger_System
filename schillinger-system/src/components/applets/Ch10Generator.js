import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import abcjs from "abcjs";
import '../.././Style.css';
import Playback from './Playback';

function Ch10Generator() {
  const [state , setState] = useState({
    variableA : "𝅘𝅥",
    variableB : "𝅘𝅥",
    variableC: "𝅘𝅥",
    numP: 1,
    outputSteps: "",
    outputStepsA2: "",
    outputStepsB2: "",
    outputStepsC2: "",
    outputStepsD2: "",
    outputStepsE2: "",
    outputStepsF2: "",
    outputStepsABC: "",
    abc: ""
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const doAction = event => {
    event.preventDefault();
    if(state.variableA === -1 || state.variableB === -1 || state.variableC === -1) {
      alert("please fill out all of the fields!");
      return;
    }
    var a1 = state.variableA;
    var b1 = state.variableB;
    var c1 = state.variableC;
    var outputSteps = "a1: "+a1+", b1: "+b1+", c1: "+c1+"\n";
    var numP = Number(state.numP);
    switch (a1) {
      case "𝅘𝅥":
        a1 = "A4";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅮":
        a1 = "A2A2";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯":
        a1 = "A2A1A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯":
        a1 = "A1A2A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮":
        a1 = "A1A1A2";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮.":
        a1 = "A1A3";
        break;
      case "𝅘𝅥𝅮.𝅘𝅥𝅯":
        a1 = "A3A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯":
        a1 = "A1A1A1A1";
        break;
      default: break;
    }

    switch (b1) {
      case "𝅘𝅥":
        b1 = "A4";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅮":
        b1 = "A2A2";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯":
        b1 = "A2A1A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯":
        b1 = "A1A2A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮":
        b1 = "A1A1A2";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮.":
        b1 = "A1A3";
        break;
      case "𝅘𝅥𝅮.𝅘𝅥𝅯":
        b1 = "A3A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯":
        b1 = "A1A1A1A1";
        break;
      default: break;
    }
    switch (c1) {
      case "𝅘𝅥":
        c1 = "A4";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅮":
        c1 = "A2A2";
        break;
      case "𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯":
        c1 = "A2A1A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯":
        c1 = "A1A2A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮":
        c1 = "A1A1A2";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅮.":
        c1 = "A1A3";
        break;
      case "𝅘𝅥𝅮.𝅘𝅥𝅯":
        c1 = "A3A1";
        break;
      case "𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯":
        c1 = "A1A1A1A1";
        break;
      default: break;
    }
    
    var abc1 = a1+"|"+b1+"|"+c1+"|";
    var a2 = a1+"|"+b1+"|"+c1+"|";
    var outputStepsA2 = "a2 = a1+b1+c1\n";
    var b2 = a1+"|"+c1+"|"+b1+"|";
    var outputStepsB2 = "b2 = a1+c1+b1\n";
    var c2 = b1+"|"+a1+"|"+c1+"|";
    var outputStepsC2 = "c2 = b1+a1+c1\n";
    var d2 = c1+"|"+a1+"|"+b1+"|";
    var outputStepsD2 = "d2 = c1+a1+c1\n";
    var e2 = b1+"|"+c1+"|"+a1+"|";
    var outputStepsE2 = "e2 = b1+c1+a1\n";
    var f2 = c1+"|"+b1+"|"+a1+"|";
    var outputStepsF2 = "f2 = c1+b1+a1\n";
    var abc = a2+b2+c2+d2+e2+f2;
    var outPutStepsABC = "abc = a2+b2+c2+d2+e2+f2";
    var abcString = "X:1\nL: 1/16\nK:C\n"+abc+"|\n";
    abcjs.renderAbc("outputC1", abcString, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
    setState(prevState => ({
      ...prevState,
      abc: abcString,
      outputSteps: outputSteps,
      outputStepsA2: outputStepsA2,
      outputStepsB2: outputStepsB2,
      outputStepsC2: outputStepsC2,
      outputStepsD2: outputStepsD2,
      outputStepsE2: outputStepsE2,
      outputStepsF2: outputStepsF2,
      outputStepsABC: outPutStepsABC,
    }))

    return;
  }

  const clearResults = () => {
    setState(prevState => ({
      ...prevState,
      variableA: -1,
      variableB: -1
    }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Chapter 10 Applet</h1>
              <h3>Instructions</h3>
              <p>
                Select note groups for a1, b1, and c1. Click submit to see how those three groups are combined.
              </p>
              <br />
              <Form.Row className="justify-content-md-center">
                <Col className="col-1">
                  <h2>a1:</h2>
                </Col>
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="𝅘𝅥" value={state.variableA} onChange={handleSelect}>
                      <option>𝅘𝅥</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮.</option>
                      <option>𝅘𝅥𝅮.𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h2>b1:</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" defaultValue="𝅘𝅥" value={state.variableB} onChange={handleSelect}>
                      <option>𝅘𝅥</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮.</option>
                      <option>𝅘𝅥𝅮.𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h2>c1:</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableC">
                    <Form.Control as="select" defaultValue="𝅘𝅥" value={state.variableC} onChange={handleSelect}>
                      <option>𝅘𝅥</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅮</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅮.</option>
                      <option>𝅘𝅥𝅮.𝅘𝅥𝅯</option>
                      <option>𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <Button variant="secondary" type="submit" className="float-right" onClick={doAction}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
            <Row className="justify-content-md-center">
              <h2>Results:</h2>
            </Row>
            <Row className="justify-content-md-center">
              <p>{state.outputSteps}</p>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-2"><p>{state.outputStepsA2}</p></Col>
              <Col className="col-2"><p>{state.outputStepsB2}</p></Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-2"><p>{state.outputStepsC2}</p></Col>
              <Col className="col-2"><p>{state.outputStepsD2}</p></Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-2"><p>{state.outputStepsE2}</p></Col>
              <Col className="col-2"><p>{state.outputStepsF2}</p></Col>
            </Row>
            <Row className="justify-content-md-center">
              <p>{state.outputStepsABC}</p>
            </Row>
            <Row className="justify-content-md-center">
              <div id="outputC1"></div>
            </Row>
            <Row>
              <Playback abc={state.abc}/>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch10Generator;
