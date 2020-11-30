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
                <div>
                  <vs-avatar :src="file.examiner.photo" v-if="file.examiner.photo" size="70px" />
                  <vs-avatar src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg" v-else size="70px" />
                </div>
                <h6> {{file.examiner.username}} </h6>

                <h5> {{file.name}} </h5>
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
    }
    h5{
          text-align: center;
    background: #0989c3;
    padding: 7px;
    color: #FFF;
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