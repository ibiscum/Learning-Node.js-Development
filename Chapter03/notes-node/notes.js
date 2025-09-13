console.log('Starting notes.js');
import { readFileSync, writeFileSync } from 'fs';

var fetchNotes = () => {
  try{
    var notesString = readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return[];
  }
};

var saveNotes = (notes) =>{
  writeFileSync('notes-data.json', JSON.stringify(notes));
};

export var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

export var getAll = () => {
  console.log('Getting all notes');
};

export var getNote = (title) => {
  console.log('Getting note', title);
};

export var removeNote = (title) => {
  console.log('Removing note', title);
};
