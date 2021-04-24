import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';
import {r,toABC} from '../functions/./generators';

function Ch2Generator() {

  var tempA = 3;
  var tempB = 2;
  var tempGroup = 'a'
  // grab the current array sitting in local storage
  var old_data = JSON.parse(localStorage.getItem('schillArr'));


  // need to make it so we can handle multiple versions of ch2 objects
  for (let i in old_data) {
    if (old_data[i].id === "book1ch2" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempGroup = old_data[i].groupBy;
      console.log("TempA: " + tempA + " TempB: " + tempB, " groupBy " + tempGroup);
      break;
    }
  }

  // if (old_data[0] === 'book1ch2') {
  //   console.log("Yay!")
  // }
  
  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    groupBy : tempGroup,
    showing : 'Show All',
    testOutput : '',
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

     // use unshift to push the new applet ID to the front of the array
     var book1ch2 = {"id":"book1ch2", "a":state.variableA, "b":state.variableB, "groupBy":state.groupBy}; 
     old_data.unshift(book1ch2);

     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));

    event.preventDefault();    
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    let vG = Number(state.variableA);
    switch(state.groupBy) {
      case 'a':
        break;
      case 'b':
        vG = state.variableB;
        break;
      case 'ab':
        vG = state.variableA * state.variableB;
        break;
      default: break;
    }

    let outArr = [];
    let abcOut = "";
    var abc = "";

    if(state.showing === 'Show All') {
      outArr = r(vA,vB,vG,"all");
      for(let i in outArr) {
        outArr[i] = toABC(outArr[i]);
      }
      abcOut = "X:1\nK:C\n"+outArr[4].join("")+"\n";
      abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble";
      abc = abc+'\n[V: V1]"C1"'+outArr[0].join("");
      abc = abc+'\n[V: V2]"C2"'+outArr[1].join("");
      abc = abc+'\n[V: V3]"A"'+outArr[2].join("");
      abc = abc+'\n[V: V4]"B"'+outArr[3].join("");
      abc = abc+'\n[V: V5]"R"'+outArr[4].join("");
    } else {
      outArr = toABC(r(vA,vB,vG));
      abcOut = 'X:1\nK:C\n"R"'+outArr.join("")+"\n";
      abc = abcOut;
    }
    
    
    abcjs.renderAbc("outputR", abc);

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
              <h1>R Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
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
                      <option>1</option>
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
              </Row>
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <h5>Group By:</h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="groupBy">
                    <Form.Control as="select" value={state.groupBy} onChange={handleSelect}>
                      <option></option>
                      <option>a</option>
                      <option>b</option>
                      <option>ab</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <h5>Show:</h5>
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
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <div id="outputR"></div>
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

export default Ch2Generator;