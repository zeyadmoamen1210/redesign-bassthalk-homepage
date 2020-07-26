<template>
  <div>
    <div class="container">
      <div class="bank-info">
        <div class="title">
          <!-- <h6>
            <img src="../../assets/imgs/noun_knowledge_-1.png" alt />
            بنك المعلومات
          </h6> -->
           <div class="head-who" style="width:293px">
              <span></span>
              <span></span>
              <span></span>
              <h3>بنك المعلومات</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="container" v-if="selectedQuestion">
          <div class="question-bank">
            <div class="question-title">
              <div class="lesson-inner-grid">
                <div class="unit lesson-unit">
                  <div style="display:inline-block; position:relative">
                    <div>{{correctNum+1}}</div>
                    <img style="height: 53px;" src="@/assets/imgs/info-next.png" alt />
                  </div>
                  <h6>السؤال</h6>
                  <div class="question-timer">
                    <h6>
                      {{this.seconds}}
                      <img src="@/assets/imgs/question-timer.png" alt />
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="question-head" style="overflow:hidden">
              <div class="question-head-one">
                <h6
                  style="text-align:left"
                  :style="{visibility: correctAnswer ? 'visible' : 'hidden'}"
                >
                  <span>
                    <span>{{point}}</span>
                    <img src="@/assets/imgs/point.png" alt />
                  </span>
                  <br />
                  <img style="width: 196px;" src="@/assets/imgs/right.png" alt />
                </h6>
              </div>
              <truefalse
                :key="selectedQuestion.id"
                v-if="selectedQuestion.type=='truefalse'"
                @trueFalse="truefalseHandle"
                :question="selectedQuestion"
              />
              <choose
                :key="selectedQuestion.id"
                v-if="selectedQuestion.type=='choose'"
                @choose="chooseHandle"
                :question="selectedQuestion"
              />

              <!-- <component
            :is="selectedComponent"
            @choose="chooseHandle"
            @trueFalse="truefalseHandle"
            :question="selectedQuestion"
              ></component>-->

              <div class="question-head-one" style="float:right">
                <div class="buttons">
                  <div class="row">
                    <button class="fullWidthBtn" v-if="solving" @click="submitQuestion">أجب</button>
                    <button class="fullWidthBtn" v-else @click="getBankInfoQuestions
">التالي</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="bank-info-head">
          <div class="row">
            <div class="col-md-6">
              <div class="bank-info-head-item">
                <img src="../../assets/imgs/illustration 2.png" alt />
              </div>
            </div>

            <div class="col-md-6">
              <div class="bank-info-head-item">
                <h3>تهانينا</h3>
                <h6>لقد اجتزت المستوي {{correctNum}}</h6>
                <p class="lead">أستمر في تخطي المستويات لتكن من المتفوقين</p>
                 <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    :aria-valuenow="correctNum"
                    aria-valuemin="0"
                    aria-valuemax="10"
                    :style="{width: 10*correctNum +'%' }"
                  ></div>
                </div>
                <p class="lead">
                  هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                  هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                </p>
              </div>
            </div>
          </div>
        </div>-->
        <Loading v-if="isLoading" />

        <div class="info-bank-levels" v-else>
          <div class="title">
            <h6>المستويات</h6>
          </div>
          <div class="row">
            <div class="col-md-2" v-for="(x,index) in correctNum" :key="index+'c'">
              <div class="info-cicles">
                <!-- <nuxt-link
                  :class="index < correctNum  ? 'disabled' : ''"
                  :to="`/info-bank/${x.id}`"
                >-->
                <!-- <img v-if="index >= correctNum " src="../../assets/imgs/info-lock.png" alt /> -->
                <img src="../../assets/imgs/info-next-done.png" alt />
                <!-- <span style v-if="index >= correctNum ">{{index + 1}}</span> -->
                <span style="color:#FFF">{{index + 1}}</span>
                <!-- </nuxt-link> -->
              </div>
            </div>
            <div class="col-md-2" v-for="(x,index) in questions" :key="index+'q'">
              <div class="info-cicles" @click="getBankInfoQuestions">
                <!-- <nuxt-link
                  :class="index < correctNum  ? 'disabled' : ''"
                  :to="`/info-bank/${x.id}`"
                >-->
                <img src="../../assets/imgs/info-lock.png" alt />
                <!-- <span style v-if="index >= correctNum ">{{index + 1}}</span> -->
                <span>{{correctNum+ index + 1}}</span>
                <!-- </nuxt-link> -->
              </div>
            </div>
          </div>
        </div>

        <button class="false">
          <i class="fas fa-thumbs-down"></i>
         إجابة خاطئة
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import choose from '@/components/question-bank/choose'
import truefalse from '@/components/question-bank/truefalse'
import Loading from '@/components/Loading'

