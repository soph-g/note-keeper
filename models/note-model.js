var Note = function(contents) {

  var noteContent = contents;

  return {

    content: function() {
      return noteContent;
    }
    
  };

};
