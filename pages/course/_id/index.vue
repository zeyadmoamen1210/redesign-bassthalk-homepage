<template>
  <div>
    <div class="container">
        <Loading v-if="isLoading" />
      <div v-else class="tests-level folder-choose">

                       <div style="width:335px;margin-bottom: 40px;" class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>محتويات الكورس </h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
                      <div class="course-content" v-if="$route.query.nextLive">
                      <div style="padding: 28px 13px;background: #f7f7f7;border-bottom: 3px solid #eaeaea;">
                        <h5 style="font-weight:100"><span style="font-weight:bold;color:#058ac6">المحاضرة القادمة : </span> {{nextLife.title}} </h5>
                      <h5 style="font-weight:100"> <span style="font-weight:bold;color:#058ac6">تاريخ الإنشاء : </span> {{ new Date(nextLife.createdAt).toLocaleString() }} </h5>
                      </div>

                      <div class="sessions" v-if="nextLife.sessions && nextLife.sessions.length > 0">
                          <h5 style="margin-top:25px"> السيشن : </h5>
                          <div class="row">
                              <div class="col-md-3" v-for="session in nextLife.sessions" :key="session.id">
                                  <div class="course-content"> 
                                    <h6 style="text-align:center">أقصي عدد <span> {{session.limit}} </span></h6>
                                    <h6 style="text-align:center"> <span> {{new Date(session.time).toLocaleString()}} </span></h6>
                                    <h6 style="text-align:center"> عدد المشتركين: <span> {{session.users.length}} </span> </h6>
                                    <h6 style="text-align:center" class="isLiveNow" v-if="session.isLive "> مباشر الأن  </h6>
                                    <h6 style="text-align:center" class="LiveSoon" v-if="!session.isLive"> غير متوفر  </h6>
                                    <h6 style="text-align:center" v-if="session.live && session.isIn"> <span class="click-here"> <a target="_blank" :href="`https://${session.live}`"> إضغط هنا </a> </span> </h6>
                                    <h6 style="text-align:center" v-else-if="!session.isIn"> <span class="unclickable"> <a> غير مشترك </a> </span> </h6>
                                    <h6 style="text-align:center" v-else-if="session.isIn && session.live == false"> <span class="unclickable"> <a> سيتم توفير الرابط قريبا </a> </span> </h6>

                                    <div>
                                        <vs-button style="text-align:center;width:100%;font-family: 'CustomFontRegular';" v-if="!session.isIn" color="#058ac6" @click="addReserve(session)"> التسجيل في السيشن </vs-button>
                                        <vs-button style="text-align:center;width:100%;font-family: 'CustomFontRegular';" v-else color="danger" @click="deleteReserve(session)"> خروج من السيشن </vs-button>

                                  </div>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
         
              </div>



          <div @click="$router.push(`/course/${$route.params.id}/timeline`)" class="course-timeline">
              <h3> <img src="@/assets/imgs/noun_timeline_3037155.png" alt=""> التايم لاين </h3>
          </div>


        <div class="title">
          <h3>
            <img src="@/assets/imgs/noun_exam_-1.png" alt="">
            مجلدات الإمتحانات</h3>
        </div>

      <div class="levels">
        <div class="row">
          <div class="col-md-4" v-for="folder in folders" :key="folder.id">
            <nuxt-link :to="`/folders/${folder.id}/exams`">
              <div class="level-item box-shadow-class">
                <img src="@/assets/imgs/folder-icon.png" alt="">
                <h6> {{folder.name}} </h6>
            </div>
            </nuxt-link>
          </div>

          
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import Loading from '@/components/Loading'
export default {
    components:{
        Loading
    },
    data(){
        return {
            isLoading: true,
            folders: [],
            nextLife: {}
        }
    },
    created(){
        this.getCourseFolders();
        this.getNextLec()
    },
    methods:{
        deleteReserve(session){
            this.$snotify.confirm("هل تريد الخروج  من السيشن  المُحدد ", " هل أنت متأكد", {
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        buttons: [
          {
            text: "موافق",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = true;

               this.$axios.delete(`/sessions/${session.id}/reserve`)
                .then(res => {
                    this.getNextLec()
                    this.$snotify.success("تم الخروج بنجاح")
                
            }).finally(() => this.isLoading = false)
            }
          },
          {
            text: "إلغاء",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = false;
            }
          }
        ]
      });
        },
        addReserve(session){
            this.isLoading =true;
            if(session.users.length < session.limit){
                this.$axios.post(`/sessions/${session.id}/reserve`).then(res => {
                this.getNextLec()
                this.$snotify.success(`تم التسجيل في السيشن بنجاح`)
            }).catch(error => {
                this.$snotify.error(`غير مسموح بالتسجيل في اكثر من سيشن`)
            })
            .finally(() => this.isLoading = false)
            }
        },  
        getNextLec(){
           this.$axios.get(`lectures/${this.$route.query.nextLive}`).then(res => {
              console.log("last one => ", res.data)
                  this.nextLife = res.data
              
          }).finally(() => this.isLoading = false)
      },
        getCourseFolders(){
            this.$axios.get(`courses/${this.$route.params.id}/folders`).then(res => {
                console.log(res)
                this.folders = res.data
            }).finally(() => this.isLoading = false)
        }
        
    }
}
</script>

<style lang="scss">
@import '../../../assets/sass/general-exam-level.scss';
.folder-choose{
    .course-timeline{
        box-shadow: 0px 1px 9px 0px #DDD;
        padding: 15px;
        margin-bottom: 30px;
        cursor: pointer;
        margin-top: 50px;
        
    }
    .title{
        
        h3{
            margin-bottom: 20px;
            color: #46a8d5;
    }
    }
    .level-item{
        min-height: 154px !important;
        padding: 25px 0;

        >img{
            width:100px;
        }
    }
    .LiveSoon{
      text-align: center;
      color: #ff4757;
      position: relative;
    &::after{
          position: absolute;
    content: "";
    top: 50%;
    left: 72%;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #ff4757;
    transform: translate(-50%,-50%);
    }
    }
    .unclickable{
          background: #ff4757;
        padding: 5px;
        margin: 8px;
        display: inline-block;
        a{
          font-family: "CustomFontBold";
        border-radius: 3px;
        color: #FFF;
        }
    }
    .click-here{
          background: #46c93a;
        padding: 5px;
        margin: 8px;
        display: inline-block;
        a{
          font-family: "CustomFontBold";
        border-radius: 3px;
        color: #FFF;
        }
    }
  .isLiveNow{
    text-align: center;
        color: #46c93a;
    position: relative;
    &::after{
          position: absolute;
    content: "";
    top: 50%;
    left: 72%;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #46c93a;
    transform: translate(-50%,-50%);
    }
  }
    .course-content{
        cursor: pointer;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        padding: 26px;
        transition: all .5s ease;
        margin-top: 25px;
        transition: all .5s ease;
        &:hover{
            transform: translateY(-15px);
        }
        
        h5{
            font-weight: bold;
        }
    }
}

</style>
