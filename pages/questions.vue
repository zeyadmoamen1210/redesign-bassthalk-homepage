<template>
  <div class="FAQ-questions">
        <div class="container">
            <Loading v-if="isLoading" />
            <div v-else style="box-shadow:0 4px 25px 0 rgba(0,0,0,.1);min-height: 500px;border: 1px solid #EEE;margin-top: 21px;position:relative">
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
        <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
    components:{
        Loading
    },
    data(){
        return {
            sent: [],
            question: "",
            isLoading: false
        }
    },
    methods:{
        sendQuestion: function(){
            this.isLoading = true
            this.$axios.post(`questions-students`, {question: this.question})
            .then(res => {
                console.log(res)
                this.$snotify.success(`تم إرسال السؤال بنجاح`);
            }).finally(() => this.isLoading = false)
        }
    }
}
</script>

<style lang="scss">

</style>