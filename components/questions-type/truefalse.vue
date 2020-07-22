<template>
  <div class="check-box-ques" style="float: left; width: 100%;">
    <h6>{{ question.head }}</h6>
    <selectedImg v-if="question.image" style="float: right;" :imgUrl="question.image"></selectedImg>

    <div
      style="
        margin-top: 46px;
        overflow: hidden;
        display: inline-block;
        width: 70%;
        margin-right: 50px;
      "
    >
      <div style="overflow: hidden; display: block; float: left; width: 50%;">
        <input type="radio" :name="id" class="absthalk-radio" id value="false" v-model="answerData" />
        <span>خطأ</span>
      </div>

      <div style="overflow: hidden; display: block; float: left; width: 50%;">
        <input type="radio" :name="id" class="absthalk-radio" id value="true" v-model="answerData" />
        <span>صح</span>
      </div>
    </div>
  </div>
</template>

<script>
import selectedImg from '../selectedImg'
export default {
  components: {
    selectedImg
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    answer: {
      required: true
    }
  },
  data() {
    return {
      id: this.question.id,
      answerData: this.answer
    }
  },
  watch: {
    answerData: function(val) {
      // ! patch exam answer
      //   alert(this.id + '===>' + this.answerData)
      // !exams/70/solution
      this.$axios
        .patch(`exams/70/solution`, {
          question: this.id,
          answer: this.answerData
        })
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
