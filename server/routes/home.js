const { mobileCommonRequest, pcCommonRequest } = require('../core/toutiao.js')
module.exports = [{
		path: "/info",
		// http配置
		http: {
			getSendData: async (req, res, next) => {
				let data = await pcCommonRequest('__all__');
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
