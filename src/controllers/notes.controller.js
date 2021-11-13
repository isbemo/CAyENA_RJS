const notesCtrl = {};

const Note = require ('../models/Note');

notesCtrl.getNotes = async (req,res)=> {
	const notes = await Note.find();
	res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json('New Note added');
};
//id: controllers
notesCtrl.getNote = async (req,res)=> {
	const note = await Note.findById(req.params.id);
	res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req,res)=> {
	const { title, content, author} = req.body;
	await Note.findOneAndUpdate({_id: req.params.id}, {
		title,
		content,
		author
	});
	res.json({message:'Note Update'});
}


module.exports = notesCtrl;
 