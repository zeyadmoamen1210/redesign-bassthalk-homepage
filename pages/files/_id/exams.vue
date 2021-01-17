<template>
  <div class="examiner-exams">
     
      <div class="container">
           <div>
          <!-- <div style="display:flex" class="exams-head">
              <h4 style="flex:1;    padding-top: 5px;">الامتحانات</h4>
          </div> -->
      </div>
      <Loading v-if="isLoading" />
      <!-- <NoData v-else-if="!isLoading && privateExams.length == 0 && Object.keys(publicExam).length != 0" /> -->
      <NoData v-else-if="!isLoading && publicExams.length==0 " />
          <div class="exams" v-else>
            <vs-tabs>
            <vs-tab label="الامتحانات المجانية">

                 <div class="public-ex"> 
                      <div class="row">
                          <div class="col-md-3 pointer"  v-for="publicExam in publicExams"  :key="publicExam.id" @click="$router.push(`/privateExams/${publicExam.id}`)">
                      <div class="exam-card">
                          
                          <!-- {{publicExam}} -->
                            <h6> {{publicExam.title}} </h6>
                            <div class="cates">
                                 <vs-button style="font-size: 13px;font-family: 'CustomFontRegular';margin-bottom: 5px;    padding: 3px 7px;" color="success" type="border">{{publicExam.collectionId.name}}</vs-button>
                                <vs-button style="font-size: 13px;font-family: 'CustomFontRegular';margin-bottom: 5px;    padding: 3px 7px;" color="primary" type="border">{{publicExam.file.name}}</vs-button>
                            </div>
                            <h6 class="status status-paid" v-if="publicExam.type == 'private'"> مدفوع </h6>
                            <h6 class="status status-free" v-else-if="publicExam.type == 'puplic'"> مجاني </h6>
                            <div class="duration">
                                <i class="fas fa-clock"></i>
                                <span> {{publicExam.duration}} </span>
                            </div>
                            <button class="btn btn-primary" style="width:100%">بدء الامتحان</button>
                        </div>
                  </div>
                      </div>
                  </div>

            </vs-tab>

            <vs-tab label="الامتحانات المدفوعة">
                <div class="private-ex" style="    border-top: 2px solid #007afd;padding-top: 15px;margin-top:15px">
                     <div class="row">
                          <div class="col-md-3 pointer" v-for="exam in privateExams"  :key="exam.id" @click="privateExamsCanAccess ? openExam(exam.id) : ''">
                        <div class="exam-card">
                            <div class="exam-card-overlay" @click="showConfirmtionPaymentModal = true" v-if="!privateExamsCanAccess">
                              <div>
                                  <img src="@/assets/imgs/lock.png" />
                              </div>
                          </div>
                            <h6> {{exam.title}} </h6>
                            <div class="cates">
                                
                                <vs-button style="font-size: 13px;font-family: 'CustomFontRegular';margin-bottom: 5px;    padding: 3px 7px;" color="success" type="border">{{exam.collectionId.name}}</vs-button>
                                <vs-button style="font-size: 13px;font-family: 'CustomFontRegular';margin-bottom: 5px;    padding: 3px 7px;" color="primary" type="border">{{exam.file.name}}</vs-button>

                            </div>
                            <h6 class="status status-paid" v-if="exam.type == 'private'"> مدفوع </h6>
                            <h6 class="status status-free" v-else-if="exam.type == 'public'"> مجاني </h6>
                            <div class="duration">
                                <i class="fas fa-clock"></i>
                                <span> {{exam.duration}} </span>
                            </div>
                             <button class="btn btn-primary" style="width:100%">بدء الامتحان</button>
                        </div>
                    </div>
                     </div>
                 </div>


               <div style="display:block;    width: 100%;">
                    <vs-pagination :total="privateExamsTotalPages" v-model="privateExamsPage"></vs-pagination>
                </div>
            </vs-tab>
            </vs-tabs>
                 
                 

          </div>
      </div>


       <vs-popup
      class="holamundo"
      title="  دفع الإشتراك"
      :active.sync="showConfirmtionPaymentModal"
    >
      <div>
      <h5>بعد الدفع أرسل فاتورة الدفع إلى الواتس 01015152796 ، وسيعطونك كود الدخول</h5>
        <button class="btn btn-primary" @click="confirmPayment">
          دفع اﻹشتراك
        </button>
      </div>
    </vs-popup>



  </div>
