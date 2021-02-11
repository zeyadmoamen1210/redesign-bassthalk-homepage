<template>
  <div class="course-last-lectures" style="padding-top:58px">
    <b-modal id="sad" hide-header>
      <!-- <template #modal-header>
            <h5 style="margin-bottom:0;padding-right:5px">  </h5>
        </template> -->
      <div class="col-md-12">
        <h6 style="font-family: CustomFontRegular">
          <img
            style="
              width: 86px;
              margin: auto;
              display: block;
              margin-bottom: 14px;
            "
            src="@/assets/imgs/sensitive.svg"
          />
          <span
            class="text-danger"
            style="
              display: block;
              text-align: center;
              font-size: 20px;
              font-family: 'CustomFontBold';
            "
          >
            معذرةٌ
          </span>

          <span style="display: block; text-align: center; font-size: 18px">
            لقد إستهلكت جميع المشاهدات المسموحة لك لهذه المحاضرة
          </span>
        </h6>
      </div>
      <template #modal-footer>
        <vs-button @click="nextLec()" color="warning"> حسناُ </vs-button>
      </template>
    </b-modal>

    <b-modal id="happy" hide-header>
      <div class="col-md-12">
        <h6 style="font-family: CustomFontRegular">
          <img
            style="
              width: 86px;
              margin: auto;
              display: block;
              margin-bottom: 14px;
            "
            src="@/assets/imgs/happy.svg"
          />
          <span
            style="
              color: #000f3;
              display: block;
              text-align: center;
              font-size: 20px;
              font-family: 'CustomFontBold';
            "
          >
            تهانينا
          </span>
          <span style="display: block; text-align: center; font-size: 18px">
            لقد قمت بتجاوز هذه المحاضرة بنجاح
          </span>
        </h6>
      </div>

      <template #modal-footer>
        <vs-button @click="nextLec()" color="warning"> حسناُ </vs-button>
      </template>
    </b-modal>

    <b-modal id="lec-views">
      <template #modal-header>
        <h5 style="margin-bottom: 0; padding-right: 5px"> <img style="width:50px" src="@/assets/imgs/dizziness.svg" alt=""> صحصح معانا  </h5>
      </template>
      <div class="col-md-12">
        <h6 style="font-family: CustomFontRegular">
          متبقي لك عدد {{ numberOfAllowedViews - (lecViews + 1) }} مرات المسموحة
          لمشاهدة هذه المحاضرة
        </h6>
      </div>
      <template #modal-footer>
        <div>
          <vs-button @click="$bvModal.hide('lec-views')"> حسناٌ </vs-button>
        </div>
      </template>
    </b-modal>

    <b-modal id="next-is-exam">
      <template #modal-header>
        <h5 style="margin-bottom: 0; padding-right: 5px">إنتبه</h5>
      </template>
      <div class="col-md-12">
        <h6 style="font-family: CustomFontRegular">
          المحاضرة القادمة ستكون عبارة عن إمتحان هل تريد مغادرة الصفحة و الذهاب
          إلي الإمتحان
        </h6>
      </div>
      <template #modal-footer>
        <div style="font-family: CustomFontRegular">
          <vs-button @click="nextLec(true)">الذهاب إلي الإمتحان </vs-button>
        </div>
        <div style="font-family: CustomFontRegular">
          <vs-button color="var(--info)" @click="$bvModal.hide('next-is-exam')">
            البقاء في الصفحة
          </vs-button>
        </div>
      </template>
    </b-modal>

    <div class="container-fluid">
      <div
        style="display: flex;flex-wrap: wrap;padding: 10px 7px 0px;border-bottom: 1px solid #CCC;margin-bottom: 5px;"
      >
        <div style="flex: 1">
          <div class="head-who" style="    width: 306px;margin: 0;margin-bottom: 13px;">
              <span></span>
              <span></span>
              <span></span>
              <h3>محتوي الكورس</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div v-if="numberOfAllowedViews">
          <h6 style="color: var(--danger)">
            عدد المرات المسموحة للمشاهدة :
            <span
              style="
                position: static;
                position: static;
                padding: 6px 11px 4px;
                display: inline-block;
              "
              v-if="numberOfAllowedViews<9"
              class="lec-order"
            >
              {{ numberOfAllowedViews }}
            </span>
            <span
              style="
                position: static;
                position: static;
                padding: 7px 7px 3px;
                display: inline-block;
              "
              
              v-else
              class="lec-order"
            >
              {{ numberOfAllowedViews }}
            </span>
          </h6>
        </div>
      </div>

      <div>
        <Loading v-if="isLoading == true" />
        <NoData v-else-if="lectures.length == 0" />
        <div v-else>
          <template
            v-if="(currVideo || currPDF || currVoice) && (numberOfAllowedViews || isOrderRequired)"
          >
            <div style="display: flex;border-bottom: 1px solid #CCC;margin-bottom: 14px;">
                <div style="flex:1;padding-top:9px">
                    <span class="text-danger" style="font-family: CustomFontMedium">
                        ملحوظة هامة :- عند الضغط علي زر إكتمل سيتم إنقاص مرة من عدد
                        المشاهدات المسموحة من قبل المٌعلم و فتح المحاضرة القادمة
                    </span>
                </div>
                 <div>
                     <vs-button
                        @click="completeLec"
                        style="margin-bottom: 5px; font-family: CustomFontRegular"
                        color="danger"
                    >إكتمل</vs-button>
                 </div>
            </div>
            
          </template>

         

          <div class="row">

              <div class="col-md-8 order-1 order">
                <div v-if="type && currentLecture && (currVideo || currPDF || currVoice)" class="show-material" style="    border: 1px solid #ccc;">
                    <div style="margin-bottom:15px" >
                        <iframe v-if="type == 'video' && currVideo" style="border:none; height: 600px; width: 100%;" :src="currVideo" allowfullscreen></iframe>
                        <object  v-else-if="type == 'pdf'"   style="height:800px;width:100%" :data="currPDF+'#toolbar=0'" type="application/pdf" width="100%" height="100%">
                          <p>Your web browser doesn't have a PDF plugin.
                          Instead you can <a :href="currPDF">click here to
                          download the PDF file.</a></p>
                        </object>
                        
                        <audio style="    width: 100%;" controls :src="currVoice" v-else-if="type == 'voice'"></audio>
                    </div>
                    <!-- Prev & Next Buttons -->
                    <div style="display: flex;margin-bottom: 0;font-family: CustomFontRegular;background: #f7f7f7;" v-if="currVideo || currPDF || currVoice">
                        <div style="flex:1">
                            <button v-if="currentLecture.order > 1 " class="btn btn-success" @click="prevLec()"><i class="fas fa-arrow-right"></i> السابق </button>
                        </div>
                        <div style="flex:1;text-align:left">
                            <button class="btn btn-success" v-if="lectures.find(ele => ele.order > currentLecture.order)" @click="nextLec()"> التالي <i class="fas fa-arrow-left"></i></button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4 order-2">
                 <div v-if="currentLecture && type" style=" border-bottom: 1px solid #ccc;margin-bottom: 7px;">
                        <span style="font-family: 'CustomFontRegular';"> المحاضرة الحالية: </span>
                        <h6 style="    display: inline-block;"> {{currentLecture.title}} </h6>
                    </div>
              <div class="lectures-steps">
                  
                <div
                  class="step"
                  v-for="(lec, index) in lectures"
                  :key="lec.id"
                >
                  <div class="cycle">
                    <span v-if="index < 9"> {{ index + 1 }} </span>
                    <span v-else style="padding:3px 6px"> {{ index + 1 }} </span>

                    
                    
                  </div>
                  <img v-if="lec.isChecked" style="width: 27px;position: absolute;right: -71px;" src="@/assets/imgs/thumb-up.svg" alt="">

                  <div>
                    <i
                      v-if="lec.type == 'voice'"
                      class="fas fa-microphone Alec"
                    ></i>
                    <i
                      v-else-if="lec.type == 'video'"
                      class="fas fa-video Alec"
                    ></i>
                    <i
                      v-else-if="lec.type == 'pdf'"
                      class="fas fa-file-pdf Alec"
                    ></i>
                    <i
                      v-else-if="lec.type == 'exam'"
                      class="fas fa-file-alt Alec"
                    ></i>
                  </div>
                  <div class="lec-name" style="width: 100%;display: flex;">
                    <h5 style="flex:1">
                      {{ lec.title }}
                    </h5>
                     <div style="margin-top:5px">
                         <span
                        v-if="lec.type == 'pdf'"
                        color="primary"
                        @click="openVideo(lec)"
                      >
                        فتح الملف
                      </span>
                      <span
                        v-else-if="lec.type == 'voice'"
                        color="primary"
                        @click="openVideo(lec)"
                      >
                        عرض المقطع 
                      </span>
                      <span
                        v-else-if="lec.type == 'video'"
                        color="primary"
                        @click="openVideo(lec)"
                      >
                        عرض الفديو
                      </span>

                      <span
                        v-else-if="lec.type == 'exam'"
                        color="primary"
                        @click="nextLec()"
                      >
                        حل الامتحان
                      </span>
                     </div>
                  </div>
                </div>
              </div>
            </div>


            
          </div>
          <!-- <div style="margin-bottom:15px" v-if="type">
                <iframe v-if="type == 'video' && currVideo" style="border:none; height: 600px; width: 100%;" :src="currVideo" allowfullscreen></iframe>
                <embed v-else-if="type == 'pdf'"  :src="currPDF+'#toolbar=0'" style="height:800px;width:100%"/>
                <audio style="    width: 100%;" controls :src="currVoice" v-else-if="type == 'voice'"></audio>

                
              </div>
              <div style="display:flex;margin-bottom:15px;font-family:CustomFontRegular" v-if="currVideo || currPDF || currVoice">
                  <div style="flex:1">
                      <button v-if="currentLecture.order > 1" class="btn btn-success" @click="prevLec()"> السابق </button>
                  </div>
                  <div style="flex:1;text-align:left">
                      <button class="btn btn-success" v-if="lectures.find(ele => ele.order > currentLecture.order)" @click="nextLec()"> التالي </button>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3" v-for="lec in lectures" :key="lec.id">
                      <div class="last-lecture" style="position:relative">

                          <i v-if="lec.type == 'voice'" class="fas fa-microphone Alec"></i>
                          <i v-else-if="lec.type == 'video'" class="fas fa-video Alec"></i>
                          <i v-else-if="lec.type == 'pdf'" class="fas fa-file-pdf Alec"></i>
                          <i v-else-if="lec.type == 'exam'" class="fas fa-file-alt Alec"></i>

                          <span class="lec-order" v-if="lec.order"> #{{lec.order}} </span>
                          
                          <h5 style="text-overflow: ellipsis;overflow: hidden;line-height: 1.5em;height: 4em;overflow: hidden;"> {{lec.title}} </h5>
                          <h6 style="font-weight: bold;font-size: 12px;color: #a9a9a9;margin-bottom:10px;"> {{$moment(lec.updatedAt).fromNow()}}  </h6>
                          <vs-button v-if="lec.type!='exam'" color="primary" @click="openVideo(lec)"> <i class="fas fa-chalkboard-teacher"></i> مشاهدة </vs-button>
                          <vs-button v-else color="primary"  @click="openExam(lec)" style="background:var(--warning)"><i class="fas fa-tasks"></i> الامتحان </vs-button>
                      </div>
                  </div>
              </div> -->

          <div v-if="totalPages > 1">
            <vs-pagination :total="totalPages" v-model="page"></vs-pagination>
          </div>
        </div>


        <div class="related-courses" >

        <div class="title">
          
              <div class="head-who" style="width: 320px;margin: 0px 0px 13px;">
              <span></span>
              <span></span>
              <span></span>
              <h3 style=" font-size: 24px;padding-top: 7px; !important">
             الكورسات المقترحة</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>

            <Loading v-if="isLoading" />
            <NoData v-else-if="relatedCourses.length == 0 && isLoading == false" />

            <swiper v-else style="padding:0 15px 0" class="swiper" :options="swiperOptionBestSeller">
              <swiper-slide v-for="course in relatedCourses" :key="course.id">
                    <Rcourse :course='course' />
              </swiper-slide>

              <div class="swiper-pagination-best-seller" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>


      </div>


      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import Rcourse from '@/components/Rcourse';


