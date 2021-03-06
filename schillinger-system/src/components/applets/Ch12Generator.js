import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch12Generator() {

  var  factF = "";
  var  factP = "";
  var sFactF = "";
  var sFactP = "";
  var  fracF = "";
  var  fracP = "";
  var sFracF = "";
  var sFracP = "";
  var sumF = 0;
  
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
      clearResults();
      return;
    } else if(n === 2) {
      var sumNums = "";
      var sum = 0;
      // factorial formula
      var factorialFormula = "(";
      f.forEach(element => {
        sum += Number(element);
        factorialFormula = factorialFormula.concat(String(element)+"+");
        sumNums += String(element)+"+";
      });
      sumF = sum;
      factorialFormula = factorialFormula.slice(0, -1);
      sumNums = sumNums.slice(0, -1);
      factorialFormula = factorialFormula.concat(")^"+String(n)+" = ");
      f.forEach(element => {
        factorialFormula = factorialFormula.concat("(");
        f.forEach(element2 => {
          if(element === element2) {
            var square = String(element)+"^2+"
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
      factF = factorialFormula;
      var factorialPlugIn = " = "
      f.forEach(element => {
        f.forEach(element2 => {
          var mult = String(Number(element)*Number(element2));
          factorialPlugIn = factorialPlugIn.concat(mult+"+");
        });
      });
      factorialPlugIn = factorialPlugIn.slice(0, -1);
      factP = factorialPlugIn;
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
      sFactF = synchronizedFactorialFormula;
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
      sFactP = synchronizedFactorialPlugIn;
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

      fractionalFormula = fractionalFormula.concat(" = ");
      f.forEach(element => {
        f.forEach(element2 => {
          fractionalFormula = fractionalFormula.concat("(");
          if(element === element2) {
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
      fracF = fractionalFormula;
      var fractionalPlugIn = " = ";
      f.forEach(element => {
        f.forEach(element2 => {
          var mult = String(Number(element)*Number(element2));
          var denom = String(Math.pow(sum, n));
          fractionalPlugIn = fractionalPlugIn.concat(mult+"/"+denom+"+");
        });
      });
      fractionalPlugIn = fractionalPlugIn.slice(0, -1);
      fracP = fractionalPlugIn;
      // synchronized fractional sumNums
      var synchronizedFractionalFormula = "S = ";
      f.forEach(element => {
        synchronizedFractionalFormula = synchronizedFractionalFormula+"("+String(element)+"/("+sumNums+"))*"+"(("+sumNums+")/("+sumNums+"))+";
      });
      synchronizedFractionalFormula = synchronizedFractionalFormula.slice(0, -1);
      sFracF = synchronizedFractionalFormula;
      var synchronizedFractionalPlugIn = " = ";
      f.forEach(element => {
        var num = Number(element);
        var product = (num*sum)
        var denomProduct = (sum*sum);
        synchronizedFractionalPlugIn = synchronizedFractionalPlugIn.concat(String(product)+"/"+String(denomProduct)+"+");
      });
      synchronizedFractionalPlugIn = synchronizedFractionalPlugIn.slice(0, -1);
      sFracP = synchronizedFractionalPlugIn;

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
      var sync = DistributivePower(Number(n)-1, f);
      var splitFactorial = factF.split(" = ");

      var factorialFormula2 = "(";
      f.forEach(element => {
        factorialFormula2 = factorialFormula2.concat(String(element)+"+");
      });
      factorialFormula2 = factorialFormula2.slice(0, -1);
      factorialFormula2 = factorialFormula2.concat(")^"+String(n)+" = ");
      splitFactorial.forEach(element => {
        factorialFormula2 = factorialFormula2.concat(group+"("+element+") = ");
      });
      factorialFormula2 = factorialFormula2.slice(0, -3);
      var factorialPlugIn2 = factP.replace(" = ", "");
      var arrFactPlugIn2 = factorialPlugIn2.split("+");
      factorialPlugIn2 = String(sum)+"("+factorialPlugIn2+")";
      factorialPlugIn2 = " = ";
      arrFactPlugIn2.forEach(element => {
        element = String(Number(sum)*Number(element));
        factorialPlugIn2 = factorialPlugIn2.concat(element+"+");
      });
      factorialPlugIn2 = factorialPlugIn2.slice(0, -1);

      var synchronizedFactorialFormula2 = sFactF;
      synchronizedFactorialFormula2 = synchronizedFactorialFormula2.split(" = ")[1];
      for(var i = n; i>2; i--) {
        synchronizedFactorialFormula2 = group+"("+synchronizedFactorialFormula2+")";
      }
      synchronizedFactorialFormula2 = "S = "+synchronizedFactorialFormula2;
      var synchronizedFactorialPlugIn2 = sFactP.replace(" = ", "");
      var arrsynchronizedFactorialPlugIn2 = synchronizedFactorialPlugIn2.split("+");
      synchronizedFactorialPlugIn2 = " = "
      arrsynchronizedFactorialPlugIn2.forEach(element => {
        element = String(Number(sum)*Number(element));
        synchronizedFactorialPlugIn2 = synchronizedFactorialPlugIn2.concat(element+"+");
      });
      synchronizedFactorialPlugIn2 = synchronizedFactorialPlugIn2.slice(0, -1);

      var fractionalFormula2 = fracF;
      var fracGroup = fractionalFormula2.split("^")[0];
      var fracSumNum = Number(sumF);
      var fracSumDemon = Number(sumF);

      var arrFrac = fractionalFormula2.split(" = ");
      fractionalFormula2 = fracGroup+"^"+String(n);
      fractionalFormula2 = fractionalFormula2+" = "+fracGroup+"("+arrFrac[1]+")";

      var fractionalPlugIn2 = fracP;
      fractionalPlugIn2 = fractionalPlugIn2.replace(" = ", "");
      var arrFractionalPlugIn2 = fractionalPlugIn2.split("+");
      fractionalPlugIn2 = " = ";
      arrFractionalPlugIn2.forEach(element => {
        var elementArr = element.split("/");
        elementArr.forEach(element2 => {
          element2 = Number(element2)*fracSumNum;
          fractionalPlugIn2 = fractionalPlugIn2.concat(element2+"/");
        });
        fractionalPlugIn2 = fractionalPlugIn2.slice(0, -1);
        fractionalPlugIn2 = fractionalPlugIn2.concat("+");
      });
      fractionalPlugIn2 = fractionalPlugIn2.slice(0, -1);

      var synchronizedFractionalFormula2 = sFracF;
      synchronizedFractionalFormula2 = synchronizedFractionalFormula2.replace("S = ", "");
      synchronizedFractionalFormula2 = "S = "+fracGroup+"("+synchronizedFractionalFormula2+")";
      var synchronizedFractionalPlugIn2 = sFracP;
      synchronizedFractionalPlugIn2 = synchronizedFractionalPlugIn2.replace(" = ", "");
      var arrFractionalPlugIn2 = synchronizedFractionalPlugIn2.split("+");
      synchronizedFractionalPlugIn2 = " = ";
      arrFractionalPlugIn2.forEach(element => {
        var elementArr = element.split("/");
        elementArr.forEach(element2 => {
          element2 = Number(element2)*fracSumNum;
          synchronizedFractionalPlugIn2 = synchronizedFractionalPlugIn2.concat(element2+"/");
        });
        synchronizedFractionalPlugIn2 = synchronizedFractionalPlugIn2.slice(0, -1);
        synchronizedFractionalPlugIn2 = synchronizedFractionalPlugIn2.concat("+");
      });
      synchronizedFractionalPlugIn2 = synchronizedFractionalPlugIn2.slice(0, -1);

      setState(prevState => ({
        ...prevState,
        factorialFormula: factorialFormula2,
        factorialPlugIn: factorialPlugIn2,
        synchronizedFactorialFormula: synchronizedFactorialFormula2,
        synchronizedFactorialPlugIn: synchronizedFactorialPlugIn2,
        fractionalFormula: fractionalFormula2,
        fractionalPlugIn: fractionalPlugIn2,
        synchronizedFractionalFormula: synchronizedFractionalFormula2,
        synchronizedFractionalPlugIn: synchronizedFractionalPlugIn2
      }))

      factF = factorialFormula2;
      factP = factorialPlugIn2;
      sFactP = synchronizedFactorialPlugIn2;
      fracF = fractionalFormula2;
      fracP = fractionalPlugIn2;
      sFracF = synchronizedFractionalFormula2;
      sFracP = synchronizedFractionalPlugIn2;
    }
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
      clearResults();
      return;
    } else if (!f.includes("(")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      clearResults();
      return;
    } else if (!f.includes(")")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      clearResults();
      return;
    } else if (!f.includes("+")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      clearResults();
      return;
    } else if (f.includes("/")) {
      setState(prevState => ({
        ...prevState,
        warning: "You entry must be of the form (a+b+...+m)^n with at least two terms and n > 1. Do not use fractions."
      }))
      clearResults();
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
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
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
