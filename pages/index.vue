<template>
  <div>
    <div class="home-page">
      <div class="slider">
        <NavbarHomeBefore />

        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="main-content">
                <h1>دروسك في بيتك</h1>
                <p>
                  الأن مع بستطهالك كل دروسك من بيتك في كل المواد الدراسية
                  <br />بين افضل المتفوقين
                </p>
                <nuxt-link
                  :to="'/links'"
                  class="text-center"
                  style="display:block;font-size:20px"
                >اللينكات</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="who-we-are" id="who-we-are">
        <div class="background-who-we-are">
          <img src="../assets/imgs/logo.png" alt style="width: 100%;" />
        </div>
        <div class="container">
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>من نحن</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="logo-who-we-are">
            <img src="../assets/imgs/logo.png" alt />
          </div>
          <div class="title-who-we-are">
            <p>هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز هناك حقيقة مقبتة منذ زمن طويل و هي ان المحتوي المقروء لصفحة ما يسهلها القارئ عن التركيز علي الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأهاز</p>
          </div>
        </div>
      </div>

      <div class="our-view" id="our-view">
        <div class="container">
          <div class="head-who" style="margin-bottom: 0;">
            <span></span>
            <span></span>
            <span></span>
            <h3>رؤيتنا</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="view-cont first" style="overflow:hidden;">
          <div class="row">
            <div class="col-md-5">
              <div class="desc-image">
                <img src="../assets/imgs/البساطة.png" alt />
              </div>
            </div>
            <div class="col-md-7">
              <div class="desc-cont" style="margin-top: 170px;">
                <h3>البساطة</h3>
                <p>تطبيق بسطتهالك يقدم لك طريقة سهلة و ابداعية في شرح المواد في جميع المراحل.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="view-cont second" style="overflow:hidden;">
          <div class="row">
            <div class="col-md-5 order-md-7 test-image-div">
              <div class="desc-image">
                <img src="../assets/imgs/الاختبارات.png" alt />
              </div>
            </div>

            <div class="col-md-7 order-md-5">
              <div class="container">
                <div class="desc-cont">
                  <h3>الأختبارات</h3>
                  <p
                    class="wierd-paragraph"
                  >العديد من الأختبارات سواء كانت علي الدروس أو اختبارات عامة او اخبارات بنك المعلومات .</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="view-cont thired" style="overflow:hidden;">
          <div class="row">
            <div class="col-md-5">
              <div class="desc-image">
                <img src="../assets/imgs/المنافسة.png" alt />
              </div>
            </div>
            <div class="col-md-7">
              <div class="container">
                <div class="desc-cont" style="margin-top: 170px;">
                  <h3>المنافسة</h3>
                  <p>سيتم عمل ترتيب عام للمتفوقين من حيث الأكثر حصولا علي النقاط و اجتياز الأختبارات.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="the-best" style="overflow:hidden;" id="the-best">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="head-who">
                <span></span>
                <span></span>
                <span></span>
                <h3>المتفوقين</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="all-the-best-btn">
                <button class="btn">عرض جميع المتفوقين</button>
              </div>
            </div>
          </div>

          <div class="best-sort" style="overflow:hidden;">
            <div class="row">
              <div class="col-md-4">
                <div class="user-sort-item">
                  <div class="profile-pic">
                    <span>
                      <img src="../assets/imgs/thired2x.png" alt />
                    </span>
                    <img src="../assets/imgs/user.png" alt />
                    <div class="profile-cont">
                      <h3>احمد محمود</h3>
                      <h3>الصف الاول الثانوي</h3>
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>150</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="user-sort-item first-student">
                  <div class="profile-pic">
                    <span>
                      <img src="../assets/imgs/first3x.png" alt />
                    </span>
                    <img src="../assets/imgs/user.png" alt />
                    <div class="profile-cont">
                      <h3>احمد محمود</h3>
                      <h3>الصف الاول الثانوي</h3>
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>150</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="user-sort-item">
                  <div class="profile-pic">
                    <span>
                      <img src="../assets/imgs/second-2x.png" alt />
                    </span>
                    <img src="../assets/imgs/user.png" alt />
                    <div class="profile-cont">
                      <h3>احمد محمود</h3>
                      <h3>الصف الاول الثانوي</h3>
                      <div class="profile-cont-point" style="overflow:hidden">
                        <img src="../assets/imgs/point.png" alt />
                        <h6>150</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="download-app" id="download-app">
        <div class="container">
          <div class="download-app-cont" style="overflow:hidden">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <div class="head-who">
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>حمل التطبيق</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>قم بتحميل تطبيق الجوال الان</h3>
                  <div class="android-ios" style="overflow:hidden">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="android" style="overflow:hidden">
                          <div class="row">
                            <div class="col-md-6">
                              <div>حمله من جوجل بلاي</div>
                            </div>
                            <div class="col-md-6">
                              <div>
                                <img src="../assets/imgs/android.png" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="ios">
                          <div class="row">
                            <div class="col-md-6">
                              <div>حمله من أب استور</div>
                            </div>
                            <div class="col-md-6">
                              <div>
                                <img src="../assets/imgs/apple.png" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div>
                  <img src="../assets/imgs/mobile.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="question-and-answer" id="question-and-answer">
        <div class="container">
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>أسئلة و أجوبة</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="questions-sec">
            <div class="row">
              <div class="col-md-6">
                <div class="ques">
                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item" style="overflow:hidden">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>ما الطريقة الصحيحة للترتيب في افضل 3 متفوقين ؟</h4>
                        <p>هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="dropdownQustion">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="ask-ques">
                  <div class="ask-ques-head">
                    <div class="row">
                      <div class="col-md-3 col-3">
                        <img src="../assets/imgs/ask-ques.png" alt />
                      </div>
                      <div class="col-md-9 col-9">
                        <h4>أرسل سؤلك</h4>
                      </div>
                    </div>
                  </div>
                  <div class="ask-ques-head" style="padding-right: 16px;">
                    <div class="row">
                      <div class="col-md-3 col-3">
                        <img src="../assets/imgs/chat-avatar.png" alt />
                      </div>
                      <div class="col-md-9 col-9">
                        <p style="margin-top: 23px;">قم بأرسال استفسارك و سنجاوب عليك في اسرع وقت</p>
                      </div>
                    </div>
                  </div>
                  <div class="send">
                    <div class="form-groub">
                      <img src="../assets/imgs/send.png" alt />
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="partnars" id="partnars">
            <div class="container">
              <div class="head-who">
                <span></span>
                <span></span>
                <span></span>
                <h3>شركاؤنا</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="partnars-item" style>
                <div class="row">
                  <div class="col-md-4">
                    <div class="partner">
                      <div>شركاءنا</div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="partner">
                      <div>شركاءنا</div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="partner">
                      <div>شركاءنا</div>
                    </div>
                  </div>
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
import NavbarHomeBefore from '../components/NavbarHomeBefore'
import Footer from '../components/Footer'
export default {
  components: {
    NavbarHomeBefore,
    Footer
  },
  methods: {
    dropdownQustion: function(e) {
      let ele =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement
      ele.classList.toggle('active-question')
      console.log('hi')
      if (ele.classList.contains('active-question')) {
        ele.style.height = '100px'
        e.target.setAttribute('src', 'https://i.ibb.co/qpwZbrB/minus.png')
      } else {
        ele.style.height = '50px'
        e.target.setAttribute('src', 'https://i.ibb.co/QJMj56D/add.png')
      }
    }
  }
}
</script>

