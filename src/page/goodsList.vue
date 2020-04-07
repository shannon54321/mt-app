<template>
	<div class="page-product">
		<el-row class="m-crumbs">
			<crumbs />
		</el-row>
		<el-row>
			<el-col :span="19">
				<el-row>
					<categrop />
				</el-row>
				<el-row>
					<list />
				</el-row>
			</el-col>
			<el-col :span="5">
				<recommend />
			</el-col>

		</el-row>
	</div>
	
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import Categrop from '@/components/products/categrop.vue'
import List from '@/components/products/list.vue'
import Recommend from '@/components/products/favious.vue'

export default {
    components:{
    	crumbs,
    	Categrop,
    	List,
    	Recommend
    }
}
</script>

<style lang="scss">
	@import '@/assets/css/products/index.scss'
</style>