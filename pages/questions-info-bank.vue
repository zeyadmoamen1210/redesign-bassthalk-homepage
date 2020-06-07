<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="question-bank">
        <div class="title">
          <h6> بنك المعلومات</h6>
        </div>
        <div class="question-title">
           <div class="lesson-inner-grid">
                <div class="unit lesson-unit">
                      <div style="display:inline-block; position:relative">
                        <div>1</div>
                        <img style="height: 53px;" src="../assets/imgs/info-next.png" alt="">
                      </div>
                      <h6>السؤال الأول</h6>
                        <div class="question-timer">
                  <h6>28:00
                    <img src="../assets/imgs/question-timer.png" alt="">
                  </h6>
                </div>
                </div>

      </div>
        </div>

     <div class="question-head" style="overflow:hidden">
       <div class="question-head-one">
         <h6  style="text-align:left">
           <img style="width: 196px;" src="../assets/imgs/right.png" alt="">
         </h6>
       </div>
        <div class="question-head-one" style="padding: 35px 0;">
        <h6 style="color: #6c6c6c;">صيغة السؤال هي الأختيار ما بين 3 اختيارت  ؟</h6>
       </div>
     </div>


     <div class="question-head" style="overflow:hidden">
       <div class="question-head-one" style="padding-left:41px">
         <h6  style="text-align:lefttext-align: left; left: 34px;">

           <span style="font-size: 29px;display: block;width: 72px;float: left; margin-top: 9px;color:#056c9e">30+</span>
            <img style="display:block;float:left" src="../assets/imgs/point.png" alt="">
         </h6>
       </div>
        <div class="question-head-one">
        <div class="buttons">
          <div class="row">
            <div class="col-md-4">
              <button class="first" style="width:100%">اجابة 1</button>
            </div>
             <div class="col-md-4">
              <button style="width:100%">اجابة 2</button>
            </div>
             <div class="col-md-4">
              <button style="width:100%">اجابة 3</button>
            </div>
          </div>
          <button class="fullWidthBtn">التالي</button>
        </div>
       </div>
     </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBefor from '../components/NavbarBefore'
import Footer from '../components/Footer'

export default {
components:{
  NavbarBefor,
  Footer
}
}
</script>

<style lang="scss">
.question-bank{

  .title{
    h6{
          padding: 31px 0 0;
     color: #056c9e;
    font-size: 20px;
    }
  }
  .unit{
    box-shadow: none;
  }
  .question-head{
   .question-head-one{
         width: 50%;
    float: left;

   }
  }
  .unit.lesson-unit{

    div{
      >div{
            position: absolute;
    top: 13px;
    left: 20px;
    font-size: 18px;
    color: #FFF;
    font-family: "CustomFontBold";
      }
    }
  }
  .question-status{
    width: 50%;
    text-align: left;
    float: left;
  }
  .question-timer{
    width: 50%;
    float: left;
    text-align: left;
    h6{
        padding: 13px 62px;
    border: 1px solid #ffb341;
    border-radius: 4px;
    position: relative;
    img{
      position: absolute;
    top: 4px;
    right: -13px;
    height: 26px;
    }
    }
  }

  .question-head-one{
    .buttons{
      .first{
            text-align: center;
    font-family: "CustomFontRegular";
    border: 1px solid #ddd;
    background-color: #00aa00;
    transition: all .5s ease;
    padding: 12px 1px;
    border-radius: 10px;
    font-family: "CustomFontBold";
    color: #FFF;
        &:hover{
          background-color:#FFF ;
          color: #333;


      }
      }
      button{
        text-align: center;
        font-family: "CustomFontRegular";
        border: 1px solid #ddd;
        background-color:#fff ;
        transition: all .5s ease;
        padding: 12px 1px;
        border-radius: 10px;
        &:hover{
          background-color:#00aa00 ;
          color: #FFF;
        font-family: "CustomFontBold";

        }
      }
    }
  }
  .fullWidthBtn{
    display: block;
    width: 100%;
    text-align: center;
    padding: 13px;
    border-radius: 6px;
    border: 0;
    color: #FFF;
    background-color: #058ac6 !important;
    font-family: "CustomFontRegular" !important;
    margin-top: 40px;
        padding: 13px 1px !important;
    border-radius: 7px !important;
  }
}



// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.question-bank{
  padding-top: 60px;
}
.unit h6 {
    font-size: 10px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
.question-bank{
  padding-top: 60px;
}
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
