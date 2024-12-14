//var generateName = require('sillyname');

//import generateName from "sillyName";
//var sillyName = generateName();

//console.log(`My name is ${sillyName}.`);

import superheroes from 'superheroes';
const randomName = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am a ${randomName}!`);