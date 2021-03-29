<template>
  <div class="who-we-are-page">
      <Loading v-if="isLoading" />
       <div v-else>
           <div id="about-bassthalk">
        <div>
          <div class="about-bassthalk-title">
            <h6
              style="
                text-align: center;
                margin-bottom: 45px;
                font-size: 27px;
                color: #058ac6;
              "
            >
              <i style="font-size: 12px" class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <h5 style="display: inline-block;font-size: 29px;color: #333;">
                من نحن
              </h5>
              <i class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i style="font-size: 12px" class="fas fa-star"></i>
            </h6>
          </div>


            <div style="overflow: hidden;">
              <div class="row">
              <div class="col-md-6">
              <div style="    padding-top: 66px;padding-right: 50px;">
                <div class="container">
                  <div>
                    <h5 style="font-size:25px">خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                    <div>
                      <h6>
                        {{about.title}}
                      </h6>
                      <p style="    color: #949191;">
                        {{about.description}}
                      </p>
                    </div>
                    <div class="about-list">
                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-one.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>

                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-two.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>

                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-three.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div>
                <img style="width: 100%;" src="@/assets/home/about-img.png" alt="">
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>


      <div class="our-view-services">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="image">
                <img style="width:100%" src="@/assets/home/view-services.png" alt="">
                <div class="main-text">
                  <h5>
                    أكثر من 10 خدمات <br/>
                    علي منصة واحدة
                  </h5>
                </div>

                <div class="servies-one">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-two">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-three">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-four">
                  <h5>الخدمة</h5>
                </div>


                <div class="servies-five">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-six">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-seven">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-eight">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-nine">
                  <h5>الخدمة</h5>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div style="padding: 15px 25px 0 0;">
                <h5>خدمات و رؤية  <h6 style="color:#058ac6;display:inline-block;font-size:20px">
                  بسطتهالك
                  <img src="@/assets/imgs/logo.png" style="width:32px;" alt="">
                  </h6> 
                </h5>

                <p style="font-family: 'CustomFontRegular';font-size: 14px;line-height: 1.7;">
                  إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي 
                </p>

                <div>
                  <ul>
                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon.png" alt="">
                      </div>
                      <div>
                       <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-2.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-3.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-4.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-5.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="contact-with-bassthalk">
        <div class="contact-bassthalk-title">
            <h6
              style="
                text-align: center;
                margin-bottom: 45px;
                font-size: 27px;
                color: #058ac6;
                padding-top:40px
              "
            >
              <i style="font-size: 12px" class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <h5 style="display: inline-block;font-size: 29px;color: #333;">
                تواصل معنا
              </h5>
              <i class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i style="font-size: 12px" class="fas fa-star"></i>
            </h6>
          </div>
        <div class="row">
          <div class="col-md-7">
          <div class="form">
            <div class="container">
              <div>
                <h5>قم بملأ البيانات التالية</h5>
              </div>

              <div class="form-group">
                <input type="text" placeholder="الإسم" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" placeholder="البريد الإلكتروني" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" placeholder="رقم الهاتف" class="form-control">
              </div>
              <div class="form-group">
                <textarea  style="resize:none;height:170px" type="text" placeholder="الرسالة" class="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="contact-with-us">
            <h5 style="padding:15px;text-align:center;color:#FFF">تواصيل معنا علي </h5>
            <div class="container">
              <div>
              <ul style="list-style:none;">
                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-phone"></i>
                  01033143665
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-envelope-open"></i>
                  bassthalk.edu@gmail.com
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-map-marker-alt"></i>
                  رقم 18 , الهرم , الجيزة
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fab fa-whatsapp"></i>
                  01033143665
                </li>
              </ul>
            </div>

            <div class="social-network">
              <h5>التواصل الإجتماعي</h5>

              <ul >
                <li><i class="fab fa-facebook-square"></i></li>
                <li><i class="fab fa-youtube"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-linkedin"></i></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
       </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
    components:{
        Loading
    },
    data(){
        return {
            about:[],
            isLoading:true,
        }
    },
    created(){
         this.$axios.get(`about`).then((res) => {
            this.about = res.data;
        }).finally(() => this.isLoading = false)
    }
}
</script>

<style lang="scss">

    #about-bassthalk{
    padding:81px 0;

  .about-bassthalk-title{

  }
  .about-list{
    .about-feature{
      display: flex;
      margin-bottom: 30px;
      >div{
        img{
          width: 70px;
          margin-left:15px;
          margin-bottom:20px;
        }
        h5{
            margin-top: 13px;
        }
      }
    }
   
  }
}






.subjects-tags .course .status > div{
  text-align:end !important;
}
.modal-body{
  z-index: 99999;
}



