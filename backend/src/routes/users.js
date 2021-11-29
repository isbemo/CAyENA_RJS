const { Router } = require('express');
const router = Router();
const { getUsers, createUser, deleteUser, login } = require('../controllers/users.controller');

router.route('/')
	.get(getUsers)
	.post(createUser);


router.route('/:id')
	.delete(deleteUser);

router.route('/login')
	.get(login);

module.exports = router;