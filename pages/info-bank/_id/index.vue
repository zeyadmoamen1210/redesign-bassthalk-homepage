<template>
  <div>
    <div class="container">
      <div class="question-bank">
        <div class="title">
          <h6> بنك المعلومات</h6>
        </div>
        <div class="question-title">
           <div class="lesson-inner-grid">
                <div class="unit lesson-unit">
                      <div style="display:inline-block; position:relative">
                        <div>1</div>
                        <img style="height: 53px;" src="../../../assets/imgs/info-next.png" alt="">
                      </div>
                      <h6>السؤال الأول</h6>
                        <div class="question-timer">
                  <h6>{{this.seconds}}
                    <img src="../../../assets/imgs/question-timer.png" alt="">
                  </h6>
                </div>
                </div>

      </div>
        </div>

     <div class="question-head" style="overflow:hidden">
       <div class="question-head-one">
         <h6  style="text-align:left">
           <img style="width: 196px;" src="../../../assets/imgs/right.png" alt="">
         </h6>
       </div>
        <!-- <div class="question-head-one" style="padding: 35px 0;">
        <h6 style="color: #6c6c6c;"> {{question.head}} </h6>
       </div> -->


      <component :is="selectedComponent" @choose="chooseHandle" @trueFalse="truefalseHandle" :question="question"></component>

       <div class="question-head-one" style="float:right">
        <div class="buttons">
          <div class="row">
            <!-- <div class="col-md-4">
              <button class="first" style="width:100%">اجابة 1</button>
            </div>
             <div class="col-md-4">
              <button style="width:100%">اجابة 2</button>
            </div>
             <div class="col-md-4">
              <button style="width:100%">اجابة 3</button>
            </div>-->
            <button class="fullWidthBtn" @click="submitQuestion">التالي</button>
          </div> 
          
        </div>
       </div>
     </div>


     <div class="question-head" style="overflow:hidden">
       <!-- <div class="question-head-one" style="padding-left:41px">
         <h6  style="text-align:lefttext-align: left; left: 34px;">

           <span style="font-size: 29px;display: block;width: 72px;float: left; margin-top: 9px;color:#056c9e">30+</span>
            <img style="display:block;float:left" src="../../../assets/imgs/point.png" alt="">
         </h6>
       </div> -->
        
     </div>
      </div>
    </div>
  </div>
</template>

<script>

import choose from '../../../components/question-bank/choose'
import truefalse from '../../../components/question-bank/truefalse'
export default {
  components:{
    truefalse,
    choose
  },
  data(){
    return {
      question: {},
      selectedComponent: '',
      truefalseModel: '',
      chooseModel: '',
      seconds: 30,
      x: null,
    }
  },
  methods:{
    submitQuestion(){
      if(this.question.type == 'choose'){
          this.$axios.post(`information-bank/questions/${this.$route.params.id}/done`, {
          answer: this.chooseModel,
          second: this.seconds
        })
        .then(res => {
          clearInterval(this.x)
          console.log(res)
        })
      }else if(this.question.type == 'truefalse'){
        this.$axios.post(`information-bank/questions/${this.$route.params.id}/done`, {
          answer: this.truefalseModel,
          second: this.seconds
        })
        .then(res => {
          clearInterval(this.x)
          console.log(res)
        })
      }
      
    },
    secondsCountDown(){
         this.x = setInterval(() => {
       this.seconds--
       console.log(this.seconds)
       if(this.seconds == 0){
         clearInterval(this.x)
       } 
      }, 1000);
      
    },
    truefalseHandle(val){
      this.truefalseModel = Boolean(val)
      console.log(this.truefalseModel)
    },
    chooseHandle(val){
      this.chooseModel = val
      console.log(this.chooseModel)
    }
  },
  created(){
    this.$axios.get(`information-bank/questions/${this.$route.params.id}`).then(res => {
      console.log(res)
      this.question = res.data
      this.selectedComponent = res.data.type
      this.secondsCountDown()
    })
  }
}
</script>

<style lang="scss">
@import '../../../assets/sass/question-info-bank.scss';




  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.general-exam-test .title .sub-name h4{
      display: block;
    font-size: 31px;
    margin-right: 8px;
    font-family: "CustomFontMedium";
    margin-bottom: 10px;
    width: 73%;
    float: left;
    color: #058ac6;
}
.general-exam-test .general-exam-head > div:last-of-type h4{
        width: 13%;
    margin-bottom: 16px;
    font-size: 17px;
}
.unit h6 {
    font-size: 13px;
}
.fill-the-ques{
      font-size: 10px !important;
}
.general-exam-test .general-exam-head > div:last-of-type{
  width:100%;
}
.general-exam-test .general-exam-head > div:first-of-type{
      width: 19%;
    margin-bottom: 18px;
}

.general-exam-test{
  padding-top: 60px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

.general-exam-test{
  padding-top: 60px;
}
 }
</style>
