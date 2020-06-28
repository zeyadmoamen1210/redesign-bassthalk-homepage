<template>
  <div>

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
export default {
 
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
@import '../assets/sass/general-exam-join.scss';
</style>
