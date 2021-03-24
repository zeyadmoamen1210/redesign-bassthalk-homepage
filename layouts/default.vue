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
  mounted(){
    window.fbAsyncInit = function () {
    FB.init({
      appId: '709818006573529',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10'
    })
    FB.AppEvents.logPageView()

    
  };
  
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s); js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))


   FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log("Faceboccccccccccccccccccccccccccccccok",response)
    });

  },
  data() {
    return {
      initLoading: true,
    }
  },


  created() {


   

     this.$axios.get(`/student/courses?paginate=${false}`).then(res => {
      
      this.studCourses = res.data
      this.$store.commit("SET_MY_COURSES", res.data)

      console.log("my courses",res)
      console.log(this.$store.state.myCoursesAsTeacher)
    }).finally(() => this.isLoading = false)

    let vm = this
    setTimeout(function () {
      vm.initLoading = false
    }, 300)
    // console.log(this.$auth.user.role)
  },
  mounted() {

    this.$auth.fetchUser();

    
    // console.log(this.$moment.locale())
    this.$moment.locale('ar')
    // console.log(this.$moment.locale())
  },
}
</script>
<style lang="scss">

.popular-classes{
  .vs--searchable .vs__dropdown-toggle{
    cursor: text;
    padding: 6px !important;
    margin: 0 5px !important;
}
.vs__clear{
  display:none;
}
}
// body{
//   -webkit-user-select: none;
// -khtml-user-select: none;
// -moz-user-select: none;
// -ms-user-select: none;
// -o-user-select: none;
// user-select: none;
// }
.cont {
  min-height: 64vh;
}
.pointer{
  cursor: pointer;
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


.vs-select--options{
    text-align: right !important;

  .vs-select--options ul li{
    text-align: right !important;

  }
  .vs-select--item{
    text-align: right !important;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
      padding: 7px 7px;
      font-family: "CustomFontRegular";
  }
}
.input-select-con{
  .input-select.vs-select--input{
    padding: 8px 32px;
  }
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
