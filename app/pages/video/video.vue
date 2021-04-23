<template>
	<view>
		<com-head :category="category"></com-head>
		<view class="page">
			<view v-for="{title,large_image_url,ad_id,image_url,media_info,video_detail_info,video_duration},index in movieList" :key="index" class="commsg">
				<view class="commsgheader">
					<view>
						<image :src="media_info.avatar_url"></image>
						<view class="info">
							<view class="name">{{source}}</view>
							<view class="sub">{{behot_time | publishAgoFilter}}前更新</view>
						</view>
						<view>关注</view>
					</view>
					<view>
						<view>
							<view class="iconfont iconmessage"></view>
							<view>{{comments_count}}</view>
						</view>
						<view class="iconfont iconmore"></view>
					</view>
				</view>
				<view class="preview">
					<view class="title">{{title}}</view>
					<image :src="large_image_url || image_url" mode="widthFix"></image>
					<view class="iconfont iconvideo"></view>
					<view class="time">{{video_duration|videoLengthFilter}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	import { homeUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";
	import { publishAgoFilter, videoLengthFilter } from "@/filters/app.js";
	export default {
		data() {
			return {
				movieList: [],
				category: homeCategory
			};
		},
		filters: {
			publishAgoFilter,
			videoLengthFilter,
		},
		components: {
			comHead
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
