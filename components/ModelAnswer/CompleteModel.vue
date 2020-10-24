<template>
  <div class="check-box-ques">
    <i class="fas fa-question-circle"></i>
    <h6 style="    display: inline-block;" v-html="question.question.head"></h6>
    <selectedImg v-if="question.question.image" :imgUrl="question.question.image"></selectedImg>

    <span class="fill-the-ques" style="width: 100%;"></span>
    <div v-if="isSolving">
      <div class="row">
      <div class="col-md-3" v-for="(item, index) in completeData" :key="index">
        <div class="form-groub" style="display: inline-block; width: 100%;">
          <input
            style="width: 100%; padding: 6px;"
            type="text"
            v-model="completeData[index]"
            placeholder="ادخل أجابتك هنا"
            @blur="setAnswer"
          />
        </div>
      </div>
      <!-- {{ completeData }} -->
    </div>
    </div>
    <div v-else>
      <div>
        <h5>إجابتك</h5>
        <span v-for="(one,index) in answer" :key="index"> {{one}} </span>
      </div>
       <div>
        <h5>الإجابة النموذجية</h5>
        <span v-for="(one,index) in question.question.modelAnswer" :key="index"> {{one}} </span>
      </div>
    </div>
                <div class="quesMark"> <b style="color:#333">الدرجة:</b> {{question.point}} / {{question.mark}} </div>
  </div>
</template>

<script>
import selectedImg from '../selectedImg'
export default {
  components: {
    selectedImg,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    answer: {
      required: true,
    },
    exam_id: {
      required: true,
    },
    isSolving: {
      required: false,
    },
  },
  data() {
    return {
      id: this.question.question.id,
      completeData: Array(this.question.question.numberOfInputs).fill(''),
    }
  },
  watch: {},
  created() {
    if (this.answer != null) {
      this.completeData = this.answer
    }
  },
  methods: {
    setAnswer() {
      // !exams/70/solution
      this.$axios
        .patch(`exams/${this.exam_id}/solution`, {
          question: this.id,
          answer: this.completeData,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
