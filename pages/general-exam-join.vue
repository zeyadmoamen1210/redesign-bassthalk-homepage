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
              <div class="general-exam-item image">
                <img src="../assets/imgs/general-exam.png" alt="">
              </div>
            </div>

             <div class="col-md-6">
               <form action="">
                <div class="general-exam-item">
                  <span v-if="paymentNum == 1">
                      <img src="../assets/imgs/mastercard.png" alt="">
                  </span>
                   <span v-else-if="paymentNum == 2">
                      <img src="../assets/imgs/symbols.png" alt="">
                  </span>
                 <div class="form-groub select">
                    <label for="">Card Type</label>
                     <select v-model="payment" class="custom-select custom-select-lg mb-3">
                      <option value="1" selected>Mastercard</option>
                      <option value="2">Visa</option>
                    </select>
                  </div>

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="Card Number">
              </div>

              <div class="form-groub">
                <input type="text" class="form-control" placeholder="Placeholder Name">
              </div>

              <div class="form-groub inline-input" style="padding: 0 5px 0 0;">
                <input type="text" class="form-control" placeholder="Exp date">
              </div>

              <div class="form-groub inline-input" style="padding: 0 5px 0 0;">
                <input type="text" class="form-control" placeholder="CVv">
              </div>

              <input type="submit" class="fullWidthBtn" value="تأكيد الدفع">
              </div>
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
  },
  data(){
    return {
      payment: 1
    }
  },
  computed:{
    paymentNum: function(){
      return Number(this.payment)
    }
  }
}
</script>

<style lang="scss">
.general-exam-join{
    margin-top: 50px;


    .form-groub.select{
      position: relative;
      label{
            position: absolute;
    top: 3px;
    z-index: 3;
    left: 10px;
    font-family: "CustomFontBold";
    color: #b2b2b2;
    font-size: 10px;
      }
      .form-control{
        position: absolute;
    padding: 26px;
      }
    }

    .general-exam-item{
      position: relative;
      >span{
                width: 38px;
    display: block;
    position: absolute;
    left: 0;
    top: 17px;
    margin-left: 11px;
    z-index: 4;
      }
      img{
        width: 100%;
      }
    }
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
    text-align: left;
      }
      input[type="submit"]{
        font-family: "CustomFontBold";
      }
      select{
               direction: ltr;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 13px;
    font-size: 14px;
        padding: 22px 0;
    height: 58px;
    border: 0;
    box-shadow: 1px 1px 11px 1px #DDD;
    border-radius: 8px;
    padding-left: 59px;
    font-family: "CustomFontMedium";
    color: #889196;
    text-align: left;
      }
      div.inline-input{
        width: 50%;
    float: left;
      }
    }
}



  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.general-exam-join{
  padding-top: 60px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
.general-exam-join{
  padding-top: 60px;
}
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
.general-exam-join .general-exam-item.image{
      margin-top: 72px;
}
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
