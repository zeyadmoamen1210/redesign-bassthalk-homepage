<template>
    <div class="check-box-ques">
                <h6>صيغة السؤال هي عبارة عن صح او خطأ ؟</h6>
<selectedImg :imgUrl="'https://i.ibb.co/9HSf4R0/logo.png'"></selectedImg>

                <!-- <img src="../../assets/imgs/chemical-equation-color.jpg" alt=""> -->


               <div class="form-groub">
                 <input style="width:100%;padding: 18px;" type="text" placeholder="ادخل أجابتك هنا">
               </div>

               <div class="file-choose">
                 <input type="file" placeholder="قم بأرفاق صورة بالحل">
                 <span> <img src="../../assets/imgs/noun_Camera_1903011.png">  قم بأرفاق صورة بالحل </span>
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