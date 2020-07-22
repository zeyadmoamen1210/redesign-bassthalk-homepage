<template>
  <div>
    <div class="container">
      <div class="general-exam-test">
        <div class="title">
          <div class="exam-level">
            <img src="../assets/imgs/easy-level-1.png" alt />
            <h6>المستوي السهل</h6>
          </div>
          <div class="sub-name">
            <h4>الاختبار</h4>
            <img src="../assets/imgs/noun_testing_3325786.png" alt />
          </div>
        </div>

        <div class="general-exam-head">
          <div class="head-three">
            <div class="c100 p25 small" style="margin-top: 0;">
              <span>25%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
          </div>
          <div class="unit lesson-uni head-two">
            <img src="../assets/imgs/laboratory.png" alt />
            <h4 style="display: inline-block;">الكمياء</h4>
            <span>1</span>
            <h6>الوحدة الأولي - الدرس الأول</h6>
          </div>
        </div>
        <Loading v-if="isLoading" />

        <div class="general-exam-content" v-else>
          <div class="row">
            <div class="col-md-12" style="min-height: 320px;">
              <div v-for="(item, index) in questions" :key="index">
                <div class="exam-cont-item">
                  <div>
                    <h6>{{ index + 1 }}</h6>
                  </div>

                  <div>
                    <h6>السؤال الأول</h6>
                  </div>
                </div>

                <truefalse
                  :answer="item.answer"
                  v-if="item.question.type == 'truefalse'"
                  :question="item.question"
                />
                <choose
                  :answer="item.answer"
                  v-if="item.question.type == 'choose'"
                  :question="item.question"
                />
                <complete
                  :answer="item.answer"
                  v-if="item.question.type == 'complete'"
                  :question="item.question"
                />
                <paragraph
                  :answer="item.answer"
                  :answerImage="item.answerImage"
                  v-if="item.question.type == 'paragraph'"
                  :question="item.question"
                />
                <group
                  v-if="item.question.type == 'group'"
                  :childrenQuestions="item.childrenQuestions"
                  :question="item.question"
                />
              </div>
            </div>

            <input
              v-if="questions.length>0"
              class="mt-5 basth-btn-primary"
              type="button"
              @click="setExamTODone"
              value="تصحيح"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import truefalse from '../components/questions-type/truefalse'
import group from '../components/questions-type/group'
import choose from '../components/questions-type/choose'
import complete from '../components/questions-type/complete'
import paragraph from '../components/questions-type/paragraph'
import Loading from '../components/Loading'

