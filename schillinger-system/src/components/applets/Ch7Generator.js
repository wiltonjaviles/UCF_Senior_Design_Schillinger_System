import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";

function Ch7Generator() {
  const [state , setState] = useState({
    variableA : '2',
    variableB : '1',
    attacks : '2',
    base : '1/8',
    output : ''
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
    var A = Number(state.variableA);
    var B = Number(state.variableB);


    setState(prevState => ({
        ...prevState,
        output : A+"÷"+B+"="
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Waltz Walker</h1>
              <h3>Instructions</h3>
              <p>
                Enter generator a and b, select number of attacks and the base.
              </p>
              <br />
                <Row className="form-row justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="3" value={state.variableA} onChange={handleSelect}>
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
                    <Form.Control as="select" defaultValue="2" value={state.variableB} onChange={handleSelect}>
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
                  
                <Row className="form-row justify-content-md-center">
                    <Col className="col-3">
                        <h1>Attacks: </h1>
                    </Col>
                    <Col className="col-2">              
                        <Form.Group controlId="attacks">
                            <Form.Control as="select" defaultValue="2" value={state.attacks} onChange={handleSelect}>
                            <option>2</option>
                            <option>4</option>
                            <option>6</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row className="form-row justify-content-md-center">
                    <Col className="col-3">
                        <h1>Base: </h1>
                    </Col>
                    <Col className="col-2">              
                        <Form.Group controlId="base">
                            <Form.Control as="select" defaultValue="1" value={state.base} onChange={handleSelect}>
                            <option>1/8</option>
                            <option>1/4</option>
                            <option>1/2</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="form-row justify-content-md-center">
                    <Col className="col-3 text-center ml-4">
                        <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                    </Col>
                </Row>
                <br />
                <Row className="form-row justify-content-md-center">
                    <Col className="col-3">
                        <h4>Ouput: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.output}</h4>
                    </Col>
                </Row>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch7Generator;

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

function lcm(x, y) {
  if (isNaN(x) || isNaN(y)) 
   return false;
 return Math.abs((x * y) / gcd(x, y));
}

function  gcd(x, y) {
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 return x;
}