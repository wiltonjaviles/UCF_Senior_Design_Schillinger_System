import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch12Generator() {
  const [state , setState] = useState({
    formula : "",
    result: ""
  })

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const doAction = event => {
    event.preventDefault();
    var f = String(state.formula);
    
    if(f.includes("+")) {
      var exponent = 1;
      var arr;
      if(f.includes("(")) {
        if(!f.includes(")")) {
          alert("You must include an end parenthesis! Try again");
          return;
        }
      }
      arr = f.replace(" ","");
      if(arr.includes("^")) {
        exponent = Number(arr.split("^")[1]);
        arr = arr.split("^")[0];
      }
      arr = arr.split("+");
      var evaluation = 0;
      arr.forEach(element => {
        element = element.replace("(", "");
        element = element.replace(")", "");
        evaluation += Number(element);
      });
      var finalEvaluation = Math.pow(evaluation, exponent);
      var results = f+" = "+String(finalEvaluation);
      setState(prevState => ({
        ...prevState,
        result: results
      }))
    }

  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Chapter 12 Generator</h1>
              <h3>Instructions</h3>
              <p>
                Enter some polynomial formula of the form (a+b+c+...+m)^n.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col></Col>
                <Col className="col-9">
                  <Form.Group controlId="formula">
                    <Form.Control type="text" value={state.formula} onChange={handleChange} placeholder="formula">
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <Button variant="secondary" type="submit" className="float-left" onClick={doAction}>Submit</Button>
                </Col>
              </Row>
            </Form>
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <h4>{state.result}</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch12Generator;
