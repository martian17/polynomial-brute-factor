import {solvePolynomial,mulPoly,solvePolynomialB,mulPolyB} from "./index.mjs";

const terms2 = [];
for(let i = 1n; i <= 20n; i++){
    terms2.push([1n,-i]);
}
console.log(mulPolyB(terms2));
console.log(solvePolynomialB(mulPolyB(terms2)));
