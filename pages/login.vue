<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
      <div class="form-title">
        <h4>
          <img src="../assets/imgs/noun_User_-2.png" alt="">
          تسجيل دخول</h4>
      </div>
      <form action="">
        <div class="form-groub">
          <input type="text" class="form-control" placeholder="البريد الألكتروني أو رقم الجوال">
        </div>
         <div class="form-groub">
          <input type="password" class="form-control" placeholder="كلمة المرور">
        </div>
        <div class="forget-pass">
          <nuxt-link to="">
            هل نسيت كلمة مرورك ؟
          </nuxt-link>
        </div>
        <input type="submit" value="تسجيل الدخول" class="fullWidthBtn">
        <div class="two-way">
          <h6>او عن طريق</h6>
          <img src="../assets/imgs/facebook.png" alt="">
          <img src="../assets/imgs/brands-and-logotypes.png" alt="">
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
    margin:100px auto;
    h4{
      text-align: center;
    margin-bottom: 30px;
    color: #444;
    }
    input{
      margin: 10px 0;
    }
    .forget-pass{
      text-align: left;
      a{
        text-align: left;
        font-family: "CustomFontRegular";
      }
    }
    .two-way{
          text-align: center;
          margin-top: 13px;
          margin-bottom: 13px;
          h6{
            margin-bottom: 13px;
            text-align: center;
          }
          img{
            margin: 0 10px;
          }
    }
    .dont-have-acc{
      >div{
        display: inline-block;
        h6{
              display: inline-block;
    margin-left: 153px;
        }
        button{
              padding: 7px 13px;
    background: #FFF;
    border: 1px solid #058ac6bd;
    color: #058ac6bd;
    font-family: "CustomFontRegular";
        }
      }
    }
  }




// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.login{
  width: 85%;
  padding-top: 60px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
.login{
  padding-top: 60px;
  width: 60%;
}
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
.login{
  width: 60%;
}
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
