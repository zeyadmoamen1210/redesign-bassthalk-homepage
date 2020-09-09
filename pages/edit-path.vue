<template>
  <div>
    <div class="container">
      <div class="login">
        <div class="form-title">
          <h4>تحديث المسار الدراسي</h4>
        </div>
        <form @submit.prevent>
          <div class="first-select">
            <h6>حدد نظام التعليم</h6>

            <v-select v-model="form.system" label="nameAr" @input="systemChange" :options="systems"></v-select>
          </div>
          <div class="first-select">
            <h6>اختر المرحلة الدراسية</h6>

            <v-select v-model="form.level" @input="levelChange" label="nameAr" :options="levels"></v-select>
          </div>
          <div class="first-select">
            <h6>اختر الصف الدراسي</h6>

            <v-select v-model="form.class" label="nameAr" :options="classes"></v-select>
          </div>
          <div class="first-select">
            <h6>اختر الترم</h6>

            <v-select
              v-model="form.semester"
              :options="[
                { label: 'الأول', code: 'first' },
                { label: 'الثاني', code: 'second' },
              ]"
            ></v-select>
          </div>
          <input
            :disabled="form.level==''||form.class==''||form.semester==''"
            type="button"
            @click="updateLearningPath"
            value="تحديث المسار الدراسي"
            class="basth-btn-primary"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-student',

  data() {
    return {
      isLoading: false,
      systems: [],
      levels: [],
      classes: [],
      form: {
        system: '',
        level: '',
        class: '',
        semester: '',
      },
    }
  },
  created() {
    // if (this.$auth?.user?.role == 'student') {
    // } else {
    //   this.$router.push({ path: '/' })
    // }
    this.getSystems()
  },
  methods: {
    getSystems() {
      this.$axios
        .get(`systems`)
        .then((res) => {
          this.isLoading = false
          this.systems = res.data
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
    systemChange() {
      this.form.level = ''
      this.levels = []
      this.levels = this.systems.find((system) => {
        return system.id === this.form.system.id
      }).levels
    },
    levelChange() {
      this.form.class = ''
      this.classes = []
      this.classes = this.levels.find((level) => {
        return level.id === this.form.level.id
      }).classes
    },
    updateLearningPath() {
      this.isLoading = true
      let pathData = {
        level: this.form.level.id,
        class: this.form.class.id,
        semester: this.form.semester.code,
      }
      this.$axios
        .put(`students/path`, pathData)
        .then((res) => {
          this.isLoading = false
          this.$snotify.success(`تم تحديث المسار الدراسي بنجاح`)
          setTimeout(async () => {
            setTimeout(async () => {
              await this.$auth.fetchUser()
              this.$router.push({ path: '/subjects' })
            })
          })
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/path.scss';
</style>
