<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
      <div class="form-title">
        <h4>انشاء حساب جديد</h4>
      </div>
      <form action="">
        <div class="form-grid">
          <div class="row">
            <div class="col-md-4">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="اسم المستخدم ">
            </div>
           </div>

            <div class="col-md-4">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="البريد الالكتروني">
            </div>
           </div>

           <div class="col-md-4">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="رقم الجوال">
            </div>
           </div>

            <div class="col-md-2">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="الجنس">
            </div>
           </div>

            <div class="col-md-2">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="الدولة">
            </div>
           </div>

            <div class="col-md-4">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="كلمة المرور">
            </div>
           </div>

           <div class="col-md-4">
              <div class="form-groub">
              <input type="text" class="form-control" placeholder="تأكيد كلمة المرور">
            </div>
           </div>

         </div>
       </div>

        <div class="form-bottom">
          <input type="submit" value="انشاء حساب جديد" class="fullWidthBtn">
        <div class="two-way">
          <h6>او عن طريف</h6>
          <img src="../assets/imgs/facebook.png" alt="">
          <img src="../assets/imgs/brands-and-logotypes.png" alt="">
        </div>

        <div class="dont-have-acc">
          <div>
            <h6>ليس لديك حساب ؟</h6>
          </div>
          <div>
            <button>تسجيل الدخول</button>
          </div>
        </div>
        </div>
      </form>
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
  .login{

    margin:100px auto;
    input{
      margin: 10px 0;
    }
    .form-bottom{
      width: 35%;
      margin: 25px auto;
    }
    .forget-pass{
      text-align: left;
      a{
        text-align: left;
        font-family: "CustomFontRegular";
      }
    }
    .form-title{
      h4{
        margin: 25px 0;
        text-align: center;
      }
    }
    .two-way{
          text-align: center;
          margin-top: 13px;
          margin-bottom: 13px;
          h6{
            margin-bottom: 13px;
            text-align: center;
          }
          img{
            margin: 0 10px;
          }
    }
    .dont-have-acc{
      >div{
        display: inline-block;
        h6{
              display: inline-block;
    margin-left: 140px;
        }
        button{
              padding: 7px 13px;
    background: #FFF;
    border: 1px solid #058ac6bd;
    color: #058ac6bd;
    font-family: "CustomFontRegular";
        }
      }
    }
  }
</style>
