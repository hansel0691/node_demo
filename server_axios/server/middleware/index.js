
const logTime = (req, res, next) => {
	console.log('Time: %d', Date.now());
	next();
};


module.exports = [logTime];