@media (max-width: 575px) {
  .contact-with-bassthalk .form{
        padding-right:0px !important;
    }
  .image{
    >div:not(:first-of-type){
      h5{
        font-size: 13px !important;
      }
    }
    .main-text{
      h5{
        font-size: 11px !important;
      }
    }
  }
  .news-notification{
    padding: 0 !important;
  }
  .latest-news-section{
    min-height: 425px !important;
  }
  .apps-img {
    text-align: center !important;
    img {
      width: 329px !important;
    }
  }
  .head-who {
    width: auto !important;
  }
  .footer .copyright[data-v-0d2d6594] {
    margin: 24px auto 0;
    width: 90%;
    text-align: center;
  }

  .navbar-before-small .nav-small .logo  {
    width: 51px;
    float: right;
    height: 34px;
  }
  .home-page .question-and-answer .head-who {
    width: 227px;
  }
  .home-page .download-app .download-app-cont .head-who {
    width: 291px;
    margin-top: 116px;
  }
  .main-content {
    padding: 121px 27px 0 0;
  }
  .our-view .desc-cont {
    margin-top: 80px !important;
  }
  .our-view .desc-cont h3 {
    text-align: center;
  }
  .desc-cont p {
    width: 100% !important;
    text-align: center;
    padding: 10px;
  }
  .main-content p {
    font-size: 24px;
    text-align: center;

    text-align: center;
    padding: 0;
    margin: 0;
  }
  .wierd-paragraph {
    width: 100% !important;
  }
  .slider {
         background-size: 732px 629px;
    background-repeat: no-repeat;
    width: 100%;
    background-position: top;
    margin-top: -20px;
    min-height: 636px;
  }

  .home-page .our-view .desc-cont h3 {
    text-align: center;
  }
  .home-page .our-view .desc-cont p {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    padding: 0 10px;
  }
  .desc-cont .wierd-paragraph {
    margin-bottom: 0 !important;
  }

  .second .desc-image,
  .forth .desc-image {
    margin: 0 0;
    position: static;
    left: 0;
    height: 381px;
    width: auto;
  }

  .home-page .our-view .desc-image {
    width: auto;
  }
  .home-page .our-view .desc-cont {
    margin-top: 0 !important;
    padding-right: 0;
    width: 100%;
    margin-bottom: 0;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    margin-top: -120px !important;
  }
  .home-page .main-content {
    padding: 150px 0 0 0;
  }
  .home-page .main-content h1 {
    text-align: center;
    font-size: 42px;
  }
  .home-page .main-content p {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
  .home-page .download-app .download-app-cont .head-who h3 {
    font-size: 30px;
  }
  .home-page .download-app .download-app-cont h3 {
    font-size: 29px;
  }
  .home-page .download-app .android-ios .android {
    margin-bottom: 30px;
  }
  .home-page .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 9px;
    padding-top: 8px;
  }
  .home-page .question-and-answer .ask-ques {
    height: 433px;
    margin: 19px 0;
  }
  .home-page .question-and-answer .ask-ques .ask-ques-head h4 {
    margin: 0 0 20px;
    margin-top: 26px;
    font-size: 25px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 119px 0 0;
    width: 100%;
  }
  .download-app .android-ios .android {
    margin-bottom: 15px;
  }

  .our-view .desc-image {
    // width: 376px !important;
    margin: 0 !important;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .contact-with-bassthalk .form{
        padding-right:0px !important;
    }
  .image{
    .main-text{
      h5{
        font-size: 15px !important;
      }
    }
  }
  .news-notification{
    padding: 0 !important;
  }
  .apps-img {
    text-align: center !important;
    img {
      width: 329px !important;
    }
  }
  .navbar-before-small .nav-small .logo  {
    width: 68px;
    float: right;
    height: 59px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 0;
    padding-top: 85px;
  }
  .second .desc-image,
  .forth .desc-image {
    margin: 0 0;
    position: static;
    left: 0;
    height: 381px;
    width: auto;
  }

  .home-page .our-view .desc-cont {
    margin-right: 0;
    margin-top: 226px;
    margin-bottom: 0;
  }
  .home-page .second .desc-image,
   .home-page .forth .desc-image {
    position: relative;
    width: auto;
  }
  .home-page .second .desc-image img,
   .home-page .forth .desc-image img {
    width: 100%;
    height: 638px;
  }
  .home-page .our-view .desc-image {
    width: auto;
  }
  .home-page .download-app .android-ios div {
    margin-bottom: 15px;
  }
  .ask-ques {
    margin-top: 34px;
  }
  .home-page .our-view .desc-cont {
    margin-top: 221px;
  }
  .home-page .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 14px;
    padding-top: 5px;
  }

   .home-page .our-view .desc-cont h3 {
    text-align: center;
  }
    .home-page .our-view .desc-cont p {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    padding: 0 10px;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    padding: 0;
  }
  .desc-cont {
    margin-top: 0 !important;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    margin-top: 200px !important;
  }
  .wierd-paragraph {
    margin-bottom: 0 !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .image{
    
    .main-text{
      h5{
        font-size: 15px !important;
      }
    }
  }
  .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 11px;
  }
  .question-and-answer .questions-sec .ques .ques-item {
    height: 44px;
    padding: 13px 18px;
  }
  .question-and-answer .questions-sec .ques .ques-item .icon {
    margin: -6px 0;
  }
  .download-app .android-ios div {
    font-size: 11px;
  }
  .second .desc-cont p,
  .forth .desc-cont p {
    width: 100% !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .download-app .android-ios div {
    font-size: 15px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 0;
    margin-top: 156px;
  }

  .home-page .download-app .android-ios div {
    font-size: 13px;
  }
  .download-app .android-ios div {
    font-size: 15px;
  }
  .test-image-div {
    height: 497px;
  }
  .test-image-div .desc-image img {
    height: 100% !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .outer-slider {
    position: relative;
    top: -118px;
    z-index: -1;
  }
}

@media (min-width: 1200px) {
  .test-image-div {
    height: 497px;
  }
  .test-image-div .desc-image img {
    height: 100% !important;
  }

  .outer-slider {
    position: relative;
    top: -91px;
    z-index: -1;
  }
}

/* Bassthalk-apps section design */
#bassthalk-apps {
  background-image: url('../assets/home/bassthalk-apps.png');
  background-size: cover;

  .apps-text {
    padding: 74px 0;
  }
  .bassthalk-apps-title {
    text-align: center;
    margin: 2px 0 25px;
    color: #fff;
    i {
      &:first-of-type {
        font-size: 12px;
      }
      &:nth-of-type(2) {
        font-size: 15px;
      }

      &:nth-of-type(5) {
        font-size: 15px;
      }
      &:last-of-type {
        font-size: 12px;
      }
    }
  }

  .apps-img {
    overflow: hidden;
    text-align: left;
  }

  p {
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    line-height: 26px;
    font-family: 'CustomFontRegular';
  }
}

#the-best-students {
  padding: 39px 0;
  .best-student-title {
    i {
      color: #058ac6;
    }
  }
  h5 {
    text-align: center;
    padding: 9px 0;
    color: #0989c3;
  }
}

