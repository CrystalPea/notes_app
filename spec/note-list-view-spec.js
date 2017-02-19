note = {};
note.returnNoteText = function(){
  return "A doubled note";
};
note.returnId = function(){
  return 0;
};

note2 = {};
note2.returnNoteText = function(){
  return "A secondouble note";
};
note2.returnId = function(){
  return 1;
};

long_note = {};
long_note.returnNoteText = function(){
  return "Is this overreaching arm, or is it compassion? Is this handout undeserved or just reparation?";
};
long_note.returnId = function(){
  return 0;
};

noteList = {};
noteList.showNotes = function(){
  return [note];
};

noteList2 = {};
noteList2.showNotes = function(){
  return [note, note2];
};

noteList3 = {};
noteList3.showNotes = function(){
  return [];
};

noteList_4 = {};
noteList_4.showNotes = function(){
  return [long_note];
};

function testInstantiatesWithNoteList(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._noteList === noteList);
};
testInstantiatesWithNoteList();

function testListNotes(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#0\">A doubled note</a></li></ul>");
};
testListNotes();

function testMultipleListNotes(){
  var noteListView = new NoteListView(noteList2);
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#0\">A doubled note</a></li><li><a href=\"#1\">A secondouble note</a></li></ul>");
};
testMultipleListNotes();

function testEmptyListNotes(){
  var noteListView = new NoteListView(noteList3);
  assert.isTrue(noteListView.listNotes() === "<ul></ul>");
};
testMultipleListNotes();

(function testShowingOnlyFirstCharacters(){
  var noteListView = new NoteListView(noteList_4);
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#0\">Is this overreachin</a></li></ul>")
})();

(function testShowingHashId(){
  var noteListView = new NoteListView(noteList_4);
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#0\">Is this overreachin</a></li></ul>")
})();
