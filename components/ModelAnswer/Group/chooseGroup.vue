<template>
  <div class="check-box-ques" style="position:relative;padding-bottom:50px;border-bottom:1px solid #ddd;padding: 15px 0;">
    <i class="fas fa-question-circle"></i>
    <h6 v-if="question.child.head" style=" background: #008bc71c;width: 94%;padding:5px" v-html="question.child.head"></h6>
         <img style="width: 100%;height: 100%;border:2px dashed #9a9a" v-if="question.child.image" :src="question.child.image" />

    <div class="ques-answer-btns">
      <div class="row" v-if="isSolving">
        <div class="col-md-3" v-for="(item, index) in question.child.choices" :key="index">
          <button
            @click="answerData = index"
            :class="{ selected: answerData == index }"
          >{{ question.child.choices[index] }}</button>
        </div>
      </div>
      
      <div v-else>
        <div class="row">
          <div class="col-md-3" v-for="(item, index) in question.child.choices" :key="index">
          <vs-button
            v-if="answerData == index && answerData != question.child.modelAnswer"
            color="danger"
            v-html="question.child.choices[index]"
          ></vs-button>
          <vs-button
          color="success"
            v-else-if="answerData == index && answerData ==question.child.modelAnswer"
            class="selected"
            v-html="question.child.choices[index]"
          ></vs-button>
          <vs-button
            v-else-if="question.child.modelAnswer == index"
            class="selected"
            color="success"
            v-html="question.child.choices[index]"
          ></vs-button>
          <vs-button color="#FFF" v-else v-html="question.child.choices[index]"></vs-button>
        </div>
        </div>

      </div>
                      <div class="quesMark" style="position:absolute"> <b style="color:#333">الدرجة:</b> {{question.point}} / {{question.mark}} </div>

    </div>
  </div>
</template>

<script>
import selectedImg from '../../selectedImg'
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
      id: this.question.child.id,
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
p{
  margin-bottom: 0;
}
</style>
