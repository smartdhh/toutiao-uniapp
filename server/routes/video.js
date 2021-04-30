const { videoInfoRequest } = require('../core/toutiao.js')
const { videoListRequest } = require('../core/xigua.js')
module.exports = [{
	path: "/list",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			let category = req.query.category;
			let categoryid = req.query.categoryid;
			//let data = await mobileCommonRequest('video');
			let data = await videoListRequest({ category, categoryid });
			return data;
		},
	},
}, {
	path: "/info",
	// http配置
	http: {
		getSendData: async (req, res, next) => {
			// 真实数据暂无法获取，使用模拟数据
			let videoid = 'v02004g10000c1pucp2qgeu76jg4vhc0' || req.query.videoid;
			let data = await videoInfoRequest({ videoid });
			// 视频源报403，暂使用模拟数据
			data.data.video_list = {
				video: {
					main_url: 'http://182.92.160.137/other/media/' + parseInt(Math.random() * 2 + 1) + '.mp4'
				}
			};
			data.data.poster_url = 'https://vdposter.bdstatic.com/42637abe4201e4aa94e3d17d5cdf5421.jpeg?x-bce-process=image/resize,m_fill,w_352,h_234/format,f_jpg/quality,Q_100';
			return data;
		},
	},
}, ];
