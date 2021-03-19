import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/PlaybackTemplate';

function Ch6Generator() {
  const [state , setState] = useState({
    variableA : 2,
    variableB : 3,
    variableC : 4,
    groupBy : 'a',
    OutputABC1 : '',
    OutputABC2 : '',
    OuputA : '',
    OutputB : '',
    OutputC : '',
    OutputR : '',
    OutputComplementA : '',
    OutputComplementB : '',
    OutputComplementC : '',
    OutputR1 : '',
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
    const vC = Number(state.variableC);
    let vG = Number(state.variableA)
    
    switch(state.groupBy) {
      case 'a':
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
    }

    let outArr = simpleToABC(sMakeTrinomialR(vA,vB,vC),vG);
    let abcOutR = "X:1\nK:C\n"+outArr[5].join("")+"\n";
    let abcOutR1 = "X:1\nK:C\n"+outArr[9].join("")+"\n";

    abcjs.renderAbc("outputABC1", "X:1\nK:C\n"+outArr[0].join("")+"\n");
    abcjs.renderAbc("outputABC2", "X:1\nK:C\n"+outArr[1].join("")+"\n");
    abcjs.renderAbc("outputA", "X:1\nK:C\n"+outArr[2].join("")+"\n");
    abcjs.renderAbc("outputB", "X:1\nK:C\n"+outArr[3].join("")+"\n");
    abcjs.renderAbc("outputC", "X:1\nK:C\n"+outArr[4].join("")+"\n");
    abcjs.renderAbc("outputR", "X:1\nK:C\n"+outArr[5].join("")+"\n");
    abcjs.renderAbc("outputComplementA", "X:1\nK:C\n"+outArr[6].join("")+"\n");
    abcjs.renderAbc("outputComplementB", "X:1\nK:C\n"+outArr[7].join("")+"\n");
    abcjs.renderAbc("outputComplementC", "X:1\nK:C\n"+outArr[8].join("")+"\n");
    abcjs.renderAbc("outputR1", "X:1\nK:C\n"+outArr[9].join("")+"\n");
    

    setState(prevState => ({
        ...prevState,
        OutputR : outArr[5].toString(),
        OutputR1 : outArr[9].toString(),
        abcString : abcOutR
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
                Select three integers a, b and c, then select a measure length.  Click Generate to view output.
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
                    <Form.Control as="select" defaultValue="3" value={state.variableB} onChange={handleSelect}>
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
                <Col className="col-1">
                  <h1>÷</h1>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableC">
                    <Form.Control as="select" defaultValue="4" value={state.variableC} onChange={handleSelect}>
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
                  <Form.Group controlId="groupBy">
                    <Form.Control as="select" defaultValue="-1" value={state.groupBy} onChange={handleSelect}>
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
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>
                
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R: </h4>
                    </Col>
                    <Col className="col-8">
                        <h4>{state.OutputR}</h4>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R': </h4>
                    </Col>
                    <Col className="col-8">
                        <h4>{state.OutputR1}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputABC1"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputABC2"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputA"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputB"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputC"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputR"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputComplementA"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputComplementB"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputComplementC"></div>
                      
                    
                </Row>
                <Row className="justify-content-md-center">
                    
                      <div id="outputR1"></div>
                      
                    
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

export default Ch6Generator;

function sMakeTrinomialR(a,b,c) {
  let arr = new Array();
  for(let i=0; i<10; i++) {
    arr[i] = new Array();
  } 

  arr[0].push(a*b*c);
  for(let i=1; i<a*b*c; i++) {
    arr[0].push('');
  }

  for(let i=0; i<a*b*c; i++) {
    arr[1].push(1);
  }

  //(b*c)*a
  for(let i=0; i<b*c; i++) {
    arr[2].push(a);
    for(let j=1; j<a; j++) {
      arr[2].push('');
    }
  }
  //(a*c)*b
  for(let i=0; i<a*c; i++) {
    arr[3].push(b);
    for(let j=1; j<b; j++) {
      arr[3].push('');
    }
  }
  //(a*b)*c
  for(let i=0; i<a*b; i++) {
    arr[4].push(c);
    for(let j=1; j<c; j++) {
      arr[4].push('');
    }
  }
  //r
  let j=1;
    for(let i=a*b*c-1; i>-1; i--) {
        
        if(arr[2][i] !== '' || arr[3][i] !== '' || arr[4][i] !== '') {
            arr[5][i] = j;
            j=1;
        } else {j++; arr[5][i]='';}
    }

  //a*(b*c)
  for(let i=0; i<a; i++) {
    arr[6].push(b*c);
    for(let j=1; j<b*c; j++) {
      arr[6].push('');
    }
  }
  //b*(a*c)
  for(let i=0; i<b; i++) {
    arr[7].push(a*c);
    for(let j=1; j<a*c; j++) {
      arr[7].push('');
    }
  }
  //c*(a*b)
  for(let i=0; i<c; i++) {
    arr[8].push(a*b);
    for(let j=1; j<a*b; j++) {
      arr[8].push('');
    }
  }
  //r1
  j=1;
    for(let i=a*b*c-1; i>-1; i--) {
        
        if(arr[6][i] !== '' || arr[7][i] !== '' || arr[8][i] !== '') {
            arr[9][i] = j;
            j=1;
        } else {j++; arr[9][i]='';}
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

/*
function simpleToABC(arrIn, measureLength) {
  
  
  let arrOut = new Array();
  for(let i=0; i<arrIn.length; i++) {
    arrOut[i] = new Array();
  }

  for(let i=0; i<arrIn.length; i++) {
      
      for(let j=0; j<arrIn[i].length; j++) {
          if(arrIn[i][j] !== ''){
              arrOut[i].push('a'+arrIn[i][j].toString());
          }
      }
  }
  return arrOut;
}*/