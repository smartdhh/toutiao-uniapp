<script>
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success(e) {}
			});
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style lang="scss">
	/* 此处在app中可能会有问题，需要引入https:// */
	@import "./static/css/iconfont.css";

	* {
		box-sizing: border-box;
	}

	.page {
		padding: 180upx 30upx 20upx;
		//#ifdef  APP-PLUS
		padding-top: 230upx;
		//#endif
	}

	.flex-between {
		@include flex-between
	}

	.flex-column {
		flex-direction: column;
		align-items: flex-start;
	}

	.text-ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.commsg {
		padding: 20upx 0;

		.title {
			padding-bottom: 8upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
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
			padding-top: 4upx;

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


</style>
