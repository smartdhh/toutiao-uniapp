<template>
	<view class="commsg hotmsg">
		<view class="hotheader">
			<view class="tag">热榜</view>
			<view class="title">今日热门事件</view>
		</view>
		<view class="flex-between content">
			<view class="flex-between flex-column">
				<view class="title"> 人大教授：应该把拼多多罚到倾家荡产 </view>
				<view class="commsgfooter">
					<view class="visitor">691.9万人都在看</view>
				</view>
			</view>
			<view class="preview">
				<image src="http://192.168.43.72:3203/public/img/home/ad1.jpg" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>
<script>
	import { category as defaultCategory } from "@/constants/app.js"
	export default {
		name: "upper",
		props: { comments_count: { default: 0 }, source: { default: '头条' }, title: { default: '' } },
		data() {
			return {};
		},
		methods: {
			onSwitchCategory(item, index) {
				this.currentIndex = index
			}
		}
	}
</script>
<style lang="scss">
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
</style>
