<template>
  <div>

    <div class="container">
      <div class="subjects" style="">
      <div class="form-title">
        <h4>
          <img src="../assets/imgs/live-blue.png" alt="" style="width: 30px;">
          بث مباشر</h4>
      </div>
              <p>قم بأختيار المادة</p>
      <div class="row">
        <div class="col-md-3">
          <nuxt-link to="">
            <div class="subject-cont chem">
              <img src="../assets/imgs/laboratory-1.png" alt="">
              <h3>الكمياء</h3>
            </div>
          </nuxt-link>
        </div>


        <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont math">
                <img src="../assets/imgs/Blueprint-Cogwheel-Plan-Architecture-Construction-1.png" alt="">
                <h3>الهندسة</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont arab">
                <img src="../assets/imgs/Page-3.png" alt="">
                <h3>اللغة العريبة</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont math2">
                <img src="../assets/imgs/Page-4.png" alt="">
                <h3>الجبر</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont eng">
                <img src="../assets/imgs/education-1.png" alt="">
                <h3>اللغة الانجليزية</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont history">
                <img src="../assets/imgs/Outline-1.png" alt="">
                <h3>التاريخ</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont physic">
                <img src="../assets/imgs/magnets-1.png" alt="">
                <h3>الفزياء</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont geo">
                <img src="../assets/imgs/planet-earth-1.png" alt="">
                <h3>الجغرافية</h3>
              </div>
            </nuxt-link>
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
@import '../assets/sass/broadcast-live.scss';
</style>
