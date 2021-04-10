import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import '../.././Style.css';
import {generator_R,toABC}from'../functions/./generators.js';
import abcjs from "abcjs";
import Playback from '../applets/Playback';

function BasicTemplate() {
  
  const [state , setState] = useState({
    variableA : '3',
    variableB : '2',
    groupBy : '',
    testOutput : '',
  })

  let outArr = [];

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
    let vG = state.groupBy;
    switch(vG) {
      case 'a':
        vG = vA;
        break;
      case 'b':
        vG = vB;
        break;
      case 'ab':
        vG = vA*vB;
        break;
      default:
        vG = 0;
        break;
    }
    
    outArr = generator_R(vA,vB,vG,'all');
    abcjs.renderAbc("abcjs_C1", "X:1\nK:C\n"+toABC(outArr[0]).join('')+"\n");
    abcjs.renderAbc("abcjs_C2", "X:1\nK:C\n"+toABC(outArr[1]).join('')+"\n");
    abcjs.renderAbc("abcjs_A", "X:1\nK:C\n"+toABC(outArr[2]).join('')+"\n");
    abcjs.renderAbc("abcjs_B", "X:1\nK:C\n"+toABC(outArr[3]).join('')+"\n");
    abcjs.renderAbc("abcjs_R", "X:1\nK:C\n"+toABC(outArr[4]).join('')+"\n");

    setState(prevState => ({
      ...prevState,
      testOutput : toABC(outArr[2])
    }))
   
 }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>R Generator</h1>
              <h3>Instructions</h3>
              <p>
                Select two integers a and b, then select a measure lenght equal to a, b, or a times b.  Click Generate to view output.
              </p>
              <br />
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="variableA">
                    <Form.Control as="select" value={state.variableA} onChange={handleSelect}>
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
                  <h1>÷</h1>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="variableB">
                    <Form.Control as="select" value={state.variableB} onChange={handleSelect}>
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
              </Row>
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <h5>Group By:</h5>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="groupBy">
                    <Form.Control as="select" value={state.groupBy} onChange={handleSelect}>
                      <option></option>
                      <option>a</option>
                      <option>b</option>
                      <option>ab</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-3">
                  <Button variant="secondary" type="submit" className="float-right" onClick={generateR}>Generate</Button>
                </Col>
              </Row>
              
              <Row className="justify-content-md-center">
                <h4>{state.testOutput}</h4>
              </Row>

              <Row className="justify-content-md-center">
                <div id="abcjs_C1"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="abcjs_C2"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="abcjs_A"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="abcjs_B"></div>
              </Row>
              <Row className="justify-content-md-center">
                <div id="abcjs_R"></div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default BasicTemplate;

/**
 * Generates R a+b, outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} measure - if you want measures, put this in. If blank there will be no measures. Ties are marked with parantheses.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R
 */
