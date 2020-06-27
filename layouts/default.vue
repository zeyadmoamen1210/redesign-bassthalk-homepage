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
components:{
  Navbar,
  Footer
}
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
</style>
