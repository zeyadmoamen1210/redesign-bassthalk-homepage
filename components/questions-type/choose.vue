<template>
  <div class="check-box-ques">
    <h6>{{ question.head }}</h6>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>

    <div class="ques-answer-btns">
      <div class="row">
        <div
          class="col-md-3"
          v-for="(item, index) in question.choices"
          :key="index"
        >
          <button
            @click="answer = index"
            :class="{ selected: answer == index }"
          >
            {{ question.choices[index] }}
          </button>
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
  },
  data() {
    return {
      id: this.question.id,
    }
  },
  watch: {
    answer: function (val) {
      // ! patch exam answer
      // !exams/70/solution
      this.$axios
        .patch(`exams/${this.exam_id}/solution`, {
          question: this.id,
          answer: this.answer,
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
</style>
