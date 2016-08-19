var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe("Note Model", function() {

  it('saves entered text', function() {

    var note = new Note("This is a test note");
    expect.toEqual(note.content() === "This is a test note");

  });
});
