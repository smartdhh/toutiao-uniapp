let rootPrefix = 'http://192.168.43.72:3203/'

// 如果是生产环境则切换到https访问
if (process.env.NODE_ENV === 'production') {
	rootPrefix = 'https://dev.cloudmtm.com:4449/'
}

export let homeUrl = {
	news: `${rootPrefix}home/info`,
	video: `${rootPrefix}home/video`
}
