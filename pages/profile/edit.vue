<template>
  <div>
    <div class="container">
      <Loading v-if="isLoading" />

      <div class="edit-personal-info" v-else>
        <div class="title">
          <h5>
            <img src="../../assets/imgs/noun_edit_-1.png" alt />
            تعديل بياناتي
          </h5>
        </div>
        <div class="edit-head">
          <h6>المعلومات الشخصية</h6>
        </div>
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-4">
              <div class="edit-section">
                <form action>
                  <div class="teacher">
                    <img v-if="userPhoto" :src="userPhoto" alt />
                    <img v-else src="@/assets/imgs/teacher-100316.jpg" alt />
                    <img src="@/assets/imgs/edit-cam.png" alt />
                    <input @change="changeUserPhoto" type="file" name id />
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md-4">
              <div class="edit-section" style="padding-top: 10px;">
                <div class="form-groub">
                  <label for>اسم المستخدم</label>
                  <input type="text" v-model="userData.username" class="form-control" />
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="edit-section" style="padding-top: 10px;">
                <div class="form-groub">
                  <label for>البريد الألكتروني</label>
                  <input type="text" v-model="userData.email" class="form-control" />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>

            <div class="col-md-4">
              <div class="edit-section" style="padding-top: 10px;">
                <div class="form-groub">
                  <label for>رقم الجوال</label>
                  <input type="text" v-model="userData.phone" class="form-control" />
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="edit-section" style="padding-top: 10px;">
                <div class="form-groub">
                  <label for>الجنس</label>
                  <select class="custom-select-lg mb-3" v-model="userData.gender">
                    <option value="male">ذكر</option>
                    <option value="female">انثي</option>
                  </select>
                </div>
              </div>
            </div>

            <div style="display: block;width: 49%;margin: auto;">
              <button @click="editProfile">حفظ التعديلات</button>
            </div>
            <div style="display: block;width: 49%;margin: auto;">
              <button style="background-color:#6f42c1" @click="changePasswordPopup = true">تغيير كلمة المرور</button>
            </div>
          </div>
        </form>
      </div>
    </div>


     <vs-popup class="holamundo"  title="تغيير كلمة المرور" :active.sync="changePasswordPopup">
      <div>
        <div class="form-group">
        <input type="text" v-model="oldPass" placeholder="كلمة المرور القديمة" class="form-control" />
        </div>
        <div class="form-group">
          <input  v-model="newPass" type="text" placeholder="كلمة المرور الجديدة" class="form-control" />
        </div>

        <button :disabled="newPass == '' || oldPass == ''" class="btn btn-primary" @click="changePass">تغير كلمة المرور</button>
      </div>
    </vs-popup>

  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'EditProfile',
  middleware: 'auth-student',
  components: {
    Loading,
  },
  data() {
    return {
      userData: this.$auth.user,
      userPhoto: this.$auth.user.photo,
      photo: null,
      isLoading: false,
      changePasswordPopup: false,
      oldPass:"",
      newPass:""
    }
  },
  methods: {
    changePass(){
      this.changePasswordPopup = false
      this.isLoading = true;
      this.$axios.put(`/change-password`, {
        "oldpassword": this.oldPass,
        "newpassword": this.newPass
      }).then(res => {
        this.$snotify.success("تم تحديث كلمة المرور بنجاح");
        this.$router.push(`/`);
      }).catch(err => {
        this.$snotify.error("كلمة المرور غير صحيحة");

      }).finally(() => this.isLoading = false)
    },
    changeUserPhoto(e) {
      if (e.target.files.length > 0) {
        this.photo = e.target.files[0]

        this.userPhoto = URL.createObjectURL(this.photo)
      }
    },
    editProfile() {
      var studentForm = new FormData()
      if (this.photo != null) {
        studentForm.append('photo', this.photo)
      }
      studentForm.append('username', this.userData.username)
      studentForm.append('email', this.userData.email)
      studentForm.append('gender', this.userData.gender)
      // studentForm.append('phone', this.userData.phone)

      this.isLoading = true
      this.$axios
        .patch(`profile`, studentForm, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.$router.go()
          this.$snotify.success(`تم تحديث البيانات بنجاح`)
        })
        .catch((err) => {
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/sass/edit-info.scss';
</style>
