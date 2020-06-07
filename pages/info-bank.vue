<template>
  <div>
    <NavbarBefore />
    <div class="container">
      <div class="bank-info">
        <div class="title">
          <h6>
            <img src="../assets/imgs/noun_knowledge_-1.png" alt="">
            بنك المعلومات</h6>
        </div>

        <div class="bank-info-head">
          <div class="row">
            <div class="col-md-6">
              <div class="bank-info-head-item">
                <img src="../assets/imgs/illustration 2.png" alt="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="bank-info-head-item">
                <h3>تهانينا</h3>
                <h6>لقد اجتزت المستوي 6</h6>
                <p class="lead">أستمر في تخطي المستويات لتكن من المتفوقين</p>
                <div>progress bar</div>
                <p class="lead">هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي
                  هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي  هذا نص تجريبي
                </p>
              </div>
            </div>
          </div>
        </div>
       <div class="info-bank-levels">
         <div class="title">
           <h6>المستويات</h6>
         </div>
         <div class="row">
           <div class="col-md-2" v-for="x in 18" :key="x">
             <div class="info-cicles">
               <nuxt-link to="">
                 <img src="../assets/imgs/info-lock.png" alt="">
                 <span> {{x}} </span>
               </nuxt-link>
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
.bank-info{
    margin-top: 50px;
    .title{
      h6{
        font-size: 24px;
        color: #058ac6;
            margin-bottom: 55px;
      }
    }
    p{
      font-family: "CustomFontLight";
    }
    .bank-info-head{
      margin-top: 37px;
      .bank-info-head-item{
        h6{
          font-family: "CustomFontMedium";
        }
        img{
          width: 91%;
    height: 100%;
        }
      }
    }
    .bank-info-head-item{
      h3{
            font-family: "CustomFontMedium";
    font-size: 35px;
    color: #414141;
    margin-bottom: 16px;
      }
      P{
        &:first-of-type{
              font-family: "CustomFontLight";
    font-weight: 500;
    color: #727272;
        }
        &:last-of-type{
              font-size: 16px;
    color: #959595;
        }
      }
    }
    .info-bank-levels{
      .title{
            margin: 47px 0 24px;
            h6{
                  font-size: 24px;
    color: #686868;
            }

      }
       .info-cicles{
              text-align: center;
                  margin-bottom: 20px;
                  position: relative;
              img{
                width: 80%;
              }
              span{
                position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: "CustomFontBold";
    font-size: 29px;
              }
            }

    }
}



  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .bank-info{
    padding-top: 60px;
  }
  .bank-info-head-item{
    margin-top: 20px;
    text-align: center;
    h3,p,div,h6{
      text-align: center;
    }
  }
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
 .bank-info{
    padding-top: 60px;
  }
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
