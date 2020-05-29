<template>

  <div class="navbar-before">
    <div class="container">
      <div class="row">

         <div class="col-md-2">
          <div class="nav-logo">
            <img src="../assets/imgs/logo.png" alt="logo">
          </div>
        </div>


        <div class="col-md-8">
          <div class="navlinks">
            <ul>
              <li>
                <nuxt-link to="" :class="{'active': isRouteActive }" exact-active-class="active">الرئيسية</nuxt-link>
              </li>

               <li>
                <nuxt-link to="" >من نحن</nuxt-link>
              </li>

               <li>
                <nuxt-link to="" >رؤيتنا</nuxt-link>
              </li>

               <li>
                <nuxt-link to="" >المتفوقين</nuxt-link>
              </li>

               <li>
                <nuxt-link to="" >حمل التطبيق</nuxt-link>
              </li>

               <li>
                <nuxt-link to="" class-active="active" >أسئلة و أجوبة</nuxt-link>
              </li>

              <li>
                <nuxt-link to=""  class-active="active">شركاؤنا</nuxt-link>
              </li>

            </ul>
          </div>
        </div>

         <div class="col-md-2">
          <div class="nav-login">
            <button class="btn">
              تسجيل الدخول
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
computed: {
    isRouteActive: function() {
      if (this.$nuxt.$route.path=="/") {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar-before{
  .nav-logo{
    height: 100px;
    width: 96px;
    padding-top: 35px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .nav-login{
    text-align: left;
    padding-top: 53px;
    button{
      background: #058ac6;
      color:#FFF;
      font-family: "CustomFontMedium";
    }
  }
  .navlinks{
    padding-top: 53px;
    ul{
      list-style: none;
      text-align: right;
      li{
        display: inline-block;
        padding:0 10px;
        font-family: "CustomFontMedium";
        a{
          color: #333;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }
}
.active{
  position: relative;
  &::before{
      position: absolute;
      bottom: -13px;
      height: 0;
      background: #058ac6;
      content: '';
      width: 22px;
      border-radius: 33px;
      border: 2px solid #098bc1;
  }
}
</style>
