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
				// 如果父组件传递了click方法则调用父组件
				if (this.$listeners['click']) {
					this.$emit('click');
				} else {
					uni.navigateBack();
				}
			}
		}
	}

</script>

<style lang="scss">
	.backbtn {
		font-size: 40upx;
	}

</style>
