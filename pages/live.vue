<template>
  <div>
    <NavbarBefore />

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
      x.style.right = '-34%'
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
    console.log('clicked');
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
.live-details{
      margin-bottom: 30px;
  margin-top: 50px;
  .title{
    padding-top: 14px;
    h4{
      color:#058ac6bd;
    }
  }

    h5{
    font-family: "CustomFontRegular";
    font-weight: bold;
    &:first-of-type{
                    margin-top: 25px;

    }
        }


}
 .lesson-btns{
      padding: 0 44px;
    button{
          width: 100%;
    text-align: center;
    background: #058ac6;
    border-radius: 9px;
    border: 0;
    padding: 13px;
    font-family: "CustomFontBold";
    color: #FFF;
    }
    .explain-btn{
      background: #DDD;
      color:#333;

    }
  }
  .live-content{
    position: relative;
    .live{
      width: 100%;
    height: 400px;
                position: relative;

      img{
        width: 100%;

        height: 100%;

      }
    }
    p.lead{
          font-family: "CustomFontMedium";
    font-size: 15px;
    color: #8F9698;
    padding: 10px;
    padding-right: 25px;
    }
    .buttons-icons{
          position: absolute;
    top: 15px;
    right: 15px;
    transition: all .4s linear;

    z-index: 6;
    button{
      background:transparent;
      border: 0;
    }
    }
    .live-chat{
          position: absolute;
    top: 0;
    height: 100%;
    width: 21%;
    background: #0E353E;
    right: -21%;
    transition: all .4s linear;

     .teacher{
        height: 58px;
    width: 63px;
    border-radius: 50%;
    border: 3px solid rgba(5, 138, 198, 0.74118);
    padding: 6px;
    background: #ebebeb;
    position: relative;
    margin: 12px;
    float: left;
      img{
        &:first-of-type{
              width: 100%;
    border-radius: 50%;
    height: 100%;
    position: absolute;
    top: 1px;
    left: 0;
        }
        &:last-of-type{
                  position: absolute;
    top: -8px;
    z-index: 3;
    left: -19px;
    width: 42px;
        }
      }
    }

    .chat-msgs{
               position: relative;
    height: 57%;
    top: 0;
    max-height: 54%;
      .bottom-part{
           position: absolute;
    bottom: 0;
        }
      .chat-msg-cont{

        overflow: hidden;

        >div{
          display: block;
          float: left;
          overflow: hidden;
          &:first-of-type{
            width: 70%;
            p{
             font-size: 8px;
    color: #FFF;
    padding-right: 10px;
            }
          }
          &:last-of-type{
            width: 30%;
            h6{
                    padding-top: 15px;
    padding-right: 10px;
    color: #AA8224;
    font-size: 10px;

            }
          }
        }
      }
    }
    .form-groub{
      position: relative;
  label{
         position: absolute;
    top: 20px;
    color: #FFF;
    right: 23px;
    font-family: "CustomFontBold";
    font-size: 12px;
  }
      input{

        box-shadow: none;
        color: #FFF;
        border-radius: 20px;

        padding: 10px;
    background: #242424;
    width: 95%;
    margin: 10px 8px;
    text-align: center;
    outline: 0;
      }
    }
    }
  }



// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.time-line .item-content > p{
      width: 100%;
    margin: 5px 0 33px;
    font-size: 13px;
}
.lesson-btns .explain-btn{
      margin-bottom: 14px;
}
.live-content .live-chat{
      position: static;
    width: 100%;
    height: auto;
}
.live-content .live-chat .chat-msgs{
      overflow: hidden;
    position: static;
}
.live-chat-cont{
      margin-bottom: 0;
      >div{
        &:first-of-type{
              width: 72% !important;
        }
      }
}
.live-content .live-chat .chat-msgs .chat-msg-cont > div:first-of-type p{
      font-size: 12px;
}
.live-content .live-chat .chat-msgs .chat-msg-cont > div:last-of-type h6{
        padding-top: 13px;
    padding-right: 28px;
    font-size: 16px;
}
.live-content p.lead{
      margin-bottom: 44px;
}
.live-content .live-chat .chat-msgs .bottom-part{
  position: static;
}

.live-content .buttons-icons{
  display: none;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
.live-chat{
  width: 34% !important;
}
.live-content .buttons-icons{
  padding-right: 34% ;
}
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
.live-chat{
  width: 34% !important;
}
.live-content .buttons-icons{
  padding-right: 34% ;
}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
