<template>
	<div class="m-recommend-wrapper">
		<div class="m-recommend">
			<div class="top-nav">
				<span>猜你喜欢</span>
			</div>
			<router-link v-for="(item,index) in recommendData" :key="index" :to="{name: 'detail',params:{name:item.title}}">
				<div class="recommend-list">
					<img src="http://p0.meituan.net/mogu/e2c1bdd9600c499ef0c5168572d4e25b86943.jpg@380w_212h_1e_1c" alt="">
					<div class="info-box">
						<span class="title">{{item.title}}</span>
						<el-rate
						  v-model="item.score"
						  disabled
						  
  						  text-color="#ff9900"
  						  score-template="{value}"
  					      >
						
						</el-rate>
						<span class="comment-number">{{item.commentNum}}个评价</span>
						<span class="desc">{{item.areaName}}</span>
						<div class="price">
							<span>￥
								<span class="price-num">{{item.lowPrice}}</span>
							起</span>
						</div>
						
					</div>
				</div>
			</router-link>

		</div>
	</div>
	
</template>

<script>
import api from '@/api/index.js'
export default {
	data(){
		return {
			recommendData: [],

		}
	},
	created(){
		api.recommend().then(res =>{
			console.log(res.data.data);
			this.recommendData = res.data.data;
		})
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/products/favious.scss'
</style>