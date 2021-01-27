<template>
  <div class="course-description-page">
      <div class="container">
          <Loading v-if="isLoading" />
         <div v-else>
              <div>
              <div class="head-who" style="width: 302px;text-align: center;margin: 0;margin-bottom:30px">
            <span></span>
            <span></span>
            <span></span>
            <h3>تفاصيل الكورس</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
              <div class="row">
                  <div class="col-md-8">
                      <div class="course-header">
                          <div class="row">
                              <div class="col-md-5">
                                  <div class="course-image">
                                      <div class="course-image-img">
                                            <img v-if="course.image" :src="course.image" alt="">
                                            <img v-else-if="!course.image && course.teacher && course.teacher.photo && course.teacher.photo != 'https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg' " :src="course.teacher.photo" alt="">
                                            <img v-else src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" alt="">
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-7">
                                  <div class="course-descriptions">
                                      <h5> {{course.nameAr}} </h5>
                                      <div class="subject-info">
                                          <h6 v-if="course && course.subject && course.subject.nameAr"> <span> المادة : </span> {{course.subject.nameAr}} </h6>
                                      </div>


                                      


                                       <p v-html="course.invitationMsgAr" style="line-height: 1.5em;height: 3em;overflow: hidden;margin-bottom: 0;text-overflow: ellipsis;">
                                            
                                          </p>


                                     

                                      <div class="teacher-info">
                                          <div class="teacher-img">
                                              <!-- <img v-if="course.teacher && course.teacher.photo" :src="course.teacher.photo" alt=""> -->
                                              <vs-avatar size="60px" v-if="course.teacher && course.teacher.photo" :src="course.teacher.photo" />
                                              <vs-avatar size="60px" v-else src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg" />
                                          </div>
                                          
                                          <div class="teacher-desc">
                                              <h6 v-if="course && course.teacher"> أ /  {{ course.teacher.username }} </h6>
                                              <h6  v-if="course && course.subject && course.subject.nameAr"> <span> المادة : </span> {{course.subject.nameAr}} </h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>


                              <div class="col-md-12" v-if="course.content">
                                  <div class="step-content">
                                        <div class="single-step" v-for="(courseContent,index) in course.content" :key="index">
                                            <span style="position: absolute;right: -6px;z-index: 9;color: #FFF;"> {{index+1}} </span>
                                            {{ courseContent.key + ' - ' + courseContent.value }}
                                        </div>
                                  </div>
                              </div>


                               <h6 v-if="course.numberOfSubscriptions" style="margin: 10px 15px;">
                                  <span style="color:#0989c3">  عدد المشتركين : </span>
                                  {{course.numberOfSubscriptions}}
                              </h6>


                              <div class="col-md-12">
                                            <div v-if="course.enrollment == 'accepted'"> <vs-button style="width: 100%;text-align: center;font-family: 'CustomFontRegular';" color="primary" @click="$router.push(`/course/${course.id}/main${course.lecture ? '?nextLive=' +  course.lecture : ''}`)" > دخول </vs-button> </div>
                                            <div v-else> <vs-button style="width: 100%;text-align: center;font-family: 'CustomFontRegular';" color="primary" @click="EnrollCourse(course)" > اشتراك </vs-button> </div>
                                        </div>
                              

                              <div class="col-md-12">
                                  <div class="invitingMsg">
                                         <h3> الرسالة الترحيبية </h3>

                                          <div class="blockquote-wrapper">
                                                <div class="blockquote">
                                                    <h1 class="the-required-h1">
                                                        {{course.invitationMsgAr}}
                                                    </h1>
                                                </div>
                                            </div>

                                      </div>
                              </div>

                              <div class="col-md-12">
                                  <div class="invitingMsg">
                                         <h3> عن الكورس </h3>

                                          <div class="blockquote-wrapper">
                                                <div class="blockquote">
                                                    <h1 class="the-required-h1" v-html="course.descriptionAr">
                                                        
                                                    </h1>
                                                </div>
                                            </div>

                                      </div>
                              </div>


                              <div v-if="course.teacher && course.teacher.description" class="col-md-12">
                                  <div class="invitingMsg">
                                         <h3 v-if="course && course.teacher"> عن   <span style="color:#1f74ff"> أ /  {{ course.teacher.username }}  </span> </h3>

                                          <div class="blockquote-wrapper">
                                                <div class="blockquote">
                                                    <h1 v-html="course.teacher.description" class="the-required-h1">
                                                        
                                                    </h1>
                                                  
                                                </div>
                                            </div>

                                      </div>
                              </div>


                          </div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div v-for="Rcourse in relatedCourses" :key="Rcourse.id">
                          <Rcourse :course='Rcourse' />
                      </div>
                  </div>


                
              </div>
          </div>
         </div>
      </div>


    <vs-popup class="holamundo"  title="حجز الكورس" :active.sync="currCourseToEnrollPopup">
       <div class="form-group">
          <label> ادخل كود التفعيل للكورس </label>
          <input type="text" v-model="enrollmentCourse.code" class="form-control">
      </div>
      <vs-button  @click="EnrollCourseMain"> حجز الكورس </vs-button>
    </vs-popup>


  </div>