<style scoped>



.blue-ball{
  top:-46px;
  right:-43px;
  content: '';
  height:97px;
  width:100px;
  background:#098bc1;
  border-radius: 50%;
  border:1px solid #098bc1;
}

.head-who h3{
  text-align: center;
}
span:first-of-type{
width:12px;
height:12px;
top:14px;
right:4px;  
}
span:nth-of-type(2){
width:12px;
height:12px;
top:14px;
left:4px;
}


span{
position: absolute;
width:20px;
height:20px;
content:'';
background: #058ac6;
border:1px solid #058ac6;
border-radius: 50%;
}
span:nth-of-type(3){
    top:13px;
    left:20px;
    height:14px;
    width:15px;
}
span:nth-of-type(4){
    top:10px;
   left:40px;
   }
span:nth-of-type(5){
    top:13px;
    right:20px;
    height:14px;
    width:15px;
}
span:nth-of-type(6){
     top:10px;
     right:40px;
     }



.slider{
min-height:762px;
background:url('../assets/imgs/header.png');
background-size:cover;
background-position:left;
background-repeat:no-repeat
}
  .title-who-we-are p{
        text-align:center;
        font-family:"CustomFontRegular"
    }
.main-content{
  padding:168px 87px 0 0;
}
.main-content h1{
        margin-bottom:21px;
        font-size:40px;
        font-family:"CustomFontHeavy";
}
.main-content p{
      font-family:"CustomFontRegular";
      font-size:30px;
      font-weight:600;
      opacity:0.8;
      width:83%;
}
.main-content .light-ball{
    width:270px;
    height:264px;
    position: absolute;;
    background: #058ac67a;
    border:1px solid #abd8ec36;
    opacity:0.7;
    border-radius: 50%;;
    right:-149px;
    bottom:-126px;
}
.head-who{
  position: relative;
      width: 300px;
    margin: 30px 0;
}
.who-we-are{
    position:relative;
    min-height:330px;
    margin-top:67px;
}
.who-we-are .background-who-we-are{
      position: absolute;;
      top:0;
      opacity:0.1;
      left:50%;
      transform: translate(-50%);
}
.who-we-are .logo-who-we-are{
      width:100px;
      height:100px;
      text-align:center;
      margin:auto;
}
.who-we-are .logo-who-we-are img{
        width:100%;
        height:100%;
        display:inline-block;
}
  
