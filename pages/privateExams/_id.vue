<template>
  <div>
    <div class="container">
      <Loading v-if="isLoading" />
      <div v-else class="tests-level">
        <div class="title">
          <h3 style="margin-bottom:10px">
            <!-- <img src="../assets/imgs/noun_exam_-1.png" alt /> -->
            امتحانات الدرس
          </h3>
        </div>
        <Loading v-if="isLoading" />
        
          <div class="resultExam" v-if="isCorrected == true">
            <img src="@/assets/imgs/white-shape.png" alt="">
            
            <div style="display:flex;flex-wrap:wrap">
              <div style="flex-grow:1">
                              <h5 style="color: #FFF;font-size: 28px;padding: 10px;margin-bottom:0"> تم تصحيح الامتحان </h5>

              </div>
              <div style="flex-grow:1">
                <h5 style="color:#FFF;padding: 0 15px 0;"> الدرجة :
              <sub>{{allPoints}} </sub>&frasl;<sup>{{allMarks}}</sup>
               </h5>
              <h5 style="color:#FFF;padding: 0 15px 0;"> النسبة المئوية / {{ ((allMarks / allPoints) * 100).toFixed(1)  }} % </h5>
              </div>
            </div>
            
          </div>


          <div style="    width: 300px;margin: auto;" v-if="teacherWillCorrectIt == true">
            <img style="width:100%;" src="@/assets/imgs/teacher-correcting-exam.svg" alt="">
            <h4 style="    text-align: center;margin-top: 12px;">امتحانك قيد التصحيح من المعلم</h4>
          </div>
          <div v-else-if="!isCorrected && timeFinished">تم انتهاء الوقت</div>

           <div class="live-time live-exam" v-if="index == 1 && selectedExam && selectedExam.remainingTime && selectedExam.remainingTime > 0"  v-for="(x,index) in 5" :key="index">
  <no-ssr>
                                  <vac @finish="endExam" :end-time="new Date().getTime() + (selectedExam.remainingTime*1000)">
                                    <template
                                      v-slot:process="{ timeObj }">
                                      <!-- <span></span> -->
                                      <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>ثانية</h6>
                      <span>{{ ` ${timeObj.s}` }}</span>
                    </div>
                                      
                                      <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>دقيقة</h6>
                      <span>{{ ` ${timeObj.m}` }}</span>

                    </div>
                                      
                                       <div class="time-div">
                      <img src="@/assets/imgs/live-timer.png" alt="">
                      <h6>ساعة</h6>
                      <span>{{ ` ${timeObj.h}` }}</span>

                    </div>
                

                                      
                                    </template>
                                    <span slot="finish" style="font-family:'CustomFontRegular'"> تم إنتهاء الوقت  </span>
                                  </vac>
                                </no-ssr>


                                    

                </div>

          
        

        <div class="container" v-if="selectedExam">
          <b-modal id="not-path" hide-footer hide-header no-close-on-backdrop>
            <div class="col-md-12">
              <div
                class="model-rating"
                style="text-align:center;font-family:'CustomFontBold'text-align: center;font-family: CustomFontBold;margin-top: 14px;"
              >
                <button style="background:none;border:none;outline:none">
                  <img style="width:100%;" src="@/assets/imgs/sad.png" alt />
                </button>
                <h5
                  class="mt-2"
                  style="color:#0989c3;text-align: center;margin-bottom: 18px;"
                >لم تتخطي نسبة 75 % قم بإعادة الإختبار مرة آخري للإنتقال إلي المستوي التالي</h5>
                <!-- <button style="background:none;border:none;outline:none">
                  <img
                    
                    style="width:100%;"
                    src="../../../assets/imgs/smile.png"
                    alt
                  />
                </button>-->

                <button @click="startExam(selectedExam)" class="basth-btn-primary">إعادة الإختبار</button>
              </div>
            </div>
          </b-modal>
          <b-modal id="path" hide-footer hide-header no-close-on-backdrop>
            <div class="col-md-12">
              <div
                class="model-rating"
                style="text-align:center;font-family:'CustomFontBold'text-align: center;font-family: CustomFontBold;margin-top: 14px;"
              >
                <button style="background:none;border:none;outline:none">
                  <img style="width:100%;" src="@/assets/imgs/smile.png" alt />
                </button>
                <h5
                  class="mt-2"
                  style="color:#0989c3;text-align: center;margin-bottom: 18px;"
                >لقد تخطيت المستوي بنسبة {{selectedExam}}</h5>

                <button @click="restExam()" class="basth-btn-primary">الانتقال إلي المستوي التالي</button>
                <button
                  @click="getExamQuestions"
                  class="light-btn"
                  style="width: 100J%;"
                >عرض إجاباتي + الاجابة النموذجية</button>
              </div>
            </div>
          </b-modal>
          <b-modal id="confirm" hide-footer hide-header no-close-on-backdrop>
            <div class="col-md-12">
              <div
                class="model-rating"
                style="text-align:center;font-family:'CustomFontBold'text-align: center;font-family: CustomFontBold;margin-top: 14px;"
              >
                <h5
                  class="mt-2"
                  style="color:#0989c3;text-align: center;margin-bottom: 18px;"
                >هل تريد تسليم الامتحان الآن ؟</h5>

                <button @click="setExamTODone()" class="basth-btn-primary">تسليم</button>
                <button
                  @click="$bvModal.hide('confirm')"
                  class="danger-btn mt-2"
                  style="width: 100%;"
                >إستكمال الحل</button>
              </div>
            </div>
          </b-modal>
          <div class="general-exam-test">
            <div class="title">
              

              <!-- <div class="exam-level" v-if="lessonDetails">
                <h4 style="display: inline-block;">{{lessonDetails.unit.subject.nameAr}}</h4>
                <h6>{{lessonDetails.unit.nameAr }} - {{lessonDetails.nameAr}}</h6>
              </div>-->
             
            </div>

            
            <Loading v-if="isLoading" />

            <div class="general-exam-content" v-else-if="questions">
             
                  <div v-for="(item, index) in questions" :key="index">
                    <!-- <div class="exam-cont-item">
                      <div>
                        <h6>{{ index + 1 }}</h6>
                      </div>

                      <div>
                        <h6>.</h6>
                      </div>
                    </div> -->

                    <div class="exam-question-bar">
                        <!-- {{selectedExam.exam.id}} -->
                        <h6> سؤال </h6>
                        
                    <truefalse
                      :answer="item.answer"
                      v-if="item.question.type == 'truefalse'"
                      :question="item"
                      :exam_id="$route.params.id"
                      :isSolving='(selectedExam.totalMarks > -1) ? false : true'
                      :privateExam="true"

                    />
                      <!-- :myindex="getIndexNormalQuestions()" -->

                    <choose
                      :answer="item.answer"
                      v-else-if="item.question.type == 'choose'"
                      :question="item"
                      :exam_id="$route.params.id"
                      :isSolving='(selectedExam.totalMarks > -1) ? false : true'
                      :privateExam="true"
                    />
                      <!-- :myindex="getIndexNormalQuestions()" -->
                   
                    <group
                      v-else-if="item.question.type == 'group'"
                      :childrenQuestions="item.childrenQuestions"
                      :question="item"
                      :exam_id="$route.params.id"
                      :isSolving='(selectedExam.totalMarks > -1) ? false : true'
                      :privateExam="true"
                    />
                      <!-- :myindex="getIndexGroupQuestions(item.childrenQuestions.length)" -->
                  
                </div>

                <!-- <div v-if="questions.length>0"> -->
                
                <!-- </div> -->
              </div>
              <input
                v-if="!isCorrected"
                  class="mt-5 basth-btn-primary"
                  type="button"
                  @click="$bvModal.show('confirm')"
                  value="تسليم"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import truefalse from '@/components/modelAnswerPrivate/TrueTalseModel'
