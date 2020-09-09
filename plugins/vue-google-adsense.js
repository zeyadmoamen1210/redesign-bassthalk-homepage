import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

if (process.env.ENABLE_ADS) {
  Vue.use(Ads.AutoAdsense, { adClient: process.env.ADS_CLIENT })
}