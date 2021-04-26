const { mobileCommonRequest, pcCommonRequest } = require('../core/toutiao.js')
module.exports = [{
		path: "/info",
		// http配置
		http: {
			getSendData: async (req, res, next) => {
				let category = req.query.category || "__all__";
				let data = await pcCommonRequest(category);
				return data;
			},
		},
	},
	{
		path: "/video",
		// http配置
		http: {
			getSendData: async (req, res, next) => {
				let data = await mobileCommonRequest('video');
				return data;
			},
		},
	},
];
