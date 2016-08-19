var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe('Note List Model', function() {

  var noteList = new NoteList();
  var notes = noteList.all();

  it('Contains an array of notes', function() {
    noteList.addNote("Hello World");
    expect.toEqual(notes[0].content() === "Hello World");
  });


});
