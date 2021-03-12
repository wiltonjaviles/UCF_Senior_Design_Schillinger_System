import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch3Generator() {
  const [state , setState] = useState({
    groupingFormA : -1,
    groupingFormB : -1,
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

  const doGrouping = event => {
    event.preventDefault();
    if ( state.groupingFormA === -1 || state.groupingFormB === -1 ){
      alert('Please fill out all fields!');
      return;
    } else if ( isNaN(state.groupingFormA) || isNaN(state.groupingFormB) ) {
      alert('Please fill out all fields!');
      return;
    } else {
      const a = Number(state.groupingFormA);
      const b = Number(state.groupingFormB);
      if (b >= a) {
        alert('Invalid Grouping. Please try again!');
        return;
      } else if ( a%b === 0 ) {
        alert('Invalid Grouping. Please try again!');
        return;
      }

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
