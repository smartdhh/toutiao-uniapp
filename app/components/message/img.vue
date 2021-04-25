<template>
	<view class="commsg imgmsg">
		<view class="title">{{info.title}}</view>
		<view v-if="Math.random()>0.8" class="sub-title">{{info.abstract}}</view>
		<view class="preview">
			<image v-for="item,index in info.image_list" :key="index" :src="item.url" mode="widthFix"></image>
		</view>
		<view class="commsgfooter">
			<view class="author">{{info.source}}</view>
			<view class="comment">{{info.comments_count | countStrFilter}}条评论</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter } from "@/filters/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
			countStrFilter
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

	.imgmsg {
		.preview {
			@include flex-between;

			image {
				padding-right: 10upx;

				&:last-child {
					padding-right: 0;
				}
			}
		}
	}

</style>
