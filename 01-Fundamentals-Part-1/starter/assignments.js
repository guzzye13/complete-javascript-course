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


// ********* Type Conversion and Coercion *********
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617 (17 is a string)
console.log('19' - '13' + 17); // -> 23 (17 is a number)
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> (5 and 6 are numbers) 114 9-4-2 = 3 ---> 1143


// ********* Equality Operators: == vs === *********
const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
console.log(numNeighbors);
console.log(typeof numNeighbors);
if(numNeighbors === 1){
    console.log('Only 1 border!')
} else if (numNeighbors > 1){
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}


// ********* Switch statement *********
switch(language){
    case 'Chinese':
    case 'Madarin':
        console.log('MOST number of native speaker!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        'Great language too :D';
}
