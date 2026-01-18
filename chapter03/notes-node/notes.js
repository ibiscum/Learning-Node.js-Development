console.log('Starting notes.js');
import { readFileSync, writeFileSync } from 'fs';

var fetchNotes = () => {
  try{
    let notesString = readFileSync('./notes-data.json');
    let notesStringParsed = JSON.parse(notesString);
    console.log("fetchNotes:", notesStringParsed);

    return notesStringParsed;

  } 
  catch(error) {
    console.log(error.message);
    return[];
  }
};

var saveNotes = (notes) =>{
  writeFileSync('notes-data.json', JSON.stringify(notes));
};

export var addNote = (title, body) => {
  var notes = fetchNotes();
  console.log("addNotes:", notes);

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
