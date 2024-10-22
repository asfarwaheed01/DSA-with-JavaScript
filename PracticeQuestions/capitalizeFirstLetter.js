// Capitalize first letters of the words in the string


function capitalize(s){
    const newStr = s.split(' ');
    const output = []
    for(let i = 0; i<newStr.length; i++){
        output.push(newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1))
    }
    return output;
}

// OR

const capital = str =>{
    return str.toLowerCase().split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalize("hello world"))
console.log(capital("hello world"))