<template>
  <div>
    <NavbarBefore />

    <div class="general-exam-join">
      <div class="container">
        <div class="title">
          <h4>الأمتحانات العامة</h4>
        </div>
        <p>خدمة الأمتحانات العامة هي خدمة مدفوعة قم بالأشتراك الأن</p>

        <div class="general-exam-grid">
          <div class="row">
            <div class="col-md-6">
              <div class="general-exam-item">
                <img src="../assets/imgs/general-exam.png" alt="">
              </div>
            </div>

             <div class="col-md-6">
               <form action="">
                <div class="general-exam-item">
                 <select class="custom-select custom-select-lg mb-3">
                  <option value="1" selected>Master Card</option>
                  <option value="2">Visa</option>
                </select>
              </div>
              <div class="form-groub">
                <input type="text" class="form-control" placeholder="Placeholder Name">
              </div>

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="Placeholder Name">
              </div>

              <div class="form-groub inline-input" style="padding: 0 5px 0 0;">
                <input type="text" class="form-control" placeholder="Placeholder Name">
              </div>

              <div class="form-groub inline-input" style="padding: 0 5px 0 0;">
                <input type="text" class="form-control" placeholder="Placeholder Name">
              </div>

              <input type="submit" class="fullWidthBtn" value="تأكيد الدفع">
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
      }
    }
    form{
      direction: ltr;
          padding-top: 52px;
      input{
          margin-bottom: 19px;
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
