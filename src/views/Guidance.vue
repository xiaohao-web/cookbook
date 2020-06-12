<template>
	<div class="guidance">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="swiper-img">
						<img :src="require('../assets/imgs/cate1.jpg')" alt="" class="img-box">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="swiper-img">
						<img :src="require('../assets/imgs/cate2.jpg')" alt="" class="img-box">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="swiper-img swiper-position">
						<img :src="require('../assets/imgs/cate3.jpg')" alt="" class="img-box">
						<div class="btn">
							<van-button type="info" @click='goHome'>跳过</van-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'

	export default {
		name: "Guidance",
		
		mounted() {
			new Swiper('.swiper-container')
		},
		
		methods:{
			goHome(){
				this.$router.push({name:'Home'})
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.van-button--info{
		opacity: 0.8;
		background-color: #F92600;
		color: white;
		border-color: #F92600;
	}
	
	.btn{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 70%;
	}
	
	.swiper-position{
		position: relative;
	}
	
	.guidance{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	
	.img-box{
		height: 100%;
	}
	
	.swiper-img{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	
	.swiper - container {
		width: 100 %;
		height: 100 %;
	}

	.swiper - slide {
		text - align: center;
		font - size: 18 px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit - box;
		display: -ms - flexbox;
		display: -webkit - flex;
		display: flex;
		- webkit - box - pack: center;
		- ms - flex - pack: center;
		- webkit - justify - content: center;
		justify - content: center;
		- webkit - box - align: center;
		- ms - flex - align: center;
		- webkit - align - items: center;
		align - items: center;
	}
</style>
