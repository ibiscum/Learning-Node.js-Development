console.log('Starting app.js');

// import fs from 'fs';
import {add} from './notes.js';
// import _ from 'lodash';

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
  let a = 4;
  let b = 5;
  let sum = add(a, b);
  console.log('Adding two numbers:', a, b, sum);
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