import group from '@/components/modelAnswerPrivate/GroupModel'
import choose from '@/components/modelAnswerPrivate/ChooseModel'
import Loading from '@/components/Loading'

export default {
  middleware: 'auth-student',

  components: {
    truefalse,
    group,
    choose,
    Loading,
  },
  data() {
    return {
      endExamData: {},
      timeFinished:false,
      remainingTime: 0,
      selectedExam: null,
      selectedIndex: null,
      inCorrectCase: false,
      teacherWillCorrectIt: false,

      isLoading: true,
      exams: [],
      questions: null,
      allMarks:0,
      allPoints:0,
      lessonDetails: null,
      teacherWillCorrect:false,
      examQuestions: [],
      isCorrected:false,
      theIndex:0,

      selectedExamQuestions: [],
      allQuestions: [],
      tabIndex: 0,
      innerTabIndex: 1,
      totalpages: 0,

      currentQuestionPage: 1,
      filterType: { name: 'صح و خطأ', value: 'truefalse' },
      filterType2: { name: 'أختياري', value: 'choose' },
    }
  },
  created() {
    if (this.$route.params.id) {
      this.startExam()
    }
  },
  watch: {},
  methods: {
    getIndexNormalQuestions(){
      this.theIndex = this.theIndex + 1;
      return this.theIndex;
    },
    getIndexGroupQuestions(nums){
      this.theIndex = this.theIndex + nums;
      return this.theIndex;
    },
    restExam() {
      this.$bvModal.hide('path')

      this.selectedExam = null
    },
    
      // if (this.exams[this.selectedIndex].mark == null) {
      //   this.startExam(this.exams[this.selectedIndex])
      // } else if (this.exams[this.selectedIndex].mark < 75) {
      //   this.startExam(this.exams[this.selectedIndex])
      // } else {
      //   this.selectedExam = this.exams[this.selectedIndex]

      //   this.getExamQuestions()
      // }

      // } else {
      //   this.$snotify.warning(
      //     ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
      //   )
      // }
    

    getExam(){
      this.isLoading = true
      this.$axios.get(`private-exams/${this.$route.params.id}`).then(res => {
        this.exam = res.data
        console.log(this.exam)
        this.selectedExam = res.data
      }).finally(() => this.isLoading = false)
    },
    endExam(str = null){
      
      
         
        this.acceptEndExam();

 
   
    },
    directResult(){
      let z = require('@/assets/sounds/success.mp3')
      let y = new Audio(z)
      y.play()
      this.$vs.dialog({title:"تم إنتهاء الوقت",
            text:"تم تسليم الإمتحان",
            type:"confirm",
            color:"danger",
            background:"rgba(0,0,0,.7)",
            acceptText:"عرض الإجابات",cancelText:"الرجوع للإمتحانات",
            
            cancel: this.cancelEndExam
      })
    },
    willCorrectByTeacher(){
      let z = require('@/assets/sounds/success.mp3')
      let y = new Audio(z)
      y.play()
      this.teacherWillCorrectIt = true;
      this.$vs.dialog({title:"تم إنتهاء الوقت",
            text:"تم تسليم الإمتحان و سيتم إرسال النتيجة فور تصحيحها من قبل المعلم",
            color:"danger",
            acceptText:"الرجوع إالي قائمة الإمتحانات",
            accept: this.cancelEndExam,
      })


      
      
    },
    cancelEndExam(){
      this.$router.go(-1)
    },
    acceptEndExam(){
     
      // this.isLoading = true
      this.$axios
        .post(`private-exams/${this.$route.params.id}/done`)
        .then((res) => {

          // this.$snotify.warning("حسنا لقد انتهي الوقت .. تم تسليم الامتحان")

          

          console.log(res.data)
          this.selectedExam=  null,
      this.selectedIndex= null,
      this.inCorrectCase= false,
      // this.$router.go(-1)
      this.isLoading=true,
      this.exams= [],
      this.questions= null,
      this.allMarks=0,
      this.allPoints=0,
      this.lessonDetails= null,

      this.examQuestions= [],
      this.isCorrected=false,

      this.selectedExamQuestions= [],
      this.allQuestions= [],
      this.tabIndex= 0,
      this.innerTabIndex= 1,
      this.totalpages= 0;
    
       if(res.data.mark > -1){
         this.directResult()
       }else{
         this.willCorrectByTeacher()
       }

        this.startExam()
      
        })
        .catch((err) => {
        })
        .finally(() => (this.isLoading = false))
    },
    startExam() {
      // exams/70/start
      this.isLoading = true
      this.$bvModal.hide('not-path')

      this.$axios
        .post(`private-exams/${this.$route.params.id}/start`).then((res) => {

          this.getExamQuestions()
        }).catch(error => {
          this.getExamQuestions()

        }).finally(() => this.isLoading = false)
        
        
    },
    getExamQuestions() {
      this.$bvModal.hide('path')

      this.isLoading = true
      this.$axios
        .get(`private-exams/${this.$route.params.id}`)
        .then((res) => {
          this.questions = res.data.questions
          this.exam = res.data
        this.selectedExam = res.data
        this.remainingTime = res.data.remainingTime

        this.allPoints = res.data.points
        if(res.data.totalMarks > -1){
          this.allMarks = res.data.totalMarks
          this.isCorrected = true
        }

        if(this.remainingTime < 0){
          this.timeFinished = true
          this.endExam("smaller than 0")
        }

      
        console.log(this.allPoints)
        console.log(this.allMarks)
        })
        .catch((error) => {
         if(error.response.status === 403){
            this.teacherWillCorrectIt = true
          }else{
            this.teacherWillCorrectIt = false
          }
        })
        .finally(() => (this.isLoading = false))
    },
    setExamTODone() {
      this.$bvModal.hide('confirm')
      this.isLoading = true;
       let z = require("@/assets/sounds/success.mp3")
      let mySuccessSound = new Audio(z);
          mySuccessSound.play()
      this.$axios
        .post(`private-exams/${this.exam.id}/done`)
        .then((res) => {
        

          

          this.$snotify.success("تم تسليم الإمتحان بنجاح انتظر حتي يتم تصحيحه")

          console.log(res.data)
          this.selectedExam=  null,
      this.selectedIndex= null,
      this.inCorrectCase= false,
      this.isLoading=true,
      this.exams= [],
      this.questions= null,
      this.allMarks=0,
      this.allPoints=0,
      this.lessonDetails= null,

      this.examQuestions= [],
      this.isCorrected=false,

      this.selectedExamQuestions= [],
      this.allQuestions= [],
      this.tabIndex= 0,
      this.innerTabIndex= 1,
      this.totalpages= 0,


        this.startExam()
          // this.selectedExam.mark = res.data.mark
          // if (res.data.mark >= 75) {
          //   this.$bvModal.show('path')
          // } else {
          //   this.$bvModal.show('not-path')
          // }
        })
        .catch((err) => {
        })
        .finally(() => (this.isLoading = false))
   
    },
  },

  // lessons/16/exams
}
</script>
        
