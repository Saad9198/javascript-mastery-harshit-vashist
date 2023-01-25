// rule for naming variables

// you cannot start with number

// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1) // print 2 in console

// var 1value = 2;
// console.log(1value); (print in Console) Uncaught SyntaxError: Invalid or unexpected token (at 03.js:12:5)

// you can use only underscore _ or dollar symbol
// first_name (valid)
// _firsname (valid)

var Error = "% & * # @ If they Are use in declartion Of Variable isn't working But we can use only $ And _ in declartion of varibale Example Below";
console.log(Error);

var first_name = "In between _(underscore)  variable name is working"// Result Is working

console.log(first_name);

var _firstname = "_(underscore) In start variable name is also working"// Result Is working

console.log(_firstname);

// first$name (valid)
// $firstname (valid)
var first$name = "$(dollar) In between variable name is working" // Result Is working

console.log(first$name);

var $firstname = "$(dollar) In start variable name is also working" // Result Is working

console.log($firstname);

// var %Name = " % Is not working"
// console.log(%Name); print In console Uncaught SyntaxError: Unexpected token '%' (at 03.js:40:5)

// var !Name = " ! Is not working"
// console.log(!Name); print In console Uncaught SyntaxError: Unexpected token '!' (at 03.js:43:5)

// var @Name = " @ Is not working"
// console.log(@Name); print In console Uncaught SyntaxError: Unexpected token '@' (at 03.js:46:5)

//you cannot use spaces

//first name (invalid)
// var first name = " first name Is not working"
// console.log(first name); print In console Uncaught SyntaxError: Unexpected token 'first name' (at 03.js:52:5)

var snake_case = "I am snake_case Mostly Developer Use snake_case and it is valid to use _ In declartion Of variable" 
console.log(snake_case);
var camelCase = "I am camelCase Mostly Developer Use camelCase and it is valid to use Capital Letter between declartion Of variable" 
console.log(camelCase);
// convention (good Practice)
// start with small letter and use camelCase