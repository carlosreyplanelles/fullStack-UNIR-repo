// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function getCountry(obj){
  return obj.country
}

getCountry({  continent: 'Asia',  country: 'Japan'})//'Japan'
getCountry({  country: 'Sweden',  continent: 'Europe'})//'Sweden'

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function getProp2(obj) {
  return obj['prop-2']
}

getProp2({  one: 1,  'prop-2': 2})//2
getProp2({  'prop-2': 'two',  prop: 'test'})//'two'

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
function createObject(a) {
  return {key: a}
}

createObject('a')//{key:'a'}
createObject('z')//{key:'z'}
createObject('b')//{key:'b'}

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
  return {[a]:b}
}

myFunction('a','b')//{a:'b'}
myFunction('z','x')//{z:'x'}
myFunction('b','w')//{b:'w'}




















