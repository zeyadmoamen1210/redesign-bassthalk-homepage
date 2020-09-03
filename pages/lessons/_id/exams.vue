<template>
  <div>
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3>
            <!-- <img src="../assets/imgs/noun_exam_-1.png" alt /> -->
            امتحانات الدرس
          </h3>
        </div>
        <Loading v-if="isLoading" />
        <div class="levels" v-else-if="!isLoading&&selectedExam==null">
          <div class="row" v-if="exams.length>0">
            <!-- {{exams[0].id}} -->
            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[0].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(0)">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-1.png" alt />
                <h6>المستوى السهل</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[1].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(1)">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-2.png" alt />
                <h6>المستوى المتوسط</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[2].id + '/questions'"> -->
              <div class="level-item box-shadow-class" @click="setExam(2)">
                <img style="margin-top:40px" src="../../../assets/imgs/easy-level-3.png" alt />
                <h6>المستوى الصعب</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>
          </div>
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
                >لقد تخطيت المستوي بنسبة {{selectedExam.mark}}</h5>

                <button @click="restExam()" class="basth-btn-primary">الانتقال إلي المستوي التالي</button>
                <button
                  @click="getExamQuestions"
                  class="light-btn"
                  style="width: 100%;"
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
              <div class="exam-level">
                <img
                  v-if="selectedExam.exam.difficultyLevel=='difficult'"
                  src="@/assets/imgs/easy-level-3.png"
                  alt
                />
                <img
                  v-if="selectedExam.exam.difficultyLevel=='middle'"
                  src="@/assets/imgs/easy-level-2.png"
                  alt
                />
                <img
                  v-if="selectedExam.exam.difficultyLevel=='easy'"
                  src="@/assets/imgs/easy-level-1.png"
                  alt
                />
                <h6>{{selectedExam.exam.title}}</h6>
              </div>

              <!-- <div class="exam-level" v-if="lessonDetails">
                <h4 style="display: inline-block;">{{lessonDetails.unit.subject.nameAr}}</h4>
                <h6>{{lessonDetails.unit.nameAr }} - {{lessonDetails.nameAr}}</h6>
              </div>-->
              <div class="sub-name">
                <button
                  @click="selectedExam = null"
                  style="padding: 9px;margin-bottom: 10px;border: none;background: #058ac6;color: #FFF;font-family: 'CustomFontBold';border-radius: 5px;"
                >عرض المستويات</button>
                <h4 style="width:100%">الاختبار</h4>
              </div>
            </div>

            <div class="general-exam-head">
              <div class="head-three">
                <div class="c100 small" :class="'p'+selectedExam.mark" style="margin-top: 0;">
                  <span v-if="selectedExam.mark">{{selectedExam.mark}}%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
              </div>
              <div class="unit lesson-uni head-two" v-if="lessonDetails">
                <img src="../../../assets/imgs/noun_testing_3325786.png" alt />

                <!-- <img src="../../../assets/imgs/laboratory.png" alt /> -->
                <h4 style="display: inline-block;">{{lessonDetails.unit.subject.nameAr}}</h4>
                <h6>{{lessonDetails.unit.nameAr }} - {{lessonDetails.nameAr}}</h6>
              </div>
            </div>
            <Loading v-if="isLoading" />

            <div class="general-exam-content" v-else-if="questions">
              <div class="row">
                <div class="col-md-12" style="min-height: 320px;">
                  <div v-for="(item, index) in questions" :key="index">
                    <div class="exam-cont-item">
                      <div>
                        <h6>{{ index + 1 }}</h6>
                      </div>

                      <div>
                        <h6>.</h6>
                      </div>
                    </div>

                    <!-- {{selectedExam.exam.id}} -->
                    <truefalse
                      :answer="item.answer"
                      v-if="item.question.type == 'truefalse'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                      :isSolving="selectedExam.isSolving"
                      :mark="selectedExam.mark"
                    />
                    <choose
                      :answer="item.answer"
                      v-if="item.question.type == 'choose'"
                      :question="item.question"
                      :exam_id="selectedExam.exam.id"
                      :isSolving="selectedExam.isSolving"
                      :mark="selectedExam.mark"
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
                      :isSolving="selectedExam.isSolving"
                      :mark="selectedExam.mark"
                    />
                  </div>
                </div>

                <!-- <div v-if="questions.length>0"> -->
                <input
                  v-if="questions.length>0&&selectedExam.mark<75"
                  class="mt-5 basth-btn-primary"
                  type="button"
                  @click="$bvModal.show('confirm')"
                  value="تسليم"
                />
                <!-- </div> -->
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
      selectedIndex: null,

      isLoading: true,
      exams: [],
      questions: null,
      lessonDetails: null,

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
    if (this.$route.params.id) {
      this.getLessonExams()
      this.getLessonDetails()
    }
  },
  watch: {},
  methods: {
    restExam() {
      this.$bvModal.hide('path')

      this.selectedExam = null
    },
    setExam(index) {
      if (index == 0) {
        this.selectedExam = this.exams[index]

        if (this.exams[index].mark < 75) {
          this.startExam(this.exams[index])
        } else {
          this.getExamQuestions()
        }
      } else if (this.exams[index - 1].mark >= 75) {
        if (this.exams[index].mark < 75) {
          this.startExam(this.exams[index])
        } else {
          this.selectedExam = this.exams[index]
          this.getExamQuestions()
        }
      } else {
        this.$snotify.warning(
          ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
        )
      }
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
    },
    getLessonExams() {
      this.$axios
        .get(`lessons/${this.$route.params.id}/exams`)
        .then((res) => {
          this.exams = res.data
        })

        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    getLessonDetails() {
      this.$axios
        .get(`lessons/${this.$route.params.id}`)
        .then((res) => {
          this.lessonDetails = res.data
        })

        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    startExam(exam) {
      // exams/70/start
      this.isLoading = true
      this.$bvModal.hide('not-path')

      this.$axios
        .post(`exams/${exam.exam.id}/start`)
        .then((res) => {
          this.selectedExam = exam

          this.getExamQuestions()
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false

          this.$snotify.warning(
            ` عفواً هذا المستوي غير متاح لك يرجي إجتياز المستوي السابق أولا`
          )
        })
    },
    getExamQuestions() {
      this.$bvModal.hide('path')

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
      this.$bvModal.hide('confirm')
      this.isLoading = true
      this.$axios
        .post(`exams/${this.selectedExam.exam.id}/done`)
        .then((res) => {
          // this.$router.push({ path: '/subjects' })
          // this.getLessonExams()
          // this.getExamQuestions()

          this.selectedExam.mark = res.data.mark
          if (res.data.mark >= 75) {
            this.$bvModal.show('path')
          } else {
            this.$bvModal.show('not-path')
          }
          // this.$snotify.success(` حسناً تم تصحيح الإمتحان`)
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
      margin-bottom: 34px;
      box-shadow: 0px 1px 10px -1px #ddd;
      border-radius: 17px;
    }
    h6 {
      margin-bottom: 15px;
      color: 20px;
      margin-top: 22px;
      color: #898989;
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
