import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch11Generator() {
  const [state , setState] = useState({
    variableA : 3,
    variableB : 2,
    rType : 'r by a',
    permuteBy : 'least common',
    OutputR : '',
    abcStringLC : "",
    abcStringM : "",
    abcStringA : "",
    testOutput : ""
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
    var v = -1;
    var LCTooBig = false;
    var MTooBig = false;
    var ATooBig = false;
    
    var outArrA = simpleToABC(sMakeR(vA,vB),vA)[4];
    var outArrB = simpleToABC(sMakeR(vA,vB),vB)[4];
    var outArrU = simpleToABC(sMakeRU(vA,vB),vA)[5];

    var fA = smallestFactor(outArrA);
    var fB = smallestFactor(outArrB);
    
    var outStr = outArrA.join("");
    if(fA < fB) {
      outStr = outArrA.join("");
      v = fA;
    } else {
      outStr = outArrB.join("");
      v = fB;
    }
    
    if(outStr[outStr.length - 1] === "|") {
      outStr = outStr.slice(0, -1);
    }

    var outStrLC = rotateLeast(outStr.split("|"), v);
    var abcOutLC = "X:1\nK:C\n"+outStrLC+"\n";
    if(abcOutLC.length > 50) {
      LCTooBig = true;
      MTooBig = true;
      ATooBig = true;
    }
    
    var outStrM = rotateOnMeasures(outStr.split('|'));
    var abcOutM = "X:1\nK:C\n"+outStrM+"\n";
    if(outStrM.length > 50) {
      MTooBig = true;
      ATooBig = true;
    }
    
    var outStrA = rotateAll(outStr.split('|'), v);
    var abcOutA = "X:1\nK:C\n"+outStrA+"|\n";
    // alert("Least Common: "+outStrLC.length+"\nMeasures: "+outStrM.length+"\nAttacks: "+outStrA.length);
    if(outStrA.length > 50) {
      ATooBig = true;
    }
    
    
    abcjs.renderAbc("outputLC", abcOutLC, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
    abcjs.renderAbc("outputM", abcOutM, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
    abcjs.renderAbc("outputA", abcOutA, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );

    setState(prevState => ({
      ...prevState,
        abcStringLC : abcOutLC,
        abcStringM : abcOutM,
        abcStringA : abcOutA,
    }))
  }

  const clearResults = () => {
    setState(prevState => ({
      ...prevState,
      vElement: "",
      vMeasure: "",
      resultArray: "",
      reverseResultArray: "",
      ABC: "",
      reverseABC: "",
      resultantABC: "",
      abcString: ""
    }))
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Rotate Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select a and b, and the type of resultant to make, then press submit to see one rotation of each method of rotation in this
                chapter.
              </p>
              <br />
              <Form.Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" defaultValue="3" value={state.variableA} onChange={handleSelect}>
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
                  <h2>÷</h2>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" defaultValue="2" value={state.variableB} onChange={handleSelect}>
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
              </Form.Row>
              <Form.Row className="align-items-bottom justify-content-md-center">
                <Col className="col-3">
                  <h5>r Type: </h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="rType">
                    <Form.Control as="select" defaultValue="-1" value={state.rType} onChange={handleSelect}>
                      <option>r</option>
                      <option>r_</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-md-center">
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Form.Row>
              <br />
              <Row className="justify-content-md-center">
                <h4>Result: </h4>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputLC"></div>
              </Row>
              <Playback abc = {state.abcStringLC}/> 
              <Row className="justify-content-md-center">
                <div id="outputM"></div>
              </Row>
              <Playback abc = {state.abcStringM}/> 
              <Row className="justify-content-md-center">
                <div id="outputA"></div>
              </Row>
              <Playback abc = {state.abcStringA}/>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
  
}

export default Ch11Generator;

function smallestFactor(arrIn1) {
  arrIn1 = arrIn1.join("").slice(0, -1).split("|");
  var l = arrIn1.length;
  if(l%2 === 0) {
    l = 2;
  } else if (l%3 === 0) {
    l = 3;
  } else if (l%5 === 0) {
    l = 5;
  } else if (l%7 === 0) {
    l = 7;
  } else if (l%11 === 0) {
    l = 11;
  }
  return l;
}

function sMakeR(a,b) {
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
    return arr;
}

function sMakeRU(a,b) {
    let arr = [];
    for(let i=0; i<6; i++) {
      arr[i] = [];
    }
  
    for(let i=0; i<a*a; i++) {
        arr[0].push(1);
    }
    arr[1].push(a*a);
    for(let i=1; i<a*a; i++) {
        arr[1].push('');
    }
    for(let i=0; i<a; i++) {
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
    for(let i=a*b; i<a*a; i++) {
      arr[3].push('');
    }
    
    for(let i=0; i<a*a - a*b; i++) {
      arr[4].push('');
    }
    for(let i=0; i<a; i++) {
      arr[4].push(b);
      for(let j=1; j<b; j++) {
        arr[4].push('');
      }
    }
  
    let j=1;
      for(let i=a*a-1; i>-1; i--) {
          
          if(arr[2][i] !== '' || arr[3][i] !== '' || arr[4][i] !== '') {
              arr[5][i] = j;
              j=1;
          } else {j++; arr[5][i]='';}
      }
  
    return arr;
  }

function simpleToABC(arrIn, measureLength) {
  let measure = Number(0);
  let longNote = Number(0);
    
    
    let arrOut = [];
    for(let i=0; i<arrIn.length; i++) {
        arrOut[i] = [];
    }

    for(let i=0; i<arrIn.length; i++) {
        measure = measureLength;
        for(let j=0; j<arrIn[i].length; j++) {
          
          if(arrIn[i][j] !== ''){
            if(arrIn[i][j] <= measure) {
              arrOut[i].push(pushNote(arrIn[i][j]));
              measure = measure - arrIn[i][j];
            } else if(arrIn[i][j] > measure) {
                if(arrIn[i][j] >= measureLength) {
                  
                  arrOut[i].push(pushNote(measure)+'-|');
                  longNote = arrIn[i][j] - measure;
                  for(longNote; longNote > 0; longNote=longNote-measureLength) {
                    arrOut[i].push(pushNote(measureLength)+'-|');
                  }
                  if(longNote > 0) {
                    arrOut[i].push(pushNote(longNote));
                  } else {
                    arrOut[i].pop();
                    arrOut[i].push(pushNote(measureLength)+'|');
                  }
                  measure = measureLength - longNote;
                } else {
                  arrOut[i].push(pushNote(measure)+'-|'+pushNote(arrIn[i][j]-measure));
                  measure = measureLength - (arrIn[i][j]-measure);
                }
            }
            
            if(measure === 0) {
              arrOut[i].push('|');
              measure = measureLength;
            }

          }
        }
    }
    return arrOut;
}

function pushNote(a) {
  if(a === 5) {
    return 'A4-A1';
  } else if(a > 8) {
    let output = new Array(['A8-']);
    let count = a-8;
    while(count > 8) {
      output.push('A8-');
      count = count-8;
    }
    output.push('A'+count);
    return output.toString();
  } else {return 'A'+a;}
}

/*
  arrIn should be [4] or [5] from sMakeR or sMakeRU
  a and b are the vA and vB, u is boolean asks "am I underlined"
  m is measure length
 */
  function rotateLeast(arrIn, numGroups) {
    var arr = arrIn.join("");
    // alert(numGroups+"\n"+arrIn);
    var incr = arr.length / numGroups;
    // alert(incr/2);
    var arrGroups = [];
    var index = incr
    for(var i = 0;i<arr.length;i+=incr) {
      arrGroups.push(arr.slice(i, i+incr));
    }
    // alert(arrGroups);
    var outArr = arrGroups.join("|")+"|";
    return outArr;
  }

/*
    takes array of measures and rotates.
    Outputs a 1-d array.
 */
function rotateOnMeasures(arrIn) {
    var arrOut = [];
    var measures = arrIn.length;
    
    for(let i=0; i<measures; i++) {
      for(let j=0; j<measures; j++) {
        if(arrIn[(i+j)%measures] === "") {
          continue;
        } else {
          arrOut.push(arrIn[(i+j)%measures]+"|");
        }
      }
    }

    return arrOut.join("");
}

/*
  arrIn should be [4] or [5] from sMakeR or sMakeRU
  But it can, if you like, be any line from one of the simple out generators
  Makes one line per permutation, which will be equal to the number of elements.
  Note that this only goes clockwise, once. Yes, more permutations *could* be made.
  But my god do we actually want to hit the user with this?
 */
function rotateAll(arrIn) {
  let arrOut = arrIn;
  
  return arrOut;
}