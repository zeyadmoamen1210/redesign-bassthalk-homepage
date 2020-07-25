<template>
  <div class="the-best">
    <div class="the-best-inner" style="overflow:hidden;">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="head-who">
              <span></span>
              <span></span>
              <span></span>
              <h3>المتفوقين</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <Loading v-if="isLoading" />
        <div v-else>
          <div class="best-sort" style="overflow:hidden;">
            <div class="row">
              <div class="col-md-4">
                <div class="user-sort-item">
                  <div class="profile-pic">
                    <span>
                       <img src="../assets/imgs/second-2x.png" alt />
                     
                    </span>
                    <img style="border-radius: 50%;"  :src="students[1].user.photo" alt />
                    <div class="profile-cont">
                      <h3>{{students[1].user.username}}</h3>
                      <!-- <h3>الصف الاول الثانوي</h3> -->
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>{{students[1].points}}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="user-sort-item first-student">
                  <div class="profile-pic">
                    <span>
                      <img src="../assets/imgs/first3x.png" alt />
                    </span>
                    <img style="border-radius: 50%;"  :src="students[0].user.photo" alt />
                    <div class="profile-cont">
                      <h3>{{students[0].user.username}}</h3>
                      <!-- <h3>الصف الاول الثانوي</h3> -->
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>{{students[0].points}}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="user-sort-item">
                  <div class="profile-pic">
                    <span>
                      <img src="../assets/imgs/thired2x.png" alt />
                    </span>
                    <img style="border-radius: 50%;"  :src="students[2].user.photo" alt />
                    <div class="profile-cont">
                      <h3>{{students[2].user.username}}</h3>
                      <!-- <h3>الصف الاول الثانوي</h3> -->
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>{{students[2].points}}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="all-the-best-student">
            <div class="row">
              <div class="col-md-6" v-for="(student,index) in students" :key="index">
                <div class="stu-info" v-if="index>2">
                  <div class="stu-num">{{index+1}}</div>
                  <div class="stu-pic">
                    <img :src="student.user.photo" alt />
                  </div>
                  <div class="stu-name">{{student.user.username}}</div>
                  <div class="stu-point">
                    <h6>{{student.points}}</h6>
                    <img src="../assets/imgs/point.png" alt />
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
import Loading from '@/components/Loading'

export default {
  middleware: 'auth-student',
  name: 'BestStudents',
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
      students: [],
    }
  },
  created() {
    this.getBestStudents()
  },
  methods: {
    getBestStudents() {
      // /classes/5/rank
      this.$axios
        .get(`classes/${this.$auth.user.class.id}/rank`)
        .then((res) => {
          this.students = res.data
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/best-student.scss';
</style>
