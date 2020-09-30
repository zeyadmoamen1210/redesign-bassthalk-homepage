<template>
  <div>
    <div class="container">
        <Loading v-if="isLoading" />
      <div v-else class="tests-level folder-choose">


                      <div class="course-content">
                      <h5 style="font-weight:100"><span style="font-weight:bold">المحاضرة القادمة : </span> {{nextLife.title}} </h5>
                      <h5 style="font-weight:100"> <span style="font-weight:bold">تاريخ الإنشاء : </span> {{ new Date(nextLife.createdAt).toLocaleDateString() }} </h5>

                      <div class="sessions" v-if="nextLife.sessions && nextLife.sessions.length > 0">
                          <h5 style="margin-top:25px"> السيشن : </h5>
                          <div class="row">
                              <div class="col-md-3" v-for="session in nextLife.sessions" :key="session.id">
                                  <div class="course-content"> 
                                    <h6>أقصي عدد <span> {{session.limit}} </span></h6>
                                    <h6>بتاريخ <span> {{new Date(session.time).toLocaleDateString()}} </span></h6>
                                  
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
