document.addEventListener("DOMContentLoaded", function () {

  (function renderView() {

    var noteList = new NoteList();
    noteList.addNote("This is a note for views testing");
    noteList.addNote("Another note for testing linking between notes");
    noteList.addNote("Yet another note");
    var noteView = new NoteListView(noteList);
    htmlCode = noteView.render();

    window.addEventListener("load", function() {
      (function loadNoteView() {
        document.getElementById("app").innerHTML = htmlCode;
      })();
    });

    window.addEventListener("hashchange", showSelectedNote());

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


  })();

});
