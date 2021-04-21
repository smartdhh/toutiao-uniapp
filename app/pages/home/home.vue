<template>
	<view class="home">
		<com-head></com-head>
		<scroll-view scroll-y="true" @scrolltolower="onGetMorePageData" class="page">
			<view class="commsg uppermsg">
				<view class="title">
					习近平将出席领导人气候峰会
				</view>
				<view class="commsgfooter">
					<view class="upper">置顶</view>
					<view class="author">新华网客户端</view>
					<view class="comment">26条评论</view>
				</view>
			</view>
			<view class="commsg uppermsg">
				<view class="title">
					让青春在不懈的奋斗中绽放绚丽之花
				</view>
				<view class="commsgfooter">
					<view class="upper">置顶</view>
					<view class="author">新华网客户端</view>
					<view class="comment">26条评论</view>
				</view>
			</view>
			<view class="commsg uppermsg">
				<view class="title">
					在梁启超家乡江门重温少年中国说
				</view>
				<view class="commsgfooter">
					<view class="author">新华社</view>
					<view class="comment">26条评论</view>
				</view>
			</view>
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
			</view>

			<view class="commsg admsg">
				<view class="commsgheader">
					<image src="http://192.168.43.72:3203/public/img/luffy.jpg"></image>
					<view class="info">
						<view class="name">京东</view>
						<view class="sub">由京东推荐的广告</view>
					</view>
				</view>
				<view class="title">
					京东敖东品牌特惠！现秒杀价真便宜！
				</view>
				<view class="preview">
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
				</view>
				<view class="commsgfooter">
					<view>广告</view>
					<view class="go">
						<view class="iconfont icongotolink"></view>
						<view>去京东</view>
					</view>
					<view class="iconfont iconcross"></view>
				</view>
			</view>
			<view class="commsg">
				<view class="title">
					走向共和：和袁世凯谈清室退位后的优待条件，隆裕皇太后在这方面也够老辣的
				</view>
				<view class="preview">
					<image src="http://192.168.43.72:3203/public/img/home/movie1.jpg" mode="widthFix"></image>
					<view class="iconfont iconvideo"></view>
					<view class="time">03:49</view>
				</view>
				<view class="commsgfooter">
					<view class="author">风行影视听听</view>
					<view class="comment">26条评论</view>
					<view class="date">3小时前</view>
				</view>
			</view>
			<view class="commsg hotmsg">
				<view class="hotheader">
					<view class="tag">热榜</view>
					<view class="title">今日热门事件</view>
				</view>
				<view class="flex-between content">
					<view class="flex-between flex-column">
						<view class="title">
							人大教授：应该把拼多多罚到倾家荡产
						</view>
						<view class="commsgfooter">
							<view class="visitor">691.9万人都在看</view>
						</view>
					</view>
					<view class="preview">
						<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
					</view>
				</view>

			</view>
			<view class="commsg imgmsg">
				<view class="title">
					巨头突然宣布：涨价！很多人都爱喝
				</view>
				<view class="preview">
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
				</view>
				<view class="commsgfooter">
					<view class="author">光明网</view>
					<view class="comment">26条评论</view>
					<view class="date">3小时前</view>
				</view>
			</view>
			<view class="commsg">
				<view class="commsgheader">
					<image src="http://192.168.43.72:3203/public/img/luffy.jpg"></image>
					<view class="info">
						<view class="name">京东</view>
						<view class="sub">由京东推荐的广告</view>
					</view>
				</view>
				<view class="title">
					玩水上项目，也一定要学会及时刹车
				</view>
				<view class="preview">
					<image src="http://192.168.43.72:3203/public/img/home/info1.jpg" mode="heightFix"></image>
				</view>
				<view class="toolfooter">
					<view>
						<view class="iconfont iconshare1"></view>
						<view>分享</view>
					</view>
					<view>
						<view class="iconfont iconmessage"></view>
						<view>27</view>
					</view>
					<view>
						<view class="iconfont iconzan"></view>
						<view>116</view>
					</view>
				</view>
			</view>
			<view class="commsg imgmsg">
				<view class="title">
					都说“司马昭之心，路人皆知”，那司马昭到底有多嚣张，你真的知道吗！？
				</view>
				<view class="sub-title">
					司马昭是三国时魏国人，他父亲名叫司马懿，是魏国的大将。魏明帝曹叡死时，托付曹爽与司马懿辅佐齐王曹芳治理天下。
				</view>
				<view class="preview">
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
					<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
				</view>
				<view class="commsgfooter">
					<view class="upper">问答</view>
					<view class="author">剧透历史</view>
					<view class="comment">26条评论</view>
					<view class="date">3小时前</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import comHead from "@/components/comHead.vue";
	export default {
		data() {
			return {

			};
		},
		components: {
			comHead
		},
		methods: {
			onGetMorePageData() {},
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
