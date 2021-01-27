<template>
  <div class="course-last-lectures">
     
      <div class="container" >

          <div style="    display: flex;flex-wrap: nowrap;padding: 10px 7px 0;background: #f9f9f9;margin-bottom: 15px;border-bottom: 2px solid #0989c3;">
              <div style="flex:1">
                        <h3 style="margin-bottom:10px">محتوي الكورس</h3>
                    </div>
                    <div v-if="numberOfAllowedViews">
                        <h6 style="color:var(--danger)"> عدد المرات المسموحة للمشاهدة : <span style="position:static;position: static;padding: 6px 11px 4px;display: inline-block;" class="lec-order" > {{numberOfAllowedViews}} </span> </h6>
                    </div>
          </div>
        
          <div>
                    


     <Loading v-if="isLoading == true" />
     <NoData v-else-if="lectures.length == 0" />
          <div v-else>
              <div style="margin-bottom:15px" v-if="type">
                <!-- <iframe sandbox="allow-forms allow-scripts allow-same-origin"  style="width:100%;height:600px" :src="currVideo" frameborder="0" ></iframe> -->
                <iframe v-if="type == 'video' && !currVideo.includes('zoom.us')" style="border:none; height: 600px; width: 100%;" :src="currVideo" allowfullscreen></iframe>
                <audio style="    width: 100%;" controls :src="currVoice" v-else-if="type == 'voice'"></audio>
                <button class="btn btn-success" v-else-if="type == 'pdf'"> <a target="_blank" style="color:#FFF;" :href="currPDF"> فتح الملف </a> </button>
              </div>
              <div class="row">
                  <div class="col-md-3" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture" style="position:relative">

                          <i v-if="lec.type == 'voice'" class="fas fa-microphone Alec"></i>
                          <i v-else-if="lec.type == 'video'" class="fas fa-video Alec"></i>
                          <i v-else-if="lec.type == 'pdf'" class="fas fa-file-pdf Alec"></i>
                          <i v-else-if="lec.type == 'exam'" class="fas fa-file-alt Alec"></i>

                          <span class="lec-order" v-if="lec.order"> #{{lec.order}} </span>
                          
                          <h5 style="text-overflow: ellipsis;overflow: hidden;line-height: 1.5em;height: 4em;overflow: hidden;"> {{lec.title}} </h5>
                          <h6 style="font-weight: bold;font-size: 12px;color: #a9a9a9;margin-bottom:10px;"> {{$moment(lec.updatedAt).fromNow()}}  </h6>
                          <vs-button v-if="lec.type!='exam'" color="primary" @click="openVideo(lec)"> <i class="fas fa-chalkboard-teacher"></i> مشاهدة </vs-button>
                          <vs-button v-else color="primary"  @click="openExam(lec)" style="background:var(--warning)"><i class="fas fa-tasks"></i> الامتحان </vs-button>
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

                    this.currVideo = '';
                    this.currVoice = '';
                    this.currPDF = '';
                    
                    if(err.response.data.message.reason == 'exam'){
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}` })
                    }else if(err.response.data.message.reason == 'views'){
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
                    }else if (err.response.data.message.reason == 'lecture'){
                        this.$vs.notify({ title:"أتبع الترتيب الصحيح للمحاضرات", position:"top-center",color:"danger",  text: ` يجب تجاوز مشاهدة المحاضرة ${err.response.data.message.info} أولاً` })
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
                    if (this.type == 'video' && this.currVideo.includes('zoom.us')){
                        window.open(this.currVideo, "_blank");
                    }
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
                    }else if(err.response.data.message.reason == 'views'){
                        this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
                    }else if (err.response.data.message.reason == 'lecture'){
                        this.$vs.notify({ title:"أتبع الترتيب الصحيح للمحاضرات", position:"top-center",color:"danger",  text: ` يجب تجاوز مشاهدة المحاضرة ${err.response.data.message.info} أولاً` })
                    }
                    
                }
            }).finally(() => this.isLoading = false);
            
        }
    },
    watch:{
        page(val){
            this.isLoading = true;
            this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures?page=${val}&limit=12`).then(res=>{
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
                    }else if ( ele.videoUrl.includes('vimeo.com') && !ele.videoUrl.includes("player")){
                        ele.videoUrl = ele.videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")
                    }

                    console.log(ele.videoUrl)

               
                })

                this.page = res.data.page;
                this.totalPages = res.data.totalPages;
                this.isLoading = false
            }).catch(err => this.isLoading = false).finally(() => this.isLoading = false)
        }
    },
    created(){
        this.$axios.get(`/courses/${this.$route.params.id}/archived-lectures?limit=12`).then(res=>{
            console.log(res.data)
            this.lectures = res.data.docs;
            if (res.data.isLimitedNumberOfAllowedViews){
                this.numberOfAllowedViews = res.data.numberOfAllowedViews;
            }
            this.lectures.map(ele => {
                   if(ele.type == 'video' && ele.videoUrl.includes('www.youtube.com')){
                        ele.videoUrl = ele.videoUrl.replace("watch?v=", "embed/");
                        if (ele.videoUrl.includes('&')){
                            let index = ele.videoUrl.indexOf('&')
                            ele.videoUrl = ele.videoUrl.substring(0, index)
                        }
                    }else if (ele.type == 'video' && ele.videoUrl.includes('vimeo.com') && !ele.videoUrl.includes("player")){
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
    .Alec{
            font-size: 51px;
    margin-bottom: 0;
    margin-top: 15px;
    color: #e2e2e2;
    }
    .lec-order{
            display: inline-block;
    background: #f7f7f7;
    padding: 7px 10px;
    border: 1px solid #0989c3;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    font-weight: bold;
    top: 5px;
    color: #0989c3;
    }
    a:hover {
    text-decoration: none !important;
    color:#FFF !important;
}
    padding-top: 70px;
    .last-lecture{
          margin-bottom: 15px;
    background: #FFF;
    text-align: center;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    h5{
        padding-top:21px !important;
    }
    h5,h6{
        text-align: center;
        margin-bottom: 0;
    }
    button{
            width: 100%;
    margin: 0 -2px;
    border-radius: 0;
    border: none;
    text-align: center;
    font-family: 'CustomFontMedium';
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