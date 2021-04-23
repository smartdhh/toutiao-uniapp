<template>
	<view class="commsg uppermsg">
		<view class="title">
			{{title}}
		</view>
		<view class="commsgfooter">
			<view class="upper">置顶</view>
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
