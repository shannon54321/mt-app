<template>
	<div class="m-istyle">
		<dl @mouseover="over" :class="nav.class">
			<dt>{{nav.title}}</dt>
			<dd v-for="(item,index) in nav.list" 
			:key="index" 
			:class="{active: kind == item.tab}" 
			:data-type="item.tab">{{item.text}}</dd>
			
		</dl>
		<ul class="ibody">
			<li v-for="(item,index) in resultaData[kind]" :key="index">
			    <el-card class="el-card" :body-style="{ padding: '0px' }" shadow="never">
			      <img :src="item.image" class="image">
			      <div class="cbody">
			        <div class="title" :title="item.title">{{item.title}}</div>
			        <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
			        <div class="price-info">
				        <span class="current-price-wrapper">
				        	<span class="price-symbol numfont">¥</span>
				        	<span class="current-price numfont">{{item.price}}</span>
				        </span>
				        <span class="sold bottom-right-info">{{item.address}}</span>
				       <!--  <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
				        <span class="sold bottom-right-info">{{item.address}}</span> -->
			        </div>
			       <!--  <div class="price-info" v-else-if="!item.rentNum">
				        <span class="current-price-wrapper">
				        	<span class="price-symbol numfont">¥</span>
				        	<span class="current-price numfont">抢光了</span>
				        </span>
			        </div>
			        <div class="price-info" v-else>
				        <span class="current-price-wrapper">
				        	<span class="price-symbol numfont">¥</span>
				        	<span class="current-price numfont">{{item.price_info.avg_price}}</span>
				        	<span class="units">/{{item.price_info.units}}</span>
				        </span>
			        </div> -->
			      </div>
			    </el-card>	  
			</li>
		</ul>
	</div>
</template>

<script>
import api from '@/api/index.js'
export default {
	data(){
		return {
			kind: 'all',
			resultaData: {},
			List: [{
				image: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@294w_166h_1e_1c',
				tilte: '东星贝儿凯客生日蛋糕',
				sub_title: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
				price_info: {
					current_price: 58,
					old_price: 128,
					avg_price: null,
					units: null
				},
				rentNum:10,
				address: '回龙观'
			},{
				image: '//p0.meituan.net/msmerchant/455f8fe67ab4818446dda10061d394ee109929.jpg@294w_166h_1e_1c',
				tilte: '慕巴夫鲜花主题蛋糕（后沙峪店）',
				sub_title: '蛋糕44选1,约8英寸',
				price_info: {
					current_price: null,
					old_price: null,
					avg_price: 1299,
					units: '人均'
				},
				rentNum:10,
				address: '后沙峪'
			}]
		}
	},
	props: [
		'nav'
	],
	created() {
		api.getResultProducts().then(res =>{

			this.resultaData = res.data.data;
		})
	},
	methods: {
		over(e){
			let dom = e.target;
			let tagName = dom.tagName.toLowerCase();
			if(tagName != 'dd'){
				return false;
			}
			this.kind = dom.getAttribute('data-type');

		}
	}

}
</script>

<style lang="scss">
	@import '@/assets/css/index/artistic.scss'
</style>