<template>
  <div>
    <NavbarBefore />

    <div class="general-exam-join">
      <div class="container">

        <div class="title">
          <h4>تعديل بياناتي</h4>
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
import NavbarBefore from '../components/NavbarBefore'
export default {
  components:{
    NavbarBefore
  }
}
</script>

<style lang="scss">
.general-exam-join{
    margin-top: 50px;
    .title{
      h4{
        color:#058ac6;
        margin-bottom: 20px;
      }
    }
    form{
      direction: ltr;
          padding-top: 52px;
      input{
          margin-bottom: 36px;
              padding: 24px 11px;
    box-shadow: 6px 2px 23px 1px #DDD;
    border: 0;
    border-radius: 7px;
      }
      input[type="submit"]{
        font-family: "CustomFontBold";
      }
      select{
            direction: ltr;
      }
      div.inline-input{
        width: 50%;
    float: left;
      }
    }
}
</style>
