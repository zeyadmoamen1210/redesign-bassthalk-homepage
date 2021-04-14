<template>
  <div>
    <div class="container">
     
      <div  class="subjects">
        <div class="form-title" style="display:flex">
       
          <div style="width:410px;margin: 50px 0 7px" class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>كورسات المواد الدراسية</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>


          <div style="font-family: 'CustomFontRegular';flex:1;text-align: left;padding-top: 64px;">
            <vs-button 
            type="border" 
            :class="{'activeSemester': me.semester == 'first'}"
            style="font-family: 'CustomFontRegular'" 
            @click="setLearningPath('first')
            "> الترم الأول </vs-button>
            <vs-button 
            :class="{'activeSemester': me.semester == 'second'}"
            type="border" 
            style="font-family: 'CustomFontRegular'" 
            @click="setLearningPath('second')
            "> الترم الثاني </vs-button>
        </div>

        </div>
        

        <Loading v-if="isLoading" />

        <div v-else>

          
          <div class="row">
              <div class="col-md-3" v-for="(subject, index) in subjects" :key="index">
                <div class="subject-cont">
                  <div class="subject-icon-img" @click="$router.push(`subjects/${subject.id}/courses`)">
                    <img :src="subject.icon" alt /> 
                  </div>

                  <h3>{{ subject.nameAr }}</h3>

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
  name: 'Subjects',
  components: {
    Loading,
  },
  data() {
    return {
      subjects: [],
      tabIndex: 1,
      isLoading: true,
      me:[]
    }
  },
  created() {
    if (this.$auth.loggedIn && this.$auth.user && this.$auth.user.class && this.$auth.user.class.id) {
      // this.$router.push({ path: '/subjects' })
      this.getSubjects()
    } else {
      this.$router.push({ path: '/path' })
    }


     this.$axios.get(`/me`).then(res => {
      this.me = res.data
      })

  },
  methods: {

    setLearningPath(semester) {
      this.$vs.loading();
      // this.isLoading = true
      let pathData = {
        level: this.me.level,
        class: this.me.class.id,
        semester: semester,
      }
      this.$axios
        .put(`students/path`, pathData)
        .then((res) => {
          setTimeout(async () => {
            setTimeout(async () => {
              await this.$auth.fetchUser();
              location.reload();
            })
          })
        })
        .catch((err) => {
        })
        .finally(() => (this.isLoading = false))
    },

    // setSubjects(){
    //   this.$store.commit('setSubject', this.subjects)
    // },
    getSubjects() {
      this.$axios
        .get(`subjects`)
        .then((res) => {
          this.subjects = res.data
        })
        .catch((err) => {
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

  .activeSemester{
  background: #058ac6 !important;
  color:#FFF !important;
    &:hover{
      background: #058ac6 !important;
      color:#FFF !important;
    }
  }

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
