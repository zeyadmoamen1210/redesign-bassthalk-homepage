<template>
  <div>

    <div class="container">
      <div class="live-details">
        <div class="row">
         <div class="col-md-6">
            <div class="live-details-item">
              <div class="title">
                <h4>
                  <img src="../assets/imgs/live-blue.png" alt="">
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
                        <img src="../assets/imgs/live-dark.png" alt="">
                        تفاصيل البث</button>
                    </NuxtLink>
                  </div>
                   <div class="col-md-6">

                    <NuxtLink to="">
                      <button class="explain-btn">
                        <img src="../assets/imgs/noun_timeline_3037155.png" alt="">
                        التايم لاين</button>
                    </NuxtLink>

                  </div>
                </div>
              </div>

            </div>


        </div>

      </div>


      <div class="time-line">
        <div class="time-line-comment-teacher">
          <div class="item">
            <div class="time-line-shape">
              <div class="item-1"></div>
            </div>
                 <div class="item-content">
              <h6>الاستادة / ميادة رفعت</h6>
              <span>منذ ساعة</span>
              <p>
                هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
              </p>
              <div>
                <button @click.self="likedFunc">
                  <img src="../assets/imgs/noun_Ok_1659535.png" alt="">
                  حسنا</button>
                <button @click.self="commentActive">
                  <img src="../assets/imgs/noun_comment_1366176.png" alt="">
                  150</button>



              </div>



            </div>

            <div class="teacher">
              <img src="../assets/imgs/teacher-100316.jpg" alt="">
              <img src="../assets/imgs/teacher-icon.png" alt="" style="width: auto;right: 7px;top: 0px;">
            </div>

             <div class="double-comment">
                    <form action="">
                      <div class="form-groub">
                        <input type="text" placeholder="أكتب تعليقك">
                      </div>
                    </form>

                    <div class="double-comment-cont" v-for="x in 5" :key="x">
                         <div style="">
                          <h6>اسم المستخدم</h6>
                            <span>منذ ساعة</span>
                            <p>
                              هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                            </p>
                        </div>

                        <div class="user-pic">
                          <img src="../assets/imgs/chat-avatar.png" alt="">
                        </div>

                    </div>
                  </div>

          </div>
          <div class="item"></div>
        </div>



         <div class="time-line-comment-students" v-for="x in 5" :key="x">
          <div class="item">
             <div class="time-line-shape">
              <div class="item-1"></div>
            </div>
                 <div class="item-content">
              <h6 style="font-family: 'CustomFontBold';">محمد احمد</h6>
              <span>منذ ساعة</span>
              <p>
                هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
              </p>
              <div>
                <button @click.self="likedFunc">
                  <img src="../assets/imgs/noun_Ok_1659535.png" alt="">
                  حسنا</button>
                <button @click.self="commentActive">
                  <img src="../assets/imgs/noun_comment_1366176.png" alt="">
                  150</button>



              </div>


            </div>
            <div class="teacher">
              <img src="../assets/imgs/teacher-100316.jpg" alt="">
              <img src="" alt="">
            </div>

              <div class="double-comment">
                    <form action="">
                      <div class="form-groub">
                        <input type="text" placeholder="أكتب تعليقك">
                      </div>
                    </form>

                    <div class="double-comment-cont" v-for="x in 5" :key="x">
                         <div style="">
                          <h6>اسم المستخدم</h6>
                            <span>منذ ساعة</span>
                            <p>
                              هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي هذا نص تجريبي
                            </p>
                        </div>

                        <div class="user-pic">
                          <img src="../assets/imgs/chat-avatar.png" alt="">
                        </div>

                    </div>
                  </div>


          </div>
          <div class="item"></div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {

methods:{
  likedFunc: function(e){
    console.log(e.target.children[0])
    e.target.classList.toggle('liked')
    if(e.target.classList.contains('liked')){
      e.target.classList.add('liked')
      e.target.children[0].setAttribute('src','https://i.ibb.co/TvRwRD2/Group-6974.png')
    }
    else{
      e.target.classList.remove('liked')
      e.target.children[0].setAttribute('src','https://i.ibb.co/m8QGJJv/noun-Ok-1659535.png')
    }
  },
  commentActive: function(e){
    console.log(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling)

    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle('doubleCommentView')
    if(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.contains('doubleCommentView')){
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'block'
    }else{
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'none'

    }

  }
}
}
</script>

<style lang="scss">
@import '../assets/sass/timeline.scss';

</style>
