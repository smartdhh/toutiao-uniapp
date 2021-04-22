const request = require('request');
const URI = require('urijs')
const rootRequest = function(url, params, method = 'get') {
	if (method === 'get') {
		url = new URI(url).addQuery(params).toString();
	}
	return new Promise((resolve, reject) => {
		var option = {
			url: url,
			method,
			json: true,
			headers: {
				"content-type": "application/json",
				"cookie": 'csrftoken=b0aa006f280f738eaf0f1ea53b15f603; tt_webid=6953909808290465316; __tasessionId=vzr5sccnf1619083299777; _ga=GA1.2.1858457303.1619083301; _gid=GA1.2.940650520.1619083301; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1'
			},
			body: params
		}
		request(option, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				resolve(body)
			} else {
				reject(error);
			}
		});
	});
}


const getJsonData = function(url, params) {
	return rootRequest(url, params);
}

module.exports = {
	getJsonData
}

// getJsonData('https://www.toutiao.com/api/pc/feed/').then(resp => {
// 	console.log(resp)
// })

// getJsonData('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1F6A0B8A1E405D&cp=6081342075DDCE1&max_behot_time=1619065938&_signature=h3Hu5QAA5.5vq8yYamAx7Idx7v&i=1619065938').then(resp => {
// 	console.log(resp)
// })
