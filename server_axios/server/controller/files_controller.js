const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/download/:file', (req, res) => {
	setTimeout(() => {
		const file = req.params.file;
		const filePath = path.resolve(`${__dirname}/../public/uploads/${file}`);

		res.sendFile(filePath);
	}, 3000);
});

module.exports = router;

//code.jpg
