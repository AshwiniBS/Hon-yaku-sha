import Vue from 'vue'
import App from './App'

import vueResource from 'vue-resource'
import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);

Vue.config.productionTip = false
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
        return {
            copyData: 'copy data'
        }
    },
 
  template: '<App/>',
  methods: {
        handleSuccess(e) {
            console.log(e);
        },
        handleError(e) {
            console.log(e);
        },
    },
  components: { App }
});
