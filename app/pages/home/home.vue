<template>
	<view class="home">
		<com-head :category="category"></com-head>
		<view class="page">
			<view v-for="{item_id,title,video_play_count,behot_time,abstract,source,media_avatar_url,comments_count=0,image_url,image_list=[],video_duration_str,middle_image,video_id},index in newsList" :key="index" :class="{index,image_list,middle_image,video_id} | viewClassFilter">
				<template v-if="index==3 && (image_url || middle_image)">
					<view class="commsgheader">
						<image :src="media_avatar_url"></image>
						<view class="info">
							<view class="name">{{source}}</view>
							<view class="sub">由{{source}}推荐的广告</view>
						</view>
					</view>
					<view class="title">
						{{title}}
					</view>
					<view class="preview">
						<image :src="image_url || middle_image" mode="widthFix"></image>
					</view>
					<view class="commsgfooter">
						<view>广告</view>
						<view class="go">
							<view class="iconfont icongotolink"></view>
							<view>去{{source}}</view>
						</view>
						<view class="iconfont iconcross"></view>
					</view>
				</template>
				<template v-else-if="index===8 && (image_url || middle_image)">
					<view class="commsgheader">
						<image :src="media_avatar_url"></image>
						<view class="info">
							<view class="name">{{source}}</view>
							<view class="sub">{{behot_time | publishAgoFilter}}前更新</view>
						</view>
					</view>
					<view class="title">
						{{title}}
					</view>
					<view class="preview">
						<image :src="image_url || middle_image" mode="widthFix"></image>
					</view>
					<view class="toolfooter">
						<view>
							<view class="iconfont iconshare1"></view>
							<view>分享</view>
						</view>
						<view>
							<view class="iconfont iconmessage"></view>
							<view>{{comments_count}}</view>
						</view>
						<view>
							<view class="iconfont iconzan"></view>
							<view>{{video_play_count}}</view>
						</view>
					</view>
				</template>
				<template v-else-if="index>1 && index%12===0">
					<view class="hotheader">
						<view class="tag">热榜</view>
						<view class="title">今日热门事件</view>
					</view>
					<view class="flex-between content">
						<view class="flex-between flex-column">
							<view class="title">
								{{title}}
							</view>
							<view class="commsgfooter">
								<view class="visitor">691.9万人都在看</view>
							</view>
						</view>
						<view class="preview">
							<image :src="image_url || middle_image"></image>
						</view>
					</view>
				</template>
				<template v-else-if="index%24===34">
					<view class="videocontent commsg">
						<scroll-view scroll-x="true" @scrolltolower="onGetMoreVideoData()">
							<view class="videoitem">
								<image src="http://192.168.43.72:3203/public/img/home/info2.jpg"></image>
								<view class="videoname text-ellipsis">同乡被打，这群年轻人持刀进攻，造成10伤</view>
							</view>
							<view class="videoitem">
								<image src="http://192.168.43.72:3203/public/img/home/info2.jpg"></image>
								<view class="videoname text-ellipsis">同乡被打，这群年轻人持刀进攻，造成10伤</view>
							</view>
							<view class="videoitem">
								<image src="http://192.168.43.72:3203/public/img/home/info2.jpg"></image>
								<view class="videoname text-ellipsis">同乡被打，这群年轻人持刀进攻，造成10伤</view>
							</view>
						</scroll-view>
						<view class="commsgfooter">
							<view class="author">精彩小视频</view>
						</view>
					</view>s
				</template>
				<template v-else>
					<view class="commsgheader" v-if="index>1 && image_list.length===0 && index%6===0">
						<image :src="media_avatar_url"></image>
						<view class="info">
							<view class="name">{{source}}</view>
							<view class="sub">{{behot_time | publishAgoFilter}}前更新</view>
						</view>
					</view>
					<view class="title">
						{{title}}
					</view>
					<view v-if="index>1 && index%10===0" class="sub-title">
						{{abstract}}
					</view>
					<template v-if="index>1">
						<view v-if="image_list.length>0" class="preview">
							<image v-for="{url},iindex in image_list" :src="url" mode="widthFix"></image>
						</view>
						<view v-if="!!video_id" class="preview">
							<image :src="image_url || middle_image" mode="widthFix"></image>
							<view class="iconfont iconvideo"></view>
							<view class="time">{{video_duration_str}}</view>
						</view>
					</template>
					<view class="commsgfooter">
						<view class="upper" v-if="index<2">置顶</view>
						<view class="author">{{source}}</view>
						<view class="comment">{{comments_count}}条评论</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	import { homeUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";
	import { publishAgoFilter, videoLengthFilter, viewClassFilter } from "@/filters/app.js";

	export default {
		data() {
			return {
				newsList: [],
				category: homeCategory
			};
		},
		filters: {
			publishAgoFilter,
			videoLengthFilter,
			viewClassFilter
		},
		components: {
			comHead
		},
		onPullDownRefresh() {
			this.onGetPageData(true)
		},
		onReachBottom() {
			this.onGetPageData();
		},
		onLoad() {
			uni.startPullDownRefresh()
		},
		mounted() {
			this.onGetPageData(true)
		},
		methods: {
			onGetPageData(isreset) {
				getJsonData(homeUrl.news).then(resp => {
					if (isreset) {
						this.newsList = resp;
						uni.stopPullDownRefresh();
					} else {
						this.newsList = this.newsList.concat(resp);
					}
				})
			},
			onGetMoreVideoData() {},
		}
	}
</script>

<style lang="scss">
</style>
