var noteList = new NoteList();
var noteView = new NoteListView(noteList);


window.addEventListener("load", function() {
  loadNoteView();
});

document.getElementById('save-note-button').addEventListener("click", function() {
  note = document.getElementById("noteContent").value;
  noteList.addNote(note);
  document.getElementById("noteContent").value = " ";
  loadNoteView();
});

window.addEventListener("hashchange", function() {
  showSelectedNote();
});

function loadNoteView() {
  document.getElementById("app").innerHTML = noteView.render();
}


function showSelectedNote() {
  showNote(getNoteID(window.location));
}

function getNoteID(location) {
  console.log(location.hash.split('#')[1]);
  return location.hash.split("#")[1];
}

function showNote(noteID) {
  note = noteList.all()[noteID];
  console.log(note);
  document.getElementById("note-view").innerHTML = SingleNoteView(note).render();
}
