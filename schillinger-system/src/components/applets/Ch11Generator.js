import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch11Generator() {
  const [state , setState] = useState({
    variableA : 3,
    variableB : 2,
    rType : 'r by a',
    permuteBy : 'least common',
    clock : 'Clockwise',
    OutputR : '',
    abcString : "",
    testOutput : ""
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
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    let vM = 1;
    let direction = Boolean(state.clock === "Clockwise");
    let outArr = [];
    let outStr = "";
    let abcOut = [];    

    switch(state.rType) {
      case 'r by a':
        vM = vA;
        outArr = simpleToABC(sMakeR(vA,vB),vM)[4];
        break;
      case 'r by b':
        vM = vB;
        outArr = simpleToABC(sMakeR(vA,vB),vM)[4];
        break;
      case 'r by ab':
        vM = vA*vB;
        outArr = simpleToABC(sMakeR(vA,vB),vM)[4];
        break;
      case 'underline':
        vM = vA;
        outArr = simpleToABC(sMakeR_(vA,vB),vM)[5];
        break;
      default: break;
    }
    alert(outArr);
    switch(state.permuteBy) {
      case 'least common':
        outStr = outArr.join("");
        rotateLeast(outStr, vM);
        abcOut = "X:1\nK:C\n"+outStr+"\n";
        break;
      case 'measures':
        outStr = outArr.join("");
        outStr = rotateOnMeasures(outStr.split('|'),vM,direction);
        abcOut = "X:1\nK:C\n"+outStr.join("");
        break;
      case 'attacks':
        outStr = outArr.join("");
        rotateAll(outStr, vM);
        abcOut = "X:1\nK:C\n"+outStr+"\n";
        break;
      default: break;
    }
    
    abcjs.renderAbc("outputR", abcOut);

    setState(prevState => ({
      ...prevState,
        abcString : abcOut,
        testOutput : abcOut
    }))
    
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Rotate Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="3" value={state.variableA} onChange={handleSelect}>
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
                  <h2>÷</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" defaultValue="2" value={state.variableB} onChange={handleSelect}>
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
                  <h5>r Type: </h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="rType">
                    <Form.Control as="select" defaultValue="-1" value={state.rType} onChange={handleSelect}>
                      <option>r by a</option>
                      <option>r by b</option>
                      <option>r by ab</option>
                      <option>underline</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <h5>Permute By: </h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="permuteBy">
                    <Form.Control as="select" defaultValue="-1" value={state.permuteBy} onChange={handleSelect}>
                      <option>least common</option>
                      <option>measures</option>
                      <option>attacks</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <h5>Direction: </h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="clock">
                    <Form.Control as="select" defaultValue="Clockwise" value={state.clock} onChange={handleSelect}>
                      <option>Clockwise</option>
                      <option>Counterclockwise</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <h4>Result: </h4>
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

export default Ch11Generator;

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



/*
    takes array of measures and rotates.
    Outputs a 1-d array.
 */
function rotateOnMeasures(arrIn, measures, clockwise) {
    let arrOut = [];

    if(clockwise) {
        for(let i=0; i<measures; i++) {
            for(let j=0; j<measures; j++) {
                arrOut.push(arrIn[(i+j)%measures]);
                arrOut.push("|");
            }
        }
    } else {
        for(let i=0; i<measures; i++) {
            for(let j=measures-1; j>-1; j--) {
                arrOut.push(arrIn[(i+j+1)%measures]);
                arrOut.push("|");
            }
        }
    }

    return arrOut;
}

/*
  arrIn should be [4] or [5] from sMakeR or sMakeR_
  But it can, if you like, be any line from one of the simple out generators
  Makes one line per permutation, which will be equal to the number of elements.
  Note that this only goes clockwise, once. Yes, more permutations *could* be made.
  But my god do we actually want to hit the user with this?
 */
function rotateAll(arrIn, m) {
  let arrOut = [];
  
  
  return arrOut;
}

/*
  arrIn should be [4] or [5] from sMakeR or sMakeR_
  a and b are the vA and vB, u is boolean asks "am I underlined"
  m is measure length
 */
function rotateLeast(arrIn, a, b, u, m) {
  //Do work with a, b, u to determine the splitby,
  //and find out how long a measure is.
  let splitBy = 2;
  
  let arrOut = [];
  arrOut = splitOnLeast(arrIn, splitBy);

  return arrOut;
}

function splitOnLeast(arrIn, splitBy) {
  let arrOut = [];

  

  return arrOut;
}