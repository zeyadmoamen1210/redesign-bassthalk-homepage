<template>
  <div class="subject-course-page">
    <div class="container">
        <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && studCourses.length == 0" />

      <div class="row" v-else>
        <div class="col-md-4" v-for="course in studCourses" :key="course.id">
          <div class="course" :style="{'paddingBottom': course.isChecked === false ? '10px' : '50px'}">
            
              <div  class="status">
                <div v-if="course.enrollment == 'accepted'"> <vs-button  color="success" @click="$router.push(`/course/${course.id}${course.lecture ? '?nextLive=' + course.lecture : ''}`)" > دخول </vs-button> </div>
                <div v-if="course.enrollment == 'pending'"> <vs-button style="cursor:auto" color="warning"> قيد الإنتظار </vs-button> </div>
                <div v-else-if="course.enrollment == 'refused'"> <vs-button style="cursor:auto" color="danger"> مرفوض </vs-button> </div>
                <div v-else-if="!course.enrollment"> <vs-button @click="EnrollCourse(course)" color="primary"> اشتراك </vs-button> </div>
                
              </div>
            <div style="text-align: center;font-family:'CustomFontRegular';background: #0989c3;color: #FFF;padding: 10px;"> 
              <h5 style="text-align:center;font-family:'CustomFontRegular';margin-bottom:0"> {{course.nameAr}} </h5>
            <!-- <span> {{course.descriptionAr}} </span> -->
            </div>

            <div class="teacher" v-if="course.teacher">
              <div>
                <vs-avatar size="60px" v-if="course.teacher && course.teacher.photo" :src="course.teacher.photo"></vs-avatar>
                <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"></vs-avatar>
              </div>
              <div style="overflow:hidden">
                <h6 style="    white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" v-if="course.teacher"> {{course.teacher.username}} </h6>
                <p style="text-overflow: ellipsis;line-height: 1.5em;height: 3em;overflow: hidden;font-size: 14px;" v-if="course.teacher"> {{course.teacher.description}} </p>
              </div>

              
            </div>
            <!-- <div style="text-align: left" >
                <vs-button v-if="!ifMyCourseExist(course)"  style="width: 100%;margin-top: 6px;padding: 6px;text-align: center;" color="success" > حجز الكورس </vs-button>
            </div> -->
          </div>
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
import NoData from '@/components/NoData';
export default {
  middleware: 'auth-student',
  components:{
      Loading,
      NoData
  },
  data(){
    return{
      page: 0,
      isLoading: true,
      totalPage:0,
      studCourses: [],
      currCourseToEnrollPopup: false,
      enrollmentCourse:{
          id:"",
          code: ""
      }
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
          this.$axios.get(`/subjects/${this.$route.params.id}/courses`).then(res => {
          console.log(res)
          this.studCourses = res.data.docs;
          console.log("stud courses ",this.studCourses);
          this.page = res.data.page;
          this.totalPage = res.data.totalPages;

          // res.data.docs.map(one => {
          //   this.myCourses.map(two => {
          //     if(one.id === two.id){
          //       one.isChecked = true;
          //     }else{
          //       one.isChecked = false;

          //     }
          //   })
          // })
          // console.log(this.myCourses)
          // console.log(this.myCourses.find(one => 5 === one.id))
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

.subject-course-page{
  padding-top:80px;
  .course{
    position: relative;
    margin-top: 15px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 19px;
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
    padding: 3px;
    color: #FFF;
    font-family: "CustomFontBold";
    // background: #0989c3;
    button{
      text-align: center;
      width: 100%;
    }
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