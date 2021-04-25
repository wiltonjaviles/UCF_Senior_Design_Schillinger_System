import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';

function Generator() {
  const [state , setState] = useState({
    variableA : -1,
    variableB : -1
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const doAction = event => {
    event.preventDefault();
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Applet Name</h1>
              <h3>Instructions</h3>
              <p>
                write applet instructions here
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="-1" value={state.variableA} onChange={handleSelect}>
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
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" defaultValue="-1" value={state.variableB} onChange={handleSelect}>
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
                  <Button variant="secondary" type="submit" className="float-right" onClick={doAction}>Submit</Button>
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

export default Generator;
