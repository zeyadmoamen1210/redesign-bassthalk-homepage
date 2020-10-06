<template>
  <div>

    <div class="container">
      <Loading v-if="isLoading" />
      <div class="live-details" v-else>
        <div class="course-head">
              <div class="course-head-title">
                  <span>
                      <img src="@/assets/imgs/live-blue.png" alt="">
                  </span>
                  <h4> المحاضرة القادمة </h4>
              </div>
              <div class="course-head-buttons">
                  <vs-button color="#DDD" @click="$router.push(`/courseStats/${$route.params.id}`)"> <img src="@/assets/imgs/live-dark.png" alt=""> تفاصيل البث </vs-button>
                  <vs-button color="#DDD" @click="$router.push(`/course/${$route.params.id}/timeline`)"> <img src="@/assets/imgs/noun_timeline_3037155.png" alt=""> التايم لاين </vs-button>
              </div>
          </div>
        <div class="row">
         <div class="col-md-6" v-for="session in nextLife.sessions" :key="session.id" v-if="session.id == $route.params.session_id">
            <div class="live-details-item">
              
              <div class="next-live">
                <h6>
                  البث القادم</h6>
                 <div class="live-time-last">
                  <h6 style="text-align:right;color:#f5355c">متبقي</h6>
                  <div class="live-time">
  <no-ssr>
                                  <vac :end-time="session.time">
                                    <template
                                      v-slot:process="{ timeObj }">
                                      <!-- <span></span> -->
                                      <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>ثانية</h6>
                      <span>{{ ` ${timeObj.s}` }}</span>
                    </div>
                                      
                                      <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>دقيقة</h6>
                      <span>{{ ` ${timeObj.m}` }}</span>

                    </div>
                                      
                                       <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>ساعة</h6>
                      <span>{{ ` ${timeObj.h}` }}</span>

                    </div>
                    <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>يوم</h6>
                      <span>{{ ` ${timeObj.d}` }}</span>

                    </div>

                                      
                                    </template>
                                    <span slot="finish" style="font-family:'CustomFontRegular'"> تم إنتهاء الوقت  </span>
                                  </vac>
                                </no-ssr>


                                    

                </div>



                               

                    
                     
                     
                     
                  </div>

                <!-- </div> -->

                <div class="teacher">
                  <img :src="course.teacher.photo" alt="">
                  <img src="@/assets/imgs/live-red.png" alt="">
                </div>

              </div>

            </div>
         </div>

         <div class="col-md-6" v-for="session in nextLife.sessions" :key="session.id" v-if="session.id == $route.params.session_id">
           
              <div class="you-can-follow" style="margin-top: 50px;">
                <h6>كما يمكنك متابعة</h6>
                <button  @click="deleteReserve(session)" v-if="session.isIn">
                  <img src="@/assets/imgs/exit-right.svg" alt="">
                  خروج من السيشن</button>
                  <button @click="addReserve(session)" v-else>
                  <img src="@/assets/imgs/link.svg" alt="">
                  إنضام الي السيشن</button>
                <button v-if="session.live && session.isIn">
                  <a target="_blank" :href="`https://${session.live}`">
                    <img src="@/assets/imgs/live-stream.svg" alt="">
                  أضغط هنا (لينك السيشن)  

                  <span style="color:green;font-weight:bold"> مباشر الأن </span>
                  </a>
                </button>
                <button v-else-if="session.isIn && !session.live">
                  <a>
                    <img src="@/assets/imgs/noun_Save_3324346.png" alt="">
                  سيتم توفير الرابط قريبا  
                  </a>
                </button>


                <!-- <button>
                    <img src="@/assets/imgs/lecture.svg" alt="">
                    المحاضرات السابقة
                </button> -->
                <button v-if="session.isIn" @click="$router.push(`/course/${$route.params.id}/folders`)">
                    <img src="@/assets/imgs/exam.svg" alt="">
                    الإمتحانات
                </button>

                <div style="display:flex">
                  <h6 style="flex-basis:50%;font-size:17px"> أقصي عدد : <span style="color:#0989c3">{{session.limit}}</span> </h6>
                  <h6 v-if="session.users" style="flex-basis:50%;text-align:left;font-size:17px"> عدد المشتركين : <span style="color:#0989c3">{{session.users.length}}</span> </h6>
                </div>

              </div>
            </div>

        </div>
         <h5> {{nextLife.title}} </h5>
                  <h5 v-if="course.teacher"> أ / {{course.teacher.username}} </h5>
                  <h5 v-if="course.teacher"> {{course.teacher.description}} </h5>
      </div>
    </div>
  </div>
</template>

<script>





