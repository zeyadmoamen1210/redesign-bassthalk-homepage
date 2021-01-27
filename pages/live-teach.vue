<template>
  <div class="live-teaching-page">
    
    <div class="container" >

      <div class="head-who" style="width: 242px;text-align: center;margin: 0;">
            <span></span>
            <span></span>
            <span></span>
            <h3>كورساتي</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
      <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && studCourses.length == 0" />

         <div v-else>
            
             <div class="row">
                 <div class="col-md-3" v-if="course.status == 'accepted' && course.course" v-for="course in studCourses" :key="course.id">
                 <div class="course">
            <div class="lec-card" style="text-align: center;height:170px">
                <img class="lec-card-img" v-if="course.course.image" style="width:100%;height:100%" :src="course.course.image" alt="">
                <img class="lec-card-img" v-else-if="!course.course.image && course.course.teacher && course.course.teacher.photo != 'https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg' && course.course.teacher.photo" style="width:100%;height:100%" :src="course.course.teacher.photo" alt="">

                <img v-else style="width:100%;height:100%" class="lec-card-img"  src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" alt="">
            </div>

             

            <div style="font-family:'CustomFontRegular';padding-top:10px;    margin-bottom: 10px;"> 
              <h5 style="font-family: CustomFontRegular;text-overflow: ellipsis;overflow: hidden;line-height: 1.5em;height: 4em;font-size: 16px;"> {{course.course.nameAr}} </h5>
           
            </div>


             <div  class="status">
                <div> <vs-button  color="primary" @click="$router.push(`/course/${course.course.id}/main${course.course.lecture ? '?nextLive=' +  course.course.lecture : ''}`)" > دخول </vs-button> </div>
               
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
  middleware: 'auth-student',
  components:{
    Loading,
    NoData,
  },
  data(){
    return{
      colorx: '#0989c3',
      page: 0,
      isLoading: true,
      totalPage:0,
      studCourses: []
    }
  },
  filters:{
    statusArabic(val){
      if(val == 'accepted') return 'مقبول';
      else if (val == 'refused') return 'مرفوض';
      else return 'قيد الإنتظار'
    }
  },
  methods:{
    startInCourse(course){
      if(course.status == 'accepted'){
        this.$router.push(`course/${course.course.id}/main${course.course.lecture ? '?nextLive=' +  course.course.lecture : ''}`)
        // this.$router.push(`course/${course.course.id}${course.course.lecture ? '?nextLive=' +  course.course.lecture : ''}`)
      }
    }
  },
  created(){
    this.$axios.get(`/student/courses`).then(res => {
      console.log(res)
      this.studCourses = res.data.docs
      this.page = res.data.page
      this.totalPage = res.data.totalPages
    }).finally(() => this.isLoading = false)
  }
}
</script>

<style lang="scss">

.live-teaching-page{
  padding-top:80px;


  
  .course{
    position:relative;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    padding: 19px;
    transition: all .5s ease;
    margin-bottom: 15px;
        &:hover{
          transform: translateY(-10px);
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

    .status{
      button{
        font-family: "CustomFontRegular";
        width:100%;
        text-align: center;
      }
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
    background: #f7f7f7;
    border-top: 1px solid #EEE;
    h6{
      margin-top: 15px;
      margin-bottom: 0;
    }
    }
  }


  .course{
    position: relative;
    margin-top: 15px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    min-height: 216px;
    transition: all .5s ease;
        &:hover{
          transform: translateY(-10px);
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