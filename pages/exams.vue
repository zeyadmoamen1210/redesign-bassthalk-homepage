<template>
  <div class="container">
      <div class="exams-cards">
          <div class="row">
              <div class="col-md-4" v-for="x in 4" :key="x">
                  <nuxt-link :to="'/exams'">
                      <div class="exam-card">
                        <div class="card-head">
                            <h4>إمتحان لغة عربية</h4>
                        </div>
                        <div class="card-body">
                           <div>
                                <h6 style="display:inline-block">الصعوبة:</h6>
                                 <span style="display:inline-block"> سهل </span>
                           </div>
                           <div>
                                <h6 style="display:inline-block">الدرجة:</h6>
                                 <span style="display:inline-block"> 100 </span>
                           </div>
                           <div>
                                <h6 style="display:inline-block">الحالة:</h6>
                                 <span style="display:inline-block"> متاح </span>
                           </div>
                        </div>
                      </div>
                  </nuxt-link>
              </div>


            
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.exams-cards{
    margin-top: 50px;
    .exam-card{
        margin-bottom: 20px;
        padding: 10px;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        .card-head{
            background: #f5f5f5;
            padding: 10px;
            h4{
                margin-bottom: 0;
                color:#0085c1;
            }
        }
        .card-body{
            >div{
                &:not(:last-of-type){
                    border-bottom: 1px solid #CCC;
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>