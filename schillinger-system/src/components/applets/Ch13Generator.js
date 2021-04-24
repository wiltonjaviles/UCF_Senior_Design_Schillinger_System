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
    [
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\n[V: V1]A2|\n[V: V2]AA|\n'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\n[V: V1]A3|\n[V: V2]A2A|\n[V: V3]AA2|\n[V: V4]AAA|'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A|\n[V: V2]AA3|\n[V: V3]AA2A|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A|\n[V: V2]AA3|\n[V: V3]AA2A|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A|\n[V: V2]AA3|\n[V: V3]AA2A|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A|\n[V: V2]AA3|\n[V: V3]AA2A|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2AA|\n[V: V2]AAA2|\n[V: V3]AAAA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2AA|\n[V: V2]AAA2|\n[V: V3]AAAA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2AA|\n[V: V2]AAA2|\n[V: V3]AAAA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2AA|\n[V: V2]AAA2|\n[V: V3]AAAA|\n',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2AA|\n[V: V2]AAA2|\n[V: V3]AAAA|\n',
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A2|\n[V: V2]A2A3|\n[V: V3]A2AA2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A2|\n[V: V2]A2A3|\n[V: V3]A2AA2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]AA2A2|\n[V: V2]A2A2A|\n[V: V3]AAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]AA2A2|\n[V: V2]A2A2A|\n[V: V3]AAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4A|\n[V: V2]AA4|\n[V: V3]AA3A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4A|\n[V: V2]AA4|\n[V: V3]AA3A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4A|\n[V: V2]AA4|\n[V: V3]AA3A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3AA|\n[V: V2]AAA3|\n[V: V3]AAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3AA|\n[V: V2]AAA3|\n[V: V3]AAAAA|'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A|\n[V: V2]AA5|\n[V: V3]AA4A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A|\n[V: V2]AA5|\n[V: V3]AA4A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A|\n[V: V2]AA5|\n[V: V3]AA4A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4AA|\n[V: V2]AAA4|\n[V: V3]AAA2AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4AA|\n[V: V2]AAA4|\n[V: V3]AAA2AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4AA|\n[V: V2]AAA4|\n[V: V3]AAA2AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA2AAA|\n[V: V2]A2AAAA|\n[V: V3]AAAAA2|\n[V: V4]AAAA2A|\n[V: V5]AAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA2AAA|\n[V: V2]A2AAAA|\n[V: V3]AAAAA2|\n[V: V4]AAAA2A|\n[V: V5]AAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA2AAA|\n[V: V2]A2AAAA|\n[V: V3]AAAAA2|\n[V: V4]AAAA2A|\n[V: V5]AAAAAA|'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A4A3|\n[V: V2]A3A4|\n[V: V3]A3AA3|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]AA3A3|\n[V: V2]A3A3A|\n[V: V3]AA2AA2A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]A2AA2AA|\n[V: V2]AA2AAA2|\n[V: V3]A2AAA2A|\n[V: V4]AAA2AA2|\n[V: V5]AAAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A2|\n[V: V2]A2A5|\n[V: V3]A2A3A2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A3A2A2|\n[V: V2]A2A2A3|\n[V: V3]A2AAAA2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AAAA2A2|\n[V: V2]AAA2A2A|\n[V: V3]AA2A2AA|\n[V: V4]A2A2AAA|\n[V: V5]AAAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A6A|\n[V: V2]AA6|\n[V: V3]AA5A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5AA|\n[V: V2]AAA5|\n[V: V3]AAA3AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA3AAA|\n[V: V2]A3AAAA|\n[V: V3]AAAAA3|\n[V: V4]AAAA3A|\n[V: V5]AAAAAAA|'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A3|\n[V: V2]A3A5|\n[V: V3]A3A2A3|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2A3A3|\n[V: V2]A3A3A2|\n[V: V3]A2AA2AA2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A2A3A3|\n[V: V2]A3A3A2|\n[V: V3]A2AA2AA2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA2AA2A2|\n[V: V2]A2AA2A2A|\n[V: V3]AA2A2AA2|\n[V: V4]A2A2AA2A|\n[V: V5]AAAAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A7A|\n[V: V2]AA7|\n[V: V3]AA6A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A7A|\n[V: V2]AA7|\n[V: V3]AA6A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A6AA|\n[V: V2]AAA6|\n[V: V3]AAA4AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A6AA|\n[V: V2]AAA6|\n[V: V3]AAA4AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA4AAA|\n[V: V2]A4AAAA|\n[V: V3]AAAAA4|\n[V: V4]AAAA4A|\n[V: V5]AAAAAAAA|'
    ],
    [
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A4|\n[V: V2]A4A5|\n[V: V3]A4AA4|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]AA4A4|\n[V: V2]A4A4A|\n[V: V3]AA3AA3A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]A3AA3AA|\n[V: V2]AA3AAA3|\n[V: V3]A3AAA3A|\n[V: V4]AAA3AA3|\n[V: V5]AAAAAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A7A2|\n[V: V2]A2A7|\n[V: V3]A2A5A2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A5A2A2|\n[V: V2]A2A2A5|\n[V: V3]A2A2AA2A2|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]A2AA2A2A2|\n[V: V2]AA2A2A2A2|\n[V: V3]A2A2A2A2A|\n[V: V4]A2A2A2AA2|\n[V: V5]AAAAAAAAA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A8A|\n[V: V2]AA8|\n[V: V3]AA7A|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]A7AA|\n[V: V2]AAA7|\n[V: V3]AAA5AA|',
      'V: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\nV: V4 clef=treble\nV: V5 clef=treble\n[V: V1]AA5AAA|\n[V: V2]A5AAAA|\n[V: V3]AAAAA5|\n[V: V4]AAAA5A|\n[V: V5]AAAAAAAAA|'
    ]
  ];


  let abcOut = '';

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }
  const handleChange = (e) => {
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

    abcOut = 'X:1\nK:C\n' + familyArray[state.family][state.balance];
    
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
                <Col className="col-1">
                  <h6>FAMILY</h6>
                </Col>
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
              </Row>
              <Row className="align-items-bottom justify-content-md-center">
                <Col>
                  <Form.Group controlId="balance">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control 
                      type="range"
                      min="0" max="8" 
                      className="rangeSlider" onInput={handleChange}
                    />
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
