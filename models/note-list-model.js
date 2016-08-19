var NoteList = function() {

  var notes = [];

  return {

    all: function() {
      return notes;
    },

    addNote: function(content) {
      note = new Note(content);
      notes.push(note);
    }

  };

};
