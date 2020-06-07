<template>
  <div>
    <NavbarBefore />
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
import NavbarBefore from '../components/NavbarBefore'
export default {
components:{
  NavbarBefore
}
}
</script>

<style lang="scss">
.notifications{
      margin-top: 50px;
      .title{
        h4{
          color: #058ac6;
        }
      }
   .time-course{
            overflow: hidden;
    box-shadow: 2px 1px 11px 2px #DDD;
    padding: 13px 0;
    border-radius: 7px;
    margin-top: 20px;
        .teacher{
        height: 70px;
    width: 77px;
    border-radius: 50%;
    border: 3px solid rgba(5, 138, 198, 0.74118);
    padding: 4px;
    background: #ebebeb;
    position: relative;
      img{
        &:first-of-type{
               width: 96%;
    border-radius: 50%;
    height: 97%;
    position: absolute;
    top: 1px;
    left: 1px;
        }
        &:last-of-type{
               position: absolute;
    top: -8px;
    z-index: 3;
    left: -18px;
    width: 52px;
        }
      }
    }

    >div{
     width:33.333%;
     float: left;
     &:first-of-type{
         margin-top: 20px;
    text-align: left;
    margin-left: 16px;
    width: 16%;

       img{
         display: inline-block;
       }
       h6{
               text-align: center;
    display: inline-block;
    padding: 10px 0;
    color: #9e9e9e;
    font-family: "CustomFontRegular";
       }
     }
     &:nth-of-type(2){
         margin-top: 13px;
    width: 59%;
     }
     &:last-of-type{
       width: 17%;
     }
    }
      }
}


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
   .notifications .time-course > div:nth-of-type(2){
        width: 43% !important;
  }
  .notifications .time-course .teacher{
        height: 59px;
    width: 64px;
  }
  .notifications{
    padding-top: 60px;
  }
.notifications .time-course > div:nth-of-type(2){
  margin-top: 10px;
    width: 49%;
    margin-right: 37px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
.notifications .time-course > div:nth-of-type(2){
      margin-top: 13px;
    width: 50%;
    margin-right: 36px;
}
  .notifications{
    padding-top: 60px;
  }

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
