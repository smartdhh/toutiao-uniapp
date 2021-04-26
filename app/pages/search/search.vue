<template>
	<view class="search page-nocategory">
		<view class="search-body page-header">
			<com-back></com-back>
			<view class="search-content">
				<view class="iconfont iconsearch"></view>
				<input type="text" placeholder="房贷多长时间能批下来" />
			</view>
			<view class="search-btn">搜索</view>
		</view>
		<view class="result-content up-content" v-show="isShowServer">
			<view v-for="item,index in upList" :key="index">
				<view>{{item.word}}</view>
			</view>
		</view>
		<view>
			<view class="contentheader localheader">
				<view @click="onSwitchLocalView()">搜索历史</view>
				<view class="iconfont icondown"></view>
				<view class="iconfont icondelete" v-show="localList.length" @click="onClearLocalSearch()"></view>
			</view>
			<view class="result-content" v-show="isShowLocal">
				<view v-for="item,index in localList" :key="index">
					<view v-if="item.isding" class="iconfont icontuding"></view>
					<view class="inner-text">{{item.word}}</view>
				</view>
			</view>
		</view>
		<view>
			<view class="contentheader" v-show="isShowServer">
				<view>猜你喜欢</view>
				<view class="iconfont iconunsee" @click="onSwitchShowServer"></view>
			</view>
			<view class="contentheader viewallcontent" v-show="!isShowServer">
				<view class="iconfont iconsee"></view>
				<view @click="onSwitchShowServer">查看全部推荐</view>
			</view>
			<view class="result-content favor-content" v-show="isShowServer">
				<view v-for="item,index in favorList" :key="index">
					<view>{{item.word}}</view>
				</view>
			</view>
		</view>
		<view class="search-footer">
			<view>无恒模式</view>
			<switch @change="onSwitchMark"></switch>
		</view>
	</view>
</template>

<script>
	import comBack from "@/components/comBack.vue";
	import { searchUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	import { SEARCH_LOCAL_KEY } from "@/constants/app.js";

	export default {
		data() {
			return {
				isShowServer: true,
				isShowLocal: true,
				upList: [],
				favorList: [],
				localList: [
					{ word: '公积金贷款后因离职是否能够继续使用公积金还贷', isding: true },
					{ word: '钓鱼城' },
					{ word: 'docker harbor' },
					{ word: 'docker私有仓库' },
					{ word: 'uniapp头部文字颜色' },
					{ word: '公积金贷款公式' },
					{ word: '公孙渊' },
					{ word: '商转公流程' },
					{ word: 'jenkins中文化' },
					{ word: '蒙哥大汉' }
				]
			};
		},
		mounted() {
			getJsonData(searchUrl.info).then(resp => {
				let list = resp.suggest_word_list || [];
				this.upList = list.slice(0, 2) || [];
				this.favorList = list.slice(3) || [];
			});
			// this.localList = uni.getStorageInfoSync(SEARCH_LOCAL_KEY) || []
		},
		components: {
			comBack
		},
		methods: {
			onSwitchBack() {
				uni.navigateBack()
			},
			onSwitchMark(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			onSwitchShowServer() {
				this.isShowServer = !this.isShowServer;
			},
			onClearLocalSearch() {
				uni.setStorageSync(SEARCH_LOCAL_KEY, [])
			},
			onSwitchLocalView() {
				this.isShowLocal = !this.isShowLocal;
			}
		}
	}

</script>

<style lang="scss">
	.search {

		.search-body {
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			@include flex-between;

			.search-content {
				background-color: #f2f2f2;
				padding: 16upx 24upx;
				border-radius: 40upx;
				flex-grow: 1;
				display: flex;
				align-items: center;
				margin: 0 20upx;

				.iconsearch {
					padding-right: 20upx;
					font-size: 28upx;
				}

				input {
					font-size: 28upx;
				}
			}
		}

		.contentheader {
			@include flex-between;
			padding-top: 20upx;
			color: #8f8f8f;
			font-size: 30upx;
		}

		.localheader {
			justify-content: flex-start;
			position: relative;

			.iconfont {
				font-size: 24upx;
				padding-left: 10upx;
			}

			.icondelete {
				font-size: 30upx;
				color: red;
				position: absolute;
				right: 0upx;
				top: 20upx;
			}
		}

		.viewallcontent {
			justify-content: center;

			.iconfont {
				padding-right: 10upx;
			}
		}

		.result-content {
			flex-wrap: wrap;
			@include flex-between;
			padding: 0 0 10upx 0;
			border-bottom: 1px solid #dbdbdb;
			font-size: 32upx;

			&>view {
				width: 50%;
				padding-right: 30upx;
				margin: 16upx 0;
				display: flex;
				align-items: center;

				view {
					@include text-ellipsis;
				}

				.inner-text {
					width: calc(100% - 46upx);
				}

				.icontuding {
					padding-right: 10upx;
				}
			}

			&>view:nth-child(2n) {
				padding-right: 0upx;
				padding-left: 30upx;
				border-left: 1px solid #dbdbdb;
			}

			.icontuding {
				color: #e85456;
			}
		}

		.up-content {
			padding-top: 20upx;
		}

		.favor-content {
			border-bottom: none;
		}

		.search-footer {
			@include flex-between;
			border-top: 1px solid #dbdbdb;
			bottom: 0;
			left: 0;
			width: 100%;
			position: absolute;
			padding: 20upx;
		}
	}

</style>
