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


      <div class="time-line">
        <div class="time-line-comment-teacher">
          <div class="item">
            <div class="time-line-shape">
              <div class="item-1"></div>
            </div>
                 <div class="item-content">
              <h6>الاستادة / ميادة رفعت</h6>
              <span>منذ ساعة</span>
              <p>
                هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
              </p>
              <div>
                <button @click.self="likedFunc">
                  <img src="../assets/imgs/noun_Ok_1659535.png" alt="">
                  حسنا</button>
                <button @click.self="commentActive">
                  <img src="../assets/imgs/noun_comment_1366176.png" alt="">
                  150</button>



              </div>



            </div>

            <div class="teacher">
              <img src="../assets/imgs/teacher-100316.jpg" alt="">
              <img src="../assets/imgs/teacher-icon.png" alt="" style="width: auto;right: 7px;top: 0px;">
            </div>

             <div class="double-comment">
                    <form action="">
                      <div class="form-groub">
                        <input type="text" placeholder="أكتب تعليقك">
                      </div>
                    </form>

                    <div class="double-comment-cont" v-for="x in 5" :key="x">
                         <div style="">
                          <h6>اسم المستخدم</h6>
                            <span>منذ ساعة</span>
                            <p>
                              هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                            </p>
                        </div>

                        <div class="user-pic">
                          <img src="../assets/imgs/chat-avatar.png" alt="">
                        </div>

                    </div>
                  </div>

          </div>
          <div class="item"></div>
        </div>



         <div class="time-line-comment-students" v-for="x in 5" :key="x">
          <div class="item">
             <div class="time-line-shape">
              <div class="item-1"></div>
            </div>
                 <div class="item-content">
              <h6 style="font-family: 'CustomFontBold';">محمد احمد</h6>
              <span>منذ ساعة</span>
              <p>
                هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
              </p>
              <div>
                <button @click.self="likedFunc">
                  <img src="../assets/imgs/noun_Ok_1659535.png" alt="">
                  حسنا</button>
                <button @click.self="commentActive">
                  <img src="../assets/imgs/noun_comment_1366176.png" alt="">
                  150</button>



              </div>


            </div>
            <div class="teacher">
              <img src="../assets/imgs/teacher-100316.jpg" alt="">
              <img src="" alt="">
            </div>

              <div class="double-comment">
                    <form action="">
                      <div class="form-groub">
                        <input type="text" placeholder="أكتب تعليقك">
                      </div>
                    </form>

                    <div class="double-comment-cont" v-for="x in 5" :key="x">
                         <div style="">
                          <h6>اسم المستخدم</h6>
                            <span>منذ ساعة</span>
                            <p>
                              هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                            </p>
                        </div>

                        <div class="user-pic">
                          <img src="../assets/imgs/chat-avatar.png" alt="">
                        </div>

                    </div>
                  </div>


          </div>
          <div class="item"></div>
        </div>
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
  likedFunc: function(e){
    console.log(e.target.children[0])
    e.target.classList.toggle('liked')
    if(e.target.classList.contains('liked')){
      e.target.classList.add('liked')
      e.target.children[0].setAttribute('src','https://i.ibb.co/TvRwRD2/Group-6974.png')
    }
    else{
      e.target.classList.remove('liked')
      e.target.children[0].setAttribute('src','https://i.ibb.co/m8QGJJv/noun-Ok-1659535.png')
    }
  },
  commentActive: function(e){
    console.log(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling)

    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle('doubleCommentView')
    if(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.contains('doubleCommentView')){
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'block'
    }else{
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'none'

    }

  }
}
}
</script>

<style lang="scss">
.liked{
  color:#058ac6 !important;
  font-family: "CustomFontHeavy" !important;
}
.live-details{
  margin-top: 50px;
  .title{
    padding-top:15px;
    h4{
      color:#058ac6bd;
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

  .time-line{
    margin-top: 30px;
    .item{
      overflow: hidden;
    }

    .time-line-comment-teacher{
      background: #eae9e9;
    border-radius: 10px;
    margin-bottom: 10px;
    }

    .time-line-shape{
          float: right;
    overflow: hidden;
    width: 5%;
    text-align: center;
    margin-top: 17px;

      .item-1{
            width: 10px;
    height: 10px;
    background-color: #058ac6;
    border-radius: 50%;
    margin: 15px auto;
    border: 2px solid #058ac6;
    padding: 5px;
    position: relative;
    &::after{

    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid #058ac6;
    padding: 10px;
    border-radius: 50%;

    }
      }
    }

       .teacher{
        height: 58px;
    width: 63px;
    border-radius: 50%;
    border: 3px solid rgba(5, 138, 198, 0.74118);
    padding: 6px;
    background: #ebebeb;
    position: relative;
    margin: 12px;
    float:left;
      img{
        &:first-of-type{
            width: 97%;
    border-radius: 50%;
    height: 97%;
    position: absolute;
    top: 1px;
    left: 1px;
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
    .item-content{
      width: 87%;
    float: left;
    padding: 18px 22px;
    >h6{
          color: #3f3f3f;
    font-family: "CustomFontLight";
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 0;
    }
    >span{
      font-family: "CustomFontRegular";
    color: #a0a0a0;
    }
    >p{
      width: 51%;
    line-height: 1.8;
    }
    div{
      >button{
            background-color: transparent !important;
    border: 0;
    font-family: "CustomFontLight";
    color: #747474;
    font-weight: 600;
    font-size: 15px;
    outline:none;
      }
    }


    }




  }
  .time-line-comment-students{
        background: #eae9e9;
    border-radius: 10px;
    margin-bottom: 10px;
  }
.double-comment{
      clear: both;
          width: 85%;
          display: none;
      margin-top: 30px;
      margin: auto;
      input{
        width: 100%;
        padding: 10px;
        outline: none;
      }

      .double-comment-cont{
            overflow: hidden;
    margin-top: 25px;
    border-bottom: 1px solid #c7c7c7;
        h6{
          color: #686868;
    font-family: "CustomFontMEdium";
    margin-bottom: 0;
        }
        span{
              color: #8d8d8d;
    font-family: "CustomFontRegular";
    margin: 15px 0;
        }
        p{
              font-family: "CustomFontRegular";
    color: #0c0c0c;
        }
        div{
          &:first-of-type{
        display: block;
    width: 88%;
    float: left;
      }
        }
      }
    }


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .live-details{
    padding-top: 60px;
  }
.time-line .item-content > p{
      width: 100%;
    margin: 5px 0 33px;
    font-size: 13px;
}
.lesson-btns .explain-btn{
      margin-bottom: 14px;
}
.time-line .item-content{
      width: 72%;
          padding: 18px 15px;
}
.time-line .time-line-shape{
      margin-top: 8px;
          width: 11%;
}
.time-line .item-content .double-comment{
  width:100%;
}

.double-comment .double-comment-cont div:first-of-type{
      width: 72%;
}
.double-comment .double-comment-cont p{
  font-size: 13px;
}
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
 .live-details{
    padding-top: 60px;
  }
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }

</style>
