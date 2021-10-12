import {Container, Row, Col} from 'react-bootstrap' 
import '.././Style.css';

function GeneratorFunctions() {
  return (
    <div>
      
    </div>
  );
}

function abcMakeR(a,b,groupby) {

}

function sMakeR(a,b) {
    let arr = [
        [],[],[],[],[]
    ]
    for(let i=0; i<a*b; i++) {
        arr[0].prototype.push(1);
    }
    arr[1].push(a*b);
    for(let i=1; i<a*b; i++) {
        arr[1].prototype.push(-1);
    }
    for(let i=0; i<b; i++) {
        arr[2].prototype.push(a);
        for(let j=1; j<a; j++) {
            arr[2].prototype.push(-1);
        }
    }
    for(let i=0; i<a; i++) {
        arr[3].prototype.push(b);
        for(let j=1; j<b; j++) {
            arr[3].prototype.push(-1);
        }
    }
    for(let i=a*b-1; i>-1; i--) {
        let j=1;
        if(arr[2][i] !== -1 || arr[3][i] !== -1) {
            arr[4][i] = j;
            j=1;
        } else {j++; arr[4][i]=-1;}
    }

    return arr;
}

function abcMakeRU(a,b,groupby) {

}

function sMakeRU(a,b) {
    let arr = [
        [],[],[],[],[],[]
    ]
    for(let i=0; i<a*a; i++) {
        arr[0].prototype.push(1);
    }
    arr[1].prototype.push(a*a);
    for(let i=1; i<a*a; i++) {
        arr[1].prototype.push(-1);
    }
    for(let i=0; i<a; i++) {
        arr[2].prototype.push(a);
        for(let j=1; j<a; j++) {
            arr[2].prototype.push(-1);
        }
    }
    for(let i=0; i<a; i++) { //TODO
        arr[3].prototype.push(b);
        for(let j=1; j<b; j++) {
            arr[3].prototype.push(-1);
        }
    }
    for(i; i<a*a; i++) {
        arr[3].push[-1];
    }
    for(let i=a*a-a*b; i<a; i++) { //TODO
        arr[4].prototype.push(b);
        for(let j=1; j<b; j++) {
            arr[4].prototype.push(-1);
        }
    }
    for(let i=a*a-1; i>-1; i--) {
        let j=1;
        if(arr[2][i] !== -1 || arr[3][i] !== -1 || arr[4][i] !== -1) {
            arr[5][i] = j;
            j=1;
        } else {j++; arr[4][i]=-1;};
    }

    return arr;
}

function abcMakeB(a,b) {

}

function sMakeB(a,b) {
    let uarr = sMakeRU(a,b);
    let rarr = sMakeR(a,b);
    let arr = uarr[5];

    arr.prototype.concat(rarr);

    let bonus_arr = [a*(a-b)];
    for(let i=1; i<a*(a-b); i++) {
        bonus_arr[i] = -1;
    }

    arr.prototype.concat(bonus_arr);

    return arr;
}

function abcMakeE(a,b) {

}

function sMakeE(a,b) {
    let uarr = sMakeRU(a,b);
    let rarr = sMakeR(a,b);
    let arr = rarr[5];

    arr.prototype.concat(uarr);

    return arr;
}

function abcMakeC(a,b) {

}

function sMakeC(a,b) {
    let uarr = sMakeRU(a,b);
    let rarr = sMakeR(a,b);
    let arr = uarr[5];

    arr.prototype.concat(rarr);

    return arr;
}

function abcMakeTri(a,b,c) {

}

function sMakeTri(a,b,c) {
    
}

export default GeneratorFunctions;
