<template>

  <div class="navbar-before">
    <div class="navbar-big">
      <div class="container">
      <div class="row">

         <div class="col-md-2 col-xs-5">
          <div class="nav-logo">
            <img src="../assets/imgs/logo.png" alt="logo">
          </div>
        </div>


        <div class="col-md-8 col-xs-1">
          <div class="navlinks">
            <ul>
              <li>
                <nuxt-link to="" :class="{'active': isRouteActive }" exact-active-class="active">الرئيسية</nuxt-link>
              </li>

               <li>
                <nuxt-link to=""  >
                  <a href="" data-custom="who-we-are" @click="asyncNavbar"> من نحن </a>
                </nuxt-link>
              </li>

               <li>
                <nuxt-link to="" >
                  <a href="" data-custom="our-view" @click="asyncNavbar"> رؤيتنا </a>
                </nuxt-link>
              </li>

               <li>
                <nuxt-link to="">
                  <a href=""  data-custom="the-best" @click="asyncNavbar"> المتفوقين </a>
                </nuxt-link>
              </li>

               <li>
                <nuxt-link to=""  >
                  <a href="" data-custom="download-app" @click="asyncNavbar">حمل التطبيق</a>
                </nuxt-link>
              </li>

               <li>
                <nuxt-link to="" class-active="active">
                  <a href="" data-custom="question-and-answer" @click="asyncNavbar">أسئلة و أجوبة</a>
                </nuxt-link>
              </li>

              <li>
                <nuxt-link to=""  class-active="active">
                  <a href="" data-custom="partnars" @click="asyncNavbar">شركاؤنا</a>
                 </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

         <div class="col-md-2 col-sm-6">
          <div class="nav-login">
            <button class="btn">
              تسجيل الدخول
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>



  <div class="navbar-before-small">
    <div class="container">
      <div class="nav-small">
             <div class="logo">
              <img src="../assets/imgs/logo.png" alt="">
            </div>

             <div class="login-button-small">
              <button class="btn" @click="showDropdown">
                <img src="../assets/imgs/open-menu (1).png" alt="">
              </button>
            </div>
      </div>

       <div class="dropdown">
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
  },
  methods:{
    showDropdown: function(){
      document.querySelector('.dropdown').classList.toggle('drop');
      if(document.querySelector('.dropdown').classList.contains('drop')){
        document.querySelector('.dropdown').style.display = "block"
        document.querySelector('.login-button-small .btn img').setAttribute('src','https://i.ibb.co/1mW3ssH/close.png')
      }else{
        document.querySelector('.dropdown').style.display = "none"
                document.querySelector('.login-button-small .btn img').setAttribute('src','https://i.ibb.co/1QYMghk/open-menu-1.png')

      }
    },

asyncNavbar: function(e){
      console.log(document.getElementById(e.target.getAttribute('data-custom')))
      let x = document.getElementById(e.target.getAttribute('data-custom')).offsetTop;
      window.scrollTo(0,x)
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar-before-small{
  .dropdown{
    margin-top:13px;
    display: none;
    ul{
      list-style: none;
          padding-right: 0;
      li{
        padding:10px;
        text-align: center;
        font-family: "CustomFontBold";
        border-bottom: 1px solid #d3d3d3;
      }
    }
  }

  .nav-big{
        display: none;
  }


  .nav-small{
    overflow: hidden;
    .logo{
            width: 86px;
    float: right;
    height: 75px;

      img{
        width: 100%;
        height:100%;
      }
    }
  }
  .login-button-small{
        width: 50%;
    float: left;
    button{
          color: #FFF;
    font-family: "CustomFontMedium";
    outline: none;
    border: 0;
    box-shadow: none;
    }
  }
}
.navbar-before{
  .nav-logo{


    width: 86px;
    float: right;
    height: 75px;
    margin-top: 32px;
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


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .navbar-before-small{
          position: fixed;
    z-index: 99;
    background: #ffffff;
    width: 100%;
    top: 0;
    margin-bottom: 34px;
    box-shadow: 4px -5px 12px 7px #DDD;
    padding: 10px 0;
  }
  .tests-level {
    margin-top: 120px;
    transition: all .4s linear;
}
  .navbar-before-small .nav-small .logo[data-v-5adb3b0a]{
     width: 71px;
    float: right;
    height: 57px;
  }
  .navbar-before-small .login-button-small button[data-v-5adb3b0a]{
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
  }

  .login-button-small{
        width: 50%;
    float: left;
    text-align: left;
    button{
      background: none;
      img{
       height: 53px;
    width: 51px;
      }
    }
  }
  .navbar-big{
    display: none;
  }
.navbar-before{
  .navlinks{
    display: none;
  }
}
.dropdown{
  transition: all .4s linear;
}
.navbar-before-small .nav-small .logo[data-v-2ab94fc9] {
        width: 63px;
    float: right;
    height: 40px;
}
.login-button-small button img[data-v-2ab94fc9] {
        height: 28px;
    width: 37px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar-before-small .login-button-small button[data-v-5adb3b0a]{
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
  }

  .navbar-before-small .nav-small .logo[data-v-2ab94fc9] {
    width: 67px;
    float: right;
    height: 49px;
}
   .navbar-before-small{
          position: fixed;
    z-index: 3;
    background: #ffffff;
    width: 100%;
    top: 0;
    margin-bottom: 34px;
    box-shadow: 4px -5px 12px 7px #DDD;
    padding: 10px 0;
  }
  .navbar-before{
  .navlinks{
    display: none;
  }
}
.navbar-big{
  display:none;
}
 .login-button-small{
        width: 50%;
    float: left;
    text-align: left;
    button{
      background: none;
      img{
            height: 34px;
    width: 33px;
      }
    }
  }
  .navbar-before-small .nav-small .logo[data-v-2ab94fc9] {
    width: 72px;
    float: right;
    height: 55px;
}
.login-button-small button img[data-v-2ab94fc9] {
        height: 28px;
    width: 37px;
}
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

  .tests-level{
    padding-top:0;
  }
  .navbar-before-small{
  display: none;
}
  .navbar-before .nav-login button[data-v-5adb3b0a]{
    font-size: 11px;
  }
  .navbar-before .navlinks ul li[data-v-5adb3b0a]{
        display: inline-block;
    padding: 0px 5px;
    font-family: "CustomFontMedium";
    font-size: 10px;
  }
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
   .tests-level{
    padding-top: 0;
  }
.navbar-before-small{
  display: none;
}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
   .tests-level{
    padding-top: 0;
  }
.navbar-before-small{
  display: none;
}
 }

</style>
