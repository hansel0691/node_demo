const doSomething = () => {
	console.log('... do something');
	return Promise.resolve({ id: 3 });
};

function doSomethingElse(result) {
	console.log('... do something else');
	result.name = 'Hansel';

	// throw new Error('wait what!')
	return new Promise((resolve, reject) => resolve(result));
}

const doThirdThing = async newResult => {
	console.log('... do a third thing');
	newResult.message = 'Sup!';
	return newResult;
};

const failureCallback = error => {
	console.log(`Mayday-Mayday ${error.message}`);
};

(async function main() {
	//then convert return value into Promise and returns it
	// const promise = doSomething()
	// 	.then(doSomethingElse)
	// 	.then(doThirdThing)
	// 	.then(finalResult => {
	// 		console.log(finalResult);
	// 	})
	//     .catch(failureCallback)
	//     .then(() => console.log('Always execute this!'));

	try {
		const result = await doSomething();
		const newResult = await doSomethingElse(result);
		const finalResult = doThirdThing(newResult);
		console.log(await finalResult);
	} catch (error) {
		failureCallback(error);
	} finally {
        console.log('Always execute this!');
    }
})();
