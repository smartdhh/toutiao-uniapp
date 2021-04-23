<template>
	<view class="commsg imgmsg">
		<view class="title">{{title}}</view>
		<view class="sub-title">{{abstract}}</view>
		<view class="preview">
			<image v-for="{url},iindex in image_list" :src="url" mode="widthFix"></image>
		</view>
		<view class="commsgfooter">
			<view class="author">{{source}}</view>
			<view class="comment">{{comments_count}}条评论</view>
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
	.uppermsg {
		padding-top: 0;
	}
</style>
