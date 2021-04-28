<template>
	<view class="detail page-nocategory">
		<view class="page-header">
			<com-back></com-back>
			<view class="detail-tool">
				<view class="iconfont iconerji"></view>
				<view class="iconfont iconsearch"></view>
				<view class="iconfont iconmore"></view>
			</view>
		</view>
		<view class="detail-content">
			<view class="title">{{info.title}}</view>
			<com-avatar :info="{media_avatar_url:info.media_user.avatar_url,source:info.source,publish_time:info.publish_time}"></com-avatar>
			<view v-html="info.content">
			</view>
		</view>
		<com-comments :id="info.gid" :request="requestCount"></com-comments>
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
</template>

<script>
	import comBack from "@/components/common/back.vue";
	import comAvatar from "@/components/common/avatar.vue";
	import comComments from "@/components/common/comments.vue";
	import comBadge from "@/components/common/badge.vue";
	import { detailUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { homeCategory } from "@/constants/app.js";
	import { publishAgoFilter } from "@/filters/app.js";
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
			comBadge
		},
		filters: {
			publishAgoFilter
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
	.detail {
		padding-bottom: 100upx;

		.comavatar {
			padding-bottom: 40upx;
		}

		.title {
			font-size: 50upx;
			font-weight: bold;
			line-height: 150%;
			padding: 40upx 0 60upx 0;
		}

		.detail-tool {
			display: flex;
			align-items: center;

			.iconfont {
				margin-left: 40upx;
				font-size: 40upx;
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