.our-view .desc-image{
    width:442px;
    margin:177px 0;
    
}
.our-view .desc-image img{
    width:100%;
    height:100%;
    margin: 52px 0 0 0;
}
.our-view .desc-cont{
margin-top:110px;
}
.our-view .desc-cont h3{
font-family:"CustomFontRegular";
    font-size:44px;
    font-weight:bold;
}
.our-view .desc-cont p{
    font-size:27px;
    width:67%;
}
.view-cont.second{
  overflow: hidden;
    position: relative;
    min-height: 570px;
}
.our-view .view-cont{
  position: relative;
}
.our-view .view-cont .view-ball{
    position: absolute;;
    right: -226px;
    top:3px;
    width:575px;
    height:489px;
    background: rgba(5, 138, 198, 0.38039);
    border-radius: 50%;
}
.our-view .view-cont .view-ball .view-ball-inner{
    position: absolute;;
    right:25px;
    top:24px;
    width:509px;
    height:443px;
    background:#098bc1;
    border-radius:50%;
}

.second .desc-image , .forth .desc-image{
       margin: 0;
    position: absolute;
    left: 0;
    height: 527px;
}
.second .desc-image img, .forth .desc-image img{
   width: 100%;
    height: 98%;
    margin-right:0;
    margin-top: -5px;

    
}
.send{
      position: absolute;
    bottom: 10px;
    width: 100%;
}
.title-who-we-are p{
    text-align: center;
    font-family: "CustomFontRegular";
    font-weight: bold;
}
.second .desc-cont , .forth .desc-cont{
    padding:0 140px 0 0;
    margin:85px 0;
}
.second .desc-cont h3, .forth .desc-cont h3{
    font-family:"CustomFontRegular";
    font-size:44px;
    font-weight:bold;
}
.second .desc-cont p, .forth .desc-cont p{
    font-size:27px;
    width:67%;
}
.second .view-ball , .forth .view-ball{
    left: -226px;
    right:auto !important;
}
.second .view-ball .view-ball-inner, .forth .view-ball .view-ball-inner{
    left:25px;
    right:auto !important;
}
.the-best .head-who{
    width:264px;
}
.the-best .all-the-best-btn{
    margin:51px 0;
    text-align:left;
}
.the-best .all-the-best-btn button{
    background:#058ac6;
    color:#fff;
    font-family:"CustomFontBold";
}
.best-sort{
  margin-bottom:50px;
}
.best-sort .user-sort-item{
    position: relative;;
}
.best-sort .user-sort-item .profile-pic{
    margin:118px 0 0;
    text-align:center;
}
.best-sort .user-sort-item .profile-pic span{
          display: inline-block;
    position: absolute;
    top: -50px;
    transform: translateY(-50%);
    z-index: -1;
    /* right: 50%; */
    background: none;
    border: 0;
    width: 100%;
    text-align: center;
}
.best-sort .user-sort-item .profile-pic > img{
    width:200px;
    text-align:center;
}
.best-sort .user-sort-item .profile-pic .profile-cont h3{
    text-align:center;
    margin:10px 0;
}
.best-sort .user-sort-item .profile-pic .profile-cont h3:last-of-type{
    font-family:"CustomFontLight";
    font-weight:bold;
    color:#a0a0a0;
    font-size:24px;
}


