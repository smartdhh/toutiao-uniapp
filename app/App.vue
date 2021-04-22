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
</style>
