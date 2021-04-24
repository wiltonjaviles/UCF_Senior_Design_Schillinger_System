import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch4Generator() {

  // Define the variables to be used for applet history and dynamic applet input
  var tempA = 3;
  var tempB = 2;

  // grab the current array sitting in local storage
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch4" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      break;
    }
  }

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    groupBy : 'a',
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
     var book1ch4 = {"id":"book1ch4", "title":"The Techniques of Fractioning", "a":state.variableA, "b":state.variableB}; 
     old_data.unshift(book1ch4);

     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));


    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    let outArr = simpleToABC(sMakeR_(vA,vB),vA);


    
    outArr[4].reverse();

    for(let i=0; i<vA-vB; i++) {
      if(vA === 5) {
        outArr[3].push('z4-z1|');
        outArr[4].push('z4-z1|');
      } else if(vA === 7) {
        outArr[3].push('z6-z1|');
        outArr[4].push('z6-z1|');
      } else if(vA === 9) {
        outArr[3].push('z8-z1|');
        outArr[4].push('z8-z1|');
      } else {
        outArr[3].push('z'+vA+'|');
        outArr[4].push('z'+vA+'|');
      }
    }
    
    outArr[4].reverse();
    let outAbc = "X:1\nK:C\n"+outArr[5].join("")+"\n";
    var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble";
    abc = abc+"\n[V: V1]"+outArr[0].join("");
    abc = abc+"\n[V: V2]"+outArr[1].join("");
    abc = abc+"\n[V: V3]"+outArr[2].join("");
    abc = abc+"\n[V: V4]"+outArr[3].join("");
    abc = abc+"\n[V: V5]"+outArr[4].join("");
    abc = abc+"\n[V: V6]"+outArr[5].join("");
    
    // abcjs.renderAbc("outputC1", "X:1\nK:C\n"+outArr[0].join("")+"\n");
    // abcjs.renderAbc("outputC2", "X:1\nK:C\n"+outArr[1].join("")+"\n");
    // abcjs.renderAbc("outputA", "X:1\nK:C\n"+outArr[2].join("")+"\n");
    // abcjs.renderAbc("outputB1", "X:1\nK:C\n"+outArr[3].join("")+"\n");
    // abcjs.renderAbc("outputB2", "X:1\nK:C\n"+outArr[4].join("")+"\n");
    abcjs.renderAbc("outputR_", abc, {wrap: {lastLineLimit: 2, minSpacing: 1, maxSpacing: 2, preferredMeasuresPerLine: 8}, staffwidth: 1000, viewportHorizontal: true});

    setState(prevState => ({
        ...prevState,
        testOutput : outArr[2].join(""),
        abcString : outAbc
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
                    <Form.Control as="select" defaultValue="2" value={state.variableA} onChange={handleSelect}>
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
                    <Form.Control as="select" defaultValue="1" value={state.variableB} onChange={handleSelect}>
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
                
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR_}>Generate</Button>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <h4>Result: </h4>
                <h4>{state.testOutput}</h4>
              </Row>

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
                <div id="outputB1"></div>
              </Row>

              <Row className="justify-content-md-center">
                <div id="outputB2"></div>
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

function sMakeR_(a,b) {
  let arr = [];
  for(let i=0; i<6; i++) {
    arr[i] = [];
  }

  for(let i=0; i<a*a; i++) {
      arr[0].push(1);
  }
  arr[1].push(a*a);
  for(let i=1; i<a*a; i++) {
      arr[1].push('');
  }
  for(let i=0; i<a; i++) {
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
  for(let i=a*b; i<a*a; i++) {
    arr[3].push('');
  }
  
  for(let i=0; i<a*a - a*b; i++) {
    arr[4].push('');
  }
  for(let i=0; i<a; i++) {
    arr[4].push(b);
    for(let j=1; j<b; j++) {
      arr[4].push('');
    }
  }

  let j=1;
    for(let i=a*a-1; i>-1; i--) {
        
        if(arr[2][i] !== '' || arr[3][i] !== '' || arr[4][i] !== '') {
            arr[5][i] = j;
            j=1;
        } else {j++; arr[5][i]='';}
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