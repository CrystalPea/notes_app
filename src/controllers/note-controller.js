"use strict";

(function(exports) {

  function NoteController(noteList){
    this._noteList = noteList;
    var self = this;
  }

  NoteController.prototype.addNote = function(text){
    this._noteList.createNote(text);
  };

  NoteController.prototype.addNoteListView = function(){
    this.noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.updateHTML = function(id){
    var getListNotes = this.noteListView.listNotes();
    var noteDisplay = document.getElementById(id);
    noteDisplay.innerHTML = getListNotes;
  };

  NoteController.prototype.showSingleNoteOnUrlChange = function(app){
    var self = this;
    window.addEventListener("hashchange", function(){
      var id = window.location.href.split("#")[1]
      var note = self._noteList.findNote(parseInt(id));
      var singleNoteView = new SingleNoteView(note);
      var noteDisplay = document.getElementById(app);
      noteDisplay.innerHTML = singleNoteView.viewNote();
    });
  };

  NoteController.prototype.preventSubmit = function(submit){
    var self = this;
    var button = document.getElementById("submitbutton")
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var text = document.getElementById("textarea").value
      self._noteList.createNote(text);
      self.updateHTML("app")
      document.getElementById("text").reset();
    });
  };

  exports.NoteController = NoteController;

})(this);
