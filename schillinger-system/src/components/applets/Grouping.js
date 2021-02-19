import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Grouping() {
  
  const [state , setState] = useState({
    groupingFormA : -1,
    groupingFormB : -1
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const doGrouping = async event => {
    event.preventDefault();
    if ( state.groupingFormA === -1 || state.groupingFormB === -1 ){
      alert('Please fill out all fields!');
    } else if ( isNaN(state.groupingFormA) || isNaN(state.groupingFormB) ) {
      alert('Please fill out all fields!');
    } else {
      const a = Number(state.groupingFormA);
      const b = Number(state.groupingFormB);
      const ab = a*b;
      const T = String(ab)+"/"+String(ab);
      alert(T);
    }
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Grouping Applet</h1>
              <br></br>
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
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row>
              <Col>
                <h4>Grouped by ab: </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Grouped by a: </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Grouped by b: </h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Grouping;
