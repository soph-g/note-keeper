var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe("Single note view", function() {

  note = new Note("This is a note");


  it("takes a note model on instantiation", function() {
    singleNoteView = new SingleNoteView(note);
    expect.toEqual(singleNoteView.showNote() === "This is a note");
  });

  it("returns html for a single note view", function() {
    expect.toEqual(singleNoteView.render() === "<div>This is a note</div>");
  });

});
