var SingleNoteView = function(note) {

  return {

    showNote: function() {
      return note.content();
    },

    render: function() {
      return "<div>" + note.content() + "</div>";
    }

  };

};