/*function generator_R(a, b, measure, mode) {
  let outArr = [
    [],
    [],
    [],
    [],
    []
  ];

  let held = -1;
  let doMeasure = false;
  let countMeasure = measure;
  let countMeasureA = measure;
  let countMeasureB = measure;

  //Start up the lines
  if(measure > 0) {
    doMeasure = true;
    for(let i in outArr) {
      outArr[i].push('|');
    }
    if(measure!=a*b) {outArr[1].push('(');}
  }

  //iterate through all possible points of the input
  for(let i=0; i<a*b; i++) {

    //handle C1
    outArr[0].push(1);
    if(doMeasure) {
      if((i+1)%measure===0) {
        outArr[0].push('|');
      } else {
        outArr[0].push('+');
      }
    } else {
      outArr[0].push('+');
    }

    //handle C2 (if not putting in measures, this is handled at the end)
    if(doMeasure && i%measure===0) {
      outArr[1].push(measure);
      outArr[1].push('|');
    }
    
    //Handle A
    if(i%a===0) {
      if(doMeasure) {
        if(a<countMeasure) {
          outArr[2].push(a);
          outArr[2].push('+');
        } else if(a===countMeasure) {
          outArr[2].push(a);
          outArr[2].push('|');
        } else {
          outArr[2].push('(');
          outArr[2].push(countMeasure);
          outArr[2].push('|');
          countMeasureA = a-countMeasure;
          while(countMeasureA > measure) {
            outArr[2].push(measure);
            outArr[2].push('|');
            countMeasureA = countMeasureA - measure;
          }
          outArr[2].push(countMeasureA);
          outArr[2].push(')');
          if(countMeasureA!=measure) {outArr[2].push('+');} 
        }
      } else {
        outArr[2].push(a);
        outArr[2].push('+');
      }
    }

    //Handle B
    if(i%b===0) {
      if(doMeasure) {
        if(b<countMeasure) {
          outArr[3].push(b);
          outArr[3].push('+');
        } else if(b===countMeasure) {
          outArr[3].push(b);
          outArr[3].push('|');
        } else {
          outArr[3].push('(');
          outArr[3].push(countMeasure);
          outArr[3].push('|');
          countMeasureB = b-countMeasure;
          while(countMeasureB > measure) {
            outArr[3].push(measure);
            outArr[3].push('|');
            countMeasureB = countMeasureB - measure;
          }
          outArr[3].push(countMeasureB);
          outArr[3].push(')');
          if(countMeasureB!=measure) {outArr[3].push('+');} 
        }
      } else {
        outArr[3].push(b);
        outArr[3].push('+');
      }
    }

    //how much measure we have left
    countMeasure--;
    if(countMeasure===0) {
      countMeasure = measure;
    }

    //Handle R
    if(i%a===0 || i%b===0) {
      if(held===-1){
        held=1;
      } else {
          outArr[4].push(held);
          if(doMeasure) {
            if((i)%measure===0) {
              outArr[4].push('|');
            } else {
              outArr[4].push('+');
            }
          } else {
            outArr[4].push('+');
          }  
        held=1;
      }
    } else {
      held++;
    }
  }
  
  //Close off the lines
  if(!doMeasure) {
    outArr[0].pop();
    outArr[1].push(a*b);
    outArr[2].pop();
    outArr[3].pop();
    outArr[4].push(lesser(a,b));
  } else {
    outArr[1].pop();
    if(measure!=a*b) {outArr[1].push(')');}
    outArr[1].push('|');
    outArr[4].push(lesser(a,b));
    outArr[4].push('|');
  }
  

  if(mode === "all") {
    return outArr;
  } else {
    return outArr[4];
  }
}

function lesser(a,b) {
  if (a>b) {
    return b;
  } else return a;
}*/

/**
 * turns a schillinger polynomial into an abc string
 * @param {...string} inArr - 
 * @param {...string} melodyFeed - 
 * @returns - a new string array
 */
/*function toABC(inArr, melodyFeed) {
  let outArr = [];
  let n = '';
  let f = '';
  let feed =  melodyFeed || ['A'];
  let feedCount = 0;
  let breakdown = 0;

  //do logic to determine iterations of the below to align with feed

  for(let i in inArr) {
    n = inArr[i];
    f = feed[feedCount%feed.length];
    
    switch(n) {
      case '|':
        outArr.push(n);
        break;
      case '(':
        outArr.push(n);
        break;
      case ')':
        outArr.push(n);
        break;
      case '+':
        break;
      default:
        if(n>4) {
          switch(n) {
            case 12:
              outArr.push(f);
              outArr.push(n);
              break;
            case 8:
              outArr.push(f);
              outArr.push(n);
              break;
            case 6:
              outArr.push(f);
              outArr.push(n);
              break;
            default:
              breakdown = n;
              outArr.push('(');
              while(breakdown>0) {
                outArr.push(f);
                if(breakdown>7) {
                  outArr.push(8);
                  breakdown-=8;
                } else if(breakdown>3) {
                  outArr.push(4);
                  breakdown-=4;
                } else {
                  outArr.push(breakdown);
                  breakdown=0;
                }
              }
            
              outArr.push(')');
              break;
          }
        } else {
          outArr.push(f);
          outArr.push(n);
        }
        feedCount++;
        break;
    }
  }

  while(feedCount%feed.length!=0) {
    outArr.pop();
    for(let i in inArr) {
      n = inArr[i];
      f = feed[feedCount%feed.length];
      
      switch(n) {
        case '|':
          outArr.push(n);
          break;
        case '(':
          outArr.push(n);
          break;
        case ')':
          outArr.push(n);
          break;
        case '+':
          break;
        case '[':
          outArr.push('Z');
          break;
        case ']':
          break;
        default:
          outArr.push(f);
          outArr.push(n);
          feedCount++;
          break;
      }
    }
  }

  return outArr;
}*/