<template>
	<view class="comhead">
		<view class="search page-header" @tap="onSwitchSearch">
			<view class="search-content">
				<view class="iconfont iconsearch"></view>
				<view>房贷多长时间能批下来</view>
			</view>
			<view class="publish">
				<view class="iconfont iconadd"></view>
				<view class="name">发布</view>
			</view>
		</view>
		<view class="category">
			<view v-for="item,index in category" :class="{active:index===currentIndex}" :key="index" @click="onSwitchCategory(item,index)">{{item.name}}</view>
		</view>
	</view>
</template>
<script>
	import { category as defaultCategory } from "@/constants/app.js"
	export default {
		name: "comHead",
		props: { category: { default: () => defaultCategory }, defaultIndex: { default: 0 } },
		data() {
			return {
				currentIndex: this.defaultIndex
			};
		},
		methods: {
			onSwitchCategory(item, index) {
				this.currentIndex = index;
				this.$emit('onChangeCategory', item, index);
			},
			onSwitchSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}

</script>
<style lang="scss">
	.comhead {
		border-bottom: 1px solid #ececec;
		position: fixed;
		background-color: white;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 20;

		.page-header{
			position: static;
		}

		.search {
			font-size: 28upx;
			background-image: linear-gradient(to right, $base-red-color, #e75345);
			display: flex;
			align-items: center;
			justify-content: space-between;

			.search-content {
				display: flex;
				flex-grow: 1;
				flex-shrink: 1;
				padding: 16upx 24upx;
				background-color: white;
				border-radius: 40upx;
				align-items: center;

				.iconfont {
					padding-right: 20upx;
					font-size: 28upx;
				}
			}

			.publish {
				color: white;
				text-align: center;
				padding-left: 20upx;

				.iconfont {
					font-size: 40upx;
				}

				.name {
					font-size: 20upx;
				}
			}
		}

		.category {
			display: flex;
			flex-wrap: nowrap;
			overflow: auto;
			padding: 0 20upx;

			view {
				flex-shrink: 0;
				padding: 14upx 18upx;
				position: relative;

				&::after {
					content: '';
					width: calc(60% - 18upx);
					height: 6upx;
					background-color: transparent;
					position: absolute;
					border-radius: 6upx;
					bottom: 0px;
					left: 50%;
					transform: translateX(-50%);
				}

				&.active {
					color: $base-red-color;

					&::after {
						background-color: $base-red-color;
					}
				}
			}
		}
	}

</style>
