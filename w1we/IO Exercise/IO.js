const fs = require('fs');
const userInputFile = process.argv.slice(2)[0];


fs.readFile(`${userInputFile}`, function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log('Asynchronous read: ' + data.toString());
});