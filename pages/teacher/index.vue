<template>
  <div class="teacher-info">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h6 class="teacher-info-div">معلومات المدرس</h6>

          <div class="teacher-section">
            <div class="icon-teacher">
              <img
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3026791-inline-s-2-why-you-should-write-a-personal-mission-statement-and-5-ceos-who-did.jpg"
              />
            </div>
            <div class="content-teacher">
                <h5>أحمد محمود</h5>
            <span>لغة عربية</span>
            </div>

           
          </div>
           <h6 class="teacher-info-div">
                <nuxt-link :to="'/subjects/1/lectures'" style="font-family:'CustomFontBold';color: #676767;">
                    المحاضرات
                </nuxt-link>
            </h6>
        </div>
        
        <div class="col-md-6">
          <div class="teacher-buttons">
            <nuxt-link :to="'/live-details'">
                <button class="first-btn">
                    <!-- <img src="../../assets/imgs/live-red.png" alt="" />  --> تفاصيل البث
                </button>
            </nuxt-link>
            <nuxt-link :to="'/timeline'">
                   <button class="second-btn">
              <i class="fas fa-stream"></i>
              التايم لاين
            </button>
            </nuxt-link>
         
           <nuxt-link :to="'/general-exam-level'">
                <button class="last-btn">الإمتحانات العامة</button>
           </nuxt-link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.teacher-info {
  margin-top: 50px;
  .teacher-info-div {
    padding: 10px 15px;
    background-color: #eee;
    display: inline-block;
    color: #676767;
  }
  .teacher-section {
    overflow: hidden;
    padding: 15px 0;
    .icon-teacher {
      float: right;
      width: 100px;
      border-radius: 50%;
      overflow: hidden;
      padding: 2px;
      border: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .content-teacher{
        float: right;
        width: calc(100% - 100px);
        padding-top: 33px;
        padding-right: 15px;
        h5{
            font-family: "CustomFontBold";
            margin-bottom: 0;
        }
        span{
            font-family: "CustomFontMedium";
            color:#8c8c8c;
        }
    }
  }
  .teacher-buttons {
    button {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      text-align: center;
      padding: 15px 10px;
      font-size: 19px;
      border: 0;
      color: #fff;
      font-family: 'CustomFontBold';
      outline: none;
      
    }
    .first-btn {
        background: #f20333;
      }
      .second-btn {
        background: #068ccb;
      }
      .last-btn {
        background: #068ccb;
      }
  }
}
</style>
