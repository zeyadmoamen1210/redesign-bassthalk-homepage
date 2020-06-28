<template>
  <div>
    <div class="container">
      <div class="verify">
        <div class="form-title">
          <h4>
            <img src="../assets/imgs/noun_User_-2.png" alt />
            كود التفعيل
          </h4>
        </div>
        <form action>
          <div class="form-groub">
            <input type="text" class="form-control" placeholder="كود التفعيل" />
          </div>

          <input type="submit" value="تفعيل" class="fullWidthBtn" />

          <div class="dont-have-acc">
            <div>
              <h6>لم يتم إستلام الكود</h6>
            </div>
            <div>
              <button>إعادة إرسال</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import '../assets/sass/verify.scss';
</style>
