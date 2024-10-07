// Given an Input string s, revere the order of words
// Input: "The Sky is blue", Output: "blue is sky the"
// Input: "  Hello World  ", Output: "World Hello"
// Input: "a good  example", Output: "example good a"

// function reverseWords(str){
//     let arrStr = str.split(" ");
//     let newStr;
//     let Output = [];
//     for (let i = arrStr.length - 1; i >= 0; i--) {
//         Output.push(arrStr[i]) 
//         newStr = Output.join(' ')
//     }
//     return newStr   
// }

// let str = "The Sky is blue"
// console.log(reverseWords(str))

// using stack
const reverseWords = (s) => {
    const splitS = s.split(" ")
    const stack = []

    for (let i of splitS){
        stack.push(i)
    }
    let finalS = "";
    while(stack.length){
        const current = stack.pop();
        if(current){
            finalS += " " + current 
        } 
    }
    return finalS.trim()
}

// Time Complexity => O(n)
// Space Complexity => O(n)

const str = "The Sky is blue";
// console.log(reverseWords(str))


// Valid Parenthesis
// The opening bracket must be closed by the same closing bracket
// Input = '()' ===> Output = true
// Input = '()[]{}' ===> Output = true
// Input = '(]' ===> Output = false

const isValid = (s) =>{
    const stack = []
    for (let i = 0; i < s.length; i++) {
       const char = s[i]
       if(char === '(' || char === "{" || char ==="["){
        stack.push(char)
       }else if(char === ')' || char === "}" || char ==="]"){
            if(isEmpty(stack)){
                return false;
            }

            const top = stack.pop()
            if((char===")" && top !=="(")||
                (char === "]" && top !=="[") ||
                (char === "}" && top !=="{")
        ){
            return false
        }
       }
        
    }
    return isEmpty(stack)
}
// Time Complexity = O(n)
// Space Complexity = O(n)

function isEmpty(stack){
    return stack.length === 0
}

const string = '(]'
console.log(isValid(string))