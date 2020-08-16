<template>
  <div class="footer">
    <div class="container">
      <div class="foot" style="overflow:hidden">
        <div class="row">
          <div class="col-md-3 col-6 col-sm-6">
            <ul>
              <li>
                <nuxt-link exact-active-class="active" to="/subjects">المواد الدراسية</nuxt-link>
              </li>
              <li>تواصل معنا</li>
              <li>الرئيسية</li>

              <li>
                <nuxt-link exact-active-class="active" to="/info-bank">بنك المعلومات</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-md-3 col-6 col-sm-6">
            <ul>
              <li>
                <nuxt-link exact-active-class="active" to="/live-teach">البث المباشر</nuxt-link>
              </li>
              <li>امتحانات الدروس</li>
              <li>شركاؤنا</li>
              <li>عن بسطتهالك</li>
            </ul>
          </div>

          <div class="col-md-3 col-12 col-sm-6">
            <ul>
              <li class="mobile-center" style="text-align:center">
                <nuxt-link exact-active-class="active" to="/best-students">المتفوقين</nuxt-link>
              </li>
              <!-- <li>واجهتنا</li> -->
              <li class="mobile-center" style="text-align:center">حمل التطبيق</li>
              <li class="mobile-center" style="text-align:center">المعلمين</li>
            </ul>
          </div>


           <div class="col-md-3">
              <div class="foot-item" style="color:#FFF;font-family:'CustomFontBold'">
                <h5 style="color:#FFF">
                  حمل التطبيق مجانا
                </h5>
                <p style="margin-bottom: 10px;color:#FFF;font-family:'CustomFontRegular'">لتتمكن من الوصول لكل جديد</p>
                <div class="mobil-apps" style="">
                  <div class="row">
                    <div class="col-md-6" style="padding: 6px;">
                         <div class="android" style="text-align:center">
                          <img style="width: 124px;height: 35px;cursor: pointer;margin: auto;text-align: center;" src="@/assets/imgs/android-logo.png">
                        </div>
                    </div>
                      <div class="col-md-6" style="padding: 6px;">
                    <div class="ios" style="text-align:center">
                    <img style=" width: 124px;height: 35px;cursor: pointer;margin: auto;text-align: center;" src="@/assets/imgs/ios-logo.png">
                  </div>
                  </div>
                  </div>
               
                
                </div>
              </div>
            </div>


         

          <div class="copyright">
            <hr />
            <hr />
            <p>جميع الحقوق محفوظة - بسطتهالك 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  
  .mobil-apps{
    padding: 0 36px !important;
    padding-right: 0 !important;
  }
  background: url('../assets/imgs/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 2px;
  min-height: 29vh;
  margin-top: 100px;
  .foot {
    padding-top: 190px;
    ul {
      margin-bottom: 45px;
      list-style-type: none;
      li {
        a {
          color: #fff !important;
        }
        color: #fff;
        margin-bottom: 10px;
        font-family: 'CustomFontMedium';
        position: relative;
        &::after {
          position: absolute;
          content: '';
          right: -27px;
          top: 7px;
          background: #fff;
          height: 9px;
          width: 15px;
          border-radius: 13px;
        }
      }
    }
  }
  
  .copyright {
    margin: 24px auto 0;
    width: 44%;
    text-align: center;
    hr {
      background: #fff;
      &:last-of-type {
        width: 90%;
        text-align: center;
        margin: -11px 32px;
      }
    }
    p {
      margin: 23px;
      display: inline-block;
      text-align: center;
      color: #fff;
      font-family: 'CustomFontRegular';
    }
  }
}


@media (max-width: 575px) {
   .footer{
      .copyright{
      width: 90% !important;
    }
   }
   .mobil-apps{
    padding: 0  !important;
    padding-right: 0 !important;
  }
  }
</style>
