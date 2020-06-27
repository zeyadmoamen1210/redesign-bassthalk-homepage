<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
        <div class="form-title">
          <h4>تحديد المسار</h4>
        </div>
        <form @submit.prevent>
          <div class="first-select">
            <h6>حدد نظام التعليم</h6>
            <select class="custom-select-lg mb-3" @change="systemChange()" v-model="form.system">
              <option value>حدد نظام التعليم</option>

              <option
                v-for="(system,index) in systems"
                :key="index"
                :value="system.id"
              >{{system.nameAr}}</option>
            </select>
          </div>
          <div class="first-select">
            <h6>اختر المرحلة الدراسية</h6>
            <select class="custom-select-lg mb-3" @change="levelChange()" v-model="form.level">
              <option value>حدد المرحلة</option>
              <option
                v-for="(level,index) in levels"
                :key="index"
                :value="level.id"
              >{{level.nameAr}}</option>
            </select>
          </div>
          <div class="first-select">
            <h6>اختر الصف الدراسي</h6>
            <select class="custom-select-lg mb-3" v-model="form.class">
              <option value>حدد الصف</option>
              <option v-for="(item,index) in classes" :key="index" :value="item.id">{{item.nameAr}}</option>
            </select>
          </div>
          <div class="first-select">
            <h6>اختر الترم</h6>
            <select class="custom-select-lg mb-3" v-model="form.semester">
              <option value>حدد الترم</option>
              <option value="first">الأول</option>
              <option value="second">الثاني</option>
            </select>
          </div>
          <input type="button" @click="setLearningPath" value="ابدأ" class="basth-btn-primary" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBefor from '../components/NavbarBefore'

export default {
components:{
  NavbarBefor,
},
data() {
  return {
    isLoading: false,
    systems:[],
    levels:[],
    classes:[],
    form:{
      system:"",
      level:"",
      class:"",
      semester:"",
    }
  }
},
created() {
    this.getSystems();
  },
  methods: {
    getSystems() {
      this.$axios
        .get(`systems`)
        .then(res => {
          this.isLoading = false;
          this.systems = res.data;
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
        });
    },
    systemChange(){
      this.form.level="";
      this.levels=[];
      this.levels= this.systems.find(system => {
  return system.id === this.form.system
}).levels;

    },
    levelChange(){
       this.form.class="";
      this.classes=[];
      this.classes= this.levels.find(level => {
  return level.id === this.form.level
}).classes;

    },
     setLearningPath() {
       this.isLoading=true;
      this.$axios
        .put(`students/path`,this.form)
        .then(res => {
          this.isLoading = false;
        this.$router.push({ path: "/subjects" });
         
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
        });
    },
  }
}
</script>

<style lang="scss">
.login {
  width: 35%;
  margin: 70px auto;
  .form-title {
    h4 {
      text-align: center;
      font-size: 30px;
      margin-bottom: 30px;
      color: #535353;
    }
  }
  form {
    h6 {
      color: #878787;
      margin: 13px 0;
    }
    .first-select {
      margin-bottom: 21px;
      select {
        width: 100%;
        font-family: 'CustomFontBold';
        -webkit-appearance: button;
        color: #4f4f4f;
        font-size: 16px;
        padding: 14px 10px;
        margin-bottom: 0 !important;
        height: 52px;
        border: 0;
        box-shadow: 1px 1px 11px 1px #ddd;
        border-radius: 8px;
      }
    }
  }
  .custom-select {
    background: #fff
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
      no-repeat right 22.75rem center/9px 12px;
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .login {
    width: 100%;
    padding-top: 60px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .login {
    width: 82%;
    padding-top: 60px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .login {
    width: 58%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .login {
    width: 43%;
    margin-top: 160px;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
