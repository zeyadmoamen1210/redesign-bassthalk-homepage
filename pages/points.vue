<template>
  <div>
    <div class="container">
      <div class="point-datails">
        <div class="title">
          <h5>
            <img src="../assets/imgs/business-1.png" alt="">
            سجل النقاط</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="point-cont">
        <div class="row">
          <div class="col-md-12" v-for="x in 6" :key="x">
            <div class="question-point-cont">
              <span>  <span>33</span> <img src="../assets/imgs/point.png" alt=""></span>
                            <h6>هنا جملة تفصيلية لسبب النقطة </h6>

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
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/sass/points.scss';
</style>
