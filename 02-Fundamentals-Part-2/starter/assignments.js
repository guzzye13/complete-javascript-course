//**** Functions  */
function describeCountry(country, population, capitalCity) {
    const message = `${country} has ${population} million people and its capital city is ${capitalCity}.\n`;
    return message;
}
const unitedStates = describeCountry('USA', '10', 'Washington DC');
const finland = describeCountry('Finland', 6, 'Helsinki');
const test = describeCountry('Water', 4, 'Bottle City');
console.log(unitedStates, finland, test);


/*** Functions vs Expressions */
// function
function percentageOfWorld1(population, ){
    return (population / 7900) * 100;
}
// expression
const percentOfWorld2 =function(population){
    return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const mexico = percentageOfWorld1(1000);
const canada = percentageOfWorld1(900);
console.log(china, mexico, canada);


const china2 = percentOfWorld2(1441)
const mexico2 =percentOfWorld2(1000)
const canada2 =percentOfWorld2(900)

console.log(china2, mexico2, canada2);

/*** Arrow Functions */
const percentOfWorld3 = population => (population/7900) * 100;
const mexico3 = percentOfWorld3(1000);
console.log(mexico3);
