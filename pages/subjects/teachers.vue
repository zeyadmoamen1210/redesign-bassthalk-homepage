<template>
  <div>
    <div class="container">
      <div class="live-details">
        <div class="row">
          <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../../assets/imgs/live-blue.png" alt="" />
                  مدرسين المادة
                </h4>
              </div>
            </div>
          </div>

          <h6 style="margin-top: 15px; font-size: 21px; color: #46a8d5;"></h6>
        </div>

        <div class="time-content">
          <div class="row">
            <div class="col-md-6" v-for="x of 4" :key="x">
              <nuxt-link :to="'/teacher/'">
                <div class="time-course" style="position: relative;">
                  
                  <div>
                   <nuxt-link :to="'/general-exam-join'">
                      <button style="position: absolute;bottom: 0px;left: 0px;background: #088cc0;border: none;color: #FFF;font-family: 'CustomFontBold';">
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
                    <h6>أستاذة / ميادة رفعت</h6>
                    <h6 style="color: #6c6c6c;">mayada@gmail.com</h6>
                  </div>
                  <div>
                    <div class="teacher">
                      <img src="../../assets/imgs/teacher-100316.jpg" alt="" />
                      <img src="../../assets/imgs/live-red.png" alt="" />
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
  data() {
    return {
      lectures: [],
    }
  },
  created() {
    this.$axios
      .get(`subjects/${this.$route.params.id}/lectures`)
      .then((res) => {
        console.log(res)
        this.lectures = res.data.lectures
      })
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/saved-lives.scss';
.live-details .time-content .time-course > div {
  width: 39.333%;
}
.live-details .time-content .time-course > div:last-of-type {
  width: 19%;
}
</style>
