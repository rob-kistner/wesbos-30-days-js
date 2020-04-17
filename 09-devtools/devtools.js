const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
const myvar1 = '🎱';
console.log('Hello, I am an %s String!', myvar1); // injecting a var
console.log(`Hello, I am an ${myvar1} String!`); // es6 version

// Styled: the %c turns on formatting
console.log('%cI am some great text', 'font-size: 24px; background-color: cyan; border-radius: 50px; padding: 0.25rem 2rem; margin: 1rem 0;');

// warning!
console.warn('Oh, noooooo!');

// Error :|
console.error('Oh, dammmmm!');

// Info
console.info('Crocodiles eat 3-4 people a year.');

// assert
// this won't throw anything because it's true
console.assert(1 === 1, 'That is wrong!');
// but this is not so it logs
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'p tags do not include the \'ouch\' class.');

// clearing: this will clear the console whenever called
// console.clear();

// Viewing DOM Elements
// this shows everything about the specified element
console.dir(document.querySelector('#breakdown'));

// Grouping together
dogs.forEach(dog => {
  // this collapses the group,
  // just using console.group will show them opened
  console.groupCollapsed(`${dog.name}`);
  console.log(`This dog's name is: ${dog.name}`);
  console.log(`and he is ${dog.age} years old.`)
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');

// table
// display data in tabular format
console.table(dogs);

// timing
// pass the same string passed into the first console.time into
// console.timeEnd and it'll tell you how long the operation took
console.time('fetching data...');
fetch('https://api.github.com/users/rob-kistner')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data...');
    console.log(data);
  });
