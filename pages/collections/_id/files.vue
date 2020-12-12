<template>
  <div class="private-exam-files">
      <div class="container">
          <h4 class="head"> الملفات </h4>

          <Loading v-if="isLoading" />
        <NoData v-else-if="!isLoading && files.length == 0" />
         <div v-else>

            <div class="row">
            <div class="col-md-3" v-for="file in files" :key="file.id" @click="$router.push(`/files/${file.id}/exams`)">
              <div class="files">
                <div style="height:150px;margin-bottom:10px">
                  <img style="width:100%;height:100%" v-if="file.image" :src="file.image" />
                  <img style="width:100%;height:100%" v-else src="data:image/jpeg;base64,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" />
                </div>
                <h6> {{file.examiner.username}} </h6>

                <h5> {{file.name}} </h5>
                <button class="btn btn-primary" style="width:100%;text-align:center;background:#0989c3;border-color:#0989c3"> عرض التفاصيل </button>
              </div>
            </div>
          </div>

          <div  style="margin-top:15px" v-if="totalPages > 1">
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
  middleware: 'auth-student',

  components:{
    Loading,
    NoData
  },
  data(){
    return{
      files:[],
      page:0,
      isLoading: true,
      totalPages:0
    }
  },
  created(){
    this.$axios.get(`/collections/${this.$route.params.id}/files`).then(res => {
    this.isLoading = true;
      console.log(res);
      this.files = res.data.docs;
      this.page = res.data.page;
      this.totalPages = res.data.totalPages;
    }).finally(() => this.isLoading = false);
  }
}
</script>

<style lang="scss">
.private-exam-files{
  .head{
    font-size: 30px;
    margin-bottom: 20px;
  }
  padding-top:50px;
  .files{
    transition: all .5s ease;
    cursor: pointer;
    border-bottom: 10px;
    &:hover{
      transform: translateY(-10px);
    }
      box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    padding: 15px;
    div{
          text-align: center;
    }
    h6{
      text-align: center;
          margin-bottom: 0;
    }
    h5{
          text-align: center;
    padding: 7px;
    color: #0989c3;
    border-radius: 10px;
    }
  }
  .vs-pagination--ul{
    margin-bottom: 0 !important;
  }
  .con-vs-pagination{
    margin:auto !important;
  }
}

</style>