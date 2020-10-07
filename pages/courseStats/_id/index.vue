<template>
  <div class="courseStats-page">
      <div class="container">
          <h5> إحصائيات الكورس </h5>
          <Loading v-if="isLoading" />
          <div v-else class="course-state">
                <div class="row">
                    <div class="col-md-3" v-if="stats.numberOfExams">
                  <div class="count-students" style="background-color:#009432">
                    <h5>عدد الإمتحانات</h5>
                    <i class="fas fa-question"></i>
                    <span>{{stats.numberOfExams}}</span>
                  </div>
                </div>
                <div v-if="stats.numberOfLectures" class="col-md-3">
                  <div class="count-teachers" >
                    <h5>عدد المحاضرات</h5>
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>{{stats.numberOfLectures}}</span>
                  </div>
                </div>
                <div v-if="stats.numberOfPosts" class="col-md-3">
                  <div style="background:#a71287" class="count-teachers" >
                    <h5>عدد المنشورات</h5>
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>{{stats.numberOfPosts}}</span>
                  </div>
                </div>
                

                
                </div>

          </div>
      </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
    components:{
        Loading
    },
    data(){
        return {
            stats: [],
            isLoading: true
        }
    },
    created(){
        this.$axios.get(`/courses/${this.$route.params.id}/students`).then(res => {
            console.log(res)
            this.stats = res.data;
        }).finally(() => this.isLoading = false)
    }
}
</script>

<style lang="scss">
.courseStats-page{
    h5{
        font-size: 29px;
    padding-right: 27px;
    font-family: "CustomFontBold";
    }
    margin-top: 70px;
     .course-state {
    padding: 25px;
    text-align: right;
    i {
      font-size: 62px;
      color: rgba(36, 36, 36, 0.41961);
      transition: all 0.3s linear;
      &:hover{
          transform: scale(1.2);
      }
    }
    span {
      display: inline-block;
      font-size: 43px;
      position: absolute;
      bottom: 35px;
      left: 40px;
      color: rgba(36, 36, 36, 0.41961);
    }
    h5 {
      margin-bottom: 30px;
      color: #f5f5f5;
      border-radius: 5px;
      font-size: 21px;
    }
    .count-admins {
      background: #6F1E51;
      padding: 23px;
      border: 1px solid #6F1E51;
      border-radius: 4px;
    }
    .count-reports {
      background-color: #ED4C67;
      padding: 23px;
    
      border-radius: 4px;
    }
    .count-students {
      background-color: #A3CB38;
      padding: 23px;
      border: 1px solid #A3CB38;
      border-radius: 4px;
    }
    .count-teachers {
      background-color: #1289A7;
      padding: 23px;
      border: 1px solid 28a745;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }
}
</style>