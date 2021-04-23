<template>
	<view class="commsg">
		<view class="commsgheader">
			<image :src="media_avatar_url"></image>
			<view class="info">
				<view class="name">{{source}}</view>
				<view class="sub">由{{source}}推荐的广告</view>
			</view>
		</view>
		<view class="title">
			{{title}}
		</view>
		<view class="preview">
			<image :src="image_url" mode="widthFix"></image>
		</view>
		<view class="commsgfooter">
			<view>广告</view>
			<view class="go">
				<view class="iconfont icongotolink"></view>
				<view>去{{source}}</view>
			</view>
			<view class="iconfont iconcross"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ad",
		props: { media_avatar_url: { default: '' }, image_url: { default: '' }, source: { default: '头条' }, title: { default: '' } },
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
	.admsg {
		padding: 30upx 0;
	}
</style>
