let rootPrefix = 'http://192.168.43.72:3203/'

//#ifdef APP-PLUS
rootPrefix = 'https://dev.cloudmtm.com:4450/'
//#endif

// 如果是生产环境则切换到https访问
if (process.env.NODE_ENV === 'production') {
	rootPrefix = 'https://dev.cloudmtm.com:4450/'
}

export let homeUrl = {
	news: `${rootPrefix}home/info`
}

export let searchUrl = {
	toutaio: 'https://so.toutiao.com/search?keyword=',
	info: `${rootPrefix}search/info`,
	sug: `${rootPrefix}search/sug`
}

export let detailUrl = {
	info: `${rootPrefix}detail/info`,
	comments: `${rootPrefix}detail/comments`,
	ralation: `${rootPrefix}detail/relation`,
}

export let videoUrl = {
	list: `${rootPrefix}video/list`,
	info: `${rootPrefix}video/info`
}
