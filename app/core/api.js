export function getJsonBody(url, data) {
	return uni.request({ url, data }).then(data => {
		var [error, res] = data;
		if (error) {
			uni.showToast({ title: error })
			throw Error(error)
		} else {
			let { code, body, msg } = res.data;
			if (code === 200) {
				return body;
			} else {
				uni.showToast({
					icon: 'none',
					duration: 5000,
					title: msg
				})
				throw Error(msg)
			}
		}
	})

}


export function getJsonData(url, data) {
	return getJsonBody(url, data).then(resp => resp.data);
}
