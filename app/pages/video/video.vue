<template>
	<view>
		<com-head :category="category"></com-head>
		<view class="page">
			<com-video v-for="item,index in movieList" :info="item" :key="index"></com-video>
		</view>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	import comVideo from "@/components/video/com.vue";
	import { homeUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";

	export default {
		data() {
			return {
				movieList: [],
				category: homeCategory
			};
		},
		components: {
			comHead,
			comVideo
		},
		onPullDownRefresh() {
			this.onGetPageData(true);
		},
		onReachBottom() {
			this.onGetPageData();
		},
		onLoad() {
			uni.startPullDownRefresh()
		},
		mounted() {
			this.onGetPageData(true);
		},
		methods: {
			onGetPageData(isreset) {
				getJsonData(homeUrl.video).then(resp => {
					if (isreset) {
						this.movieList = resp;
						uni.stopPullDownRefresh();
					} else {
						this.movieList = this.movieList.concat(resp);
					}
				})
			},
		}
	}

</script>

<style lang="scss">

</style>
