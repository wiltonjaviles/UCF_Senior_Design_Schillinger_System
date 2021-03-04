import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Ch7Generator() {
  const [state , setState] = useState({
    variableA : '',
    variableB : '',
    attacks : '',
    base : '',
    output : ''
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
    

    setState(prevState => ({
        ...prevState,
        output : 'booped'
      }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Waltz Walker</h1>
              <h3>Instructions</h3>
              <p>
                Enter generator a and b, select number of attacks and the base.
              </p>
              <br />
                <Row className="justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="2" value={state.variableA} onChange={handleSelect}>
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
                <Col className="col-1">
                  <h1>÷</h1>
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
                    </Form.Control>
                  </Form.Group>
                </Col>
                </Row>
                  
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h1>Attacks: </h1>
                    </Col>
                    <Col className="col-2">              
                        <Form.Group controlId="attacks">
                            <Form.Control as="select" defaultValue="2" value={state.attacks} onChange={handleSelect}>
                            <option>2</option>
                            <option>4</option>
                            <option>6</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col className="col-3">
                        <h1>Base: </h1>
                    </Col>
                    <Col className="col-2">              
                        <Form.Group controlId="base">
                            <Form.Control as="select" defaultValue="1" value={state.base} onChange={handleSelect}>
                            <option>1/8</option>
                            <option>1/4</option>
                            <option>1/2</option>
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
                        <h4>Ouput: </h4>
                    </Col>
                    <Col className="col-2">
                        <h4>{state.output}</h4>
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

export default Ch7Generator;

