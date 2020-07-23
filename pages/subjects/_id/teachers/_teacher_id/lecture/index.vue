<template>
  <div>

    <div class="container">
      <div class="live-details">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                                    <img src="@/assets/imgs/live-blue.png" alt="">
                  بث مباشر</h4>
              </div>
            </div>
         </div>

         <div class="col-md-6">
              <div class="lesson-btns" style="padding:0">
                <div class="row">
                  <div class="col-md-6">
                    <NuxtLink to="" active-class="active">
                      <button class="explain-btn">
                                                <img src="@/assets/imgs/live-dark.png" alt="">
                        تفاصيل البث</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink to="">
                      <button class="explain-btn">
                                                <img src="@/assets/imgs/noun_timeline_3037155.png" alt="">
                        التايم لاين</button>
                    </NuxtLink>

                  </div>
                </div>
              </div>

            </div>

            <h6 style="margin-top:15px">قائمة البث المحفوظة</h6>

        </div>


         


          <div class="time-content">
            <div class="row">
              <div class="col-md-6" v-for="lec of lectures" :key="lec.id">


                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="khkj" aria-expanded="false" aria-controls="collapseExample">
                  Button with data-target
                </button>

                <div class="collapse" id="khkj">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </div>
                
                <div class="time-course">
                  <div>
                    <img src="@/assets/imgs/noun_Time_2405843.png" alt="">
                    <h6> {{new Date(lec.createdAt).toLocaleTimeString() }} </h6>
                  </div>

                  <div>
                    <h6> {{lec.title}} </h6>
                    <h6 style="color: #6c6c6c;">أستاذ /  {{teacher.username}} </h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img :src="teacher.photo" alt="">
                          <img src="@/assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
                </div>
              </div>

            
             

            </div>
          </div>


        </div>

    <!-- this is comment -->
    <!-- this is comment -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            lectures: [],
            teacher: {}
        }
    },
    created(){
        // console.log(this.$store.state.teacher)
        // console.log(this.$store.state.subject)
        this.$axios.get(`subjects/${this.$route.params.id}/lectures?teacher=${this.$route.params.teacher_id}`).then(res => {
            console.log(res)
            this.lectures = res.data.lectures
        })

        this.$axios.get('teachers').then(res => {
          console.log(res.data)
          this.teacher = res.data.find(teach => teach.id == this.$route.params.teacher_id)
        })
    },
    
}
</script>

<style lang="scss">
.live-details{
    margin-top: 50px;
    .title{
      h4{
        color:#058ac6bd;
            padding: 9px 0;
      }
    }
    .live-schedule{
      margin-top: 34px;
      overflow: hidden;
      .title{
        h6{
          width:50%;
          float:left;
              padding-top: 10px;
        }
        .img{
              display: block;
      width: 50%;
      float: left;
      text-align: left;
        }
      }
  
  
    }
  
    .schedule-bar{
           overflow: hidden;
      background: linear-gradient(to left,#0989c3,#246787);
      color: #FFF;
      text-align: center;
      padding: 10px;
      margin: 14px 0;
      border-radius: 13px;
        >div{
         width: calc(100%/12);
      float: left;
      h6{
        text-align: center;
      }
      span{
            display: block;
      text-align: center;
      }
        }
      }
  
      .time-content{
        .time-course{
               overflow: hidden;
      box-shadow: 1px 0px 10px 2px #DDD;
      padding: 13px 0;
      border-radius: 4px;
      margin-top: 20px;
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
       width:33.333%;
       float: left;
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
         margin-top: 20px;
       }
       &:last-of-type{
         width: 26%;
       }
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
      margin-bottom: 15px;
  
      }
    }
  
  
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    .live-details{
      padding-top: 60px;
    }
  .live-details .time-content .time-course > div:nth-of-type(2){
    width: 42%;
    margin-top: 14px;
  }
  .live-details .time-content .time-course > div:first-of-type{
    width: 30%;
  }
  .live-details .time-content .time-course .teacher{
        height: 60px;
      width: 59px;
          margin-top: 20px;
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
  .live-details .time-content .time-course > div:nth-of-type(2){
    width: 43%;
  }
  .live-details .time-content .time-course > div:first-of-type{
    width: 27%;
  }
  .live-details .time-content .time-course > div:last-of-type{
    width: 27%;
  }
   }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
  
   }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  
   }
</style>
