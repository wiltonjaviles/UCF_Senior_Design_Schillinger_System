import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import abcjs from "abcjs";
import '../.././Style.css';
import Playback from './Playback';

function Ch14Generator() {

  var tempVSeries = "";
  var old_data = JSON.parse(localStorage.getItem('schillArr'));

  // If there is already a saved state of the applet we overwrite the default values
  for (let i in old_data) {
    if (old_data[i].id === "book1ch14" ) {
      tempVSeries = old_data[i].vSeries;
      break;
    }
  }

  const [state , setState] = useState({
    vElement : "",
    vMeasure : "",
    vSeries : tempVSeries,
    resultArray: "",
    reverseResultArray: "",
    ABC: "",
    reverseABC: "",
    resultantABC: "",
    abcString: ""
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
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

  const createAcceleration = event => {
    event.preventDefault();

    // need to remove previous version of ch3 history if it exists
    for (let i in old_data) {
      if (old_data[i].id === "book1ch14" ) {
        old_data.splice(i, 1)
        break;
      }
    }

    // use unshift to push the new applet ID to the front of the array
    var book1ch14 = {"id":"book1ch14", "title":"Rhythms of Variable Velocities", "vSeries":state.vSeries}; 
    old_data.unshift(book1ch14);

    // update the schillinger applet array in localStorage
    localStorage.setItem('schillArr', JSON.stringify(old_data));

    var inputSeries = String(state.vSeries);
    
    var seriesArray = [];
    var reverseSeriesArray = [];
    var seriesSum = -1;
    var seriesMeasureLength = -1;

    switch (inputSeries) {
      case "Natural Harmonic Series":
        seriesArray = [1,2,3,4,5,6,7,8];
        reverseSeriesArray = [8,7,6,5,4,3,2,1];
        seriesSum = 36;
        seriesMeasureLength = 6;
        break;
      case "Arithmetical Progression":
        seriesArray = [1,2,5,7,9,11];
        reverseSeriesArray = [11,9,7,5,2,1];
        seriesSum = 35;
        seriesMeasureLength = 5;
        break;
      case "Geometrical Progression":
        seriesArray = [3,6,12,24];
        reverseSeriesArray = [24,12,6,3];
        seriesSum = 45;
        seriesMeasureLength = 9;
        break;
      case "Power Series":
        seriesArray = [2,4,8,16];
        reverseSeriesArray = [16,8,4,2];
        seriesSum = 30;
        seriesMeasureLength = 6;
        break;
      case "Summation Series":
        seriesArray = [1,2,3,5,8,13];
        reverseSeriesArray = [13,8,5,3,2,1];
        seriesSum = 32;
        seriesMeasureLength = 8;
        break;
      case "Arithmetical Progressions with Variable Differences":
        seriesArray = [1,2,4,7,11,16,22];
        reverseSeriesArray = [22,16,11,7,4,2,1];
        seriesSum = 63;
        seriesMeasureLength = 9;
        break;
      case "Prime Number Series":
        seriesArray = [1,2,3,5,7,11,13];
        reverseSeriesArray = [13,11,7,5,3,2,1];
        seriesSum = 42;
        seriesMeasureLength = 6;
        break;
      default:
        alert("Please select a series!");
        clearResults();
        return;
    }
    
    var seriesOut = toABC(seriesArray, seriesMeasureLength, seriesSum).join("");
    var reverseSeriesOut = toABC(reverseSeriesArray, seriesMeasureLength, seriesSum).join("");
    var rOut = toABC(resultant(seriesArray, reverseSeriesArray, seriesSum), seriesMeasureLength, seriesSum).join("");
    var abcString = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\nV: V3 clef=treble\n[V: V1]"+seriesOut+"\n[V: V2]"+reverseSeriesOut+"\n[V: V3]"+rOut+"\n";
    abcjs.renderAbc("outputC1", abcString);

    setState(prevState => ({
      ...prevState,
      resultArray: seriesArray.join(", "),
      reverseResultArray: reverseSeriesArray.join(", "),
      abcString: abcString,
      ABC: seriesOut,
      reverseABC: reverseSeriesOut,
      resultantABC: rOut
    }))

  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Chapter 14 Accelerator</h1>
              <h3>Instructions</h3>
              <p>
                Select a series from the dropdown and view the acceleration, decceleration, and resultant for that series.
              </p>
              <br />
              <Form.Row className="justify-content-center">
              <Col className="col-2">
                  <h3>Series:</h3>
                </Col>
                <Col className="col-3">
                  <Form.Group controlId="vSeries">
                    <Form.Control as="select" value={state.vSeries} onChange={handleSelect}>
                      <option>Natural Harmonic Series</option>
                      <option>Arithmetical Progression</option>
                      <option>Geometrical Progression</option>
                      <option>Power Series</option>
                      <option>Summation Series</option>
                      <option>Arithmetical Progressions with Variable Differences</option>
                      <option>Prime Number Series</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <Button variant="secondary" type="submit" className="float-right" onClick={createAcceleration}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row className="justify-content-md-center">
              <div id="outputC1"></div>
            </Row>
            <Playback abc={state.abcString} />
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

function resultant (arr1, arr2, totalLength) {
  var freqArr1 = [];
  var freqArr2 = [];
  arr1.forEach(element => {
    for(var i=0;i<element;i++) {
      if(i===0) {
        freqArr1.push(1);
      } else {
        freqArr1.push(0);
      }
    }
  });
  arr2.forEach(element => {
    for(var i=0;i<element;i++) {
      if(i===0) {
        freqArr2.push(1);
      } else {
        freqArr2.push(0);
      }
    }
  });
  
  var rString = [];
  for(var i=0;i<freqArr1.length;i++) {
    if((freqArr1[i] === 1) || (freqArr2[i] === 1)) {
      rString.push(1);
    } else {
      rString.push(0);
    }
  }

  var curLength = 1;
  var outR = [];

  rString.reverse().forEach(element => {
    if(element === 1) {
      outR.push(curLength);
      curLength = 1;
    } else {
      curLength++
    }
  });
  return outR;
}

// another extremely modified version of Duke's simpleToABC
// this one ends up being a little more generic assuming you can get the total length of the music (sum up the elements of arrIn for example)
function toABC (arrIn, measureLength, totalLength) {
  if(arrIn === []) {
    var defaultArr = [totalLength];
    return toABC(defaultArr, measureLength, totalLength);
  }
  var note = "G";
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

export default Ch14Generator;
