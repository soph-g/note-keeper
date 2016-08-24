var SingleNoteView = function(note) {

  return {

    showNote: function() {
      return note;
    },

    render: function() {
      return "<div><h2>Full Note View</h2><div>" + note + "</div></div><br>";
    }

  };

};
