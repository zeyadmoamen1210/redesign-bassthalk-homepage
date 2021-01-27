<template>
  <div class="subject-course-page">
    <div class="container">

      <h3 style="    color: #0989c3;">كورسات مادة  {{subjectName}}  </h3>
      

        <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && studCourses.length == 0" />

    

      <div class="row" v-else>
        <div class="col-md-3" v-for="course in studCourses" :key="course.id">
          <div class="course" :style="{'paddingBottom': course.isChecked === false ? '10px' : '50px'}">
            <div class="lec-card" style="text-align: center;height:170px">
                <img class="lec-card-img" v-if="course.image" style="width:100%;height:100%" :src="course.image" alt="">
                <img class="lec-card-img" v-else-if="!course.image && course.teacher && course.teacher.photo != 'https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg' && course.teacher.photo" style="width:100%;height:100%" :src="course.teacher.photo" alt="">

                <img v-else style="width:100%;height:100%" class="lec-card-img"  src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" alt="">
            </div>

              <div  class="status">
                <!-- <div v-if="course.enrollment == 'accepted'">

                   <vs-button  color="primary" @click="$router.push(`/course/${course.id}/main${course.lecture ? '?nextLive=' +  course.lecture : ''}`)" > دخول </vs-button> 

                </div> -->
                <!-- <div v-if="course.enrollment == 'pending'"> <vs-button style="cursor:auto" color="warning"> قيد الإنتظار </vs-button> </div> -->
                <!-- <div v-else> <vs-button @click="EnrollCourse(course)" color="primary"> عرض التفاصيل </vs-button> </div> -->
                <div style="margin: 15px 0;"> <vs-button @click="$router.push(`/course-details/${course.id}`)" color="primary"> عرض التفاصيل </vs-button> </div>

                <!-- <div class="more-details">
                  <vs-button @click="$router.push(`/course-details/${course.id}`)" color="#f6f6f6" style="color:#333;border:1px solid #ccc"><i class="fas fa-info"></i></vs-button>
                </div>
                 -->
              </div>

            <div style="font-family:'CustomFontRegular';padding-top:10px;    margin-bottom: 10px;"> 
              <h5 style="font-family: CustomFontRegular;text-overflow: ellipsis;overflow: hidden;line-height: 1.5em;height: 4em;font-size: 16px;"> {{course.nameAr}} </h5>
              <!-- <p style="font-size: 13px;color: #808080;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"> {{course.descriptionAr}} </p> -->
            <!-- <span> {{course.descriptionAr}} </span> -->
            </div>

            <!-- <div class="teacher" v-if="course.teacher">
              <div>
                <vs-avatar size="60px" v-if="course.teacher && course.teacher.photo" :src="course.teacher.photo"></vs-avatar>
                <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"></vs-avatar>
              </div>
              <div style="overflow:hidden">
                <h6 style="    white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" v-if="course.teacher"> {{course.teacher.username}} </h6>
                <p style="text-overflow: ellipsis;line-height: 1.5em;height: 3em;overflow: hidden;font-size: 14px;" v-if="course.teacher"> {{course.teacher.description}} </p>
              </div>

              
            </div> -->
            <!-- <div style="text-align: left" >
                <vs-button v-if="!ifMyCourseExist(course)"  style="width: 100%;margin-top: 6px;padding: 6px;text-align: center;" color="success" > حجز الكورس </vs-button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

     <div v-if="totalPage > 1">
          <vs-pagination :total="totalPage" v-model="page"></vs-pagination>
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
import NoData from '@/components/NoData';
export default {
  middleware: 'auth-student',
  components:{
      Loading,
      NoData
  },
  data(){
    return{
      page: 1,
      isLoading: true,
      totalPage:1,
      studCourses: [],
      subjectName: "",
      currCourseToEnrollPopup: false,
      enrollmentCourse:{
          id:"",
          code: ""
      }
    }
  },
  watch:{
    page(val){
      this.$vs.loading();
      this.$axios.get(`/subjects/${this.$route.params.id}/courses?page=${val}&limit=12`).then(res => {
          console.log(res)
          this.studCourses = res.data.docs;
          console.log("stud courses ",this.studCourses);
          this.page = res.data.page;
          this.totalPage = res.data.totalPages;

          this.subjectName = res.data.docs[0].subject.nameAr ;

          window.scrollTo({top:0, behavior:'smooth'});

    }).finally(() => this.$vs.loading.close());
    }
  },
  computed:{
    myCourses(){
      return this.$store.getters.getMyCourses;
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
      // EnrollCourseMain(){
      //   this.currCourseToEnrollPopup = false;
      //     this.isLoading = true;
      //     this.$axios.post(`courses/${this.enrollmentCourse.id}/enrollment`, {
      //         code: this.enrollmentCourse.code,
      //     }).then(res => {
      //         this.$snotify.success("تم إرسال طلبك ");
      //         this.getSubjectCourse();            
      //     }).catch(err => {
      //       this.$snotify.error("الكود الذي أدخلته غير صحيح");
      //     }).finally(() => this.isLoading = false)
      // },
      getSubjectCourse(){
          this.$axios.get(`/subjects/${this.$route.params.id}/courses?limit=12`).then(res => {
          console.log(res)
          this.studCourses = res.data.docs;
          console.log("stud courses ",this.studCourses);
          this.page = res.data.page;
          this.totalPage = res.data.totalPages;

            this.subjectName = res.data.docs[0].subject.nameAr ;

    }).finally(() => this.isLoading = false)
      },
     

  },
  created(){


    // waiting my courses load first and then get subject courses to check my enrollment and not allaw to enroll it 
           this.getSubjectCourse()
  

  }
}
</script>

<style lang="scss">
.vs-button-primary.vs-button-filled {
    background: #0989c3 !important;
}


.con-vs-pagination{
  margin:auto;
}
.vs-pagination--ul{
  margin-bottom:0;
}

.subject-course-page{
  padding-top:80px;
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

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .live-teaching {
    .bannar {
      background-position: 0 !important;
      h3 {
        width: auto !important;
      }
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>