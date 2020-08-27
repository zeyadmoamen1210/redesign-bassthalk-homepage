<template>
  <div class="FAQ-questions">
        <div class="container">

          <vs-tabs>
      <vs-tab label="إرسال سؤال">
        <div class="con-tab-ejemplo">
           <Loading v-if="isLoading" />
            <div v-else style="box-shadow:0 4px 25px 0 rgba(0,0,0,.1);min-height: 410px;border: 1px solid #EEE;margin-top: 21px;position:relative">
                <div class="ask-ques" >
                  <div class="ask-ques-head" style="padding:15px">
                    <div class="row">
                      <div class="">
                        <img src="../assets/imgs/ask-ques.png" alt />
                      </div>
                      <div class="" style="width:80%">
                        <h4 style="padding-top: 31px;color: #545454;">أرسل سؤلك</h4>
                      </div>
                    </div>
                  </div>
                  <div class="ask-ques-head" style="padding-right: 16px;">
                      <div class="" style="display:inline-block">
                        <img src="../assets/imgs/chat-avatar.png" alt />
                      </div>
                      <div class=""  style="display:inline-block">
                        <p style="margin-top: 23px;">
                          قم بأرسال استفسارك و سنجاوب عليك في اسرع وقت
                        </p>
                      </div>
                  </div>
                  <div class="sent-question" style="position:relative;background-color:#DDD;padding:10px" v-for="send in sent" :key="send.id">
                      <p>{{send.head}}</p>
                      <span style="position:absolute"> {{new Date().toLocalString(send.createdAt)}} </span>
                  </div>
                  <div class="send" style="position:absolute;bottom:0;width:100%">
                    <div class="form-groub" style="position:relative">
                      <button style="position:absolute;left:0;top:1px;border: 0;background: none;" @click="sendQuestion">
                          <img src="../assets/imgs/send.png" alt  />
                      </button>
                      <input v-model="question" placeholder="أرسل سؤالك" type="text" class="form-control" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </vs-tab>
      <vs-tab label="الأسئلة الشائعة">
        <div class="con-tab-ejemplo">
          <div class="mylessons">
      <div class="container">
          <h3 style="margin-bottom:20px;color: #058ac6;">الأسئلة</h3>
          <Loading v-if="isLoading"/>
         <div v-else>
            <div v-if="questions.length == 0">
              <NoData />
            </div>
             <div v-else class="row">
              <div class="col-md-6" v-for="question in questions" :key="question.id">
                  <div class="mylesson-card">
                      <div class="mylesson-card-head">
                          <h6> السؤال: </h6>
                          <h6 style="font-family: 'CustomFontRegular'"> {{question.question}} </h6>
                      </div>
                  </div>
              </div>
         </div>
         </div>
      </div>
  </div>
        </div>
      </vs-tab>
      <vs-tab label="أسئلتي">
        <div class="con-tab-ejemplo">
          

          <div class="con-tab-ejemplo">
          <div class="mylessons">
      <div class="container">
          <h3 style="margin-bottom:20px;color: #058ac6;">أسئلتي</h3>
          <Loading v-if="isLoading"/>
         <div v-else>
            <div v-if="myQuestionsAsStud.length == 0">
              <NoData />
            </div>
             <div v-else class="row">
              <div class="col-md-6" v-for="question in myQuestionsAsStud" :key="question.id">
                  <div class="mylesson-card">
                      <div class="mylesson-card-head">
                          <h6> السؤال: </h6>
                          <h6 style="font-family: 'CustomFontRegular'"> {{question.question}} </h6>
                      </div>
                  </div>
              </div>
         </div>
         </div>
      </div>
  </div>
        </div>


        </div>
      </vs-tab>
    </vs-tabs>



           
        </div>
        <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import NoData from '../components/NoData'
export default {
    components:{
        Loading,
        NoData
    },
    data(){
        return {
            sent: [],
            question: "",
            isLoading: false,
            questions:[],
            isLoading: true,
            myQuestionsAsStud: []
        }
    },
    methods:{
        sendQuestion: function(){
            this.isLoading = true
            this.$axios.post(`questions-students`, {question: this.question})
            .then(res => {
                console.log(res)
                this.$snotify.success(`تم إرسال السؤال بنجاح`);
                this.questions.push(res.data)
                this.question = ''
            }).finally(() => this.isLoading = false)
        },

        getMyQuestions(){
          this.$axios.get(`statistics/myquestions`).then(res => {
            this.myQuestionsAsStud = res.data
            console.log(res)
          })
        }
    },
    created(){
      this.$axios.get(`statistics/myquestions`).then(res => {
            console.log(res)
            this.questions = res.data
        }).finally(() => this.isLoading = false)

        this.getMyQuestions()
    }
}
</script>

<style lang="scss">
.FAQ-questions{
  padding-top:80px;
}
.mylessons{
    padding-top: 30px;
    .mylesson-card{
        &:hover{
            transform: translateY(-10px);
        }
        transition: all .5s ease;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        padding: 15px;
        margin-bottom: 26px;
        >div{
            overflow: hidden;
    padding: 9px;
    background: #f1f1f1;
    margin-bottom: 12px;
            h6{
                float: right;
                display: inline-block;
                &:first-of-type{
                    margin-left: 8px;
                }
            }
        }
    }
}
</style>