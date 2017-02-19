noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.addNote("Favourite drink: carrot juice");
noteController.addNoteListView();
noteController.updateHTML("app");
noteController.showSingleNoteOnUrlChange("app");
noteController.preventSubmit("text")
