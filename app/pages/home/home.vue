<template>
	<view class="home">
		<header></header>
		<scroll-view scroll-y="true" @scrolltolower="onGetMorePageData">
			<view class="commsg">
				<view class="title">
					习近平将出席领导人气候峰会
				</view>
				<view class="commsgheader"></view>
				<view class="commsgfooter">
					<view class="type">置顶</view>
					<view class="author">新华网客户端</view>
					<view class="comment">26条评论</view>
					<view class="date">3小时前</view>
				</view>
				<view class="toolfooter">
					<view>
						<view class="iconfont iconshare1"></view>
						<view>分享</view>
					</view>
					<view>
						<view class="iconfont iconmessage"></view>
						<view>27</view>
					</view>
					<view>
						<view class="iconfont iconzan"></view>
						<view>116</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import header from "@/components/header.vue";
	export default {
		data() {
			return {

			};
		},
		components: {
			header
		},
		methods: {
			onGetMorePageData() {},
			onGetMoreVideoData() {},
		}
	}
</script>

<style lang="scss">

</style>
