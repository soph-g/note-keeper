var NoteListView = function(notes) {

  return {

    list: function() {
      return notes;
    },

    render: function() {
      var html = "<ul>";
      var arrayOfNotes = this.list().all();
      for(i = 0; i < arrayOfNotes.length; i++) {
        noteText = arrayOfNotes[i].content().substring(0,20);
        openingHTML = "<div id='note'><li><a href='#" + i + "'>";
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
