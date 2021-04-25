import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import abcjs from 'abcjs';
import Playback from '../applets/Playback';
import {r,r_,toABC} from '../functions/./generators';

function Ch8Generator() {
    // Dynamic link/button based on whether app is in chapter page or new tab
    var pageLink = "";
    if (window.location.href.includes("book1")) {
      pageLink = <a href="/ch8generator" target="_blank" rel="noopener noreferrer">Open Applet in New Tab</a>;
    } else {
      pageLink = <button className="btn btn-light" onClick={window.close}>Close Window</button>
    }

    var tempR1 = 3;
    var tempR2 = 2;
    var tempCType = 'R';
    var tempA_A = 1;
    var old_data = JSON.parse(localStorage.getItem('schillArr'));

    // If there is already a saved state of the applet we overwrite the default values
    for (let i in old_data) {
      if (old_data[i].id === "book1ch8" ) {
        tempR1 = old_data[i].c_r1;
        tempR2 = old_data[i].c_r2;
        tempCType = old_data[i].c_type;
        tempA_A = old_data[i].c_a_a
        break;
      }
    }

    const [state , setState] = useState({
        c_r1 : tempR1,
        c_r2 : tempR2,
        c_type : tempCType,
        c_rOut : '',
        c_pli : 1,
        c_pla : 1,
        c_a_a : tempA_A,
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

        // need to remove previous version of ch3 history if it exists
        for (let i in old_data) {
          if (old_data[i].id === "book1ch8" ) {
            old_data.splice(i, 1)
            break;
          }
        }        

        // use unshift to push the new applet ID to the front of the array
        var book1ch8 = {"id":"book1ch8", "title": "Coordination of Time Structures", "c_r1":state.c_r1, "c_r2":state.c_r2, "c_type": state.c_type, "c_a_a": state.c_a_a}; 
        old_data.unshift(book1ch8);

        // update the schillinger applet array in localStorage
        localStorage.setItem('schillArr', JSON.stringify(old_data));
        
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
            abcjs.renderAbc("outputSynced", 'X:1\nK:C\n"T’='+v_A+'"'+outArrSynced.join("")+"\n");
        } else {
            abcjs.renderAbc("outputSynced", 'X:1\nK:C\n"T’='+v_A+', A1='+v_A1+'"'+outArrSynced.join("")+"\n");
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
                    Select a resultant for T. Then select the number of attacks (a<sub>a</sub>). Click generate to see how the resultant and attacks are synchronized.
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
                            <h4>a<sub>a</sub></h4>
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
                        <Col className="col-3 text-center ml-4">
                            <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                        </Col>
                    </Row>
                    <Row className="form-row justify-content-md-center">
                        <div id="outputR"></div>
                    </Row>
                    <hr />
                    <Row className="form-row justify-content-md-center">
                        <div id="outputMelody"></div>
                    </Row>
                    <hr />
                  <Row className="form-row justify-content-md-center">
                    <div id="outputSynced"></div>
                  </Row>
                  <Playback abc = {state.abcString}/>
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

export default Ch8Generator;