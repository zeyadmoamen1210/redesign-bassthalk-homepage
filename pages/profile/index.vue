<template>
  <div class="profile">
      <div class="container">
         <div>
              <div class="row">
              <div class="col-md-5"  style="margin:auto">
                  <div class="personal-info">
                      <div style="    width: 90px;margin: auto;margin-bottom: 7px;">
                          <img style="width:100%;height:100%;border-radius: 50%;border: 3px solid #058ac6;" :src="$auth.user.photo" alt="">
                      </div>
              <div>
                  <h6> الأسم: </h6>
                  <h6> {{$auth.user.username}} </h6>
              </div>
               <div>
                  <h6> الرقم: </h6>
                  <h6> {{$auth.user.phone}} </h6>
              </div>
               <div>
                  <h6> الصف: </h6>
                  <h6> {{$auth.user.level}} </h6>
              </div>
               <div>
                  <h6> البريد الألكتروني: </h6>
                  <h6> {{$auth.user.email}} </h6>
              </div>
              <div>
                  <h6> الدولة </h6>
                  <h6> {{$auth.user.country}} </h6>
              </div>
              <div>
                  <h6> النوع </h6>
                  <h6> {{$auth.user.gender}} </h6>
              </div>
               <div>
                 <button>
                     <nuxt-link to="profile/edit-profile">
                         تغير المعلومات الشخصية
                     </nuxt-link>
                 </button>
              </div>
          </div>
              </div>
              <div class="col-md-7">
                   <div class="point-datails">
        <div class="title">
          <h5>
            <img src="../../assets/imgs/business-1.png" alt="">
            سجل النقاط</h5>
        </div>
      </div>
          <div class="point-cont" style="margin-top: 50px;">
        <div class="row">
          <div class="col-md-12" v-for="x in 6" :key="x">
            <div class="question-point-cont">
              <span>  <span>33</span> <img  src="../../assets/imgs/point.png" alt=""></span>
                            <h6>هنا جملة تفصيلية لسبب النقطة </h6>

            </div>
          </div>


        </div>
      </div>
        </div>
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
@import '../../assets/sass/points.scss';

.profile{
    .personal-info{
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin-top: 50px;
        div{
                &:not(:first-of-type){
                    padding: 8px;
    background: #EEE;
    margin-bottom: 10px;
                }
            h6{
                display:inline-block;
                &:last-of-type{
                    color:#058ac6;
                }
            }
            button{
                width: 100%;
    text-align: center;
    padding: 6px;
    background: #058ac6;
    color: #FFF;
    border: none;
    a{
        color:#FFF;
    }
            }
        }
    }
}
</style>