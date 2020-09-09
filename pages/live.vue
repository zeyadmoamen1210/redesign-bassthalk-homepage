<template>
  <div>

    <div class="container">
      <div class="live-details">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../assets/imgs/live-blue.png" alt="">
                  بث مباشر</h4>
              </div>

            </div>
         </div>

         <div class="col-md-6">
              <div class="lesson-btns" style="padding:0">
                <div class="row">
                  <div class="col-md-6">
                    <NuxtLink to="" active-class="active">
                      <button class="explain-btn">
                        <img src="../assets/imgs/live-dark.png" alt="">
                        تفاصيل البث</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink to="">
                      <button class="explain-btn">
                        <img src="../assets/imgs/noun_timeline_3037155.png" alt="">
                        التايم لاين</button>
                    </NuxtLink>

                  </div>
                </div>
              </div>

            </div>

        </div>




      </div>
    </div>

      <div class="live-content">
        <div class="live">
          <img src="../assets/imgs/carousel_header_1_0.jpg" alt="">
        </div>
        <div class="live-chat">
          <div class="live-chat-cont" style="overflow: hidden;">

              <div style="width: 64%;float: left;padding-top: 29px;color: #FFF;">
                <h6 style="font-size: 12px;">شرح المخطوطات الهندسية</h6>
                <h6 style="font-size: 12px;">أستاذة / ميادة رفعت</h6>
              </div>
                 <div class="teacher">
                <img src="../assets/imgs/teacher-100316.jpg" alt="">
                <img src="../assets/imgs/live-red.png" alt="">
              </div>
          </div>
          <p class="lead">
            هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي
          </p>
          <div class="chat-msgs">
            <div class="bottom-part">
                 <div class="chat-msg-cont">

              <div>
                <p class="lead">ذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي</p>
              </div>
                 <div>
                <h6>خالد محمد محمود</h6>
              </div>

            </div>
               <div class="form-groub">
                 <label for='chat-comment'>
                   <img src="../assets/imgs/noun_comment_1366176.png" alt="">
                   اضف تعليقا...
                 </label>
            <input type="text" @focus="placeholdInput" @blur="placeholdInput2" name="chat-comment">
          </div>
            </div>
          </div>

        </div>
        <div class="buttons-icons">
         <button @click="maximizeLive">
            <img src="../assets/imgs/noun_maximize_2135771.png" alt="">
         </button>
          <button @click="showChat">
            <img src="../assets/imgs/Path 7265.png" alt="">
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import NavbarBefore from '../components/NavbarBefore'
export default {
components:{
  NavbarBefore
},
methods:{
  showChat: function(e){
    let x = document.querySelector('.live-chat');
    x.classList.toggle('show-chat')
    if(x.classList.contains('show-chat')){
      x.style.right = 0;
      document.querySelector('.buttons-icons').style.paddingRight= "20%";

    }else{
      x.style.right = '-42%'
      document.querySelector('.buttons-icons').style.paddingRight= 0;
    }
  },
  maximizeLive: function(e){
    let x = document.querySelector('.live');
    x.classList.toggle('maxmized');
    if(x.classList.contains('maxmized')){
      document.querySelector('.buttons-icons').position = 'fixed !important'
      x.style.position = 'fixed';
      x.style.width = '100%';
      x.style.height = '100%';
      x.style.top = 0;
      x.style.left = 0;
      x.style.zIndex = 5
      e.target.parentElement.parentElement.style.position = 'fixed';
      e.target.parentElement.parentElement.style.top = '45px';
      e.target.parentElement.parentElement.style.left = '10px';

      document.querySelector('.live-chat').style.position = "fixed";
      document.querySelector('.live-chat').style.height = '100%';
      document.querySelector('.live-chat').style.top = '0';
      document.querySelector('.live-chat').style.zIndex = 7;


    }else{
      x.style.position = 'relative';
      x.style.width = '100%';
      x.style.height = '400px';
      e.target.parentElement.parentElement.style.position = 'absolute';

      document.querySelector('.live-content').style.position = 'relative'
      document.querySelector('.live-chat').style.position = "absolute";
      document.querySelector('.live-chat').style.height = '100%';
      document.querySelector('.live-chat').style.top = '0';

      document.querySelector('.live-chat').style.zIndex = 7;
      document.querySelector('.buttons-icons').position = 'absolute !important'

    }
  },
  placeholdInput: function(e){
    e.target.previousElementSibling.classList.toggle("show")
    if(e.target.previousElementSibling.classList.contains('show')){
      e.target.previousElementSibling.style.display="none"
    }else{
      e.target.previousElementSibling.style.display="block"
    }


  },
  placeholdInput2: function(e){
     e.target.previousElementSibling.classList.toggle("show")
    if(e.target.previousElementSibling.classList.contains('show')){
      e.target.previousElementSibling.style.display="none"
    }else{
      e.target.previousElementSibling.style.display="block"
    }
  }
}
}
</script>

<style lang="scss">
@import '../assets/sass/live.scss';
</style>
