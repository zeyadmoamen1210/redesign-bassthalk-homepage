<template>
  <div>
    <div class="container">
      <div class="the-subject" v-if="subjectData">
        <div class="form-title">
          <h4>
            <img src="../../../assets/imgs/laboratory-1.png" alt />
            {{ subjectData.name }}
          </h4>
        </div>

        <div class="subject-units">
          <div class="row">
            <div
              class="col-md-6"
              v-for="(unit, index) in subjectData.units"
              :key="index"
            >
              <div class="subject-units-lessons">
                <div class="unit">
                  <span>{{ index + 1 }}</span>
                  <h6>{{ unit.nameAr }}</h6>
                </div>
                <div class="lesson-part">
                  <div class="row">
                    <div
                      class="col-md-4"
                      v-for="(lesson, index) in unit.lessons"
                      :key="index"
                    >
                      <div class="lessons">
                        <nuxt-link :to="'/lessons/' + lesson.id + '/materials'">
                          <h6>{{ lesson.nameAr }}</h6>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
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
export default {
  components: {},
  data() {
    return {
      subjectData: null,
      isLoading: true,
    }
  },
  created() {
    if (this.$route.params.id > 0) {
      this.getSubjectUnits()
    }
  },
  methods: {
    getSubjectUnits() {
      this.$axios
        .get(`subject/${this.$route.params.id}/units`)
        .then((res) => {
          this.isLoading = false
          this.subjectData = res.data
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
@import '../../../assets/sass/units.scss';
</style>
