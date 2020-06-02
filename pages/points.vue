<template>
  <div>
    <NavbarBefore />
    <div class="container">
      <div class="point-datails">
        <div class="title">
          <h5>سجل النقاط</h5>
        </div>
      </div>

      <div class="point-cont">
        <div class="row">
          <div class="col-md-7" v-for="x in 6" :key="x">
            <div class="question-point-cont">
              <span>  <span>33</span> <img src="../assets/imgs/point.png" alt=""></span>
                            <h6>هنا جملة تفصيلية لسبب النقطة </h6>

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
</style>
