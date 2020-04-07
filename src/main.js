// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.use(VueMeta)

Vue.config.productionTip = false

Vue.directive('document-click',{
	bind(el,binding,vnode){
		document.addEventListener('click',binding.value,false);
		
	}
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  metaInfo() {
    return {
      title: this.$store.state.position.name,
      titleTemplate:'%s美团网-%s美食_酒店_旅游_团购_电影_吃喝玩乐',
      link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://fz.meituan.com/favicon.ico',
      }
      ],
    };
  },
  template: '<App/>'
})
