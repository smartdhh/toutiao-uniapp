<template>
	<view class="commsg uppermsg">
		<view class="title">
			{{info.title}}
		</view>
		<view class="commsgfooter">
			<view v-if="isupper" class="upper">置顶</view>
			<view class="author">{{info.source}}</view>
			<view class="comment">{{info.comments_count}}条评论</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: { info: { default: () => ({}) }, isupper: { default: false } },
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
