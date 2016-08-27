var Storage = function() {

  var HttpClient = function(){
    this.get = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            callback(httpRequest.responseText);
        }
      };
      httpRequest.open("GET", url, true);
      httpRequest.send(null);
    };
  };

  var http = new HttpClient();

  var dataset = [];

  return {

    noteslist: function() {
      return dataset;
    },

    saveNote: function(note, callback) {
      var httprequest = new XMLHttpRequest();
      var jsonNote = (note.content());
      httprequest.open("POST", "http://localhost:4567/notes?content=" + jsonNote);
      httprequest.send(jsonNote);
      callback();
    },

    getNotes: function() {
      var httprequest = new XMLHttpRequest();
      http.get('http://localhost:4567/notes', function(response) {
        dataset = [];
        for (i = 0; i < JSON.parse(response).length; i++) {
          dataset.push(JSON.parse(response)[i].content);
        }
        noteView.render(dataset);
      });
    }
  };

};
