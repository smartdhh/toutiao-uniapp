const fs = require('fs');
const path = require('path');

const readLocalFileData = function(filePath) {
	var filePathLength = filePath.length;
	var tempFilePath = (filePath.lastIndexOf('/') === filePathLength - 1 ? filePath.substr(0, filePathLength - 1) : filePath) + '.json';
	var fullFilePath = path.join(__dirname, "../data", tempFilePath);
	var data = "";
	try {
		data = fs.readFileSync(fullFilePath, 'utf-8');
		data = JSON.parse(data);
		data.local_source = tempFilePath;
	} catch (e) {
		//TODO handle the exception
		data = { data: [], error: e.toString() };
	}
	return data;
}

module.exports = {
	readLocalFileData
}
