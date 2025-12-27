let obj = {
  name: 'Andrew'
};

let stringObj = JSON.stringify(obj);
console.log("3.1", stringObj);

let personString = '{"name": "Andrew","age": 25}';
let person = JSON.parse(personString);

console.log("3.2", typeof person);
console.log("3.3", person);

import { writeFileSync, readFileSync } from "fs";

let originalNote = {
  title: "Some title",
  body: "Some body",
};

let originalNoteString = JSON.stringify(originalNote);
writeFileSync("notes.json", originalNoteString);

let noteString = readFileSync("notes.json");
let note = JSON.parse(noteString);
// note
console.log("3.4", typeof note);
console.log("3.5", note.title);
