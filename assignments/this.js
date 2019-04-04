/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding occurs when this is used outside of an Object. It points to the browser.
 * 2. Implicit Binding will point to reference inside an Object.
 * 3. New Binding is used to point to a constructor from a new instance if that Object.
 * 4. Explicit Binding is used for a function to point to an Object using .call or .apply.
 *
 * write out a code example of each explanation above
 */

// Principle 1
function windowB() {
  console.log(this);
}

// code example for Window Binding

// Principle 2
const David = {
  "favColor": "purple",
  "favFood": "Ramen",
  "numPets": 2,

  "aboutMe": function () {
    return `My favorite color is ${this.favColor}, I love to eat ${this.favFood} and I have ${this.numPets} pets`;
  }
}
// console.log(testObj.aboutMe());
// code example for Implicit Binding

// Principle 3
function TestConstructor(name, favColor, favFood, numPets) {
  this.name = name;
  this.favColor = favColor;
  this.favFood = favFood;
  this.numPets = numPets;
}

const angie = new TestConstructor("Angie", "pink", "soup", 1);

// console.log(angie)
// code example for New Binding

// Principle 4
function whatAngieLikes() {
  return `Hello, my name is ${this.name}, my favorite color is ${this.favColor}, I like to eat ${this.favFood} and I have ${this.numPets} pet.`;
}

console.log(whatAngieLikes.call(angie));
// code example for Explicit Binding