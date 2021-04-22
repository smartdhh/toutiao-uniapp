<template>
	<view class="home">
		<com-head></com-head>
		<view class="page">
			<view v-for="{item_id,title,like_count,publish_time,abstract,media_name,media_info,comments_count,image_url,image_list,video_duration,large_image_url,video_detail_info},index in newsList" :key="index" :class="{index,image_list,large_image_url,video_detail_info} | viewClassFilter">
				<template v-if="index==3 && (large_image_url || image_url)">
					<view class="commsgheader">
						<image :src="media_info.avatar_url"></image>
						<view class="info">
							<view class="name">{{media_info.name}}</view>
							<view class="sub">由{{media_info.name}}推荐的广告</view>
						</view>
					</view>
					<view class="title">
						{{title}}
					</view>
					<view class="preview">
						<image :src="large_image_url || image_url" mode="widthFix"></image>
					</view>
					<view class="commsgfooter">
						<view>广告</view>
						<view class="go">
							<view class="iconfont icongotolink"></view>
							<view>去{{media_info.name}}</view>
						</view>
						<view class="iconfont iconcross"></view>
					</view>
				</template>
				<template v-else-if="index===8 && (large_image_url || image_url)">
					<view class="commsgheader">
						<image :src="media_info.avatar_url"></image>
						<view class="info">
							<view class="name">{{media_info.name}}</view>
							<view class="sub">{{publish_time | publishAgoFilter}}前更新</view>
						</view>
					</view>
					<view class="title">
						{{title}}
					</view>
					<view class="preview">
						<image :src="large_image_url || image_url" mode="widthFix"></image>
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
							<view>{{like_count}}</view>
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
							<image :src="large_image_url || image_url"></image>
						</view>
					</view>
				</template>
				<template v-else>
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
						<view v-if="!!video_detail_info" class="preview">
							<image :src="large_image_url || image_url" mode="widthFix"></image>
							<view class="iconfont iconvideo"></view>
							<view class="time">{{video_duration | videoLengthFilter}}</view>
						</view>
					</template>
					<view class="commsgfooter">
						<view class="upper" v-if="index<2">置顶</view>
						<view class="author">{{media_name}}</view>
						<view class="comment">{{comments_count}}条评论</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	import { homeUrl } from "@/constants/url.js"
	import { getJsonData } from "@/core/api.js"
	export default {
		data() {
			return {
				newsList: []
			};
		},
		filters: {
			publishAgoFilter(value) {
				let result = "刚刚";
				let seconds = value / 1000;
				if (value > 60) {
					let years = parseInt(seconds / 60 / 60 / 24 / 365);
					let days = parseInt(seconds / 60 / 60 / 24);
					let hours = parseInt(seconds / 60 / 60);
					let minutes = parseInt(seconds / 60);
					result = years ? years + '年' : (days ? days + '天' : (hours ? hours + '小时' : (minutes ? minutes + '分钟' : '')))
				}
				return result;
			},
			videoLengthFilter(value) {
				// 获取小时
				let hours = parseInt(value / 60 / 60);
				let minutes = parseInt(value / 60 - 60 * hours);
				let seconds = value % 60;
				let result = [hours, minutes, seconds].reduce((pre, cur, index) => {
					if (!(index === 0 && hours === 0)) {
						pre.push((cur + '').padStart(2, '0'));
					}
					return pre
				}, [])
				return result.join(':');
			},
			viewClassFilter(value) {
				let { index, image_url, image_list, large_image_url, video_detail_info } = value;
				let classInfo = "";
				if (index < 2) {
					classInfo = 'uppermsg';
				} else if (index === 3 && (large_image_url || image_url)) {
					classInfo = 'admsg';
				} else if (index % 12 === 0) {
					classInfo = "hotmsg";
				} else if (image_list.length > 0) {
					classInfo = 'imgmsg'
				} else if (!!video_detail_info) {
					classInfo = 'videomsg'
				}
				return ['commsg', classInfo];
			}
		},
		components: {
			comHead
		},
		onPullDownRefresh() {
			getJsonData(homeUrl.news).then(resp => {
				this.newsList = resp;
				uni.stopPullDownRefresh();
			})
		},
		onReachBottom() {
			getJsonData(homeUrl.news).then(resp => {
				this.newsList = this.newsList.concat(resp);
			})
		},
		mounted() {
			getJsonData(homeUrl.news).then(resp => {
				this.newsList = resp;
			})
		},
		methods: {
			onGetMoreVideoData() {},
		}
	}
</script>

<style lang="scss">
	// @import "../../uni.scss";
	.videocontent {
		white-space: nowrap;

		.videoitem {
			position: relative;
			display: inline-block;
			margin-right: 20upx;
			width: 300upx;
			height: 500upx;

			.videoname {
				position: absolute;
				color: white;
				bottom: 20upx;
				left: 20upx;
				font-size: 28upx;
				width: calc(100% - 40upx);
			}

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.commsg {
		padding: 20upx 0;

		.title {
			padding-bottom: 8upx;
		}

		.sub-title {
			font-size: 28upx;
			color: #8a8a8a
		}

		.preview {
			position: relative;
			color: white;

			image {
				width: 100%;
			}

			.time,
			.iconvideo {
				position: absolute;
				z-index: 10;
			}

			.iconvideo {
				font-size: 60upx;
				top: 50%;
				left: 50%;
				transform: translate3d(-50%, -50%, 0);
			}

			.time {
				right: 20upx;
				bottom: 20upx;
				font-size: 24upx;
			}
		}

		.commsgheader {
			display: flex;
			padding-bottom: 20upx;

			image {
				height: 72upx;
				width: 72upx;
				border-radius: 72upx;
				margin-right: 20upx;
			}

			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 30upx;
					font-weight: bold;
				}

				.sub {
					@include sub;
				}
			}
		}

		.hotheader {
			font-size: 28upx;
			font-weight: bold;
			display: flex;
			padding-bottom: 10upx;
			align-items: center;

			.tag {
				background-color: $base-red-color;
				font-size: 20upx;
				color: white;
				font-weight: normal;
				padding: 2upx 6upx;
				border-radius: 6upx;
				margin-right: 10upx;
			}

			.title {
				padding-bottom: 0;
			}
		}

		.commsgfooter {
			display: flex;
			position: relative;

			&>view {
				@include sub;
				padding-right: 20upx;

				&:last-child {
					padding-right: 0;
				}

				&.upper {
					color: $base-red-color;
				}

				&.go {
					color: $base-red-color;
					position: absolute;
					right: 20upx;
					top: 0upx;
					display: flex;
					align-items: center;

					.iconfont {
						font-size: 24upx;
						padding-right: 10upx;
					}
				}

				&.iconfont {
					font-size: 20upx;
				}

				&.iconcross {
					position: absolute;
					right: 0;
					top: 8upx
				}
			}
		}

		.toolfooter {
			display: flex;

			&>view {
				display: flex;
				align-items: center;
				padding-right: 80upx;
				font-size: 28upx;

				.iconfont {
					padding-right: 16upx;
				}
			}
		}
	}

	.admsg {
		padding: 30upx 0;
	}

	.hotmsg {
		padding: 20upx 0;

		.content {
			height: 160upx;

			&>view {
				height: 100%;
			}

			.preview {
				width: 200upx;

				image {
					height: 100%;
					width: 100%;
				}
			}
		}

	}

	.imgmsg {
		.preview {
			@include flex-between;

			image {
				padding-right: 10upx;

				&:last-child {
					padding-right: 0;
				}
			}
		}
	}

	.uppermsg {
		padding-top: 0;
	}
</style>
