import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch9Generator() {
  const [state , setState] = useState({
    variableA : '',
    supplementA : '',
    variableB : '',
    supplementB : '',
    variableC : '',
    supplementC : '',
    variableD : '',
    supplementD : '',
    poly1 : 'a',
    poly2 : '',
    poly3 : '',
    poly4 : '',
    Polynomial : '',
    DefineA : '',
    DefineB : '',
    DefineC : '',
    DefineD : '',
    Result : ''
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
    let a = defineVariable(state.variableA,state.supplementA);
    let b = defineVariable(state.variableB,state.supplementB);
    let c = defineVariable(state.variableC,state.supplementC);
    let d = defineVariable(state.variableD,state.supplementD);
    let p = definePolynomial(a,b,c,d,state.poly1,state.poly2,state.poly3,state.poly4);

    setState(prevState => ({
        ...prevState,
        Polynomial : p,
        DefineA : a,
        DefineB : b,
        DefineC : c,
        DefineD : d,
        Result : ''
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Polynomial Rotator</h1>
              <h3>Instructions</h3>
              <p>
                Enter a, b, c and/or d. Set any paramaters for each of them, then arrange the form of the polynomial.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                  <Col className="col-2">
                    <Form.Group controlId="variableA">
                      <Form.Control as="select" defaultValue="" value={state.variableA} onChange={handleSelect}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">              
                    <Form.Group controlId="supplementA">
                      <Form.Control as="select" defaultValue="" value={state.supplementA} onChange={handleSelect}>
                        <option></option>
                        <option>+1</option>
                        <option>+2</option>
                        <option>+3</option>
                        <option>5</option>
                        <option>rest</option>
                        <option>accent</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-bottom justify-content-md-center">
                  <Col className="col-2">
                    <Form.Group controlId="variableB">
                      <Form.Control as="select" defaultValue="" value={state.variableB} onChange={handleSelect}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">              
                    <Form.Group controlId="supplementB">
                      <Form.Control as="select" defaultValue="" value={state.supplementB} onChange={handleSelect}>
                        <option></option>
                        <option>+1</option>
                        <option>+2</option>
                        <option>+3</option>
                        <option>+4</option>
                        <option>rest</option>
                        <option>accent</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-bottom justify-content-md-center">
                  <Col className="col-2">
                    <Form.Group controlId="variableC">
                      <Form.Control as="select" defaultValue="" value={state.variableC} onChange={handleSelect}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">              
                    <Form.Group controlId="supplementC">
                      <Form.Control as="select" defaultValue="" value={state.supplementC} onChange={handleSelect}>
                        <option></option>
                        <option>+1</option>
                        <option>+2</option>
                        <option>+3</option>
                        <option>+4</option>
                        <option>rest</option>
                        <option>accent</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-bottom justify-content-md-center">
                  <Col className="col-2">
                    <Form.Group controlId="variableD">
                      <Form.Control as="select" defaultValue="" value={state.variableD} onChange={handleSelect}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">              
                    <Form.Group controlId="supplementD">
                      <Form.Control as="select" defaultValue="" value={state.supplementD} onChange={handleSelect}>
                        <option></option>
                        <option>+1</option>
                        <option>+2</option>
                        <option>+3</option>
                        <option>+4</option>
                        <option>rest</option>
                        <option>accent</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-bottom justify-content-md-center">
                  <Col className="col-2">
                    <Form.Group controlId="poly1">
                      <Form.Control as="select" defaultValue="a" value={state.poly1} onChange={handleSelect}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">
                    <Form.Group controlId="poly2">
                      <Form.Control as="select" defaultValue="a" value={state.poly2} onChange={handleSelect}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">
                    <Form.Group controlId="poly3">
                      <Form.Control as="select" defaultValue="" value={state.poly3} onChange={handleSelect}>
                        <option></option>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">
                    <Form.Group controlId="poly4">
                      <Form.Control as="select" defaultValue="" value={state.poly4} onChange={handleSelect}>
                        <option></option>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
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
                    <Col className="col-3">
                        <h4>Polynomial: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.Polynomial}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>A: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.DefineA}</h4>
                    </Col>
                    <Col className="col-3">
                        <h4>B: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.DefineB}</h4>
                    </Col>
                    <Col className="col-3">
                        <h4>C: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.DefineC}</h4>
                    </Col>
                    <Col className="col-3">
                        <h4>D: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.DefineD}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>Result: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.Result}</h4>
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

export default Ch9Generator;

function defineVariable(a,b) {
  if(a==='') {
    return;
  }

  if(b==='rest') {
    let output = new String('('+a+')');
    return output;
  } else if(b==='accent') {
    let output = new String(a+'!');
    return output;
  } else {
    let output = new String(a+b);
    return output;
  }
}

function definePolynomial(a,b,c,d,p1,p2,p3,p4) {
  let output = new String();
  if(true) {
    switch(p1) {
      case 'a':
        output = output + addUpVariable(a);
        break;
      case 'b':
        output = output + addUpVariable(b);
        break;
      case 'c':
        output = output + addUpVariable(c);
        break;
      case 'd':
        output = output + addUpVariable(d);
        break;
    }
    
  }
  if(p2!=='') {
    output = output + ' + ';
    switch(p2) {
      case 'a':
        output = output + addUpVariable(a);
        break;
      case 'b':
        output = output + addUpVariable(b);
        break;
      case 'c':
        output = output + addUpVariable(c);
        break;
      case 'd':
        output = output + addUpVariable(d);
        break;
    }
  }
  if(p3!=='') {
    output = output + ' + ';
    switch(p3) {
      case 'a':
        output = output + addUpVariable(a);
        break;
      case 'b':
        output = output + addUpVariable(b);
        break;
      case 'c':
        output = output + addUpVariable(c);
        break;
      case 'd':
        output = output + addUpVariable(d);
        break;
    }
  }
  if(p4!=='') {
    output = output + ' + ';
    switch(p3) {
      case 'a':
        output = output + addUpVariable(a);
        break;
      case 'b':
        output = output + addUpVariable(b);
        break;
      case 'c':
        output = output + addUpVariable(c);
        break;
      case 'd':
        output = output + addUpVariable(d);
        break;
    }
  }

  return output;
}

function addUpVariable(a) {
  let output = new String(a);

  if(output.length === 1) {
    return output;
  }

  return output;
}