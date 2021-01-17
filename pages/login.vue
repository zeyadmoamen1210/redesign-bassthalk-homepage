<template>
  <div>
    <div class="container">
      <Loading v-if="isLoading" />
      <!-- <ValidationObserver v-else v-slot="{ invalid }"> -->
      <div class="login" v-else>
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt />
            تسجيل دخول
          </h4>
        </div>
        <div class="form-groub">
          <!-- <ValidationProvider rules="required|email" v-slot="email"> -->
          <input
            v-model="form.email"
            type="email"
            name="email"
            class="form-control"
            placeholder="البريد الالكتروني أو رقم الجوال"
          />
          <!-- <div
            class="text-danger"
            style="font-family:'CustomFontLight';margin-bottom:20px"
            v-if="email.errors[0]"
          >{{ email.errors[0] }}</div>-->
          <!-- </ValidationProvider> -->
        </div>
        <div class="form-groub">
          <!-- <ValidationProvider rules="required|email" v-slot="email"> -->
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            placeholder="كلمة المرور"
          />
          <!-- <div
            class="text-danger"
            style="font-family:'CustomFontLight';margin-bottom:20px"
            v-if="email.errors[0]"
          >{{ email.errors[0] }}</div>-->
          <!-- </ValidationProvider> -->
        </div>
        <div class="forget-pass">
          <nuxt-link to="/reset-password">هل نسيت كلمة مرورك ؟</nuxt-link>
        </div>
        <!-- :disabled="invalid" -->
        <input type="button" @click="login" value="تسجيل الدخول" class="basth-btn-primary" />
        <div class="two-way">
          <h6>او عن طريق</h6>
          <!-- <img @click="loginWithGoogle" class="pointer" src="../assets/imgs/facebook.png" alt /> -->
          <img
            @click="loginWithGoogle"
            class="pointer"
            src="../assets/imgs/brands-and-logotypes.png"
            alt
          />
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
      <!-- </ValidationObserver> -->
    </div>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'
import Loading from '@/components/Loading'

// import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  middleware: 'guest',

  components: {
    Loading,
    // ValidationObserver,
    // ValidationProvider,
  },
  data() {
    return {
      isLoading: false,
      form: {
        email: '',
        password: '',
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
    async loginWithGoogle() {
      // this.isLoading = true
      await this.$auth
        .loginWith('google')
        .then((res) => {})
        .catch((e) => {
        })
    },
    async login() {
      this.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.form,
        })
        this.isLoading = false
        // Cookies.set('account', JSON.stringify(response.data), { expires: 365 })
        localStorage.removeItem('account');
        localStorage.setItem('account', JSON.stringify(response.data));
        this.$auth.setUser(response.data.user);
        if (this.$auth?.user?.class?.id) {
          this.$router.push({ path: '/subjects' })
        } else {
          this.$router.push({ path: '/path' })
        }

        this.$snotify.success(`مرحبا بك يا ${response.data.user.username}`)
      } catch (err) {
        this.isLoading = false

        this.$snotify.error(`عفوا من فضلك تاكد من اسم المستخدم وكلمة المرور`)
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/login.scss';
</style>
