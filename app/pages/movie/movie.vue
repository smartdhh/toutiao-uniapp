<template>
	<view>
		<com-head :category="category"></com-head>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	import { homeUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js"
	export default {
		data() {
			return {
				movieList: [],
				category: homeCategory
			};
		},
		filters: {
			publishAgoFilter(value) {
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
			},
			videoLengthFilter(value) {
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
			},
		},
		components: {
			comHead
		},
		onPullDownRefresh() {
			getJsonData(homeUrl.video).then(resp => {
				this.newsList = resp;
				uni.stopPullDownRefresh();
			})
		},
		onReachBottom() {
			getJsonData(homeUrl.video).then(resp => {
				this.newsList = this.newsList.concat(resp);
			})
		},
		onLoad() {
			uni.startPullDownRefresh()
		},
		mounted() {
			getJsonData(homeUrl.video).then(resp => {
				this.newsList = resp;
			})
		},
		methods: {
			onGetMoreVideoData() {},
		}
	}
</script>

<style lang="scss">

</style>
