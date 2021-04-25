import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import abcjs from "abcjs";
import '../.././Style.css';
import Playback from './Playback';

function Ch10Generator() {
  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch10generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  var tempA = "4";
  var tempB = "4";
  var tempC = "4";
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch10" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempC = old_data[i].c;
      break;
    }
  }

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    variableC: tempC,
    outputSteps: "",
    outputStepsG2: "",
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

    // need to remove previous version of ch5 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch10" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch10 = {"id":"book1ch10","title": "Generalization of Variation Techniques", "a":state.variableA, "b":state.variableB, "c": state.variableC}; 
    old_data.unshift(book1ch10);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));

    if(state.variableA === -1 || state.variableB === -1 || state.variableC === -1) {
      alert("please fill out all of the fields!");
      return;
    }
    var a1 = state.variableA;
    var b1 = state.variableB;
    var c1 = state.variableC;
    var outputSteps = "a1: "+a1+", b1: "+b1+", c1: "+c1+"\n";
    switch (a1) {
      case "4":
        a1 = "G4";
        break;
      case "2+2":
        a1 = "G2G2";
        break;
      case "2+1+1":
        a1 = "G2G1G1";
        break;
      case "1+2+1":
        a1 = "G1G2G1";
        break;
      case "1+1+2":
        a1 = "G1G1G2";
        break;
      case "1+3":
        a1 = "G1G3";
        break;
      case "3+1":
        a1 = "G3G1";
        break;
      case "1+1+1+1":
        a1 = "G1G1G1G1";
        break;
      default: break;
    }

    switch (b1) {
      case "4":
        b1 = "G4";
        break;
      case "2+2":
        b1 = "G2G2";
        break;
      case "2+1+1":
        b1 = "G2G1G1";
        break;
      case "1+2+1":
        b1 = "G1G2G1";
        break;
      case "1+1+2":
        b1 = "G1G1G2";
        break;
      case "1+3":
        b1 = "G1G3";
        break;
      case "3+1":
        b1 = "G3G1";
        break;
      case "1+1+1+1":
        b1 = "G1G1G1G1";
        break;
      default: break;
    }
    switch (c1) {
      case "4":
        c1 = "G4";
        break;
      case "2+2":
        c1 = "G2G2";
        break;
      case "2+1+1":
        c1 = "G2G1G1";
        break;
      case "1+2+1":
        c1 = "G1G2G1";
        break;
      case "1+1+2":
        c1 = "G1G1G2";
        break;
      case "1+3":
        c1 = "G1G3";
        break;
      case "3+1":
        c1 = "G3G1";
        break;
      case "1+1+1+1":
        c1 = "G1G1G1G1";
        break;
      default: break;
    }
    
    // var abc1 = a1+"|"+b1+"|"+c1+"|";
    var a2 = a1+"|"+b1+"|"+c1+"|";
    var outputStepsG2 = "a2 = a1+b1+c1\n";
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
      outputStepsG2: outputStepsG2,
      outputStepsB2: outputStepsB2,
      outputStepsC2: outputStepsC2,
      outputStepsD2: outputStepsD2,
      outputStepsE2: outputStepsE2,
      outputStepsF2: outputStepsF2,
      outputStepsABC: outPutStepsABC,
    }))

    return;
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
                    <Form.Control as="select" defaultValue="4" value={state.variableA} onChange={handleSelect}>
                      <option>4</option>
                      <option>2+2</option>
                      <option>1+1+2</option>
                      <option>1+2+1</option>
                      <option>2+1+1</option>
                      <option>1+3</option>
                      <option>3+1</option>
                      <option>1+1+1+1</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h2>b1:</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" defaultValue="4" value={state.variableB} onChange={handleSelect}>
                      <option>4</option>
                      <option>2+2</option>
                      <option>1+1+2</option>
                      <option>1+2+1</option>
                      <option>2+1+1</option>
                      <option>1+3</option>
                      <option>3+1</option>
                      <option>1+1+1+1</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h2>c1:</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableC">
                    <Form.Control as="select" defaultValue="4" value={state.variableC} onChange={handleSelect}>
                      <option>4</option>
                      <option>2+2</option>
                      <option>1+1+2</option>
                      <option>1+2+1</option>
                      <option>2+1+1</option>
                      <option>1+3</option>
                      <option>3+1</option>
                      <option>1+1+1+1</option>
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
              <Col className="col-2"><p>{state.outputStepsG2}</p></Col>
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
            <br />
            {pageLink}
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch10Generator;
