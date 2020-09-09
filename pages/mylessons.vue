<template>
  <div class="mylessons">
      <div class="container">
          <h3 style="margin-bottom:20px;color: #058ac6;">دروسي</h3>
          <Loading v-if="isLoading"/>
            <NoData v-if="!isLoading && lessons.length == 0"/>
         <div v-else>
             <div class="row">
              <div class="col-md-4" v-for="lesson in lessons" :key="lesson.id">
                  <div class="mylesson-card">
                      <div class="mylesson-card-head">
                          <h6> الإسم: </h6>
                          <h6 style="font-family: 'CustomFontRegular'"> {{lesson.nameAr}} </h6>
                      </div>
                      <div class="mylesson-card-body">
                          <h6> الوحدة: </h6>
                          <h6 style="font-family: 'CustomFontRegular'">  {{lesson.unit.nameAr}} </h6>
                      </div>
                       <div class="mylesson-card-foot">
                          <h6> اسم المادة: </h6>
                          <h6 style="font-family: 'CustomFontRegular'"> {{lesson.unit.subject.nameAr}} </h6>
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
import NoData from '@/components/NoData'
export default {
    components:{
        Loading,
        NoData
    },
    data(){
        return {
            lessons:[],
            isLoading: true,
        }
    },
    created(){
        this.$axios.get(`/statistics/mylessons`).then(res => {
            console.log(res)
            this.lessons = res.data
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