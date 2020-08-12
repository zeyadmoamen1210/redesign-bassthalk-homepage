<template>
  <div class="mylessons">
      <div class="container">
          <h3 style="margin-bottom:20px;color: #058ac6;">الأسئلة</h3>
          <Loading v-if="isLoading"/>
         <div v-else>
            <div v-if="questions.length == 0">
                <div class="alert alert-danger">
                    للأسف .. لا توجد اسئلة متاحة 
                </div>
            </div>
             <div v-else class="row">
              <div class="col-md-6" v-for="question in questions" :key="question.id">
                  <div class="mylesson-card">
                      <div class="mylesson-card-head">
                          <h6> السؤال: </h6>
                          <h6 style="font-family: 'CustomFontRegular'"> {{question.question}} </h6>
                      </div>
                  </div>
              </div>
         </div>
         </div>
      </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
    components:{
        Loading
    },
    data(){
        return {
            questions:[],
            isLoading: true,
        }
    },
    created(){
        this.$axios.get(`statistics/myquestions`).then(res => {
            console.log(res)
            this.questions = res.data
        }).finally(() => this.isLoading = false)
    }
}
</script>

<style lang="scss">
.mylessons{
    padding-top: 80px;
    .mylesson-card{
        &:hover{
            transform: translateY(-10px);
        }
        transition: all .5s ease;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        padding: 15px;
        margin-bottom: 26px;
        >div{
            overflow: hidden;
    padding: 9px;
    background: #f1f1f1;
    margin-bottom: 12px;
            h6{
                float: right;
                display: inline-block;
                &:first-of-type{
                    margin-left: 8px;
                }
            }
        }
    }
}
</style>