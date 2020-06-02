<template>
  <div>
    <NavbarBefor />
    <div class="container">
      <div class="login">
      <div class="form-title">
        <h4>تحديد المسار</h4>
      </div>
      <form action="">
        <div class="first-select">
          <h6>أختر المرحلة الدراسية</h6>
          <select class="custom-select custom-select-lg mb-3">
            <option value="1" selected>الأبتدائية</option>
            <option value="2">الأعدادية</option>
            <option value="3">الثانوية</option>
          </select>
        </div>
        <div class="first-select">
          <h6>أختر الصف الدراسي</h6>
          <select class="custom-select custom-select-lg mb-3">
            <option value="1">الاول</option>
            <option value="2">الثاني</option>
            <option value="3">الثالث</option>
            <option value="4">الرابع</option>
            <option value="5">الخامس</option>
            <option value="6">السادس</option>
          </select>
        </div>
        <div class="first-select">
          <h6>أختر الترم</h6>
          <select class="custom-select custom-select-lg mb-3">
            <option value="1">الأول</option>
            <option value="2">الثاني</option>
          </select>
        </div>
        <input type="submit" value="أبدأ" class="fullWidthBtn">
      </form>
    </div>
    </div>
  </div>
</template>

<script>
import NavbarBefor from '../components/NavbarBefore'

export default {
components:{
  NavbarBefor,
}
}
</script>

<style lang="scss">

 .login{
    width: 35%;
    margin:100px auto;
    .form-title{
      h4{
            text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
    color: #535353;
      }
    }
    form{
      h6{
            color: #878787;
    margin: 7px 0;
      }
      .first-select{
        margin-bottom: 21px;
        select{
            width: 100%;
    font-family: "CustomFontBold";
    color: #4f4f4f;
    font-size: 16px;
    padding: 14px 10px;
    margin-bottom: 0 !important;
    height: 52px;

        }
      }
    }
.custom-select{
  background: #FFF url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 22.75rem center/9px 12px;
}
  }
</style>
