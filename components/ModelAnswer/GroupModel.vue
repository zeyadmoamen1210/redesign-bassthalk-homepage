<template>
  <div class="check-box-ques group-question">
<span style="color: #333;font-size: 24px;margin-right: 11px;"> {{myindex}} </span>
    <h6 style="    display: inline-block;" v-html="question.question.head "></h6>
         <img style="width: 100%;height: 100%;border:2px dashed #9a9a" v-if="question.question.image" :src="question.question.image" />

    <!-- loop to display sub questions -->
    <!-- childrenQuestions -->
    <div class="row">
      <div class="col-md-12" style="min-height: 320px;">
        <div v-for="(item, index) in childrenQuestions" :key="index">
          <!-- <div class="exam-cont-item">
            <div>
              <h6>{{ index + 1 }}</h6>
            </div>

            <div>
              <h6>السؤال الأول</h6>
            </div>
          </div>-->

          <truefalseGroup
            :answer="item.answer"
            v-if="item.child.type == 'truefalse'"
            :question="item"
            :exam_id="exam_id"
            :isSolving="isSolving"
          />
          <chooseGroup
            :answer="item.answer"
            :isSolving="isSolving"
            v-if="item.child.type == 'choose'"
            :question="item"
            :exam_id="exam_id"
          />

          
          <completeGroup
            :answer="item.answer"
            v-if="item.child.type == 'complete'"
            :question="item"
            :isSolving="isSolving"
            :exam_id="exam_id"
          />
          <paragraphGroup
            :answer="item.answer"
            :answerImage="item.answerImage"
            v-if="item.child.type == 'paragraph'"
            :question="item"
            :exam_id="exam_id"
          />
          
        </div>
      <div class="quesMark" v-if="question"> <b style="color:#333">الدرجة:</b> {{question.point}} / {{totalMArksForGroup}} </div>

      </div>
    </div>
  </div>
</template>

<script>
import selectedImg from '../selectedImg'
import completeGroup from './Group/completeGroup'
import truefalseGroup from './Group/truefalseGroup'
import chooseGroup from './Group/chooseGroup'
import paragraphGroup from './Group/paragraphGroup'
export default {
  components: {
    selectedImg,
    truefalseGroup,
    chooseGroup,
    completeGroup,
    paragraphGroup,
  },
  computed:{
    totalMArksForGroup(){
      this.groupMark = 0;
      this.childrenQuestions.forEach(item => {
        if(item.mark){
          this.groupMark += item.mark
        }
      })
      return this.groupMark
    }
  },
  data(){
    return{
      groupMark: null
    }
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    childrenQuestions: {
      type: Array,
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
}
</script>

<style lang="scss">
.group-question{
  >h6{
    p{
          text-align: center;
    }
  }
}
.exam-cont-item {
  overflow: hidden;
  > div {
    float: right;

    &:first-of-type {
      width: 9%;

      h6 {
        color: #ddd;
        background-color: #058ac6;
        padding: 15px;
        text-align: center;
        border-radius: 0 6px 6px 0;
      }
    }
    &:last-of-type {
      width: 91%;

      h6 {
        color: #058ac6;
        background-color: #f2f2f2;
        padding: 15px;
        margin: 0;
        border-radius: 6px 0 0 6px;
      }
    }
  }
}
</style>