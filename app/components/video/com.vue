<template>
	<view class="commsg videomsg videocom" @click="onSwitchDetail(info)">
		<view class="commsgheader">
			<view>
				<image :src="info.media_info && info.media_info.avatar_url"></image>
				<view class="info">
					<view class="name">{{info.source}}</view>
					<view class="sub">{{parseInt(Math.random()*100000000) | publishAgoFilter}}前更新</view>
				</view>
			</view>
			<view class="toolfooter">
				<view class="comments">
					<view class="iconfont iconmessage"></view>
					<view>{{info.comment_count | countStrFilter}}</view>
				</view>
				<view class="iconfont iconmore"></view>
			</view>
		</view>
		<view class="preview">
			<view class="title text-ellipsis">{{info.title}}</view>
			<image :src="info | imgSrcFilter" mode="widthFix"></image>
			<view class="iconfont iconvideo"></view>
			<view class="time">{{info.video_duration | videoLengthFilter}}</view>
			<view class="count">{{info.video_detail_info? info.video_detail_info.video_watch_count:parseInt(Math.random()*100000) | countStrFilter}}次</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter, imgSrcFilter, videoLengthFilter } from "@/filters/app.js";
	import { switchDetailPage } from "@/core/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
			imgSrcFilter,
			publishAgoFilter,
			countStrFilter,
			videoLengthFilter
		},
		methods: {
			onSwitchDetail(item) {
				switchDetailPage(item, 'video')
			}
		}
	}

</script>
<style lang="scss">
	.videocom {
		.commsgheader {
			display: flex;
			justify-content: space-between;
			padding: 0 20upx 20upx;

			&>view {
				display: flex;
				align-items: center;
			}

			.toolfooter {
				.comments {
					padding-right: 40upx;
				}

				.iconmore {
					padding-right: 0upx;
				}
			}
		}

		.preview {

			.title,
			.count {
				position: absolute;
				z-index: 10;
				color: white;
			}

			.title {
				top: 20upx;
				left: 20upx;
				width: calc(100% - 80upx);
				display: block;
			}

			.count {
				bottom: 20upx;
				right: 120upx;
				font-size: 24upx;
			}
		}
	}

</style>
