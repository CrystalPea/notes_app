(function(exports) {

	function Note(string, n){
	  this._text = string;
		this._id = n
	}

	Note.prototype.returnNoteText = function() {
		return this._text;
	};

	Note.prototype.returnId = function() {
		return this._id;
	};

	exports.Note = Note;

})(this);
