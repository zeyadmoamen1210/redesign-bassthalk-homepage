<template>
  <div>
    <div class="general-exam-join">
      <div class="container">
        <div class="title">
          <h4>
            <img src="../assets/imgs/noun_edit_-1.png" alt />
            تعديل بياناتي
          </h4>
        </div>

        <p>تغير كلمة المرور</p>

        <div class="general-exam-grid">
          <div class="row">
            <div class="col-md-6">
              <div class="general-exam-item">
                <img src="../assets/imgs/change password.png" alt />
              </div>
            </div>

            <div class="col-md-6">
              <form @submit.prevent>
                <div class="form-groub">
                  <input
                    type="text"
                    v-model="email"
                    class="form-control"
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div v-if="showVerify">
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
                  <div class="form-groub">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder=" كلمة المرور الجديدة"
                    />
                  </div>
                  <input
                    type="button"
                    @click="verifyEmail"
                    class="basth-btn-primary"
                    value=" تغير كلمة المرور "
                  />
                </div>
                <input
                  v-if="!showVerify"
                  type="button"
                  @click="resendCode"
                  class="basth-btn-primary"
                  value="إرسال كود التأكيد"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  middleware: 'guest',
  components: {
    Loading,
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
    }
  },
  methods: {
    verifyEmail() {
      this.isLoading = true
      this.$axios
        .post('reset-password', {
          code: this.code,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.isLoading = false
          // this.login()
          this.$router.push({ path: '/login' })

          this.$snotify.success(` تم تغير كلمة المرور بنجاح `)
        })
        .catch((error) => {
          this.$snotify.error(`عفواً من فضلك تأكد من الكود  `)
          this.isLoading = false
        })
    },
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
          this.$snotify.error(`عفوا من فضلك تحديد البيانات بشكل صحيح`)

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
          this.$snotify.success(`تم إرسال الكود بنجاح  `)
          this.showVerify = true
          this.isLoading = false
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
          if (this.$auth?.user?.class?.id) {
            this.$router.push({ path: '/subjects' })
          } else {
            this.$router.push({ path: '/path' })
          }
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
@import '../assets/sass/edit-password.scss';
@import '../assets/sass/register.scss';
</style>
