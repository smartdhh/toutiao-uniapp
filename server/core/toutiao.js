const { toutiaoUrl } = require('../constants/url.js')
const { getJsonData } = require('./request.js');

const mainRequest = function(category) {
	return getJsonData(toutiaoUrl.main, { category })
}

module.exports = {
	mainRequest
}
