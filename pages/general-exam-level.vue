<template>
  <div>
    <NavbarBefore />
    <div class="container">
      <div class="tests-level">
        <div class="title">
          <h3> الأمتحانات العامة</h3>
        </div>

      <div class="levels">
        <div class="row">
          <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img src="../assets/imgs/easy-level (1).png" alt="">
                <h6>المستوي السهل</h6>
                 <div class="c100 p25 small">
                    <span>25%</span>
                    <div class="slice">
                      <div class="bar"></div>
                      <div class="fill"></div>
                    </div>
                  </div>
            </div>
          </div>

           <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img style="margin-top:40px" src="../assets/imgs/easy-level (2).png" alt="">
                <h6>المستوي المتوسط</h6>
            </div>
          </div>

           <div class="col-md-4">
            <div class="level-item box-shadow-class">
                <img  src="../assets/imgs/easy-level (3).png" alt="">
                <h6>المستوي الصعب</h6>
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
  NavbarBefore,
  Footer
}
}
</script>

<style lang="scss">
.tests-level{
  margin-top: 100px;
  .title{
    h3{
      color:#058ac6bd;
      margin-bottom: 50px;
    }
  }
  .lesson-inner-grid{
    .unit{
       box-shadow: none;
        display: inline-block;
    }
    .subject-name{
          padding: 36px 0;
      display:inline-block
    }
  }
  .levels{
    .level-item{
      padding: 10px;
      text-align: center;
      min-height: 249px;
      h6{
            text-align: center;
    margin-top: 31px;
    font-size: 19px;
    color: #6e6e6e;
      }
    }
    .level-cicle{
      background-color: green;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      position: relative;
      z-index: -1;
      .inner-level-cicle{
        position: absolute;
        top: 5px;
        left: 5px;
        content: '';
        background-color: #FFF;
      }
    }
  }
}
</style>
