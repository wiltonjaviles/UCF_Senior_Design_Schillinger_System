import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';
import {generator_R,toABC} from '../functions/./generators';

function Ch2Generator() {

  // Define the variables to be used for applet history and dynamic applet input
  var tempA = 3;
  var tempB = 2;
  var tempGroup = 'a'

  // grab the current array sitting in local storage
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch2" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempGroup = old_data[i].groupBy;
      console.log("TempA: " + tempA + " TempB: " + tempB, " groupBy " + tempGroup);
      break;
    }
  }
  
  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    groupBy : tempGroup,
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

    event.preventDefault();    

    // need to remove previous version of ch2 applet history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch2" ) {
        old_data.splice(i, 1)
        break;
      }
    }

     // use unshift to push the new applet ID to the front of the array
     var book1ch2 = {"id":"book1ch2", "title": "Interferences of Periodicities", "a":state.variableA, "b":state.variableB, "groupBy":state.groupBy}; 
     old_data.unshift(book1ch2);

     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));

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

    let outArr = generator_R(vA,vB,vG,"all");
    for(let i in outArr) {
      outArr[i] = toABC(outArr[i]);
    }

    let abcOut = "X:1\nK:C\n"+outArr[4].join("")+"\n";
    var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble";
    abc = abc+"\n[V: V1]"+outArr[0].join("");
    abc = abc+"\n[V: V2]"+outArr[1].join("");
    abc = abc+"\n[V: V3]"+outArr[2].join("");
    abc = abc+"\n[V: V4]"+outArr[3].join("");
    abc = abc+"\n[V: V5]"+outArr[4].join("");
    
    /*abcjs.renderAbc("outputC1", "X:1\nK:C\n"+outArr[0].join("")+"\n");
    abcjs.renderAbc("outputC2", "X:1\nK:C\n"+outArr[1].join("")+"\n");
    abcjs.renderAbc("outputA", "X:1\nK:C\n"+outArr[2].join("")+"\n");
    abcjs.renderAbc("outputB", "X:1\nK:C\n"+outArr[3].join("")+"\n");
    abcjs.renderAbc("outputR", "X:1\nK:C\n"+outArr[4].join("")+"\n");*/
    abcjs.renderAbc("outputR", abc);

    setState(prevState => ({
      ...prevState,
        abcString : abcOut,
        testOutput : outArr[3]
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
                Select two integers a and b, then select a measure length equal to a, b, or a times b.  Click Generate to view output.
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
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <h4>{state.testOutput}</h4>
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

/*
function sMakeR(a,b) {
    let arr = [];
    for(let i=0; i<5; i++) {
        arr[i] = [];
      }

    for(let i=0; i<a*b; i++) {
        arr[0].push(1);
    }
    arr[1].push(a*b);
    for(let i=1; i<a*b; i++) {
        arr[1].push('');
    }
    for(let i=0; i<b; i++) {
        arr[2].push(a);
        for(let j=1; j<a; j++) {
            arr[2].push('');
        }
    }
    for(let i=0; i<a; i++) {
        arr[3].push(b);
        for(let j=1; j<b; j++) {
            arr[3].push('');
        }
    }
    let j=1;
    for(let i=a*b-1; i>-1; i--) {
        
        if(arr[2][i] !== '' || arr[3][i] !== '') {
            arr[4][i] = j;
            j=1;
        } else {j++; arr[4][i]='';}
    }

    return arr;
}

function simpleToABC(arrIn, measureLength) {
  let measure = Number(0);
  let longNote = Number(0);
    
    
    let arrOut = [];
    for(let i=0; i<arrIn.length; i++) {
        arrOut[i] = [];
    }

    for(let i=0; i<arrIn.length; i++) {
        measure = measureLength;
        for(let j=0; j<arrIn[i].length; j++) {
          
          if(arrIn[i][j] !== ''){
            if(arrIn[i][j] <= measure) {
              arrOut[i].push(pushNote(arrIn[i][j]));
              measure = measure - arrIn[i][j];
            } else if(arrIn[i][j] > measure) {
                if(arrIn[i][j] >= measureLength) {
                  
                  arrOut[i].push(pushNote(measure)+'-|');
                  longNote = arrIn[i][j] - measure;
                  for(longNote; longNote > 0; longNote=longNote-measureLength) {
                    arrOut[i].push(pushNote(measureLength)+'-|');
                  }
                  if(longNote > 0) {
                    arrOut[i].push(pushNote(longNote));
                  } else {
                    arrOut[i].pop();
                    arrOut[i].push(pushNote(measureLength)+'|');
                  }
                  measure = measureLength - longNote;
                } else {
                  arrOut[i].push(pushNote(measure)+'-|'+pushNote(arrIn[i][j]-measure));
                  measure = measureLength - (arrIn[i][j]-measure);
                }
            }
            
            if(measure === 0) {
              arrOut[i].push('|');
              measure = measureLength;
            }

          }
        }
    }
    return arrOut;
}

function pushNote(a) {
  if(a === 5) {
    return 'A4-A1';
  } else if(a > 8) {
    let output = new Array(['A8-']);
    let count = a-8;
    while(count > 8) {
      output.push('A8-');
      count = count-8;
    }
    output.push('A'+count);
    return output.toString();
  } else {return 'A'+a;}
}
*/
//<Button variant="secondary" type="submit" className="float-right" onClick={playBack}>Play R</Button>
/*
<Row className="justify-content-md-center">
                <div id="outputC1"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputC2"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputA"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputB"></div>
              </Row>
              */