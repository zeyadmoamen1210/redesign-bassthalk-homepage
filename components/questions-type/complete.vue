<template>
  <div class="check-box-ques">
    <div class="question-name">
      <div>
        <span v-html="question.head"></span>
      </div>
    </div>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>

    <span class="fill-the-ques" style="width: 100%;"></span>
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
  },
  data() {
    return {
      id: this.question.id,
      completeData: Array(this.question.numberOfInputs).fill(''),
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
