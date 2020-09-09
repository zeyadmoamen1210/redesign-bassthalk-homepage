<template>
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
            @click="clicked(subject)"
          >
            <nuxt-link :to="`/subjects/${subject.id}/teachers`">
              <div class="subject-cont">
                <div class="subject-icon-img">
                  <img :src="subject.icon" alt />
                </div>
                <h3>{{ subject.nameAr }}</h3>
              </div>
            </nuxt-link>
          </div>

          <!-- <div class="annoncment" style="width: 100%; height: 200px;">
            <img
              src="../../assets/imgs/Why-You-Should-Be-Focusing-Your-Marketing-Efforts-On-Mobile-Advertising-And-Social-Media.jpg"
              alt
            />
          </div> -->
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
      tabIndex: 1,
      sub: {}
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
        })
    },
    clicked(subject){
        this.sub = subject
        this.setSubjects()
    },
    setSubjects(){
        this.$store.commit('setSubject', this.sub)
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/sass/subject-dynamic.scss';
.subjects{
      margin-top: 99px !important;
}
.subjects-navbar{
  margin-top: 30px;
  button{
    font-family: "CustomFontMedium";
    background: none;
    border: none;
    margin-top: 20px;
    box-shadow: 0px 1px 21px 0px #ddd;
    img{
      display: block;
      margin:auto
    }
  }
}
</style>