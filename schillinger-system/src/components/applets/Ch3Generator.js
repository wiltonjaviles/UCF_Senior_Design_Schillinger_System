import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch3Generator() {

  // Define the variables to be used for applet history and dynamic applet input
  var tempFormA = 'a';
  var tempFormB = 'b';
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch3" ) {
      tempFormA = old_data[i].a;
      tempFormB = old_data[i].b;
      console.log("tempFormA: " + tempFormA + " tempFormB: " + tempFormB);
      break;
    }
  }

  const [state , setState] = useState({
    warning: "",
    groupingFormA : tempFormA,
    groupingFormB : tempFormB,
    resultAB: "",
    resultA: "",
    resultB: ""
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const clearResults = event => {
    setState(prevState => ({
      ...prevState,
      resultAB: "",
      resultA: "",
      resultB: ""
    }))
  }

  const errMsg = (code) => {
    switch (code) {
      case "incomplete_fields":
        setState(prevState => ({
          ...prevState,
          warning: "Please fill out all fields!"
        }))
        clearResults();
        break;
      case "invalid_grouping":
        setState(prevState => ({
          ...prevState,
          warning: "Invalid Grouping. B cannot be greater than or equal to A. Please try again!"
        }))
        clearResults();
        break;
      default: break;
    }
  }

  const doGrouping = event => {

    event.preventDefault();

    // need to remove previous version of ch3 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch3" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch3 = {"id":"book1ch3", "a":state.groupingFormA, "b":state.groupingFormB}; 
    old_data.unshift(book1ch3);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));

    if ( state.groupingFormA === -1 || state.groupingFormB === -1 ){
      errMsg("incomplete_fields");
      return;
    } else if ( isNaN(state.groupingFormA) || isNaN(state.groupingFormB) ) {
      errMsg("incomplete_fields");
      return;
    } else {
      const a = Number(state.groupingFormA);
      const b = Number(state.groupingFormB);
      if (b >= a) {
        errMsg("invalid_grouping");
        return;
      } else if ( a%b === 0 ) {
        errMsg("invalid_grouping");
        return;
      }
      setState(prevState => ({
        ...prevState,
        warning: ""
      }))

      // grouping by ab
      const ab = a*b;
      var result_AB;
      var result_A;
      var result_B;
      if (ab >= 20) {
        result_AB = "-";
      } else {
        if(ab > 5) {
          result_AB = String(ab)+"/"+String(8);
        } else {
          result_AB = String(ab)+"/"+String(4);
        }
      }

      // grouping by a
      if(a > 5) {
        result_A = String(a)+"/"+String(8);
      } else {
        result_A = String(a)+"/"+String(4);
      }

      // grouping by b
      if(b > 5) {
        result_B = String(b)+"/"+String(8);
      } else {
        result_B = String(b)+"/"+String(4);
      }

      setState(prevState => ({
        ...prevState,
        resultAB: result_AB,
        resultA: result_A,
        resultB: result_B 
      }))
    }
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Grouping Periodicities</h1>
              <h3>Instructions</h3>
              <p>
                Select two periodicities a and b from the dropdowns and cllick "Calculate Groupings" to 
                see how those two periodicities may be grouped. Keep in mind that certain periodicities 
                do not form valid groups together. Periodicity a must be larger than b and they must be in lowest
                terms (a=8 and b = 6 is invalid, try instead a=4 and b=3 to produce the same rhythm). You cannot
                group one periodicity together (ie a=3 and b=3 is not valid).
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="groupingFormA">
                    <Form.Control as="select" defaultValue="-1" value={state.groupingFormA} onChange={handleSelect}>
                      <option>a</option>
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
                  <Form.Group controlId="groupingFormB">
                    <Form.Control as="select" defaultValue="-1" value={state.groupingFormB} onChange={handleSelect}>
                      <option>b</option>
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
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={doGrouping}>Calculate Grouping</Button>
                </Col>
              </Row>
            </Form>
            <br />
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <p>{state.warning}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-3">
                <h4>Grouped by ab: </h4>
              </Col>
              <Col className="col-2">
                <h4>{state.resultAB}</h4>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-3">
                <h4>Grouped by a: </h4>
              </Col>
              <Col className="col-2">
                <h4>{state.resultA}</h4>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-3">
                <h4>Grouped by b: </h4>
              </Col>
              <Col className="col-2">
                <h4>{state.resultB}</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch3Generator;
