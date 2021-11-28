const { Router } = require('express');
const router = Router();
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');


router.route('/')
	.get(getNotes)
	.post(createNote)

router.route('/:id')
	.get(getNotes)
	.put(updateNote)
	.delete(deleteNote)

module.exports = router;