.best-sort .user-sort-item .profile-pic .profile-cont-point{
    overflow:hidden;
    position: relative;;
    left: -55px;
    width:48%;
    transform:translate(-50%)
}
.best-sort .user-sort-item .profile-pic .profile-cont-point h6{
    display:block;
    width:50%;
    float:left;
    margin:18px 0;
    font-size:33px;
    color:#098bc1;
}
.best-sort .user-sort-item .profile-pic .profile-cont-point img{
    display:block;
    width:47px;
    float:left;
}
.best-sort .first-student{
    transform:scale(1.11);
}
.best-sort .first-student span{
       top: -88px !important;
    right: 50%;
    transform: translate(16%) !important;
    margin: 0 -34%;
}


.download-app{
    background:url('../assets/imgs/download-bg.png');
    padding-bottom: 23px;
}
.download-app img{
    width:100%;
}
.download-app .download-app-cont h3{
    font-size:43px;
    margin-top:100px;
    margin-bottom:38px;
}
.download-app .download-app-cont .head-who{
    width:350px;
    margin-top:116px;
}
.download-app .download-app-cont .head-who h3{
    font-size:39px;
}

.download-app .android-ios div{
    text-align:center;
}
.download-app .android-ios div img{
    width:53px;
    height:60px;
}
.download-app .android-ios .android{
    overflow:hidden;
    background:#333;
    color:#fff;
    font-family:"CustomFontBold";
    font-size:21px;
    padding:14px 19px;
    border-radius:7px;
}
.download-app .android-ios .ios{
    overflow:hidden;
    background:#333;
    color:#FFF;
    font-family:"CustomFontBold";
    font-size:21px;
    padding:14px 19px;
    border-radius:7px;
}

.question-and-answer .head-who{
    width:300px
}
.question-and-answer .questions-sec .ques .ques-item{
        overflow: hidden;
    height: 37px;
    transition: all .3s linear;
    padding: 13px 18px;
    background: #f0f0f0;
    border-radius: 5px;
    margin: 14px 0;
    border: 1px dashed #CCC;
}
.question-and-answer .questions-sec .ques .ques-item h4{
    font-size: 17px;
    margin-bottom: 11px;
}
.question-and-answer .questions-sec .ques .ques-item p{
    font-family: "CustomFontRegular";
    color:#666;
    padding-top:5px;

}
.question-and-answer .questions-sec .ques .ques-item .icon{
    text-align:left;
    margin:-3px 0;
}
.question-and-answer .questions-sec .ques .ques-item .icon button{
    background:none;
    border:0;
    outline:0;
}
.question-and-answer .ask-ques{
  box-shadow: 3px 1px 17px 0 #DDD;
    min-height:294px;
    position: relative;;
    border-radius:15px;
}
.question-and-answer .ask-ques .ask-ques-head h4{
    margin:33px 0 0;
    font-size:29px;
}
    
