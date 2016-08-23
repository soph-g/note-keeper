var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe('Note List Model', function() {

  var noteList = new NoteList();
  var notes = noteList.all();

  it("is empty by default", function() {
    expect.toEqual(notes[0] === undefined);
  });

  it('can contain a single note', function() {
    noteList.addNote("Hello World");
    expect.toEqual(notes[0].content() === "Hello World");
  });


  it('can contain multiple notes', function() {
    noteList.addNote("Hello, world, for a second time");
    expect.toEqual(notes[1].content() === "Hello, world, for a second time");
  });

});
