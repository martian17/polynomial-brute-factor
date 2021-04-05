var args = process.argv.slice(2);
//console.log(args);


var format = function(n){
    if(n < 0){
        return ""+n;
    }else{
        return "+"+n;
    }
};

var formatTerms = function(terms){
    var result = "";
    for(var i = 0; i < terms.length; i++){
        var exponent = terms.length-i-1;
        var term = terms[i];
        var xterm;
        //formatting xterm
        if(exponent === 0){
            xterm = "";
        }else if(exponent === 1){
            xterm = "x";
        }else{
            xterm = "x^"+exponent;
        }
        if(i === 0){
            result += term+xterm;
        }else{
            result += format(term)+xterm;
        }
    }
    return result;
}

var construct = function(terms,k){
    var terms1 = [0];
    for(var i = 0; i < terms.length; i++){
        terms1[i+1] = terms1[i]*k+terms[i];
    }
    //console.log("trying out "+k);
    //console.log(terms1);
    if(terms1[terms.length] === 0){
        console.log("success");
        console.log("(x"+format(-k)+")("+formatTerms(terms1.slice(1,-1))+")");
        return true;
    }
};


var solvePolynomialBrute = function(terms){
    console.log("calculating "+formatTerms(terms)+" ...") 
    
    for(var i = 0; i < 11; i++){
        var result = construct(terms,i);
        if(result)return;
        var result = construct(terms,-i);
        if(result)return;
    }
    console.log("no solution within +- 10");
};

solvePolynomialBrute(args.map(a=>parseFloat(a)));


