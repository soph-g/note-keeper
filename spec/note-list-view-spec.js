var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe("Note list view", function() {

  notes = new NoteList();
  notes.addNote("This is a note");
  notes.addNote("This is a 2nd note");
  notes.addNote("This is a 3rd note longer than 20 character");
  noteListView = new NoteListView(notes);
  emptyListView = new NoteListView(new NoteList());
  expectedOutput = "<ul><div id='note'><li><a href='#0'>This is a note</a></li></div><div id='note'><li><a href='#1'>This is a 2nd note</a></li></div><div id='note'><li><a href='#2'>This is a 3rd note l...</a></li></div></ul>";



  it("takes a note list on instantiation", function() {
    var arrayOfNotes = noteListView.list().all();
    var note = arrayOfNotes[0];
    expect.toEqual(note.content() === "This is a note");
  });

  it("returns basic html if there are no notes", function() {
    expect.toEqual(emptyListView.render() === "<ul></ul>");
  });

  it("returns html for an unordered list of notes when there is at least one note", function() {
    expect.toEqual(noteListView.render() === expectedOutput);
  });

  it("returns only the first 20 characters of a longer note", function () {
    expect.toEqual(noteListView.render() === expectedOutput);
  });

});


// describe('adding a new note', function() {
//   it('note contains "Hello"', function(){
//     document.getElementById('note-message').value = "Hello";
//     document.getElementById('save-note-button').addEventListener("click", function(clickEvent) {
//       clickEvent.preventDefault();
//     });
//     document.getElementById('save-note-button').click();
//
//     expect.isTrue(document.getElementById("messages").innerHTML === "Hello");
//   });
// });
