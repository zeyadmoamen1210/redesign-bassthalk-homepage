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

export default {

}
</script>

<style lang="scss">
@import '../assets/sass/lesson.scss';
</style>
