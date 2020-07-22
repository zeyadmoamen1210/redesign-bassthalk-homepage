<template>
  <div>
    <div class="container">
      <div class="bank-info">
        <div class="title">
          <h6>
            <img src="../../assets/imgs/noun_knowledge_-1.png" alt="">
            بنك المعلومات</h6>
        </div>

        <div class="bank-info-head">
          <div class="row">
            <div class="col-md-6">
              <div class="bank-info-head-item">
                <img src="../../assets/imgs/illustration 2.png" alt="">
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="bank-info-head-item">
                <h3>تهانينا</h3>
                <h6>لقد اجتزت المستوي 6</h6>
                <p class="lead">أستمر في تخطي المستويات لتكن من المتفوقين</p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
                <p class="lead">هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي
                  هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي
                </p>
              </div>
            </div>
          </div>
        </div>
       <div class="info-bank-levels">
         <div class="title">
           <h6>المستويات</h6>
         </div>
         <div class="row">
           <div class="col-md-2" v-for="(x,index) in questions" :key="index">
             <div class="info-cicles">
               <nuxt-link :class="index < correctNum  ? 'disabled' : ''" :to="`/info-bank/${x.id}`">
                 <img v-if="index >= correctNum " src="../../assets/imgs/info-lock.png" alt="">
                 <img v-else src="../../assets/imgs/info-next-done.png" alt="">
                 <span style="" v-if="index >= correctNum "> {{index + 1}} </span>
                 <span style="color:#FFF" v-else> {{index + 1}} </span>
               </nuxt-link>
             </div>
           </div>
         
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      questions: [],
      arrCheck: [],
      correctNum: 0,
      
    }
  },
  computed:{
   
  },
  methods:{
  
  },
  created(){
    this.$axios.get(`information-bank/questions`).then(res => {
      console.log(res)
      this.questions = res.data.questions,
      this.correctNum = res.data.numberOfCorrectQuestions
    })
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/info-bank.scss';
.disabled{
  pointer-events: none;
}
</style>
