let message = '';

exports.promise1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const err = new Error('Mayday-Mayday');
			reject(err);
			// message += ' my';
			// resolve('my');
		}, 4000);
	});
};

exports.promise2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			message += ' first';
			resolve('first');
		}, 3000);
	});
};

exports.promise3 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			message += ' promise';
			resolve('message');
		}, 6000);
	});
};
