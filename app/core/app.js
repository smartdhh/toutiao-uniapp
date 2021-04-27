export function switchDetailPage(item) {
	uni.navigateTo({
		url: `/pages/detail/detail?itemid=${item.item_id}`
	})
}