.send{
    position: absolute;
    bottom:8px;
    width:100%;
    padding:10px 10px 0;
}
.send input{
    padding:20px 11px;
    box-shadow: 2px 1px 16px 1px #DDD;
    border:0;
}
.send img{
   position: absolute;
    height: 36px;
    top: 2px;
    left: 7px;
}
.partnars .partnars-item .partner > div{
    padding:43px;
    box-shadow: 0 2px 13px 1px #DDD;
    border-radius:14px;
}
@media(max-width: 575px) {
  .head-who{
  width:auto !important;
}


.navbar-before-small .nav-small .logo {
    width:51px;
    float:right;
    height:34px;
}
.home-page .question-and-answer .head-who{
    width:227px
}
.home-page .download-app .download-app-cont .head-who{
    width:291px;
    margin-top:116px;
}
.main-content[data-v-2a183b29] {
    padding: 121px 27px 0 0;
}
.our-view .desc-cont[data-v-2a183b29] {
    margin-top: 80px !important;
}
.our-view .desc-cont h3{
  text-align: center;
}
.desc-cont p{
      width: 100% !important;
  text-align: center;
  padding: 10px;
}
.main-content p{
      font-size: 24px;
  text-align: center;

    text-align: center;
    padding: 0;
    margin: 0;
}
.wierd-paragraph{
  width: 100% !important;
}
.slider{
    background-size:671px 100%;
    background-repeat:no-repeat;
}

.home-page .our-view .desc-cont h3{
    text-align:center;
}
.home-page .our-view .desc-cont p{
    width:100%;
    text-align:center;
    margin-bottom:80px;
    padding:0 10px;
}
.desc-cont .wierd-paragraph{
    margin-bottom:0 !important;
}

.second .desc-image, .forth .desc-image{
 margin:0 0;
    position: static;
    left:0;
    height:381px;;
    width:auto;
}

.home-page .our-view .desc-image{
  width:auto;
}
.home-page .our-view .desc-cont{
    margin-top:0 !important;
    padding-right:0;
    width:100%;
    margin-bottom:0;
}
.home-page .second .desc-cont, .home-page .forth .desc-cont{
    margin-top:-120px !important;
}
.home-page .main-content{
  padding:150px 0 0 0;
}
.home-page .main-content h1[data-v-2a183b29]{
    text-align:center;
    font-size:42px;
}
.home-page .main-content p[data-v-2a183b29]{
    font-size:24px;
    text-align:center;
    width:100%;
}
.home-page .download-app .download-app-cont .head-who h3[data-v-2a183b29]{
    font-size:30px;
}
.home-page .download-app .download-app-cont h3[data-v-2a183b29]{
    font-size:29px;
}
.home-page .download-app .android-ios .android[data-v-2a183b29]{
    margin-bottom:30px;
}
.home-page .question-and-answer .questions-sec .ques .ques-item h4[data-v-2a183b29]{
    font-size:9px;
    padding-top:8px;
}
.home-page .question-and-answer .ask-ques[data-v-2a183b29]{
    height:433px;
    margin:19px 0;
}
.home-page .question-and-answer .ask-ques .ask-ques-head h4[data-v-2a183b29]{
    margin:0 0 20px;
    margin-top:26px;
    font-size:25px;
}
.second .desc-cont[data-v-2a183b29], .forth .desc-cont[data-v-2a183b29]{
     padding: 0;
    margin: 119px 0 0; 
    width: 100%;
}
.download-app .android-ios .android[data-v-2a183b29]{
  margin-bottom: 15px;
}
}


