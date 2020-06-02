<template>
  <div>
    <div class="video-bannar">
         <img src="../../assets/imgs/noun_play_1914265.png">
         <span>10:33</span>
       </div>

       <div class="container">
         <div class="another-videos">
           <div class="title">
             <h5>الشرح بطريقة اخري</h5>
           </div>
           <div class="row">
             <div class="col-md-6">
               <div class="another-videos-cont">
                  <div class="video-bannar">
                    <img src="../../assets/imgs/noun_play_1914265.png">
                    <span>10:33</span>
                  </div>
               </div>
             </div>

             <div class="col-md-6">
               <div class="another-videos-cont">
                 <div class="video-bannar">
                    <img src="../../assets/imgs/noun_play_1914265.png">
                    <span>10:33</span>
                  </div>
               </div>

             </div>
              <div class="col-md-12">
                <button class="fullWidthBtn">أبدء الأختبار</button>
              </div>
           </div>
         </div>
       </div>

       <div class="container">
         <div class="leactures-comments">
           <div class="title">
             <h6>التعليقات</h6>
           </div>
           <div class="row">
             <div class="col-md-12">
               <form action="">
                 <input type="text" placeholder="أكتب تعليقك">
               </form>
               <div class="lect-live-comments" v-for="x in 3" :key="x">
                  <div class="comment-time">
                     <h6>الاتنين 08:33 11-10-2019</h6>
                   </div>
                 <div class="user-comment">
                   <div class="img">
                     <img src="../../assets/imgs/chat-avatar.png" alt="">
                   </div>
                   <div class="user-comment">
                     <h6>اسم المستخدم</h6>
                   </div>

                 </div>
                 <h6>طريقة شرح ممتازة</h6>
               </div>
             </div>
           </div>
         </div>
       </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.video-bannar{
    min-height: 400px;
    background: url('../../assets/imgs/carousel_header_1_0.jpg');
    background-size: cover;
    margin-top: 20px;
    position: relative;
    img{
          position: absolute;
    /* left: 20px; */
    top: 50%;
    transform: translate(-50%);
    z-index: 2;
    left: 126px;
    }
    span{
      position: absolute;
      transform: translate(-50%);
      z-index: 3;
          color: #FFF;
    font-family: "CustomFontBold";
    top: 66%;
    left: 123px;
    font-size: 21px;
    }
    &::after{
         position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0.36);
    }
  }
  .another-videos{
    .title{
      h5{
        margin-top: 30px;
        margin-bottom: 0;
        font-size: 22px;
        font-family: "CustomFontRegular";
      }
    }
     .fullWidthBtn{
          padding: 13px;
    width: 100%;
    text-align: center;
    margin-top: 19px;
    background: #0989c3;
    color: #FFF;
    font-family: "CustomFontBold";
    border: 0;
    border-radius: 8px;
      }
    .another-videos-cont{

      .video-bannar{
        min-height: 300px;
        img{
              width: 41px;
        }
        span{
          top: 70%;
        }
      }
    }
  }
  .leactures-comments{
    .title{
      h6{
            margin: 36px 0 10px;
    font-family: "CustomFontBold";
    color: #797979;
    font-size: 19px;
      }
    }
    form{
      input{
        width: 100%;
        padding: 14px 11px;
        margin-bottom: 10px;
      }
    }
    .lect-live-comments{
      .comment-time{
       position: absolute;
    top: 18px;
    left: 21px;
    h6{
      font-family: "CustomFontLight";
    color: #0989c3;
    font-weight: bold;
    font-size: 12px;
    }
      }
            margin: 15px 0px;
    background: #f2f2f2;
    /* padding: 29px 15px 46px; */
    position: relative;
    min-height: 109px;
    padding: 12px;
    border-radius: 6px;
    >h6{
                 position: absolute;
    top: 55%;
    color: #797979;
    margin-top: 8px;
    }

    .user-comment{
         display: inline-block;
    position: absolute;
    top: 7px;
    width: 50%;
          h6{
                 display: inline-block;
    padding: 0 9px;
    color: #cfc8c8;
    margin: 0;
          }
     .img{
       display: inline-block;
        img{
                width: 44px;
    height: 38px;
      }
     }
    }
    }
  }

</style>
