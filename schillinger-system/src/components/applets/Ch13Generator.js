import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch13Generator() {

  
  const [state , setState] = useState({
    family : '2',
    balance : '1',
    Output : '',
    abcString: ""
  })

  const familyArray = [
    ['','','',''],
    ['','','',''],
    ['','A2|AA|','',''],
    ['','A3|A2A|AA2|AAA|','',''],
    ['','A4|A3A|AA3|AA2A|A2AA|AAA2|AAAA|','',''],
    ['','A5|A3A2|A2A3|A2AA2|AA2A2|A2A2A|AAAAA|','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','','']
  ];

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const displayFamily = event => {

    event.preventDefault();    
    
    let abcOut = "X:1\nK:C\n"+familyArray[state.family][state.balance]+"\n"
    
    abcjs.renderAbc("output", abcOut);

    setState(prevState => ({
      ...prevState,
        abcString: abcOut
    }))
    
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Family Lookup</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="family">
                    <Form.Control as="select" value={state.family} onChange={handleSelect}>
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
                  <Form.Group controlId="balance">
                    <Form.Control as="select" value={state.balance} onChange={handleSelect}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-bottom justify-content-md-center">
                
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={displayFamily}>Display</Button>
                </Col>
              </Row>
              
              <Row className="justify-content-md-center">
                <div id="output"></div>
              </Row>
              <Playback abc = {state.abcString}/>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
  
}

export default Ch13Generator;