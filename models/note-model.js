var Note = function(contents) {

  var noteContent = contents;

  return {

    content: function() {
      return noteContent;
    },

    save: function() {
      text = this.content();
      id = localStorage.length + 1;
      localStorage.setItem(id, text);
    }

  };

};
