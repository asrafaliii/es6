// object destructuring

const user = {
  id: 1020,
  name: "Asraf",
  age: 26,
  address: {
    City: "Dhaka",
    Country: "Bangladesh",
  },
};

const { id, name, age } = user;
// console.log(name);

const { address: { City } = "not" } = user;
console.log(City);

// array destructuring
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var code = [1, 2, 3, 4, [10, 20], 5, 6, 7];

// var [a, b] = numbers;
// var [, , , , a, , , b] = numbers;
var [, , , , [a, b]] = code;
// console.log(a, b);