export default {
  components: {
    truefalse,
    group,
    choose,
    complete,
    Loading,
    paragraph
  },
  data() {
    return {
      isLoading: false,

      questions: []
    }
  },
  watch: {},
  created() {
    this.startExam()
  },
  methods: {
    startExam() {
      // exams/70/start
      this.$axios
        .post(`exams/71/start`)
        .then(res => {
          this.getExamQuestions()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getExamQuestions() {
      this.isLoading = true
      this.$axios
        .get(`exams/71`)
        .then(res => {
          this.questions = res.data.questions
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    setExamTODone() {
      // alert('ddd')
      this.isLoading = true
      this.$axios
        .post(`exams/70/done`)
        .then(res => {
          this.$router.push({ path: '/subjects' })
          this.$snotify.success(
            ` حسناً تم تسليم الإمتحان بنجاح من فضلك إنتظر تصحيح الإمتحان`
          )
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
      // this.$snotify.confirm(
      //   'من فضلك تأكد من الإجابة علي كل الأسئلة ',
      //   'هل تريد تسليم الإمتحان',
      //   {
      //     showProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     buttons: [
      //       {
      //         text: 'موافق',
      //         action: toast => {
      //           this.$snotify.remove(toast.id)

      //         }
      //       },
      //       {
      //         text: 'إلغاء',
      //         action: toast => {
      //           this.$snotify.remove(toast.id)
      //         }
      //       }
      //     ]
      //   }
      // )
    },

    playAudio: function() {
      document.getElementById('player').play()
    },
    pauseAudio: function() {
      document.getElementById('player').pause()
    },
    increaseVolume: function() {
      document.getElementById('player').volume += 0.1
    },
    decreaseVolume: function() {
      document.getElementById('player').volume -= 0.1
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/general-exam-test.scss';

.lesson-unit {
      margin: 0;
      box-shadow: none;
      padding: 4px 0;
    }
    .lesson-inner-grid {
      padding: 0 11px;
      h6 {
        padding: 8px 0px;
      }
    }
    h6.subject-name {
      padding: 7px 0px;
      font-size: 26px;
      color: #058ac6;
      img {
        display: block;
        width: 23%;
        float: right;
        margin-left: 10px;
        padding-top: 0;
      }
    }
  
  .lesson-btns {
    padding: 0 44px;
    button {
      width: 100%;
      text-align: center;
      background: #058ac6;
      border-radius: 9px;
      border: 0;
      padding: 13px;
      font-family: 'CustomFontBold';
      color: #fff;
      margin-bottom: 18px;
    }
    .explain-btn {
      background: #ddd;
      color: #333;
    }
  }



  .general-exam-content{
    .exam-cont-item{
      overflow: hidden;
      >div{
        float: right;

        &:first-of-type{
          width: 9%;

          h6{
            color:#DDD;
            background-color: #058ac6;
            padding: 15px;
            text-align: center;
            border-radius: 0 6px 6px 0;
          }
        }
        &:last-of-type{
          width: 91%;

          h6{
            color: #058ac6;
    background-color: #f2f2f2;
    padding: 15px;
    margin: 0;
    border-radius: 6px 0 0 6px;
          }
        }
      }
    }
    .check-box-ques{
      span{
           display: block;
    width: 34px;
    float: right;
    font-size: 18px;
    font-family: "CustomFontMedium";
    padding-top: 3px;
    margin: 0 6px;
      }
      >img{
        width: 100%;
    height: 207px;
    margin-bottom: 34px;
    box-shadow: 0px 1px 10px -1px #ddd;
    border-radius: 17px;
      }
      h6{
            margin-bottom: 15px;
    color: 20px;
    margin-top: 22px;
    color: #898989;
      }
      .ques-answer-btns{
        button{
              padding: 14px;
              width: 100%;
              text-align: center;
    background: #FFF;
    border: 0;
    box-shadow: 0px 0px 10px 1px #DDD;
    border-radius: 10px;
    font-family: "CustomFontRegular";
    font-weight: bold;
    color: #333;
    font-size: 16px;
        }
      }
      .file-choose{
        position: relative;
    width: 100%;
    height: 200px;
    margin-top: 13px;
    input[type="file"]{
      position: absolute;
    width: 100%;
    /* visibility: hidden; */
    opacity: 0;
    height: 100%;
    cursor: pointer;
    margin-top: 10px;
    }
    span{
            border: 1px dashed #444444;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: #FFF;
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
  
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    .lesson {
      padding-top: 60px;
    }
    .lesson h6.subject-name img {
      width: 12%;
      margin-bottom: 30px;
    }
    .lesson .lesson-unit {
      margin-bottom: 23px;
    }
    .leactures-comments .lect-live-comments .user-comment h6 {
      padding: 0 6px;
      font-size: 11px;
    }
  
    .video-bannar img {
      left: 67px;
    }
    .video-bannar span {
      left: 67px;
    }
  }
  
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    .lesson h6.subject-name img {
      width: 7%;
    }
    .lesson-inner-grid {
      margin: 76px 0 22px 0;
    }
    .lesson h6.subject-name {
      padding: 14px 0px;
    }
  }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    .lesson-btns {
      padding: 0;
    }
    .lesson h6.subject-name img {
      width: 30%;
    }
  }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }
</style>
