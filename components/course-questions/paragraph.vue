<template>
  <div class="check-box-ques">
    <div class="question-name">
      <div>
        <span v-html="question.head"></span>
        <br />
      </div>
    </div>
      <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>
    <a :href="question.image" target="_blank">اضغط</a>

    <!-- <img src="../../assets/imgs/chemical-equation-color.jpg" alt=""> -->

    <div class="form-groub">
      <input
        style="width: 100%; padding: 18px;"
        @blur="setAnswer"
        v-model="answerData"
        type="text"
        placeholder="ادخل أجابتك هنا"
      />
    </div>

    <div class="file-choose">
      <input @change="imguploadQuestion" type="file" placeholder="قم بأرفاق صورة بالحل" />
      <span v-if="url">
        <img :src="url" width="300" height="150" />
      </span>
      <span v-else>
        <img src="../../assets/imgs/noun_Camera_1903011.png" /> قم بأرفاق صورة
        بالحل
      </span>
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
    answerImage: {
      required: true,
    },
  },
  data() {
    return {
      id: this.question.id,
      answerData: this.answer,
      url: null,
      photo: null,
    }
  },
  created() {
    if (this.answerImage) {
      this.url = this.answerImage
    }
  },

  methods: {
    imguploadQuestion(e) {
      if (e.target.files.length > 0) {
        this.url = null
        // console.log('files', e.target.files)
        this.photo = e.target.files[0]
        var questionForm = new FormData()
        if (this.photo != null) {
          questionForm.append('answerImage', this.photo)
          questionForm.append('question', this.id)
          if (this.answerData != '') {
            questionForm.append('answer', this.answerData)
          }
          this.$axios
            .patch(`exams/${this.exam_id}/solution`, questionForm, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {})
            .catch((err) => {
              console.log(err)
            })
        }
        this.url = URL.createObjectURL(this.photo)
      }
    },
    setAnswer() {
      // !exams/70/solution
      var questionForm = new FormData()
      if (this.photo != null) {
        questionForm.append('answerImage', this.photo)
        questionForm.append('question', this.id)
        if (this.answerData != '') {
          questionForm.append('answer', this.answerData)
        }
        this.$axios
          .patch(`exams/${this.exam_id}/solution`, questionForm, {
            headers: { 'Content-Type': 'multipart/form-data' },
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
