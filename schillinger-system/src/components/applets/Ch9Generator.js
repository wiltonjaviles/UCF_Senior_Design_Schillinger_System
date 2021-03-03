import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch9Generator() {
  const [state , setState] = useState({
    variableA : 1,
    variableB : 1,
    variableC : 1,
    variableD : 1,
    OutputC1 : '',
    OutputC2 : '',
    OuputA : '',
    OutputB : '',
    OutputR : ''
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
    let outArr = simpleToABC(sMakeR(vA,vB),vA);
    

    setState(prevState => ({
        ...prevState,
        OutputC1 : outArr[0].toString(),
        OutputC2 : outArr[1].toString(),
        OuputA : outArr[2].toString(),
        OutputB : outArr[3].toString(),
        OutputR : outArr[4].toString()
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>R Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="1" value={state.variableA} onChange={handleSelect}>
                      <option>1</option>
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
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableC">
                    <Form.Control as="select" defaultValue="1" value={state.variableC} onChange={handleSelect}>
                      <option>1</option>
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
                <Col className="col-2">              
                  <Form.Group controlId="variableD">
                    <Form.Control as="select" defaultValue="1" value={state.variableD} onChange={handleSelect}>
                      <option>1</option>
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
                        <h4>B: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputB}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h4>R: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.OutputR}</h4>
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