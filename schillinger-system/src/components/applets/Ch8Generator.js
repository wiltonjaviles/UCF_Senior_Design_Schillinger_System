import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/Playback';

function Ch8Generator() {
    const [state , setState] = useState({
        v_r1 : 3,
        v_r2 : 2,
        v_rOut : '',
        v_pli : 1,
        v_pla : 1,
        v_a_a : 1,
        v_PL : '',
        v_A : '',
        v_A1 : '',
        v_a_T : '',
        v_T : '',
        v_T1 : '',
        v_T2 : 4,
        v_N_T2 :'',
        abcString: "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=bass\n"
      })

        //v_r1 by v_r2
        let rAttacksArray = [
            [0,0,0, 0, 0, 0, 0, 0,  0],
            [0,0,0, 0, 0, 0, 0, 0,  0],
            [0,0,0, 0, 0, 0, 0, 0,  0],
            [0,0,4, 3, 6, 7, 6, 9, 10],
            [0,0,4, 6, 4, 8, 8, 10, 8],
            [0,0,6, 7, 8, 5, 10,11,12],
            [0,0,6, 6, 8, 10,6, 12,12],
            [0,0,8, 9, 10,11,12,7, 14],
            [0,0,8, 10,8, 12,12,14, 8],
            [0,0,10,9, 12,13,12,15,16]
        ];
        //a_a
        let melodiesArray = [
            ['A'],
            ['F'],
            ['c','F'],
            ['c','E','F'],
            ['c','d','E','F'],
            ['c','A','d','E','F'],
            ['c','A','d','C','E','F']
        ];
        //a_T by a_a
        //This gives you the number of times you repeat r based on 
        //the relationship between a_T and a_a
        let ratiosArray = [
            [-1,-1,-1,-1,-1,-1],
            [],
            [],
            [0,1,2,1,4,5,2],
            [0,1,1,3,1,5,3],
            [0,1,2,3,4,1,6],
            [0,1,1,1,2,5,1],
            [0,1,2,3,4,5,6],
            [0,1,1,3,1,5,3],
            [0,1,2,1,4,5,2],
            [0,1,1,3,2,1,3],
            [0,1,2,3,4,5,6],
            [0,1,1,1,1,60,1],
            [0,1,2,3,4,5,6],
            [0,1,1,3,2,5,3],
            [0,1,2,1,4,1,2],
            [0,1,1,3,1,5,3]
        ];

        let a_T = 4;
        let T = 6;
        
    
      const handleSelect = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
      }
    
      const generateR = event => {
        event.preventDefault();    

        a_T = rAttacksArray[state.v_r1][state.v_r2];
        T = state.v_r1 * state.v_r2;
        //is T2 user defined?

        let PL = state.v_pli / state.v_pla;
        let A = state.v_a_a / state.v_pli;
        let A1 = A / a_T;
        let T1 = A1 * T;
        let NT2 = T1 / state.v_T2;

        

        let outArr = simpleToABC(sMakeR(state.v_r1,state.v_r2),state.v_r1);
        let abcOut = outArr[4];
        abcOut = embedMelody(abcOut, melodiesArray[state.v_a_a], ratiosArray[a_T][state.v_a_a]);
        

        abcjs.renderAbc("outputMusic", "X:1\nK:C\n"+abcOut.join("")+"\n");
        
    
        setState(prevState => ({
            ...prevState,
            v_PL : PL,
            v_A : A,
            v_A1 : A1,
            v_a_T : a_T,
            v_T : T,
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
                                <option>10</option>
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
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                            </Form.Group>
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
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
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
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
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
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col className="col-3">
                            <h4>a_T: </h4>
                            <h4>{state.v_a_T}</h4>
                        </Col>
                        <Col className="col-8">
                            
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
                    <Row className="form-row justify-content-md-center">
                        <div id="outputMusic"></div>
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
    take in array that has the r output.
    ratio of r output to melody, repeat r 
    as needed to embed the melody into r.
 */

function embedMelody(arrIn, melodyArray, repeatR) {
    let arrOut = [];
    
    let n=0;
    for(let i=0; i<repeatR; i++) {
        for(let j in arrIn) {
            
            if(arrIn[j].includes("A")) {
                arrOut.push(arrIn[j].replace('A',melodyArray[n%melodyArray.length]));
                n++
            } else {
                arrOut.push(arrIn[j]);
            }
        }
    }

    return arrOut;
}

function feed(melodyArray, n) {
    return melodyArray[n%melodyArray.length];
}