<template>
  <div class="check-box-ques" style="float: left; width: 100%;">
    <!-- <span v-html="question.head"></span> -->
    <div class="question-name">
      <div>
        <span v-html="question.head"></span>
      </div>
    </div>

    <a href="question.image" target="_blank">
      <selectedImg v-if="question.image" style="float: right;" :imgUrl="question.image"></selectedImg>
    </a>
    <div
      style="
        margin-top: 46px;
        overflow: hidden;
        display: inline-block;
        width: 70%;
        margin-right: 50px;
      "
    >
      <div style="overflow: hidden; display: block; float: left; width: 20%;" v-if="mark>=75">
        <Button class="selected" v-if="question.modelAnswer==answerData">الإجابة صحيحة</Button>
        <Button class="danger" v-else>الإجابة خاطئة</Button>
      </div>
      <div style="overflow: hidden; display: block; float: left; width: 40%;">
        <input
          type="radio"
          :disabled="mark>=75"
          :name="id"
          class="absthalk-radio"
          id
          value="false"
          v-model="answerData"
        />
        <span>خطأ</span>
      </div>

      <div style="overflow: hidden; display: block; float: left; width: 40%;">
        <input
          type="radio"
          :disabled="mark>=75"
          :name="id"
          class="absthalk-radio"
          id
          value="true"
          v-model="answerData"
        />
        <span>صح</span>
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
      // alert(this.exam_id)
      // !exams/70/solution
      // if (this.isSolving) {
      this.$axios
        .patch(`exams/${this.exam}/solution`, {
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
