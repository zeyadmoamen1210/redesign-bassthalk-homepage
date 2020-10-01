<template>
  <div class="live-teaching-page">
    
    <div class="container" >
      <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && studCourses.length == 0" />

         <div>
          <vs-tabs :color="colorx">
            <vs-tab label="قيد الإنتظار"  @click="colorx = '#0989c3'">
                <div class="row">
                  <div :style="{cursor: course.status == 'accepted' ? 'pointer':'auto'}" v-if="course.status == 'pending'" class="col-md-4" v-for="course in studCourses" :key="course.id">
                <div class="course" @click="startInCourse(course)">
                  <div :class="{status: true, accepted: course.status == 'accepted', refused: course.status == 'refused', pending: course.status == 'pending'}"> {{course.status | statusArabic}} </div>
                  <h5> {{course.course.nameAr}} </h5>
                  <span> {{course.course.descriptionAr}} </span>

                  <div class="teacher">
                    <div>
                      <vs-avatar size="60px" v-if="course.course.teacher.photo" :src="course.course.teacher.photo"></vs-avatar>
                      <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"></vs-avatar>
                    </div>
                    <div>
                      <h6> {{course.course.teacher.username}} </h6>
                      <p> {{course.course.teacher.description}} </p>
                    </div>
                    
                  </div>
                </div>
              </div>
                </div>
            </vs-tab>
            <vs-tab label="تم الموافقة"  @click="colorx = '#27ae60'">
             <div class="row">
                 <div class="col-md-4" v-if="course.status == 'accepted'" v-for="course in studCourses" :key="course.id">
                <div class="course" @click="startInCourse(course)">
                  <div :class="{status: true, accepted: course.status == 'accepted', refused: course.status == 'refused', pending: course.status == 'pending'}"> {{course.status | statusArabic}} </div>
                  <h5> {{course.course.nameAr}} </h5>
                  <span> {{course.course.descriptionAr}} </span>

                  <div class="teacher">
                    <div>
                      <vs-avatar size="60px" v-if="course.course.teacher.photo" :src="course.course.teacher.photo"></vs-avatar>
                      <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"></vs-avatar>
                    </div>
                    <div>
                      <h6> {{course.course.teacher.username}} </h6>
                      <p> {{course.course.teacher.description}} </p>
                    </div>
                    
                  </div>
                </div>
              </div>
             </div>

            </vs-tab>
            <vs-tab label="تم الرفض"  @click="colorx = '#c0392b'">
              <div class="row">
                 <div class="col-md-4" v-if="course.status == 'refused'" v-for="course in studCourses" :key="course.id">
                  <div class="course" @click="startInCourse(course)">
                    <div :class="{status: true, accepted: course.status == 'accepted', refused: course.status == 'refused', pending: course.status == 'pending'}"> {{course.status | statusArabic}} </div>
                    <h5> {{course.course.nameAr}} </h5>
                    <span> {{course.course.descriptionAr}} </span>

                    <div class="teacher">
                      <div>
                        <vs-avatar size="60px" v-if="course.course.teacher.photo" :src="course.course.teacher.photo"></vs-avatar>
                        <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"></vs-avatar>
                      </div>
                      <div>
                        <h6> {{course.course.teacher.username}} </h6>
                        <p> {{course.course.teacher.description}} </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </vs-tab>
          </vs-tabs>
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
        this.$router.push(`course/${course.course.id}${course.course.lecture ? '?nextLive=' +  course.course.lecture : ''}`)
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
    .status{
      position: absolute;
      top: 15px;
      left: 0;
      padding: 3px;
      color: #FFF;
      font-family: "CustomFontBold";
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
    background: #f7f7f7;
    border-top: 1px solid #EEE;
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