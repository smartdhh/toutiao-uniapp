<template>
	<view class="combadge">
		<view :class="['iconfont',icon]"></view>
		<view class="count">{{count | countStrFilter}}</view>
	</view>
</template>
<script>
	import { countStrFilter, publishAgoFilter } from "@/filters/app.js";
	export default {
		props: { count: { default: 0 }, icon: { defualt: '' } },
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
	.combadge {
		position: relative;

		.iconfont {
			font-size: 40upx;
		}

		.count {
			position: absolute;
			color: white;
			background-color: $base-red-color;
			font-size: 14upx;
			padding: 4upx;
			line-height: 100%;
			border-radius: 10upx;
			right: -16upx;
			top: -8upx;
		}
	}

</style>
