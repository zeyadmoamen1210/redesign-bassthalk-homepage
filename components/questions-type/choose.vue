<template>
  <div class="check-box-ques">
    <div class="question-name">
      <div>
        <span v-html="question.head"></span>
        <br />
      </div>
    </div>
    <a href="question.image" target="_blank">
      <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>
    </a>

    <div class="ques-answer-btns">
      <div class="row" v-if="mark<75">
        <div class="col-md-3" v-for="(item, index) in question.choices" :key="index">
          <button
            @click="answerData = index"
            :class="{ selected: answerData == index }"
          >{{ question.choices[index] }}</button>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-md-3" v-for="(item, index) in question.choices" :key="index">
          <button :class="{ selected: answerData == index }">{{ question.choices[index] }}</button>
        </div>

        <button class="btn btn-success">الإجابة الصحيحة</button>
        <button class="selected">{{ question.choices[question.modelAnswer] }}</button>
      </div>
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
    exam_id: {
      required: true,
    },
    isSolving: {
      required: false,
    },
    mark: {
      required: false,
    },
  },
  data() {
    return {
      id: this.question.id,
      answerData: this.answer,

      exam: this.exam_id,
    }
  },
  watch: {
    answerData: function (val) {
      // ! patch exam answer
      // !exams/70/solution
      // if (this.isSolving) {
      this.$axios
        .patch(`exams/${this.exam_id}/solution`, {
          question: this.id,
          answer: this.answerData,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
      // }
    },
  },
}
</script>

<style lang="scss">
.selected {
  background: #00aa00 !important;
  color: #fff !important;
}
.danger {
  background: red !important;
  color: #fff !important;
}
</style>
