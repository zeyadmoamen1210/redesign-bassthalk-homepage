<template>
  <div class="check-box-ques">
    <h6>{{ question.head }}</h6>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>

    <!-- loop to display sub questions -->
    <!-- childrenQuestions -->
    <div class="row">
      <div class="col-md-12" style="min-height: 320px;">
        <div v-for="(item, index) in childrenQuestions" :key="index">
          <div class>
            <div>
              <h6>{{ index + 1 }}</h6>
            </div>

            <div>
              <h6>السؤال الأول</h6>
            </div>
          </div>

          <truefalse
            :answer="item.answer"
            v-if="item.child.type == 'truefalse'"
            :question="item.child"
            :exam_id="exam_id"
          />
          <choose :answer="item.answer" v-if="item.child.type == 'choose'" :question="item.child" />
          <complete
            :answer="item.answer"
            v-if="item.child.type == 'complete'"
            :question="item.child"
            :exam_id="exam_id"
          />
          <paragraph
            :answer="item.answer"
            :answerImage="item.answerImage"
            v-if="item.child.type == 'paragraph'"
            :question="item.child"
            :exam="exam_id"
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