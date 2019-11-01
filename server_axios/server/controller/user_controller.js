const express = require('express');
const router = express.Router();

const data = require('../data.json');

function findIndexOf(arr, predicate) {
	for (let i = 0; i < arr.length; i++) if (predicate(arr[i])) return i;
	return -1;
}

router.get('/users', (req, res) => {

	res.send(data);

});

router.post('/users', (req, res) => {

	const person = req.body;
	if (!person) throw new Error('Empty user');

	person.id = Math.round(Math.random() * 100);

	data.push(person);
	res.send(person);

});

router.get(`/users/:id(\\d+)`, (req, res) => {

	const id = req.params.id;
	if (id <= 0) throw new Error('Invalid user Id');

	const user = data.find(m => m.id == id);

	if (!user) throw new Error(`No user found with id ${id}`);
	res.send(user);

});

router.put(`/users/:id(\\d+)`, (req, res) => {

	const userVM = req.body;
	const id = req.params.id;

	const i = findIndexOf(data, m => m.id == id);

	if (i < 0) throw new Error(`User ID ${id} not found`);
	data[i] = userVM;

	res.send(data[i]);

});

router.delete(`/users/:id(\\d+)`, (request, response) => {

	const id = request.params.id;
	if (id <= 0) throw new Error('Invalid user Id');

	const i = findIndexOf(data, m => m.id == id);
	if (i < 0) throw new Error(`User ID ${id} not found`);

	data.splice(i, 1);
	response.send({ Success: true });

});

module.exports = router;