</template>

<script>
import Loading from "@/components/Loading";
import NoData from "@/components/NoData";
export default {
    components:{
        Loading,
        NoData
    },
    data(){
        return{
            privateExams:[],
            publicExams:[],
            isLoading: true,
            addPrivateExamPopup: false,
            publicExam:null,
            addNewPrivateExam:{},
            addNewPublicExam:{},
            addPublicExamPopup:false,
            availabilityOptions:[
                {name:"متاح",value:true},
                {name:"غير متاح",value:false},
            ],
            difficultExamsOptions:[
                {name:"سهل",value:"easy"},
                {name:"متوسط",value:"middle"},
                {name:"صعب",value:"difficult"},
            ],
            showConfirmtionPaymentModal: false,
            privateExamsTotalPages: 1,
            privateExamsPage: 1
        }
    },
    watch:{
        privateExamsPage(val){
            this.isLoading = true;
            this.$axios.get(`/files/${this.$route.params.id}/private-exams?page=${val}`).then(res => {
                this.privateExams = res.data.docs;
                this.privateExamsPage= res.data.page;
                this.privateExamsTotalPages= res.data.totalPages;
                this.privateExamsCanAccess = res.data.canAccess;
            }).finally(() => this.isLoading = false)
        }
    },
    methods:{
        
        confirmPayment(){
      this.showConfirmtionPaymentModal=false;
       window.open('https://www.easykash.net/JLW4822','_blank');
    },
        openExam(exam_id){
            if(1==1){

                this.$router.push(`/privateExams/${exam_id}`)
            }else{
                       this.$snotify.error(`عفوا أنت غير مشترك`);

            }
        },
       
        getPuplicExam(){
            this.isLoading = true;
            this.$axios.get(`/files/${this.$route.params.id}/puplic-exam`).then(res => {
                this.publicExams = res.data;
            }).finally(() => this.isLoading = false)
        },
        getPrivateExams(){
            this.isLoading = true;
            this.$axios.get(`/files/${this.$route.params.id}/private-exams`).then(res => {
                this.privateExams = res.data.docs;
                this.privateExamsPage= res.data.page;
                this.privateExamsTotalPages= res.data.totalPages;
                this.privateExamsCanAccess = res.data.canAccess;
            }).finally(() => this.isLoading = false)
        }
    },
    created(){
        this.getPrivateExams();
        this.getPuplicExam();
    }
}
</script>

<style lang="scss">
.examiner-exams{
    padding-top:50px;

    .con-vs-pagination{
        margin: auto;
        margin-top: 22px;
    }
    .vs-pagination--ul{
        margin-bottom: 0;
    }
    .exams{
            margin-top:5px;
        }
        .exams-head{
              h4{
                  font-size: 30px;
              }
        }
    .exam-card{
        transition: all ease .5s;
        position: relative;
        margin-bottom: 10px;
        .exam-card-overlay{
            position: absolute;
            top:0;
            right:0;
            background: rgba(255, 255, 255, 0.7);
            width:100%;
            height:100%;
            z-index: 99;
           div{
               position: absolute;
               top:50%;
               left:50%;
               transform: translate(-50%,-50%);
               img{
                   width:100px;
               }
           }
        }
        &:hover{
            transform: translateY(-10px);
        }
        padding:15px;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        text-align: center;
        div{
            text-align: center;
         
        }
        .duration{
            i{
                color:#4e4e4e
            }
        }
        .status{
            margin-top:5px;
                margin-bottom: 2px;
        }
        .status-paid{
                color: #dc3545;
    font-size: 19px;
        }
        .status-free{
                color: #28a745;
    font-size: 19px;
        }
        .cates{
            
        }
        h6{
            text-align: center;
            &:first-of-type{
                    padding: 8px;
                    border-radius: 5px;
                    color: #007afd;
                    font-weight: bold;
                        font-size: 20px;
    white-space: nowrap;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
            }
        }
    }
}
.addExam{
    .vs--searchable .vs__dropdown-toggle{
        padding:5px !important;
    }
}


.btn.btn-primary{
    background-color: #007afd;
    border-color: #007afd;
    font-family: "CustomFontRegular";
    margin-top:5px;
    &:hover{
        background-color: #0063ce;
    border-color: #0063ce;
    }
}
</style>