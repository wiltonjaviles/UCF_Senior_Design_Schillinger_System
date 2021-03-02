import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch4Generator() {
  const [state , setState] = useState({
    variableA : 2,
    variableB : 1,
    groupBy : 'a',
    OutputC1 : '',
    OutputC2 : '',
    OuputA : '',
    OutputB1 : '',
    OutputB2 : '',
    OutputR_ : ''
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
    let outArr = simpleToABC(sMakeR_(vA,vB),vA);
    

    setState(prevState => ({
        ...prevState,
        OutputC1 : outArr[0].toString(),
        OutputC2 : outArr[1].toString(),
        OuputA : outArr[2].toString(),
        OutputB1 : outArr[3].toString(),
        OutputB2 : outArr[4].toString(),
        OutputR_ : outArr[5].toString()
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
                  <Form.Group controlId="groupBy">
                    <Form.Control as="select" defaultValue="-1" value={state.groupBy} onChange={handleSelect}>
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
                        <h4>C1: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputC1}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>C2: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputC2}</h4>
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
                        <h4>B1: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputB1}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>B2: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputB2}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R_: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputR_}</h4>
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

export default Ch4Generator;

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