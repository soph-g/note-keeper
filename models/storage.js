var Storage = function() {

  return {

    saveNote: function(text) {
      var httprequest = new XMLHttpRequest();
      var jsonNote = JSON.stringify(text);
      httprequest.open("POST", "http://localhost:4567/notes?message=" + jsonNote);
      httprequest.send(jsonNote);
    },

    getNotes: function() {

    }

  };

};
