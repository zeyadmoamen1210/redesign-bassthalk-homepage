<template>
  <div class="course-last-lectures">
     
      <div class="container" >
        
          <div >
               <div style="display:flex:flex-wrap:nowrap">
                           <div style="flex:1">
                                <h3 style="margin-bottom:10px">المحاضرات السابقة</h3>
                           </div>
                           <div v-if="numberOfAllowedViews">
                                <h6> عدد المرات المسموحة للمشاهدة : <span style="color:#0989c3">{{ numberOfAllowedViews }}</span> </h6>
                           </div>
                       </div>


     <Loading v-if="isLoading == true" />
     <NoData v-else-if="lectures.length == 0" />
          <div v-else>
              <div style="margin-bottom:15px" v-if="type">
                <iframe v-if="type == 'video'" style="width:100%;height:600px" :src="currVideo" frameborder="0" allowfullscreen></iframe>
                <audio style="    width: 100%;" controls :src="currVoice" v-else-if="type == 'voice'"></audio>
                <button class="btn btn-success" v-else-if="type == 'pdf'"> <a target="_blank" style="color:#FFF;" :href="currPDF"> فتح الملف </a> </button>
              </div>
              <div class="row">
                  <div class="col-md-4" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture">
                          <h5> {{lec.title}} </h5>
                          <h6 class="clickable" @click="openVideo(lec)">إضغط هنا </h6>
                          <h6 v-if="lec.hasExam" @click="openExam(lec)" class="clickable" style="background:var(--warning)"> الأمتحان </h6>
                          <h6> أخر تعديل {{$moment(lec.updatedAt).fromNow()}}  </h6>
                      </div>
                  </div>
              </div>

               <div v-if="totalPages > 1">
                    <vs-pagination :total="totalPages" v-model="page"></vs-pagination>
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
            lecVideoPopup: false,
            isLoading: true,
            page:1,
            totalPages:1,
            currVideo: '',
            numberOfAllowedViews: "",
            currVoice:"",
            currPDF:"",
            type:''
        }
    },
    methods:{
        openExam(lec){
            this.isLoading = true;
            this.$axios.get(`/lectures-check/${lec.id}`).then(res => {
                this.$router.push(`/courseExam/${lec.exam}?exam=course`);
            }).catch(err => {
                if(err.response.status === 403){
                    console.log(err.response.data)

                    // this.currVideo = '';
                    // this.currVoice = '';
                    // this.currPDF = '';
                    
                    if(err.response.data.message.reason == 'exam'){
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}` })
                    }else{
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
                    }
                    
                }
            }).finally(() => this.isLoading = false);
            
        },
        openVideo(lec){
            this.isLoading = true;
            this.$axios.get(`/lectures-check/${lec.id}`).then(res => {
                if(lec.type == 'video'){
                    this.currVideo = lec.videoUrl;
                    this.type = 'video';
                }else if (lec.type == 'voice'){
                    this.currVoice = lec.videoUrl;
                    this.type = 'voice';

                }else{
                    this.currPDF = !lec.videoUrl.includes('https://') ? 'https://' + lec.videoUrl : lec.videoUrl;
                    this.type = 'pdf';

                }
                
                this.lecVideoPopup = true;
            }).catch(err => {
                if(err.response.status === 403){
                    console.log(err.response.data)

                    this.currVideo = '';
                    this.currVoice = '';
                    this.currPDF = '';
                    
                    if(err.response.data.message.reason == 'exam'){
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}` })
                    }else{
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
                    }
                    
                }
            }).finally(() => this.isLoading = false);
            
        }
    },
    watch:{
        page(val){
            this.isLoading = true;
            this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures?page=${val}`).then(res=>{
                console.log(res.data)
                this.lectures = res.data.docs;
                if (res.data.isLimitedNumberOfAllowedViews){
                    this.numberOfAllowedViews = res.data.numberOfAllowedViews;
                }

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
            if (res.data.isLimitedNumberOfAllowedViews){
                this.numberOfAllowedViews = res.data.numberOfAllowedViews;
            }
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
}
</script>

<style lang="scss">
.course-last-lectures{
    a:hover {
    text-decoration: none !important;
    color:#FFF !important;
}
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