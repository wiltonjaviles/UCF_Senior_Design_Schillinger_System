import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function Ch11Generator() {
  // Dynamic link/button based on whether app is in chapter page or new tab
  var pageLink = "";
  if (window.location.href.includes("book1")) {
    pageLink = <a href="/ch11generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
  } else {
    pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
  }

  var tempA = 3;
  var tempB = 2;
  
   // grab the current array sitting in local storage
   var old_data = JSON.parse(localStorage.getItem('schillArr'));

   // If there is already a saved state of the applet we overwrite the default values
   for (let i in old_data) {
     if (old_data[i].id === "book1ch11" ) {
       tempA = old_data[i].a;
       tempB = old_data[i].b;
       break;
     }
   }

  const [state , setState] = useState({
    variableA : tempA,
    variableB : tempB,
    rType : 'r by a',
    permuteBy : 'least common',
    OutputR : '',
    abcStringLC : "",
    abcStringM : "",
    abcStringA : "",
    LCTooBig : "",
    MTooBig : "",
    ATooBig : "",
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
    
    // need to remove previous version of ch2 applet history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch11" ) {
        old_data.splice(i, 1)
        break;
      }
    }

     // use unshift to push the new applet ID to the front of the array
     var book1ch11 = {"id":"book1ch11", "title": "Composition of Homogeneous Rhythmic Continuity", "a":state.variableA, "b":state.variableB}; 
     old_data.unshift(book1ch11);

     // update the schillinger applet array in localStorage
     localStorage.setItem('schillArr', JSON.stringify(old_data));
    
    const vA = Number(state.variableA);
    const vB = Number(state.variableB);
    var v = -1;
    var v2 = -1;
    var LCTooBig = false;
    var MTooBig = false;
    var ATooBig = false;
    
    var outArrA = simpleToABC(sMakeR(vA,vB),vA)[4];
    var outArrB = simpleToABC(sMakeR(vA,vB),vB)[4];

    var fA = smallestFactor(outArrA);
    var fB = smallestFactor(outArrB);
    
    var outStr = outArrA.join("");
    if(fA < fB) {
      outStr = outArrA.join("");
      v = fA;
      v2 = vA;
    } else {
      outStr = outArrB.join("");
      v = fB;
      v2 = vB;
    }
    
    if(outStr[outStr.length - 1] === "|") {
      outStr = outStr.slice(0, -1);
    }

    var threshold = 321;

    var outStrLC = rotateLeast(outStr.split("|"), v);
    var abcOutLC = "X:1\nK:C\n"+outStrLC+"\n";
    
    if(abcOutLC.length > threshold) {
      LCTooBig = true;
      MTooBig = true;
      ATooBig = true;
    }
    
    var outStrM = rotateOnMeasures(outStr.split('|'));
    var abcOutM = "X:1\nK:C\n"+outStrM+"\n";
    if(outStrM.length > threshold) {
      MTooBig = true;
      ATooBig = true;
    }
    
    var outStrA = rotateAll(outStr, v2);
    var abcOutA = "X:1\nK:C\n"+outStrA+"\n";
    if(outStrA.length > threshold) {
      ATooBig = true;
    }
    
    var LCTooBigMsg = "";
    var MTooBigMsg = "";
    var ATooBigMsg = "";
    if(!LCTooBig) {
      abcjs.renderAbc("outputLC", abcOutLC, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
      LCTooBigMsg = "";
    } else {
      abcjs.renderAbc("outputLC", "");
      LCTooBigMsg = "The result is too large to display.";
      abcOutLC = "";
    }
    if(!MTooBig) {
      abcjs.renderAbc("outputM", abcOutM, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
      MTooBigMsg = "";
    } else {
      abcjs.renderAbc("outputM", "");
      MTooBigMsg = "The result is too large to display.";
      abcOutM = "";
    }
    if(!ATooBig) {
      abcjs.renderAbc("outputA", abcOutA, { wrap: { preferredMeasuresPerLine: 25 }, staffwidth: 1000 } );
      ATooBigMsg = "";
    } else {
      abcjs.renderAbc("outputA", "");
      ATooBigMsg = "The result is too large to display.";
      abcOutA = "";
    }

    setState(prevState => ({
      ...prevState,
        abcStringLC : abcOutLC,
        abcStringM : abcOutM,
        abcStringA : abcOutA,
        LCTooBig: LCTooBigMsg,
        MTooBig: MTooBigMsg,
        ATooBig: ATooBigMsg
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
                Select a and b, then press submit to see one rotation of the resultant by each method of rotation in this
                chapter. Some methods produce so much music for the higher resultants are too big to display on the page.
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
                <Col className="col-1 ml-5">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Form.Row>
              <br />
              <Row className="justify-content-md-center">
                <h4>Rotate by Least Common Divisor: </h4>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputLC"></div>
              </Row>
              <Row className="justify-content-center"><p>{state.LCTooBig}</p></Row>
              <Playback abc = {state.abcStringLC}/>
              <hr />
              <Row className="justify-content-md-center">
                <h4>Rotate by Measures: </h4>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputM"></div>
              </Row>
              <Row className="justify-content-center"><p>{state.MTooBig}</p></Row>
              <Playback abc = {state.abcStringM}/>
              <hr />
              <Row className="justify-content-md-center">
                <h4>Rotate by Attacks: </h4>
              </Row>
              <Row className="justify-content-md-center">
                <div id="outputA"></div>
              </Row>
              <Row className="justify-content-center"><p>{state.ATooBig}</p></Row>
              <Playback abc = {state.abcStringA}/>
            </Form>
            <br />
            {pageLink}
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
    // alert(arrIn+"\n"+numGroups);
    var n = numGroups;
    var result = [];

    for(let i=0; i<n;i++) {
      result.push([]);
    }

    var wordsPerLine = Math.ceil(arrIn.length / n)

    for (let line = 0; line < n; line++) {
      for (let i = 0; i < wordsPerLine; i++) {
        var value = arrIn[i + line * wordsPerLine]
        if (!value) continue //avoid adding "undefined" values
        result[line].push(value)
      }
    }
    var resultArr = [];
    result.forEach(element => {
      resultArr.push(element.join("|"));
    });
    var arrOut = [];

    for(let i=0; i<n; i++) {
      for(let j=0; j<n; j++) {
        if(resultArr[(i+j)%n] === "") {
          continue;
        } else {
          arrOut.push(resultArr[(i+j)%n]+"|");
        }
      }
    }

    return arrOut.join("");
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
function rotateAll(arrIn, measureLength) {
  var arrStr = arrIn;
  arrStr = arrStr.replaceAll("|", "").replaceAll("A", "").replaceAll("-", "").split("");
  var arr = [];
  arrStr.forEach(element => {
    arr.push("A"+element);
  });
  var arrOut = [];
  var len = arr.length;
  for(let i=0; i<len; i++) {
    for(let j=0; j<len; j++) {
      if(arr[(i+j)%len] === "") {
        continue;
      } else {
        arrOut.push(arr[(i+j)%len]);
        
      }
    }
  }
  
  var abcArr = arrOut.join("").replaceAll("A", "").split("");
  var sum = 0;
  abcArr.forEach(element => {
    sum += Number(element);
  });
  var arrOutFinal = toABC(abcArr, measureLength, sum);
  return arrOutFinal.join("");
}

// copied from ch14 modified toABC function
function toABC (arrIn, measureLength, totalLength) {
  if(arrIn === []) {
    var defaultArr = [totalLength];
    return toABC(defaultArr, measureLength, totalLength);
  }
  var note = "A";
  var arrOut = [];
  var curMeasure = 1;
  var index = 0;
  var curNote = arrIn[index];
  for(var i=1;i<totalLength+1;i++) {
    if(curNote === 1) {
    }
    if(Number(curMeasure) === Number(curNote)) {
      if(curNote === 5) {
        arrOut.push(note+"4-"+note+"1");
      } else if (curNote === 7) {
        arrOut.push(note+"6-"+note+"1");
      } else if (curNote === 9) {
        arrOut.push(note+"8-"+note+"1");
      } else {
        arrOut.push(note+String(curNote));
      }
      curMeasure = 0;
      index++;
      if(index >= arrIn.length) {
      } else {
        curNote = arrIn[index];
      }
    } 
    if(i%measureLength === 0) {
      if(i === 0) {
        continue;
      } else {
        if(curMeasure === 0) {
          arrOut.push("|");
        } else {
          if(curMeasure === 5) {
            arrOut.push(note+"4-"+note+"1-|");
          } else if (curMeasure === 7) {
            arrOut.push(note+"6-"+note+"1-|"); 
          } else if (curMeasure === 9) {
            arrOut.push(note+"8-"+note+"1-|");
          } else {
            arrOut.push(note+curMeasure+"-|");
          }
          curNote = curNote-curMeasure;
          curMeasure = 0;
        }
      }
    }
    curMeasure++;
  }
  var split = arrOut[arrOut.length-1].split("");
  if(split[split.length-2] === "-") {
    split.splice(split.length-2, 1);
    arrOut[arrOut.length-1] = split.join("");
  }
  return arrOut;
}