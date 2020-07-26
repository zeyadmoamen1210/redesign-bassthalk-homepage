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
                  >الرئيسية</nuxt-link>
                </li>

                <!-- <li>
                  <nuxt-link to>من نحن</nuxt-link>
                </li>

                <li>
                  <nuxt-link to>رؤيتنا</nuxt-link>
                </li>-->
                <li>
                  <nuxt-link exact-active-class="active" to="/subjects">المواد الدراسية</nuxt-link>
                </li>

                <li>
                  <nuxt-link exact-active-class="active" to="/best-students">المتفوقين</nuxt-link>
                </li>

                <li>
                  <nuxt-link exact-active-class="active" to="/info-bank">بنك المعلومات</nuxt-link>
                </li>

                <li>
                  <nuxt-link exact-active-class="active" to="/live-teach"> البث المباشر </nuxt-link>
                </li>

                <li>
                    <div class="notification" @click="notification = !notification">
                      <i class="fas fa-bell"></i>
                      <div v-if="count" class="noti-content">
                        {{count}}
                      </div>
                      


                       <div v-if="notification" class="notification-data" style="  box-shadow:rgb(0 0 0 / 35%) 0px 8px 25px 0px;  right: -69px; position: absolute;z-index: 99;width: 352px;background: rgb(5 138 198);padding: 15px;order-radius: 0px 0px 15px 15px;max-height: 352px;overflow-y: scroll;">
                       <div>
                         <h5 style="color: #FFF;"> الأشعارات </h5>
                       </div>
                        <div v-for="(noti,index) in allNotification" :key="index">
                         <div style="margin-bottom:15px;overflow:hidden;padding: 10px;background: #ececec;">
                            <div class="icon" style="width:50px;float:right;padding:7px">
                            <img style="border-radius:50%;width:100%;height:100%" :src="noti.icon" alt="">
                          </div>
                          <div class="body" style="width: calc(100% - 50px);float:right">
                            <h6> {{noti.title}} </h6>
                            <p style="    font-size: 12px;margin-bottom:0"> {{noti.body}} </p>
                          </div>
                         </div>
                        </div>
                      </div>


                      
                    </div>
          
                </li>

                

                <!-- <li>
                  <nuxt-link to>حمل التطبيق</nuxt-link>
                </li>

                <li>
                  <nuxt-link to class-active="active">أسئلة و أجوبة</nuxt-link>
                </li>

                <li>
                  <nuxt-link to class-active="active">شركاؤنا</nuxt-link>
                </li>-->
                <!-- <li>
                  <nuxt-link to="/links" class-active="active">
                    <a href data-custom="partnars">الصفحات</a>
                  </nuxt-link>
                </li>-->
              </ul>
            </div>
          </div>



          

          <div class="col-md-2 col-sm-6" v-if="!$auth.loggedIn">
            <div class="nav-login">
              <button class="btn" @click="$router.push({ path: '/login' })">تسجيل الدخول</button>
            </div>
          </div>
          <div v-else class="col-md-2 col-sm-6" style="text-align:left">
            <div class="nav-login" style="position:relative;display:inline-block">
              <button class="dropdown-head" @click="dropdown = !dropdown">
                <h6 style="margin-bottom:0">{{$auth.user.username}}</h6>
                <span class="list-down">
                  <i class="fas fa-sort-down"></i>
                </span>

                <div
                  style=" position: absolute;left: -28px;top: -8px;width: 45px;border-radius: 50%;overflow: hidden;border: 1px solid"
                >
                  <img :src="$auth.user.photo" style="width:100%;height:100%" alt />
                </div>
              </button>

              <div
                class="droped"
                style="position:absolute;right:0;width: 116px;box-shadow: 0 2px 13px 1px #ddd;z-index:99"
                v-if="dropdown"
              >
                <ul style="list-style:none;padding-right:0;">
                  <li>
                    <nuxt-link to="/profile/edit">
                      <i class="fas fa-user-alt"></i>تعديل البيانات
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/edit-path">
                      <i class="fas fa-user-alt"></i>تعديل المسار
                    </nuxt-link>
                  </li>
                  <li>
                    <a @click="logout">
                      <i class="fas fa-sign-out-alt"></i>تسجيل الخروج
                    </a>
                  </li>
                  <!-- <li>
                    <nuxt-link to>تسجيل الخروج</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to>تسجيل الخروج</nuxt-link>
                  </li>-->
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
                to="/"
                :class="{ active: isRouteActive }"
                exact-active-class="active"
              >الرئيسية</nuxt-link>
            </li>

            <li>
              <nuxt-link exact-active-class="active" to="/subjects">المواد الدراسية</nuxt-link>
            </li>

            <li>
              <nuxt-link exact-active-class="active" to="/best-students">المتفوقين</nuxt-link>
            </li>

            <li>
              <nuxt-link exact-active-class="active" to="/info-bank">بنك المعرفة</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>


    
         
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
  data() {
    return {
      dropdown: false,
      count: 0,
      notification: false,
      allNotification: [],
      isLoaing: false
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
  created(){
    this.isLoading = true
    this.$axios.get('notifications/count').then((res) => {
      console.log(res)
      this.count = res.data.count
    }).finally(() => this.isLoading = false)

     this.$axios.get('notifications?limit=20').then((res) => {
      console.log(res)
      this.allNotification = res.data.docs
    }).finally(() => this.isLoading = false)
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
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
        width: 64%;
        height: 65%;
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
/* width */
.notification-data::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.notification-data::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.notification-data::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.notification-data::-webkit-scrollbar-thumb:hover {
  background: #555; 
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
  .notification{
        font-size: 25px;
    margin-right: 17px;
    color: #272727;
    cursor: pointer;
    position: relative;
    .noti-content{
             position: absolute;
    top: -5px;
    right: -3px;
    background: #058ac6;
    border-radius: 50%;
    font-size: 10px;
    padding: 2px 6px;
    color: #FFF;
    }
  }
  .dropdown-head {
    background: #1087ba;
    border: none;
    outline: none !important;
    padding: 7px 22px;
    position: relative;
    border-radius: 0 10px 9px 0;
    .list-down {
      position: absolute;
      top: 0;
      right: 4px;
      i {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .droped {
    background: #fbfbfb;
    border-radius: 0 0 15px 15px;
    i {
      font-size: 13px;
      margin-left: 7px;
    }
    ul {
      li {
        &:not(:last-of-type) {
          border-bottom: 1px solid #ccc;
        }
        transition: all 0.3s ease;
        &:hover {
          background: #058ac6;
          a {
            color: #fff;
          }
        }
        padding: 5px;
        a {
          color: #058ac6;
          transition: all 0.3s ease;
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
