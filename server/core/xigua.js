const { xiguaUrl } = require('../constants/url.js')
const { getJsonData } = require('./request.js');

function getDefaultParams() {
	return {
		aid: '3586',
		timestamp: '1619776863379_570276.5133878718',
		channelName: '',
		channelId: '94349555027',
		count: 9,
		refresh_type: 'open',
		request_from: '710',
		queryCount: 1,
		_signature: '_02B4Z6wo00f01PYderQAAIDDRuyWfSBxWzj2CH4AAF0SUouC7ns2WjDoLNbm0SaEnG-0RXVL2o5-OhaeJhre-1AnqJjAi.9x7T8V.u3BG1b0mB4tsdRF8Y5mf1zWG6UyovXo9lhBXFooQbo07b'
	}
}

// 视频列表数据接口
const videoListRequest = function(params) {
	let tempparams = getDefaultParams();
	tempparams.channelName = params.category || '';
	tempparams.channelId = params.categoryid || '94349555027';
	return getJsonData(xiguaUrl.list, tempparams);
}

module.exports = {
	videoListRequest
}
