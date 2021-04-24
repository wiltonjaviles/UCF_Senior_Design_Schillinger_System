import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/Playback';
import {r,r_,toABC} from '../functions/./generators';

function Ch8Generator() {
    const [state , setState] = useState({
        c_r1 : 3,
        c_r2 : 2,
        c_type : 'R',
        c_rOut : '',
        c_pli : 1,
        c_pla : 1,
        c_a_a : 1,
        c_PL : '',
        c_a_T : '',
        c_T1 : '',
        c_T2 : 4,
        c_N_T2 :'',
        abcString: "X:1\nK:C\nV: V1 clef=treble\nV: V2 clef=bass\n"
      })

        
        //a_a
        let melodiesArray = [
            ['A'],
            ['F'],
            ['c','F'],
            ['c','E','F'],
            ['c','d','E','F'],
            ['c','A','d','E','F'],
            ['c','A','d','c','E','F'],
            ['c','A','d','c','C','E','F'],
            ['c','A','d','e','c','C','E','F'],
            ['c','A','d','e','c','G','C','E','F'],
            ['c','A','d','e','c','G','E','C','E','F']
        ];
        
        let baseR = [];
        let outArrR = [];
        let outArrMelody = [];
        let outArrSynced = [];
        let v_T = 0;
        let v_A = 0;
        let v_A1 = 0;
    
      const handleSelect = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
      }
    
      const generateR = event => {
        event.preventDefault();    

        
        
        if(state.c_type==='R') {
            baseR = r(state.c_r1,state.c_r2,state.c_r1);
        } else {
            baseR = r_(state.c_r1,state.c_r2,true);
        }
        v_T = 0;
        for(let i in baseR) {
            if(baseR[i] > 0) {
                v_T++;
            }
            if(baseR[i] === '-') {
                v_T--;
            }
        }

        v_A = v_T*state.c_a_a;

        outArrR = toABC(baseR);
        outArrMelody = melodiesArray[state.c_a_a];//TODO
        outArrSynced = toABC(baseR,melodiesArray[state.c_a_a],true);

        v_A1 = 0;
        for(let i in outArrSynced) {
            if(outArrSynced[i] > 0) {
                v_A1++;
            }
            if(outArrSynced[i] === '-') {
                v_A1--;
            }
        }

        abcjs.renderAbc("outputR", 'X:1\nK:C\n"R"'+outArrR.join("")+"\n");
        abcjs.renderAbc("outputMelody", 'X:1\nK:C\n"a_a='+state.c_a_a+'"'+outArrMelody.join("")+"\n");

        if(v_A===v_A1) {
            abcjs.renderAbc("outputSynced", 'X:1\nK:C\n"A='+v_A+'"'+outArrSynced.join("")+"\n");
        } else {
            abcjs.renderAbc("outputSynced", 'X:1\nK:C\n"A='+v_A+', A1='+v_A1+'"'+outArrSynced.join("")+"\n");
        }
        
    
        setState(prevState => ({
            ...prevState
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
                    TODO
                  </p>
                  <br />
                    <Row className="form-row justify-content-md-center">
                        <Col className="col-1">
                            <h2>T = </h2>
                        </Col>
                        <Col className="col-2">
                            <Form.Group controlId="c_r1">
                            <Form.Control as="select" value={state.c_r1} onChange={handleSelect}>
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
                            <Form.Group controlId="c_r2">
                            <Form.Control as="select" value={state.c_r2} onChange={handleSelect}>
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
                        <Col className="col-1">
                            <h4>R:</h4>
                        </Col>
                        <Col className="col-2">              
                            <Form.Group controlId="c_type">
                            <Form.Control as="select" value={state.c_type} onChange={handleSelect}>
                                <option>R</option>
                                <option>R_</option>
                            </Form.Control>
                            </Form.Group>
                        </Col>
                        
                        
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <Col className="col-1">
                            <h4>a_a</h4>
                        </Col>
                        <Col className="col-1">
                            <Form.Group controlId="c_a_a">
                                <Form.Control as="select" value={state.c_a_a} onChange={handleSelect}>
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
                        <Col className="col-3 text-center ml-4">
                            <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                        </Col>
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <div id="outputR"></div>
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <div id="outputMelody"></div>
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <div id="outputSynced"></div>
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
/*
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
        ]; TODO

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
        ];TODO

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
/*
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
}*/

// function feed(melodyArray, n) {
//     return melodyArray[n%melodyArray.length];
// }