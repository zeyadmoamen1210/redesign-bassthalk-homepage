<template>
  <div class="navbar-before" >
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
                  <nuxt-link exact-active-class="active" to="/information-bank">بنك المعلومات</nuxt-link>
                </li>

                <li>
                  <nuxt-link exact-active-class="active" to="/live-teach">كورساتي</nuxt-link>
                </li>
                <li>
                  <nuxt-link exact-active-class="active" to="/courses">الكورسات</nuxt-link>
                </li>

                <li>
                  <nuxt-link exact-active-class="active" to="/collections">الامتحانات</nuxt-link>
                </li>
                <!-- <li>
                  <nuxt-link exact-active-class="active" to="/teachers">المدرسين</nuxt-link>
                </li> -->
                <li>
                  <div >


                      <vs-dropdown 
                        :color="colorx"  
                        :vs-trigger-click="true"	
                        @click.native="dropdownClick"
                        class="notification"
                        v-if="$auth.loggedIn">

                        <a class="a-icon" href="#">
                        <div style="position:absolute" @click="count = 0">
                          <div
                          v-if="count > 0"
                           @click="count = 0"
                            style="position: absolute;color:#FFF;top: -7px;background: #058ac6;padding: 0 4px;border-radius: 50%;right: -7px;font-size: 11px;"
                            class="noti-content"
                          >{{count}}</div>
                        </div>
                        <i @click="dropdownClick" class="fas fa-bell"></i>
                        الإشعارات
                        </a>

                        <vs-dropdown-menu class="notification-content">
                          <Loading v-if="isLoading" />
                          <NoData msg="لا توجد إشعارات جديدة" v-else-if="!isLoading && allNotification.length == 0" />
                          <vs-dropdown-item  v-else v-for="(noti,index) in allNotification" :key="index">
                              <div
                          style="margin-bottom:15px;overflow:hidden;padding: 10px;background: #ececec;"
                        >
                          <div class="icon" style="width:50px;float:right;padding:7px">
                            <img
                              style="border-radius:50%;width:100%;height:100%"
                              :src="noti.icon"
                              alt
                            />
                          </div>
                          <div class="body" style="width: calc(100% - 50px);float:right">
                            <h6>{{noti.title}}</h6>
                            <p style="    font-size: 12px;margin-bottom:0">{{noti.body}}</p>
                          </div>
                        </div>
                          </vs-dropdown-item>
                         
                        </vs-dropdown-menu>
                      </vs-dropdown>


