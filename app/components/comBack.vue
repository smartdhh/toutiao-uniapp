<template>
	<view :class="['backbtn','iconfont','iconleft',classname]" @click="onSwitchBack()"></view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: { classname: { default: '' } },
		methods: {
			onSwitchBack() {
				uni.navigateBack()
			}
		}
	}

</script>

<style lang="scss">
	.backbtn {
		font-size: 40upx;
	}

</style>
