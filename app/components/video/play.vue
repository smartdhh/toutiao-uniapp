<template>
	<view class="videoplay">
		<video :poster="poster" :src="sources[0]" playsinline="true" webkit-playsinline="true" x5-playsinline="true" tabindex="2" mediatype="video">
		</video>
	</view>
</template>
<script>
	import { videoUrl } from "@/constants/url.js";
	import { getJsonData } from "@/core/api.js";
	export default {
		props: { videoid: { default: "" } },
		data() {
			return {
				poster: '',
				sources: []
			};
		},
		filters: {},
		methods: {
			getVideoPlayInfo(videoid) {
				getJsonData(videoUrl.info, { videoid }).then(resp => {
					this.poster = resp.poster_url;
					this.sources = Object.values(resp.video_list).map(({ main_url }) => main_url);
				})
			}
		},
		watch: {
			videoid: function(newValue, oldValue) {
				this.getVideoPlayInfo(newValue)
			}
		},
	}

</script>
<style lang="scss">
	.videoplay {
		width: 100%;
		height: 450upx;
		video {
			width: 100%;
			height: 100%;
		}
	}

</style>
