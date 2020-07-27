<template>
  <div class="check-box-ques">
    <h6>{{ question.head }}</h6>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>

    <div class="ques-answer-btns">
      <div class="row">
        <div class="col-md-3" v-for="(item, index) in question.choices" :key="index">
          <button
            v-if="isSolving"
            @click="answerData = index"
            :class="{ selected: answerData == index }"
          >{{ question.choices[index] }}</button>
          <button
            v-if="answerData == index && answerData != question.modelAnswer"
            class="danger"
          >{{ question.choices[index] }}</button>
          <button
            v-else-if="answerData == index && answerData ==question.modelAnswer"
            class="selected"
          >{{ question.choices[index] }}</button>
          <button
            v-else-if="question.modelAnswer == index"
            class="selected"
          >{{ question.choices[index] }}</button>
          <button v-else>{{ question.choices[index] }}</button>
        </div>
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
      this.$axios
        .patch(`exams/${this.exam_id}/solution`, {
          question: this.id,
          answer: this.answerData,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
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
