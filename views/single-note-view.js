var SingleNoteView = function(note) {

  return {

    showNote: function() {
      return note.content();
    },

    render: function() {
      return "<div><h2>Full Note View</h2><div>" + note.content() + "</div></div><br>";
    }

  };

};