@media (min-width: 576px) and (max-width: 767.98px) { 
.navbar-before-small .nav-small .logo {
    width:68px;
    float:right;
    height:59px;
}
.second .desc-cont[data-v-2a183b29], .forth .desc-cont[data-v-2a183b29]{
  padding:0;
  margin:0;
  padding-top: 85px;
}
.second .desc-image, .forth .desc-image{
     margin:0 0;
    position: static;
    left:0;
    height:381px;;
    width:auto;
}


.home-page .our-view .desc-cont[data-v-2a183b29]{
    margin-right:0;
    margin-top:226px;
    margin-bottom:0;
}
.home-page .second .desc-image[data-v-2a183b29], .home-page .forth .desc-image[data-v-2a183b29]{
    position: relative;;
    width:auto;
}
.home-page .second .desc-image img[data-v-2a183b29], .home-page .forth .desc-image img[data-v-2a183b29]{
    width:100%;
    height:638px;
}
.home-page .our-view .desc-image[data-v-2a183b29]{
    width:auto;
}
.home-page .download-app .android-ios div[data-v-2a183b29]{
    margin-bottom:15px;
}
.ask-ques{
    margin-top:34px;
}
.home-page .our-view .desc-cont[data-v-2a183b29]{
    margin-top:221px;
}
.home-page .question-and-answer .questions-sec .ques .ques-item h4[data-v-2a183b29]{
    font-size:14px;
    padding-top:5px;
}

 .home-page .our-view .desc-cont h3[data-v-2a183b29]{
    text-align:center
  }
  .home-page .our-view .desc-cont p[data-v-2a183b29]{
    width:100%;
    text-align:center;
    margin-bottom:80px;
    padding:0 10px
  }
.home-page .second .desc-cont[data-v-2a183b29], .home-page .forth .desc-cont[data-v-2a183b29]{
    padding:0;
}
.desc-cont{
margin-top:0 !important;
}
.home-page .second .desc-cont[data-v-2a183b29][data-v-2a183b29], .home-page .forth .desc-cont[data-v-2a183b29][data-v-2a183b29]{
    margin-top:200px !important;
}
.wierd-paragraph{
    margin-bottom:0 !important;
}
 }




@media (min-width: 768px) and (max-width: 991.98px) { 
  .question-and-answer .questions-sec .ques .ques-item h4[data-v-2a183b29]{
    font-size: 11px;
  }
  .question-and-answer .questions-sec .ques .ques-item[data-v-2a183b29]{
        height: 44px;
            padding: 13px 18px;
  }
  .question-and-answer .questions-sec .ques .ques-item .icon[data-v-2a183b29]{
        margin: -6px 0;
  }
  .download-app .android-ios div[data-v-2a183b29]{
    font-size: 11px;
  }
  .second .desc-cont p[data-v-2a183b29], .forth .desc-cont p[data-v-2a183b29]{
    width: 100% !important;
  }
 }


@media (min-width: 992px) and (max-width: 1199.98px) { 
   .download-app .android-ios div[data-v-2a183b29]{
    font-size: 15px;
  }
   .second .desc-cont[data-v-2a183b29], .forth .desc-cont[data-v-2a183b29]{
    padding:0;
    margin:0;
    margin-top: 156px;
  }
 
.home-page .download-app .android-ios div{
    font-size:13px
}
.download-app .android-ios div[data-v-2a183b29]{
  font-size: 15px;
}
.test-image-div{
    height:497px;
}
.test-image-div .desc-image img{
    height:100% !important
}
 }

@media(min-width: 992px) and (max-width: 1199.98px){
 

}

@media(min-width: 1200px){
.test-image-div{
    height:497px;
}
.test-image-div .desc-image img{
    height:100% !important;
}

}
</style>
