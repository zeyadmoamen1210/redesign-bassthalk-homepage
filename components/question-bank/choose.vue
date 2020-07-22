<template>
     <div class="check-box-ques">
                <h6>{{question.head}}</h6>
                    <selectedImg :imgUrl="'https://i.ibb.co/9HSf4R0/logo.png'"></selectedImg>
                  <div class="ques-answer-btns">
                    <div class="row">
                      <div class="col-md-3" v-for="(x,index) in 4" :key="x">
                        <button @click="sel = index" :class="{selected: sel == index}">اجابة 1</button>
                      </div>

                      
                    </div>
                  </div>



              </div>
</template>



<script>
import selectedImg from '../selectedImg'
export default {
     props:[
        'question'
    ],
    data(){
        return{
            sel: 0,
            chooseform: ''
        }
    },
    components:{
        selectedImg
    },
    watch:{
        sel(){
            console.log(this.sel)
            this.$emit("choose", this.sel)
        }
    }
}
</script>

<style lang="scss">
.selected{
        background: #00aa00 !important;
    color: #FFF !important;
}
</style>