console.log('Starting app.js');

// import fs from 'fs';

import { getNote, addNote, getAll, removeNote } from './notes.js';
// import _ from 'lodash';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).parse()

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = addNote(argv.title, argv.body);
  if (note){
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  getAll();
} else if (command === 'read') {
  getNote(argv.title);
} else if (command === 'remove') {
  removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
