<template>
  <div>
    <div class="container">
      <!-- 
       <div class="subjects-navbar" style="text-align:center">
         <button
          :style="{
            outline: 'none',
            color: tabIndex == 1 ? '#46a8d5' : '',
            'border-color': tabIndex == 1 ? '#46a8d5' : '',
          }"
          @click="(tabIndex = 1)"
          type="line"
        
        >
        <img src="../../assets/imgs/noun_knowledge_2042727.png" alt="">
        الرئيسية</button>

         <button
          :style="{
            outline: 'none',
            color: tabIndex == 2 ? '#46a8d5' : '',
            'border-color': tabIndex == 2 ? '#46a8d5' : '',
          }"
          @click="(tabIndex = 2)"
          type="line"
        
        >
        <img v-if="tabIndex !== 2" src="../../assets/imgs/noun_knowledge_2042727.png" alt="">
        <img v-else src="../../assets/imgs/noun_knowledge_-1.png" alt="">
        بنك المعلومات</button>
        <button
          :style="{
            'padding-top': '5px',
            outline: 'none',
            color: tabIndex == 3 ? '#46a8d5' : '',
            'border-color': tabIndex == 3 ? '#46a8d5' : '',
          }"
          
        >
        <nuxt-link to="/subjects/live">
          <img v-if="tabIndex !== 3" src="../../assets/imgs/live-dark.png" alt="">
          بث مباشر
        </nuxt-link>
        </button>

         <button
          :style="{
            outline: 'none',
            color: tabIndex == 4 ? '#46a8d5' : '',
            'border-color': tabIndex == 4 ? '#46a8d5' : '',
          }"
          @click="(tabIndex = 4)"
          type="line"
        >
        <img src="../../assets/imgs/noun_knowledge_2042727.png" alt="">
        المتفوقين</button>
      </div>-->

      <div v-show="tabIndex == 1" class="subjects">
        <div class="form-title">
          <!-- <h4>
            <img src="../../assets/imgs/noun_classroom_-1.png" alt />
            المواد الدراسية
          </h4>-->
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>المواد الدراسية</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Loading v-if="isLoading" />

        <div class="row" v-else>
          <div class="col-md-3" v-for="(subject, index) in subjects" :key="index">
            <nuxt-link :to="'/subjects/' + subject.id + '/units'">
              <div class="subject-cont">
                <div class="subject-icon-img">
                  <img :src="subject.icon" alt />
                </div>
                <h3>{{ subject.nameAr }}</h3>
              </div>
            </nuxt-link>
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
  name: 'Subjects',
  components: {
    Loading,
  },
  data() {
    return {
      subjects: [],
      tabIndex: 1,
      isLoading: true,
    }
  },
  created() {
    if (this.$auth?.user?.class?.id) {
      // this.$router.push({ path: '/subjects' })
      this.getSubjects()
    } else {
      this.$router.push({ path: '/path' })
    }
  },
  methods: {
    // setSubjects(){
    //   this.$store.commit('setSubject', this.subjects)
    // },
    getSubjects() {
      this.$axios
        .get(`subjects`)
        .then((res) => {
          this.subjects = res.data
          console.log(res)
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
@import '../../assets/sass/subject-dynamic.scss';
.subjects {
  margin-top: 20px !important;
}
.subjects-navbar {
  margin-top: 30px;
  button {
    font-family: 'CustomFontMedium';
    background: none;
    border: none;
    margin-top: 20px;
    box-shadow: 0px 1px 21px 0px #ddd;
    img {
      display: block;
      margin: auto;
    }
  }
}

.form-title {
  .head-who {
    width: 317px !important;
    h3 {
      margin-right: 53px;
      color: #333;
    }
  }
  .head-who span:nth-of-type(4) {
    top: 10px;
    left: 6px;
  }

  .head-who span:nth-of-type(3) {
    top: 13px;
    left: -16px;
    height: 14px;
    width: 15px;
  }

  .head-who span:nth-of-type(2) {
    width: 12px;
    height: 12px;
    top: 13px;
    left: -37px;
  }
}
</style>
