// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function removeFirst3(a){
  return a.slice(3)
}

removeFirst3([1,2,3,4])//[4]
removeFirst3([5,4,3,2,1,0])//[2,1,0]
removeFirst3([99,1,1])//[]

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function extractLast3(a){
  return a.slice(-3)
}

extractLast3([1,2,3,4])//[2,3,4]
extractLast3([5,4,3,2,1,0])//[2,1,0]
extractLast3([99,1,1])//[99,1,1]

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function extractFirst3(a) {
  return a.slice(0,3)
}

extractFirst3([1,2,3,4])//[1,2,3]
extractFirst3([5,4,3,2,1,0])//[5,4,3]
extractFirst3([99,1,1])//[99,1,1]

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function extractLastNElements(a, n){
  return a.slice(a.length-n) 
}

extractLastNElements([1, 2, 3, 4, 5], 2)//[ 4, 5 ]
extractLastNElements([1, 2, 3], 6)//[ 1, 2, 3 ]
extractLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)//[ 6, 7, 8 ]

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function filterB (a, b){
  return a.filter((element) =>{
    return element !== b
  })
}

filterB([1,2,3], 2)//[1, 3]
filterB([1,2,'2'], '2')//[1, 2]
filterB([false,'2',1], false)//['2', 1]
filterB([1,2,'2',1], 1)//[2, '2']

// Write a function that takes an array (a) as argument
// Return the number of elements in a
function arrLength(a){
  return a.length
}

arrLength([1,2,2,4])//4
arrLength([9,9,9])//3
arrLength([4,3,2,1,0])//5

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function countNegativeNumbers(a){
  return a.reduce((acc, num)=>{
    if(num<0){
      acc++
    }
    return acc
  },0)
}

countNegativeNumbers([1,-2,2,-4])//2
countNegativeNumbers([0,9,1])//0
countNegativeNumbers([4,-3,2,1,0])//1

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function sortNumbersDesc(arr) {
  return arr.sort((a,b) => {
    return b-a
  })
}

sortNumbersDesc([1,3,2])//[3,2,1]
sortNumbersDesc([4,2,3,1])//[4,3,2,1]

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function sortAlphaAsc(arr) {
return arr.sort()
}

sortAlphaAsc(['b', 'c', 'd', 'a'])//['a', 'b', 'c', 'd']
sortAlphaAsc(['z', 'c', 'd', 'a', 'y', 'a', 'w'])//['a', 'a', 'c', 'd', 'w', 'y', 'z']














