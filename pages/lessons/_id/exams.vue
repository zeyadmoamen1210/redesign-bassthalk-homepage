<template>
  <div>
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3>
            <!-- <img src="../assets/imgs/noun_exam_-1.png" alt /> -->
            إمتحانات الدرس
          </h3>
        </div>
        <Loading v-if="isLoading" />
        <div class="levels" v-else-if="!isLoading&&selectedExam==null">
          <div class="row" v-if="exams.length>0">
            <!-- {{exams[0].id}} -->
            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[0].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(exams[2])">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-1.png" alt />
                <h6>المستوي السهل</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[1].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(exams[1])">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-2.png" alt />
                <h6>المستوي المتوسط</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[2].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(exams[0])">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-3.png" alt />
                <h6>المستوي الصعب</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>
          </div>
        </div>

        <div class="container" v-if="selectedExam">
          <div class="general-exam-test">
            <div class="title">
              <div class="exam-level">
                <img src="../../../assets/imgs/easy-level-1.png" alt />
                <h6>المستوي السهل</h6>
              </div>
              <div class="sub-name">
                <h4>الاختبار</h4>
                <img src="../../../assets/imgs/noun_testing_3325786.png" alt />
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
                <img src="../../../assets/imgs/laboratory.png" alt />
                <h4 style="display: inline-block;">الكمياء</h4>
                <span>1</span>
                <h6>الوحدة الأولي - الدرس الأول</h6>
              </div>
            </div>
            <Loading v-if="isLoading" />

            <div class="general-exam-content" v-else-if="questions">
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

                    <!-- {{selectedExam.exam.id}} -->
                    <truefalse
                      :answer="item.answer"
                      v-if="item.question.type == 'truefalse'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                    />
                    <choose
                      :answer="item.answer"
                      v-if="item.question.type == 'choose'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                    />
                    <complete
                      :answer="item.answer"
                      v-if="item.question.type == 'complete'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                    />
                    <paragraph
                      :answer="item.answer"
                      :answerImage="item.answerImage"
                      v-if="item.question.type == 'paragraph'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                    />
                    <group
                      v-if="item.question.type == 'group'"
                      :childrenQuestions="item.childrenQuestions"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
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
    </div>
  </div>
</template>

<script>
import truefalse from '../../../components/questions-type/truefalse'
import group from '../../../components/questions-type/group'
import choose from '../../../components/questions-type/choose'
import complete from '../../../components/questions-type/complete'
import paragraph from '../../../components/questions-type/paragraph'
import Loading from '../../../components/Loading'

export default {
  middleware: 'auth-student',

  components: {
    truefalse,
    group,
    choose,
    complete,
    Loading,
    paragraph,
  },
  data() {
    return {
      selectedExam: null,

      isLoading: true,
      exams: [],
      questions: null,

      examQuestions: [],

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
    this.$snotify.success(
      ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
    )
    if (this.$route.params.id) {
      this.getLessonExams()
    }
  },
  watch: {},
  methods: {
    setExam(exam) {
      if (exam.isSolving == true) {
        this.selectedExam = exam
        this.startExam()
      } else {
        alert('ddd')
        this.$snotify.warning(
          ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
        )
      }
    },
    getLessonExams() {
      this.$axios
        .get(`lessons/${this.$route.params.id}/exams`)
        .then((res) => {
          this.exams = res.data
          this.$snotify.success(
            ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
          )
        })

        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    startExam() {
      // exams/70/start
      this.$axios
        .post(`exams/${this.selectedExam.exam.id}/start`)
        .then((res) => {
          this.getExamQuestions()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getExamQuestions() {
      this.isLoading = true
      this.$axios
        .get(`exams/${this.selectedExam.exam.id}`)
        .then((res) => {
          this.questions = res.data.questions
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    setExamTODone() {
      // alert('ddd')
      this.isLoading = true
      this.$axios
        .post(`exams/${this.selectedExam.exam.id}/done`)
        .then((res) => {
          this.$router.push({ path: '/subjects' })
          this.$snotify.success(
            ` حسناً تم تسليم الإمتحان بنجاح من فضلك إنتظر تصحيح الإمتحان`
          )
        })
        .catch((err) => {
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
  },

  // lessons/16/exams
}
</script>
        
<style lang="scss">
@import '../../../assets/sass/general-exam-level.scss';
@import '../../../assets/sass/general-exam-test.scss';
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
      background-image: url('../../../assets/imgs/check.png');
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
</style>