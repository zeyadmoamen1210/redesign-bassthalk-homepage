<template>
  <div>

    <div class="container">
      <div class="live-schedule-main">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../assets/imgs/live-blue.png" alt="">
                  بث مباشر</h4>
              </div>
            </div>
         </div>

         <div class="col-md-6">
              <div class="lesson-btns" style="padding:0">
                <div class="row">
                  <div class="col-md-6">
                    <NuxtLink to="" active-class="active">
                      <button class="explain-btn">
                        <img src="../assets/imgs/live-dark.png" alt="">
                        تفاصيل البث</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink to="">
                      <button class="explain-btn">
                        <img src="../assets/imgs/noun_timeline_3037155.png" alt="">
                        التايم لاين</button>
                    </NuxtLink>

                  </div>
                </div>
              </div>

            </div>

        </div>

        <div class="live-schedule">
          <div class="title">
            <div class="img">
                          <img src="../assets/imgs/scheduel.png" alt="">

            </div>
                        <h6>جدول مواعيد البث</h6>

          </div>


      </div>

         <div class="schedule-bar">
            <button :class="active ? 'active':''"  @click="active != active">
              <div>
                <h6>السبت</h6>
                <span>1</span>
              </div>
            </button>

            <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الأحد</h6>
              <span>1</span>
            </div>
            </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الأثنين</h6>
              <span>1</span>
            </div>
             </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الثلاثاء</h6>
              <span>1</span>
            </div>
             </button>

            <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الأربعاء</h6>
              <span>1</span>
            </div>
            </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الخميس</h6>
              <span>1</span>
            </div>
             </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الجمعة</h6>
              <span>1</span>
            </div>
             </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div >
              <h6>السبت</h6>
              <span>1</span>
            </div>
             </button>

             <button :class="active ? 'active':''"  @click="active != active">
               <div>
              <h6>الأحد</h6>
              <span>1</span>
            </div>
             </button>

            <button :class="active ? 'active':''"  @click="active != active">
               <div >
              <h6>الأثنين</h6>
              <span>1</span>
            </div>
            </button>

            <button @click="active != active">
               <div>
              <h6>الثلاثاء</h6>
              <span>1</span>
            </div>
            </button>

            <button :class="active ? 'active':''" @click="active != active">

             <div>
              <h6>الأربعاء</h6>
              <span>1</span>
            </div>
            </button>

         </div>


          <div class="time-content">
            <div class="row">
              <div class="col-md-6">
                <div class="time-course">
                  <div>
                    <img src="../assets/imgs/noun_Time_2405843.png" alt="">
                    <h6>PM 03:00</h6>
                  </div>

                  <div>
                    <h6>شرح المخطوطات الهندسية</h6>
                    <h6 style="color: #6c6c6c;">أستاذة / ميادة رفعت</h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img src="../assets/imgs/teacher-100316.jpg" alt="">
                          <img src="../assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
                </div>
              </div>

               <div class="col-md-6">
                <div class="time-course">
                  <div>
                    <img src="../assets/imgs/noun_Time_2405843.png" alt="">
                    <h6>PM 03:00</h6>
                  </div>

                  <div>
                    <h6>شرح المخطوطات الهندسية</h6>
                    <h6 style="color: #6c6c6c;">أستاذة / ميادة رفعت</h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img src="../assets/imgs/teacher-100316.jpg" alt="">
                          <img src="../assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
                </div>
              </div>

               <div class="col-md-6">
                <div class="time-course">
                  <div>
                    <img src="../assets/imgs/noun_Time_2405843.png" alt="">
                    <h6>PM 03:00</h6>
                  </div>

                  <div>
                    <h6>شرح المخطوطات الهندسية</h6>
                    <h6 style="color: #6c6c6c;">أستاذة / ميادة رفعت</h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img src="../assets/imgs/teacher-100316.jpg" alt="">
                          <img src="../assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
                </div>
              </div>

               <div class="col-md-6">
                <div class="time-course">
                  <div>
                    <img src="../assets/imgs/noun_Time_2405843.png" alt="">
                    <h6>PM 03:00</h6>
                  </div>

                  <div>
                    <h6>شرح المخطوطات الهندسية</h6>
                    <h6 style="color: #6c6c6c;">أستاذة / ميادة رفعت</h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img src="../assets/imgs/teacher-100316.jpg" alt="">
                          <img src="../assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
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
    active:false
  }
},
methods:{

}
}
</script>

<style lang="scss">
@import '../assets/sass/live-schedule.scss';
</style>
