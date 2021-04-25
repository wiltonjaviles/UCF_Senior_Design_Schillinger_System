import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";

function Ch9Generator() {
  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch9generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  var tempA = '1';
  var tempSuppA = '';
  var tempB = '1';
  var tempSuppB = '';
  var tempC = '1';
  var tempSuppC = '';
  var tempD = '1';
  var tempSuppD = '';
  var tempPoly1 = 'a';
  var tempPoly2 = 'a';
  var tempPoly3 = '';
  var tempPoly4 = '';
  var tempDirection = 'Clockwise';
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch9" ) {
      tempA = old_data[i].a;
      tempSuppA = old_data[i].aSupp;
      tempB = old_data[i].b;
      tempSuppB = old_data[i].bSupp;
      tempC = old_data[i].c;
      tempSuppC = old_data[i].cSupp;
      tempD = old_data[i].d
      tempSuppD = old_data[i].dSupp;
      tempPoly1 = old_data[i].poly1;
      tempPoly2 = old_data[i].poly2;
      tempPoly3 = old_data[i].poly3;
      tempPoly4 = old_data[i].poly4;
      tempDirection = old_data[i].direction;
      break;
    }
  }

  const [state , setState] = useState({
    variableA : tempA,
    supplementA : tempSuppA,
    variableB : tempB,
    supplementB : tempSuppB,
    variableC : tempC,
    supplementC : tempSuppC,
    variableD : tempD,
    supplementD : tempSuppD,
    poly1 : tempPoly1,
    poly2 : tempPoly2,
    poly3 : tempPoly3,
    poly4 : tempPoly4,
    Polynomial : '',
    DefineA : '',
    DefineB : '',
    DefineC : '',
    DefineD : '',
    direction : tempDirection,
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
    
    // need to remove previous version of ch7 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch9" ) {
        old_data.splice(i, 1)
        break;
      }
    }
    
    // use unshift to push the new applet ID to the front of the array
    var book1ch9 = {
      "id": "book1ch9", 
      "a": state.variableA, 
      "aSupp": state.supplementA, 
      "b": state.variableB, 
      "bSupp": state.supplementB,
      "c": state.variableC,
      "cSupp": state.supplementC,
      "d": state.variableD,
      "dSupp": state.supplementD,
      "poly1": state.poly1,
      "poly2": state.poly2,
      "poly3": state.poly3,
      "poly4": state.poly4,
      "direction": state.direction,
      "title": "Homogeneous Simultaneity and Continuity (Variations)"
    }
    old_data.unshift(book1ch9);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));    

    let a = defineVariable(state.variableA,state.supplementA);
    let b = defineVariable(state.variableB,state.supplementB);
    let c = defineVariable(state.variableC,state.supplementC);
    let d = defineVariable(state.variableD,state.supplementD);
    let polynomial = definePolynomial(a,b,c,d,state.poly1,state.poly2,state.poly3,state.poly4);
    

    let rotatedPolynomial = rotate(polynomial, state.direction);
    let abcOutArray = toAbc(rotatedPolynomial);
    abcjs.renderAbc("abcoutput", "X:1\nK:C\n"+abcOutArray.join("")+"\n");

    setState(prevState => ({
        ...prevState,
        Polynomial : rotatedPolynomial,
        DefineA : a,
        DefineB : b,
        DefineC : c,
        DefineD : d,
        Result : abcOutArray
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
                      <Form.Control as="select" value={state.variableA} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.supplementA} onChange={handleSelect}>
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
                    <Form.Group controlId="variableB">
                      <Form.Control as="select" value={state.variableB} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.supplementB} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.variableC} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.supplementC} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.variableD} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.supplementD} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.poly1} onChange={handleSelect}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">
                    <Form.Group controlId="poly2">
                      <Form.Control as="select" value={state.poly2} onChange={handleSelect}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-2">
                    <Form.Group controlId="poly3">
                      <Form.Control as="select" value={state.poly3} onChange={handleSelect}>
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
                      <Form.Control as="select" value={state.poly4} onChange={handleSelect}>
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
                  <Form.Group controlId="direction">
                    <Form.Control as="select" value={state.direction} onChange={handleSelect}>
                      <option>Clockwise</option>
                      <option>Counterclockwise</option>
                    </Form.Control>
                  </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                  <Col className="col-3">
                    <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
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
                  <div id="abcoutput"></div>
                </Row>
            </Form>
            <br />
            {pageLink}
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

  if(b==='') {
    return a;
  }

  if(b==='rest') {
    let output = String('z'+a);
    return output;
  } else if(b==='accent') {
    let output = String('LA'+a);
    return output;
  } else {
    let output = String('('+a+b+')');
    return output;
  }
}

function definePolynomial(a,b,c,d,p1,p2,p3,p4) {
  let output = [];
  
    switch(p1) {
      case 'a':
        output.push(a);
        break;
      case 'b':
        output.push(b);
        break;
      case 'c':
        output.push(c);
        break;
      case 'd':
        output.push(d);
        break;
      default: break;
  
    
  }
  if(p2!=='') {
    
    switch(p2) {
      case 'a':
        output.push(a);
        break;
      case 'b':
        output.push(b);
        break;
      case 'c':
        output.push(c);
        break;
      case 'd':
        output.push(d);
        break;
      default: break;
    }
  }
  if(p3!=='') {
    
    switch(p3) {
      case 'a':
        output.push(a);
        break;
      case 'b':
        output.push(b);
        break;
      case 'c':
        output.push(c);
        break;
      case 'd':
        output.push(d);
        break;
      default: break;
    }
  }
  if(p4!=='') {
    
    switch(p4) {
      case 'a':
        output.push(a);
        break;
      case 'b':
        output.push(b);
        break;
      case 'c':
        output.push(c);
        break;
      case 'd':
        output.push(d);
        break;
      default: break;
    }
  }

  return output;
}

function rotate(arrIn, direction) {
  let arrOut = [];

  if(direction === 'Clockwise') {
    for(let i=0; i<arrIn.length; i++) {
      for(let j=0; j<arrIn.length; j++) {
        arrOut.push(arrIn[(i+j)%arrIn.length]);        
      }
      arrOut.push('|');
    }
  } else {
    for(let i=0; i<arrIn.length; i++) {
      for(let j=arrIn.length; j>0; j--) {
        arrOut.push(arrIn[(arrIn.length+j-i)%arrIn.length]);
      }
      arrOut.push('|');
    }
  }

  return arrOut;
}

//need to handle 5, split to half+eighth
function toAbc(arrIn) {
  let arrOut = [];

  for(let s in arrIn) {
    if(arrIn[s].includes('+')) {
      arrOut.push('A'+arrIn[s][1]+'A'+arrIn[s][3]);
    }
    else if(arrIn[s].includes('z') || arrIn[s].includes('L') || arrIn[s].includes('|')) {
      arrOut.push(arrIn[s]);
    } else {
      arrOut.push('A' + arrIn[s]);
    }
  }

  return arrOut;
}