<style lang="scss">
@import '../../assets/sass/general-exam-level.scss';
@import '../../assets/sass/general-exam-test.scss';

.live-time.live-exam{
         display: flex;
    margin-top: 0;
    position: fixed;
    top: 106px;
    z-index: 999;
    background: #fdfdfd;
    left: 0;
    padding: 13px 5px 0px;
    border: 1px solid #CCC;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
      >span{
        display: flex;
        margin: auto;
      }
      .time-div{
        position: relative;
        margin: 0 5px;
        
        span{
          position: absolute;
              top: 22%;
    left: 38%;
    color: #FFF;
    font-weight: bold;
        }
        h6{
          text-align: center;
        }
      }
}
.tests-level{
   .resultExam{
        position: relative;
    background: #058ac6;
    padding: 15px;
    height: 88px;
    
    img{
     position: absolute;
    width: 101px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    }
 

    
  }
}
.general-exam-content {
  .exam-cont-item {
    overflow: hidden;
    margin-top: 30px;
    > div {
      float: right;

      &:first-of-type {
        width: 9%;

        h6 {
          color: #ddd;
          background-color: #058ac6;
          padding: 15px;
          text-align: center;
          border-radius: 0 6px 6px 0;
        }
      }
      &:last-of-type {
        width: 91%;

        h6 {
          color: #058ac6;
          background-color: #f2f2f2;
          padding: 15px;
          margin: 0;
          border-radius: 6px 0 0 6px;
        }
      }
    }
  }

  .exam-question-bar{
            padding-bottom: 11px;
       background: #fff;
       position: relative;
    border: 1px dashed #CCC;
    /* border-radius: 15px; */
    overflow: hidden;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    >h6{
          padding: 20px 10px;
    background: #008bc7;
    color: #fff;
    font-size: 20px;
    }
    h5{
      margin-bottom: 0;
    }
    div.quesMark{
          position: absolute;
    bottom: -36px;
    left: 0;
    background: #f2f2f2;
    padding: 10px 20px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #CCC;
    font-family: 'CustomFontBold';
    color: #00000080;
    }
  }
 
  .check-box-ques {
  
    button {
      padding: 4px 15px;
      border: 1px solid #ccc;
      background: #f2f2f2;
      color: #5a5a5a;
    }
    //  span {
    //   display: block;
    //   width: 100%;
    //   float: right;
    //   font-size: 18px;
    //   font-family: 'CustomFontMedium';
    //   padding-top: 3px;
    //   margin: 0 6px;
    // }
    > img {
      width: 100%;
      height: 207px;
      // margin-bottom: 34px;
      box-shadow: 0px 1px 10px -1px #ddd;
      border-radius: 17px;
    }
    >i{
      margin-right: 21px;
    }
    h6 {
      margin-bottom: 15px;
      color: 20px;
          
      // margin-top: 22px;
      color: #333 !important;
          display: inline-block;
    font-size: 22px;
    }
    >div{
          background: #FFF;
      // padding:15px;
          // box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    margin-bottom: 38px;
      >div{
            background: #fcfcfc;
    margin-bottom: 27px;
        padding: 0 29px;
   
      }
    }
    .ques-answer-btns {
      button {
        padding: 14px;
        width: 100%;
        text-align: center;
        background: #fff;
        border: 0;
        box-shadow: 0px 0px 10px 1px #ddd;
        border-radius: 10px;
        font-family: 'CustomFontRegular';
        font-weight: bold;
        color: #333;
        font-size: 16px;
      }
    }
    .file-choose {
      position: relative;
      width: 100%;
      height: 200px;
      margin-top: 13px;
      input[type='file'] {
        position: absolute;
        width: 100%;
        /* visibility: hidden; */
        opacity: 0;
        height: 100%;
        cursor: pointer;
        margin-top: 10px;
      }
      span {
        border: 1px dashed #444444;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        z-index: -1;
        margin: 10px 0;
        height: 100%;
        text-align: center;
        cursor: pointer;
        border-radius: 15px;
        line-height: 186px;
        color: #444444;
      }
    }
  }
}
.absthalk-radio {
  -webkit-appearance: none;
  width: 10px;
  display: block;
  height: 10px;
  /* background: #DDD; */
  padding: 15px 15px;
  border: 2px dotted #e3e3e3;
  outline: 0;
  position: relative;
  border-radius: 8px;
  float: right;
  &:checked {
    border: 2px dotted #058ac6;
    &::after {
      background-image: url('../../assets/imgs/check.png');
      position: absolute;
      content: '';
      width: 65%;
      height: 60%;
      top: 4px;
      left: 6px;
      background-size: cover;
    }
  }
}


.vuesax-app-is-ltr .con-vs-dialog .vs-dialog footer button {
    margin: 6px;
}
.con-vs-dialog .vs-dialog .vs-dialog-text {
    padding: 24px 10px;
    font-size: 18px;
    font-family: 'CUSTOMFONTREGULAR';
    -webkit-transition: all .23s ease .1s;
    transition: all .23s ease .1s;
}
</style>
