(function(exports) {

  function NoteListView(noteList){
    this._noteList = noteList;
  }

  NoteListView.prototype.listNotes = function(){
    notes = "<ul>";
    this._noteList.showNotes().forEach(function(element){
      if(element.returnNoteText().length > 20){
        notes += "<li><a href=\"#" + element.returnId() + "\">" + element.returnNoteText().substr(0, 19) + "</a></li>";
      } else {
        // notes += "<li><div>" + element.returnNoteText() + "</div></li>";
        notes += "<li><a href=\"#" + element.returnId() + "\">" + element.returnNoteText() + "</a></li>";
      }
    });
    notes += "</ul>";
    return notes;
  };

  exports.NoteListView = NoteListView;

})(this);
