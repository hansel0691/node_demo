const axios = require('axios');
const { download } = require('./services/file_service');

(async function main() {
	try {

		const response = await download();
		console.log(response);

	} catch (error) {
		console.log(`Error Message: ${error.message}`);
	}
})();

async function testing() {
	try {
		let response = await getUser('hansel0691');
		let user = response.data;
		console.log(user.name);

		response = await sendUser(user);
		response.data;
		console.log(response.status);

		response = await getDefault();
		console.log(response.data);
	} catch (error) {
		console.log(error.message);
	}
}


async function invokeAll() {
	const requests = ['fastAction', 'falseAction', 'loadAction'];
	const promises = [];

	requests.forEach(e => {
		promises.push(axios.get(`http://localhost:3000/${e}`));
	});

	const response = await axios.all(promises);

	response.forEach(e => {
		const data = e.data;

		if (data.Success) console.log('File Downloaded');
		else console.log('Something went wrong');
	});
	
}
