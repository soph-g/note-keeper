var NoteListView = function(notes) {

  return {

    list: function() {
      return notes;
    },

    render: function() {
      var html = "<h2>Notes List</h2><ul>";
      var arrayOfNotes = this.list().all();
      for(i = 0; i < arrayOfNotes.length; i++) {
        noteText = arrayOfNotes[i].content().substring(0,20);
        openingHTML = "<div><li><a id='note' href='#" + i + "'>";
        if ((arrayOfNotes[i]).content().length > 20) {
          html += openingHTML + noteText + "...</a></li></div>";
        } else {
          html += openingHTML + noteText + "</a></li></div>";
        }
      }
      return html + "</ul>";
    }

  };

};

// Make the link a button for testing