import Loading from '@/components/Loading';
export default {
  components:{
    Loading,
  },
    data(){
        return{
            nextLife:{},
            course:{},
            my_session:{},
            isLoading: true,
        }
    },
    created(){
        this.getNextLec()
        console.log("session id => ",this.$route.params.session_id)
        this.$store.state.myCoursesAsTeacher.forEach(obj => {
                   if( obj.course && obj.course.id == this.$route.params.id){
                       this.course = obj.course;
                       console.log("course", obj)
                   }
               })
    },
    methods:{
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


        getNextLec(){
           this.$axios.get(`lectures/${this.$route.query.nextLive}`).then(res => {
              console.log("last one => ", res.data)
                  this.nextLife = res.data
                    this.nextLife.sessions.forEach(obj => {
                      console.log("session => ", obj)
                        if(obj.id == this.$route.params.session_id){
                          this.my_session = obj;
                          console.log("my session ",this.my_session)
                        }
                    })
          }).finally(() => this.isLoading = false)
         },
    }
}
</script>

<style lang="scss">
.live-details{
    margin-top: 50px;
    .title{
      h4{
        color:#058ac6bd;
      }
    }
     .course-head{
        display: flex;
        .course-head-title{
            flex-basis: 50%;
            display: flex;
            h4{
                color:rgba(5,138,198,0.74118);
                font-family: "CustomFontBold";
                margin-right: 5px;
            }
        }
        .course-head-buttons{
            flex-basis: 50%;
            text-align: left;
            button{
                font-family: "CustomFontBold";
                color: #333;
            }
        }
    }
    .next-live{
      margin-top: 50px;
      h6{
            font-size: 20px;
      color: #4f4f4f;
      margin-bottom: 30px;
      }
      .teacher{
        height: 126px;
      width: 126px;
      border-radius: 50%;
      border: 2px solid #058ac6bd;
      padding: 4px;
      background: #ebebeb;
      position: relative;
      margin-top: 52px;
        img{
          &:first-of-type{
            width: 93%;
      border-radius: 50%;
      height: 93%;
      position: absolute;
          }
          &:last-of-type{
                position: absolute;
      top: -8px;
      z-index: 3;
      left: -18px;
      width: 68px;
          }
        }
      }
      .live-time-last{
            width: 66%;
      float: left;
      margin-top: 15px;
        h6{
          &:first-of-type{
              margin-bottom: 17px;
      color: #f5355c;
          }
           &:last-of-type{
            margin-bottom: 17px;
      color: #333;
      margin-top: 10px;
      text-align: center;
          }
        }
        .live-time{
          overflow: hidden;
              width: 280px;
            >span{
                display: flex;
                .time-div{
                  margin: 0 3px;
                  position: relative;
                  span{
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    transform: translate(-50%);
                    color: #FFF;
                    font-weight: bold;
                    font-size: 18px;
                  }
                }
            }
          >div{
            width: 25%;
            float: left;
            text-align: center;
            position: relative;
            span{
                  position: absolute;
      top: 16px;
      left: 30px;
      color: #FFF;
      font-weight: bold;
      font-family: "CustomFontBold";
            }
          img{
            width: 79%;
          }
          }
  
        }
  
      }
    }
    
      h5{
      font-family: "CustomFontRegular";
      font-weight: bold;
      &:first-of-type{
                      margin-top: 25px;
  
      }
          }
  
          .you-can-follow{
            margin-top: 50px;
      border-right: 3px solid #058ac6;
      padding-right: 10px;
            h6{
                  font-size: 23px;
      margin-bottom: 15px;
      color: #535353;
            }
            button{
                     width: 100%;
      padding: 13px 0;
  padding-right: 11px;
      border: 0;
      box-shadow: 1px 1px 13px 1px #DDD;
      background: #FFF;
      border-radius: 7px;
      margin-bottom: 13px;
      font-family: "CustomFontMedium";
      color: #4f4f4f;
      img{
        margin-left: 14px;
        width:35px;
      }
            }
          }
  }
   .lesson-btns{
        padding: 0 44px;
      button{
            width: 100%;
      text-align: center;
      background: #058ac6;
      border-radius: 9px;
      border: 0;
      padding: 13px;
      font-family: "CustomFontBold";
      color: #FFF;
      }
      .explain-btn{
        background: #DDD;
        color:#333;
  
      }
    }
  
  
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    .live-details{
      padding-top: 60px;
    }
  .live-details .next-live .live-time-last .live-time{
        width: 191px;
      margin: auto;
  }
  .live-details .next-live .live-time-last h6:last-of-type{
        font-size: 13px;
  }
  .live-details .next-live .live-time-last .live-time > div span{
        top: 13px;
      left: 20px;
  }
  .live-details .next-live .teacher {
      height: 90px;
      width: 90px;
      margin-top: 60px;
  }
  .live-details .next-live .live-time-last > h6{
  
      margin-right: 17px;
      font-size: 16px !important;
  }
  .lesson-btns .explain-btn{
        margin-bottom: 15px;
  }
  .live-details h5{
    text-align: center;
  }
  .live-details .next-live{
    margin-top: 17px;
    >h6{
      font-size: 18px;
    }
  }
   }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    .live-details{
      padding-top: 60px;
    }
   }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
  .live-details .next-live .live-time-last .live-time{
        width: 228px;
      margin-right: 13px;
  }
  .live-details .next-live .live-time-last > h6{
      margin-right: 31px;
  }
  .live-details {
      margin-top: 80px;
  }
   }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
  .live-details {
      margin-top: 134px;
  }
   }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }
</style>
