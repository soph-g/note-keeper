var SingleNoteView = function(note) {

  return {

    showNote: function() {
      return note.content();
    },

    render: function() {
      return "<div>" + note.content() + "</div><div><form><button type='button' id='back' name='button'>Back</button></form></div>";
    }

  };

};
