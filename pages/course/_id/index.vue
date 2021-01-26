<template>
  <div class="new-course-page">
      <div class="container">
          <Loading v-if="isLoading" />
          <div v-else>
              <div class="course-head">
              <div class="course-head-title">
                  <span>
                      <img src="@/assets/imgs/live-blue.png" alt="">
                  </span>
                  <h4> تفاصيل الكورس </h4>
              </div>
              <div class="course-head-buttons">
                  <vs-button @click="$router.push(`/courseStats/${$route.params.id}`)" color="#DDD"> <img src="@/assets/imgs/live-dark.png" alt=""> تفاصيل البث </vs-button>
                  <vs-button @click="$router.push(`/course/${$route.params.id}/timeline`)" color="#DDD"> <img src="@/assets/imgs/noun_timeline_3037155.png" alt=""> التايم لاين </vs-button>
              </div>
          </div>

          <div v-if="Object.keys(nextLife).length !== 0" class="course-lecture-body">
              <div class="course-lecture-head">
                  <h5 v-if="course.teacher"> <span>أستاذ /</span>   {{course.teacher.username}} </h5>
                  <h5> <span> عنوان المحاضرة / </span> {{nextLife.title}} </h5>
                  <h5> <span> تاريخ المحاضرة / </span> {{ new Date(nextLife.createdAt).toLocaleDateString() }} </h5>
              </div>
          </div>
          <NoData v-else msg=" سيتم توفير المحاضرة القادمة قريبا"/>




                <vs-button style="color:#FFF;font-family:'CustomFontRegular'" color="#f20333" @click="$router.push(`/course/${$route.params.id}/folders`)">
                    الإمتحانات
                </vs-button>


                <vs-button style="color:#FFF;font-family:'CustomFontRegular'" color="primary" @click="$router.push(`/course/${$route.params.id}/lectures`)">
                    المحاضرات السابقة
                </vs-button>



          <div  class="time-content">
            <div class="row">
              <div v-if="nextLife.sessions" class="col-md-6" v-for="session in nextLife.sessions" :key="session.id">
                <div class="time-course"  @click="$router.push(`/course/${$route.params.id}/session/${session.id}?nextLive=${$route.query.nextLive}`)">
                  
                    <div style="flex-basis: 24%;margin: 0;">
                       <div class="teacher" style="margin:auto">
                          <img v-if="course.teacher" :src="course.teacher.photo" alt="">
                          <img src="@/assets/imgs/live-red.png" alt="">
                        </div>
                  </div>

                  <div v-if="nextLife" style="flex-basis: 57%;">
                    <h6 class="oneline" style="margin-bottom:5px;"> {{nextLife.title}} </h6>
                    <h6 v-if="course.teacher" class="oneline" style="color: #6c6c6c;">  {{course.teacher.username}} </h6>
                  </div>
                    


                  <div style="text-align:center">
                    <img style="margin-top: 8px;" src="@/assets/imgs/noun_Time_2405843.png" alt="">
                    <h6 style="text-align:center;color: #838383;margin-top:8px"> {{new Date(session.time).toLocaleTimeString()}} </h6>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
          
      </div>

      
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
export default {
    components:{
        Loading,
        NoData
    },
    data(){
        return{
            isLoading: true,
            folders: [],
            nextLife: {},
            course:{}
        }
    },
     created(){
        this.getCourseFolders();
        if(this.$route.query.nextLive){
          this.getNextLec()
        }
        console.log("store",this.$store.state.myCoursesAsTeacher)
        if(this.$store.state.myCoursesAsTeacher){
           this.$store.state.myCoursesAsTeacher.forEach(obj =>{
         if(obj.course && obj.course.id == this.$route.params.id){
           this.course = obj.course
         }
       })
        }
      
     },
     methods:{
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

<style scoped lang="scss">
.oneline{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.new-course-page{
    margin-top: 70px;
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
    .course-lecture-body{
        
        background: linear-gradient(to left, #0989c3, #246787);
        color: #FFF;
        text-align: center;
        padding: 17px 10px;
        margin: 40px 0 15px;
        border-radius: 13px;
        .course-lecture-head{
           h5{
                  margin-bottom: 10px;
    font-family: "CustomFontBold";
    padding-right: 17px;
           }
           span{
               font-size: 20px;
               font-family: "CustomFontRegular";
           }
        }
    }


    .time-content{
        margin-top: 35px;
        .time-course{
            &:hover{
                transform: scale(1.05);
            }
            cursor: pointer;
            transition: all .5s ease;
            //    overflow: hidden;
            display: flex;
      box-shadow: 1px 0px 10px 2px #DDD;
      padding: 18px 0;
      border-radius: 4px;
      margin-top: 20px;
      margin: auto;
      margin-bottom: 25px;
      
          .teacher{
          height: 70px;
      width: 77px;
      border-radius: 50%;
      border: 3px solid rgba(5, 138, 198, 0.74118);
      padding: 4px;
      background: #ebebeb;
      position: relative;
        img{
          &:first-of-type{
                width: 100%;
      border-radius: 50%;
      height: 100%;
      position: absolute;
      top: 1px;
      left: 0;
          }
          &:last-of-type{
                 position: absolute;
      top: -8px;
      z-index: 3;
      left: -18px;
      width: 52px;
          }
        }
      }
  
      >div{
       flex-basis: 33.33%;
       &:first-of-type{
         margin-top: 20px;
         text-align: center;
  
         img{
           display: inline-block;
         }
         h6{
              text-align: center;
      display: inline-block;
      padding: 10px 0;
      color: #6a6a6a;
         }
       }
       &:nth-of-type(2){
         margin-top: 12px;
       }
       &:last-of-type{
         width: 26%;
       }
      }
        }
      }
}
</style>