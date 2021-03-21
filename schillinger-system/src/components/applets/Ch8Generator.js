import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/PlaybackTemplate';

function Ch8Generator() {
    const [state , setState] = useState({
        v_r1 : 3,
        v_r2 : 2,
        v_rOut : '',
        v_pli : 1,
        v_pla : 1,
        v_a_a : 1,
        v_a_T : 4,
        v_T : 6,
        v_PL : '',
        v_A : '',
        v_A1 : '',
        v_T1 : '',
        v_T2 : 4,
        v_N_T2 :'',
        abcString: "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=bass\n"
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

        //need to derive a_T (num elements in r)
        //need to derive T (length of r)
        //is T2 user defined?

        let PL = state.v_pli / state.v_pla;
        let A = state.v_a_a / state.v_pli;
        let A1 = A / state.v_a_T;
        let T1 = A1 * state.v_T;
        let NT2 = T1 / state.v_T2;
    
        setState(prevState => ({
            ...prevState,
            v_PL : PL,
            v_A : A,
            v_A1 : A1,
            v_T1 : T1,
            v_N_T2 : NT2
          }))
      }
    
      return (
        <div>
          <Container>
            <Card>
              <Card.Body>
                <Form>
                  <h1>Formula</h1>
                  <h3>Instructions</h3>
                  <p>
                    Define T, pli, pla, a_a, and a_T
                  </p>
                  <br />
                    <Row className="form-row justify-content-md-center">
                        <Col className="col-1">
                            <h2>T = </h2>
                        </Col>
                        <Col className="col-2">
                            <Form.Group controlId="v_r1">
                            <Form.Control as="select" defaultValue="3" value={state.v_r1} onChange={handleSelect}>
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
                            <Form.Group controlId="v_r2">
                            <Form.Control as="select" defaultValue="2" value={state.v_r2} onChange={handleSelect}>
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
                            <h2>a_T: </h2>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_a_T}</h4>
                        </Col>
                    </Row>
                      
                    <Row className="form-row justify-content-md-center">
                        <Col className="col-3">
                            <h2>pli: </h2>
                        </Col>
                        <Col className="col-2">              
                            <Form.Group controlId="v_pli">
                                <Form.Control as="select" defaultValue="1" value={state.v_pli} onChange={handleSelect}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col className="col-3">
                            <h2>pla: </h2>
                        </Col>
                        <Col className="col-2">              
                            <Form.Group controlId="v_pla">
                                <Form.Control as="select" defaultValue="1" value={state.v_pla} onChange={handleSelect}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <Col className="col-3">
                            <h2>a_a: </h2>
                        </Col>
                        <Col className="col-2">              
                            <Form.Group controlId="v_a_a">
                                <Form.Control as="select" defaultValue="1" value={state.v_a_a} onChange={handleSelect}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    
                    
                    <br />
                    <Row className="justify-content-md-center">
                        <Col className="col-3">
                            <h4>A: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_A}</h4>
                        </Col>
                
                        <Col className="col-3">
                            <h4>A1: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_A1}</h4>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="col-3">
                            <h4>T1: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_T1}</h4>
                        </Col>
                    
                        <Col className="col-3">
                            <h4>T2: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_T2}</h4>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="col-3">
                            <h4>PL: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_PL}</h4>
                        </Col>
                    
                        <Col className="col-3">
                            <h4>NT2: </h4>
                        </Col>
                        <Col className="col-8">
                            <h4>{state.v_N_T2}</h4>
                        </Col>
                    </Row>

                    <Row className="form-row justify-content-md-center">
                        <Col className="col-3 text-center ml-4">
                            <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                        </Col>
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

export default Ch8Generator;

function sMakeR(a,b) {
    let arr = new Array();
    for(let i=0; i<5; i++) {
        arr[i] = new Array();
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
    
    
    let arrOut = new Array();
    for(let i=0; i<arrIn.length; i++) {
        arrOut[i] = new Array();
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