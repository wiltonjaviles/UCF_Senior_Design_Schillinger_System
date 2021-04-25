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
        outArrMelody = melodiesArray[state.c_a_a];
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