<template>
  <div class="course-last-lectures">
     
      <div class="container" >
                        <h3 style="margin-bottom:10px">المحاضرات السابقة</h3>
     <Loading v-if="isLoading == true" />
     <NoData v-else-if="lectures.length == 0" />
          <div>
              <div class="row">
                  <div class="col-md-4" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture">
                          <h5> {{lec.title}} </h5>
                          <h6> <a style="    display: inline-block;background: #28a745;color: #FFF;margin-bottom: 6px;padding: 6px;border-radius: 5px;" :href="lec.videoUrl">إضغط هنا</a> </h6>
                          <h6> أخر تعديل {{$moment(lec.updatedAt).fromNow()}}  </h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
import NoData from '@/components/NoData';
export default {
    components:{
        Loading,
        NoData
    },
    data(){
        return{
            lectures:[],
            isLoading: true
        }
    },
    created(){
        this.$axios.get(`/courses/${this.$route.params.id}/lectures`).then(res=>{
            console.log(res.data)
            this.lectures = res.data
             this.isLoading = false
        }).catch(err => this.isLoading = false).finally(() => this.isLoading = false)
    }
}
</script>

<style lang="scss">
.course-last-lectures{
    padding-top: 70px;
    .last-lecture{
        margin-bottom: 15px;
    background: #FFF;
    text-align: center;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    padding:15px;
    h5,h6{
        text-align: center;
    }
}
}

</style>