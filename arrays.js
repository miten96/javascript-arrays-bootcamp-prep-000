var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
<<<<<<< HEAD
   array.unshift(element)
   return array
=======
  return array.unshift(element)
>>>>>>> 8cc8364280b706ffef1e28afe84a195042193591
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
<<<<<<< HEAD
 array.push(element)
 return array;
=======
  return chocolateBars = [...array, element]
>>>>>>> 8cc8364280b706ffef1e28afe84a195042193591
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
<<<<<<< HEAD
   array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array = array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
  return array
=======
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop
>>>>>>> 8cc8364280b706ffef1e28afe84a195042193591
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
