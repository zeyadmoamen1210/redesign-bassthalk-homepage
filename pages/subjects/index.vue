<template>
  <div>
    <div class="container">
      <div class="subjects">
        <div class="form-title">
          <h4>
            <img src="../../assets/imgs/noun_classroom_-1.png" alt />
            المواد الدراسية
          </h4>
        </div>
        <div class="row">
          <div
            class="col-md-3"
            v-for="(subject, index) in subjects"
            :key="index"
          >
            <nuxt-link :to="'/subjects/' + subject.id + '/units'">
              <div class="subject-cont">
                <div class="subject-icon-img">
                  <img :src="subject.icon" alt />
                </div>
                <h3>{{ subject.nameAr }}</h3>
              </div>
            </nuxt-link>
          </div>

          <!-- 
        <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont math">
                <img src="../../assets/imgs/Blueprint-Cogwheel-Plan-Architecture-Construction-1.png" alt="">
                <h3>الهندسة</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont arab">
                <img src="../../assets/imgs/Page-3.png" alt="">
                <h3>اللغة العريبة</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont math2">
                <img src="../../assets/imgs/Page-4.png" alt="">
                <h3>الجبر</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont eng">
                <img src="../../assets/imgs/education-1.png" alt="">
                <h3>اللغة الانجليزية</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont history">
                <img src="../../assets/imgs/Outline-1.png" alt="">
                <h3>التاريخ</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont physic">
                <img src="../../assets/imgs/magnets-1.png" alt="">
                <h3>الفزياء</h3>
              </div>
            </nuxt-link>
        </div>

          <div class="col-md-3">
            <nuxt-link to="">
              <div class="subject-cont geo">
                <img src="../../assets/imgs/planet-earth-1.png" alt="">
                <h3>الجغرافية</h3>
              </div>
            </nuxt-link>
          </div>-->

          <div class="annoncment" style="width: 100%; height: 200px;">
            <img
              src="../../assets/imgs/Why-You-Should-Be-Focusing-Your-Marketing-Efforts-On-Mobile-Advertising-And-Social-Media.jpg"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-student',

  data() {
    return {
      subjects: [],
    }
  },
  created() {
    this.getSubjects()
  },
  methods: {
    getSubjects() {
      this.$axios
        .get(`subjects`)
        .then((res) => {
          this.isLoading = false
          this.subjects = res.data
          console.log(res)
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
@import '../../assets/sass/subject-dynamic.scss';
</style>
