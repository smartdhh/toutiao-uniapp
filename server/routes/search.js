const { searchCommonRequest } = require('../core/toutiao.js')
module.exports = [{
	path: "/info",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let data = await searchCommonRequest();
			return data;
		},
	},
}, ];
