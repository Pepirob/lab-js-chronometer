class Chronometer {
  constructor() {
    // ... your code goes here
  }

  start(printTimeCallback) {
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// array of cities:
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const capitalizedCities = cities.map(
  (city) => city.slice(0, 1).toUpperCase() + city.slice(1)
);
console.log(capitalizedCities);

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const finalGrade = students.map((student) => {
  const projects = ((student.firstProject + student.secondProject) / 2) * 0.4;
  const exam = student.finalExam * 0.6;

  return { name: student.name, finalGrade: projects + exam };
});

console.log(finalGrade);

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

// your code:
const averageCalories =
  menu.reduce((acc, menu) => acc + menu.calories, 0) / menu.length;

console.log(averageCalories); // 278

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacturer: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really useful, strongly recommended",
      rate: 4,
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 },
  ],
};

const avrgRating =
  product.reviews.reduce((acc, review) => acc + review.rate, 0) /
  product.reviews.length;

console.log(avrgRating);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const ofDrinkingAge = people.filter((person) => person.age >= 21);

console.log(ofDrinkingAge);
// [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Nettie', age: 21 }
// ]
const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const poolFilter = places.filter((place) => place.pool);

console.log(poolFilter);
// [
//   { title: 'Awesome Suite 20\' away from la Rambla',
//     price: 200,
//     type: 'Private Room',
//     pool: true,
//     garage: false },
//   { title: 'Private apartment',
//     price: 190,
//     type: 'Entire Place',
//     pool: true,
//     garage: true },
//   { title: 'Comfortable place in Barcelona´s center',
//     price: 390,
//     type: 'Entire place',
//     pool: true,
//     garage: true },
//   { title: 'Great house next to Camp Nou',
//     price: 140,
//     type: 'Entire place',
//     pool: true,
//     garage: true },
//   { title: 'Apartment 10\' from la Rambla',
//     price: 930,
//     type: 'Entire place',
//     pool: true,
//     garage: true }
// ]

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

const result = numbers.filter((number) => number % 2 !== 0 && number > 42);

console.log(result);
// [ 123, 99, 73, 45 ]
