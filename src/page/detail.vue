<template>
	<div class="page-detail">
		<el-row class="m-crumbs">
			<crumbs />
		</el-row>
		<el-row class="m-sum-card">
			<dt>
				<h1>{{detailData.title}}</h1>
				<el-rate
				  v-model="detailData.score"
				  disabled
				  
				  text-color="#ff9900"
				  score-template="{value}">

				</el-rate>
				<span>{{detailData.score}}分</span>
				<span>人均￥{{detailData.avgPrice}}</span>
				<ul>
					<li>地址：{{detailData.address}}</li>
					<li>电话：{{detailData.phone}}</li>
					<li>营业时间：{{detailData.businessTime}}</li>
				</ul>

			</dt>
			<dd>
				<img :src="detailData.imgUrl" alt="">
			</dd>

		</el-row>
		<el-row class="m-detail-list">
			<el-col :span="19">
				<el-row>
					<h3>商家团购及优惠</h3>
					<ul>
						<div>
							<img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
							<span>请登录后查看详细团购优惠</span>
							
							<el-button type="primary" round>
								<router-link :to="{name: 'login'}">立即登录</router-link>
							
							</el-button>
						</div>
	
					</ul>
				</el-row>
				<el-row>
					<h3>推荐菜</h3>
					<ul class="recommend clear">
						<span v-for="(item,index) in detailData.recommend" :key="index">{{item}}</span>
					</ul>
				</el-row>
				<el-row></el-row>

			</el-col>
			<el-col :span="5">
				<recommend />
			</el-col>

		</el-row>
	</div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import Recommend from '@/components/products/favious.vue'
import api from '@/api/index.js'
export default {
	data() {
		return {
			detailData: [],
		}
	},
	created() {
		api.detail().then(res => {
			console.log(res.data);
			this.detailData = res.data.data;
		})
	},
	components:{
    	crumbs,
    	Recommend

    },
}
</script>

<style lang="scss">
	@import '@/assets/css/detail/index.scss'

</style>
<style lang="scss">
	@import '@/assets/css/products/index.scss'
</style>