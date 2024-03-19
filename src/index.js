var fname = "ringo";
var num = 123;
var myVar = "anything";
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["North"] = "North";
    cardinalPoints["East"] = "East";
    cardinalPoints["South"] = "South";
    cardinalPoints["West"] = "West";
})(cardinalPoints || (cardinalPoints = {}));
var car = {
    brand: "BMW",
    isAvailable: true,
};
var lname = "ringo";
var anotherCar = {
    brand: "BENZ",
    year: 2020,
    isAvailable: true,
};
var rectangle = {
    height: 20,
    length: 20,
};
var coloredRectangle = {
    height: 10,
    length: 10,
    color: "blue",
};
// Union Types
/**
 * Union types are  used when a value can be more than a single type
 */
function printStatusCode(code) {
    console.log("Your status code is ".concat(code));
}
// Typescript functions
/**
 * In typescript you just specify the return type of a function, if you don't typescript will attempt to infer it through the types of the variables or expressions returned
 */
function getNumber() {
    return 12;
}
function returnsNothing() {
    console.log("hello");
}
// Parameters: If no parameter type is defined, Typescript will default to using any.
function product(a, b) {
    return a * b;
}
function joinWords(a, b) {
    return a + b;
}
// By default, typescript will assume all parameters are required, but they can be explicitly marked as optional
function add(a, b, c, d) {
    return a + b + (c || 0);
}
//  default parameters :For parameters with default values, the default value goes after the type annotation:
function Addition(a, b, c, d) {
    if (c === void 0) { c = 10; }
    return a + b + c + (d || 0);
}
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
// console.log(divide({ dividend: 12, divisor: 14 }));
// Rest Parameters: Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addNumbers(a, b) {
    var otherNums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherNums[_i - 2] = arguments[_i];
    }
    return a + b + otherNums.reduce(function (p, c) { return p + c; }, 0);
}
// Casting
/**
 * Casting is the process of overriding a type i.e. change the type of the given variable.
 */
var x = "hello";
// console.log((x as string).length); // OR: console.log((<string>x).length)
// Classes
/**
 * The members of a class (properties & methods) are typed using type annotations, similar to variables.
 */
var Person = /** @class */ (function () {
    function Person() {
        this.fname = "";
        //   constructor() {
        //     this.fname = "";
        //   }
    }
    return Person;
}());
var person = new Person();
person.fname = "Kane";
