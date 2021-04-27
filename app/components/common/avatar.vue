<template>
	<view class="comavatar">
		<image :src="info.media_avatar_url"></image>
		<view class="info">
			<view class="name">{{info.source}}</view>
			<view class="sub">{{info.publish_time | publishAgoFilter}}前更新</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter } from "@/filters/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
			publishAgoFilter,
			countStrFilter
		}
	}

</script>
<style lang="scss">
	.comavatar {
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

</style>
