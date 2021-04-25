<template>
	<view class="commsg">
		<view class="commsgheader">
			<image :src="info.media_avatar_url"></image>
			<view class="info">
				<view class="name">{{info.source}}</view>
				<view class="sub">{{info.behot_time | publishAgoFilter}}前更新</view>
			</view>
		</view>
		<view class="title">
			{{info.title}}
		</view>
		<view class="preview">
			<image :src="info.large_image_url || info.image_url || info.middle_image" mode="widthFix"></image>
		</view>
		<view class="toolfooter">
			<view>
				<view class="iconfont iconshare1"></view>
				<view>分享</view>
			</view>
			<view>
				<view class="iconfont iconmessage"></view>
				<view>{{info.comments_count | countStrFilter}}</view>
			</view>
			<view>
				<view class="iconfont iconzan"></view>
				<view>{{info.video_play_count | countStrFilter}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter,countStrFilter } from "@/filters/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
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
