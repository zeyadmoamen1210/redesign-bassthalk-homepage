<template>
  <div class="check-box-ques" style="position:relative;float: left; width: 100%; border-bottom:1px solid #ddd;padding: 15px 0;">
    <i class="fas fa-question-circle"></i>
    <h6 style=" background: #008bc71c;width: 94%;padding:5px"> {{ question.child.head }}</h6>
    
    <a :href="question.child.image" target="_blank">
    <selectedImg v-if="question.child.image" style="float: right;" :imgUrl="question.child.image"></selectedImg>
    </a>
    <div
      style="
        overflow: hidden;
         background: #FFF;
      "
    >
      <div style="overflow: hidden; display: block" v-if="!isSolving">
        <Button>
          الاجابة
          <i class="text-success fa fa-check" v-if="question.child.modelAnswer==answerData"></i>
          <i class="text-danger fa fa-times" v-else></i>
        </Button>
      </div>
      <div style="display:flex;flex-wrap:wrap;    position: relative;z-index: 9999;">
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
                <div class="quesMark"  style="position:absolute"> <b style="color:#333">الدرجة:</b> {{question.point}} / {{question.mark}} </div>
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
