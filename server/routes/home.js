const { getJsonData } = require('../core/request.js')
module.exports = [{
		path: "/info",
		// http配置
		http: {
			getSendData: async (req, res, next) => {
				let host = req.host;
				let max_behot_time = parseInt(1619000000 + Math.random() * 65939);
				let mlist = 'https://m.toutiao.com/list/';
				let pclist = 'https://www.toutiao.com/api/pc/feed/'
				let data = await getJsonData(pclist, {
					tag: '__all__',
					ac: 'wap',
					count: 20,
					format: 'json_raw',
					as: 'A1F6A0B8A1E405D',
					cp: '6081342075DDCE1',
					max_behot_time: max_behot_time || '1619065939',
					_signature: 'h3Hu5QAA5.5vq8yYamAx7Idx7v',
					i: max_behot_time || '1619065939'
				});
				console.log(data.data.length)
				return data;
			},
		},
	},
	{
		path: "/video",
		// http配置
		http: {
			getSendData: (req, res, next) => {
				return { msg: "http" };
			},
		},
	},
];
