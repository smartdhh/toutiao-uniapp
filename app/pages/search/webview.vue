<template>
	<web-view class="webview" :webview-styles="webviewStyles" :src="src"></web-view>
</template>

<script>
	import { searchUrl } from "@/constants/url.js"
	export default {
		data() {
			return {
				src: searchUrl.toutaio,
				webviewStyles: {
					top: '-60px'
				}
			};
		},
		onLoad(e) {
			this.src = searchUrl.toutaio + e.keyword
		}
	}

</script>

<style lang="scss">
	.webview {
		top: -60px;
	}

</style>
