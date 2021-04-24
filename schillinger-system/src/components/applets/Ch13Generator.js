import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch13Generator() {

  var tempFamily = '2';
  var tempBalance = '1';
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

    // If there is already a saved state of the applet we overwrite the default values
    for (let i in old_data) {
      if (old_data[i].id === "book1ch13" ) {
        tempFamily = old_data[i].family;
        tempBalance = old_data[i].balance;
        break;
      }
    }

  const [state , setState] = useState({
    family : tempFamily,
    balance : tempBalance,
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
    
    // need to remove previous version of ch3 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch13" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch13 = {"id":"book1ch13", "title":"Evolution of Rhythm Styles (Families)", "family": state.family, "balance": state.balance}; 
    old_data.unshift(book1ch13);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));

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
                Select two integers a and b.  Click Generate to view output.
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