.latest-news-section {
  position: relative;
  // min-height: 500px;
  > img {
    position: absolute;
    bottom: -51px;
    width: 100%;
    z-index: -1;
    max-height: 500px;
  }
  .news-notification {
    padding-top: 222px;
  }
}


.our-view-services{
   .image{
      position:relative;

      .main-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-90%,-50%);
        h5{
          font-size: 25px;
        }
      }
      >div{
        position:absolute;
        &:not(:first-of-type){
          color: #585858;
          h5{
          font-family: 'CustomFontRegular';

          }
        }
      }
      .servies-one{
        top: 3%;
    right: 19%;
      }
      .servies-two{
        top: 34%;
    right: 4%;
      }

      .servies-three{
            bottom: 22%;
    right: 3%;
      }

      .servies-four{
          bottom: 2%;
    right: 18%;
      }

      .servies-five{
              bottom: 2%;
    left: 7%;
      }

       .servies-six{
           bottom: 26%;
    left: -4%;
      }

      .servies-seven{
               top: 30%;
    left: -4%;
      }

      .servies-eight{
         top: 5%;
    left: 4%;
      }

      .servies-nine{
            top: -6%;
    left: 50%;
      }

      >img{
        width: 100%;
      }
      
    }
    ul{
      li{
        margin-bottom:20px;
        h6{
          color:#058ac6;
               padding-top: 11px; 
    padding-right: 12px;
        }
        img{
          width:42px
        }
      }
    }
}
.contact-with-bassthalk{
  overflow: hidden;
 
  .contact-with-us{
    background-image:url('../assets/home/form.png');background-size:cover;height:100%;
    ul{
      padding:0 22px;
      li{
        line-height: 2.5;
         font-family: 'CustomFontRegular';
         direction: ltr;
      }
    }
     h5{
        padding: 45px 0 43px !important;
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: 'CustomFontRegular';

  }
  }
  .form{
    padding-right:50px;
    h5{
      font-family: 'CustomFontLight';
    }
    textarea{
          box-shadow: 0px 1px 10px 1px #ddd;
    border: none;
    }
  }

  .social-network{
    text-align: center;
    color: #FFF;
    h5{
      padding: 0 !important;
    }
    ul{
      list-style:none;
    text-align: center;

      li{
        display:inline-block;
        padding:0 5px;
        i{
          font-size:24px
        }
      }
    }
  }
}
</style>