const timeOut = function() {
	setTimeout(() => {
		console.log('Time Out...');
	}, 0);
};

const immediate = function() {
	setImmediate(() => {
		console.log('Set Immediate...');
	});
};

const tick = function() {
	process.nextTick(() => {
		console.log('Next Tick...');
	});
};


immediate();
timeOut();
tick();