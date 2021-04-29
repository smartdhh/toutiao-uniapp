const { searchCommonRequest, searchSugRequest } = require('../core/toutiao.js')
module.exports = [{
	path: "/info",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let data = await searchCommonRequest();
			return data;
		},
	},
}, {
	path: "/sug",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let keyword = req.query.keyword;
			let data = await searchSugRequest(keyword);
			return data;
		},
	},
}, ];
