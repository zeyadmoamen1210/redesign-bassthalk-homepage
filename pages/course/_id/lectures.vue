<template>
  <div class="course-last-lectures">
     
      <div class="container" >
                        <h3 style="margin-bottom:10px">المحاضرات السابقة</h3>


     <Loading v-if="isLoading == true" />
     <NoData v-else-if="lectures.length == 0" />
          <div v-else>
              <div style="margin-bottom:15px" v-if="currVideo">
                <iframe style="width:100%;height:600px" :src="currVideo" frameborder="0" allowfullscreen></iframe>
              </div>
              <div class="row">
                  <div class="col-md-4" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture">
                          <h5> {{lec.title}} </h5>
                          <h6 class="clickable" @click="openVideo(lec)">إضغط هنا </h6>
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
            lecVideoPopup: false,
            isLoading: true,
            page:1,
            totalPages:1,
            currVideo: '',
        }
    },
    methods:{
        openVideo(lec){
            this.currVideo = lec.videoUrl;
            this.lecVideoPopup = true;
        }
    },
    watch:{
        page(val){
            this.isLoading = true;
            this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures?page=${val}`).then(res=>{
                console.log(res.data)
                this.lectures = res.data.docs;
                this.lectures.map(ele => {
                   if(ele.videoUrl.includes('youtube.com')){
                        ele.videoUrl = ele.videoUrl.replace("watch?v=", "embed/");
                        if (ele.videoUrl.includes('&')){
                            let index = ele.videoUrl.indexOf('&')
                            ele.videoUrl = ele.videoUrl.substring(0, index)
                        }
                    }else if (ele.videoUrl.includes('vimeo.com') && !ele.videoUrl.includes("player")){
                        ele.videoUrl = ele.videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")
                    }

               
                })

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
            this.lectures.map(ele => {
                    ele.videoUrl = ele.videoUrl.replace("watch?v=", "embed/");
            })
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
.clickable{
        display: inline-block;
    background: var(--success);
    padding: 6px;
    margin-bottom: 6px;
    color: #FFF;
    border-radius: 6px;
    padding-top: 8px;
    cursor: pointer;
}
}

.con-vs-pagination{
    margin:auto;
}
.vs-pagination--ul{
    margin-bottom: 0;
}

</style>