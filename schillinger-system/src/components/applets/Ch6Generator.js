import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

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
    OutputR1 : ''
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
    let outArr = simpleToABC(sMakeTrinomialR(vA,vB,vC),vA);
    

    setState(prevState => ({
        ...prevState,
        OutputABC1 : outArr[0].toString(),
        OutputABC2 : outArr[1].toString(),
        OuputA : outArr[2].toString(),
        OutputB : outArr[3].toString(),
        OutputC : outArr[4].toString(),
        OutputR : outArr[5].toString(),
        OutputComplementA : outArr[6].toString(),
        OutputComplementB : outArr[7].toString(),
        OutputComplementC : outArr[8].toString(),
        OutputR1 : outArr[9].toString()
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
                        <h4>ABC1: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputABC1}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>ABC2: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputABC2}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>A: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OuputA}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>B: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputB}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>C: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputC}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputR}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>A': </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputComplementA}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>B': </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputComplementB}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>C': </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputComplementC}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R': </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputR1}</h4>
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
}