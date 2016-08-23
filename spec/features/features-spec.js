var expect = new Harper();
var describe = expect.describe;
var it = expect.it;

describe('Notes front page', function() {
  it('contains a list of notes', function() {
    setTimeout(function() {
      expect.toEqual(document.getElementById("app").innerHTML === '<ul><div><li><a id="note" href="#0">This is a note for v...</a></li></div></ul>');
    }, 1000);
  });


  setTimeout(function() {
    it("can show individual notes", function () {
        document.getElementById("note").click();
      });
    setTimeout(function() {
      expect.toEqual(document.getElementById("app").innerHTML === "<div>This is a note for views testing</div>");
    }, 1000);
  }, 1100);



});
