const toutiaoUrl = {
	pc: 'https://www.toutiao.com/api/pc/feed/',
	mobile: 'https://m.toutiao.com/list/',
	search: 'https://so.toutiao.com/search/suggest/initial_page',
	search_sug: 'https://so.toutiao.com/2/article/search_sug/',
	detail: function(itemID) {
		return `https://m.toutiao.com/i${itemID}/info/v2/`
	},
	comments: 'https://ib.snssdk.com/article/v1/tab_comments/',
	relation: function(itemID) {
		return `https://m.toutiao.com/related/open/${itemID}/`
	},
	videodetail: function(videoid) {
		return `https://ib.365yg.com/video/urls/v/1/toutiao/mp4/${videoid}`
	}
};

const xiguaUrl = {
	list: 'https://m.ixigua.com/api/feedv2/feedById'
}

module.exports = {
	toutiaoUrl,
	xiguaUrl
}
