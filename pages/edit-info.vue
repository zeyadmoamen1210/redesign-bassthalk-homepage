<template>
  <div>
    <div class="container">
      <div class="edit-personal-info">
        <div class="title">
          <h5>
                                  <img src="../assets/imgs/noun_edit_-1.png" alt="">

            تعديل بياناتي</h5>
        </div>
        <div class="edit-head">
          <h6>
            المعلومات الشخصية</h6>
        </div>
        <form action="">
            <div class="row">
              <div class="col-md-4">
                <div class="edit-section">
                    <form action="">
                       <div class="teacher">
                              <img src="../assets/imgs/teacher-100316.jpg" alt="">
                              <img src="../assets/imgs/edit-cam.png" alt="">
                                                    <input type="file" name="" id="">

                    </div>
                    </form>

                </div>
              </div>

                <div class="col-md-4">
                <div class="edit-section" style="padding-top: 10px;">
                  <div class="form-groub">
                    <label for="">اسم المستخدم</label>
                    <input type="text" class="form-control">
                  </div>

                </div>
              </div>

                <div class="col-md-4">
                <div class="edit-section" style="padding-top: 10px;">

                  <div class="form-groub">
                    <label for="">البريد الألكتروني</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>

                <div class="col-md-4">
                <div class="edit-section" style="padding-top: 10px;">

                  <div class="form-groub">
                    <label for="">رقم الجوال</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>

                <div class="col-md-4">
                <div class="edit-section" style="padding-top: 10px;">

                  <div class="form-groub">
                    <label for="">الجنس</label>
                     <select class="custom-select-lg mb-3">
            <option value="1">ذكر</option>
            <option value="2">انثي</option>

          </select>
                  </div>
                </div>
              </div>

                <div class="col-md-4">
                <div class="edit-section" style="padding-top: 10px;">

                  <div class="form-groub">
                    <label for="">الدولة</label>
                     <select class=" custom-select-lg mb-3">
            <option value="1">مصر</option>

          </select>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <button class="fullWidthBtn">تغيير كلمة المرور</button>
              </div>

               <div class="col-md-6">
                <button style="background-color:#333">حفظ التعديلات</button>
              </div>

              <div class="col-md-12">
                <h6 style="margin-top: 27px;color: #484848;font-size: 20px;">معلومات المسار الدراسي</h6>

              </div>
                  <div class="col-md-4">
                <div class="edit-section" style="padding-top: 30px;">

                  <div class="form-groub">
                    <label for="">المرحلة الدراسية</label>
                     <select class=" custom-select-lg mb-3">
            <option value="1">الأبتدائية</option>
            <option value="2">الأعدادية</option>
            <option value="3">الثانوية</option>

          </select>
                  </div>
                </div>
              </div>

                  <div class="col-md-4">
                <div class="edit-section" style="padding-top: 30px;">

                  <div class="form-groub">
                    <label for="">الصف الدراسي</label>
                     <select class=" custom-select-lg mb-3">
                        <option value="1">الأول</option>
                        <option value="2">الثاني</option>
                        <option value="3">الثالث</option>
                        <option value="4">الرابع</option>
                        <option value="5">الخامس</option>
                        <option value="6">السادس</option>

                      </select>
                  </div>
                </div>
              </div>

                  <div class="col-md-4">
                <div class="edit-section" style="padding-top: 30px;">

                  <div class="form-groub">
                    <label for="">الترم</label>
                     <select class=" custom-select-lg mb-3">
                      <option value="1">الأول</option>
                      <option value="2">الثاني</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style="display: block;width: 50%;margin: auto;">
                <button >حفظ التعديلات</button>
              </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/sass/edit-info.scss';
</style>