</template>

<script>
import Rcourse from '@/components/Rcourse';
import Loading from '@/components/Loading';
export default {
    components:{
        Rcourse,
        Loading
    },
    data(){
        return{
            enrollmentCourse: {},
            isLoading : true,
            course:{},
            relatedCourses:[],
            currCourseToEnrollPopup: false,
        }
    },
    methods:{
        EnrollCourse(course){
          this.currCourseToEnrollPopup = true;
          this.enrollmentCourse.id = course.id
          this.enrollmentCourse.code = course.code
      },
         EnrollCourseMain() {
      this.isLoading = true
    this.currCourseToEnrollPopup = false;
      this.$axios
        .post(`/courses/${this.enrollmentCourse.id}/enrollment-auto`, {
          code: this.enrollmentCourse.code,
        })
        .then((res) => {
          this.getSubjectCourse()
          this.$snotify.success('تم تفعيل الإشتراك بنجاح ')

          
          this.code = ''
        })
        .catch((e) => {
          this.$snotify.error('الكود الذي أدخلته غير صحيح')
        })
        .finally(() => (this.isLoading = false))
    },
    },
    created(){
        this.isLoading = true;
        this.$axios.get(`/courses/${this.$route.params.id}`).then(res => {
            console.log(res.data);
            this.course = res.data;
            if(this.course.content){
                this.course.content = JSON.parse(this.course.content);
            }
        }).finally(() => this.isLoading = false);

        this.$axios.get(`/related-courses/${this.$route.params.id}`).then(res => {
            this.relatedCourses = res.data;
        }).finally(() => this.isLoading = false);
    }
}
</script>

<style lang="scss">
.course-description-page{
    padding-top: 70px;

    .step-content{
        padding: 0 20px;
        .single-step{
            font-family: 'CustomFontRegular';
            position: relative;
    padding: 7px;
    border-right: 1px solid #ccc;
    padding-right: 15px;
    margin-right: -14px;
            &::after{
                    position: absolute;
    top: 9px;
    right: -11px;
    height: 20px;
    width: 20px;
    padding: 5px;
    background: #0989c3;
    content: ' ';
    border-radius: 50%;
            }
        }
    }
    .course-header{
        .course-image{
           
            .course-image-img{
                max-height: 306px;
                overflow: hidden;
                img{
                    width:100%;
                    height:100%;
                    padding: 5px;
                    border: 1px solid #058ac6;
                    transition: all .5s ease;
                    &:hover{
                        padding:0 !important;
                    }
                }
            }
        }
    }
    .course-descriptions{
        h5{
            font-size: 24px;
            font-family: 'CustomFontMedium';
            margin-bottom: 3px;
            padding: 8px 0;
        }
        .subject-info{
            h6{
                span{
                    color:#058ac6;
                }
                font-family: 'CustomFontRegular';
                
            }
        }

        

       

        .teacher-info{
            display: flex;

            .teacher-desc{
                h6{
                    &:first-of-type{
                        padding:17px 0 0 0;
                            font-family: 'CustomFontMedium';
    margin-bottom: 2px;
                    }
                    span{
                        color:#058ac6;
                    }
                    font-family: 'CustomFontRegular';
                
                }
            }
        }


        
    }


     .invitingMsg{

         h3{
                 font-family: 'CustomFontMedium';
    font-size: 22px;
         }
            /* center the blockquote in the page */
                margin: 20px 0;
            .blockquote-wrapper {
          
            }

            /* Blockquote main style */
            .blockquote {
                position: relative;
                align-self: center;
            }

            /* Blockquote header */
            .blockquote .the-required-h1 {
                    position: relative;
    color: #0b81a7;
    font-weight: normal;
    margin: 0;
    border: 2px solid #fff;
    border: solid 1px;
    border-radius: 20px;
    padding: 16px;
    font-size: 19px;
            }

            /* Blockquote right double quotes */
            .blockquote h1:after {
                content: "";
                position: absolute;
                border: 1px solid #0b81a7;
                border-radius: 0 50px 0 0;
                width: 42px;
                height: 27px;
                bottom: -27px;
                left: 50px;
                border-bottom: none;
                border-left: none;
                z-index: 3;
            }

            .blockquote h1:before {
                content:"";
                position: absolute;
                width: 80px;
                border: 6px solid #fff;
                bottom: -3px;
                left: 50px;
                z-index: 2;
            }

            /* increase header size after 600px */
            @media all and (min-width: 600px) {
                .blockquote h1 {
            }

            }

            /* Blockquote subheader */
            .blockquote h4 {
                position: relative;
                color: #ffffff;
                font-weight: 400;
                margin: 0;
                padding-top: 15px;
                z-index: 1;
                margin-left:150px;
                padding-left:12px;
            }

            
            .blockquote h4:first-letter {
            margin-left:-12px;
            }
        }

}
</style>