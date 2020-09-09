<template>
  <div>
    <div class="container">
      <div class="live-details">
        <div class="row">
          <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../../../../assets/imgs/live-blue.png" alt />
                  مدرسين المادة
                </h4>
              </div>
            </div>
          </div>

          <h6 style="margin-top: 15px; font-size: 21px; color: #46a8d5;"></h6>
        </div>

        <div class="time-content">
          <div class="row">
            <div class="col-md-6" v-for="teacher of teachers" :key="teacher.id">
              <nuxt-link :to="`/subjects/${$route.params.id}/teachers/${teacher.id}`">
                <div class="time-course" style="position: relative;">
                  <div>
                    <nuxt-link :to="'/general-exam-join'">
                      <button
                        style="position: absolute;bottom: 0px;left: 0px;background: #088cc0;border: none;color: #FFF;font-family: 'CustomFontBold';"
                      >
                        <div style="position: relative;padding: 6px 19px 0 3px;">
                          أشتراك الأن
                          <span
                            style="
                                position: absolute;
                                background-color: rgb(255, 255, 255);
                                width: 12px;
                                height: 12px;
                                top: 8px;
                                right: 0;
                                border-radius: 50%;
                          "
                          ></span>
                        </div>
                      </button>
                    </nuxt-link>
                  </div>

                  <div>
                    <h6>{{teacher.username}}</h6>
                    <h6 style="color: #6c6c6c;">{{teacher.email}}</h6>
                  </div>
                  <div>
                    <div class="teacher">
                      <img :src="teacher.photo" alt />
                      <img src="../../../../assets/imgs/live-red.png" alt />
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- this is comment -->
      <!-- this is comment -->
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-student',

  data() {
    return {
      teachers: [],
    }
  },
  created() {
    this.$axios
      .get(`subjects/${this.$route.params.id}/teachers`)
      .then((res) => {
        this.teachers = res.data
      })
  },
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/sass/saved-lives.scss';
.live-details .time-content .time-course > div {
  width: 39.333%;
}
.live-details .time-content .time-course > div:last-of-type {
  width: 19%;
}
</style>
