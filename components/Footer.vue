<template>
  <div class="footer">
    <div class="container">
      <div class="foot" style="overflow:hidden">
        <div class="row">
          <div class="col-md-3 col-6 col-sm-6">
            <ul>
              <li>الرئيسية</li>
              <li>من نحن</li>
              <li>رؤيتنا</li>
              <li>المتفوقين</li>
            </ul>
          </div>

           <div class="col-md-3 col-6 col-sm-6">
            <ul>
              <li>حمل التطبيق</li>
              <li>أسئلة و أجوبة</li>
              <li>مشاركتنا</li>
              <li>سجل النقاط</li>
            </ul>
          </div>

           <div class="col-md-3 col-6 col-sm-6">
            <ul>
              <li>بنك المعلومات</li>
              <li>الأمتحانات العامة</li>
              <li>بث مباشر</li>

            </ul>
          </div>

           <div class="col-md-3 col-6 col-sm-3">
            <ul>
              <li>تابعنا علي</li>
            </ul>
            <div>

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
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  background: url('../assets/imgs/footer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 2px;
    min-height: 29vh;
    margin-top: 100px;
    .foot{
          padding-top: 136px;
          ul{
            margin-bottom: 45px;
            list-style-type: none;
            li{
              color:#FFF;
              margin-bottom: 10px;
              font-family: "CustomFontMedium";
              position: relative;
              &::after{
                   position: absolute;
    content: '';
    right: -27px;
    top: 7px;
    background: #FFF;
    height: 9px;
    width: 15px;
    border-radius: 13px;
              }

            }
          }
    }
    .copyright{
          margin: 24px auto 0;
    width: 44%;
    text-align: center;
    hr{
      background: #FFF;
    &:last-of-type{
          width: 90%;
    text-align: center;
    margin: -11px 32px;
    }
    }
    p{
          margin: 23px;
          display: inline-block;
    text-align: center;
    color: #FFF;
    font-family: "CustomFontRegular"
    }
    }
}
</style>
