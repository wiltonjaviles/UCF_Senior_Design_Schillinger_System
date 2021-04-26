import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../Playback';
import {r_,toABC} from '../functions/generators';

function Ch4Generator() {

  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch4generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  // Define the variables to be used for applet history and dynamic applet input
  var tempA = 3;
  var tempB = 2;
  var tempShow = 'Show All';

  // grab the current array sitting in local storage
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch4" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempShow = old_data[i].showing;
      break;
    }
  }

  console.log(tempA);
  console.log(tempB);

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    showing : tempShow,
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
    
    // need to remove previous version of ch4 applet history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch4" ) {
        old_data.splice(i, 1)
        break;
      }
    }

     // use unshift to push the new applet ID to the front of the array
     var book1ch4 = {"id":"book1ch4", "title":"The Techniques of Fractioning", "a":state.variableA, "b":state.variableB, "showing":state.showing}; 
     old_data.unshift(book1ch4);

     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));


    const vA = Number(state.variableA);
    const vB = Number(state.variableB);



    let outArr = [];
    var abc = "";
    
    if(state.showing === 'Show All') {
      outArr = r_(vA,vB,true,'all');
      abc = 'X:1\nK:C\nV';
      /*for(let i=1; i<outArr.length+1; i++) {
        abc = abc + 'V: V'+i+' clef=treble\n';
      }*/
      abc = abc+'\n[V: V1]"C1"'+toABC(outArr[0]).join("");
      abc = abc+'\n[V: V2]"C2"'+toABC(outArr[1]).join("");
      abc = abc+'\n[V: V3]"A"'+toABC(outArr[2]).join("");
      for(let i=1; i<outArr.length-3; i++) {
        let j = i+3
        abc = abc+'\n[V: V'+j+']"B'+i+'"'+toABC(outArr[i+2]).join("");
      }
      abc = abc+'\n[V: V'+outArr.length+']"R"'+toABC(outArr[outArr.length-1]).join("");
        
      abcjs.renderAbc("outputR_", abc, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 });
    } else {
      outArr = r_(vA,vB,true);
      abc = 'X:1\nK:C\n"R"' + toABC(outArr).join("");
      abcjs.renderAbc("outputR_",abc, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 });
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
              <h1><u>R</u> Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b to see <u>R</u>. Select "Show all" to see all the steps used. Select "Show <u>R</u>" to just see <u>R</u>. Click Generate to view output.
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
            <br/>
            {pageLink}
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch4Generator;