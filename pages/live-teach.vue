<template>
  <div class="live-teaching">
    <div class="container">
      <div class="bannar">
        <div class="container">
          <h3>قريباً فى بستطهالك</h3>
          <h3
            style="margin-top: 20px;font-size: 24px;color: #5f5f5f;line-height: 1.5;"
          >سوف يتوافر لدينا العديد من المدرسين لشرح جميع الدروس اون لاين</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.live-teaching {
  position: relative;
  height: 700px;
  .bannar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url('../assets/imgs/header.png');
    /* background-position-y: 577px; */
    background-repeat: no-repeat;
    background-position: 0 -227px;
    h3 {
      width: 500px;
      margin-top: 100px;
    }
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .live-teaching {
    .bannar {
      background-position: 0 !important;
      h3 {
        width: auto !important;
      }
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
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