import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch12Generator() {
  
  const [state , setState] = useState({
    warning: "",
    input : "",
    factorialFormula: "",
    fractionalFormula: "",
    factorialPlugIn: "",
    fractionalPlugIn: "",
    result: ""
  })

  const DistributivePower = (n, f) => {
    if(n < 2) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1"
      }))
      return;
    }
    if(n == 2) {
      var factorialFormula = "(";
      f.forEach(element => {
        factorialFormula = factorialFormula.concat(String(element)+"+")
      });
      factorialFormula = factorialFormula.slice(0, -1);
      factorialFormula = factorialFormula.concat(")^2 = ");
      f.forEach(element => {
        factorialFormula = factorialFormula.concat("(");
        f.forEach(element2 => {
          if(element == element2) {
            var square = String(element)+"^2 + "
            factorialFormula = factorialFormula.concat(square);
          } else {
            var mult = String(Number(element)*Number(element2))+" + ";
            factorialFormula = factorialFormula.concat(mult);
          }
        });
        factorialFormula = factorialFormula.slice(0, -3);
        factorialFormula = factorialFormula.concat(") + ");
      });
      factorialFormula = factorialFormula.slice(0, -3);
      var fractionalFormula = "(a/(a+b) + b/(a+b))^2 = (a^2)/((a+b)^2) + (ab)/((a+b)^2) + (ab)/((a+b)^2) + (b^2)/((a+b)^2)"
      var a = String(f[0]);
      var b = String(f[1]);
      var ab = String(f[0]*f[1]);
      var absum = String(Number(f[0])+Number(f[1]));
      var factorialPlugIn = 
        "("+a+"+"+b+")"+"^2 = "+a+"^2 + "+ab+" + "+ab+" + "+b+"^2 = "
        +String(Math.pow(f[0], n))+" + "+ab+" + "+ab+" + "+String(Math.pow(f[1], n));
      
      var fractionalPlugIn = "("+a+"/"+absum+"+"+b+"/"+absum+")"+"^2 = "
      setState(prevState => ({
        ...prevState,
        factorialFormula: factorialFormula,
        fractionalFormula: fractionalFormula,
        factorialPlugIn: factorialPlugIn,
        fractionalPlugIn: fractionalPlugIn
      }))
    }
    return;
  }

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const doAction = event => {
    event.preventDefault();
    var f = String(state.input);
    var n = 1;
    if (!f.includes("^")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1"
      }))
      return;
    } else if (!f.includes("(")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1"
      }))
      return;
    } else if (!f.includes(")")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1"
      }))
      return;
    } else if (!f.includes("+")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1"
      }))
      return;
    }

    n = Number(f.split("^")[1]);
    var f2 = f.split("^")[0];
    var f3 = f2.replace("(", "").replace(")", "");
    var f4 = f3.split("+");
    DistributivePower(n, f4);

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
<<<<<<< HEAD
                Enter some polynomial input of the form (a+b+c+...+m)^n.
=======
                Enter some polynomial formula of the form (a+b+c+...+m)<sup>n</sup>.
>>>>>>> 3dc1fc7c6ac2e1fde4145a353f5732024d2ad123
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col></Col>
                <Col className="col-9">
                  <Form.Group controlId="input">
                    <Form.Control type="text" value={state.input} onChange={handleChange} placeholder="ex. (2+3)^3">
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <Button variant="secondary" type="submit" className="float-left" onClick={doAction}>Submit</Button>
                </Col>
              </Row>
            </Form>
            {/* <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row> */}
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.warning}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.factorialFormula}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.factorialPlugIn}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.fractionalFormula}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.fractionalPlugIn}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{state.result}</p>
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
