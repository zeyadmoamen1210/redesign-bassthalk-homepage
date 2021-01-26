<template>
  <div>
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3 style="    margin-bottom: 11px;">
            <img src="@/assets/imgs/noun_exam_-1.png" alt="">
             محتويات الكورس</h3>
        </div>

      <div class="levels">
        <div class="row">
          <div class="col-md-3">
            <nuxt-link :to="`/course/${$route.params.id}/lectures`">
              <div class="level-item box-shadow-class">
                <img style="margin-top:22px;width:100px;" src="@/assets/imgs/lecture.svg" alt="">
                <h6>المحاضرات المسجلة</h6>
                 
            </div>
            </nuxt-link>
          </div>

           <div class="col-md-3">
            <nuxt-link :to="`/course/${$route.params.id}/folders`">
              <div class="level-item box-shadow-class">
                <img style="margin-top:22px;width:100px;" src="@/assets/imgs/test.svg" alt="">
                <h6>الامتحانات العامة</h6>
            </div>
            </nuxt-link>
          </div>

           <div class="col-md-3">
            <nuxt-link :to="`/course/${$route.params.id}/timeline`">
              <div class="level-item box-shadow-class">
                <img style="margin-top:22px;width:100px;" src="@/assets/imgs/timeline.svg" alt="">
                <h6>التايم لاين</h6>
            </div>
            </nuxt-link>
          </div>

          <div class="col-md-3">
            <nuxt-link :to="`/course/${$route.params.id}${$route.query.nextLive ? '?nextLive='+$route.query.nextLive : '' }`">
              <div class="level-item box-shadow-class">
                <img style="margin-top:22px;width:100px;" src="@/assets/imgs/video-conference.svg" alt="">
                <h6>اونلاين</h6>
            </div>
            </nuxt-link>
          </div>

        </div>
      </div>


      <div class="related-courses" v-if="1==0">

        <div class="title">
          <h3 style="margin-bottom:0">
            <img src="@/assets/imgs/noun_exam_-1.png" alt="">
             الكورسات المقترحة</h3>
        </div>

            <Loading v-if="isLoading" />
            <NoData v-else-if="relatedCourses.length == 0 && isLoading == false" />

            <swiper style="padding:0 15px 0" v-else class="swiper" :options="swiperOptionBestSeller">
              <swiper-slide v-for="course in relatedCourses" :key="course.id">
                  <div class="course" :style="{'paddingBottom': course.isChecked === false ? '10px' : '50px'}">
            <div class="lec-card" style="text-align: center;height:150px">
                <img class="lec-card-img" v-if="course.image" style="width:100%;height:100%" :src="course.image" alt="">
                <img v-else style="width:100%;height:100%" class="lec-card-img"  src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" alt="">
            </div>

              <div  class="status">
                <div v-if="course.enrollment == 'accepted'"> <vs-button  color="success" @click="$router.push(`/course/${course.id}/main${course.lecture ? '?nextLive=' +  course.lecture : ''}`)" > دخول </vs-button> </div>
                <!-- <div v-if="course.enrollment == 'pending'"> <vs-button style="cursor:auto" color="warning"> قيد الإنتظار </vs-button> </div> -->
                <!-- <div v-else-if="course.enrollment == 'refused'"> <vs-button style="cursor:auto" color="danger"> مرفوض </vs-button> </div> -->
                <!-- <div v-else> <vs-button @click="EnrollCourse(course)" color="primary"> عرض التفاصيل </vs-button> </div> -->
                <div v-else> <vs-button @click="$router.push(`/course-details/${course.id}`)" color="primary"> عرض التفاصيل </vs-button> </div>


                <!-- <div class="more-details">
                  <vs-button @click="$router.push(`/course-details/${course.id}`)" color="#f6f6f6" style="color:#333;border:1px solid #ccc"><i class="fas fa-info"></i></vs-button>
                </div> -->
                
              </div>

            <div style="font-family:'CustomFontRegular';padding-top:10px;    margin-bottom: 15px;"> 
              <h5 style="font-family:'CustomFontRegular'"> {{course.nameAr}} </h5>
              <p style="font-size: 13px;color: #808080;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"> {{course.descriptionAr}} </p>
            <!-- <span> {{course.descriptionAr}} </span> -->
            </div>

         
          </div>
              </swiper-slide>

              <div class="swiper-pagination-best-seller" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>


      </div>


      </div>
    </div>

    <vs-popup class="holamundo"  title="حجز الكورس" :active.sync="currCourseToEnrollPopup">
      <div class="form-group">
          <label> ادخل كود التفعيل للكورس </label>
          <input type="text" v-model="enrollmentCourse.code" class="form-control">
      </div>
      <vs-button  @click="EnrollCourseMain"> حجز الكورس </vs-button>
    </vs-popup>

  </div>
