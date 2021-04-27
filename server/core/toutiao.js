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

// mobile的公共请求接口
const mobileCommonRequest = function(category) {
	let params = getMobileDefaultParams({ category });
	return getJsonData(toutiaoUrl.mobile, params);
}

// search关键字请求接口
const searchCommonRequest = function(category) {
	return getJsonData(toutiaoUrl.search);
}

// 详情数据接口
const detailInfoRequest = function(itemID) {
	return getJsonData(toutiaoUrl.detail(itemID));
}

// 详情数据接口
const detailRelationRequest = function(item) {
	return getJsonData(toutiaoUrl.relation(item.item_id), {
		page_type: 'article',
		parent_rid: '14616381619514979422',
		site_id: '5000246',
		code_id: '14799599715000246',
		num: 10,
		enable_mix: 1,
		test_params: JSON.stringify({ "strategy": "modular" }),
		image_type: 'large'
	});
}

// 评论数据接口
const commentsInfoRequest = function(params) {
	return getJsonData(toutiaoUrl.comments, params);
}

module.exports = {
	searchCommonRequest,
	mobileCommonRequest,
	pcCommonRequest,
	detailInfoRequest,
	commentsInfoRequest,
	detailRelationRequest
}
