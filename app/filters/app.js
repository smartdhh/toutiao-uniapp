export function viewClassFilter(value) {
	let { index, image_url, image_list, middle_image, video_id } = value;
	let classInfo = "";
	if (index < 2) {
		classInfo = 'uppermsg';
	} else if (index === 3 && (image_url || middle_image)) {
		classInfo = 'admsg';
	} else if (index % 12 === 0) {
		classInfo = "hotmsg";
	} else if (image_list.length > 0) {
		classInfo = 'imgmsg'
	} else if (!!video_id) {
		classInfo = 'videomsg'
	}
	return ['commsg', classInfo];
}
export function publishAgoFilter(value = 0) {
	let result = "刚刚";
	let seconds = value / 1000;
	if (value > 60) {
		let years = parseInt(seconds / 60 / 60 / 24 / 365);
		let days = parseInt(seconds / 60 / 60 / 24);
		let hours = parseInt(seconds / 60 / 60);
		let minutes = parseInt(seconds / 60);
		result = years ? years + '年' : (days ? days + '天' : (hours ? hours + '小时' : (minutes ? minutes + '分钟' : '')))
	}
	return result;
};
export function videoLengthFilter(value = 0) {
	// 获取小时
	let hours = parseInt(value / 60 / 60);
	let minutes = parseInt(value / 60 - 60 * hours);
	let seconds = value % 60;
	let result = [hours, minutes, seconds].reduce((pre, cur, index) => {
		if (!(index === 0 && hours === 0)) {
			pre.push((cur + '').padStart(2, '0'));
		}
		return pre
	}, [])
	return result.join(':');
};
export function imgSrcFilter(value) {
	return value.large_image_url || value.image_url || value.middle_image;
}
export function countStrFilter(value = 0) {
	if (value > 100000000) {
		return (value / 100000000).toFixed(2) + '亿';
	}
	if (value > 10000) {
		return (value / 10000).toFixed(2) + '万';
	}
	return value;
}
