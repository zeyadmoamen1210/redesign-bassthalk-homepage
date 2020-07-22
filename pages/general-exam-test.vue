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
                <div class>
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
</style>
