<template>
  <div class="nodata">
          <div class="nodata-content">
 <div
                    style="width:100%;margin: 69px auto;text-align:center"
                  >
                    <img
                      style="width: 255px;height:100%;"
                      src="@/assets/imgs/undraw_empty_xct9.svg"
                      alt
                    />
                    <div class="alert" style="width:90%;margin:auto">
                      <h6 style="text-align:center;"> {{msg || "لاتوجد بيانات في هذا القسم"}} </h6>
                    </div>
                  </div>
          </div>
  </div>
</template>

<script>
export default {
  props:["msg"]
}
</script>

<style lang="scss">
.nodata-content{
    padding:15px;

}
</style>