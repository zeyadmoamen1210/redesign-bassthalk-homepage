<template>
  <div>
    <div class="container">

      <div class="notifications">
        <div class="title">
          <h4>
            <img src="../assets/imgs/Group 6977.png" alt="">
            التنبيهات</h4>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="notification-item">
              <div class="row">
                  <div class="col-md-12" v-for="x in 4" :key="x">
                    <div class="time-course">
                      <div>
                        <h6>PM 03:00</h6>
                      </div>

                      <div>
                        <h6 style="color: #f20333;">البث المباشر</h6>
                        <h6 style="color: #6c6c6c;">شرح المخطوطات الهندسية</h6>
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

          <div class="col-md-6">
            <div class="advestiment" style="margin-top: 50px;margin-right: 13px;">
              <div style="height: 167px;margin-bottom: 20px;">
                <img style="width: 100%;height: 100%;" src="../assets/imgs/Why-You-Should-Be-Focusing-Your-Marketing-Efforts-On-Mobile-Advertising-And-Social-Media.jpg" alt="">
              </div>
              <div style="height: 167px;margin-bottom: 20px;">
                <img style="width: 100%;height: 100%;" src="../assets/imgs/Why-You-Should-Be-Focusing-Your-Marketing-Efforts-On-Mobile-Advertising-And-Social-Media.jpg" alt="">
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

}
</script>

<style lang="scss">
@import '../assets/sass/notifications.scss';
</style>
