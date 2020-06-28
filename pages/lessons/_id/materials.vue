<template>
  <div>
    <div class="lesson">
      <div class="container">
        <div class="lesson-grid">
          <div class="row">
            <div class="col-md-6">
              <div class="lesson-inner-grid">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="subject-name">
                      <img src="../../../assets/imgs/laboratory-1.png" alt />
                      الكمياء
                    </h6>
                  </div>
                  <div class="col-md-8">
                    <div class="unit lesson-unit">
                      <span>1</span>
                      <h6>الوحدة الأولي - الدرس الأول</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="lesson-btns">
                <div class="row">
                  <div class="col-md-6">
                    <button
                      :class="{ 'explain-btn': true, showVideos: showVideos }"
                      @click="showVideos = true"
                    >
                      <img
                        style="margin-left: 9px;"
                        src="../../../assets/imgs/noun_teaching_-1.png"
                        alt
                      />
                      الشرح
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button
                      :class="{ 'explain-btn': true, showVideos: !showVideos }"
                      @click="showVideos = false"
                    >
                      <img
                        style="margin-left: 9px;"
                        src="../../../assets/imgs/noun_PDF_-1.png"
                        alt
                      />
                      الملخص
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showVideos" key="1">
      <div
        class="frame-container"
        v-if="videos.length > 0"
        style="text-align: center;"
      >
        <iframe
          width="853"
          height="480"
          :src="selectedVideo.embed"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="container">
        <div class="another-videos">
          <div class="title">
            <h5>الشرح بطريقة اخري</h5>
          </div>

          <div class="row">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(video, index) in videos" :key="index">
                <div class="video-cart">
                  <iframe
                    width="550"
                    height="290"
                    :src="video.embed"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <div class="col-md-12">
              <button class="fullWidthBtn">أبدء الأختبار</button>
            </div>
            <!-- <div class="col-md-6" v-for="(video, index) in videos" :key="index">
              <div class="video-cart">
                <iframe width="520" height="290" :src="video.embed" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-md-12">
              <button class="fullWidthBtn">أبدء الأختبار</button>
            </div> -->
          </div>
          <div class="video-comments">
            <div class="container">
              <div class="time-line">
                <div class="current-video-comment">
                  <input
                    style="width: 100%; margin-bottom: 13px; padding: 15px;"
                    type="text"
                    placeholder="أدخل تعليقك"
                  />
                  <div class="submit">
                    <button class="basth-btn-primary"><i class="fas fa-paper-plane"></i></button>
                  </div>
                 <div class="uploads">
                    <div class="upload-files">
                    <input type="file">
                    <i class="fas fa-paperclip"></i>
                  </div>
                   <div class="upload-files">
                    <input type="file">
                    <i class="fas fa-image"></i>
                  </div>
                 </div>
                </div>
                <div
                  class="time-line-comment-teacher"
                  v-for="(comment, index) in selectedVideoComments"
                  :key="index"
                >
                  <div class="item">
                    
                    <div class="item-content">
                      <h6>{{ comment.user.username }}</h6>
                      <span>منذ ساعة</span>
                      <p>{{ comment.content }}</p>
                      <div class="comment-content-img">
                        <img  @click="imgShow = !imgShow"  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
                      </div>
                      <div>
                        <button>
                          <img
                            @click.self="commentActive"
                            src="https://i.ibb.co/3Y2JpxL/noun-comment-1366176.png"
                            alt=""
                          />
                          {{ comment.numberOfreplies }}
                        </button>
                      </div>
                    </div>

                    <!-- comment replay  -->
                    <div class="teacher">
                      <img :src="comment.user.photo" alt="" />
                      <img
                        src="../../../assets/imgs/teacher-icon.png"
                        alt=""
                        style="width: auto; right: 7px; top: 0px;"
                      />
                    </div>
                         <div class="double-comment">
                      <form action="">
                        <div class="form-groub nested-comment-reply">
                          <input type="text" placeholder="أكتب تعليقك" />
                           <div class="submit">
                    <button class="basth-btn-primary"><i class="fas fa-paper-plane"></i></button>
                  </div>
                 <div class="uploads">
                    <div class="upload-files">
                    <input type="file">
                    <i class="fas fa-paperclip"></i>
                  </div>
                   <div class="upload-files">
                    <input type="file">
                    <i class="fas fa-image"></i>
                  </div>
                        </div>
                        </div>
                      </form>

                      <div
                        class="double-comment-cont"
                        v-for="(reply, index) in comment.replies"
                        :key="index"
                      >
                        <div style="">
                          <h6 v-if="reply.user">{{ reply.user.username }}</h6>
                          <span>منذ ساعة</span>
                          
                          <p>
                            {{ reply.content }}
                          </p>

                           <section class="comment-content-img">
                        <img @click="imgShow = !imgShow" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
                      </section>
                          
                        </div>

                        <div class="user-pic"
                        style="width: 7%;float: left;overflow: hidden;border-radius: 50%;margin-left: 16px;"
                        v-if="reply.user"
                          >
                          <img style="width:100%;" :src="reply.user.photo" alt="" />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div class="item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <transition enter-active-class="animate__animated animate__bounceInRight" leave-active-class="animate__animated animate__fadeOutRight">
        <div class="img-section-slide" :class="{innerPage: imgShow}" v-if="imgShow">
          <img @click="imgShow = false" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
        </div>
      </transition>
    </div>
    <div class="container" v-else key="2">
      <div class="row" v-if="pdfs.length > 0">
        <FilePdf
          v-for="(pdf, index) in pdfs"
          :key="index"
          :title="pdf.title"
          :link="pdf.link"
        >
          <div class="pdf-icon" slot="overlay-pdf-slot">
            <i class="fas fa-chalkboard-teacher"></i>
            <!-- <a :href="pdf.link" target="_blank"> -->
            <button slot="video-edit-button">
              <i class="fas fa-edit"></i> عرض
            </button>

            <!-- </a> -->
          </div>
        </FilePdf>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '../../../components/material/video'
