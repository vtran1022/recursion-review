// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   // create result variable
//   var results = [];

//   // create an inner function with two pera element and results
//   var util = function(element, results) {
//     // boolean
//     var bool = false;
//       // check to see if the element has a classlist
//       for (var i in element.classList){
//         // if classList exists, check if classname is in it
//         if(element.classList[i] === className){
//           bool = true;
//           break;
//         }
//         // if it exists, push it into the result variable
//         if (bool) {
//           results.push(element);
//         }
//       }
//     // look if there are childNodes
//         // iterate over the element childNodes and check the same boolean (use recursion)
//     for( var i in element.childNodes){
//       util(element.childNodes[i], results);
//     }
//   }
//   // call the inner function
//   util(document.body, results);
//   // return the result variable
//   return results;
// };

var getElementsByClassName = function(className) {
  var elementArray = [];
  var docBody = document.body;

  var innerFunction = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementArray.push(element);
    }

    if (element.hasChildNodes()) {
      var elementChild = element.childNodes;
      for (var i = 0; i < elementChild.length; i ++) {
        innerFunction(elementChild[i]);
      }
    }
  };
  innerFunction(docBody);

  return elementArray;
};