<!-- 
                    <b-dropdown
                      
                      size="lg"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                     
                    >
                      <template v-slot:button-content>
                        <div style="position:absolute" @click="count = 0">
                          <div
                          v-if="count > 0"
                           @click="count = 0"
                            style="position: absolute;color:#FFF;top: -7px;background: #058ac6;padding: 0 4px;border-radius: 50%;right: -7px;font-size: 11px;"
                            class="noti-content"
                          >{{count}}</div>
                        </div>
                        <i @click="dropdownClick" class="fas fa-bell"></i>
                      </template>
                      <b-dropdown-item v-for="(noti,index) in allNotification" :key="index">
                        <div
                          style="margin-bottom:15px;overflow:hidden;padding: 10px;background: #ececec;"
                        >
                          <div class="icon" style="width:50px;float:right;padding:7px">
                            <img
                              style="border-radius:50%;width:100%;height:100%"
                              :src="noti.icon"
                              alt
                            />
                          </div>
                          <div class="body" style="width: calc(100% - 50px);float:right">
                            <h6>{{noti.title}}</h6>
                            <p style="    font-size: 12px;margin-bottom:0">{{noti.body}}</p>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown> -->

                    <!-- <b-dropdown :html="`<div style='position:absolute'><i class='fas fa-bell'></i><div style='position: absolute;top: -7px;background: #058ac6;padding: 0 4px;border-radius: 50%;right: -7px;font-size: 11px;'  class='noti-content'>
                        ${count}</div></div>`" style="position:relative" id="dropdown-1" text="Dropdown Button"  class="m-md-2 notification">
    
   
    
                    </b-dropdown>-->
                  </div>
                  <!-- <div  @click="notification = !notification">
                     



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


                      
                  </div>-->
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







    <div class="loggedDropdown" style="width:16%;position: relative;">
              <vs-dropdown 
                        :color="colorx"
                        style="text-align: left;position: absolute;left: 0;margin-top: 50px;padding: 0 30px;height: 36px;background: #0989c3;color: #FFF;"
                        :vs-trigger-click="true"	
                        @click.native="dropdownClick"
                        v-if="$auth.loggedIn">

                        <a class="a-icon" href="#">
                         <h6 style="margin-bottom:0;display:inline-block">{{$auth.user.username}}</h6>
              <span class="list-down">
                <i style="color:#FFF" class="fas fa-sort-down"></i>
              </span>

              <div
                style="position: absolute;left: -39px;top: -13px;width: 60px;height: 60px;border-radius: 50%;overflow: hidden;border: 4px solid; border-color: #0989c3;"
              >
                <img class="img-circle" :src="$auth.user.photo" style="width:100%;height:100%" alt />
              </div>
                        </a>

                        <vs-dropdown-menu style="min-width: 132px;">
                          <vs-dropdown-item style="font-size: 13px;" to="/profile">
                <i class="fas fa-user-alt"></i> الملف الشخصى
                          </vs-dropdown-item>




                            <vs-dropdown-item style="font-size: 13px;" >
                            <nuxt-link to="/questions">
                <i class="fas fa-question"></i> الأسئلة
              </nuxt-link>
                          </vs-dropdown-item>
                           <vs-dropdown-item style="font-size: 13px;" >
                  <nuxt-link exact-active-class="active" to="/collections">الامتحانات</nuxt-link>
                          </vs-dropdown-item>


                           <vs-dropdown-item >
                             <nuxt-link to="/statistics">
                <i style="    margin-left: 5px;" class="fas fa-chart-bar"></i> الإحصائيات
              </nuxt-link>
                          </vs-dropdown-item>



                          <vs-dropdown-item style="font-size: 13px;">
                             <nuxt-link to="/profile/edit">
                <i style="    margin-left: 5px;" class="fas fa-user-edit"></i>تعديل البيانات
              </nuxt-link>
                          </vs-dropdown-item>



                           <vs-dropdown-item >
                              <nuxt-link to="/edit-path">
                <i style="    margin-left: 5px;" class="fas fa-book-reader"></i>تعديل المسار
              </nuxt-link>
                          </vs-dropdown-item>


                           <vs-dropdown-item >
                              <nuxt-link to="/live-teach">
                <i style="    margin-left: 5px;" class="fas fa-book-reader"></i>كورساتي
              </nuxt-link>
                          </vs-dropdown-item>



                           <vs-dropdown-item >
                              <nuxt-link to="/courses">
                <i style="    margin-left: 5px;" class="fas fa-book-reader"></i>الكورسات
              </nuxt-link>
                          </vs-dropdown-item>


                           <vs-dropdown-item style="font-size:13px">
                               <a @click="logout">
                <i style="    margin-left: 5px;" class="fas fa-sign-out-alt"></i>تسجيل الخروج
              </a>
                          </vs-dropdown-item>

                          
                        </vs-dropdown-menu>
                      </vs-dropdown>
    </div>




<!-- 
          <b-dropdown
            class="auth"
            
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template v-slot:button-content>
             
            </template>
            <b-dropdown-item href="#">
             
            </b-dropdown-item>


            <b-dropdown-item href="#">
             
            </b-dropdown-item>

                                


            <b-dropdown-item href="#">
             
            </b-dropdown-item>
            <b-dropdown-item href="#">
             
            </b-dropdown-item>
            <b-dropdown-item href="#">
             
            </b-dropdown-item>
            <b-dropdown-item href="#">
            
            </b-dropdown-item>
          </b-dropdown> -->
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
            <button v-if="!dropdown" class="btn" @click="dropdown = !dropdown">
              <img src="../assets/imgs/open-menu1.png" alt />
            </button>
            <button v-else class="btn" @click="dropdown = !dropdown">
              <img src="https://i.ibb.co/1mW3ssH/close.png" alt />
            </button>
          </div>
        </div>


          <vs-sidebar position-right  parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="dropdown">

      <div class="header-sidebar"  slot="header">
        <vs-avatar  size="70px" v-if="$auth.loggedIn" :src="$auth.user.photo"/>
        <vs-avatar size="70px" v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX09PSzs7Pe3t6fn5/IxsecnJz39/ewsLDh4eHp6enR0dG8vLzw8PDW1tba2trLy8ulpaXQNFPXAAAJDklEQVR4nO2d6ZacIBCFBbXA3fd/2oC4gKKtCFKauX8yk5MoX9dKYXcnyZ/+9Kc//elPf/rTn/70HwoAYi8hqCAjHa2/DFmnuRDriq9BTjhQ5alUnvfZhyABinL8qVSACpI1yScYASjJufqRL4ADZF++346QlH2elwMHUBNwYKTvRoS6S/M0Z+qXcgMoGav6vYyQZKmEGkwINbEBSjPytyJCmY5MImsuv1gY21ciQsEmpD4ZnHVfY5y+S9DlCxPLj/gkYvM+RCPofvDJf1G8CxHq/jeUqT72mq/pOqAoGq8y4nVAgfii0j911xcJ2WsIoXUBfJUReyfANCcvIYTGzYQC8SUNKjBHQJFOX7EnhsLVhMOeuEW/J4bEKZEukD3yLhwal1JoMhLE4QjJzhbwGiLezRQUtw04MmY4EYGf2EOcRETZpK7naFfV640CRsS7gHm1+hUdYuHYq03qV4M4fIMNdtOETbe6ALJdv9uGScOp+OYKPSrC20HIt4R5hwjRvdseUAQg3RKmaRGba5b7hilVR1Cc2ggx5dNTeTS3SERbJfmshGLDGBts1C8TCpK+Z6SqqqzrSkMN5QPfDiGW7g2OKoVwwqprWkEiRXdlI0xTJIT7e155YE+PuDTCzHIVJMOp3VqYp1V7Dk9qXfGHK+DINbBnQNKcxhOyHp/imPXbq32edlf4KG2sV8FweAo295LzlmuAlNpKDoq+BmyTi5xc5aPc1hfhmBJbXnsHQMqtMx4MgVhYANl1QHu5SNP4bY3tGRkXQLypxvKQTN+6AFJuTTXxD/hh41x56WRCe9+GIJluOhqXLKNkq/kIuppNscgd+YQRbV6Kj1Du110JbRsohIRuaWaQZZ+JoOSvRzRulWI04ratQWFDc0UX+21T21yDgtBc1Q0ntRkRH+EdJ7UZEQOhkQDz7B7hpv1GMIxaVfzyFiCl7dqG8Q9oVn3pTcDNDgPBibf5jNfNMKQbPx3fxhBV+pjmRkOzyNhi5AjOLvQd8L1qOMrobPr4O2BjipE39wEp10dbGKYY+kw/92BCowNH0Jaa5aL3QqjVfQQF3zx5up9KlWbHRzDESPSDGfftvallYoNgEJXo5xZeioUkXEIbQyrVem9vhPMVcTyPsRxceCmHVEumKBKN/rxXfrfv3hDG77ul6nlG5qXgG4RNbDipmtJpZ35nCmUn5Aga76TQFuSbUHQQCJIp1XoQz4TDs1Kx+aSTLhtzP4BztRhyc2xA4aRLD9L7JpQ+Ed1NZQWcvMobIdNesehb4KHGd0EIVYuEg7D17KUjYUcxEKol9UG8tEVEqALRM6HabUYvF2pNXQDCcaeCw4aUhiBscBCq/ZIKRL+E49AHC+EQiMwn4bSdjk5YqEUNramvQdTQ00ybzeg9zUhIU3+DKOUR02QyOmE9Lorl3sY0w9R7vlhswJkwy70NMYYeaZoXRC+Hc7lo5Kch+SIUgTjFNALCaSW9PxMKI87H5dFT6ZJqOk9jqBFx+iF6opkDMZRi40kFBUTgpIubBhECJw3sprHhBoG3IrEVCicN6qax0SYFA0RxPioVzIixwRYFikQkUTgoCCCCllSTbytyXBaUqmuvlPJ6+OSREE0SNeUxpWLz0FHfJ/TYoGIMQil/hLFJ9uRvThObZE/eAhFpGHoMRKxh6M9NY3PsCjy5Kdow9OamaMMw8eWmsSmO5MVNMZvQT9HHm0mlPBgRcZ4Z9HUTejAidhPeNyJ2E942Iu5EqnSvJsZe/RndamzeYMJbfoo/zSi5+2nslZ+Vs5/iz6OTHN+VUL6I0OnBkyZ7D6HToydt9ibCNrvsqALwTYS0vIjIm+xlhLTLrjiqAnwXIc2uIJbZuwhBLlpY5XRG7bJ3EY5DRWGX7lQwNtkkXB+lvyto2OJ6J8xYzoAZif9pNL8FdcWmZ/YH5/sRjRqfIGT4v3YVOGNkfleCiq8DRoNPEBJGkB5wT4KSEbIQTimkbKllv9Gs+CSh+M843qG+I8gYMQjnLJmVw+eyq78Uf7RNt8YbCYWn4kUUIUhWhKYfjp+qb4NbCPEGI0yABuE61A5Fxv9PcJaNGdAkHFrqa4RCGBFrMgGS9Tu8dr1ynxAh4mLBLaHWtZwmxIeoAW4JaXvOjDohwdWkgg5oITzJaBBWsaF0jXXwiFC46m9Gg5AhQlSdjCYr4QlG8yos/id7jgK6Atx/t2y7X+23hGgaOCjYemW7hD8gyfpCSNrw9boIO974cgtlJ/vWdv1SiZoRGy5Zp9ExgM6cXLRto9SKF4QPX9u1fa1iZxuApOi2LzwhLmN9brsS65Jo34Is6ZqKMBvgbjY9Alwn5BGRVWUBz1MKunaXTlnx4hGb1YITJOl4/SCkuBUvqyO6QRe/5WIbzSvIqn3mW7slXiZu+ItPJonzZuTNMaC6IBn8NTzeGbpxSac/RjE7eUlx67II993kAq87DL3tgqoz30t2yoAaZBUGEqA4EXsWRtuQzeA7bUAdsvGdeCBpHfCG1fzIOLwkLtcVMUn9GVKazw1PLeYg4/D2ioOurss6P94qos/RfIu6PcDu1mWFt943JCSX0sDeUip7F3f70jK33pqtQuIWJRZZorH1cm3G3M/koPbGZ6mNvPF1aeEi3MVZvfKRzY7KIyAZGC8jQuOVj6wRW78Xv8wI3DefXIQei96vLhjPxyMUHvKnTXNG5UFucDrn+HfQSdVcB8PcQNSOEyknmAHlCsowQajd4fchOTR3G5hDjT4a8A5ysHPEl1xu9C/eXhI2Ye9xlFWhDueho+xDQ7/aH5Vvh9f+by6fPAl/l8ruqcCD31q6EA2USM3b2OqGqPJPKLyTKm0RoXjkxqSxHE4E0Rbxmfuy0j7aDqAVouV8JYhYFbYe6TIeBICnfIdUz4Qh2Tw99tRtHyQ06iKEbTNiiS3nqxB7LWGk+Wn4ZiaOZiN+1Em151Vg8xDEV8TmYhh7JaE0uelHEw2RexnlpnXshQTTFIhfTaVC1ecJiYrDB7a+0VR/nVAl0yfGF7H0HxDy7xPC1+NQEX64WvwPhKpr+zIhPDuleVzj5uK7e4uZ8LP7w6lrgwcOS2Lp43MaIfj65kLuD/8Blw/H4L+q3EEAAAAASUVORK5CYII=" />
        <h4>
          {{ $auth.loggedIn ? $auth.user.username : 'يرجي تسجيل الدخول ' }}
        </h4>

      </div>

      <vs-sidebar-item to="/" index="1">
 
                
              الرئيسية
      </vs-sidebar-item>

      <vs-sidebar-item to="/subjects" index="2">
              المواد الدراسية
      </vs-sidebar-item>

      <vs-sidebar-item to="/information-bank" index="3">
        بنك المعلومات
      </vs-sidebar-item>
      <vs-sidebar-item to="/best-students"  index="4" >
        المتفوقين
      </vs-sidebar-item>
      <vs-sidebar-item to="/courses" index="16" > 
              الكورسات
      </vs-sidebar-item>

      <vs-sidebar-item to="/live-teach" index="5" > 
              كورساتي
      </vs-sidebar-item>

       <vs-sidebar-item to="/collections" index="10" > 
              اﻹمتحانات
      </vs-sidebar-item>
      <!-- comeent -->

          <vs-sidebar-item to="/camps"  index="6" >
            المعسكرات 
          </vs-sidebar-item>

          <vs-sidebar-item to="/teachers"  index="15" >
            المدرسين 
          </vs-sidebar-item>
          

           <vs-sidebar-item v-if="$auth.loggedIn"  to="/statistics"  index="7" >
           الإحصائيات 
          </vs-sidebar-item>

          <vs-sidebar-item v-if="$auth.loggedIn" to="/profile/edit" index="8" >
               تعديل البيانات
          </vs-sidebar-item>

          <vs-sidebar-item v-if="$auth.loggedIn" to="/edit-path" index="9" >
            تعديل المسار 
          </vs-sidebar-item>

      <div class="footer-sidebar"  slot="footer">
        <vs-button icon="reply" v-if="$auth.loggedIn" @click="logout" color="danger" type="flat" icon-pack="fas fa-sign-out-alt">
          تسجيل الخروج
        </vs-button>
            <vs-button icon="reply" v-else @click="$router.push('/login')" color="success" type="flat" icon-pack="fas fa-sign-in-alt">
          تسجيل الدخول
        </vs-button>
      </div>

    </vs-sidebar>

     
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import NoData from '@/components/NoData'
import * as Cookies from 'js-cookie'

export default {
  components:{
    Loading,
    NoData
  },
  data() {
    return {
      dropdown: false,
      count: 5,
      notification: false,
      allNotification: [],
      isLoading: false,
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
  created() {
    this.isLoading = true
    this.$axios
      .get('notifications/count')
      .then((res) => {
        console.log(res)
        this.count = res.data.count
      })
      .finally(() => (this.isLoading = false))

    this.$axios
      .get('notifications?limit=20')
      .then((res) => {
        console.log(res)
        this.allNotification = res.data.docs
      })
      .finally(() => (this.isLoading = false))
  },
  methods: {
    dropdownClick(){
      this.count = 0
      console.log("count", this.count)
    },
    async logout() {
      await this.$auth.logout();
      Cookies.remove('account');

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

<style lang="scss">


.notification-content{
        padding-bottom: 10px;
            left: 439px;
    top: 85px;
    max-width: 338px !important;

    ul{
      box-shadow: 1px solid rgba(0,0,0,.1) !important;
            max-height:400px;

      overflow-y: scroll;
        &::-webkit-scrollbar {
  width: 6px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #0000002e; 
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
    }
  }


.vs-sidebar--background{
  top:0 !important;
}
 .vs-sidebar{
    z-index:9999999999 !important;
    .vs-sidebar--header{
      .header-sidebar{
        text-align: center;
        h4{
          text-align: center;
        }
      }
    }
  }
.navbar-before-small {
  .dropdown {
    margin-top: 13px;
    ul {
      font-size: 14px;
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
        box-shadow: none !important;
      font-family: 'CustomFontMedium';
    }
  }
}
/* width */
.dropdown-menu::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.dropdown-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.dropdown-menu::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.dropdown-menu::-webkit-scrollbar-thumb:hover {
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
  .dropdown-menu {
    left: -27px !important;
  }
  .notification {
    outline: none;
    font-size: 15px;
    /* margin-right: 17px; */
    color: #464646;
    cursor: pointer;
    position: relative;
    padding: 9px 12px 6px;
    background: #f1f1f1;
  
    border-radius: 9px;
  
    // box-shadow: 0 4px 25px 0 rgb(33 37 41 / 13%);
    .noti-content {
      position: absolute;
      top: -5px;
      right: -3px;
      background: #058ac6;
      border-radius: 50%;
      font-size: 10px;
      padding: 2px 6px;
      color: #fff;
    }

    .fas.fa-bell {
          color: #5d5d5d;
    }
    .dropdown.dropdown-menu:focus {
      top: 0 !important;
      left: -27px !important;
      max-height: 300px;
      overflow-y: scroll;
    }
    .dropdown-toggle {
      outline: none;
    }
    .dropdown-menu {
      width: 300px;
      max-height: 300px;
      overflow-y: scroll;
      li {
        width: 100%;
        a {
          padding: 0;
        }
      }
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
      padding: 0;
      font-size: 14px;
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

  .vs-dropdown--item-link{
      font-size: 11px;

  }

  .loggedDropdown{
    .a-icon{
      white-space: nowrap;
          max-width: 75px;
    display: inline-block;
    /* direction: ltr; */
    overflow: hidden;
    padding-top: 7px;
    text-overflow: ellipsis;
    }
    .vs-con-dropdown{
      h6{
            margin-bottom: 0px;
    display: inline-block;
    color: #FFF;
    text-transform: capitalize;
      }
    }
  }

  .navlinks {
    padding-top: 53px;
    ul {
      list-style: none;
      text-align: right;
      font-size: 14px;
      li {
        font-size: 14px;
        display: inline-block;
        padding: 0 10px;
         font-family: "CustomFontBold";
        a {
          color: #333;
           font-family: "customFontMedium";
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

// .navbar-before .navlinks ul{
//   width: 300px;
// }
// .navbar-before .navlinks ul li{
//   padding:0;
//   width: 100%;
// }
// .navbar-before .navlinks ul li a{
//   padding: 0;
//     margin: 0;
//     width: 100%;
// }

.auth {
  button {
    width: 187px;
    height: 49px;
    margin-top: 54px;
    background: #058ac6;
    color: #fff;
    padding: 0;
    height: 40px;
  }
  li {
    a {
      margin: 0;
      padding: 10px 12px;
      i {
        margin-left: 5px;
      }
    }
  }
  .btn-link:hover {
    color: #fff;
  }
}
</style>


<!-- 

   <!-- <div class="dropdown" v-if="dropdown">
          <ul>
            <li @click="dropdown = false">
              <nuxt-link
                to="/"
                :class="{ active: isRouteActive }"
                exact-active-class="active"
                @click="dropdown = false"
              >الرئيسية</nuxt-link>
            </li>

            <!-- <li>
                  <nuxt-link to>من نحن</nuxt-link>
                </li>

                <li>
                  <nuxt-link to>رؤيتنا</nuxt-link>
                  
            </li>
            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/subjects">المواد الدراسية</nuxt-link>
            </li>

            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/best-students">المتفوقين</nuxt-link>
            </li>

            <li @click="dropdown = false">
              <nuxt-link
                exact-active-class="active"
                to="/information-bank"
                @click="dropdown = !dropdown"
              >بنك المعلومات</nuxt-link>
            </li>

            <li @click="dropdown = false">
              <nuxt-link
                exact-active-class="active"
                to="/live-teach"
                @click="dropdown = false"
              >الكورسات</nuxt-link>
            </li>

            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/camps" @click="dropdown = false">المعسكرات</nuxt-link>
            </li>

           <template v-if="$auth.loggedIn">
              
            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/statistics">
                <i class="fas fa-chart-bar"></i> الإحصائيات
              </nuxt-link>
            </li>
            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/profile/edit">
                <i class="fas fa-user-edit"></i>تعديل البيانات
              </nuxt-link>
            </li>
            <li @click="dropdown = false">
              <nuxt-link exact-active-class="active" to="/edit-path">
                <i class="fas fa-book-reader"></i>تعديل المسار
              </nuxt-link>
            </li>
            <li v-if="$auth.loggedIn" @click="dropdown = false">
              <a @click="logout">
                <i class="fas fa-sign-out-alt"></i>تسجيل الخروج
              </a>
            </li>
           </template>
           <div style="text-align:left" v-else>
              <div @click="dropdown = false" style="display: inline-block;" class="nav-login" >
              <button class="btn" @click="$router.push({ path: '/login' })">تسجيل الدخول</button>
            </div>
            <div style="padding: 0;display: inline-block;" @click="dropdown = false"  class="nav-login" >
              <button class="btn" style="background: #39b939;" @click="$router.push({ path: '/register' })">حساب جديد</button>
            </div>
           </div>
            

          </ul>
        </div> -->
-->