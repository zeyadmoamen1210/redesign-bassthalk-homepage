<template>
  <div>
    <div class="container">
      <div class="general-exam-test">
        <div class="title">
          <div class="exam-level">
            <img src="../assets/imgs/easy-level-1.png" alt="">
            <h6>المستوي السهل</h6>
          </div>
         <div class="sub-name">
          <h4>الاختبار</h4>
                      <img src="../assets/imgs/noun_testing_3325786.png" alt="">

         </div>
        </div>

        <div class="general-exam-head">


          <div class="head-three">
             <div class="c100 p25 small" style="margin-top: 0;">
                    <span>25%</span>
                    <div class="slice">
                      <div class="bar"></div>
                      <div class="fill"></div>
                    </div>
                  </div>
          </div>
            <div class="unit lesson-uni head-two">
              <img src="../assets/imgs/laboratory.png" alt="">
              <h4 style="display:inline-block">الكمياء</h4>
            <span>1</span>
            <h6>الوحدة الأولي - الدرس الأول</h6>
          </div>

        </div>


          <div class="general-exam-content">
          <div class="row">
            <div class="col-md-12" style="min-height: 320px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>1</h6>
                </div>

                <div><h6>السؤال الأول</h6></div>
              </div>
             <truefalse />

            </div>




             <div class="col-md-12" style="min-height: 320px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>2</h6>
                </div>

                <div><h6>السؤال الثاني</h6></div>
              </div>
              <truefalse />

            </div>


              <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>3</h6>
                </div>

                <div><h6>السؤال الثالث</h6></div>
              </div>
              <choose />

            </div>


             <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>4</h6>
                </div>

                <div><h6>السؤال الرابع</h6></div>
              </div>
              <choose />

            </div>


             <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>5</h6>
                </div>

                <div><h6>السؤال الخامس</h6></div>
              </div>
              <complete />

            </div>




            <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>6</h6>
                </div>

                <div><h6>السؤال السادس</h6></div>
              </div>
              <complete />

            </div>


             <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>7</h6>
                </div>

                <div><h6>السؤال السابع</h6></div>
              </div>
              <group />

            </div>


             <div class="col-md-12" style="margin-top: 25px;">
              <div class="exam-cont-item">
                    <div>
                  <h6>8</h6>
                </div>

                <div><h6>السؤال الثامن</h6></div>
              </div>
              <group />

            </div>


         

           

            <input type="submit" value="تصحيح">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import truefalse from '../components/questions-type/truefalse'
import group from '../components/questions-type/group'
import choose from '../components/questions-type/choose'
import complete from '../components/questions-type/complete'
export default {
  components:{
    truefalse,
    group,
    choose,
    complete
  },
methods:{
  playAudio: function(){
    document.getElementById('player').play()
  },
   pauseAudio: function(){
    document.getElementById('player').pause()
  },
  increaseVolume: function(){
    document.getElementById('player').volume += 0.1;
  },
  decreaseVolume: function(){
    document.getElementById('player').volume -= 0.1;
  }
}
}
</script>

<style lang="scss">
@import '../assets/sass/general-exam-test.scss';
</style>
