<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt />
            كود التفعيل
          </h4>
        </div>
        <form action>
          <div class="form-groub">
            <input type="text" class="form-control" placeholder="كود التفعيل" />
          </div>

          <input type="submit" value="تفعيل" class="fullWidthBtn" />

          <div class="dont-have-acc">
            <div>
              <h6>لم يتم إستلام الكود</h6>
            </div>
            <div>
              <button>إعادة إرسال</button>
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
.login {
  width: 35%;
  margin: 100px auto;
  h4 {
    text-align: center;
    margin-bottom: 30px;
    color: #444;
  }
  input {
    margin: 10px 0;
  }
  .forget-pass {
    text-align: left;
    a {
      text-align: left;
      font-family: 'CustomFontRegular';
    }
  }
  .two-way {
    text-align: center;
    margin-top: 13px;
    margin-bottom: 13px;
    h6 {
      margin-bottom: 13px;
      text-align: center;
    }
    img {
      margin: 0 10px;
    }
  }
  .dont-have-acc {
    > div {
      display: inline-block;
      h6 {
        display: inline-block;
        margin-left: 153px;
      }
      button {
        padding: 7px 13px;
        background: #fff;
        border: 1px solid #058ac6bd;
        color: #058ac6bd;
        font-family: 'CustomFontRegular';
      }
    }
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .login {
    width: 85%;
    padding-top: 60px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .login {
    padding-top: 60px;
    width: 60%;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .login {
    width: 60%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
