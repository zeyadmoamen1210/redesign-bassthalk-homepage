<template>
  <div>
    <NavbarBefore />
    <div class="container">
          <div class="the-subject">
          <div class="form-title">
            <h4>الكمياء</h4>
          </div>

      <div class="subject-units">
        <div class="row">
          <div class="col-md-6">
            <div class="subject-units-lessons">
            <div class="unit">
              <span>1</span>
              <h6>الوحدة الأولي</h6>
            </div>
            <div class="lesson-part">
                <div class="row">
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الأول</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس التاني</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الثالث</h6>
                      </nuxt-link>
                    </div>
                  </div>
            </div>
            </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="subject-units-lessons">
            <div class="unit">
              <span>2</span>
              <h6>الوحدة التانية</h6>
            </div>
             <div class="lesson-part">
                <div class="row">
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                        <h6>الدرس الاول</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                        <h6>الدرس التاني</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الثالث</h6>
                      </nuxt-link>
                    </div>
                  </div>
            </div>
            </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="subject-units-lessons">
            <div class="unit">
              <span>3</span>
              <h6>الوحدة التالتة</h6>
            </div>
             <div class="lesson-part">
                <div class="row">
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الأول</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس التاني</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الثالث</h6>
                      </nuxt-link>
                    </div>
                  </div>
            </div>
            </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="subject-units-lessons">
            <div class="unit">
              <span>4</span>
              <h6>الوحدة الرابعة</h6>
            </div>
             <div class="lesson-part">
                <div class="row">
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الأول</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس التاني</h6>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="lessons">
                      <nuxt-link to="">
                          <h6>الدرس الثالث</h6>
                      </nuxt-link>
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
  </div>
</template>

<script>
import NavbarBefore from '../components/NavbarBefore'
import Footer from '../components/Footer'

export default {
components:{
  Footer,
  NavbarBefore
}
}
</script>

<style lang="scss">
.the-subject{
      margin-top: 80px;
    margin-bottom: 150px;
  .form-title{
    h4{
      color: #058ac6;
    }
  }
  margin-top:80px;
  .lesson-part{
    .lessons{
      padding: 10px 9px;
    background: #ececec;
    border-radius: 5px;
    font-family: "CustomFontLight";
      h6{
         margin: 0;
    font-family: "CustomFontRegular";
    text-align: center;
      }
    }
  }

}

</style>
