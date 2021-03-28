import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/Playback';

function Ch5Generator() {
  const [state , setState] = useState({
    variableA : 2,
    variableB : 1,
    variant : 'Balance',
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
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    const vV = String(state.variant);

    let outArr = [];
    
    switch(vV) {
      case 'Balance':
        outArr = balance(vA,vB);
        break;
      case 'Contract':
        outArr = contract(vA,vB);
        break;
      case 'Expand':
        outArr = expand(vA,vB);
        break;
      default: break;
    }
    
    outArr = simpleToABC(outArr,vA);
    let abcOut = "X:1\nK:C\n"+outArr[0].join("")+"\n";

    abcjs.renderAbc("output", abcOut);

    setState(prevState => ({
        ...prevState,
        Output : outArr[0].join(""),
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
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
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
                    <Col className="col-3">
                        <h4>First Entry: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.variableA}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>Second Entry: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.variableB}</h4>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>Result: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.Output}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <div id="output"></div>
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

export default Ch5Generator;

//r_a%b + ra%b + a(a-b)
function balance(a, b) {
  let arr1 = sMakeR(a,b);
  let arr2 = sMakeR_(a,b);
  let arrOut = [];
  arrOut[0] = arr2[5]+arr1[4]+a*(a-b);
  return arrOut;
}

//ra%b + r_a%b
function expand(a, b) {
  let arr1 = sMakeR(a,b);
  let arr2 = sMakeR_(a,b);
  let arrOut = [];
  arrOut[0] = arr1[4]+arr2[5];

  return arrOut;
}

//r_a%b + ra%b
function contract(a, b) {
  let arr1 = sMakeR(a,b);
  let arr2 = sMakeR_(a,b);
  let arrOut = [];
  arrOut[0] = arr2[5]+arr1[4];

  return arrOut;
}

/*function simpleToABC(arrIn, measureLength) {
  
  
  let arrOut = [];
  for(let i=0; i<arrIn.length; i++) {
    arrOut[i] = [];
  }

  for(let i=0; i<arrIn.length; i++) {
      
      for(let j=0; j<arrIn[i].length; j++) {
          if(arrIn[i][j] !== ''){
              arrOut[i].push('C'+arrIn[i][j].toString()+' ');
          }
      }
  }
  return arrOut;
}*/

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