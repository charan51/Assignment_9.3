//Combine below arrays into single array in order as primes, evens and odds

var evens = [2,4,6,8];
var odds = [1,3,5,7];
var primes = [2,3,5,7,11];

var combineArrays = [...primes, ...evens, ...odds];
console.log(combineArrays);

//Destructuring below object into variables names same the property names

var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New York',
    twitter: '@jamesbond'
};
var {first, last, country, city, twitter} = jamesBond;
// variables names same the property names
console.log(first);
console.log(last);
console.log(country);
console.log(city);
console.log(twitter);


// Destructure below array into variables player1,player2,player3 and player4 respectively

var players = ['paul', 'andy', 'darrell', 'jim'];
var [player1, player2, player3, player4] = players;

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);