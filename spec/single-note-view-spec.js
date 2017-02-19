note = {};
note.returnNoteText = function(){
  return "A doubled note";
};

function testInstantiateWithNote(){
	var singleNoteView = new SingleNoteView(note);
	assert.isTrue(singleNoteView._note === note);
};
testInstantiateWithNote();

function testViewingSingleNote(){
	var singleNoteView = new SingleNoteView(note);
	assert.isTrue(singleNoteView.viewNote() === "<div>A doubled note</div>")
};
testViewingSingleNote();
