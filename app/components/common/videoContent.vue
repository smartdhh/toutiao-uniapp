<template>
	<view class="videocontent commsg">
		<scroll-view scroll-x="true" @scrolltolower="onGetMoreVideoData()">
			<view class="videoitem" v-for="item,index in videoList" :key="index">
				<image :src="item.src"></image>
				<view class="videoname text-ellipsis">{{item.title}}</view>
			</view>
		</scroll-view>
		<view class="commsgfooter">
			<view class="author">精彩小视频</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: "comHead",
		data() {
			return {
				videoList: []
			};
		},
		methods: {
			onGetMoreVideoData(item, index) {}
		}
	}
</script>
<style lang="scss">
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
</style>
