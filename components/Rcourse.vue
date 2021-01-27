<template>
  <div class="course">
            <div class="lec-card" style="text-align: center;height:170px">
                <img class="lec-card-img" v-if="course.image" style="width:100%;height:100%" :src="course.image" alt="">
                <img class="lec-card-img" v-else-if="!course.image && course.teacher && course.teacher.photo != 'https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg' && course.teacher.photo" style="width:100%;height:100%" :src="course.teacher.photo" alt="">

                <img v-else style="width:100%;height:100%" class="lec-card-img"  src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" alt="">
            </div>

             

            <div style="font-family:'CustomFontRegular';padding-top:10px;    margin-bottom: 10px;"> 
              <h5 style="font-family: CustomFontRegular;text-overflow: ellipsis;overflow: hidden;line-height: 1.5em;height: 3em;font-size: 16px;"> {{course.nameAr}} </h5>
           
            </div>


             <div  class="status">
                <div> <vs-button style="width: 100%;text-align: center;font-family: 'CustomFontRegular';" color="primary" @click="$router.push(`/course-details/${course.id}`)" > تفاصيل الكورس </vs-button> </div>
                <!-- <div> <vs-button style="width: 100%;text-align: center;font-family: 'CustomFontRegular';" color="primary" @click="$router.push(`/course/${course.id}/main${course.lecture ? '?nextLive=' +  course.lecture : ''}`)" > تفاصيل الكورس </vs-button> </div> -->
               
              </div>

           
    </div>
</template>

<script>
export default {
    props: ['course']
}
</script>

<style lang="scss">
 .course{
    position: relative;
    margin-top: 15px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    min-height: 216px;
    transition: all .5s ease;
        &:hover{
          transform: translateY(-10px);
        }
    
    .accepted{
      background: #27ae60;
    }
    .refused{
      background: #c0392b;
    }
    .pending{
      background: #0989c3;
    }
    >span{
          display: block;
    text-align: center;
    color: #c5c5c5;
    font-family: "CustomFontRegular";
    }
    >h5{
      margin-bottom: 0;
    text-align: center;
    }
    .teacher{
      display: flex;
    margin-top: 19px;
    // background: #f7f7f7;
    // border-top: 1px solid #EEE;
    h6{
      margin-top: 15px;
      margin-bottom: 0;
    }
    }
  }
</style>