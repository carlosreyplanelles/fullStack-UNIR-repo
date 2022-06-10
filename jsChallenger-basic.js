// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function multDivComp(a, b){
  let res;
  if (a<b){
    res= a/b
  } else {
    res= a*b
  }
  return res
}
multDivComp(10, 100) //0.1
multDivComp(90, 45)//4050
multDivComp(8, 20)//0.4
multDivComp(2, 0.5) //1

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function concatenateStrings(a, b) {
  let res="";
  if (a.includes(b)){
    res = b+a
  } else {
    res = a+b
  }
  return res
}

concatenateStrings('cheese', 'cake') //'cheesecake'
concatenateStrings('lips', 's') //'slips'
concatenateStrings('Java', 'script')//'Javascript'
concatenateStrings(' think, therefore I am', 'I')//'I think, therefore I am'

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundNumber(a){
return Number(a.toFixed(2))
}

roundNumber(2.12397) //2.12
roundNumber(3.136) //3.14
roundNumber(1.12397) //1.12
roundNumber(26.1379) //26.14

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function splitNumber(a){
  return a.toString().split('').map(Number)
}

splitNumber(10) //[ 1, 0 ]
splitNumber(931) //[9,3,1]
splitNumber(193278) //[1,9,3,2,7,8]

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function concatWords (a, b){
  let firstWord = a.replace('%', '');
  firstWord = firstWord.split('');
  firstWord[0] = firstWord[0].toUpperCase()
  firstWord = firstWord.join("")
  let lastWord = b.replace('%', '');
  let res=""
  lastWord = lastWord.split("").reverse().join("")
  res = firstWord+lastWord;
      
return res
}

concatWords('java', 'tpi%rcs')//'Javascript'
concatWords('c%ountry', 'edis')//'Countryside'
concatWords('down', 'nw%ot')//'Downtown'

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

//RECURSIVE SOLUTION
function primeNumbersRecursive(a){
 const isPrime = (num)=>{
   let prime=true
   for (let i=2; i < num/2 && prime; i++){
     if(num%i === 0){
       prime = false
     }
   }
   return prime
 } 
 if(!isPrime(a)){
   primeNumbers(a+1)
 } else {
    return a
  }
}

function primeNumbers(a){
const isPrime = (num)=>{
   let prime=true
   for (let i=2; i < num/2 && prime; i++){
     if(num%i === 0){
       prime = false
     }
   }
   return prime
 } 
let inputNumber = a
while(!isPrime(inputNumber)) {
inputNumber++
  }
return inputNumber
}

primeNumbersRecursive(10)//41
primeNumbersRecursive(7)//7
primeNumbersRecursive(115)//127
primeNumbersRecursive(2000)//2003


// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

//WITH AUX FUNCTION
function divisibleNumberAux(x, y){
  const isDivisible = (number, divisor) =>{
    let divisible = false
    if(number%divisor === 0){
      divisible = true;
    }
    return divisible
  }
  let result = x
  while(!isDivisible(result,y)) result++
  return result
}

//WITHOUT AUX FUNCTION
function divisibleNumber(x, y){
  while (x%y!=0) x++
  return x
}


divisibleNumberAux(1, 23)//23
divisibleNumberAux(23, 23)//23
divisibleNumberAux(7, 3)//9
divisibleNumberAux(-5, 7)//0


// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function concat3( a, b ) {
  let loops=0
  let res=''
  
  for(let i=a.length-1; i>=0;i--){
    res=a.charAt(i) + res;
    if(loops%3 === 2){
      res = b + res
    }
    loops++
  }
return res;
}

concat3('1234567','.')//'1.234.567'
concat3('abcde','$')//'ab$cde'
concat3('zxyzxyzxyzxyzxyz','w')//'zwxyzwxyzwxyzwxyzwxyz'

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function decipherWord(str) {
  let word = '';
  for(let i=0; i<str.length; i++){
    word = word + String.fromCharCode(str.charCodeAt(i) + 1)
  }
  return word;
}

decipherWord('bnchmf')//'coding'
decipherWord('bgddrd')//'cheese'
decipherWord('sdrshmf')//'testing'











