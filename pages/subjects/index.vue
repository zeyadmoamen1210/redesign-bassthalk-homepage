<template>
  <div>
    <div class="container">

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
       </div>


      <div v-show="tabIndex == 1" class="subjects">
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





      <div v-show="tabIndex == 2" class="subjects">
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
            <nuxt-link :to="'/info-bank'">
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





    


       <div v-show="tabIndex == 4" class="subjects">
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
            <nuxt-link :to="'/best-students'">
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
  </div>
</template>

<script>
export default {
  middleware: 'auth-student',

  data() {
    return {
      subjects: [],
      tabIndex: 1
    }
  },
  created() {
    this.getSubjects()
  },
  methods: {
    setSubjects(){
      this.$store.commit('setSubject', this.subjects)
    },
    getSubjects() {
      this.$axios
        .get(`subjects`)
        .then((res) => {
          this.isLoading = false
          this.subjects = res.data
          console.log(res)

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
@import '../../assets/sass/subject-dynamic.scss';
.subjects{
  margin-top: 20px !important;
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
