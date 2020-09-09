<template>
  <div class="camping">
    <div class="container">
      <div class="camping-head">
        <div class="title">
          <!-- <h6>
            <img src="../../assets/imgs/noun_knowledge_-1.png" alt />
            بنك المعلومات
          </h6>-->
          <div class="head-who" style="width:293px">
            <span></span>
            <span></span>
            <span></span>
            <h3>المعسكرات</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class="camping-card-container">
        <Loading v-if="isLoading" />
        <div v-else class="row">
          <div class="col-md-4" v-for="camp in camps" :key="camp.id">
            <div class="camp-card">
              <div class="camp-card-head">
                <img :src="camp.image" alt />
              </div>
              <div class="camp-card-content">
                <h5>{{camp.name}}</h5>
                <span>{{camp.description}}</span>
                <h6>
                  عدد المحاضرات :
                  <span>{{camp.numberOfLectures}}</span>
                </h6>
              </div>

              <div class="camp-teacher">
                <div class="camp-teacher-head">
                  <img :src="camp.teacher.photo" />
                </div>
                <div class="camp-teacher-content">
                  <h5>{{camp.teacher.username}}</h5>
                  <span>{{camp.teacher.email}}</span>
                </div>
              </div>
              <a :href="camp.link" target="_blank" class="goToCourse">الذهاب إلى الكورس</a>
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
      camps: [],
      isLoading: true,
    }
  },
  created() {
    this.$axios
      .get(`edu-course`)
      .then((res) => {
        this.camps = res.data
      })
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style lang="scss">
.camping {
  padding-top: 56px;
  .camping-card-container {
    .goToCourse {
      background: #058ac6;
      color: #fff;
      text-decoration: none;
      display: block;
      font-family: 'CustomFontBold';
      width: 100%;
      text-align: center;
      padding: 10px;
      border: 1px solid #ccc;
    }
    h6,
    h5 {
      margin-bottom: 0;
    }
    .camp-card {
      transition: all 0.5s ease;
      &:hover {
        transform: translateY(-10px);
      }
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
      margin-bottom: 15px;
      margin-top: 15px;
      .camp-card-head {
        img {
          width: 100%;
          height: 130px;
        }
      }
    }
    .camp-card-content {
      span {
        margin-bottom: 10px;
        display: inline-block;
      }
      padding: 10px 15px;
      h5 {
        color: #058ac6;
        span {
          color: #333;
          font-family: 'CustomFontRegular';
        }
      }
    }
    .camp-teacher {
      border-top: 1px solid #ccc;
      h5 {
        color: #058ac6;
      }
      span {
        font-family: arial;
      }
      overflow: hidden;
      padding: 10px 15px;
      background: #f7f7f7;
      .camp-teacher-head {
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid #ccc;
        }
      }
      div {
        &:first-of-type {
          width: 14%;
          margin-left: 15px;
        }
        &:last-of-type {
          width: 80%;
        }
      }
      > div {
        float: right;
      }
    }
  }
}
</style>