<template>
  <div class="check-box-ques">
    <div class="question-name">
      <div>
        <span v-html="question.head"></span>
        <br />
      </div>
    </div>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>

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

          <truefalse
            :answer="item.answer"
            v-if="item.child.type == 'truefalse'"
            :question="item.child"
            :exam_id="exam_id"
            :isSolving="isSolving"
            :mark="mark"
          />
          <choose
            :answer="item.answer"
            :isSolving="isSolving"
            v-if="item.child.type == 'choose'"
            :question="item.child"
            :mark="mark"
          />
          <complete
            :answer="item.answer"
            v-if="item.child.type == 'complete'"
            :question="item.child"
            :exam_id="exam_id"
            :mark="mark"
          />
          <paragraph
            :answer="item.answer"
            :answerImage="item.answerImage"
            v-if="item.child.type == 'paragraph'"
            :question="item.child"
            :exam_id="exam_id"
            :mark="mark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selectedImg from '../selectedImg'
import complete from './complete'
import truefalse from './truefalse'
import choose from './choose'
import paragraph from './paragraph'
export default {
  components: {
    selectedImg,
    truefalse,
    choose,
    complete,
    paragraph,
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
    exam_id: {
      required: true,
    },

   
  },
}
</script>

<style lang="scss">
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