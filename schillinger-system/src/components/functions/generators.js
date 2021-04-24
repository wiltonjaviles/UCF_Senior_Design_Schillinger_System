/*
Michael Duke
luckystarnova@gmail.com
*/

/**
   * turns a schillinger polynomial into an abc string
   * @param {...string} inArr - 
   * @param {...string} melodyFeed - 
   * @param {boolean} align - 
   * @returns - a new string array
   */
 export function toABC(inArr, melodyFeed, align) {
    let outArr = [];
    let n = '';
    let f = '';
    let feed =  melodyFeed || ['A'];
    let feedCount = 0;
    let breakdown = 0;
    let resting = false;
  
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
        case '-':
          outArr.push(n);
          break;
        case '+':
          break;
        case 'Z'||'z':
          resting = true;
          break;
        default:
          if(resting) {
            f = 'z';
            resting = false;
          }
          if(n>4) {
            switch(n) {
              case '12' || 12:
                outArr.push(f);
                outArr.push(n);
                break;
              case '8' || 8:
                outArr.push(f);
                outArr.push(n);
                break;
              case '6' || 6:
                outArr.push(f);
                outArr.push(n);
                break;
              default:
                breakdown = n;
                
                while(breakdown>0) {
                  outArr.push(f);
                  if(breakdown>7) {
                    outArr.push(8);
                    breakdown-=8;
                    if(breakdown!==0) {outArr.push('-');}
                  } else if(breakdown>3) {
                    outArr.push(4);
                    breakdown-=4;
                    if(breakdown!==0) {outArr.push('-');}
                  } else {
                    outArr.push(breakdown);
                    breakdown=0;
                  }
                }
              
                
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

    if(!align) {
        return outArr;
    }
  
    //align feed
    while(feedCount%feed.length!==0) {
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
            case '-':
              outArr.push(n);
              break;
            case '+':
              break;
            default:
              if(n>4) {
                switch(n) {
                  case '12' || 12:
                    outArr.push(f);
                    outArr.push(n);
                    break;
                  case '8' || 8:
                    outArr.push(f);
                    outArr.push(n);
                    break;
                  case '6' || 6:
                    outArr.push(f);
                    outArr.push(n);
                    break;
                  default:
                    breakdown = n;
                    
                    while(breakdown>0) {
                      outArr.push(f);
                      if(breakdown>7) {
                        outArr.push(8);
                        breakdown-=8;
                        if(breakdown!==0) {outArr.push('-');}
                      } else if(breakdown>3) {
                        outArr.push(4);
                        breakdown-=4;
                        if(breakdown!==0) {outArr.push('-');}
                      } else {
                        outArr.push(breakdown);
                        breakdown=0;
                      }
                    }
                  
                    
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
    }
  
    return outArr;
  }

/**
 * Generates r(a%b), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} measure - if you want measures, put this in. If blank there will be no measures. Ties are marked with parantheses.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R
 */
export function r(a,b,measure,mode) {
  return generator_R(a,b,measure,mode);
}

/**
 * Generates r(a%b), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} measure - if you want measures, put this in. If blank there will be no measures. Ties are marked with parantheses.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R
 */
 export function generator_R(a, b, measure, mode) {
    let outArr = [
      [], // C1 - one beat at every point
      [], // C2 - one beat for the duration
      [], // A - b iterations of a
      [], // B - a iterations of b
      []  // R - juxtaposition of A and B
    ];

    if(a===b) {
        //set up the most boring array
        for(let i=0; i<a; i++) {
            if(measure) {
                outArr[0].push(a);
                outArr[0].push('-');
                outArr[0].push('|');
                outArr[1].push(a);
                outArr[1].push('|');
                outArr[2].push(a);
                outArr[2].push('|');
                outArr[3].push(a);
                outArr[3].push('|');
                outArr[4].push(a);
                outArr[4].push('|');
            } else {
                outArr[1].push(a);
                outArr[1].push('+');
                outArr[2].push(a);
                outArr[2].push('+');
                outArr[3].push(a);
                outArr[3].push('+');
                outArr[4].push(a);
                outArr[4].push('+');
            }
        }
        if(!measure) {
            outArr[0].push(a*a);
            outArr[1].pop();
            outArr[2].pop();
            outArr[3].pop();
            outArr[4].pop();
        }

        if(mode==='all') {
            return outArr;
        } else {
            return outArr[4];
        }
    }
  
    let held = -1;
    let doMeasure = false;
    let countMeasure = measure;
    let countMeasureA = measure;
    let countMeasureB = measure;
  
    //Start up the lines
    if(measure > 0) {
      doMeasure = true;
      //for(let i in outArr) {
        //outArr[i].push('|');
      //}
      //if(measure!=a*b) {outArr[1].push('(');}
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
        outArr[1].push('-');
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
            //outArr[2].push('(');
            outArr[2].push(countMeasure);
            outArr[2].push('-');
            outArr[2].push('|');
            countMeasureA = a-countMeasure;
            while(countMeasureA > measure) {
              outArr[2].push(measure);
              outArr[2].push('-');
              outArr[2].push('|');
              countMeasureA = countMeasureA - measure;
            }
            if(countMeasureA !== 0) {
                outArr[2].push(countMeasureA);
            } else {
                outArr[2].pop();
                outArr[2].pop();
                outArr[2].push('|');
            }
            //outArr[2].push(')');
            if(countMeasureA!==measure) {outArr[2].push('+');} 
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
            //outArr[3].push('(');
            outArr[3].push(countMeasure);
            outArr[3].push('-');
            outArr[3].push('|');
            countMeasureB = b-countMeasure;
            while(countMeasureB > measure) {
              outArr[3].push(measure);
              outArr[3].push('-');
              outArr[3].push('|');
              countMeasureB = countMeasureB - measure;
            }
            if(countMeasureB !== 0) {
                outArr[3].push(countMeasureB);
            } else {
                outArr[3].pop();
                outArr[3].pop();
                outArr[3].push('|');
            }
            
            //outArr[3].push(')');
            if(countMeasureB!==measure) {outArr[3].push('+');} 
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
      outArr[1].pop();
      //if(measure!==a*b) {outArr[1].push(')');}
      outArr[1].push('|');
      outArr[4].push(lesser(a,b));
      outArr[4].push('|');

      for(let i in outArr) {
          let n = outArr[i].pop();
          if(n !== '|') {
              outArr[i].push(n);
              outArr[i].push('|');
          } else {
            
            outArr[i].push(n);
          }
      }
      
    }
    
    if(mode === "all") {
      return outArr;
    } else {
      return outArr[4];
    }
  }

/**
 * Generates r_(a%b), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {boolean} measure - if you don't want measures, false. Defaults to greater input if true.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R_
 */ 
export function r_(a,b,measure,mode) {
  return generator_R_Underlined(a,b,measure,mode);
}

/**
 * Generates r_(a%b), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {boolean} measure - if you don't want measures, false. Defaults to greater input if true.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R_
 */
export function generator_R_Underlined(a, b, measure, mode) {
    let outArr = [
        [], // C1 - one beat at every point
        [], // C2 - one beat for the duration
        [], // A - a iterations of a
        [], // B1 - a iterations of b, offset of a-b measures at end
        [], // B2 - a iterations of b, offset of a-b measures at beginning
        []  // R - juxtaposition of A, B1 and B2
    ];

    if(a===b) {
        //set up the most boring array
        for(let i=0; i<a; i++) {
            if(measure) {
                outArr[0].push(a);
                outArr[0].push('-');
                outArr[0].push('|');
                outArr[1].push(a);
                outArr[1].push('|');
                outArr[2].push(a);
                outArr[2].push('|');
                outArr[3].push(a);
                outArr[3].push('|');
                outArr[4].push(a);
                outArr[4].push('|');
                outArr[5].push(a);
                outArr[5].push('|');
            } else {
                outArr[1].push(a);
                outArr[1].push('+');
                outArr[2].push(a);
                outArr[2].push('+');
                outArr[3].push(a);
                outArr[3].push('+');
                outArr[4].push(a);
                outArr[4].push('+');
                outArr[5].push(a);
                outArr[5].push('+');
            }
        }
        if(!measure) {
            outArr[0].push(a*a);
            outArr[1].pop();
            outArr[2].pop();
            outArr[3].pop();
            outArr[4].pop();
            outArr[5].pop();
        } else {
          outArr[0].pop();
          outArr[0].pop();
          outArr[0].push('|');
        }

        if(mode==='all') {
            return outArr;
        } else {
            return outArr[5];
        }
    }

    //Make sure we are in a > b order
    let t=greater(a,b);
    b = lesser(a,b);
    a = t;

    //the gap at the front/end of b1/b2 respectively
    let displacement = a*a-a*b;
    
    //initialize arrays as needed

    if(measure) {
        //handle c1
        for(let i=0; i<a; i++) {
          for(let j=0; j<a; j++) {
            outArr[0].push(1);
            outArr[0].push('+');
          }
          outArr[0].pop();
          outArr[0].push('|');
          
        }

        //handle c2 and a
        for(let i=0; i<a; i++) {
            outArr[1].push(a);
            outArr[1].push('-');
            outArr[1].push('|');

            outArr[2].push(a);
            outArr[2].push('|');
        }
        outArr[1].pop();
        outArr[1].pop();
        outArr[1].push('|');

        //handle b1 and b2
        let countMeasure = a;

        for(let i=0; i<(displacement/a); i++) {
          outArr[4].push('Z');
          outArr[4].push(a);
          outArr[4].push('|');
        }

        for(let i=0; i<a; i++) {
            if(b < countMeasure) {
                outArr[3].push(b);
                outArr[4].push(b);
                outArr[3].push('+');
                outArr[4].push('+');
                countMeasure-=b;
            } else if(b === countMeasure) {
                outArr[3].push(b);
                outArr[4].push(b);
                outArr[3].push('|');
                outArr[4].push('|');
                countMeasure=a;
            } else {
                outArr[3].push(countMeasure);
                outArr[4].push(countMeasure);
                outArr[3].push('-');
                outArr[4].push('-');
                outArr[3].push('|');
                outArr[4].push('|');
                outArr[3].push(b - countMeasure);
                outArr[4].push(b - countMeasure);
                outArr[3].push('+');
                outArr[4].push('+');
                countMeasure = a - (b - countMeasure);
            }
        }
        for(let i=0; i<(displacement/a); i++) {
          outArr[3].push('Z');
          outArr[3].push(a);
          outArr[3].push('|');
        }

        //handle r_
        let doit=false;
        let held = -1;

        for(let i=0; i<a*a; i++) {
          if(i%a===0) {
            doit = true;
          }
          if(i>displacement) {
            if((i-displacement)%b===0) {
              doit = true;
            }
          }
          if(i<(a*a-displacement)) {
            if(i%b===0) {
              doit = true;
            }
          }
          if(doit) {
            if(held===-1){
              held=1;
            } else {
              outArr[5].push(held);
              outArr[5].push('+');
              held=1;
            }
            doit=false;
          } else {
            held++;
          }
          
        }
        
        outArr[5].push(b);
        outArr[5] = insertMeasures(outArr[5],a);

    } else { //these are much simpler, in general.
        //handle c1
        for(let i=0; i<a*a; i++) {
            outArr[0].push(1);
            outArr[0].push('+');
        }
        outArr[0].pop();

        //handle c2
        outArr[1].push(a*a);

        //handle a
        for(let i=0; i<a; i++) {
            outArr[2].push(a);
            outArr[2].push('+');
        }
        outArr[2].pop();

        //handle b1
        for(let i=0; i<a; i++) {
            outArr[3].push(b);
            outArr[3].push('+');
        }
        outArr[3].push('Z');
        outArr[3].push(a);

        //handle b2
        outArr[4].push('Z');
        outArr[4].push(a);
        outArr[4].push('+');
        for(let i=0; i<a; i++) {
            outArr[4].push(b);
            outArr[4].push('+');
        }
        outArr[4].pop();
        
        //handle r
        let doit=false;
        let held = -1;

        for(let i =0; i<a*a; i++) {
          if(i%a===0) {
            doit = true;
          }
          if(i>a) {
            if((i+a)%b===0) {
              //doit = true;
            }
          }
          if(i<(a*a-a)) {
            if(i%b===0) {
              doit = true;
            }
          }
          if(doit) {
            if(held===-1){
              held=1;
            } else {
              outArr[5].push(held);
              outArr[5].push('+');
              held=1;
            }
            doit=false;
          } else {
            held++;
          }
          
        }
        outArr[5].push(b);
    }

    if(mode === "all") {
        return outArr;
    } else {
        return outArr[5];
    }
}

/**
 * Generates r(a%b%c), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} measure - this should be the multiple of a subset of a,b,c. Nothing/0 removes measures.
 * @param {string} mode - if "all", you get the whole array. If "R1" you get just R1. Else, you get R.
 * @returns outArr - character array of R and/or R1
 */
export function r3(a,b,c,measure,mode) {
  return generator_R_Trinomial(a,b,c,measure,mode);
}

/**
 * Generates r(a%b%c), outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} measure - this should be the multiple of a subset of a,b,c. Nothing/0 removes measures.
 * @param {string} mode - if "all", you get the whole array. If "R1" you get just R1. Else, you get R.
 * @returns outArr - character array of R and/or R1
 */
export function generator_R_Trinomial(a,b,c,measure,mode) {
    let outArr = [
        [], 
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    //bad input management
    a = Number(a);
    b = Number(b);
    c = Number(c);
    measure = Number(measure);
    if(a < 1) {
      a=1;
    }
    if(b < 1) {
      b=1;
    }
    if(c < 1) {
      c=1;
    }
    if(a>b || a>c || b>c) {
      let sort = [a,b,c];
      sort.sort();
      a = sort[0];
      b = sort[1];
      c = sort[2];
    }
    
    //[0]-C1 [5]-R and [9]-R1
    let track5 = -1;
    let track9 = -1;
    for(let i = 0; i<a*b*c; i++) {
      outArr[0].push(1);
      outArr[0].push('+');          
      if(i%(a)===0 || i%(b)===0 || i%(c)===0){
        if(track5>0) {
          outArr[5].push(track5);
          outArr[5].push('+');
        }
        track5 = 1;
      } else {
        track5++;
      }
      if(i%(a*b)===0 || i%(a*c)===0 || i%(b*c)===0){
        if(track9>0) {
          outArr[9].push(track9);
          outArr[9].push('+');
        }
        track9 = 1;
        } else {
          track9++;          
        }
    }
    outArr[0].pop();
    outArr[5].push(track5);
    outArr[9].push(track9);

    //C2
    outArr[1].push(a*b*c);

    //a * (b*c)
    for(let i = 0; i<b*c; i++) {
      outArr[2].push(a);
      outArr[2].push('+');
    }
    outArr[2].pop();

    //b * (a*c)
    for(let i = 0; i<a*c; i++) {
      outArr[3].push(b);
      outArr[3].push('+');
    }
    outArr[3].pop();

    //c * (a*b)
    for(let i = 0; i<a*b; i++) {
      outArr[4].push(c);
      outArr[4].push('+');
    }
    outArr[4].pop();

    //(b*c) * a
    for(let i = 0; i<a; i++) {
      outArr[6].push(b*c);
      outArr[6].push('+');
    }
    outArr[6].pop();

    //(a*c) * b
    for(let i = 0; i<b; i++) {
      outArr[7].push(a*c);
      outArr[7].push('+');
    }
    outArr[7].pop();

    //(a*b) * c
    for(let i = 0; i<c; i++) {
      outArr[8].push(a*b);
      outArr[8].push('+');
    }
    outArr[8].pop();
    

    if(measure > 0) {
      for(let i in outArr) {
        outArr[i] = insertMeasures(outArr[i],measure);
      }
    }

    switch (mode) {
        case 'all':
            return outArr;
        case 'R1':
            return outArr[9];
        default:
            return outArr[5];
    }
}

/**
 * This is a laziness function that I should have written first, then used everywhere.
 * @param {*} inArr 
 * @param {*} measure 
 */
function insertMeasures(inArr, measure) {
  let outArr = [];
  let m = measure;
  for(let i in inArr) {
    let n = inArr[i];
    switch(n) {
      case '+':
        break;
      case '|':
        return inArr; //this does *not* fix your measures.
      case '(':
        break;
      case ')':
        break;
      case '-':
        break;
      case 'N':
        break;
      case 'L':
        break;
      default:
        if(n>m) { //split
          if(m!=0){
            outArr.push(m);
            outArr.push('-');
          }
          outArr.push('|');
          n = n-m;
          while(n>measure) {
            outArr.push(measure);
            outArr.push('-');
            outArr.push('|');
            n = n-measure;
          }
          if(n===0) {
            outArr.pop();
            outArr.pop();
            outArr.push('|');
            m = measure;
          } else {
            outArr.push(n);
            m = measure-n;
          }
        } else { //no split
          outArr.push(n);
          if(n===m) {
            outArr.push('|');
            m = measure;
          } else {
            outArr.push('+');
            m = m-n;
          }
        }
        
        break;
    }
  }

  m = outArr.pop();
  if(m!='|') {
    outArr.push(m);
    outArr.push('|')
  } else {
    outArr.push(m);
  }

  return outArr;
}

/**
 * r_a%b + ra%b + a(a-b)
 * @param {*} a 
 * @param {*} b 
 * @returns balanced polynomial (includes measures)
 */
export function balance(a, b) {
  let arrOut = generator_R(a,b,a);
  arrOut.push.apply(arrOut,generator_R_Underlined(a,b,true));
  for(let i=0; i<(a-b); i++) {
    arrOut.push(a);
    arrOut.push('-');
    arrOut.push('|');
  }
  arrOut.pop();
  arrOut.pop();
  arrOut.push('|');

  return arrOut;
}

/**
 * ra%b + r_a%b
 * @param {*} a 
 * @param {*} b 
 * @returns expanded polynomial (includes measures)
 */
export function expand(a, b) {
  let arrOut = generator_R_Underlined(a,b,true);
  arrOut.push.apply(arrOut,generator_R(a,b,a));

  return arrOut;
}

/**
 * r_a%b + ra%b
 * @param {*} a 
 * @param {*} b 
 * @returns contracted polynomial (includes measures)
 */
export function contract(a, b) {
  let arrOut = generator_R(a,b,a);
  arrOut.push.apply(arrOut,generator_R_Underlined(a,b,true));

  return arrOut;
}
  
function lesser(a,b) {
    if (a>b) {
      return b;
    } else return a;
}

function greater(a,b) {
    if(a>b) {
        return a;
    } else return b;
}
  
  