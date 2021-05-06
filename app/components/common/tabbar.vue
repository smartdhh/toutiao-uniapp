<template>
	<view class="tabbar flex-between">
		<view v-for="item,index in tabbarData" :class="{'tabbar-item':true,active:item.key===activeKey}" :key="index" @click="onSwitchPage(item,index)">
			<view :class="['iconfont','icon'+item.key]"></view>
			<view>{{item.name}}</view>
		</view>
	</view>
</template>
<script>
	import { tabbarData } from "@/constants/app.js"
	export default {
		props: { activeKey: { default: "" } },
		data() {
			return {
				tabbarData
			};
		},
		methods: {
			onSwitchPage({ key }, index) {
				uni.switchTab({
					url: `/pages/${key}/${key}`,
				})
			},
		}
	}

</script>
<style lang="scss">
	.tabbar {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		padding: 10upx 70upx;
		background-color: $base-silver-color;
		color: #8a8a8a;
		z-index: 10;

		.tabbar-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 20upx;

			.iconfont {
				font-size: 46upx;
			}

			&.active {
				color: $base-red-color;
			}
		}
	}

</style>
