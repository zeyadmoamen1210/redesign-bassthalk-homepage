<template>
  <div>
    <NavbarBefore />
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
import NavbarBefore from "../components/NavbarBefore"
export default {
components:{
  NavbarBefore
}
}
</script>

<style lang="scss">
.edit-personal-info{
  margin-top: 50px;
  .custom-select{
    background:    #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 3 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/640px 10px
  }
  .edit-head{
    h6{
          font-size: 19px;
    margin-bottom: 30px;
    color: #414141;
    font-family: "CustomFontBold";
    }
  }
  form{
    button{
          width: 100%;
    padding: 10px;
    text-align: center;
    border: 0;
    color: #FFF;
    border-radius: 5px;
    font-family: "CustomFontBold";
    outline: none;

    &:first-of-type{
          background: #058ac6;
          margin-bottom: 17px;

    }
    }
  }
  select{
        padding-top: 7px;
    padding-bottom: 0px;
    font-size: 13px;
    font-family: "CustomFontBold";
    font-size: 16px;
    padding: 16px 10px;
    -webkit-appearance: button;
    width: 100%;
    height: 52px;
    border: 0;
    box-shadow: 1px 1px 11px 1px #DDD;
    border-radius: 8px;
  }
  .title{
    margin-bottom: 30px;
    color:#058ac6;
  }
  .edit-head{
    margin-bottom: 20px;
  }
  .edit-section{
          padding-top: 0;
    min-height: 85px;
    margin-bottom: 15px;
    >div{
      margin:auto;
    }
    .form-groub{
      position: relative;
      label{
        position: absolute;
    top: 3px;
    z-index: 3;
    right: 10px;
    font-family: "CustomFontBold";
    color: #b2b2b2;
    font-size: 10px;
      }
      .form-control{
        position: absolute;
    padding: 26px;
      }
    }
  }
   .teacher{
       height: 87px;
    width: 87px;
    border-radius: 50%;
    border: 3px solid rgba(5, 138, 198, 0.74118);
    padding: 4px;
    background: #ebebeb;
    position: relative;
    margin: auto;
     input[type="file"]{
          position: absolute;
    top: -5px;
    width: 110%;
    height: 110%;
    border-radius: 50%;
    cursor: pointer;
    left: 0;
    z-index: 69;

    opacity: 0;
        }
      img{
        &:first-of-type{
           width: 93%;
    border-radius: 50%;
    height: 93%;
    position: absolute;
    top: 3px;
    left: 3px;
        }

        &:last-of-type{
                  position: absolute;
    top: -7px;
    z-index: 3;
    left: -10px;
    width: 37px;
        }
      }
    }
}



  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .edit-personal-info{
    padding-top: 60px;
  }
.edit-personal-info .custom-select {
  background-position: 640px 10px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
 .edit-personal-info{
    padding-top: 60px;
  }
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
