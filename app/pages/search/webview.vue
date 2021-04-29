<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://so.toutiao.com/search'
			};
		},
		onLoad(e) {
			this.src = e.src
		}
	}

</script>

<style lang="scss">

</style>
