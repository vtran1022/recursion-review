// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    return stringifyObject(obj);
  }
};

var stringifyArray = function(array) {
  var resultArray = [];

  if (array.length === 0) {
    return '[]';
  }

  for (var i = 0; i < array.length; i++) {
    var currentEle = array[i];
    if (Array.isArray(currentEle)) {
      resultArray.push(stringifyArray(currentEle));
    } else if (typeof obj === 'object' && !Array.isArray(obj)) {
      resultArray.push(stringifyObject(currentEle));
    } else {
      resultArray.push(stringifyJSON(currentEle));
    }
  }
  return '[' + resultArray.join(',') + ']';
};

var stringifyObject = function(object) {
  var resultArr = [];
  var objKeys = Object.keys(object);

  if (objKeys === 0) {
    return '{}';
  }

  // if value is a function or undefined, delete key from objKeys

  for (var j = 0; j < objKeys.length; j++) {
    var currentKey = objKeys[j];
    var currentValue = object[currentKey];
    if (typeof currentValue === 'function' || currentValue === undefined) {
      delete currentKey;
    } else if (Array.isArray(currentValue)) {
      resultArr.push('"' + currentKey + '":' + stringifyArray(currentValue));
    } else if (typeof obj === 'object' && !Array.isArray(obj)) {
      resultArr.push('"' + currentKey + '":' + stringifyObject(currentValue));
    } else {
      resultArr.push('"' + currentKey + '":' + stringifyJSON(currentValue));
    }
  }
  return '{' + resultArr.join(',') + '}';
};



/* values:
- integar - toString method
- null - 'null'
- true/false - 'true' / 'false'
- string - 'hello world' -> "hello world" - input string, output as string with double quotes
- array - created helper function, stringifyArray
  - create result varilable
  - iterate over the inputted array
  - check each element and see what the value is, use recursive func as needed
    - string
    - array
    - object
    - push any other values to the result array
  - return '[' + result.join(',') + ']'


- object - {} - created a helper function, stringifyObject
  - create result variable
  - create variable objkeys - Object.keys(input)
  - edge case: if objkeys is empty then return {};
  - iterating over the objkeys
    - create variable currentKey
    - create variable for the currentValue
    - check what element is, use recursive func as needed
      - base: push to result variable- '{"' + currentKey + '"":' + currentValue + '}'
      - use recursion on CurrentValue
      - if value is a function or undefined, delete key from objKeys

  - return '{' + result.join(',') + '}'

*/