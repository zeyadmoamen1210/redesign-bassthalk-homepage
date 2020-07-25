<template>
  <div>
    <div class="container">
      <div class="register" v-if="!showVerify">
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
              <v-select v-model="gender" label="name" placeholder="النوع" :options="options"></v-select>
            </div>

            <div class="col-md-2">
              <div class="form-groub">
                <v-select
                  v-model="country"
                  label="name"
                  placeholder="الدولة"
                  :options="countyOptions"
                ></v-select>

                <!-- <input v-model="country" type="text" class="form-control" placeholder="الدولة" /> -->
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
          <!-- <div class="two-way">
            <h6>او عن طريق</h6>
            <img src="../assets/imgs/facebook.png" alt />
            <img src="../assets/imgs/brands-and-logotypes.png" alt />
          </div>-->

          <div class="dont-have-acc">
            <div>
              <h6>ليس لديك حساب ؟</h6>
            </div>
            <div>
              <button @click="$router.push({ path: '/login' })">تسجيل الدخول</button>
            </div>
          </div>
        </div>
      </div>
      <div class="varifiy" v-else>
        <div class="row">
          <div class="col-md-6" style="margin: auto;">
            <div class="varified">
              <div class="form-title">
                <h4 style="margin-bottom: 20px;">
                  <img src="../assets/imgs/profile.png" style="width: 35px; margin-left: 9px;" alt />
                  كود التفعيل
                </h4>
              </div>
              <!-- <div class="form-groub" v-if="resend">
            <input v-model="email" type="text" class="form-control" placeholder="البريد الالكتروني" />
              </div>-->
              <!-- v-else -->
              <div class="form-groub" style="margin-bottom: 40px; margin-top: 40px;">
                <client-only placeholder="...تحميل ">
                  <CodeInput
                    :fields="count"
                    :loading="false"
                    class="input"
                    v-on:complete="onComplete"
                  />
                </client-only>
              </div>

              <input
                type="button"
                @click="verifyEmail"
                style="margin-bottom: 25px;"
                value="تفعيل"
                class="basth-btn-primary"
              />

              <div class="dont-have-acc">
                <div>
                  <h6>لم يتم إستلام الكود</h6>
                </div>
                <div style="text-align: left;">
                  <button @click="resendCode" class="light-btn">إعادة إرسال</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'

export default {
  middleware: 'guest',
  components: {
    CodeInput: () =>
      process.client
        ? import('vue-verification-code-input')
        : Promise.resolve({ render: () => h('div') }),
  },
  data() {
    return {
      count: 5,
      code: '',
      confirmPassword: '',
      isLoading: false,
      showVerify: false,
      options: [
        { name: 'ذكر', value: 'male' },
        { name: 'أنثي', value: 'female' },
      ],
      // Egypt SaudiArabia

      countyOptions: [
        { name: 'مصر', value: 'Egypt' },
        { name: 'السعودية', value: 'SaudiArabia' },
      ],

      name: '',
      email: '',
      password: '',
      role: 'student',
      phone: '',
      gender: '',
      country: '',
    }
  },
  created() {
    if (process.browser) {
      if (
        Cookies.get('account') &&
        JSON.parse(Cookies.get('account')).user.enabled == false
      ) {
        // this.$router.push({ path: '/verify' })

        if (Cookies.get('user')) {
          this.email = JSON.parse(Cookies.get('user')).email
          this.password = JSON.parse(Cookies.get('user')).password
        }
        this.showVerify = true

        // console.log(JSON.parse(localStorage.getItem('account')).user.enabled)
      }
    }
  },
  methods: {
    async register() {
      //console.log(this.Servies_Offer);
      this.isLoading = true

      let signUpForm = new FormData()
      signUpForm.append('username', this.name)
      signUpForm.append('password', this.password)
      signUpForm.append('email', this.email)
      signUpForm.append('phone', this.phone)
      signUpForm.append('role', this.role)
      signUpForm.append('gender', this.gender.value)
      signUpForm.append('country', this.country.value)

      await this.$axios
        .post('signup', signUpForm, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          Cookies.set('account', JSON.stringify(res.data), { expires: 7 })
          Cookies.set(
            'user',
            { email: this.email, password: this.password },
            { expires: 7 }
          )
          this.isLoading = false
          this.showVerify = true
        })
        .catch((error) => {
          this.isLoading = false
        })
    },
    resendCode() {
      this.isLoading = true

      this.$axios
        .post('resend', {
          email: this.email,
        })
        .then((res) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
        })
    },
    verifyEmail() {
      this.isLoading = true
      this.$axios
        .post('verify', {
          code: this.code,
          email: this.email,
        })
        .then((res) => {
          this.isLoading = false
          this.login()
        })
        .catch((error) => {
          this.isLoading = false
        })
    },
    async login() {
      this.isLoading = true

      await this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          this.isLoading = false

          Cookies.set('account', JSON.stringify(res.data), { expires: 365 })
          // localStorage.setItem('account', JSON.stringify(res.data))
          Cookies.remove('user')
          this.$router.push({ path: '/' })
        })
        .catch((error) => {
          this.isLoading = false

          //console.log(error.res);
        })
    },

    onComplete(code) {
      this.code = code
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/register.scss';
</style>
