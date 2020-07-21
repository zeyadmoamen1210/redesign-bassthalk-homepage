<template>
     <div class="check-box-ques">
                <h6>أكمل الجملة التالية</h6>
<selectedImg :imgUrl="'https://i.ibb.co/9HSf4R0/logo.png'"></selectedImg>

              <span class="fill-the-ques" style="width:100%;">

           
               </span>
            <div class="row">
                  <div class="col-md-3" v-for="x in 3" :key="x">
                   <div class="form-groub" style="display: inline-block;width:100%">
                  <input style="width:100%;padding: 6px" type="text" placeholder="ادخل أجابتك هنا">
                </div>
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