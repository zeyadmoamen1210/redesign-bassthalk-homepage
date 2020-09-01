<template>
  <div>
    <div style="margin-top: 200px;" v-if="initLoading">
      <Loading />
    </div>

    <div v-else>
      <Navbar />
      <div class="cont">
        <nuxt />
      </div>
      <vue-snotify style="z-index=9999999999"></vue-snotify>

      <Footer />
    </div>
  </div>
</template>
<script>
import Loading from '@/components/Loading'

import '../assets/css/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default {
  name: 'MainLayout',

  components: {
    Navbar,
    Footer,
    Loading,
  },
  data() {
    return {
      initLoading: true,
    }
  },
  created() {
    let vm = this
    setTimeout(function () {
      vm.initLoading = false
    }, 3500)
    // console.log(this.$auth.user.role)
  },
  mounted() {
    // console.log(this.$moment.locale())
    this.$moment.locale('ar')
    // console.log(this.$moment.locale())
  },
}
</script>
<style lang="scss">
.cont {
  min-height: 64vh;
}
.snotify{
  z-index:999999999999 !important;
}
.snotify-leftTop,
.snotify-centerTop,
.snotify-rightTop {
  top: 10px;
  z-index: 999999999999 !important;
}
.basth-btn-primary {
  display: block;
  width: 100%;
  text-align: center;
  padding: 13px;
  border-radius: 6px;
  border: 0;
  color: #fff;
  background-color: #058ac6;
  font-family: 'CustomFontMedium';
  font-size: 18px;
}
.light-btn {
  padding: 7px 13px;
  background: #fff;
  text-align: center;
  border-radius: 6px;

  border: 1px solid rgba(5, 138, 198, 0.74118);
  color: rgba(5, 138, 198, 0.74118);
  font-family: 'CustomFontRegular';
}
.pointer {
  cursor: pointer;
}
.danger-btn {
  padding: 7px 13px;
  background: #fff;
  text-align: center;
  border-radius: 6px;

  border: 1px solid red;
  color: red;
  font-family: 'CustomFontRegular';
}
</style>
