<template>
  <div>
    <NavbarBefore />

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
import NavbarBefore from '../components/NavbarBefore'
import Footer from '../components/Footer'

export default {
  components:{
    NavbarBefore,
    Footer
  }
}
</script>

<style lang="scss">
.subjects{
  margin-top: 60px;
  margin-bottom: 170px;

  .col-md-3{
    a{
      color:#333;
      text-decoration: none;
      font-family: "CustomFontRegular";
      .subject-cont{
           transition: all .4s linear;

        &:hover{
       transform: scale(1.06);
      }
      }
    }
  }
  p{
      font-size: 21px;
    color: #5a5959;
    margin-bottom: 8px;
    font-family: "CustomFontMedium";
    margin-top: 19px;
    }
  .form-title{
    color:#058ac6bd;

  }
  .subject-cont{
   padding: 26px;
    margin: 20px 0;
    box-shadow: 0px 1px 21px 0px #DDD;
    border-radius: 10px;
    img{
      display: block;
      margin: auto;
    }
    h3{
            text-align: center;
    margin-top: 18px;
    font-size: 20px;
    }
  }
  .chem{
    background: url('../assets/imgs/chem.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .math{
    background: url('../assets/imgs/math.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .arab{
    background: url('../assets/imgs/arabic.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .math2{
    background: url('../assets/imgs/math2.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .eng{
    background: url('../assets/imgs/eng.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .history{
    background: url('../assets/imgs/history.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .physic{
    background: url('../assets/imgs/physic.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .geo{
    background: url('../assets/imgs/planet-earth-2.png');
    background-position: center;
    background-repeat: no-repeat;
  }
}





// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .subjects{
       padding-top: 60px !important;
  }
 }
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .subjects{
       padding-top: 60px !important;
  }
  .head-who[data-v-6b499738] {
    position: relative;
    text-align: center;
    margin:50px auto;
}
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

  .head-who[data-v-6b499738] {
    position: relative;
    text-align: center;
    margin:50px auto;
}
.subjects .subject-cont h3 {
    font-size: 15px;
}
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
.subjects .subject-cont h3 {
    font-size: 15px;
}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
