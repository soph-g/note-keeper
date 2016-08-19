var NoteListView = function(notes) {

  return {

    list: function() {
      return notes;
    },

    render: function() {
      var html = "<ul>";
      var arrayOfNotes = this.list().all();
      for(i = 0; i < arrayOfNotes.length; i++) {
        html += "<li>" + arrayOfNotes[i].content() + "</li>";
      }
      return html + "</ul>";
    }

  };

};
