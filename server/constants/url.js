const toutiaoUrl = {
	pc: 'https://www.toutiao.com/api/pc/feed/',
	mobile: 'https://m.toutiao.com/list/',
	search: 'https://so.toutiao.com/search/suggest/initial_page',
	detail: function(itemID) {
		return `https://m.toutiao.com/i${itemID}/info/v2/`
	},
	comments: 'https://ib.snssdk.com/article/v1/tab_comments/',
	relation: function(itemID) {
		return `https://m.toutiao.com/related/open/${itemID}/`
	},
};
module.exports = {
	toutiaoUrl
}
