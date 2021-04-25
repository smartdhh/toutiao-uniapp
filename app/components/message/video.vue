<template>
	<view class="commsg videomsg">
		<view class="commsgheader" v-if="Math.random()>0.8">
			<image :src="info.media_avatar_url"></image>
			<view class="info">
				<view class="name">{{info.source}}</view>
				<view class="sub">{{info.behot_time | publishAgoFilter}}前更新</view>
			</view>
		</view>
		<view class="title">
			{{info.title}}
		</view>
		<view v-if="Math.random()>0.5" class="sub-title">
			{{info.abstract}}
		</view>
		<view class="preview">
			<image :src="info | imgSrcFilter" mode="widthFix"></image>
			<view class="iconfont iconvideo"></view>
			<view class="time">{{info.video_duration_str}}</view>
		</view>
		<view class="commsgfooter">
			<view class="author">{{info.source}}</view>
			<view class="comment">{{info.comments_count | countStrFilter}}条评论</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter, imgSrcFilter } from "@/filters/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
			imgSrcFilter,
			publishAgoFilter,
			countStrFilter
		},
		methods: {
			onSwitchCategory(item, index) {
				this.currentIndex = index
			}
		}
	}

</script>
<style lang="scss">
	.admsg {
		padding: 30upx 0;
	}

</style>