export default {
  middleware: 'auth-student',

  components: {
    truefalse,
    choose,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      questions: [],
      arrCheck: [],
      correctNum: 0,
      point: 0,
      correctAnswer: false,
      solving: false,
      selectedQuestion: null,
      seconds: 30,
      answer: null,
      x: null,
    }
  },
  computed: {},
  methods: {
    getBankInfoQuestions() {
      this.correctAnswer = false
      this.solving = true
      this.answer = null
      this.point = 0
      this.seconds = 30

      if (this.questions.length == 4) {
        this.$axios.get(`information-bank/questions`).then((res) => {
          ;(this.questions = res.data.questions),
            (this.correctNum = res.data.numberOfCorrectQuestions)
          this.selectedQuestion = this.questions.sort(
            () => Math.random() - 0.5
          )[0]
          this.secondsCountDown()
        })
      } else {
        this.selectedQuestion = this.questions.sort(
          () => Math.random() - 0.5
        )[0]
        this.secondsCountDown()
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    submitQuestion() {
      this.$axios
        .post(`information-bank/questions/${this.selectedQuestion.id}/done`, {
          answer: this.answer,
          second: this.seconds,
        })
        .then((res) => {
          if (res.data.correct) {
            this.correctAnswer = true
            this.point = res.data.point
            this.correctNum += 1
            let questionIndex = this.questions.findIndex(
              (question) => question.id == this.selectedQuestion.id
            )
            this.questions.splice(questionIndex, 1)
          }
          this.solving = false

          // this.selectedQuestion = null
          clearInterval(this.x)
        })
    },
    secondsCountDown() {
      this.x = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--
        }
        // console.log(this.seconds)
        if (this.seconds == 0) {
          clearInterval(this.x)
        }
      }, 1000)
    },
    truefalseHandle(e) {
      if (this.seconds > 0) {
        this.answer = Boolean(e.answer)
      }
    },
    chooseHandle(e) {
      if (this.seconds > 0) {
        this.answer = e.answer
      }
      // console.log(this.chooseModel)
    },
    getBankQuestions() {
      this.$axios
        .get(`information-bank/questions`)
        .then((res) => {
          this.questions = res.data.questions
          this.correctNum = res.data.numberOfCorrectQuestions
        })
        .finally(() => (this.isLoading = false))
    },
  },
  created() {
    this.getBankQuestions()
  },
}
</script>

<style lang="scss">
@import '../../assets/sass/info-bank.scss';
.disabled {
  pointer-events: none;
}
@import '../../assets/sass/best-student.scss';
@import '../../assets/sass/question-info-bank.scss';
.ques-answer-btns {
  button {
    width: 100%;
    text-align: center;
    border: none;
    padding: 7px;
    background: #ffffff;
    color: #058ac6;
    border-radius: 5px;
    margin-top: 15px;
    border: 1px solid #058ac6;
  }
}
.false{
    font-family: "CustomFontMedium";
    color: #ffffff;
    background: #ff0202bd;
    padding: 13px 31px;
    border: none;
    border-radius: 7px;
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .general-exam-test .title .sub-name h4 {
    display: block;
    font-size: 31px;
    margin-right: 8px;
    font-family: 'CustomFontMedium';
    margin-bottom: 10px;
    width: 73%;
    float: left;
    color: #058ac6;
  }
  .general-exam-test .general-exam-head > div:last-of-type h4 {
    width: 13%;
    margin-bottom: 16px;
    font-size: 17px;
  }
  .unit h6 {
    font-size: 13px;
  }
  .fill-the-ques {
    font-size: 10px !important;
  }
  .general-exam-test .general-exam-head > div:last-of-type {
    width: 100%;
  }
  .general-exam-test .general-exam-head > div:first-of-type {
    width: 19%;
    margin-bottom: 18px;
  }

  .general-exam-test {
    padding-top: 60px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .general-exam-test {
    padding-top: 60px;
  }
}
.question-bank .unit.lesson-unit div > div {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 18px;
  color: #fff;
  font-family: 'CustomFontBold';
  transform: translate(-50%, -50%);
}

.bank-info {
  .head-who {
    h3 {
      margin-right: 53px;
    }
  }
  .head-who span:nth-of-type(4) {
    top: 10px;
    left: 6px;
  }

  .head-who span:nth-of-type(3) {
    top: 13px;
    left: -16px;
    height: 14px;
    width: 15px;
  }

  .head-who span:nth-of-type(2) {
    width: 12px;
    height: 12px;
    top: 13px;
    left: -37px;
  }
  .head-who h3 {
    margin-right: 53px;
  }
}
</style>
