import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import abcjs from "abcjs";
import '../.././Style.css';
import Playback from './PlaybackTemplate';

function Ch14Generator() {
  const [state , setState] = useState({
    vElement : "",
    vMeasure : "",
    vSeries : "",
    resultArray: "",
    reverseResultArray: "",
    abcString: ""
  })

  const handleSelect = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const clearResults = event => {
    setState(prevState => ({
      ...prevState,
      vElement: "",
      vMeasure: "",
      resultArray: "",
      reverseResultArray: "",
      abcString: ""
    }))
  }

  const createAcceleration = event => {
    event.preventDefault();
    var inputSeries = String(state.vSeries);
    if(inputSeries === "Select Series") {
      alert("Please select a series!");
      clearResults();
      return;
    }
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
        seriesSum = 36;
        seriesMeasureLength = 6;
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
    
    var seriesOut = toABC(seriesArray, seriesMeasureLength).join("");
    var reverseSeriesOut = toABC(reverseSeriesArray, seriesMeasureLength).join("");
    var abcString = "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=treble\n[V: V1]"+seriesOut+"\n[V: V2]"+reverseSeriesOut+"\n";
    abcjs.renderAbc("outputC1", abcString);

    setState(prevState => ({
      ...prevState,
      resultArray: seriesOut,
      reverseResultArray: reverseSeriesOut,
      abcString: abcString
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
                    <Form.Control as="select" defaultValue="" value={state.vSeries} onChange={handleSelect}>
                      <option>Select Series</option>
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
              <Form.Row className="justify-content-center align-items-bottom text-center">
                {/* <Col className="col-2">
                  <h3>Members:</h3>
                </Col>
                <Col className="col-1">
                  <Form.Group controlId="vElement">
                    <Form.Control as="select" defaultValue="" value={state.vElement} onChange={handleSelect}>
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
                <Col className="col-2">
                  <h3 className="">or Measure:</h3>
                </Col>
                <Col className="col-1">              
                  <Form.Group controlId="vMeasure">
                    <Form.Control as="select" defaultValue="" value={state.vMeasure} onChange={handleSelect}>
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
                </Col> */}
                
              </Form.Row>
            </Form>
            {/* <Row className="justify-content-md-center">
              <Button variant="secondary" onClick={clearResults}>Clear</Button>
            </Row> */}
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-2"><p>Series: </p></Col>
              <Col className="col-2"><p>{state.resultArray}</p></Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="col-2"><p>Reverse: </p></Col>
              <Col className="col-2"><p>{state.reverseResultArray}</p></Col>
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

// another modified version of Duke's simpleToABC
function toABC(arrIn, measureLength) {
  let measure = Number(0);
  let longNote = Number(0);
  var rLength = arrIn.length;
  var note = "A";
  let arrOut = [];
  
  measure = measureLength;
  for(let i=0; i<arrIn.length; i++) {
    if(arrIn[i%rLength] !== ''){
      if(arrIn[i%rLength] <= measure) {
        arrOut.push(pushNote(arrIn[i%rLength], note, measureLength));
        measure = measure - arrIn[i%rLength];
      } else if(arrIn[i%rLength] > measure) {
          if(arrIn[i%rLength] >= measureLength) {
            arrOut.push(pushNote(measure, note, measureLength));
            arrOut.push('-|');
            longNote = arrIn[i%rLength] - measure;
            for(longNote; longNote > 0; longNote=longNote-measureLength) {
              arrOut.push(pushNote(measureLength, note, measureLength));
              arrOut.push('-|');
            }
            if(longNote > 0) {
              arrOut.push(pushNote(longNote, note, measureLength));
            } else {
              arrOut.pop();
              arrOut.push(pushNote(measureLength, note, measureLength));
              arrOut.push('|');
            }
            measure = measureLength - longNote;
        } else {
          arrOut.push(pushNote(measure, note, measureLength));
          arrOut.push('-|');
          arrOut.push(pushNote(arrIn[i%rLength]-measure, note, measureLength));
          measure = measureLength - (arrIn[i%rLength]-measure);
        }
      }
      if(measure <= 0) {
        arrOut.push('|');
        measure = measureLength;          
      }
    }   
  }
  if(arrOut[arrOut.length-1] !== "|") {
    arrOut.push("|");
  }
  return arrOut;
}

function pushNote(a, note, measureLength) {
  if(a === 5) {
    return note+"4-"+note+"1";
  } else if(a > measureLength) {
    let output = new Array([note+measureLength+"-"]);
    let count = a-measureLength;
    while(count > measureLength) {
      output.push(note+measureLength+"-");
      count = count-measureLength;
    }
    output.push(note+count);
    return output.toString();
  } else {return note+a;}
}

export default Ch14Generator;
