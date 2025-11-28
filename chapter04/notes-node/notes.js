import { readFileSync, writeFileSync } from 'fs';

var fetchNotes = () => {
  try{
    var notesString = readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } 
  catch(error) {
    console.log(error.message);
    return[];
  }
};

var saveNotes = (notes) =>{
  writeFileSync('notes-data.json', JSON.stringify(notes));
};

export var addNote = (title,body) => {
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
  //console.log('Getting all notes');
  return fetchNotes();
};

export var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

export var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

export var logNote = (note) => {
  // debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
