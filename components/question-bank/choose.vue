<template>
  <div class="check-box-ques">
    <h6 v-html="question.head"></h6>
    <selectedImg v-if="question.image" :imgUrl="question.image"></selectedImg>
    <div class="ques-answer-btns">
      <div class="row">
        <div class="col-md-3" v-for="(x,index) in question.choices" :key="index">
          <button
            @click="answer = index"
            :class="{selected: answer == index}"
          >{{question.choices[index]}}</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import selectedImg from '../selectedImg'
export default {
  props: ['question'],
  data() {
    return {
      answer: null,
    }
  },
  components: {
    selectedImg,
  },
  watch: {
    answer() {
      this.$emit('choose', {
        answer: this.answer,
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
</style>