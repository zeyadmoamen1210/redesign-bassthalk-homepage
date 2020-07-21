<template>
    <div class="check-box-ques" style="float: left;width: 100%;">
                <h6>صيغة السؤال هي عبارة عن صح او خطأ ؟</h6>
                <selectedImg style="float:right" :imgUrl="'https://i.ibb.co/9HSf4R0/logo.png'"></selectedImg>
               
               <div style="margin-top: 46px;overflow: hidden;display: inline-block;width: 70%;margin-right: 50px;">
                      <div style="overflow:hidden;display: block;float: left;width: 50%;">
                  <input type="radio" name="check-ques-1" class="absthalk-radio" id="">
                                <span>خطأ</span>
                </div>


               <div style="overflow:hidden;display: block;float: left;width: 50%;">
                  <input type="radio" name="check-ques-1" class="absthalk-radio" id="">
                                <span>صح</span>
               </div>

               </div>


              </div>
</template>

<script>
import selectedImg from '../selectedImg'
export default {
    components:{
        selectedImg
    }
}
</script>