<template>
  <div class="check-box-ques">
<span style="color: #333;font-size: 24px;margin-right: 11px;"> {{myindex}} </span>
    <h6 style=" background: #008bc71c;width: 94%;padding:5px"  v-html="question.question.head"></h6>
     <a  :href="question.question.image" target="_blank">
         <img style="width: 100%;height: 100%;border:2px dashed #9a9a" v-if="question.question.image" :src="question.question.image" />
     </a>

    <!-- <img src="../../assets/imgs/chemical-equation-color.jpg" alt=""> -->

   <div v-if="!question.question.modelAnswer">

      <div class="form-groub">
      <input
        style="width: 100%; padding: 18px;   "
        @blur="setAnswer"
        v-model="answerData"
        type="text"
        placeholder="ادخل أجابتك هنا"
      />
    </div>

    <div class="file-choose" style="z-index:6">
      <input
        @change="imguploadQuestion"
        type="file"
        placeholder="قم بأرفاق صورة بالحل"
      />
      <span v-if="url">
        <img :src="url" width="300" height="150" />
      </span>
      <span v-else>
        <img src="../../assets/imgs/noun_Camera_1903011.png" /> قم بأرفاق صورة
        بالحل
      </span>
    </div>


   </div>
   <div v-else>
     <div>
        <h5 style="    margin-bottom: 7px;
    border-bottom: 1px dashed #b1b1b1;
    display: inline-block;
    padding: 0 0 8px 13px;"> إجابتك </h5>
        <selectedImg v-if="answerImage" :imgUrl="answerImage"></selectedImg>
        <p v-html="answer"> </p>
     </div>
     <div>
       <h5 style="    margin-bottom: 7px;
    border-bottom: 1px dashed #b1b1b1;
    display: inline-block;
    padding: 0 0 8px 13px;">الإجابة النموذجية</h5>
      <p v-html="question.question.modelAnswer"> </p>
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
    answerImage: {
      required: true,
    },
     myindex:{
      required: false
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
      // if (this.photo != null) {
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
      
    },
  },
}
</script>
