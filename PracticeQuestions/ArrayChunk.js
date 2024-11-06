const arrayChunks = (array, n) => {
    const output = [];
    for(let i = 0; i < array.length; i+=n){
       output.push(array.slice(i,i+n));
    }
    return output;
}

console.log(arrayChunks([1,2,3,4,5],5));




