<template>
	<view class="home">
		<com-head :category="category" @onChangeCategory="onChangeCategory"></com-head>
		<view class="page">
			<template v-for="item,index in newsList">
				<!-- 此处调用头条接口返回数据，显示类型按照规则生成 -->
				<com-msg v-if="index<2" :isupper="index<2" :info="item"></com-msg>
				<ad-msg v-else-if="index===3 && (item.image_url || item.middle_image)" :info="item"></ad-msg>
				<avatar-msg v-else-if="index===8 && (item.image_url || item.middle_image)" :info="item"></avatar-Msg>
				<hot-msg v-else-if="index%12===0" :info="item"></hot-msg>
				<video-msg v-else-if="!!item.video_id" :info="item"></video-msg>
				<img-msg v-else-if="item.image_list && item.image_list.length>0" :info="item"></img-msg>
				<com-msg v-else :info="item"></com-msg>
			</template>
		</view>
		<tab-bar activeKey="home"></tab-bar>
	</view>
</template>
<script>
	import comHead from "@/components/common/head.vue";
	import tabBar from "@/components/common/tabbar.vue";
	import adMsg from "@/components/message/ad.vue";
	import hotMsg from "@/components/message/hot.vue";
	import imgMsg from "@/components/message/img.vue";
	import comMsg from "@/components/message/com.vue";
	import avatarMsg from "@/components/message/avatar.vue";
	import videoMsg from "@/components/message/video.vue";
	import { homeUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";
	export default {
		data() {
			return {
				newsList: [],
				searchParams: {},
				category: homeCategory
			};
		},
		components: {
			comHead,
			adMsg,
			hotMsg,
			imgMsg,
			comMsg,
			avatarMsg,
			videoMsg,
			tabBar
		},
		onPullDownRefresh() {
			this.onGetPageData(true)
		},
		onReachBottom() {
			this.onGetPageData();
		},
		onLoad() {
			uni.startPullDownRefresh()
			uni.hideTabBar();
		},
		mounted() {
			this.onGetPageData(true)
		},
		methods: {
			onGetPageData(isreset) {
				getJsonData(homeUrl.news, this.searchParams).then(resp => {
					if (isreset) {
						this.newsList = resp;
						uni.stopPullDownRefresh();
					} else {
						this.newsList = this.newsList.concat(resp);
					}
				})
			},
			onChangeCategory(item, index) {
				this.searchParams = { category: item.category };
				uni.startPullDownRefresh();
			},
			onGetMoreVideoData() {},
		}
	}

</script>
<style lang="scss">

</style>
