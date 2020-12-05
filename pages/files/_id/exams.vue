<template>
  <div class="examiner-exams">
     
      <div class="container">
           <div>
          <div style="display:flex" class="exams-head">
              <h4 style="flex:1;    padding-top: 5px;">الامتحانات</h4>
          </div>
      </div>
      <Loading v-if="isLoading" />
      <!-- <NoData v-else-if="!isLoading && privateExams.length == 0 && Object.keys(publicExam).length != 0" /> -->
      <NoData v-else-if="!isLoading && publicExams.length==0 " />
          <div class="exams" v-else>
              <div class="row">
                  <div class="col-md-3 pointer"  v-for="publicExam in publicExams"  :key="publicExam.id" @click="$router.push(`/privateExams/${publicExam.id}`)">
                      <div class="exam-card">
                          <!-- {{publicExam}} -->
                            <h6> {{publicExam.title}} </h6>
                            <div class="cates">
                                <span style="background:#5f27cd"> {{publicExam.collectionId.name}} </span>
                                <span style="background:#007afd;"> {{publicExam.file.name}} </span>
                            </div>
                            <h6 class="status status-paid" v-if="publicExam.type == 'private'"> مدفوع </h6>
                            <h6 class="status status-free" v-else-if="publicExam.type == 'puplic'"> مجاني </h6>
                            <div class="duration">
                                <i class="fas fa-clock"></i>
                                <span> {{publicExam.duration}} </span>
                            </div>
                        </div>
                  </div>
                  <div class="col-md-3 pointer" v-for="exam in privateExams"  :key="exam.id" @click="openExam(exam.id)">
                        <div class="exam-card">
                            <h6> {{exam.title}} </h6>
                            <div class="cates">
                                <span style="background:#5f27cd"> {{exam.collectionId.name}} </span>
                                <span style="background:#007afd;"> {{exam.file.name}} </span>
                            </div>
                            <h6 class="status status-paid" v-if="exam.type == 'private'"> مدفوع </h6>
                            <h6 class="status status-free" v-else-if="exam.type == 'public'"> مجاني </h6>
                            <div class="duration">
                                <i class="fas fa-clock"></i>
                                <span> {{exam.duration}} </span>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>


      



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
        }
    },
    methods:{
        openExam(exam_id){
            if(1==1){

                this.$router.push(`/privateExams/${exam_id}`)
            }else{
               this.$vs.notify({position: "top-center",title:"Failed", title:"عفوا أنت غير مشترك",color:"danger"});

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
            this.$axios.get(`/files/${this.$route.params.id}/private-exams?paginate=false`).then(res => {
                this.privateExams = res.data;
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
            span{
                    color: rgb(255, 255, 255);
    margin: 0px;
    padding: 2px 5px;
    border-radius: 5px;
    text-align: center;
    font-family: "CustomFontRegular";
    display: inline-block;
            }
        }
        h6{
            text-align: center;
            &:first-of-type{
                    padding: 8px;
                    background: #007afd;
                    border-radius: 5px;
                    color: #FFF;
                    font-weight: bold;
            }
        }
    }
}
.addExam{
    .vs--searchable .vs__dropdown-toggle{
        padding:5px !important;
    }
}
</style>