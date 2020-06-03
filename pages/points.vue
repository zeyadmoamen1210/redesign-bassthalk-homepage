<template>
  <div>
    <NavbarBefore />
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
import NavbarBefore from '../components/NavbarBefore'
export default {
components:{
  NavbarBefore
}
}
</script>

<style lang="scss">
.point-datails{
  margin-top: 50px;
  .title{
        color: #058ac6;
    margin-bottom: 26px;
  }

}
.question-point-cont{
      overflow: hidden;
    padding: 10px 15px;
    background: #e8e8e8;
    border-radius: 5px;
        margin-bottom: 10px;
    h6{
     margin: 0;
    width: 70%;
    color: #646464;
    float: left;
    padding: 10px 0;
    }
    >span{
         width: 30%;
    float: left;
    display: block;
    text-align: left;
    span{
      font-family: "CustomFontBold";
    font-size: 25px;
    color: #0989c3;
    }
    img{
      width: 30px;
    margin-top: -15px;
    }
    }
  }



// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {

 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