</template>

<script>

import Loading from '@/components/Loading';
export default {
    components:{
      Loading
    },
      data(){
        return{
          currCourseToEnrollPopup: false,
      enrollmentCourse:{
          id:"",
          code: ""
      },
            isLoading: true,
            relatedCourses: [],
            page:1,
            totalPages: 1,

            swiperOptionBestSeller: {
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination-best-seller",
        //   clickable: true,
        // },
         breakpoints: {
          1200: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
     
        }
    },

    methods:{

       EnrollCourseMain() {
      this.isLoading = true
    this.currCourseToEnrollPopup = false;
      this.$axios
        .post(`/courses/${this.enrollmentCourse.id}/enrollment-auto`, {
          code: this.enrollmentCourse.code,
        })
        .then((res) => {
          this.getSubjectCourse()
          this.$snotify.success('تم تفعيل الإشتراك بنجاح ')

          
          this.code = ''
        })
        .catch((e) => {
          this.$snotify.error('الكود الذي أدخلته غير صحيح')
        })
        .finally(() => (this.isLoading = false))
    },
     
  
      EnrollCourse(course){
          this.currCourseToEnrollPopup = true;
          this.enrollmentCourse.id = course.id
          this.enrollmentCourse.code = course.code
      },


      getRelatedCourses(){
        this.isLoading = true;
        this.$axios.get(`/related-courses/${this.$route.params.id}`).then(res => {
          this.relatedCourses = res.data.docs;
          this.page = res.data.page;
          this.totalPages = res.data.totalPages;
        }).finally(() => this.isLoading = false);
      }
    },

    created(){
      // this.getRelatedCourses();
    }

}
</script>

<style lang="scss">
.tests-level{
    margin-top:37px;

    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 22px;
    background: #f6f6f6;
    padding: 8px 10px;
    font-weight: bold;
    color: #1f74ff;
    border-radius: 8px;
    border: 1px solid #CCC;
}


    .related-courses{
      .course{
    position: relative;
    margin-top: 15px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    padding-bottom: 38px;
    min-height: 216px;
    transition: all .5s ease;
    margin-bottom: 15px;
        &:hover{
          transform: translateY(-10px);
        }
    .status{
      position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 10px;
    color: #FFF;
    font-family: "CustomFontBold";
    display: flex;
    >div{
     width:100%;
    }
    // background: #0989c3;
    button{
      width: 100%;
      text-align: center;
    }
    // .more-details{
    //   text-align: center;
    //   flex:1;
    //   margin-right: 2px;
    // }
    }
    .accepted{
      background: #27ae60;
    }
    .refused{
      background: #c0392b;
    }
    .pending{
      background: #0989c3;
    }
    >span{
          display: block;
    text-align: center;
    color: #c5c5c5;
    font-family: "CustomFontRegular";
    }
    >h5{
      margin-bottom: 0;
    text-align: center;
    }
    .teacher{
      display: flex;
    margin-top: 19px;
    // background: #f7f7f7;
    // border-top: 1px solid #EEE;
    h6{
      margin-top: 15px;
      margin-bottom: 0;
    }
    }
  }
    }
    .title{
      h3{
        color: rgba(5,138,198,0.74118);
      margin-bottom: 30px;
      font-family: "CustomFontMedium";
      }
    }
    .lesson-inner-grid{
      .unit{
         box-shadow: none;
          display: inline-block;
      }
      .subject-name{
            padding: 36px 0;
        display:inline-block
      }
    }
    .levels{
      .level-item{
        padding: 10px;
        text-align: center;
        min-height: 200px;
        transition: all .4s linear;
        margin-bottom: 20px;
        cursor: pointer;
        h6{
              text-align: center;
      margin-top: 15px;
      font-size: 19px;
      color: #6e6e6e;
        }
        &:hover{
          transform: scale(1.03);
          box-shadow: 0px 1px 8px 5px #DDD;;
      }
      }
      .level-cicle{
        background-color: green;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        position: relative;
        z-index: -1;
        .inner-level-cicle{
          position: absolute;
          top: 5px;
          left: 5px;
          content: '';
          background-color: #FFF;
        }
      }
    }
  }
  
  
  
    // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
  .tests-level{
    padding-top: 60px;
  }
   }
  
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
  .tests-level{
    padding-top: 60px;
  }
   }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
  
   }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
  
   }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }</style>
