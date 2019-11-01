const express = require('express');
const router = express.Router();


router.get('/loadAction', (req, res) => {
	setTimeout(() => {
		res.send({ Success: true });
	}, 5000);
});

router.get('/fastAction', (req, res) => {
	setImmediate(() => {
		res.send({ Success: true });
	});
});

router.get('/falseAction', (req, res) => {
	setImmediate(() => {
		res.send({ Success: false });
	});
});

router.get('/rejectedAction', (req, res) => {
	throw new Error('This actions fails always');
});


module.exports = router;
