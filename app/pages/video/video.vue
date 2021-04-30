<template>
	<view>
		<com-head :category="category" @onChangeCategory="onChangeCategory"></com-head>
		<view class="page">
			<com-video v-for="item,index in movieList" :info="item" :key="index"></com-video>
		</view>
	</view>
</template>

<script>
	import comHead from "@/components/common/head.vue";
	import comVideo from "@/components/video/com.vue";
	import { videoUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { videoCategory } from "@/constants/app.js";

	export default {
		data() {
			return {
				searchParams: {},
				movieList: [],
				category: videoCategory
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
				getJsonData(videoUrl.list, this.searchParams).then(data => {
					let resp = (data.channel_feed.data || []).map(({ data, key }) => ({
						item_id: key,
						media_info: data.user_info,
						source: data.user_info.name,
						comment_count: data.comment_count,
						title: data.title,
						image_url: data.cover_image_url,
						video_duration: data.duration,
						video_detail_info: { video_watch_count: data.play_count }
					}));
					if (isreset) {
						this.movieList = resp;
						uni.stopPullDownRefresh();
					} else {
						this.movieList = this.movieList.concat(resp);
					}
				})
			},
			onChangeCategory(item, index) {
				this.searchParams = { category: item.category, categoryid: item.categoryid };
				uni.startPullDownRefresh();
			}
		}
	}

</script>

<style lang="scss">

</style>
