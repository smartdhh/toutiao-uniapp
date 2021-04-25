const { toutiaoUrl } = require('../constants/url.js')
const { getJsonData } = require('./request.js');

function getDefaultParams() {
	let max_behot_time = parseInt(1619000000 + Math.random() * 65939);
	return {
		max_behot_time: max_behot_time || '1619065939',
		_signature: 'h3Hu5QAA5.5vq8yYamAx7Idx7v'
	}
}

function getMobileDefaultParams(params) {
	let defaultParams = getDefaultParams();
	return {
		...defaultParams,
		tag: params.category,
		ac: 'wap',
		count: 20,
		format: 'json_raw',
		as: 'A1F6A0B8A1E405D',
		cp: '6081342075DDCE1',
		i: defaultParams.max_behot_time
	}
}

function getPCDefaultParams(params) {
	let defaultParams = getDefaultParams();
	return {
		...defaultParams,
		category: params.category,
		utm_source: 'toutiao',
		widen: 1,
		tadrequire: true
	}
}

// pc的公共请求接口
const pcCommonRequest = function(category) {
	let params = getPCDefaultParams({ category });
	return getJsonData(toutiaoUrl.pc, params);
}

// pc的公共请求接口
const mobileCommonRequest = function(category) {
	let params = getMobileDefaultParams({ category });
	return getJsonData(toutiaoUrl.mobile, params);
}

module.exports = {
	mobileCommonRequest,
	pcCommonRequest
}
