<template>
  <div>

    <div class="general-exam-join">
      <div class="container">

        <div class="title">
          <h4>
            <img src="../assets/imgs/noun_edit_-1.png" alt="">
            تعديل بياناتي</h4>
        </div>

        <p>تعديل كلمة المرور</p>

        <div class="general-exam-grid">
          <div class="row">
            <div class="col-md-6">
              <div class="general-exam-item">
                <img src="../assets/imgs/change password.png" alt="">
              </div>
            </div>

             <div class="col-md-6">
               <form action="">

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="كلمة المرور الحالية">
              </div>

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="كلمة المرور الجديدة">
              </div>

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="تأكيد كلمة المرور الجديدة">
              </div>




              <input type="submit" class="fullWidthBtn" value="حفظ كلمة المرور الجديدة">
               </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '../assets/sass/edit-password.scss';
</style>
