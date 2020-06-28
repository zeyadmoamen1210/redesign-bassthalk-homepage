<template>
  <div>

    <div class="container">
      <div class="live-details">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../assets/imgs/live-blue.png" alt="">
                  بث مباشر</h4>
              </div>
              <div class="next-live">
                <h6>
                  البث القادم</h6>
                 <div class="live-time-last">
                  <h6 style="text-align:right;color:#f5355c">متبقي</h6>
                  <div class="live-time">
                    <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>ثانية</h6>
                      <span>5</span>
                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>دقيقة</h6>
                      <span>5</span>

                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>ساعة</h6>
                      <span>5</span>

                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>يوم</h6>
                      <span>5</span>

                    </div>
                  </div>

                </div>

                <div class="teacher">
                  <img src="../assets/imgs/teacher-100316.jpg" alt="">
                  <img src="../assets/imgs/live-red.png" alt="">
                </div>

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
              <div class="you-can-follow" style="margin-top: 50px;">
                <h6>كما يمكنك متابعة</h6>
                <button>
                  <img src="../assets/imgs/noun_Table_1158645.png" alt="">
                  جدول مواعيد البث</button>
                <button>
                  <img src="../assets/imgs/noun_Save_3324346.png" alt="">
                  مواعيد البث المحفوظة</button>

              </div>
            </div>

        </div>
         <h5>شرح المخطوطات الهندسية</h5>
                  <h5>أستاذة / ميادة رفعت</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/sass/live-details.scss';
</style>
