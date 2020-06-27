<template>
  <div>
    <div class="container">
      <div class="login">
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt="" />
            تسجيل دخول
          </h4>
        </div>
        <div class="form-groub">
          <input
            v-model="form.email"
            type="text"
            class="form-control"
            placeholder="البريد الالكتروني أو رقم الجوال"
          />
        </div>
        <div class="form-groub">
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            placeholder="كلمة المرور"
          />
        </div>
        <div class="forget-pass">
          <nuxt-link to="">
            هل نسيت كلمة مرورك ؟
          </nuxt-link>
        </div>
        <input
          type="button"
          @click="login"
          value="تسجيل الدخول"
          class="basth-btn-primary"
        />
        <div class="two-way">
          <h6>او عن طريق</h6>
          <img src="../assets/imgs/facebook.png" alt="" />
          <img src="../assets/imgs/brands-and-logotypes.png" alt="" />
        </div>

        <div class="dont-have-acc">
          <div>
            <h6>ليس لديك حساب ؟</h6>
          </div>
          <div>
            <button @click="$router.push({ path: '/register' })">
              انشاء حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        email: 'samehmourad05@gmail.com',
        password: '123456',
      },
    }
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.form,
        })
        localStorage.setItem('account', JSON.stringify(response.data))
        this.$router.push({ path: '/subjects' })
        // this.$snotify.success(`مرحبا بك يا ${response.data.user.username}`)
      } catch (err) {
        // this.$snotify.error(`عفوا من فضلك تاكد من اسم المستخدم وكلمة المرور`)
        console.log(err)
      }
    },
  },
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
