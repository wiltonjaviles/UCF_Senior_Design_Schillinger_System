import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';
import {r3,toABC} from '../functions/./generators';

function Ch6Generator() {

  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch6generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  // Define the variables to be used for applet history and dynamic applet input
  var tempA = 2;
  var tempB = 3;
  var tempC = 4;
  var tempGroup = 'a';
  var tempShow = 'Show Rs';
  var old_data = JSON.parse(localStorage.getItem('schillArr'));


  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch6" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempC = old_data[i].c;
      tempGroup = old_data[i].groupBy;
      tempShow = old_data[i].showing;
      break;
    }
  }

  console.log(tempA);
  console.log(tempB);
  console.log(tempC);
  console.log(tempGroup);

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    variableC : tempC,
    groupBy : tempGroup,
    showing : tempShow,
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
    
    // need to remove previous version of ch6 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch6" ) {
        old_data.splice(i, 1)
        break;
      }
    }

     // use unshift to push the new applet ID to the front of the array
     var book1ch6 = {"id":"book1ch6", "title":"Utilization of Three or More Generators", "a":state.variableA, "b":state.variableB, "c": state.variableC, 'groupBy': state.groupBy, "showing":state.showing}; 
     old_data.unshift(book1ch6);
 
     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));

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
      default: break;
    }

    
    let outArr = r3(vA,vB,vC,vG,'all');
    let abcOutput = '';
    var abc = ""
    if(show) {
      abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\nV: V6 clef=treble\nV: V7 clef=treble\nV: V8 clef=treble\nV: V9 clef=treble";
      abc = abc+'\n[V: V1]"C1"'+toABC(outArr[0]).join('');
      abc = abc+'\n[V: V2]"C2"'+toABC(outArr[1]).join('');
      abc = abc+'\n[V: V3]"A"'+toABC(outArr[2]).join('');
      abc = abc+'\n[V: V4]"B"'+toABC(outArr[3]).join('');
      abc = abc+'\n[V: V5]"C"'+toABC(outArr[4]).join('');
      abc = abc+'\n[V: V6]"R"'+toABC(outArr[5]).join('');
      abc = abc+'\n[V: V7]"A’"'+toABC(outArr[6]).join('');
      abc = abc+'\n[V: V8]"B’"'+toABC(outArr[7]).join('');
      abc = abc+'\n[V: V9]"C’"'+toABC(outArr[8]).join('');
      abc = abc+'\n[V: V10]"R’"'+toABC(outArr[9]).join('');
      abcOutput = "X:1\nK:C\n" + toABC(outArr[5]).join('') + "\n";
    } else {
      abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble";
      abc = abc+'\n[V: V1]"R"'+toABC(outArr[5]).join('');
      abc = abc+'\n[V: V2]"R’"'+toABC(outArr[9]).join('');
      abcOutput = abc;
    }

    abcjs.renderAbc("outputABC", abc, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 });
    
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
                Select three integers a, b and c, then select how you would like the Rs to be grouped. 
                Select "Show all" to see all the steps or "Show Rs" to just see the Rs. Click Generate to view output. 
                Large inputs will wrap to the next line in a group.
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
            <br />
            {pageLink}
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch6Generator;