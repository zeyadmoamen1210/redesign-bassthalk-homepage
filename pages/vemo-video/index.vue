<template>
  <div class="course-last-lectures" style="padding-top:58px">
    <div class="container-fluid" >
        <div v-if="currVideo" class="show-material" style="border: 1px solid #ccc;">
            <div style="margin-bottom:15px" >
                <iframe v-if="currVideo" style="border:none; height: 600px; width: 100%;" :src="currVideo" allowfullscreen></iframe>


                <audio style="    width: 100%;" controls :src="currVoice" v-else-if="type == 'voice'"></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import Rcourse from '@/components/Rcourse';


export default {
  components: {
    Loading,
    NoData,
    Rcourse
  },
  data() {
    return {
    isOrderRequired:'',
      lectures: [],
      relatedCourses: [],
      currentLecture: {},
      lecVideoPopup: false,
      isLoading: true,
      page: 1,
      totalPages: 1,
      currVideo: '',
      numberOfAllowedViews: '',
      currVoice: '',
      currPDF: '',
      type: '',
      lecViews: '',

       swiperOptionBestSeller: {
        slidesPerView: 6,
        spaceBetween: 5,
        slidesPerGroup: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination-best-seller",
        //   clickable: true,
        // },
         breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },


    }
  },
  methods: {
    playVideo(url) {
      this.currVideo =this.$route.query.video_url;
    }
  },
  watch: {
    page(val) {

    },
  },
  created() {
    this.currVideo =this.$route.query.video_url;
    console.log(this.$route.query.video_url);
  },
}
</script>

<style lang="scss">
.course-last-lectures {

    .swiper-button-prev{
      transform: rotate(180deg);
    }

    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 22px;
    background: #f6f6f6;
    padding: 8px 10px;
    font-weight: bold;
    color: #1f74ff;
    border-radius: 8px;
    border: 1px solid #CCC;
}


  .lec-order {
    display: inline-block;
    background: #f7f7f7;
    padding: 7px 10px;
    border: 1px solid #0989c3;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    font-weight: bold;
    top: 5px;
    color: #0989c3;
  }
  a:hover {
    text-decoration: none !important;
    color: #fff !important;
  }
  padding-top: 70px;
  .last-lecture {
    margin-bottom: 15px;
    background: #fff;
    text-align: center;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    h5 {
      padding-top: 21px !important;
    }
    h5,
    h6 {
      text-align: center;
      margin-bottom: 0;
    }
    button {
      width: 100%;
      margin: 0 -2px;
      border-radius: 0;
      border: none;
      text-align: center;
      font-family: 'CustomFontMedium';
    }
  }
  .clickable {
    display: inline-block;
    background: var(--success);
    padding: 6px;
    margin-bottom: 6px;
    color: #fff;
    border-radius: 6px;
    padding-top: 8px;
    cursor: pointer;
  }
}

.lectures-steps {
  margin-right: 16px;
  padding-right: 29px;
  border-right: 1px solid #d2d2d2;
  h5 {
    margin-bottom: 0;
    padding-top: 8px;
    font-family: 'CustomFontMedium';
    font-size: 16px;


  }
  .lec-name{
    span {
      cursor: pointer;
      font-family: 'CustomFontRegular';
      transition: all ease 0.5s;
      font-weight: 100;
      padding-top:5px;
      font-size: 14px;
          padding: 7px 5px;
    border: 1px solid #198ec0;
    color: #198ec0;
    border-radius: 9px;
      &:hover {
        color: #0989c3;
      }
    }
  }

  .step {
    display: flex;
    position: relative;
    height: 50px;
    i {
      font-size: 25px;
      margin-bottom: 0;
      color: #d2d2d2;
      padding-top: 5px;
      margin: 0 0 0 18px;
    }
    .cycle {
      span {
        padding: 3px 10px;
        background: #198ec0;
        color: #fff;
        border-radius: 50%;
        margin: 0 15px;
        font-weight: bold;
        position: absolute;
        right: -59px;
      }
    }
    i {
      font-size: 25px;
      margin-bottom: 0;
      color: #9c9c9c;
    }
  }
}
.con-vs-pagination {
  margin: auto;
}
.vs-pagination--ul {
  margin-bottom: 0;
}
</style>
