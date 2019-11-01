
// The executor function is executed immediately by the Promise implementation
exports.asyncHey = (value, elapse = 3000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (value) resolve(`Hey ${value}`);
			else reject(new Error('There was no value.'));
		}, elapse);
	});
};

