<template>
  <div>
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

export default {

}
</script>

<style lang="scss">
@import '../assets/sass/info-bank.scss';
</style>
