(function(exports) {

	function SingleNoteView(note){
		this._note = note;
	}

	SingleNoteView.prototype.viewNote = function(){
		output = "<div>" + this._note.returnNoteText() + "</div>";
		return output;
	};

	exports.SingleNoteView = SingleNoteView;

})(this);