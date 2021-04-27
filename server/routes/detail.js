const { detailInfoRequest, commentsInfoRequest, detailRelationRequest } = require('../core/toutiao.js')
module.exports = [{
	path: "/info",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let itemid = req.query.itemid || '6955045010576261669';
			let data = await detailInfoRequest(itemid);
			if (!data.data.media_user) {
				data = {
					data: {
						title: '无法获取该新闻内容，请查看其他新闻',
						content: '',
						media_user: {}
					}
				}
			}
			return data;
		},
	},
}, {
	path: "/comments",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let reqquery = req.query || {};
			let id = reqquery.id || '6955045010576261669';
			let pagesize = reqquery.pagesize || 10;
			let pageindex = reqquery.pageindex || 1;
			let data = await commentsInfoRequest({ group_id: id, tab_index: pageindex, count: pagesize, offset: pageindex * pagesize });
			return data;
		},
	},
}, {
	path: "/relation",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let reqquery = req.query || {};
			let id = reqquery.id || '6955045010576261669';
			let data = await detailRelationRequest({ item_id: id });
			return data;
		},
	},
}, ];
