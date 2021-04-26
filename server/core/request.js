const request = require('request');
const URI = require('urijs')
const rootRequest = function(url, params={}, method = 'get') {
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