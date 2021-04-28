<template>
	<view class="commsg" @click="onSwitchDetail(info)">
		<view class="commsgheader">
			<image :src="info.media_avatar_url"></image>
			<view class="info">
				<view class="name">{{info.source}}</view>
				<view class="sub">由{{info.source}}推荐的广告</view>
			</view>
		</view>
		<view class="title">
			{{info.title}}
		</view>
		<view class="preview">
			<image :src="info.image_url || info.middle_image" mode="widthFix"></image>
		</view>
		<view class="commsgfooter">
			<view>广告</view>
			<view class="go">
				<view class="iconfont icongotolink"></view>
				<view>去{{info.source}}</view>
			</view>
			<view class="iconfont iconcross"></view>
		</view>
	</view>
</template>
<script>
	import { switchDetailPage } from "@/core/app.js";

	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		methods: {
			onSwitchDetail(item) {
				switchDetailPage(item)
			}
		}
	}

</script>
<style lang="scss">
	.admsg {
		padding: 30upx 0;
	}

</style>
