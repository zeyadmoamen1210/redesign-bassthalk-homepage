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
                    <button class="explain-btn" @click="showVideos=true">
                      <img
                        style="margin-left: 9px;"
                        src="../../../assets/imgs/noun_teaching_-1.png"
                        alt
                      />
                      الشرح
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button class="explain-btn" @click="showVideos=false">
                      <img style="margin-left: 9px;" src="../../../assets/imgs/noun_PDF_-1.png" alt />
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
    <div v-if="showVideos">
      <div class v-if="videos.length>0" style="    text-align: center;">
        <iframe width="853" height="480" :src="videos[1].embed" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="container">
        <div class="another-videos">
          <div class="title">
            <h5>الشرح بطريقة اخري</h5>
          </div>
          <div class="row">
            <div class="col-md-6" v-for="(video, index) in videos" :key="index">
              <div class="video-cart">
                <iframe width="530" height="290" :src="video.embed" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-md-12">
              <button class="fullWidthBtn">أبدء الأختبار</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row" v-if="pdfs.length>0">
        <FilePdf v-for="(pdf, index) in pdfs" :key="index" :title="pdf.title" :link="pdf.link">
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

    <div class="container">
      <div class="leactures-comments">
        <div class="title">
          <h6>التعليقات</h6>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form action>
              <input type="text" placeholder="أكتب تعليقك" />
            </form>
            <div class="lect-live-comments" v-for="x in 3" :key="x">
              <div class="comment-time">
                <h6>الاتنين 08:33 11-10-2019</h6>
              </div>
              <div class="user-comment">
                <div class="img">
                  <img src="../../../assets/imgs/chat-avatar.png" alt />
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
import VideoCard from "../../../components/material/video";
import FilePdf from "../../../components/material/FilePdf";
export default {
    components: {
    VideoCard,
    FilePdf
  },
  data() {
    return {
      videos: [],
      pdfs: [],
      showVideos:true
    }
  },
  created(){
    this.getVideos();
    this.getPdfs();
  },
  methods:{
     getVideos() {
      this.isLoading = true;

      this.$axios
        .get(`lessons/${this.$route.params.id}/videos`)
        .then(res => {
          this.isLoading = false;
          this.videos = res.data.materials;
          this.videos.map(function(value, key) {
            value["embed"] = value["link"].replace("watch?v=", "embed/");
          });
        })
        .catch(err => {
          this.isLoading = false;

          console.log(err);
        });
    },
    getPdfs() {
      this.$axios
        .get(`lessons/${this.$route.params.id}/pdf`)
        .then(res => {
          this.pdfs = res.data.materials;
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
}
</script>

<style lang="scss">
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
  .title {
    h5 {
      margin-top: 30px;
      margin-bottom: 0;
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
