import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch7Generator() {

  var tempA = 3;
  var tempB = 2;
  var tempAttacks = 2;
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch7" ) {
      tempA = old_data[i].a;
      tempB = old_data[i].b;
      tempAttacks = old_data[i].attacks;
      break;
    }
  }

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    attacks : tempAttacks,
    r: "",
    abcString: ""
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
    
    // need to remove previous version of ch7 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch7" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch7 = {"id":"book1ch7", "title":"Resultants Applied to Instrumental Forms", "a":state.variableA, "b":state.variableB, "attacks": state.attacks}; 
    old_data.unshift(book1ch7);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));

    var a = Number(state.variableA);
    var b = Number(state.variableB);
    var attacks = Number(state.attacks);
    var twoAttacks = ["C,", "[EGc]"];
    var fourAttacks = ["C,", "[EGc]", "G,", "[EGc]"];
    var sixAttacks = ["C,", "[EGc]", "G,", "[EGc]", "C", "[EGc]"];
    var notes;
    switch (attacks) {
      case 2: 
        notes = twoAttacks;
        break;
      case 4: 
        notes = fourAttacks;
        break;
      case 6: 
        notes = sixAttacks;
        break;
      default: break;
    }

    var measureLength = 8;
    var r = makeR(a,b);
    var rLength = Number(r.length);
    var totalLength = Number(lcm(attacks, rLength));
    var out = toABC(r, measureLength, totalLength, notes);
    
    var abc = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=bass\n[V: V1]"+out[0].join("")+"\n[V: V2]"+out[1].join("")+"\n";
    abcjs.renderAbc("outputC1", abc, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );

    setState(prevState => ({
        ...prevState,
        r: r,
        abcString: abc
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
                Enter generator a and b, select number of attacks and the base to see how the resultant is synchronized with the instrumental group.
              </p>
              <br />
                <Row className="form-row justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="3" value={state.variableA} onChange={handleSelect}>
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
                    <Form.Control as="select" defaultValue="2" value={state.variableB} onChange={handleSelect}>
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
                  
                <Row className="form-row justify-content-md-center">
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
                
                <Row className="form-row justify-content-md-center">
                    <Col className="col-3 text-center ml-4">
                        <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                    </Col>
                </Row>
                <br />
                <Row className="form-row justify-content-md-center">
                    <Col className="col-3">
                        <h4>Ouput: </h4>
                    </Col>
                </Row>
            </Form>
            <Row className="justify-content-md-center item">
              <div id="outputC1"></div>
            </Row>
            <Row className="justify-content-md-center item">
              <div id="outputC2"></div>
            </Row>
            <Playback abc={state.abcString}/>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default Ch7Generator;

// very slightly modified version of duke's sMakeR function
function makeR(a,b) {
  let arr = [];
  for(let i=0; i<5; i++) {
      arr[i] = [];
    }

  for(let i=0; i<a*b; i++) {
      arr[0].push(1);
  }
  arr[1].push(a*b);
  for(let i=1; i<a*b; i++) {
      arr[1].push('');
  }
  for(let i=0; i<b; i++) {
      arr[2].push(a);
      for(let j=1; j<a; j++) {
          arr[2].push('');
      }
  }
  for(let i=0; i<a; i++) {
      arr[3].push(b);
      for(let j=1; j<b; j++) {
          arr[3].push('');
      }
  }
  let j=1;
  for(let i=a*b-1; i>-1; i--) {
      
      if(arr[2][i] !== '' || arr[3][i] !== '') {
          arr[4][i] = j;
          j=1;
      } else {j++; arr[4][i]='';}
  }
  for( var i = 0; i < arr[4].length; i++) {                    
    if ( arr[4][i] === '') { 
      arr[4].splice(i, 1); 
        i--; 
    }
  }
  return arr[4];
}

// modified version of duke's simpleToABC function
function toABC(arrIn, measureLength, totalLength, notes) {
  let measure = Number(0);
  let longNote = Number(0);
  var notesLength = notes.length;
  var rLength = arrIn.length;
  var note = "A";
  let arrOut = [];
  arrOut[0] = [];
  arrOut[1] = [];
  for(let u=0;u<arrOut.length;u++) {
    measure = measureLength;
    for(let i=0; i<totalLength; i++) {
      note = notes[i%notesLength];
      if(u%2 === 0) {
        if(i%2 === 0) {
          note = "z";
        }
      } else if(u%2 === 1) {
        if(i%2 === 1) {
          note = "z";
        }
      }
      if(arrIn[i%rLength] !== ''){
        if(arrIn[i%rLength] <= measure) {
          arrOut[u].push(pushNote(arrIn[i%rLength], note));
          measure = measure - arrIn[i%rLength];
        } else if(arrIn[i%rLength] > measure) {
            if(arrIn[i%rLength] >= measureLength) {
              arrOut[u].push(pushNote(measure, note));
              arrOut[u].push('-|');
              longNote = arrIn[i%rLength] - measure;
              for(longNote; longNote > 0; longNote=longNote-measureLength) {
                arrOut[u].push(pushNote(measureLength, note));
                arrOut[u].push('-|');
              }
              if(longNote > 0) {
                arrOut[u].push(pushNote(longNote, note));
              } else {
                arrOut[u].pop();
                arrOut[u].push(pushNote(measureLength, note));
                arrOut[u].push('|');
              }
              measure = measureLength - longNote;
          } else {
            arrOut[u].push(pushNote(measure, note));
            arrOut[u].push('-|');
            arrOut[u].push(pushNote(arrIn[i%rLength]-measure, note));
            measure = measureLength - (arrIn[i%rLength]-measure);
          }
        }
        if(measure <= 0) {
          arrOut[u].push('|');
          measure = measureLength;          
        }
      }   
    }
    if(measure !== 0 && measure !== 8) {
        arrOut[u].push(pushNote(measure, "z"));
        arrOut[u].push("|");
        measure = 0;
    }

  }
  
  return arrOut;
}

function pushNote(a, note) {
  if(a === 5) {
    return note+"4-"+note+"1";
  } else if(a === 7) {
    return note+"6-"+note+"1";
  } else if(a > 8) {
    let output = new Array([note+"8-"]);
    let count = a-8;
    while(count > 8) {
      output.push(note+"8-");
      count = count-8;
    }
    output.push(note+count);
    return output.toString();
  } else {return note+a;}
}

function lcm(x, y) {
  if (isNaN(x) || isNaN(y)) 
   return false;
 return Math.abs((x * y) / gcd(x, y));
}

function  gcd(x, y) {
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 return x;
}