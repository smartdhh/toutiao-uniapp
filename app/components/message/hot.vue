<template>
	<view class="commsg hotmsg" @click="onSwitchDetail(info)">
		<view class="hotheader">
			<view class="tag">热榜</view>
			<view class="title">今日热门事件</view>
		</view>
		<view class="flex-between content">
			<view class="flex-between flex-column">
				<view class="title">
					{{info.title}}
				</view>
				<view class="commsgfooter">
					<view class="visitor">{{info.behot_time | countStrFilter}}人都在看</view>
				</view>
			</view>
			<view class="preview">
				<image :src="info.large_image_url || info.image_url || info.middle_image"></image>
			</view>
		</view>
	</view>
</template>
<script>
	import { publishAgoFilter, countStrFilter } from "@/filters/app.js";

	import { switchDetailPage } from "@/core/app.js";
	export default {
		props: { info: { default: () => ({}) } },
		data() {
			return {};
		},
		filters: {
			countStrFilter
		},
		methods: {
			onSwitchDetail(item) {
				switchDetailPage(item)
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