export default {
  components: {
    Loading,
    NoData,
    Rcourse
  },
  data() {
    return {
    isOrderRequired:'',
      lectures: [],
      relatedCourses: [],
      currentLecture: {},
      lecVideoPopup: false,
      isLoading: true,
      page: 1,
      totalPages: 1,
      currVideo: '',
      numberOfAllowedViews: '',
      currVoice: '',
      currPDF: '',
      type: '',
      lecViews: '',

       swiperOptionBestSeller: {
        slidesPerView: 6,
        spaceBetween: 5,
        slidesPerGroup: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination-best-seller",
        //   clickable: true,
        // },
         breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },


    }
  },
  methods: {
       getRelatedCourses(){
        this.isLoading = true;
        this.$axios.get(`/related-courses/${this.$route.params.id}`).then(res => {
          this.relatedCourses = res.data;
          
        }).finally(() => this.isLoading = false);
      },
    completeLec() {
      this.$vs.loading()

      this.$axios
        .post(`/complete-lecture/${this.currentLecture.id}`)
        .then((res) => {
          if (this.numberOfAllowedViews == res.data) {
            this.$bvModal.show('Sad')
          } else {
            this.$bvModal.show('happy')
          }
        })
        .finally(() => this.$vs.loading.close())
    },
    prevLec() {
      console.log('curr ', this.currentLecture)
      if (this.currentLecture.order > 1) {
        let thePrevOrder = this.currentLecture.order - 1
        let thePrevLec = this.lectures.find((ele) => ele.order == thePrevOrder)
        console.log('the prev order ', thePrevLec)
        if (thePrevLec.type == 'exam') {
          this.openExam(thePrevLec)
        } else if (thePrevLec.type == 'pdf') {
          this.openPDF(thePrevLec)
        } else {
          this.openVideo(thePrevLec)
        }
      }
    },
    nextLec(skipExam = false) {
      console.log('curr ', this.currentLecture)
      if (this.currentLecture.order > 0) {
        let theNextorder = this.currentLecture.order + 1
        let theNextLec = this.lectures.find((ele) => ele.order == theNextorder)
        console.log('the next order ', theNextLec)
        if (theNextLec) {
          if (theNextLec.type == 'exam' && skipExam == false) {
            this.$bvModal.show('next-is-exam')
          } else if (theNextLec.type == 'exam' && skipExam == true) {
            this.$bvModal.hide('next-is-exam')
            this.openExam(theNextLec)
          } else if (theNextLec.type == 'pdf') {
            this.openPDF(theNextLec)
          } else {
            this.openVideo(theNextLec)
          }
        }
      }
      this.$bvModal.hide('sad')
      this.$bvModal.hide('happy')
    },
    openExam(lec) {
      this.currentLecture = lec
      this.isLoading = true
      this.$axios
        .get(`/lectures-check/${lec.id}`)
        .then((res) => {
          this.$router.push(`/courseExam/${lec.exam}?exam=course`)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        .catch((err) => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          if (err.response.status === 403) {
            console.log(err.response.data)

            this.currVideo = ''
            this.currVoice = ''
            this.currPDF = ''

            if (err.response.data.message.reason == 'exam') {
              this.$vs.notify({
                title: 'خطأ',
                position: 'top-center',
                color: 'danger',
                text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}`,
              })
            } else if (err.response.data.message.reason == 'views') {
              // this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
              this.$bvModal.show('sad')
            } else if (err.response.data.message.reason == 'lecture') {
              this.$vs.notify({
                title: 'أتبع الترتيب الصحيح للمحاضرات',
                position: 'top-center',
                color: 'danger',
                text: ` يجب تجاوز مشاهدة المحاضرة ${err.response.data.message.info} أولاً`,
              })
            }
          }
        })
        .finally(() => (this.isLoading = false))
    },

    openPDF(lec) {
      this.currentLecture = lec
      this.isLoading = true
      this.$axios
        .get(`/lectures-check/${lec.id}`)
        .then((res) => {
          this.temp = !lec.videoUrl.includes('https://')
            ? 'https://' + lec.videoUrl
            : lec.videoUrl
          this.currPDF = this.temp
          this.type = 'pdf'
          window.scrollTo({ top: 0, behavior: 'smooth' })

         if(this.numberOfAllowedViews){
            this.lectures.map(ele => {
             if( ele.order < this.currentLecture.order ){
                 ele.isChecked = true;
             }
            })
           }

          if (res.data.views >= 0) {
            this.lecViews = res.data.views
            this.$bvModal.show('lec-views')
          }
          console.log(res.data)
        })
        .catch((err) => {
          window.scrollTo({ top: 0, behavior: 'smooth' })

          if (err.response.status === 403) {
            console.log(err.response.data)

            this.currVideo = ''
            this.currVoice = ''
            this.currPDF = ''

            if (err.response.data.message.reason == 'exam') {
              this.$vs.notify({
                title: 'خطأ',
                position: 'top-center',
                color: 'danger',
                text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}`,
              })
            } else if (err.response.data.message.reason == 'views') {
              // this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`})
              this.$bvModal.show('sad')
            } else if (err.response.data.message.reason == 'lecture') {
              this.$vs.notify({
                title: 'أتبع الترتيب الصحيح للمحاضرات',
                position: 'top-center',
                color: 'danger',
                text: ` يجب تجاوز مشاهدة المحاضرة ${err.response.data.message.info} أولاً`,
              })
            }
          }
        })
        .finally(() => (this.isLoading = false))
    },

    getCourse(){
        this.isLoading = true;
        this.$axios.get(`/courses/${this.$route.params.id}`).then(res => {
            this.isOrderRequired = res.data.isOrderRequired;
        }).finally(() => this.isLoading = false);
    },

    openVideo(lec) {
      this.isLoading = true
      this.currentLecture = lec
      this.$axios
        .get(`/lectures-check/${lec.id}`)
        .then((res) => {
          console.log(res.data)
          window.scrollTo({ top: 0, behavior: 'smooth' })

           if(this.numberOfAllowedViews){
            this.lectures.map(ele => {
             if( ele.order < this.currentLecture.order ){
                 ele.isChecked = true;
             }
            })
           }

          if (res.data.views >= 0) {
            this.lecViews = res.data.views
            this.$bvModal.show('lec-views')
          }

          if (lec.type == 'video') {
            this.currVideo = lec.videoUrl
            this.type = 'video'
          } else if (lec.type == 'voice') {
            this.currVoice = lec.videoUrl
            this.type = 'voice'
          } else {
            this.currPDF = !lec.videoUrl.includes('https://')
              ? 'https://' + lec.videoUrl
              : lec.videoUrl
            this.type = 'pdf'
          }

          this.lecVideoPopup = true
        })
        .catch((err) => {
          window.scrollTo({ top: 0, behavior: 'smooth' })

          if (err.response.status === 403) {
            console.log(err.response.data)

            this.currVideo = ''
            this.currVoice = ''
            this.currPDF = ''

            if (err.response.data.message.reason == 'exam') {
              this.$vs.notify({
                title: 'خطأ',
                position: 'top-center',
                color: 'danger',
                text: `يجب تجاوز امتحان المحاضرة ${err.response.data.message.info}`,
              })
            } else if (err.response.data.message.reason == 'views') {
              // this.$vs.notify({ title:"خطأ", position:"top-center",color:"danger", text: ` لقد تجاوزت عدد مرات المشاهدة المحدد لهذه المحاضرة المحدد من قبل المٌعلم`});
              this.$bvModal.show('sad')
            } else if (err.response.data.message.reason == 'lecture') {
              this.$vs.notify({
                title: 'أتبع الترتيب الصحيح للمحاضرات',
                position: 'top-center',
                color: 'danger',
                text: ` يجب تجاوز مشاهدة المحاضرة ${err.response.data.message.info} أولاً`,
              })
            }
          }
        })
        .finally(() => (this.isLoading = false))
    },
  },
  watch: {
    page(val) {
      this.isLoading = true
      this.$axios
        .get(
          `/courses/${this.$route.params.id}/archived-lectures?page=${val}&limit=12`
        )
        .then((res) => {
          console.log('docs ',res.data.docs[0])
          this.lectures = res.data.docs
          this.currentLecture = res.data.docs[0];
          if(res.data.docs[0].type == 'video'){
               console.log('video');
              this.openVideo(this.currentLecture);
          }else if (res.data.docs[0].type == 'pdf'){
               console.log('pdf');
              this.openPDF(this.currentLecture);

          }else if(res.data.docs[0].type == 'voice'){
              console.log('voice');
              this.openVideo(this.currentLecture);

          }else{
              this.type = 'exam'
               console.log('exam');

              this.openExam(this.currentLecture);

          }
          if (res.data.isLimitedNumberOfAllowedViews) {
            this.numberOfAllowedViews = res.data.numberOfAllowedViews
          }
          window.scrollTo({ top: 0, behavior: 'smooth' })

          this.lectures.map((ele) => {
            if (ele.videoUrl.includes('youtube.com')) {
              ele.videoUrl = ele.videoUrl.replace('watch?v=', 'embed/')
              if (ele.videoUrl.includes('&')) {
                let index = ele.videoUrl.indexOf('&')
                ele.videoUrl = ele.videoUrl.substring(0, index)
              }
            } else if (
              ele.videoUrl.includes('vimeo.com') &&
              !ele.videoUrl.includes('player')
            ) {
              ele.videoUrl = ele.videoUrl.replace(
                'vimeo.com/',
                'player.vimeo.com/video/'
              )
            }

            console.log(ele.videoUrl)
          })

          this.page = res.data.page
          this.totalPages = res.data.totalPages
          this.isLoading = false
        })
        .catch((err) => (this.isLoading = false))
        .finally(() => (this.isLoading = false))
    },
  },
  created() {
      this.getCourse();
      this.getRelatedCourses();
    this.$axios
      .get(`/courses/${this.$route.params.id}/archived-lectures?limit=12`)
      .then((res) => {
        console.log(res.data)
        this.lectures = res.data.docs
        if (res.data.isLimitedNumberOfAllowedViews) {
          this.numberOfAllowedViews = res.data.numberOfAllowedViews
        }
        this.currentLecture = res.data.docs[0];
          if(res.data.docs[0].type == 'video'){
               console.log('video');
              this.openVideo(res.data.docs[0]);
          }else if (res.data.docs[0].type == 'pdf'){
               console.log('pdf');
              this.openPDF(res.data.docs[0]);

          }else if(res.data.docs[0].type == 'voice'){
              console.log('voice');
              this.openVideo(res.data.docs[0]);

          }else{
              this.type = 'exam'
               console.log('exam');

              this.openExam(res.data.docs[0]);

          }
        window.scrollTo({ top: 0, behavior: 'smooth' })

        this.lectures.map((ele) => {
          if (ele.type == 'video' && ele.videoUrl.includes('www.youtube.com')) {
            ele.videoUrl = ele.videoUrl.replace('watch?v=', 'embed/')
            if (ele.videoUrl.includes('&')) {
              let index = ele.videoUrl.indexOf('&')
              ele.videoUrl = ele.videoUrl.substring(0, index)
            }
          } else if (
            ele.type == 'video' &&
            ele.videoUrl.includes('vimeo.com') &&
            !ele.videoUrl.includes('player')
          ) {
            ele.videoUrl = ele.videoUrl.replace(
              'vimeo.com/',
              'player.vimeo.com/video/'
            )
          }
        })
        this.page = res.data.page
        this.totalPages = res.data.totalPages
        this.isLoading = false
      })
      .catch((err) => (this.isLoading = false))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style lang="scss">
.course-last-lectures {

    .swiper-button-prev{
      transform: rotate(180deg);
    }

    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 22px;
    background: #f6f6f6;
    padding: 8px 10px;
    font-weight: bold;
    color: #1f74ff;
    border-radius: 8px;
    border: 1px solid #CCC;
}


  .lec-order {
    display: inline-block;
    background: #f7f7f7;
    padding: 7px 10px;
    border: 1px solid #0989c3;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    font-weight: bold;
    top: 5px;
    color: #0989c3;
  }
  a:hover {
    text-decoration: none !important;
    color: #fff !important;
  }
  padding-top: 70px;
  .last-lecture {
    margin-bottom: 15px;
    background: #fff;
    text-align: center;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    h5 {
      padding-top: 21px !important;
    }
    h5,
    h6 {
      text-align: center;
      margin-bottom: 0;
    }
    button {
      width: 100%;
      margin: 0 -2px;
      border-radius: 0;
      border: none;
      text-align: center;
      font-family: 'CustomFontMedium';
    }
  }
  .clickable {
    display: inline-block;
    background: var(--success);
    padding: 6px;
    margin-bottom: 6px;
    color: #fff;
    border-radius: 6px;
    padding-top: 8px;
    cursor: pointer;
  }
}

.lectures-steps {
  margin-right: 16px;
  padding-right: 29px;
  border-right: 1px solid #d2d2d2;
  h5 {
    margin-bottom: 0;
    padding-top: 8px;
    font-family: 'CustomFontMedium';
    font-size: 16px;

   
  }
  .lec-name{
    span {
      cursor: pointer;
      font-family: 'CustomFontRegular';
      transition: all ease 0.5s;
      font-weight: 100;
      padding-top:5px;
      font-size: 14px;
          padding: 7px 5px;
    border: 1px solid #198ec0;
    color: #198ec0;
    border-radius: 9px;
      &:hover {
        color: #0989c3;
      }
    }
  }

  .step {
    display: flex;
    position: relative;
    height: 50px;
    i {
      font-size: 25px;
      margin-bottom: 0;
      color: #d2d2d2;
      padding-top: 5px;
      margin: 0 0 0 18px;
    }
    .cycle {
      span {
        padding: 3px 10px;
        background: #198ec0;
        color: #fff;
        border-radius: 50%;
        margin: 0 15px;
        font-weight: bold;
        position: absolute;
        right: -59px;
      }
    }
    i {
      font-size: 25px;
      margin-bottom: 0;
      color: #9c9c9c;
    }
  }
}
.con-vs-pagination {
  margin: auto;
}
.vs-pagination--ul {
  margin-bottom: 0;
}
</style>
