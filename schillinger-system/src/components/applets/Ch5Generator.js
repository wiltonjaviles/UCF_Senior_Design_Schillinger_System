import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../Playback';
import {r,r_,toABC} from '../functions/./generators';

function Ch5Generator() {

  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch5generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  // Define the variables to be used for applet history and dynamic applet input
  var tempA = 3;
  var tempB = 2;
  var tempVariant = 'Balance'
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch5" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempVariant = old_data[i].variant;
      break;
    }
  }

  console.log(tempA);
  console.log(tempB);
  console.log(tempVariant);

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    variant : tempVariant,
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
    
    // need to remove previous version of ch5 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch5" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch5 = {"id":"book1ch5", "title":"Composition of Groups by Pairs", "a":state.variableA, "b":state.variableB, "variant": state.variant}; 
    old_data.unshift(book1ch5);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));


    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    const vV = String(state.variant);

    let outArr = [];
    let abcOut = "";
    
    switch(vV) {
      case 'Balance':
         for(let i=0; i<(vA-vB); i++) {
          outArr.push(vA);
          outArr.push('-');
          outArr.push('|');
        }
        outArr.pop();
        outArr.pop();
        outArr.push('|');

        abcOut = 'X:1\nK:C\n"r_"'+toABC(r_(vA,vB,true)).join("")+'"r"'+toABC(r(vA,vB,vA)).join("")+toABC(outArr).join("");
        break;
      case 'Contract':
        abcOut = 'X:1\nK:C\n"r"'+toABC(r(vA,vB,vA)).join("")+'"r_"'+toABC(r_(vA,vB,true)).join("");
        break;
      case 'Expand':
        abcOut = 'X:1\nK:C\n"r_"'+toABC(r_(vA,vB,true)).join("")+'"r"'+toABC(r(vA,vB,vA)).join("");
        break;
      default: break;
    }

    abcjs.renderAbc("output", abcOut, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 });

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
            <br/>
            {pageLink}
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch5Generator;