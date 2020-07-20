<template>
  <div>

    <div class="container">
      <div class="live-details">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                                    <img src="../../../assets/imgs/live-blue.png" alt="">
                  بث مباشر</h4>
              </div>
            </div>
         </div>

         <div class="col-md-6">
              <div class="lesson-btns" style="padding:0">
                <div class="row">
                  <div class="col-md-6">
                    <NuxtLink to="" active-class="active">
                      <button class="explain-btn">
                                                <img src="../../../assets/imgs/live-dark.png" alt="">
                        تفاصيل البث</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink to="">
                      <button class="explain-btn">
                                                <img src="../../../assets/imgs/noun_timeline_3037155.png" alt="">
                        التايم لاين</button>
                    </NuxtLink>

                  </div>
                </div>
              </div>

            </div>

            <h6 style="margin-top:15px">قائمة البث المحفوظة</h6>

        </div>


          <div class="time-content">
            <div class="row">
              <div class="col-md-6" v-for="x of 4" :key="x">
                <div class="time-course">
                  <div>
                    <img src="../../../assets/imgs/noun_Time_2405843.png" alt="">
                    <h6>PM 03:00</h6>
                  </div>

                  <div>
                    <h6> title </h6>
                    <h6 style="color: #6c6c6c;">أستاذة / ميادة رفعت</h6>
                  </div>
                      <div>
                       <div class="teacher">
                          <img src="../../../assets/imgs/teacher-100316.jpg" alt="">
                          <img src="../../../assets/imgs/live-red.png" alt="">
                        </div>
                  </div>
                </div>
              </div>

            
             

            </div>
          </div>


        </div>

    <!-- this is comment -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            lectures: []
        }
    },
    created(){
        this.$axios.get(`subjects/${this.$route.params.id}/lectures`).then(res => {
            console.log(res)
            this.lectures = res.data.lectures
        })
    },
    
}
</script>

<style lang="scss">
@import '../../../assets/sass/saved-lives.scss';
</style>
