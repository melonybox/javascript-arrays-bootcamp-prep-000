var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  var array = [element, ...array]
=======
  var array = array
  array = [element, ...array]
>>>>>>> e13469b48b7ff413328442babfd9dfe082a5121a
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
<<<<<<< HEAD
  var array = [...array, element]
=======
  var array = array
  array = [...array, element]
>>>>>>> e13469b48b7ff413328442babfd9dfe082a5121a
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var array = array.slice(0, array.length-1)
  return array
}
=======
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function
>>>>>>> e13469b48b7ff413328442babfd9dfe082a5121a
