var noteList = new NoteList();
noteList.addNote("This is a note for views testing");
// noteList.addNote("Another note for testing linking between notes");
// noteList.addNote("Yet another note");
var noteView = new NoteListView(noteList);


window.addEventListener("load", function() {
  loadNoteView();
});


function loadNoteView() {
  var htmlCode = noteView.render();
  document.getElementById("app").innerHTML = htmlCode;
}

document.getElementById('save-note-button').addEventListener("click", function() {
  note = document.getElementById("noteContent").value;
  noteList.addNote(note);
  loadNoteView();
});

window.addEventListener("hashchange", function() {
  showSelectedNote();

  document.getElementById("back").addEventListener("click", function() {
    loadNoteView();
    // window.location = "";
  });
});


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
  document.getElementById("app").innerHTML = SingleNoteView(note).render();
}
