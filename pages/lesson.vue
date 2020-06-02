<template>
  <div>
    <NavbarBefore />
    <div class="lesson">
      <div class="container">
        <div class="lesson-grid">
          <div class="row">
            <div class="col-md-6">
              <div class="lesson-inner-grid">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="subject-name">الكمياء</h6>
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
                      <button class="explain-btn">الشرح</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink :to="'/lesson/summary'">
                      <button class="explain-btn">الملخص</button>
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
.lesson{
  margin-top: 56px;
  .nuxt-link-exact-active{
    button{
      background-color:#058ac6 !important;
    color:#FFF !important;
    }
  }
  .lesson-unit{
        margin: 0;
    box-shadow: none;
    padding: 4px 0;

  }
  .lesson-inner-grid{
    padding: 0 11px;
    h6{
      padding: 8px 0px;

    }
  }
  h6.subject-name{
          padding: 9px 0px;
    font-size: 23px;
    color: #058ac6;
  }

  }
  .lesson-btns{
      padding: 0 44px;
    button{
          width: 100%;
    text-align: center;
    background: #058ac6;
    border-radius: 9px;
    border: 0;
    padding: 13px;
    font-family: "CustomFontBold";
    color: #FFF;
    }
    .explain-btn{
      background: #DDD;
      color:#333;

    }
  }
</style>
