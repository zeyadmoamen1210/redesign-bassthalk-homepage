<template>
  <div>
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3>
            <img src="@/assets/imgs/noun_exam_-1.png" alt="" />
            الإمتحانات العامة
            <button @click="showExamLevels" class="mr-auto" v-if="examLevel">
              عرض المستويات
            </button>
          </h3>
        </div>

        <div class="levels" v-if="examLevel == null">
          <div class="row">
            <!-- {{exams[0].id}} -->
            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[0].id + '/questions'"> -->
              <div
                class="level-item box-shadow-class"
                @click="getSubjectTeacherExams(easyLevel)"
              >
                <img
                  style="margin-top: 40px;"
                  src="@/assets/imgs/easy-level-1.png"
                  alt
                />
                <h6>المستوي السهل</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[1].id + '/questions'"> -->
              <div
                class="level-item box-shadow-class"
                @click="getSubjectTeacherExams(middleLevel)"
              >
                <img
                  style="margin-top: 40px;"
                  src="@/assets/imgs/easy-level-2.png"
                  alt
                />
                <h6>المستوي المتوسط</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>

            <div class="col-md-4">
              <!-- <nuxt-link :to="'/exams/' + exams[2].id + '/questions'"> -->
              <div
                class="level-item box-shadow-class"
                @click="getSubjectTeacherExams(difficultLevel)"
              >
                <img
                  style="margin-top: 40px;"
                  src="@/assets/imgs/easy-level-3.png"
                  alt
                />
                <h6>المستوي الصعب</h6>
              </div>
              <!-- </nuxt-link> -->
            </div>
          </div>
        </div>
        <Loading v-if="isLoading" />

        <div class="container" v-else-if="!isLoading && exams.length > 0">
          <div class="exams-cards">
            <div class="row">
              <div class="col-md-4" v-for="(exam, index) in exams" :key="index">
                <!-- <nuxt-link :to="'/exams/' + exam.id"> -->
                <div class="exam-card" @click="openExam(exam)">
                  <div class="card-head">
                    <h4>{{ exam.title }}</h4>
                  </div>
                  <div class="card-body">
                    <div>
                      <h6 style="display: inline-block;">الصعوبة:</h6>
                      <span style="display: inline-block;">
                        {{ examLevel.name }}
                      </span>
                    </div>
                    <div>
                      <h6 style="display: inline-block;">الدرجة:</h6>
                      <span style="display: inline-block;">
                        {{ exam.points }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- </nuxt-link> -->
              </div>
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
  middleware: 'auth-student',

  components: {
    Loading,
  },
  data() {
    return {
      examLevel: null,

      isLoading: false,
      exams: [],

      easyLevel: { name: 'المستوي السهل', value: 'easy' },
      middleLevel: { name: 'المستوي المتوسط', value: 'middle' },
      difficultLevel: { name: 'المستوي الصعب', value: 'difficult' },
    }
  },
  created() {},
  watch: {},
  methods: {
    openExam(exam) {
      if (exam.status == 'checking') {
        this.$snotify.warning(
          `عفواً لم يتم تصحيح الإمتحان بعد إنتظر التصحيح من قبل المدرس`
        )
      } else {
        this.$router.push({ path: `/exams/${exam.id}` })
      }
    },
    showExamLevels() {
      this.examLevel = null
      this.exams = []
    },
    getSubjectTeacherExams(level) {
      this.examLevel = level
      //  subjects/1/exams?teacher=5&difficultyLevel=easy
      this.isLoading = true
      this.$axios
        .get(
          `subjects/${this.$route.params.id}/exams?teacher=${this.$route.params.teacher_id}&difficultyLevel=${level.value}`
        )
        .then((res) => {
          this.exams = res.data
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
@import '../../../../../assets/sass/general-exam-level.scss';
@import '../../../../../assets/sass/general-exam-test.scss';
.exams-cards {
  margin-top: 50px;
  .exam-card {
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    .card-head {
      background: #f5f5f5;
      padding: 10px;
      h4 {
        margin-bottom: 0;
        color: #0085c1;
      }
    }
    .card-body {
      > div {
        &:not(:last-of-type) {
          border-bottom: 1px solid #ccc;
          margin-bottom: 15px;
        }
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
      background-image: url('../../../../../assets/imgs/check.png');
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
