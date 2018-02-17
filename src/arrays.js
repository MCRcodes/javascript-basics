export const getNthElement = (index, array) => {
  if (index >= array.length){return array[index % array.length]} else  
  return array[index]// your code here
};

export const arrayToCSVString = (array) => {
  return array.toString()// your code here
};

export const csvStringToArray = (string) => {
  return string.split(',')// your code here
};

export const addToArray = (element, array) => {
  array.push(element)// your code here
};

export const addToArray2 = (element, array) => {
const array2 = array.concat(element) // your code here
return array2
};

export const removeNthElement = (index, array) => {
  return array.splice(index,1) // your code here
};

export const numbersToStrings = (numbers) => {
  return numbers.map(String)// your code here
};

export const uppercaseWordsInArray = (strings) => {
  return strings.map(function(x){ return x.toUpperCase()})// your code here
};

export const reverseWordsInArray = (strings) => {
      return strings.map(x => x.split('').reverse().join(''))
  // your code here
};

export const onlyEven = (numbers) => {
  return numbers.filter(function(num){return num % 2 === 0
  })  
    // your code here
};

export const removeNthElement2 = (index, array) => {
  const array2 = array.slice(0, index)
  const array3 = array.slice((index + 1))
  const array4 = array2.concat(array3)
  return array4  
  // your code here
};

export const elementsStartingWithAVowel = (strings) => {
  return strings.filter(function(num){return num.match(/^[aeiouAEIOU]/)})
   // your code here
};

export const removeSpaces = (string) => {
  return string.replace(/\s/g,'')// your code here
};

export const sumNumbers = (numbers) => {
  return numbers.reduce((total, next) => total + next)// your code here
};

export const sortByLastLetter = (strings) => {
function endComparator(a,b) {
  if (a.slice(-1) < b.slice(-1)) return -1;
  if (a.slice(-1) > b.slice(-1)) return 1;
  return 0}
  return strings.sort(endComparator)// your code here
};
