<template>
  <div class="course-last-lectures">
     
      <div class="container" >
                        <h3 style="margin-bottom:10px">المحاضرات السابقة</h3>
     <Loading v-if="isLoading == true" />
     <NoData v-else-if="lectures.length == 0" />
          <div v-else>
              <div class="row">
                  <div class="col-md-4" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture">
                          <h5> {{lec.title}} </h5>
                          <h6> <a style="    display: inline-block;background: #28a745;color: #FFF;margin-bottom: 6px;padding: 6px;border-radius: 5px;" :href="lec.videoUrl">إضغط هنا</a> </h6>
                          <h6> أخر تعديل {{$moment(lec.updatedAt).fromNow()}}  </h6>
                      </div>
                  </div>
              </div>

               <div>
                    <vs-pagination :total="totalPages" v-model="page"></vs-pagination>
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
            isLoading: true,
            page:1,
            totalPages:1
        }
    },
    watch:{
        page(val){
            this.isLoading = true;
            this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures?page=${val}`).then(res=>{
                console.log(res.data)
                this.lectures = res.data.docs;
                this.page = res.data.page;
                this.totalPages = res.data.totalPages;
                this.isLoading = false
            }).catch(err => this.isLoading = false).finally(() => this.isLoading = false)
        }
    },
    created(){
        this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures`).then(res=>{
            console.log(res.data)
            this.lectures = res.data.docs;
            this.page = res.data.page;
            this.totalPages = res.data.totalPages;
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

.con-vs-pagination{
    margin:auto;
}
.vs-pagination--ul{
    margin-bottom: 0;
}

</style>