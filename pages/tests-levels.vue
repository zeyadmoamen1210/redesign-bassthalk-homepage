<template>
  <div>
    <NavbarBefore />
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3>
            <img src="../assets/imgs/noun_testing_3325786.png" alt="">
             الأختبار</h3>
        </div>
       <div class="lesson-inner-grid">
         <h5 class="subject-name">
           <img src="../assets/imgs/laboratory.png" alt="">
           الكمياء</h5>
                <div class="unit lesson-unit">
                      <span>1</span>
                      <h6>الوحدة الأولي - الدرس الأول</h6>
                </div>
      </div>
      <div class="levels">
        <div class="row">
          <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img src="../assets/imgs/easy-level (1).png" alt="">
                <h6>المستوي السهل</h6>
                 <div class="c100 p25 small">
                    <span>25%</span>
                    <div class="slice">
                      <div class="bar"></div>
                      <div class="fill"></div>
                    </div>
                  </div>
            </div>
          </div>

           <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img style="margin-top:40px" src="../assets/imgs/easy-level (2).png" alt="">
                <h6>المستوي المتوسط</h6>
            </div>
          </div>

           <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img style="margin-top: 39px;" src="../assets/imgs/easy-level (3).png" alt="">
                <h6>المستوي الصعب</h6>
            </div>
          </div>
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
.tests-level{
  margin-top: 50px;
  .title{
    h3{
      color:#058ac6bd;
    }
  }
  .lesson-inner-grid{

    .unit{
       box-shadow: none;
        display: inline-block;
            margin-top: 0;
    }
    .subject-name{
          padding: 36px 0;
           margin-top: 0;
    padding-top: 0;
      display:inline-block
    }
  }
  .levels{
    .level-item{
      padding: 10px;
      text-align: center;
      min-height: 249px;
      h6{
            text-align: center;
    margin-top: 31px;
    font-size: 19px;
    color: #6e6e6e;
      }
    }
    .level-cicle{
      background-color: green;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      position: relative;
      z-index: -1;
      .inner-level-cicle{
        position: absolute;
        top: 5px;
        left: 5px;
        content: '';
        background-color: #FFF;
      }
    }
  }
}


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .tests-level{
    padding-top: 60px;
  }
.unit h6{
      font-size: 10px;
}
.lesson-inner-grid{
  margin-bottom: 24px;
}

.tests-level .levels .level-item{
      margin-bottom: 25px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
.tests-level {
    margin-top: 107px;
}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
