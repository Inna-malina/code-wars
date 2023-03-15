// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// Hello, John Smith! Welcome to Phoenix, Arizona!

'use strict';
function sayHello( name, city, state ) {

  console.log(`Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`);
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'); 