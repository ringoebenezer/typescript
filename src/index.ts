let fname: string = "ringo";
let num: number = 123;
let myVar: any = "anything";

enum cardinalPoints {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

let car: { brand: string; year?: number; isAvailable: boolean } = {
  brand: "BMW",
  isAvailable: true,
};

// Types
type strings = string;

const lname: strings = "ringo";

type newCar = {
  brand: string;
  year?: number;
  isAvailable: boolean;
};

const anotherCar: newCar = {
  brand: "BENZ",
  year: 2020,
  isAvailable: true,
};

// Interces: Interfaces are similar to types, except they only apply to object types
interface Rectangle {
  height: number;
  length: number;
}

const rectangle: Rectangle = {
  height: 20,
  length: 20,
};

// Extending Interfaces
/**
 * Extending interfaces means you're creating a new interface with the same properties as the original,plus something new
 */

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 10,
  length: 10,
  color: "blue",
};

// Union Types
/**
 * Union types are  used when a value can be more than a single type
 */

function printStatusCode(code: string | number) {
  console.log(`Your status code is ${code}`);
}

// Typescript functions
/**
 * In typescript you just specify the return type of a function, if you don't typescript will attempt to infer it through the types of the variables or expressions returned
 */

function getNumber(): number {
  return 12;
}

function returnsNothing(): void {
  console.log("hello");
}

// Parameters: If no parameter type is defined, Typescript will default to using any.
function product(a: number, b: number) {
  return a * b;
}

function joinWords(a: string, b: string): string {
  return a + b;
}

// By default, typescript will assume all parameters are required, but they can be explicitly marked as optional
function add(a: number, b: number, c: number, d?: number): number {
  return a + b + (c || 0);
}

//  default parameters :For parameters with default values, the default value goes after the type annotation:
function Addition(a: number, b: number, c: number = 10, d?: number): number {
  return a + b + c + (d || 0);
}

interface Division {
  dividend: number;
  divisor: number;
}

function divide({ dividend, divisor }: Division) {
  return dividend / divisor;
}
// console.log(divide({ dividend: 12, divisor: 14 }));

// Rest Parameters: Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addNumbers(a: number, b: number, ...otherNums: number[]) {
  return a + b + otherNums.reduce((p, c) => p + c, 0);
}

// Casting
/**
 * Casting is the process of overriding a type i.e. change the type of the given variable.
 */

let x: unknown = "hello";
// console.log((x as string).length); // OR: console.log((<string>x).length)

// Classes
/**
 * The members of a class (properties & methods) are typed using type annotations, similar to variables.
 */

class Person {
  fname: string = "";
  //   constructor() {
  //     this.fname = "";
  //   }
}

const person = new Person();
person.fname = "Kane";
