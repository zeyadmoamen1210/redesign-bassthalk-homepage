<template>
  <div>
    <div class="container">
      <Loading v-if="isLoading" />

      <div class="login" v-else>
        <div class="form-title">
          <h4>تحديد المسار</h4>
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
            type="button"
            :disabled="form.level==''||form.class==''||form.semester==''"
            @click="setLearningPath"
            value="ابدأ"
            class="basth-btn-primary"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  middleware: 'auth-student',
  name: 'SetStudentPath',
  components: {
    Loading,
  },

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
    // console.log(this.$auth.user.level)
    if (this.$auth.user.level > 0) {
      this.$router.push({ path: '/subjects' })
    }
    this.getSystems()
  },
  methods: {
    getSystems() {
      this.$axios
        .get(`systems`)
        .then((res) => {
          this.isLoading = false
          this.systems = res.data
          console.log('systems', res.data)
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
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
      // console.log('classes', this.form.level)
    },
    setLearningPath() {
      this.isLoading = true
      let pathData = {
        level: this.form.level.id,
        class: this.form.class.id,
        semester: this.form.semester.code,
      }
      this.$axios
        .put(`students/path`, pathData)
        .then((res) => {
          this.$router.push({ path: '/subjects' })
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/path.scss';
</style>
