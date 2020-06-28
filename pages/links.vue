<template>
  <div>


    <div class="container">
      <ul>

        <li>
                  <nuxt-link :to="'/best-students'" target="_blank">صفحة افضل الطلاب</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/broadcast-live'" target="_blank">صفحة البث المباشر</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/determine-path'" target="_blank">صفحة تحديد المسار</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'edit-info'" target="_blank">صفحة تعديل البيانات</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'edit-password'" target="_blank">صفحة تعديل كلمة المرور</nuxt-link>

        </li>


        <li>
              <nuxt-link :to="'/general-exam-join'" target="_blank">صفحة الانضمام الي الامتحانات العامة</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/general-exam-test'" target="_blank">صفحة الاختبارات</nuxt-link>

        </li>

          <li>
                <nuxt-link :to="'/general-exam-level'" target="_blank">صفحة مستوي الامتحانات العامة</nuxt-link>

          </li>

        <li>
              <nuxt-link :to="'/info-bank'" target="_blank">صفحة بنك المعلومات</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/lesson'" target="_blank"> صفحة الدرس (الروابط الملخص و الشرح فعالين)</nuxt-link>

        </li>

      <li>
            <nuxt-link :to="'/live-details'" target="_blank">صفحة تفاصيل البث</nuxt-link>

      </li>



      <li>
            <nuxt-link :to="'/live-schedule'" target="_blank">صفحة جدول مواعيد البث</nuxt-link>

      </li>


        <li>
              <nuxt-link :to="'/live'" target="_blank">صفحة البث المباشر</nuxt-link>

        </li>

          <li>
                <nuxt-link :to="'/login'" target="_blank">صفحة التسجيل</nuxt-link>

          </li>

          <li>
                <nuxt-link :to="'/notifications'" target="_blank">صفحة التنبيهات</nuxt-link>

          </li>

          <li>
                <nuxt-link :to="'/points'" target="_blank"> صفحة النقاط</nuxt-link>

          </li>

        <li>
              <nuxt-link :to="'/questions-info-bank'" target="_blank">صفحة اسئلة بنك المعلومات</nuxt-link>

        </li>



        <li>
              <nuxt-link :to="'/register'" target="_blank">تسجيل حساب جديد</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/saved-lives'" target="_blank">البث المحفوظ</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/subject'" target="_blank">صفحة اي مادة</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/subjects'" target="_blank">صفحة اختيار المواد</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/tests-levels'" target="_blank">مستويات الاختبارات</nuxt-link>

        </li>

        <li>
              <nuxt-link :to="'/timeline'" target="_blank">صفحة التايم لاين</nuxt-link>

        </li>
      </ul>
    </div>





  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/sass/links.scss';
</style>
