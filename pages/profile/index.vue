<template>
  <div class="profile">
    <div class="container">
      <div>
        <div class="row">
          <div class="col-md-5" style="margin:auto">
            <div class="personal-info">
              <div style="    width: 90px;margin: auto;margin-bottom: 7px;">
                <img
                  style="width:100%;height:100%;border-radius: 50%;border: 3px solid #058ac6;"
                  :src="$auth.user.photo"
                  alt
                />
              </div>
              <div>
                <h6>الاسم :</h6>
                <h6>{{$auth.user.username}}</h6>
              </div>
              <div>
                <h6>الرقم:</h6>
                <h6>{{$auth.user.phone}}</h6>
              </div>
              <!-- <div>
                  <h6> الصف: </h6>
                  <h6> {{$auth.user.level}} </h6>
              </div>-->
              <div>
                <h6>البريد الألكتروني:</h6>
                <h6>{{$auth.user.email}}</h6>
              </div>
              <div>
                <h6>الدولة :</h6>
                <h6>{{$auth.user.country}}</h6>
              </div>
              <div>
                <h6>النوع :</h6>
                <h6>{{$auth.user.gender}}</h6>
              </div>
              <div>
                <h6>إجمالي النقاط :</h6>
                 <div class="question-bank-cont" style="display:inline-block;margin-right:10px">
                          <span style="">
                            <span style=""> {{totalPoints}} </span>
                            <img style="margin-top: -12px;" src="../../assets/imgs/point.png" alt />
                          </span>
                        </div>
              </div>
              <div>
                <nuxt-link to="profile/edit">
                  <button>تغير المعلومات الشخصية</button>
                </nuxt-link>
              </div>
            </div>
          </div>
          </div>

          <div class="points-stats" style="margin-top: 45px;">
            <div class="row">
              <div class="col-md-4" style="margin-bottom:15px">
                 <Loading v-if="isLoading"/>

                <div v-else style="padding: 10px;background: #fff;">
                  <h6 style="padding: 15px;background: #058ac6;color: rgb(255 255 255);">إجمالي النقاط الحاصل عليها من بنك المعلومات</h6>
                  <div class="question-bank-cont">
                     <span style="display:block;text-align:center;margin-bottom: 15px;margin-top: 10px;overflow:hidden">
                      <span style=""> {{bankTotalPoints}} </span>
                      <img style="margin-top: -12px;" src="../../assets/imgs/point.png" alt />
                    </span>
                  </div>
                    <b-alert v-if="bankStats.length == 0" show variant="primary">لا توجد نقاط</b-alert>

                 <div v-else>
                    <div class="row">
                    <div class="col-md-12" v-for="point in bankStats" :key="point.id">
                     <div style="overflow:hidden;">
                        <h6> {{point.bank.head}}  </h6>
                       <div class="question-bank-cont">
                          <span style="overflow:hidden">
                            <span style="float:right"> {{point.points}} </span>
                            <img style="margin-top: -12px;float:right" src="../../assets/imgs/point.png" alt />
                          </span>
                        </div>
                     </div>
                    </div>
                  </div>

                <div>
                   <b-pagination
                      v-model=bankPage
                      :total-rows="bankTotalPages"
                      per-page="1"
                      v-if="bankTotalPages > 1"
                    ></b-pagination>

    
                </div>
                 </div>

                </div>
                
                   
              </div>




               <div class="col-md-4" style="margin-bottom:15px">
                 <Loading v-if="isLoading"/>
                <div v-else style="padding: 10px;background: #fff;">
                  <h6 style="padding: 15px;background: #058ac6;color: #FFF;">إجمالي النقاط الحاصل عليها من الدروس</h6>
                  <div class="question-bank-cont">
                     <span style="display:block;text-align:center;margin-bottom: 15px;margin-top: 10px; overflow:hidden">
                      <span> {{lessonTotalPoints}} </span>
                      <img style="margin-top: -12px;" src="../../assets/imgs/point.png" alt />
                    </span>
                  </div>
                                      <b-alert v-if="lessonStats.length == 0" show variant="primary">لا توجد نقاط </b-alert>

                  <div v-else>
                    <div class="row">
                    <div class="col-md-12" v-for="point in lessonStats" :key="point.id">
                     <div style="overflow:hidden;">
                        <h6> {{point.lesson.nameAr}}  </h6>
                       <div class="question-bank-cont">
                          <span style="overflow:hidden">
                            <span style="float: right;"> {{point.points}} </span>
                            <img style="margin-top: -12px;float:right"  src="../../assets/imgs/point.png" alt />
                          </span>
                        </div>
                     </div>
                    </div>
                  </div>

                <div>
                   <b-pagination
                      v-model=lessonPage
                      :total-rows=lessonTotalPages
                      per-page="1"
                      v-if="lessonTotalPages > 1"
                    ></b-pagination>
                </div>
                  </div>

                </div>
                
                   
              </div>








               <div class="col-md-4" style="margin-bottom:15px">
                 <Loading v-if="isLoading"/>

                <div v-else style="padding: 10px;background: #fff;">
                  <h6 style="padding: 15px;background: #058ac6;color: #FFF;">إجمالي النقاط الحاصل عليها من الإمتحانات</h6>
                  <div class="question-bank-cont">
                     <span style="display:block;text-align:center;margin-bottom: 15px;margin-top: 10px;overflow:hidden">
                      <span style=""> {{examTotalPoints}} </span>
                      <img style="margin-top:-12px" src="../../assets/imgs/point.png" alt />
                    </span>
                  </div>

                                      <b-alert v-if="examStats.length == 0" show variant="primary">لا توجد نقاط </b-alert>

                  <div v-else>
                    <div class="row">
                    <div class="col-md-12" v-for="point in examStats"  :key="point.id">
                     <div style="overflow:hidden;">
                        <h6> {{point.exam.title}}  </h6>
                       <div class="question-bank-cont">
                          <span style="overflow:hidden">
                            <span style="float:right"> {{point.points}} </span>
                            <img style="float:right;margin-top:-12px" src="../../assets/imgs/point.png" alt />
                          </span>
                        </div>
                     </div>
                    </div>
                  </div>

                <div>
                   <b-pagination
                      v-model="examPage"
                      :total-rows="examTotalPages"
                      per-page="1"
                      v-if="examTotalPages > 1"
                    ></b-pagination>
                </div>
                  </div>

                </div>
                
                   
              </div>
            </div>
          </div>

          <!-- <div class="col-md-7">
            <div class="point-datails">
              <div class="title">
                <h5>
                  <img src="../../assets/imgs/business-1.png" alt />
                  سجل النقاط
                </h5>
              </div>
            </div>
            <Loading v-if="isLoading" />
            <div v-else class="point-cont" style="margin-top: 50px;">
              <div class="row">
                <div class="col-md-12" v-for="(point) in points" :key="point.id">
                  <div class="question-point-cont">
                    <span>
                      <span>{{point.points}}</span>
                      <img src="../../assets/imgs/point.png" alt />
                    </span>
                    <h6 v-if="point.bank">{{point.bank.head}}</h6>
                    <h6 v-else>{{point.exam.title}}</h6>
                  </div>
                </div>
                <div>
                  <b-pagination
                    v-if="totalPages>1"
                    v-model="currentPage"
                    :total-rows="totalPages"
                    :per-page="perPage"
                    aria-controls="my-table"
                  ></b-pagination>
                </div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../components/Loading'
