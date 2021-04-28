export function switchDetailPage(item, type = 'text') {
	let item_id = item.item_id;
	uni.navigateTo({
		url: `/pages/detail/${type}?itemid=${item_id}`
	})
}
