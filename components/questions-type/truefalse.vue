<template>
  <div class="check-box-ques" style="float: left; width: 100%;">
    <h6>{{ question.head }}</h6>
    
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
      <div style="overflow: hidden; display: block; float: left; width: 20%;" v-if="!isSolving">
        <Button>
          الاجابة
          <i class="text-success fa fa-check" v-if="question.modelAnswer==answerData"></i>
          <i class="text-danger fa fa-times" v-else></i>
        </Button>
      </div>
      <div style="overflow: hidden; display: block; float: left; width: 40%;">
        <input
          type="radio"
          :disabled="!isSolving"
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
          :disabled="!isSolving"
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
      if (this.isSolving) {
        this.$axios
          .patch(`exams/${this.exam}/solution`, {
            question: this.id,
            answer: this.answerData,
          })
          .then((res) => {})
          .catch((err) => {
            console.log(err)
          })
      }
    },
  },
}
</script>
