// Code your solution in this file
function findMatching(arr, str) {

  x = arr.filter(function (i) {
    return i.toLowerCase() == str.toLowerCase();
  })
  return x
}

function fuzzyMatch(arr, str) {
  x = arr.filter(function (i) {
    return i.toLowerCase().startsWith(str.toLowerCase());
  })
  return x
}

function matchName(arr, str) {
  x = arr.filter(function (i) {
    return i.name.toLowerCase() === str.toLowerCase();
  })
  return x
}
