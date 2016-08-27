var noteList = new NoteList();
var noteView = new NoteListView(noteList);
var storage = new Storage();


window.addEventListener("load", function() {
  loadNoteView();
});

document.getElementById('save-note-button').addEventListener("click", function() {
  text = document.getElementById("noteContent").value;
  note = new Note(text);
  storage.saveNote(note);
  document.getElementById("noteContent").value = " ";
  storage.getNotes();
});

window.addEventListener("hashchange", function() {
  showSelectedNote();
});

function loadNoteView() {
  storage.getNotes();
}


function showSelectedNote() {
  showNote(getNoteID(window.location));
}

function getNoteID(location) {
  return location.hash.split("#")[1];
}

function showNote(noteID) {
  note = storage.noteslist()[noteID];
  console.log(note);
  document.getElementById("note-view").innerHTML = SingleNoteView(note).render();
}
