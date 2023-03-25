const checkTerm = function(terms,k){
    var terms1 = [0];
    for(var i = 0; i < terms.length; i++){
        terms1[i+1] = terms1[i]*k+terms[i];
    }
    if(terms1[terms.length] === 0){
        return terms1.slice(1,-1); // <- result term
    }
    return false;
};

const riffle = function*(n){
    yield 0;
    for(let i = 1; i < n; i++){
        yield i;
        yield -i;
    }
};

export const solvePolynomial = function(terms){
    if(terms.length === 1 && terms[0] === 1){
        return [];
    }
    for(let i of riffle(100)){
        let terms1;
        if(!(terms1 = checkTerm(terms,i))){
            continue;
        }
        let res = solvePolynomial(terms1);
        res.push([1,-i]);
        return res;
    }
    return [terms];
}

//console.log(solvePolynomial([1,4,4]));

const newarr = function(n){
    const arr = [];
    for(let i = 0; i < n; i++){
        arr.push(0);
    }
    return arr;
};

//reverse
export const mulPoly = function(polys0){
    const polys = polys0.map(v=>v);
    if(polys.length === 1){
        return polys[0];
    }else{
        const left = polys.pop();
        const right = mulPoly(polys);
        const res = newarr(left.length+right.length-1);
        for(let i = 0; i < left.length; i++){
            for(let j = 0; j < right.length; j++){
                res[i+j] += left[i]*right[j];
            }
        }
        return res;
    }
};








const checkTermB = function(terms,k){
    var terms1 = [0n];
    for(var i = 0; i < terms.length; i++){
        terms1[i+1] = terms1[i]*k+terms[i];
    }
    if(terms1[terms.length] === 0n){
        return terms1.slice(1,-1); // <- result term
    }
    return false;
};



export const solvePolynomialB = function(terms){
    if(terms.length === 1 && terms[0] === 1n){
        return [];
    }
    for(let ii of riffle(100)){
        const i = BigInt(ii);
        let terms1;
        if(!(terms1 = checkTermB(terms,i))){
            continue;
        }
        let res = solvePolynomialB(terms1);
        res.push([1n,-i]);
        return res;
    }
    return [terms];
}

//reverse
export const mulPolyB = function(polys0){
    const polys = polys0.map(v=>v);
    if(polys.length === 1){
        return polys[0];
    }else{
        const left = polys.pop();
        const right = mulPolyB(polys);
        const res = newarr(left.length+right.length-1).map(v=>0n);
        for(let i = 0; i < left.length; i++){
            for(let j = 0; j < right.length; j++){
                res[i+j] += left[i]*right[j];
            }
        }
        return res;
    }
};




