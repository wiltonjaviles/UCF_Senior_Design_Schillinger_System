import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/PlaybackTemplate';

function Ch11Generator() {
  const [state , setState] = useState({
    variableA : 3,
    variableB : 2,
    groupBy : 'a',
    clock : 'clockwise',
    OutputR : '',
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
    let vG = Number(state.variableA);
    let direction = Boolean(state.clock === "clockwise");
    let outArr = [];
    let abcOut = [];

    switch(state.groupBy) {
      case 'a':
        outArr = simpleToABC(sMakeR(vA,vB),vG);
        abcOut = "X:1\nK:C\n"+outArr[4].join("")+"\n";
        break;
      case 'b':
        vG = state.variableB;
        outArr = simpleToABC(sMakeR(vA,vB),vG);
        abcOut = "X:1\nK:C\n"+outArr[4].join("")+"\n";
        break;
      case 'underline':
        outArr = simpleToABC(sMakeR_(vA,vB),vG);
        abcOut = "X:1\nK:C\n"+outArr[5].join("")+"\n";
        break;
    }
    
    //TODO do stuff with abcOut.
    
    
    
    abcjs.renderAbc("outputR", abcOut);

    setState(prevState => ({
      ...prevState,
        abcString: abcOut
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
                    <h5>M: </h5>
                    </Col>
                    <Col className="col-2">              
                    <Form.Group controlId="groupBy">
                        <Form.Control as="select" defaultValue="-1" value={state.groupBy} onChange={handleSelect}>
                        <option>a</option>
                        <option>b</option>
                        <option>underline</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    
                    <Col className="col-2">
                    <h5>Direction: </h5>
                    </Col>
                    <Col className="col-2">              
                    <Form.Group controlId="clock">
                        <Form.Control as="select" defaultValue="clockwise" value={state.clock} onChange={handleSelect}>
                        <option>clockwise</option>
                        <option>counterclockwise</option>
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
    let arr = new Array();
    for(let i=0; i<5; i++) {
        arr[i] = new Array();
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
    let arr = new Array();
    for(let i=0; i<6; i++) {
      arr[i] = new Array();
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
    
    
    let arrOut = new Array();
    for(let i=0; i<arrIn.length; i++) {
        arrOut[i] = new Array();
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