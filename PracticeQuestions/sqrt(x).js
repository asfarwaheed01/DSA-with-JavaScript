// leet code 69
// Find square root of a number without using any builtin function.

var squareRoot = function(num){
    if(num<2){
        return num;
    }
    let x = num;
    let output = (x+(num/x))/2
    
    while(Math.abs(x-output)>= 0.00001){
        x = output;
        output =  (x+(num/x))/2
    }
    return Math.floor(output);
}

console.log(squareRoot(8));