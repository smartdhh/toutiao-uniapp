<template>
	<view class="comcomments">
		<view class="title">评论</view>
		<view class="comcomments-content">
			<view class="comcomments-item" v-for="item,index in list" :key="index">
				<view class="commentsheader">
					<view class="authorinfo">
						<image :src="item.user_profile_image_url"></image>
						<view class="name">{{item.user_name}}</view>
					</view>
					<view class="zan">
						<view>{{item.digg_count}}</view>
						<view class="iconfont iconzan"></view>
					</view>
				</view>
				<view class="commentsbody">
					{{item.text}}
				</view>
				<view class="commentsfooter">
					<view class="replayinfo">
						<view class="">{{item.reply_count | countStrFilter}}回复</view>
						<view class="iconfont iconright"></view>
					</view>
					<view>{{item.create_time | publishAgoFilter}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter } from "@/filters/app.js";
	import { detailUrl } from "@/constants/url.js";
	import { getJsonBody } from "@/core/api.js";
	export default {
		props: { id: { default: "" }, request: { default: 1 } },
		data() {
			return {
				list: [],
				pageindex: 1,
				totalCount: 1,
				isrequest: false
			};
		},
		methods: {
			getCommentsInfo(isreset) {
				if (this.id && this.totalCount > this.list.length) {
					this.isrequest = true;
					getJsonBody(detailUrl.comments, { id: this.id, pageindex: this.pageindex }).then(resp => {
						let curComments = (resp.data || []).map((item) => item.comment);
						this.list = (isreset ? [] : this.list).concat(curComments);
						this.isrequest = false;
						this.pageindex++;
						this.totalCount = resp.total_number;
					})
				}
			}
		},
		watch: {
			id: function(newValue, oldValue) {
				this.getCommentsInfo(true)
			},
			request: function(newValue, oldValue) {
				this.getCommentsInfo()
			}
		},
		filters: {
			publishAgoFilter,
			countStrFilter
		}
	}

</script>
<style lang="scss">
	.comcomments {
		.title {
			font-weight: bold;
			font-size: 36upx;
			padding: 40upx 0 20upx;
			margin-bottom: 40upx;
			border-bottom: 1px solid $base-silver-color;
		}

		.comcomments-content {
			padding: 0 20upx;

			.comcomments-item {
				padding-bottom: 40upx;

				.commentsheader {
					@include flex-between;

					.authorinfo {
						@include flex-between;
						font-size: 28upx;
						font-weight: bold;

						image {
							width: 60upx;
							height: 60upx;
							border-radius: 60upx;
							margin-right: 20upx;
						}
					}

					.zan {
						@include flex-between;
						font-size: 24upx;

						.iconfont {
							padding-left: 10upx;
						}
					}
				}

				.commentsbody {
					padding: 16upx 0 20upx 80upx;
					font-size: 32upx;
				}

				.commentsfooter {
					padding-left: 80upx;
					font-size: 22upx;
					@include flex-between;
					justify-content: flex-start;
					color: silver;

					.replayinfo {
						@include flex-between;
						background-color: $base-silver-color;
						margin-right: 30upx;
						padding: 10upx 16upx;
						border-radius: 20upx;
						color: black;
						line-height: 100%;

						.iconfont {
							font-size: 20upx;
							margin-left: 8upx;
						}
					}
				}
			}
		}
	}

</style>
