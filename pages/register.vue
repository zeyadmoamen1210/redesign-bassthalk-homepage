<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login" v-if="showVerify">
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/Group 6945.png" alt />
            انشاء حساب جديد
          </h4>
        </div>
        <div class="form-grid">
          <div class="row">
            <div class="col-md-4">
              <div class="form-groub">
                <input v-model="name" type="text" class="form-control" placeholder="اسم المستخدم " />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-groub">
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  placeholder="البريد الالكتروني"
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-groub">
                <input v-model="phone" type="text" class="form-control" placeholder="رقم الجوال" />
              </div>
            </div>

            <div class="col-md-2">
              <div class="form-groub">
                <input v-model="gender" type="text" class="form-control" placeholder="الجنس" />
              </div>
            </div>

            <div class="col-md-2">
              <div class="form-groub">
                <input v-model="country" type="text" class="form-control" placeholder="الدولة" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-groub">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="كلمة المرور"
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-groub">
                <input
                  v-model="confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="تأكيد كلمة المرور"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="form-bottom">
          <input type="button" @click="register" value="انشاء حساب جديد" class="basth-btn-primary" />
          <div class="two-way">
            <h6>او عن طريق</h6>
            <img src="../assets/imgs/facebook.png" alt />
            <img src="../assets/imgs/brands-and-logotypes.png" alt />
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
      </div>
      <div class="login" v-else>
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt />
            كود التفعيل
          </h4>
        </div>
        <!-- <div class="form-groub" v-if="resend">
            <input v-model="email" type="text" class="form-control" placeholder="البريد الالكتروني" />
        </div>-->
        <!-- v-else -->
        <div class="form-groub">
          <input v-model="code" type="text" class="form-control" placeholder="كود التفعيل" />
        </div>

        <input type="button" @click="verifyEmail" value="تفعيل" class="basth-btn-primary" />

        <div class="dont-have-acc">
          <div>
            <h6>لم يتم إستلام الكود</h6>
          </div>
          <div>
            <button @click="resendCode">إعادة إرسال</button>
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
  components: {
    NavbarBefor,
    Footer
  },
  data() {
    return {
      code:'',
      confirmPassword:'',
      isLoading:false,
      showVerify:false,
    
        name:'',
        email:'samehmourad05@gmail.com',
        password:'123456',
        role:'student',
        phone:'',
        gender:'',
        country:'',
      
    }
    
  },
  methods:{
     async register() {
      //console.log(this.Servies_Offer);
      this.isLoading=true

        let signUpForm = new FormData();
        signUpForm.append("username", this.name);
        signUpForm.append("password", this.password);
        signUpForm.append("email", this.email);
        signUpForm.append("phone", this.phone);
        signUpForm.append("role", this.role);
        signUpForm.append("gender", this.gender);
        signUpForm.append("country", this.country);
 await this.$axios
          .post("signup", signUpForm, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            this.isLoading=false
            this.showVerify=true;

          })
          .catch(error => {
                  this.isLoading=false
          });

     
    },
    resendCode(){
       this.isLoading=true

 this.$axios
          .post("resend",
            {
              email: this.email
            }).then(res => {
                        this.isLoading=false
                       
          })
          .catch(error => {
                  this.isLoading=false

          });
    },
    verifyEmail(){
       this.isLoading=true
       this.$axios
          .post("verify",
            {
              code : this.code,
              email: this.email
            }).then(res => {
                        this.isLoading=false
                        this.login();
          })
          .catch(error => {
                  this.isLoading=false

          });
          },
            async login() {
            this.isLoading=true

      
        await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          })
          .then(res => {
                  this.isLoading=false
 localStorage.setItem("account", JSON.stringify(res.data));
        this.$router.push({ path: "/" });

          }) .catch(error => {
                  this.isLoading=false

            
            //console.log(error.res);
          });

       
      
    }

    

  }
}
</script>

<style lang="scss">
.login {
  margin: 100px auto;
  input {
    margin: 10px 0;
  }
  .form-bottom {
    width: 35%;
    margin: 25px auto;
  }
  .forget-pass {
    text-align: left;
    a {
      text-align: left;
      font-family: 'CustomFontRegular';
    }
  }
  .form-title {
    h4 {
      margin: 25px 0;
      text-align: center;
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
    padding-top: 60px;
  }
  .login .form-bottom {
    width: 88%;
  }
  .login .dont-have-acc > div button {
    text-align: center;
  }
  .login .dont-have-acc > div h6 {
    margin: 0;
  }
  .login .dont-have-acc > div {
    display: block;
    text-align: center;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .login {
    padding-top: 60px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .login .dont-have-acc > div h6 {
    margin: 0;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
