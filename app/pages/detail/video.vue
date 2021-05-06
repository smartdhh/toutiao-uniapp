<template>
	<view class="videodetail page-nocategory page-videopage">
		<view class="page-header">
			<com-back classname="videoback"></com-back>
			<view class="detail-tool">
				<view class="iconfont iconerji"></view>
				<view class="iconfont iconsearch"></view>
				<view class="iconfont iconmore"></view>
			</view>
		</view>
		<view class="videomain page-videomain">
			<video-play :videoid="info.video_id" :poster="info.poster_url"></video-play>
			<com-avatar classname="videoavatar" :info="{media_avatar_url:info.media_user.avatar_url,source:info.source,publish_time:info.publish_time}"></com-avatar>
		</view>
		<view class="title">{{info.title}}</view>
		<view class="videootherinfo">
			<view>
				{{info.video_play_count | countStrFilter}}次播放
			</view>
			<view>
				{{info.publish_time | publishAgoFilter}}发布
			</view>
		</view>
		<com-comments :id="info.gid" :request="requestCount"></com-comments>
		<view class="page-footer">
			<view class="page-footer">
				<view class="writemsg flex-between">
					<view class="iconfont iconwrite"></view>
					<input type="text" placeholder="写评论..."></input>
				</view>
				<com-badge :count="info.comment_count" icon="iconmessage"></com-badge>
				<view class="iconfont iconstar"></view>
				<view class="iconfont iconzan"></view>
				<view class="iconfont iconshare2"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import comBack from "@/components/common/back.vue";
	import comAvatar from "@/components/common/avatar.vue";
	import comComments from "@/components/common/comments.vue";
	import comBadge from "@/components/common/badge.vue";
	import videoPlay from "@/components/video/play.vue";
	import { detailUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";
	import { publishAgoFilter, countStrFilter } from "@/filters/app.js";
	export default {
		data() {
			return {
				info: { media_user: {} },
				requestCount: 1
			};
		},
		components: {
			comBack,
			comAvatar,
			comComments,
			comBadge,
			videoPlay
		},
		filters: {
			publishAgoFilter,
			countStrFilter
		},
		onLoad(option) {
			getJsonData(detailUrl.info, option).then(resp => {
				this.info = resp;
			})
		},
		onReachBottom() {
			this.requestCount++;
		},
	}

</script>

<style lang="scss">
	.videodetail {
		padding-bottom: 100upx;

		.videomain {
			position: fixed;
			left: 0;
			width: 100%;
			z-index: 4;
		}

		.videoavatar {
			padding: 20upx 30upx 20upx;
			background-color: white;
		}

		.videootherinfo {
			@include flex-between;
			justify-content: flex-start;
			color: silver;
			font-size: 28upx;

			view {
				padding-right: 30upx;
			}
		}

		.page-header {
			background-color: transparent;
		}

		.videoback {
			color: white;
		}

		.title {
			font-size: 38upx;
			font-weight: bold;
			line-height: 150%;
			padding: 0upx 0 20upx 0;
		}

		.detail-tool {
			display: flex;
			align-items: center;

			.iconfont {
				margin-left: 40upx;
				font-size: 40upx;
				color: white;
			}
		}

		.page-footer {
			@include flex-between;
			padding: 20upx 30upx;
			background-color: white;

			.iconfont {
				font-size: 40upx;
			}

			.writemsg {
				background-color: #f2f2f2;
				padding: 10upx 20upx;
				border-radius: 40upx;

				input {
					font-size: 28upx;
					width: 240upx;
				}
			}

			.iconwrite {
				font-size: 28upx;
				padding-right: 10upx;
			}
		}
	}

</style>
