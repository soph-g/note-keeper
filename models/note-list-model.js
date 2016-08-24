var NoteList = function() {


  return {

    all: function() {
      notes = [];
      for(i = 0; i<= localStorage.length; i++) {
        text = localStorage.getItem(i);
        notes.push(text);
      }
      return notes;
    },

    addNote: function(content) {
      note = new Note(content);
      note.save();
    }

  };

};
