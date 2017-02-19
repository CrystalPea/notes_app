note = {};
note.returnNoteText = function(){
  return "Favourite drink: margarita";
};
note.returnId = function(){
  return 0;
}

noteList = {};
noteList.showNotes = function(){
  return [note];
};

function testInstantiateNoteController() {
  var controller = new NoteController(noteList);
  assert.isTrue(typeof controller === "object")
};
testInstantiateNoteController();

function testUpdateHTML() {
  var controller = new NoteController(noteList);

  controller.addNoteListView();
  var app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);
  controller.updateHTML("app");
  assert.isTrue(app.innerHTML === "<ul><li><a href=\"#0\">Favourite drink: ma</a></li></ul>")
}
testUpdateHTML();

(function showNoteforCurrentPage(){
  var controller = new NoteController(noteList);
  controller.addNoteListView();
  controller.showSingleNoteOnUrlChange();
  controller.updateHTML("app");
  if(!(window.location.href.includes("#0"))){
    window.location.href += "#0"
  }
  assert.isTrue(app.innerHTML === "<div>Favourite drink: margarita</div>");
})();

function assertHTML() {
    assert.isTrue(app.innerHTML === "<div>Favourite drink: margarita</div>");
}
