<template>
  <div>
    <Navbar />
    <div class="cont">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import '../assets/css/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
    Footer,
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
  border: 1px solid rgba(5, 138, 198, 0.74118);
  color: rgba(5, 138, 198, 0.74118);
  font-family: 'CustomFontRegular';
}
</style>