export default {
  created() {
    // this.$axios
    //   .get(`mypoints`)
    //   .then((res) => {
    //     console.log('points ', res)
    //     this.points = res.data.docs
    //   })
    //   .finally(() => (this.isLoading = false))

    this.$axios.get(`mystatistics?type=exam`).then(res => {
      console.log("exam => " , res)
      this.examStats = res.data.docs
      this.examStatsExams=res.data.docs.exam
      this.examPage = res.data.page
      // this.examTotalPages = res.data.totalPages
      this.examTotalPoints = res.data.total

    }).finally(() => this.isLoading = false)

    this.$axios.get(`mystatistics?type=lesson`).then(res => {
      this.isLoading = true
      console.log("lesson => " , res)
      this.lessonStats = res.data.docs
      this.lessonStatsLesson=res.data.docs.lesson
      this.TotalLessonspoints = res.data.total


      this.lessonPage = res.data.page
      this.lessonTotalPoints = res.data.total


    }).finally(() => this.isLoading = false)

    this.$axios.get(`mystatistics?type=bank`).then(res => {
      console.log("bank => " , res)
      this.isLoading = true

      this.bankStats = res.data.docs
      this.bankPage = res.data.page
      this.bankTotalPages = res.data.totalPages

      this.bankTotalPoints = res.data.total



      

    }).finally(() => this.isLoading = false)
  },
  components: {
    Loading,
  },
  data() {
    return {
      points: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 1,
      isLoading: true,
      lessonStats: [],
      examStats: [],
      bankStats: [],
      bankStatsBank:{},
      lessonStatsLesson:{},
      examStatsExam:{},
      lessonTotalPages: 0,
      examTotalPages: 0,
      bankTotalPages: 0,

      examPage:0,
      bankPage:0,
      lessonPage:0,

      lessonTotalPoints:0,
      bankTotalPoints:0,
      examTotalPoints:0,
    }
  },
  computed:{
    totalPoints(){
      return this.lessonTotalPoints + this.bankTotalPoints + this.examTotalPoints
    }
  },
  watch: {
    currentPage(val) {
      this.$axios.get(`mypoints?page=${val}`).then((res) => {
        console.log('points ', res)
        this.points = res.data.docs
        this.totalPages = res.data.totalPages
      })
    },

    examPage(val){
      this.$axios.get(`mystatistics?type=exam&page=${val}`).then(res => {
      console.log("exam page => " , res)
      this.examStats = res.data.docs
      this.examStatsExams=res.data.docs.exam
      this.examPage = res.data.page
      this.examTotalPages = res.data.totalPages
      this.examTotalPoints = res.data.total

    }).finally(() => this.isLoading = false)
    },
    bankPage(val){
      this.$axios.get(`mystatistics?type=bank&page=${val}`).then(res => {
      console.log("bank => " , res)
      this.isLoading = true

      this.bankStats = res.data.docs
      this.bankPage = res.data.page
      this.bankTotalPages = res.data.totalPages

      this.bankTotalPoints = res.data.total



      

    }).finally(() => this.isLoading = false)
    },
    lessonPage(val){
      this.$axios.get(`mystatistics?type=lesson`).then(res => {
      this.isLoading = true
      console.log("lesson => " , res)
      this.lessonStats = res.data.docs
      this.lessonStatsLesson=res.data.docs.lesson
      this.TotalLessonspoints = res.data.total


      this.lessonPage = res.data.page
      this.lessonTotalPoints = res.data.total


    }).finally(() => this.isLoading = false)
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/sass/points.scss';

.profile {
  .personal-info {
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 50px;
    div {
      &:not(:first-of-type) {
        padding: 8px;
        background: #f3f3f3;
        margin-bottom: 10px;
      }
      h6 {
        display: inline-block;
        &:last-of-type {
          color: #058ac6;
        }
      }
      button {
        width: 100%;
        text-align: center;
        padding: 6px;
        background: #058ac6;
        color: #fff;
        border: none;
        a {
          color: #fff;
        }
      }
    }
  }
  .showAll {
    padding: 4px 12px;
    margin-right: 14px;
    border: none;
    background: #058ac6;
    color: #fff;
    font-family: 'CustomFontBold';
  }

  .points-stats{
    .col-md-4{
      >div{
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
        height: 413px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:10px 0; 
        margin-bottom: 27px;
    &::-webkit-scrollbar {
  width: 10px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #ddd; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #ddd; 
}
    h6{
          font-size: 15px;
    }
      }
    }
    .col-md-12{
      >div{
        padding: 15px;
        margin-bottom: 10px;
        background: #f3f3f3;
        h6{
              float: right;
    width: 76%;
    padding-top: 3px;
    margin-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
      }
      div{
        float: right;
        width: 20%;
      }
      }
    }
  }

  .alert-primary {
    color: #058ac6;
    background-color: #cce5ff;
    border-color: #b8daff;
    font-family: "CustomFontBold";
    text-align: center;
    font-size: 18px;
}
.question-bank-cont{
  span{
    span{
      font-weight: bold;
        font-size: 15px;
    margin-left: 5px;
    }
  }
}
.pagination {
    padding-right: 0;
    
    margin:auto
}
}
</style>