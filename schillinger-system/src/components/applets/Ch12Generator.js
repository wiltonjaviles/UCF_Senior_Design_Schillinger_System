import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch12Generator() {
  
  const [state , setState] = useState({
    warning: "",
    input : "",
    factorialFormula: "",
    factorialPlugIn: "",
    synchronizedFactorialFormula: "",
    synchronizedFactorialPlugIn: "",
    fractionalFormula: "",
    fractionalPlugIn: "",
    synchronizedFractionalFormula: "",
    synchronizedFractionalPlugIn: ""
  })

  const DistributivePower = async (n, f) => {
    n = Number(n);
    if(n < 2) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else if(n == 2) {
      var sumNums = "";
      var sum = 0;
      // factorial formula
      var factorialFormula = "(";
      f.forEach(element => {
        sum += Number(element);
        factorialFormula = factorialFormula.concat(String(element)+"+");
        sumNums += String(element)+"+";
      });
      factorialFormula = factorialFormula.slice(0, -1);
      sumNums = sumNums.slice(0, -1);
      factorialFormula = factorialFormula.concat(")^"+String(n)+" = ");
      f.forEach(element => {
        factorialFormula = factorialFormula.concat("(");
        f.forEach(element2 => {
          if(element == element2) {
            var square = String(element)+"^"+String(n)+"+"
            factorialFormula = factorialFormula.concat(square);
          } else {
            var mult = String(Number(element)*Number(element2))+"+";
            factorialFormula = factorialFormula.concat(mult);
          }
        });
        factorialFormula = factorialFormula.slice(0, -1);
        factorialFormula = factorialFormula.concat(")+");
      });
      factorialFormula = factorialFormula.slice(0, -1);
      var factorialPlugIn = " = "
      f.forEach(element => {
        f.forEach(element2 => {
          var mult = String(Number(element)*Number(element2));
          factorialPlugIn = factorialPlugIn.concat(mult+"+");
        });
      });
      factorialPlugIn = factorialPlugIn.slice(0, -1);

      // synchronized factorial
      var synchronizedFactorialFormula = "S = ";
      f.forEach(element => {
        var factor = String(element)+"("
        synchronizedFactorialFormula = synchronizedFactorialFormula.concat(factor);
        f.forEach(element2 => {
          var add = String(element2)+"+"
          synchronizedFactorialFormula = synchronizedFactorialFormula.concat(add);
        });
        synchronizedFactorialFormula = synchronizedFactorialFormula.slice(0, -1);
        synchronizedFactorialFormula = synchronizedFactorialFormula.concat(")+");
      });
      synchronizedFactorialFormula = synchronizedFactorialFormula.slice(0, -1);
      var synchronizedFactorialPlugIn = " = "
      f.forEach(element => {
        var sum = 0;
        f.forEach(element2 => {
          sum += Number(element2);
        });
        var mult = Number(element)*sum;
        synchronizedFactorialPlugIn = synchronizedFactorialPlugIn.concat(String(mult)+"+");
      });
      synchronizedFactorialPlugIn = synchronizedFactorialPlugIn.slice(0, -1);

      // fractional formula
      var fractionalFormula = "(";
      var denomSum = sumNums;
      f.forEach(element => {
        fractionalFormula = fractionalFormula.concat(String(element)+"/(");
        f.forEach(element2 => {
          fractionalFormula = fractionalFormula.concat(String(element2)+"+");
        });
        fractionalFormula = fractionalFormula.slice(0, -1);
        fractionalFormula = fractionalFormula.concat(")+");
      });
      fractionalFormula = fractionalFormula.slice(0, -1);
      fractionalFormula = fractionalFormula.concat(")^"+String(n));

      var fractionalFormula = fractionalFormula.concat(" = ");
      f.forEach(element => {
        f.forEach(element2 => {
          fractionalFormula = fractionalFormula.concat("(");
          if(element == element2) {
            fractionalFormula = fractionalFormula.concat(String(element)+"^2/(");
            fractionalFormula = fractionalFormula.concat(denomSum+")^"+String(n)+")+");

          } else {
            var mult = String(Number(element)*Number(element2));
            fractionalFormula = fractionalFormula.concat(mult+"/(");
            fractionalFormula = fractionalFormula.concat(denomSum+")^"+String(n)+")+");
          }
        });
      });
      fractionalFormula = fractionalFormula.slice(0, -1);

      var fractionalPlugIn = " = ";
      f.forEach(element => {
        f.forEach(element2 => {
          var mult = String(Number(element)*Number(element2));
          var denom = String(Math.pow(sum, n));
          fractionalPlugIn = fractionalPlugIn.concat(mult+"/"+denom+"+");
        });
      });
      fractionalPlugIn = fractionalPlugIn.slice(0, -1);

      // synchronized fractional sumNums
      var synchronizedFractionalFormula = "S = ";
      f.forEach(element => {
        synchronizedFractionalFormula = synchronizedFractionalFormula.concat(
          "("+String(element)+"/("+sumNums+"))*"+"(("+sumNums+")/("+sumNums+"))+");
      });
      synchronizedFractionalFormula = synchronizedFractionalFormula.slice(0, -1);

      var synchronizedFractionalPlugIn = " = ";
      f.forEach(element => {
        var num = Number(element);
        var product = (num*sum)
        var denomProduct = (sum*sum);
        synchronizedFractionalPlugIn = synchronizedFractionalPlugIn.concat(String(product)+"/"+String(denomProduct)+"+");
      });
      synchronizedFractionalPlugIn = synchronizedFractionalPlugIn.slice(0, -1);
      setState(prevState => ({
        ...prevState,
        factorialFormula: factorialFormula,
        factorialPlugIn: factorialPlugIn,
        synchronizedFactorialFormula: synchronizedFactorialFormula,
        synchronizedFactorialPlugIn: synchronizedFactorialPlugIn,
        fractionalFormula: fractionalFormula,
        fractionalPlugIn: fractionalPlugIn,
        synchronizedFractionalFormula: synchronizedFractionalFormula,
        synchronizedFractionalPlugIn: synchronizedFractionalPlugIn
      }))
    } else if (n > 2) {
      var group = state.input.split("^")[0];
      var sum = 0;
      f.forEach(element => {
        sum += Number(element);
      });
      // alert(sum);
      var sync = await DistributivePower(Number(n)-1, f);
      // alert(state.synchronizedFactorialFormula);
      // alert(state.factorialFormula);
      var splitFactorial = state.factorialFormula.split(" = ");
      // alert(splitFactorial);
      // alert(group);
      var factorialFormula2 = state.input + " = ";
      factorialFormula2 = factorialFormula2.concat(group+"("+splitFactorial[0]+") = "+group+"("+splitFactorial[1]+")");
      // alert(factorialFormula2);
      // alert(state.factorialPlugIn);
      var factorialPlugIn2 = state.factorialPlugIn.replace(" = ", "");
      var arrFactPlugIn2 = factorialPlugIn2.split("+");
      // alert(arrFactPlugIn2);
      factorialPlugIn2 = String(sum)+"("+factorialPlugIn2+")";
      // alert(factorialPlugIn2);
      factorialPlugIn2 = " = ";
      arrFactPlugIn2.forEach(element => {
        element = String(Number(sum)*Number(element));
        factorialPlugIn2 = factorialPlugIn2.concat(element+"+");
      });
      factorialPlugIn2 = factorialPlugIn2.slice(0, -1);
      // alert(factorialPlugIn2);   
      setState(prevState => ({
        ...prevState,
        factorialFormula: factorialFormula2,
        factorialPlugIn: factorialPlugIn2
    }))
    }
    alert(n);
    return true;
  }

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const clearResults = event => {
    setState(prevState => ({
      ...prevState,
      factorialFormula: "",
      factorialPlugIn: "",
      synchronizedFactorialFormula: "",
      synchronizedFactorialPlugIn: "",
      fractionalFormula: "",
      fractionalPlugIn: "",
      synchronizedFractionalFormula: "",
      synchronizedFractionalPlugIn: ""
    }))
  }

  const doAction = event => {
    event.preventDefault();
    var f = String(state.input);
    var n = 1;
    if (!f.includes("^")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else if (!f.includes("(")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else if (!f.includes(")")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else if (!f.includes("+")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else if (f.includes("/")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      return;
    } else {
      setState(prevState => ({
        ...prevState,
        warning: ""
      }))
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
                Enter some polynomial input of the form (a+b+c+...+m)^n. Do not enter fractions for any term as they are calculated for you.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col></Col>
                <Col className="col-9">
                  <Form.Group controlId="input">
                    <Form.Control type="text" value={state.input} onChange={handleChange} placeholder="ex. (1+2)^2">
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
                <p>{"Factorial: "+state.factorialFormula+state.factorialPlugIn}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{"Synchronized Factorial: "+state.synchronizedFactorialFormula+state.synchronizedFactorialPlugIn}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{"Fractional: "+state.fractionalFormula+state.fractionalPlugIn}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{"Synchronized Fractional: "+state.synchronizedFractionalFormula+state.synchronizedFractionalPlugIn}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="secondary" onClick={clearResults}>Clear</Button>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch12Generator;
