// ********* Values and Variables Assignment *********
const country = 'United States of America';
const continent = 'North America';
let population = 340;

console.log(country);
console.log(continent);
console.log(population);

// ********* Data Type *********
// ********* let, const, and var *********

const isIsland = false;
let language;
language = 'English';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof lagnauge);


// ********* Basic Operators *********
let halfPopulation = population / 2;
let averagePopulation = 33;

halfPopulation ++;
console.log(halfPopulation);

let finlandPopulation = 6;
console.log(halfPopulation > finlandPopulation);

console.log(halfPopulation < averagePopulation )

const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;

console.log(description1);


// ********* Strings and Template Literals *********
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2)