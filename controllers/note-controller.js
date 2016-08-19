var HTMLView = function (noteList) {

    noteList.addNote("This is a note for views testing");

    var noteView = new NoteListView(noteList);

    return {

      renderView: function() {
        htmlCode = noteView.render();
        window.onload = function() {
          document.getElementById("app").innerHTML = htmlCode;
        };

      }

    };

};


var notes = new NoteList();
var view = new HTMLView(notes);
view.renderView();

// Look into methods for waiting until the html has loaded before creating a view, and then waiting for a click before adding the note.
