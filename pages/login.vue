<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
      <div class="form-title">
        <h4>تسجيل دخول</h4>
      </div>
      <form action="">
        <div class="form-groub">
          <input type="text" class="form-control">
        </div>
         <div class="form-groub">
          <input type="text" class="form-control">
        </div>
        <div class="forget-pass">
          <nuxt-link to="">
            هل نسيت كلمة السر ؟
          </nuxt-link>
        </div>
        <input type="submit" value="تسجيل الدخول">
        <div class="two-way">
          <h6>او عن طريف</h6>
          <img src="" alt="">
          <img src="" alt="">
        </div>

        <div class="dont-have-acc">
          <div>
            <h6>ليس لديك حساب ؟</h6>
          </div>
          <div>
            <button>انشاء حساب</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBefor from '../components/NavbarBefore'
import Footer from '../components/Footer'

export default {
components:{
  NavbarBefor,
  Footer
}
}
</script>

<style lang="scss">
  .login{
    width: 35%;
    margin:100px auto
  }
</style>
