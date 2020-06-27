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
                <img :src="subject.icon" alt />
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
.subjects {
  margin-top: 60px;
  margin-bottom: 170px;

  .col-md-3 {
    a {
      color: #333;
      text-decoration: none;
      font-family: 'CustomFontRegular';
      .subject-cont {
        transition: all 0.4s linear;

        &:hover {
          transform: scale(1.06);
        }
      }
    }
  }
  .form-title {
    color: #058ac6bd;
  }
  .subject-cont {
    max-height: 220px;
    min-height: 220px;
    padding: 26px;
    margin: 20px 0;
    box-shadow: 0px 1px 21px 0px #ddd;
    border-radius: 10px;
    img {
      display: block;
      margin: auto;
      width: 65%;
    }
    h3 {
      text-align: center;
      margin-top: 18px;
      font-size: 20px;
    }
  }
  .chem {
    background: url('../../assets/imgs/chem.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .math {
    background: url('../../assets/imgs/math.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .arab {
    background: url('../../assets/imgs/arabic.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .math2 {
    background: url('../../assets/imgs/math2.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .eng {
    background: url('../../assets/imgs/eng.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .history {
    background: url('../../assets/imgs/history.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .physic {
    background: url('../../assets/imgs/physic.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .geo {
    background: url('../../assets/imgs/planet-earth-2.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  .annoncment {
    width: 100%;
    height: 141px;
    overflow: hidden;
    margin: 0 14px;
    img {
      width: 100%;
      margin-top: -231px;
    }
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .subjects {
    padding-top: 60px;
  }
  .subjects .annoncment img {
    margin-top: 0;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .subjects {
    padding-top: 60px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .subjects .annoncment img {
    width: 100%;
    margin-top: -83px;
  }
  .subjects .subject-cont h3 {
    font-size: 15px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
