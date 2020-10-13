/**
 * Saluer en disant le nom et la ville
 * @param {*} personName 
 * @param {*} city 
 */
function greeting(personName, city) {
  console.log(`Hello, I am ${personName} from ${city}`);
}

function eatSomething(food) {
  console.log(`I am eating ${food}!`);
}

greeting('John', 'New York');
greeting('Mark', 'Berlin');
greeting('Carl', 'London');
greeting('Diogo', 'Lisbon');

eatSomething('fish&chips');

const myName = 'Joe'
const myCity = 'Toulouse'
greeting(myName, myCity);

const names = ['Miguel', 'Christophe', 'Benoît'];
const cities = ['Saint-Louis', 'Bouillargues', 'Toulouse'];

for (let i = 0 ; i < 3 ; i++) {
  greeting(
    names[i], cities[i]
  )
}