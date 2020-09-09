<template>
  <div class="allteachers">
    <div class="container">
      <div class="teachers-head">
        <h5>جميع المدرسين</h5>
      </div>
      <Loading v-if="isLoading" />
      <div v-else class="teachers-cards">
        <div class="row">
          <div class="col-md-3" v-for="teacher in teachers" :key="teacher.id">
            <div class="teacher-card">
              <div class="teacher-img">
                <i
                  style="color:#2295c9;color: rgb(57 160 207);padding: 0 12px;"
                  class="fas fa-star"
                ></i>
                <div>
                  <img src="../assets/imgs/logo.png" class="background-logo" alt />
                  <img v-if="teacher.photo" :src="teacher.photo" />
                  <img
                    v-else
                    src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"
                  />
                </div>
              </div>
              <div class="teacher-info">
                <!-- <h6 v-if="teacher.enable"> <i class="fas fa-circle"></i>  متاح </h6>
                <h6 v-else>  <i class="fas fa-circle"></i>  متاح </h6>-->
                <h6>{{teacher.username}}</h6>
                <h6>{{teacher.email}}</h6>
                
              </div>
              <div class="teacher-body">
                <h6
                v-if="teacher.description"
                  style="font-family: 'CustomFontBold';margin-bottom: 0;font-size: 19px;background: rgb(255 255 255 / 10%);padding: 10px;"
                >
                  <i class="fas fa-circle"></i>
                  {{teacher.description}}
                </h6>
                <h6
                v-else
                  style="font-family: 'CustomFontBold';margin-bottom: 0;font-size: 19px;background: rgb(255 255 255 / 10%);padding: 10px;"
                >
                  <i class="fas fa-circle"></i>
                  لا يوجد وصف
                </h6>
                <!-- <h6 style="font-size: 16px;font-family: 'CustomFontRegular';padding-right: 8px;"> مدرس لغة عربية </h6> -->
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

  components: {
    Loading,
  },
  data() {
    return {
      teachers: [],
      isLoading: true,
    }
  },
  created() {
    this.$axios
      .get('/statistics/teachers/subjects')
      .then((res) => {
        this.teachers = res.data
      })
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style lang="scss" scoped>
.allteachers {
  padding-top: 70px;
  .teachers-head {
    h5 {
      font-family: 'CustomFontBold';
      margin-bottom: 15px;
    }
  }
  .teacher-card {
    margin-bottom: 15px;
    padding-top: 15px;
    transition: all 0.5s ease;
    cursor: pointer;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3);
    &:hover {
      transform: translateY(-10px);
    }
    .teacher-img {
      position: relative;
      .background-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        opacity: 0.1;
        transform: translate(-50%, -50%);
        width: 77%;
      }
      padding-bottom: 15px;
      > div {
        height: 70px;
        background-size: cover;
        background-repeat: no-repeat;
        width: 70px;
        border-radius: 50%;
        overflow: hidden;
        margin: auto;
        border: 1px solid #ccc;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .teacher-info {
      h6 {
        &:first-of-type {
          text-align: center;
          font-family: 'CustomFontBold';
          font-size: large;
          margin-bottom: 6px;
          color: #525252;
        }
        &:last-of-type {
              text-align: center;
    padding-bottom: 2px;
    color: #656565;
    font-size: 13px;
    font-family: CustomFontBold;
        }
      }
    }
    .teacher-body {
      width: 104%;
      background: #2295c9;
      color: #fff;
      padding: 0;
      position: relative;
      /* border-radius: 0 0 5px 4px; */
      padding-bottom: 2px;
      &::after {
        position: absolute;
        top: -16px;
        content: '';
        left: 0;
        border-width: 5px 2px 11px 8px;
        border-color: transparent #39a0cf #39a0cf transparent;
        border-style: solid;
      }
    }
  }
}
</style>