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
                      <img src="../assets/imgs/laboratory-1.png" alt />
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
                    <NuxtLink :to="'/lesson/explain'" active-class="active">
                      <button class="explain-btn">
                        <img
                          style="margin-left: 9px;"
                          src="../assets/imgs/noun_teaching_-1.png"
                          alt
                        />
                        الشرح
                      </button>
                    </NuxtLink>
                  </div>
                  <div class="col-md-6">
                    <NuxtLink :to="'/lesson/summary'">
                      <button class="explain-btn">
                        <img style="margin-left: 9px;" src="../assets/imgs/noun_PDF_-1.png" alt />
                        الملخص
                      </button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NuxtChild />
    </div>
  </div>
</template>

<script>
import NavbarBefore from '../components/NavbarBefore'

export default {
components:{
  NavbarBefore,
}
}
</script>

<style lang="scss">
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
