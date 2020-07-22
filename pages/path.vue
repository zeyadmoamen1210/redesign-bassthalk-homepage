<template>
  <div>
    <div class="container">
      <div class="login">
        <div class="form-title">
          <h4>تحديد المسار</h4>
        </div>
        <form @submit.prevent>
          <div class="first-select">
            <h6>حدد نظام التعليم</h6>
            <!--
            <select class="custom-select-lg mb-3" @change="systemChange()" v-model="form.system">
              <option value>حدد نظام التعليم</option>

              <option
                v-for="(system, index) in systems"
                :key="index"
                :value="system.id"
                >{{ system.nameAr }}</option
              >
            </select>
            -->
            <v-select
              v-model="form.system"
              label="nameAr"
              @input="systemChange"
              :options="systems"
            ></v-select>
          </div>
          <div class="first-select">
            <h6>اختر المرحلة الدراسية</h6>
            <!--
            <select class="custom-select-lg mb-3" @change="levelChange()" v-model="form.level">
              <option value>حدد المرحلة</option>
              
              <option
                v-for="(level, index) in levels"
                :key="index"
                :value="level.id"
                >{{ level.nameAr }}</option
              >
            </select>
            -->
            <v-select
              v-model="form.level"
              @input="levelChange"
              label="nameAr"
              :options="levels"
            ></v-select>
          </div>
          <div class="first-select">
            <h6>اختر الصف الدراسي</h6>
            <!--
            <select class="custom-select-lg mb-3">
              <option value>حدد الصف</option>
              <option
                v-for="(item, index) in classes"
                :key="index"
                :value="item.id"
                >{{ item.nameAr }}</option
              >
            </select>
            -->
            <v-select
              v-model="form.class"
              label="nameAr"
              :options="classes"
            ></v-select>
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
    console.log(this.$auth.user.level)
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
      this.$axios
        .put(`students/path`, this.form)
        .then((res) => {
          this.isLoading = false
          this.$router.push({ path: '/subjects' })
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/path.scss';
</style>
