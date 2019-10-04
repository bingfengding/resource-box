import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import './plugins/vant.js'
import "@u/rem.js"
import Countly from 'countly-sdk-web';
import VueCountly from 'vue-countly';
Vue.config.productionTip = false;
Vue.use(VueCountly, Countly, {
  app_key: '1b058d89f3a628ea09c910a4c2dccf9cf2eda6fc',
  url: 'https://atp.count.ly',
  // debug:true,
});
new Vue({
  router,
  store,
  created() {
    // this.$Countly.q.push(['track_sessions']);
    // this.$Countly.q.push(['track_pageview']);
    // this.$Countly.q.push(['track_pageview']);
    // this.$Countly.q.push(['track_clicks']);
    // this.$Countly.q.push(['track_scrolls']);
    // this.$Countly.q.push(['track_errors']);
    // this.$Countly.q.push(['track_links']);
    // this.$Countly.q.push(['track_forms']);
    // this.$Countly.q.push(['collect_from_forms'])
  },
  render: h => h(App)
}).$mount("#app");
