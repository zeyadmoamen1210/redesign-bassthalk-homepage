<template>
  <div class="navbar-before">
    <div class="navbar-big">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-xs-5">
            <div class="nav-logo">
              <img src="../assets/imgs/logo.png" alt="logo" />
            </div>
          </div>

          <div class="col-md-8 col-xs-1">
            <div class="navlinks">
              <ul>
                <li>
                  <nuxt-link
                    to="/"
                    :class="{ active: isRouteActive }"
                    exact-active-class="active"
                    >الرئيسية</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to>من نحن</nuxt-link>
                </li>

                <li>
                  <nuxt-link to>رؤيتنا</nuxt-link>
                </li>

                <li>
                  <nuxt-link to>المتفوقين</nuxt-link>
                </li>

                <li>
                  <nuxt-link to>حمل التطبيق</nuxt-link>
                </li>

                <li>
                  <nuxt-link to class-active="active">أسئلة و أجوبة</nuxt-link>
                </li>

                <li>
                  <nuxt-link to class-active="active">شركاؤنا</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/links" class-active="active">
                    <a href data-custom="partnars">الصفحات</a>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-2 col-sm-6" v-if="!$auth.loggedIn">
            <div class="nav-login">
              <button class="btn" @click="$router.push({ path: '/login' })">
                تسجيل الدخول
              </button>
            </div>
          </div>
          <div v-else class="col-md-2 col-sm-6" style="text-align:left">
            <div class="nav-login" style="position:relative;display:inline-block">
              <button class="dropdown-head" @click="dropdown = !dropdown">
                <h6 style="margin-bottom:0"> {{$auth.user.username}} </h6>
                <span class="list-down"><i class="fas fa-sort-down"></i></span>  

                <div style=" position: absolute;left: -28px;top: -8px;width: 45px;border-radius: 50%;overflow: hidden;border: 1px solid">
                <img :src="$auth.user.photo" style="width:100%;height:100%" alt="">
              </div>
              </button>
              

              <div class="droped" style="position:absolute;right:0;width: 116px;box-shadow: 0 2px 13px 1px #ddd;" v-if="dropdown">
                <ul style="list-style:none;padding-right:0;">
                  <li>
                    <nuxt-link to="">
                      تعديل البيانات
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      تسجيل الخروج
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      تسجيل الخروج
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      تسجيل الخروج
                    </nuxt-link>
                  </li>
                  
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-before-small">
      <div class="container">
        <div class="nav-small">
          <div class="logo">
            <img src="../assets/imgs/logo.png" alt />
          </div>

          <div class="login-button-small">
            <button class="btn" @click="showDropdown">
              <img src="../assets/imgs/open-menu1.png" alt />
            </button>
          </div>
        </div>

        <div class="dropdown">
          <ul>
            <li>
              <nuxt-link
                to
                :class="{ active: isRouteActive }"
                exact-active-class="active"
                >الرئيسية</nuxt-link
              >
            </li>

            <li>
              <nuxt-link to>من نحن</nuxt-link>
            </li>

            <li>
              <nuxt-link to>رؤيتنا</nuxt-link>
            </li>

            <li>
              <nuxt-link to>المتفوقين</nuxt-link>
            </li>

            <li>
              <nuxt-link to>حمل التطبيق</nuxt-link>
            </li>

            <li>
              <nuxt-link to class-active="active">أسئلة و أجوبة</nuxt-link>
            </li>

            <li>
              <nuxt-link to class-active="active">شركاؤنا</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dropdown: false
    }
  },
  computed: {
    isRouteActive: function () {
      if (this.$nuxt.$route.path == '/') {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    showDropdown: function () {
      document.querySelector('.dropdown').classList.toggle('drop')
      if (document.querySelector('.dropdown').classList.contains('drop')) {
        document.querySelector('.dropdown').style.display = 'block'
        document
          .querySelector('.login-button-small .btn img')
          .setAttribute('src', 'https://i.ibb.co/1mW3ssH/close.png')
      } else {
        document.querySelector('.dropdown').style.display = 'none'
        document
          .querySelector('.login-button-small .btn img')
          .setAttribute('src', 'https://i.ibb.co/1QYMghk/open-menu-1.png')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-before-small {
  .dropdown {
    margin-top: 13px;
    display: none;
    ul {
      list-style: none;
      padding-right: 0;
      li {
        padding: 10px;
        text-align: center;
        font-family: 'CustomFontBold';
        border-bottom: 1px solid #d3d3d3;
      }
    }
  }

  .nav-big {
    display: none;
  }

  .nav-small {
    overflow: hidden;
    .logo {
      width: 86px;
      float: right;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .login-button-small {
    width: 50%;
    float: left;
    button {
      color: #fff;
      font-family: 'CustomFontMedium';
    }
  }
}
.navbar-before {
  .nav-logo {
    height: 100px;
    width: 96px;
    padding-top: 35px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-login {
    text-align: left;
    padding-top: 53px;
    button {
      background: #058ac6;
      color: #fff;
      font-family: 'CustomFontMedium';
    }
  }



   .dropdown-head{
            background: #1087ba;
    border: none;
    outline: none !important;
    padding: 7px 22px;
    position: relative;
    border-radius: 0 10px 9px 0;
    .list-down{
      position: absolute;
      top: 0;
      right: 4px;
      i{
        color:#FFF;
        font-size: 20px;
        
      }
    }
  }
  .droped{
        background: #fbfbfb;
    border-radius: 0 0 15px 15px;
    ul{
      li{
        &:not(:last-of-type){
        border-bottom: 1px solid #ccc;
        
      }
      transition: all .3s ease;
      &:hover{
        background: #058ac6;
        a{
          color:#FFF;
        }
      }
      padding: 5px;
      a{
        color:#058ac6;
        transition: all .3s ease;
      }
      }
    }
  }
  
  .navlinks {
    padding-top: 53px;
    ul {
      list-style: none;
      text-align: right;
      li {
        display: inline-block;
        padding: 0 10px;
        font-family: 'CustomFontMedium';
        a {
          color: #333;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
}
.active {
  position: relative;
  &::before {
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
  .navbar-before-small {
    position: fixed;
    z-index: 99999;
    background: #ffffff;
    width: 100%;
    top: 0;
    margin-bottom: 34px;
    box-shadow: 4px -5px 12px 7px #ddd;
    padding: 10px 0;
  }
  .tests-level {
    margin-top: 120px;
    transition: all 0.4s linear;
  }
  .navbar-before-small .nav-small .logo[data-v-5adb3b0a][data-v-5adb3b0a] {
    width: 50px;
    float: right;
    height: 39px;
  }
  .navbar-before-small .login-button-small button[data-v-5adb3b0a] {
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
  }

  .login-button-small {
    width: 50%;
    float: left;
    text-align: left;
    button {
      background: none;
      img {
        height: 25px;
        width: 29px;
      }
    }
  }
  .navbar-big {
    display: none;
  }
  .navbar-before {
    .navlinks {
      display: none;
    }
  }
  .dropdown {
    transition: all 0.4s linear;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar-before-small .login-button-small button[data-v-5adb3b0a] {
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    height: 40px;
    width: 43px;
  }

  .navbar-before-small .nav-small .logo[data-v-5adb3b0a] {
    width: 77px;
    float: right;
    height: 67px;
  }
  .navbar-before-small {
    position: fixed;
    z-index: 3;
    background: #ffffff;
    width: 100%;
    top: 0;
    margin-bottom: 34px;
    box-shadow: 4px -5px 12px 7px #ddd;
    padding: 10px 0;
  }
  .navbar-before {
    .navlinks {
      display: none;
    }
  }
  .navbar-big {
    display: none;
  }
  .login-button-small {
    width: 50%;
    float: left;
    text-align: left;
    button {
      background: none;
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .tests-level {
    padding-top: 0;
  }
  .navbar-before-small {
    display: none;
  }
  .navbar-before .nav-login button[data-v-5adb3b0a] {
    font-size: 11px;
  }
  .navbar-before .navlinks ul li[data-v-5adb3b0a] {
    display: inline-block;
    padding: 0px 5px;
    font-family: 'CustomFontMedium';
    font-size: 10px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .tests-level {
    padding-top: 0;
  }
  .navbar-before-small {
    display: none;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .tests-level {
    padding-top: 0;
  }
  .navbar-before-small {
    display: none;
  }
}
</style>
