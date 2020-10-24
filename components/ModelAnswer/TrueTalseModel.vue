<template>
  <div class="check-box-ques" style="float: left; width: 100%;">
    <i class="fas fa-pencil-alt"></i>
    <h6 style=" background: #008bc71c;width: 94%; padding: 15px;"> {{ question.question.head }}</h6>
    
    <a :href="question.question.image" target="_blank">
    <selectedImg v-if="question.question.image" style="float: right;" :imgUrl="question.question.image"></selectedImg>
    </a>
    <div
      style="
        overflow: hidden;
      "
    >
      <div style="overflow: hidden; display: block; " v-if="!isSolving">
        <Button>
          الاجابة
          <i class="text-success fa fa-check" v-if="question.question.modelAnswer==answerData"></i>
          <i class="text-danger fa fa-times" v-else></i>
        </Button>
      </div>
      <div style="display:flex;flex-wrap:wrap">
          <div style="overflow: hidden; flex-grow:1">
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
        <div style="overflow: hidden; display: block;flex-grow:1">
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
