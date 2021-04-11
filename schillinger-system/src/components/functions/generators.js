/**
   * turns a schillinger polynomial into an abc string
   * @param {...string} inArr - 
   * @param {...string} melodyFeed - 
   * @returns - a new string array
   */
 export function toABC(inArr, melodyFeed) {
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
                    if(breakdown!=0) {outArr.push('-');}
                  } else if(breakdown>3) {
                    outArr.push(4);
                    breakdown-=4;
                    if(breakdown!=0) {outArr.push('-');}
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
                        if(breakdown!=0) {outArr.push('-');}
                      } else if(breakdown>3) {
                        outArr.push(4);
                        breakdown-=4;
                        if(breakdown!=0) {outArr.push('-');}
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
 * Generates R a+b, outputs in the form of a schillinger polynomial (a+b+c...etc)
 * @param {number} a 
 * @param {number} b 
 * @param {number} measure - if you want measures, put this in. If blank there will be no measures. Ties are marked with parantheses.
 * @param {string} mode - if "all" changes output to 2D array with all components of generator
 * @returns outArr - character array of R
 */
 export function generator_R(a, b, measure, mode) {
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
        //outArr[i].push('|');
      }
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
            if(countMeasureA != 0) {
                outArr[2].push(countMeasureA);
            } else {
                outArr[2].pop();
                outArr[2].pop();
                outArr[2].push('|');
            }
            //outArr[2].push(')');
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
            if(countMeasureB != 0) {
                outArr[3].push(countMeasureB);
            } else {
                outArr[3].pop();
                outArr[3].pop();
                outArr[3].push('|');
            }
            
            //outArr[3].push(')');
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
      outArr[1].pop();
      //if(measure!=a*b) {outArr[1].push(')');}
      outArr[1].push('|');
      outArr[4].push(lesser(a,b));
      outArr[4].push('|');

      for(let i in outArr) {
          let n = outArr[i].pop();

          if(n != '|') {
            if(n == '+') {
            } else {
              outArr[i].push(n);
              outArr[i].push('|');
            }
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

export function generator_R_Underlined(a, b, mode) {
    
}

  
function lesser(a,b) {
    if (a>b) {
      return b;
    } else return a;
  }
  
  