import FilePdf from '../../../components/material/FilePdf'
export default {
  middleware: 'auth-student',

  components: {
    VideoCard,
    FilePdf,
  },
  data() {
    return {
      videos: [],
      selectedVideoComments: [],
      pdfs: [],
      showVideos: true,
      imgShow: false,

      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  created() {
    this.getVideos()
    this.getPdfs()
  },
  methods: {
    getVideos() {
      this.isLoading = true

      this.$axios
        .get(`lessons/${this.$route.params.id}/videos`)
        .then((res) => {
          this.isLoading = false
          this.videos = res.data.materials
          this.videos.map(function (value, key) {
            value['embed'] = value['link'].replace('watch?v=', 'embed/')
          })
          if (this.videos.length > 0) {
            this.selectedVideo = this.videos[0]
            this.getSelectedVideoComments()
          }
        })
        .catch((err) => {
          this.isLoading = false

          console.log(err)
        })
    },
    getSelectedVideoComments() {
      this.$axios
        .get(`videos/${this.selectedVideo.id}/comments`)
        .then((res) => {
          this.selectedVideoComments = res.data.docs
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getPdfs() {
      this.$axios
        .get(`lessons/${this.$route.params.id}/pdf`)
        .then((res) => {
          this.pdfs = res.data.materials
        })
        .catch((err) => {
          console.log(err)
        })
    },
    likedFunc: function (e) {
      console.log(e.target.children[0])
      e.target.classList.toggle('liked')
      if (e.target.classList.contains('liked')) {
        e.target.classList.add('liked')
        e.target.children[0].setAttribute(
          'src',
          'https://i.ibb.co/TvRwRD2/Group-6974.png'
        )
      } else {
        e.target.classList.remove('liked')
        e.target.children[0].setAttribute(
          'src',
          'https://i.ibb.co/m8QGJJv/noun-Ok-1659535.png'
        )
      }
    },
    commentActive: function (e) {
      console.log(
        e.target.parentElement.parentElement.parentElement.nextElementSibling
          .nextElementSibling
      )

      e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle(
        'doubleCommentView'
      )
      if (
        e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.contains(
          'doubleCommentView'
        )
      ) {
        e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display =
          'block'
      } else {
        e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display =
          'none'
      }
    },
  },
}
</script>

<style lang="scss">
.img-section-slide{
      position: fixed;
    top: 100px;
    right: 0;
    width: 500px;
    height: 400px;
    z-index: 999999999;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
    background: #FFF;
    border-radius: 9px;
  img{
    width:100%;
    height: 100%;
  }
}
.current-video-comment,.nested-comment-reply{
  position: relative;
  .submit{
    position: absolute;
    top: 0px;
    left: 0;
    /* height: 80%; */
    padding: 7px;
    button{
          padding: 7px 10px !important;
    }
  }
}
.uploads{
        position: absolute;
    top: 18px;
    left: 39px;
    width: 65px;
    .upload-files{
      position: relative;
    width: 50%;
    float: left;
    cursor: pointer;
    input{
          position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    }
    i{
      cursor: pointer;
      font-size: 20px;
    color: #b5b5b5;
    }
}
}

.video-bannar {
  min-height: 400px;
  // background: url('../../../assets/imgs/carousel_header_1_0.jpg');
  background-size: cover;
  margin-top: 20px;
  position: relative;
  img {
    position: absolute;
    /* left: 20px; */
    top: 50%;
    transform: translate(-50%);
    z-index: 2;
    left: 126px;
  }
  span {
    position: absolute;
    transform: translate(-50%);
    z-index: 3;
    color: #fff;
    font-family: 'CustomFontBold';
    top: 66%;
    left: 123px;
    font-size: 21px;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0.36);
  }
}
.another-videos {
  .swiper-container {
    padding-top: 40px !important;
    padding-bottom: 26px;
  }
  .swiper-container-rtl .swiper-button-prev {
    right: 10px !important;
    left: auto;
    bottom: auto !important;
    top: 24px;
  }
  .swiper-button-next {
    top: 24px;
    right: 49px;
    bottom: auto;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 18px;
    background: #068bc2;
    padding: 5px 9px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }

  .video-cart {
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 9px 10px 2px 9px;
    margin: 10px 0;
  }
  .title {
    h5 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 22px;
      font-family: 'CustomFontRegular';
    }
  }
  .fullWidthBtn {
    padding: 13px;
    width: 100%;
    text-align: center;
    margin-top: 19px;
    background: #0989c3;
    color: #fff;
    font-family: 'CustomFontBold';
    border: 0;
    border-radius: 8px;
  }
  .another-videos-cont {
    .video-bannar {
      min-height: 300px;
      img {
        width: 41px;
      }
      span {
        top: 70%;
      }
    }
  }
}
.leactures-comments {
  .title {
    h6 {
      margin: 36px 0 10px;
      font-family: 'CustomFontBold';
      color: #797979;
      font-size: 19px;
    }
  }
  form {
    input {
      width: 100%;
      padding: 14px 11px;
      margin-bottom: 10px;
    }
  }
  .lect-live-comments {
    .comment-time {
      position: absolute;
      top: 18px;
      left: 21px;
      h6 {
        font-family: 'CustomFontLight';
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
    > h6 {
      position: absolute;
      top: 55%;
      color: #797979;
      margin-top: 8px;
    }

    .user-comment {
      display: inline-block;
      position: absolute;
      top: 7px;
      width: 50%;
      h6 {
        display: inline-block;
        padding: 0 9px;
        color: #cfc8c8;
        margin: 0;
      }
      .img {
        display: inline-block;
        img {
          width: 44px;
          height: 38px;
        }
      }
    }
  }
}
.lesson {
  margin-top: 56px;
  margin-bottom: 33px;
  .showVideos {
    background: #058ac6 !important;
    color: #fff !important;
  }
  .nuxt-link-exact-active {
    button {
      background-color: #058ac6 !important;
      color: #fff !important;
    }
  }
  .lesson-unit {
    margin: 0;
    box-shadow: none;
    padding: 4px 0;
  }
  .lesson-inner-grid {
    padding: 0 11px;
    h6 {
      padding: 8px 0px;
    }
  }
  h6.subject-name {
    padding: 7px 0px;
    font-size: 26px;
    color: #058ac6;
    img {
      display: block;
      width: 23%;
      float: right;
      margin-left: 10px;
      padding-top: 0;
    }
  }
}
.frame-container {
  iframe {
    width: 90%;
  }
}
.lesson-btns {
  padding: 0 44px;
  button {
    width: 100%;
    text-align: center;
    background: #058ac6;
    border-radius: 9px;
    border: 0;
    padding: 13px;
    font-family: 'CustomFontBold';
    color: #fff;
    margin-bottom: 18px;
  }
  .explain-btn {
    background: #ddd;
    color: #333;
  }
}

.video-comments {
  .time-line {
    margin-top: 30px;
    .item {
      overflow: hidden;
    }

    .time-line-comment-teacher {
      background: #eae9e9;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    .time-line-shape {
      float: right;
      overflow: hidden;
      width: 5%;
      text-align: center;
      margin-top: 17px;

      .item-1 {
        width: 10px;
        height: 10px;
        background-color: #058ac6;
        border-radius: 50%;
        margin: 15px auto;
        border: 2px solid #058ac6;
        padding: 5px;
        position: relative;
        &::after {
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

    .teacher {
      height: 58px;
      width: 63px;
      border-radius: 50%;
      border: 3px solid rgba(5, 138, 198, 0.74118);
      padding: 6px;
      background: #ebebeb;
      position: relative;
      margin: 12px;
      float: left;
      img {
        &:first-of-type {
          width: 97%;
          border-radius: 50%;
          height: 97%;
          position: absolute;
          top: 1px;
          left: 1px;
        }
        &:last-of-type {
          position: absolute;
          top: -8px;
          z-index: 3;
          left: -19px;
          width: 42px;
        }
      }
    }
    .item-content {
      position: relative;
      width: 87%;
      float: left;
      padding: 18px 22px;
      .comment-content-img{
            width: 100px;
    height: 100px;
    margin-bottom: 15px;
    border: 1px dashed #0989c3;
    padding: 2px;
    cursor: pointer;
    box-shadow: 2px 1px 9px 0px #929292;
        img{
          width:100%;
          height:100%;
        }
      }
      > h6 {
        color: #3f3f3f;
        font-family: 'CustomFontLight';
        font-weight: bold;
        font-size: 17px;
        margin-bottom: 0;
      }
      > span {
        font-weight: bold;
        font-family: 'CustomFontRegular';
        color: #058ac6;
        position: absolute;
        top: 14px;
        left: 22px;
        font-size: 12px;
      }
      > p {
        width: 51%;
        line-height: 1.8;
      }
      div {
        > button {
          background-color: transparent !important;
          border: 0;
          font-family: 'CustomFontLight';
          color: #747474;
          font-weight: 600;
          font-size: 15px;
          outline: none;
        }
      }
    }

    .time-line-comment-students {
      background: #eae9e9;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .liked {
      color: #058ac6 !important;
      font-weight: bolder !important;
    }

    .double-comment {
      clear: both;
      width: 85%;
      display: none;
      margin-top: 30px;
      margin: auto;
      input {
        width: 100%;
        padding: 16px;
        outline: none;
      }

      .double-comment-cont {
        overflow: hidden;
        margin-top: 25px;
        border-bottom: 1px solid #c7c7c7;
        position: relative;
        .comment-content-img{
            width: 100px;
    height: 100px;
    margin-bottom: 15px;
    border: 1px dashed #0989c3;
    padding: 2px;
    cursor: pointer;
    box-shadow: 2px 1px 9px 0px #929292;
        img{
          width:100%;
          height:100%;
        }
        }
        h6 {
          color: #686868;
          font-family: 'CustomFontMEdium';
          margin-bottom: 0;
        }
        span {
              color: #0989c3;
    font-family: 'CustomFontRegular';
    margin: 15px 0;
    position: absolute;
    left: 13px;
    font-weight: bold;
    font-size: 11px;
        }
        p {
          font-family: 'CustomFontRegular';
          color: #0c0c0c;
        }
        div {
          &:first-of-type {
            display: block;
            width: 88%;
            float: left;
          }
        }
      }
    }
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .lesson {
    padding-top: 60px;
  }
  .lesson h6.subject-name img {
    width: 12%;
    margin-bottom: 30px;
  }
  .lesson .lesson-unit {
    margin-bottom: 23px;
  }
  .leactures-comments .lect-live-comments .user-comment h6 {
    padding: 0 6px;
    font-size: 11px;
  }

  .video-bannar img {
    left: 67px;
  }
  .video-bannar span {
    left: 67px;
  }
  .video-comments {
    .live-details {
      padding-top: 60px;
    }
    .time-line .item-content > p {
      width: 100%;
      margin: 5px 0 33px;
      font-size: 13px;
    }
    .lesson-btns .explain-btn {
      margin-bottom: 14px;
    }
    .time-line .item-content {
      width: 72%;
      padding: 18px 15px;
    }
    .time-line .time-line-shape {
      margin-top: 8px;
      width: 11%;
    }
    .time-line .item-content .double-comment {
      width: 100%;
    }

    .double-comment .double-comment-cont div:first-of-type {
      width: 72% !important;
    }
    .double-comment .double-comment-cont p {
      font-size: 13px;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .lesson h6.subject-name img {
    width: 7%;
  }
  .lesson-inner-grid {
    margin: 76px 0 22px 0;
  }
  .lesson h6.subject-name {
    padding: 14px 0px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .lesson-btns {
    padding: 0;
  }
  .lesson h6.subject-name img {
    width: 30%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
