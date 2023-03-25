import {solvePolynomialB,mulPoly} from "./index.mjs";

const val = process.argv[2];
//const terms = val.match(/[+-]?([0-9]+)?([0-9]+\*)?(x(\^\([0-9]+\))?)?/g);
const delims = val.split(/([+-])/g);
let terms = [];
let sign = "+";
for(let val of delims){
    if(val === "-" || val === "+"){
        sign = val;
    }else{
        terms.push(sign+val); 
    }
}

terms = terms.map(t=>{
   if(t[t.length-1] === "x"){
       return t+"^(1)";
   }else if(t[t.length-1].match(/[0-9]/)){
       return t+"*x^(0)";
   }else{
       return t;
   }
}).map(t=>{
    const sign = t.match(/^[+-]/)[0];
    const n = (t.match(/[0-9]+\*/)||["1*"])[0].slice(0,-1);
    const e = t.match(/\([0-9]+\)/)[0].slice(1,-1);
    //return [t,sign,n,e];
    return [BigInt(sign+n),BigInt(e)];
}).map(([v,_])=>v);


const res = solvePolynomialB(terms);
console.log(res);
console.log(res.map(r=>"x="+(-r[1])).join(" "));
