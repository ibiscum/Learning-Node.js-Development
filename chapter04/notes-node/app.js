import fs from 'fs';

import { addNote, logNote, getAll, getNote, removeNote } from './notes.js';
import _ from 'lodash';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { title } from 'process';

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

yargs()
  .scriptName("app")
  .usage('$0 <cmd> [args]')
  .command('add [note]', 'add a new note', (yargs) => {
    yargs.positional('note', {
      type: 'object',
      default:  {title: titleOptions, body: 'body'},
      describe: 'title and body of note'
    })
  }, 
  function (argv) {
    var note = addNote(argv.title, argv.body);
      if (note){
        console.log('Note created');
        logNote(note);
      } 
      else {
        console.log('Note title taken');
      }
      console.log(argv.note)
  })
  .command('list', 'list all notes')
  .help()
  .parse(hideBin(process.argv))

// const argv = _command('add', 'Add a new note', {
//     title: titleOptions,
//     body: bodyOptions
//   })
//   .command('list', 'List all notes')
//   .command('read', 'Read a note', {
//     title: titleOptions
//   })
//   .command('remove', 'Remove a note', {
//     title: titleOptions
//   })
//   .help()
//   .argv;
// var command = argv._[0];

if (yargs.command === 'add') {
  var note = addNote(argv.title, argv.body);
  if (note){
    console.log('Note created');
    logNote(note);
  } else {
    console.log('Note title taken');
  }
} 
// else if (command === 'list') {
//   var allNotes = getAll();
//   console.log(`Printing ${allNotes.length} note(s).`);
//   allNotes.forEach((note) => logNote(note));
// } else if (command === 'read') {
//   var note = getNote(argv.title);
//   if (note) {
//     console.log('Note found');
//     logNote(note);
//   } else {
//     console.log('Note not found');
//   }
// } else if (command === 'remove') {
//   var noteRemoved = removeNote(argv.title);
//   var message = noteRemoved ? 'Note was removed' : 'Note not found';
//   console.log(message);
// } else {
//   console.log('Command not recognized');
// }
