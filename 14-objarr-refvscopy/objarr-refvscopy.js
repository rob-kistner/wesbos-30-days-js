const sep = (reps = 50) => console.log(' -'.repeat(reps));
const f = (s) => console.log(s);

console.clear();

// ----------------------------------------
f('start with strings, numbers and booleans')

let age = 100;
let age2 = age;
console.log(age, age2);
sep();

// ----------------------------------------
f('change a number value')

age = 200;
console.log(age, age2);
sep();

// ----------------------------------------
f('setting strings')

let name = 'Wes';
let name2 = name;
console.log(name, name2);
sep();

// ----------------------------------------
f('change a string value')

name = 'wesley';
console.log(name, name2);
sep();

// ----------------------------------------
f('Let\'s say we have an array');

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);

// ----------------------------------------
f('and we want to make a copy of it.');

const team = players;
console.log(players, team);
sep();

// You might think we can just do something like this:
team[3] = 'Lux';

// ----------------------------------------
f('what happens when we update that array?');

console.log(players, team);
sep();

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// ----------------------------------------
f('So, how do we fix this? We take a copy instead, with slice()');

const team2 = players.slice();
console.log(players, team2);

f('change a value...');

team2[3] = 'Poppy';
console.log(players, team2);
sep();

// ----------------------------------------
f('or you could use concat like [].concat(players)');

const team3 = [].concat(players);
console.log(players, team3);

f('change a value...');

team3[3] = 'Mordacai';
console.log(players, team3);
sep();

// ----------------------------------------
f('or use es6 spread...');

const team4 = [...players];
console.log(players, team4);

f('change a value...');

team4[3] = 'Mikael';
console.log(players, team4);
sep();

// ----------------------------------------
f('You could also used Array.from(players)');

const team5 = Array.from(players);
console.log(players, team5);

f('change a value...');

team5[3] = 'Noopie';
console.log(players, team5);
sep();


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};


// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 12});
console.log(person)
console.log(cap2)
sep();

// We will hopefully soon see the object ...spread
const cap3 = {...person};
console.log(cap3);
sep();

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

// ----------------------------------------
f('Creating a new object with a sub-object');
console.log(wes);
sep();

// ----------------------------------------
f('Object.assign({},wes) will only clone 1 level deep. Notice when we try to assign to twitter on the clone...');

const dev = Object.assign({}, wes);
dev.social.twitter = '@coolman';
console.log('dev:', dev);
console.log('wes:', wes);
sep();

// ----------------------------------------
f('Note that spread doesn\'t work...hmmm....')
const dev3 = {...wes};
dev3.social.twitter = '@whatnow';
console.log(wes);
console.log(dev3);
sep();

// ----------------------------------------
f('Not recommended but you could used a JSON.parse, JSON.stringify dance. This works and unfortunately is the only current one-line method...')
const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@notsocoolman';
console.log(wes);
console.log(dev2);
sep();

// ----------------------------------------
console.log('Dunno, maybe lodash??')
