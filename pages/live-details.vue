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
              <div class="next-live">
                <h6>
                  البث القادم</h6>
                 <div class="live-time-last">
                  <h6 style="text-align:right;color:#f5355c">متبقي</h6>
                  <div class="live-time">
                    <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>ثانية</h6>
                      <span>5</span>
                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>دقيقة</h6>
                      <span>5</span>

                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>ساعة</h6>
                      <span>5</span>

                    </div>
                     <div>
                      <img src="../assets/imgs/live-timer.png" alt="">
                      <h6>يوم</h6>
                      <span>5</span>

                    </div>
                  </div>

                </div>

                <div class="teacher">
                  <img src="../assets/imgs/teacher-100316.jpg" alt="">
                  <img src="../assets/imgs/live-red.png" alt="">
                </div>

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
              <div class="you-can-follow" style="margin-top: 50px;">
                <h6>كما يمكنك متابعة</h6>
                <button>
                  <img src="../assets/imgs/noun_Table_1158645.png" alt="">
                  جدول مواعيد البث</button>
                <button>
                  <img src="../assets/imgs/noun_Save_3324346.png" alt="">
                  مواعيد البث المحفوظة</button>

              </div>
            </div>

        </div>
         <h5>شرح المخطوطات الهندسية</h5>
                  <h5>أستاذة / ميادة رفعت</h5>
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
    h4{
      color:#058ac6bd;
    }
  }
  .next-live{
    margin-top: 50px;
    h6{
          font-size: 20px;
    color: #4f4f4f;
    margin-bottom: 30px;
    }
    .teacher{
      height: 126px;
    width: 126px;
    border-radius: 50%;
    border: 2px solid #058ac6bd;
    padding: 4px;
    background: #ebebeb;
    position: relative;
    margin-top: 52px;
      img{
        &:first-of-type{
          width: 93%;
    border-radius: 50%;
    height: 93%;
    position: absolute;
        }
        &:last-of-type{
              position: absolute;
    top: -8px;
    z-index: 3;
    left: -18px;
    width: 68px;
        }
      }
    }
    .live-time-last{
          width: 66%;
    float: left;
    margin-top: 15px;
      h6{
        &:first-of-type{
            margin-bottom: 17px;
    color: #f5355c;
        }
         &:last-of-type{
          margin-bottom: 17px;
    color: #333;
    margin-top: 10px;
    text-align: center;
        }
      }
      .live-time{
        overflow: hidden;
            width: 280px;
        >div{
          width: 25%;
          float: left;
          text-align: center;
          position: relative;
          span{
                position: absolute;
    top: 16px;
    left: 30px;
    color: #FFF;
    font-weight: bold;
    font-family: "CustomFontBold";
          }
        img{
          width: 79%;
        }
        }

      }

    }
  }
    h5{
    font-family: "CustomFontRegular";
    font-weight: bold;
    &:first-of-type{
                    margin-top: 25px;

    }
        }

        .you-can-follow{
          margin-top: 50px;
    border-right: 3px solid #058ac6;
    padding-right: 10px;
          h6{
                font-size: 23px;
    margin-bottom: 15px;
    color: #535353;
          }
          button{
                   width: 100%;
    padding: 13px 0;
padding-right: 11px;
    border: 0;
    box-shadow: 1px 1px 13px 1px #DDD;
    background: #FFF;
    border-radius: 7px;
    margin-bottom: 13px;
    font-family: "CustomFontMedium";
    color: #4f4f4f;
    img{
      margin-left: 14px;
    }
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
</style>
