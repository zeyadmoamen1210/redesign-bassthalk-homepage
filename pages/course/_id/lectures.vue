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


       <vs-popup class="holamundo"  title="محاضرة مسجلة" :active.sync="lecVideoPopup">
        <iframe width="560" height="315" :src="currVideo" frameborder="0"></iframe>
        </vs-popup>
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
                    ele.videoUrl = ele.videoUrl.replace("watch?v=", "embed/");
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