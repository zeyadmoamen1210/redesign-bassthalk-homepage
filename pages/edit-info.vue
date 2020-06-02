<template>
  <div>
    <NavbarBefore />
    <div class="container">
      <div class="edit-personal-info">
        <div class="title">
          <h5>تعديل بياناتي</h5>
        </div>
        <div class="edit-head">
          <h6>المعلومات الشخصية</h6>
        </div>
        <form action="">
            <div class="row">
              <div class="col-md-4">
                <div class="edit-section">

                    <div class="teacher">
                              <img src="../assets/imgs/teacher-100316.jpg" alt="">
                              <img src="../assets/imgs/live-red.png" alt="">
                    </div>
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
                     <select class="custom-select custom-select-lg mb-3">
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
                     <select class="custom-select custom-select-lg mb-3">
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
                     <select class="custom-select custom-select-lg mb-3">
            <option value="1">مصر</option>

          </select>
                  </div>
                </div>
              </div>

                  <div class="col-md-4">
                <div class="edit-section" style="padding-top: 30px;">

                  <div class="form-groub">
                     <select class="custom-select custom-select-lg mb-3">
            <option value="1">مصر</option>

          </select>
                  </div>
                </div>
              </div>

                  <div class="col-md-4">
                <div class="edit-section" style="padding-top: 30px;">

                  <div class="form-groub">
                     <select class="custom-select custom-select-lg mb-3">
            <option value="1">مصر</option>

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

    }
    }
  }
  select{
    padding-top: 7px;
    padding-bottom: 0px;
    font-size: 13px;
    font-family: "CustomFontBold";
    min-height: 54px;
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
    top: 6px;
    z-index: 3;
    right: 10px;
    font-family: "CustomFontBold";
    color: #b2b2b2;
    font-size: 12px;
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
    top: -8px;
    z-index: 3;
    left: -18px;
    width: 52px;
        }
      }
    }
}
</style>
