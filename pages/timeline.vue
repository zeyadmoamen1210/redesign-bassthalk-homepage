<template>
  <div>
    <NavbarBefore />

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

            </div>


        </div>

      </div>


      <div class="time-line">
        <div class="time-line-comment-teacher">
          <div class="item">
            <div class="teacher">
              <img src="../assets/imgs/teacher-100316.jpg" alt="">
              <img src="../assets/imgs/live-red.png" alt="">
            </div>
            <div class="item-content">
              <h6>الاستادة / ميادة رفعت</h6>
            </div>
          </div>
          <div class="item"></div>
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
.live-details{
  margin-top: 50px;
  .title{
    padding-top:15px;
    h4{
      color:#058ac6bd;
    }
  }
}
 .lesson-btns{
      padding: 0 44px;
    button{
          width: 100%;
    text-align: center;
    background: #058ac6;
    border-radius: 9px;
    border: 0;
    padding: 13px;
    font-family: "CustomFontBold";
    color: #FFF;
    }
    .explain-btn{
      background: #DDD;
      color:#333;
    }
  }

  .time-line{
    margin-top: 30px;

       .teacher{
        height: 58px;
    width: 63px;
    border-radius: 50%;
    border: 3px solid rgba(5, 138, 198, 0.74118);
    padding: 6px;
    background: #ebebeb;
    position: relative;
    margin: 12px;
    float: left;
      img{
        &:first-of-type{
              width: 100%;
    border-radius: 50%;
    height: 100%;
    position: absolute;
    top: 1px;
    left: 0;
        }
        &:last-of-type{
                  position: absolute;
    top: -8px;
    z-index: 3;
    left: -19px;
    width: 42px;
        }
      }
    }


  }
</style>
