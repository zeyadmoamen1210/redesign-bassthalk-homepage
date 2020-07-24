<template>
  <div>
    <div class="container">
      <Loading v-if="isLoading" />
      <div class="login" v-else>
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt />
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
          <nuxt-link to>هل نسيت كلمة مرورك ؟</nuxt-link>
        </div>
        <input type="button" @click="login" value="تسجيل الدخول" class="basth-btn-primary" />
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
            <button @click="$router.push({ path: '/register' })">انشاء حساب</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'
import Loading from '@/components/Loading'

export default {
  middleware: 'guest',

  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      form: {
        email: 'samehmourad05@gmail.com',
        password: '123456',
      },
    }
  },
  created() {
    if (process.browser) {
      if (!Cookies.get('account')) {
      } else if (
        Cookies.get('account') &&
        JSON.parse(Cookies.get('account')).user.enabled == true
      ) {
        // return redirect('/login');
      } else {
        this.$router.push({ path: '/register' })
      }
    }
  },
  methods: {
    async login() {
      this.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.form,
        })
        this.isLoading = false
        Cookies.set('account', JSON.stringify(response.data), { expires: 365 })
        this.$router.push({ path: '/subjects' })

        this.$snotify.success(`مرحبا بك يا ${response.data.user.username}`)
      } catch (err) {
        this.isLoading = false

        this.$snotify.error(`عفوا من فضلك تاكد من اسم المستخدم وكلمة المرور`)
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/login.scss';
</style>
