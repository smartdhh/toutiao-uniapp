<template>
	<view class="commsg uppermsg" @click="onSwitchDetail(info)">
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
	
		import { switchDetailPage } from "@/core/app.js";
	export default {
		props: { info: { default: () => ({}) }, isupper: { default: false } },
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
	.uppermsg {
		padding-top: 0;
	}

</style>
