<template>
  <div class="folders-page">
      <div class="container">
          <Loading v-if="isLoading" />
          <div v-else>
              <div class="title">
            <h3>
                <img src="@/assets/imgs/noun_exam_-1.png" alt="">
                مجلدات الإمتحانات</h3>
            </div>
          <div class="row">
              <div style="margin-bottom:15px" class="col-md-3" v-for="folder in folders" :key="folder.id">
                    <nuxt-link :to="`/folders/${folder.id}/exams`">
                    <div class="level-item box-shadow-class">
                        <img src="@/assets/imgs/folder.svg" alt="">
                        <h6> {{folder.name}} </h6>
                    </div>
                    </nuxt-link>
                </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
    components:{
        Loading
    },
    data(){
        return{
            folders:[],
            isLoading: true,
        }
    },
    created(){
        this.getCourseFolders()
    },
    methods:{
        getCourseFolders(){
            this.$axios.get(`courses/${this.$route.params.id}/folders`).then(res => {
                console.log(res)
                this.folders = res.data.docs;
            }).finally(() => this.isLoading = false)
        }
    }
}
</script>

<style lang="scss">
.folders-page{
    margin-top: 50px;
    .title{
        
        h3{
            margin-bottom: 20px;
            color: #46a8d5;
    }
    }
    .level-item{
        min-height: 154px !important;
        padding: 25px 0;
        text-align: center;
        h6{
                text-align: center;
    margin-bottom: 0;
    margin-top: 11px;
    font-size: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
        }
        >img{
            width:100px;
        }
    }
}
</style>