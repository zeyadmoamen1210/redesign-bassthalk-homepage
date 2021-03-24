<template>
  <div>
    <b-modal id="first-secondary-offer" hide-header hide-footer>
      <div class="d-block text-center">
        <img
          style="width: 100%"
          src="@/assets/imgs/new-photo-basthalk-offer.jpg"
          alt=""
        />
      </div>
      <div>
        <h5
          style="
            text-align: center;
            color: #0989c3;
            padding: 15px 0;
            padding-bottom: 0;
            color: rgb(0 ,108 ,165);
            background: #ffffff;
            text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5,
              -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5,
              0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
            font-size: 25px;
          "
        >
          🔥🚀 المراجعة النهائية لشهر مارس 🔥🚀
        </h5>
        <p
          class="subjects-offer"
          style="text-align: center; margin-bottom: 0; padding-bottom: 0"
        >
          في جميع المواد
        </p>
        <h6 style="text-align: center">
          <h6
            style="
              font-size: 30px;
              text-align: center;
              color: #000000;
              background: #ffffff;
              text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
            "
          >
            ١٠٠ جنية
          </h6>
        </h6>

        <h5
          class="text-danger"
          style="
            margin: 0px;
            font-size: 13px;
            flex: 1 1 0%;
            text-align: center; ;
          "
        >
          <q> للحصول على كود الاشتراك تواصل مع الدعم واتس على 010055818359 </q>
        </h5>

        <div style="display: flex; flex-direction: row; width: 100%">
          <div style="text-align: center; margin: auto">
            <ShareNetwork
              class="btn"
              style="
                background: rgb(37, 211, 102);
                color: rgb(255, 255, 255);
                margin: 10px 13px 0px 0px;
                padding: 0px 9px 0px 0px;
                width: 151px;
                position: relative;
                height: 37px;
              "
              network="whatsapp"
              url=""
              title="السلام عليكم و رحمة اللٌه و بركاته"
              :description="`اريد الإشتراك في \n مراجعة أولى ثانوي كلها  \n في ( العربي + الإنجلش + التاريخ + الجغرافيا + الفلسفة ) \n ١٥٠ جنيه`"
            >
              <h6
                style="
                  display: inline-block;
                  height: 18px;
                  margin: 0px;
                  padding: 0px;
                  position: absolute;
                  top: 39%;
                  right: 8px;
                  transform: translate(0px, -32%);
                  font-size: 15px;
                "
              >
                تواصل مع الدعم
              </h6>
              <i
                style="
                  padding: 7px 8px 6px;
                  background: rgb(30, 169, 82);
                  margin: 0px 2px 0px 0px;
                  font-size: 23px;
                  left: 0;
                  position: absolute;
                "
                class="fab fa-whatsapp"
              ></i>
            </ShareNetwork>
          </div>
        </div>
      </div>
    </b-modal>

    <div class="home-page">
      <div class="outer-slider">
        <div class="slider">
          <!-- <div class="container-fluid">
            <div class="row">
            
              <div class="col-md-6">
                <div class="main-content">
                  <h1>دروسك في بيتك</h1>
                  <p>
                    الآن مع بسطتهالك كل دروسك من بيتك في كل المواد الدراسية
                    <br />بين أفضل المتفوقين
                  </p>
                
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Start Pf Popular Courses -->

      <div class="container">
        <div class="popular-classes">
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>دورات مميزه</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div style="display: flex; flex-wrap: wrap; margin-bottom: 16px">
            <div style="flex: 1">
              <vs-select
                color="primary"
                class="selectExample"
                label="نظم التعليم"
                v-model="eduSystemValue"
              >
                <vs-select-item
                  @click.native="getEduLevels(item)"
                  :key="index"
                  :value="item"
                  :text="item.nameAr"
                  v-for="(item, index) in eduSystems"
                />
              </vs-select>
            </div>

            <div style="flex: 1">
              <vs-select
                color="primary"
                class="selectExample"
                label="المراحل التعليمية"
                v-model="levelsEduValue"
              >
                <vs-select-item
                  @click.native="getEduClasses(item)"
                  :key="index"
                  :value="item"
                  :text="item.nameAr"
                  v-for="(item, index) in levelsEdu"
                />
              </vs-select>
            </div>

            <div style="flex: 1">
              <vs-select
                color="primary"
                class="selectExample"
                label="الصفوف"
                v-model="classesEduValue"
              >
                <vs-select-item
                  @click.native="getEduSubjects(item)"
                  :key="index"
                  :value="item"
                  :text="item.nameAr"
                  v-for="(item, index) in classesEdu"
                />
              </vs-select>
            </div>
          </div>

          <div
            class="subjects-tags container"
            style="display: flex; flex-wrap: wrap; justify-content: center"
          >
            <div v-for="item in subjectsPopularClasses.subjects" :key="item.id">
              <vs-button
                color="primary"
                @click="changeSubject(item)"
                type="border"
              >
                {{ item.nameAr }}
              </vs-button>
            </div>

            <div
              style="
                width: 100%;
                padding: 16px;
                overflow: hidden;
                width: 100%;
                border: 1px solid #eee;
                background: #ffff;
                margin: 15px 0;
              "
            >
              <div class="row">
                
                <div
                  class="col-md-12"
                  style="margin-right: 0; padding-right: 0"
                >
                  <Loading v-if="subjectCoursesLoading" />
                  <NoData
                    v-else-if="
                      subjectsPopularClasses &&
                      subjectsPopularClasses.courses &&
                      subjectsPopularClasses.courses.length == 0 &&
                      subjectCoursesLoading == false
                    "
                  />

                  <div v-else style="flex: 1">
                    <swiper
                      style="width: 100%"
                      class="swiper"
                      :options="swiperOptionBestSeller"
                    >
                      <swiper-slide
                        v-for="course in subjectsPopularClasses.courses"
                        :key="course.id"
                      >
                        <div
                          class="course"
                          
                        >
                          <div
                            class="lec-card"
                            style="text-align: center; height: 150px"
                          >
                            <img
                              class="lec-card-img"
                              v-if="course.image"
                              style="width: 100%; height: 100%"
                              :src="course.image"
                              alt=""
                            />
                            <img
                              class="lec-card-img"
                              v-else-if="
                                !course.image &&
                                course.teacher &&
                                course.teacher.photo !=
                                  'https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg' &&
                                course.teacher.photo
                              "
                              style="width: 100%; height: 100%"
                              :src="course.teacher.photo"
                              alt=""
                            />

                            <img
                              v-else
                              style="width: 100%; height: 100%"
                              class="lec-card-img"
                              src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                              alt=""
                            />
                          </div>

                          

                            <!-- <div class="more-details">
                  <vs-button @click="$router.push(`/course-details/${course.id}`)" color="#f6f6f6" style="color:#333;border:1px solid #ccc"><i class="fas fa-info"></i></vs-button>
                </div> -->

                <div
                            style="
                              font-family: 'CustomFontRegular';
                              padding-top: 10px;
                              margin-bottom: 15px;
                            "
                          >
                            <h5
                              style="
                                font-family: CustomFontRegular;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                font-size: 16px;
                                padding:0 7px
                              "
                            >
                              {{ course.nameAr }}
                            </h5>
                            <p style="padding:0 7px;font-size: 13px;color: #808080;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"> {{course.invitationMsgAr }} </p>
                            <!-- <span> {{course.descriptionAr}} </span> -->
                            
                          </div>


                <div class="status">
                     <div style="flex:1">
                        <b-form-rating style="padding: 0;margin: 0;border: 0;" value="4" readonly variant="warning" ></b-form-rating>
                     </div>

                            <div v-if="course.enrollment == 'accepted'">
                              <vs-button
                                color="warning"
                                @click="
                                  $router.push(
                                    `/course/${course.id}/main${
                                      course.lecture
                                        ? '?nextLive=' + course.lecture
                                        : ''
                                    }`
                                  )
                                "
                              >
                                دخول
                              </vs-button>
                            </div>
                            
                            <div v-else>
                              <vs-button
                                @click="
                                  $router.push(`/course-details/${course.id}`)
                                "
                                color="warning"
                              >
                                عرض التفاصيل
                              </vs-button>
                            </div>
                        </div>

                          </div>

                          
                          
                      </swiper-slide>

                      <div
                        class="swiper-pagination-best-seller"
                        slot="pagination"
                      ></div>
                      <div class="swiper-button-prev" slot="button-prev"></div>
                      <div class="swiper-button-next" slot="button-next"></div>

                    </swiper>


                    <div style="width:100%;text-align:center">
                      <vs-button @click="$router.push(`/subjects/${currSubject.id}/courses`)">
                      عرض جيع الكورسات
                    </vs-button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- End Of Popular Courses -->
      </div>

      <!-- <div class="who-we-are" id="who-we-are">
        <div class="background-who-we-are">
          <img src="@/assets/imgs/logo.png" alt style="width: 100%" />
        </div>
        <div class="container" v-if="about">
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>من نحن</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="logo-who-we-are">
            <img
              style="width: 100%; height: auto !important"
              :src="about.image"
              alt
            />
          </div>
          <div class="title-who-we-are">
            <p>{{ about.description }}</p>
          </div>
        </div>
      </div> -->

      <!-- Start Bassthalk apps (last design from bassthalk development whatsapp group) -->

      <div id="bassthalk-apps">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="apps-text">
                <div class="bassthalk-apps-title">
                  <h5 style="text-align: center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    تطبيق بسطتهالك
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </h5>
                </div>

                <p>
                  احصل علي كورسات المواد التعليمية التي تحتاجها و تمتع بتجربة
                  تعليمية ممتعة و فريدة من نوعها بخطواط بسيطة بإمكانك الوصول الي
                  كافة المدرسين اونلاين
                </p>

                <br />

                <p style="font-size: 23px">قم بتحميل تطبيق الجوال الاَن</p>

                <div id="apps">
                  <div style="text-align: center">
                    <img
                      style="width: 271px; margin: auto"
                      src="@/assets/home/apps.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-7">
              <div class="apps-img">
                <img
                  style="width: 400px"
                  src="@/assets/home/NoPath.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- End Bassthalk apps (last design from bassthalk development whatsapp group) -->

      <!-- <div class="our-view" id="our-view">
        <div class="container">
          <div class="head-who" style="margin-bottom: 0">
            <span></span>
            <span></span>
            <span></span>
            <h3>رؤيتنا</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

    

        <div class="view-cont first" style="overflow: hidden">
          <div class="row">
            <div class="col-md-5">
              <div class="desc-image">
                <img src="../assets/imgs/البساطة.png" alt />
              </div>
            </div>
            <div class="col-md-7">
              <div class="desc-cont" style="margin-top: 189px">
                <h3>البساطة</h3>
                <p>
                  تطبيق بسطتهالك يقدم لك طريقة سهلة و إبداعية في شرح المواد في
                  جميع المراحل.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="view-cont second" style="overflow: hidden">
          <div class="row">
            <div class="col-md-5 order-md-7 test-image-div">
              <div class="desc-image">
                <img src="../assets/imgs/الاختبارات.png" alt />
              </div>
            </div>

            <div class="col-md-7 order-md-5">
              <div class="container">
                <div class="desc-cont">
                  <h3>الاختبارات</h3>
                  <p class="wierd-paragraph">
                    العديد من الاختبارات سواء كانت على الدروس أو اختبارات عامة
                    او اختبارات بنك المعلومات .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="view-cont thired" style="overflow: hidden">
          <div class="row">
            <div class="col-md-5">
              <div class="desc-image">
                <img src="../assets/imgs/المنافسة.png" alt />
              </div>
            </div>
            <div class="col-md-7">
              <div class="container">
                <div class="desc-cont" style="margin-top: 170px">
                  <h3>المنافسة</h3>
                  <p>
                    سيتم عمل ترتيب عام للمتفوقين من حيث الأكثر حصولا على النقاط
                    و اجتياز الاختبارات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div id="the-best-students" style="overflow: hidden">
        <div class="container">
          <div class="best-student-title">
            <h6
              style="text-align: center; margin-bottom: 45px; font-size: 27px"
            >
              <i style="font-size: 12px" class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              المتفوقين
              <i class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i style="font-size: 12px" class="fas fa-star"></i>
            </h6>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div>
                <div
                  style="text-align: center; margin-top: 25px"
                  class="student-info"
                >
                  <img
                    style="width: 115px"
                    src="@/assets/home/thired-one.png"
                    alt=""
                  />
                </div>
                <h5 v-if="$auth.loggedIn && students && students.length > 0">
                  {{ students[2].user.username }}
                </h5>
              </div>
            </div>

            <div class="col-md-4">
              <div>
                <div style="text-align: center" class="student-info">
                  <img
                    style="width: 160px"
                    src="@/assets/home/first-one.png"
                    alt=""
                  />
                </div>
                <h5 v-if="$auth.loggedIn && students && students.length > 0">
                  {{ students[0].user.username }}
                </h5>
              </div>
            </div>

            <div class="col-md-4">
              <div>
                <div
                  style="text-align: center; margin-top: 25px"
                  class="student-info"
                >
                  <img
                    style="width: 115px"
                    src="@/assets/home/second-one.png"
                    alt=""
                  />
                </div>
                <h5 v-if="$auth.loggedIn && students && students.length > 0">
                  {{ students[1].user.username }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="latest-news-section" style="position: relative">
        <img src="@/assets/home/leaderboard.png" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="news-notification">
                <div class="best-student-title">
                  <h6
                    style="
                      text-align: center;
                      margin-bottom: 45px;
                      font-size: 27px;
                      color: #058ac6;
                    "
                  >
                    <i style="font-size: 12px" class="fas fa-star"></i>
                    <i style="font-size: 15px" class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    أخر الأخبار
                    <i class="fas fa-star"></i>
                    <i style="font-size: 15px" class="fas fa-star"></i>
                    <i style="font-size: 12px" class="fas fa-star"></i>
                  </h6>
                </div>

                <div class="form-group">
                  <label for="" style="font-family: 'CustomFontRegular'">
                    قم بالاشتراك الاَن لمتابعة
                    <h5
                      style="
                        color: #058ac6;
                        font-family: 'CustomFontRegular';
                        display: inline-block;
                        font-size: 14px;
                        margin-bottom:0
                      "
                    >
                      أخر الأخبار
                    </h5>
                  </label>
                  <input
                    placeholder="أدخل البريد الإلكتروني الخاص بك هنا"
                    type="text"
                    class="form-control"
                  />
                </div>
                <vs-button style="font-family:'CustomFontRegular';padding:5px 10px">
                  التسجيل
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="about-bassthalk">
        <div>
          <div class="about-bassthalk-title">
            <h6
              style="
                text-align: center;
                margin-bottom: 45px;
                font-size: 27px;
                color: #058ac6;
              "
            >
              <i style="font-size: 12px" class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <h5 style="display: inline-block;font-size: 29px;color: #333;">
                من نحن
              </h5>
              <i class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i style="font-size: 12px" class="fas fa-star"></i>
            </h6>
          </div>


            <div style="overflow: hidden;">
              <div class="row">
              <div class="col-md-6">
              <div style="    padding-top: 66px;padding-right: 50px;">
                <div class="container">
                  <div>
                    <h5 style="font-size:25px">خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                    <div>
                      <h6>
                        {{about.title}}
                      </h6>
                      <p style="    color: #949191;">
                        {{about.description}}
                      </p>
                    </div>
                    <div class="about-list">
                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-one.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>

                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-two.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>

                      <div class="about-feature">
                        <div> <img src="@/assets/home/num-three.png" alt=""> </div>
                        <div>
                          <h5>خدمة ورؤية <h6 style="display: inline-block;color: #058ac6;">بسطتهالك</h6></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div>
                <img style="width: 100%;" src="@/assets/home/about-img.png" alt="">
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>


      <div class="our-view-services">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="image">
                <img style="width:100%" src="@/assets/home/view-services.png" alt="">
                <div class="main-text">
                  <h5>
                    أكثر من 10 خدمات <br/>
                    علي منصة واحدة
                  </h5>
                </div>

                <div class="servies-one">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-two">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-three">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-four">
                  <h5>الخدمة</h5>
                </div>


                <div class="servies-five">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-six">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-seven">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-eight">
                  <h5>الخدمة</h5>
                </div>

                <div class="servies-nine">
                  <h5>الخدمة</h5>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div style="padding: 15px 25px 0 0;">
                <h5>خدمات و رؤية  <h6 style="color:#058ac6;display:inline-block;font-size:20px">
                  بسطتهالك
                  <img src="@/assets/imgs/logo.png" style="width:32px;" alt="">
                  </h6> 
                </h5>

                <p style="font-family: 'CustomFontRegular';font-size: 14px;line-height: 1.7;">
                  إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي إحصل علي 
                </p>

                <div>
                  <ul>
                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon.png" alt="">
                      </div>
                      <div>
                       <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-2.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-3.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-4.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>

                    <li style="display:flex">
                      <div>
                        <img src="@/assets/home/services-icon-5.png" alt="">
                      </div>
                      <div>
                        <h6>خدمات و رؤية تطبيق بسطتهالك</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="contact-with-bassthalk">
        <div class="contact-bassthalk-title">
            <h6
              style="
                text-align: center;
                margin-bottom: 45px;
                font-size: 27px;
                color: #058ac6;
                padding-top:40px
              "
            >
              <i style="font-size: 12px" class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <h5 style="display: inline-block;font-size: 29px;color: #333;">
                تواصل معنا
              </h5>
              <i class="fas fa-star"></i>
              <i style="font-size: 15px" class="fas fa-star"></i>
              <i style="font-size: 12px" class="fas fa-star"></i>
            </h6>
          </div>
        <div class="row">
          <div class="col-md-7">
          <div class="form">
            <div class="container">
              <div>
                <h5>قم بملأ البيانات التالية</h5>
              </div>

              <div class="form-group">
                <input type="text" placeholder="الإسم" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" placeholder="البريد الإلكتروني" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" placeholder="رقم الهاتف" class="form-control">
              </div>
              <div class="form-group">
                <textarea  style="resize:none;height:170px" type="text" placeholder="الرسالة" class="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="contact-with-us">
            <h5 style="padding:15px;text-align:center;color:#FFF">تواصيل معنا علي </h5>
            <div class="container">
              <div>
              <ul style="list-style:none;">
                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-phone"></i>
                  01033143665
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-envelope-open"></i>
                  bassthalk.edu@gmail.com
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fas fa-map-marker-alt"></i>
                  رقم 18 , الهرم , الجيزة
                </li>

                <li style="text-align: left;color:#FFF">
                  <i class="fab fa-whatsapp"></i>
                  01033143665
                </li>
              </ul>
            </div>

            <div class="social-network">
              <h5>التواصل الإجتماعي</h5>

              <ul >
                <li><i class="fab fa-facebook-square"></i></li>
                <li><i class="fab fa-youtube"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-linkedin"></i></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <!-- <div class="question-and-answer" id="question-and-answer">
        <div class="container">
          <div class="head-who">
            <span></span>
            <span></span>
            <span></span>
            <h3>أسئلة و أجوبة</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="questions-sec">
            <div class="row">
              <div class="col-md-6" v-if="studentsQuestions.length > 6">
                <div class="ques">
                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[0].question }}</h4>
                        <p v-if="ques1">{{ studentsQuestions[0].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques1 = !ques1">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[1].question }}</h4>
                        <p v-if="ques2">{{ studentsQuestions[1].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques2 = !ques2">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[2].question }}</h4>
                        <p v-if="ques3">{{ studentsQuestions[2].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques3 = !ques3">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[3].question }}</h4>
                        <p v-if="ques4">{{ studentsQuestions[3].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques4 = !ques4">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[4].question }}</h4>
                        <p v-if="ques5">{{ studentsQuestions[4].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques5 = !ques5">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ques-item" style="overflow: hidden">
                    <div class="row">
                      <div class="col-md-10 col-10">
                        <h4>{{ studentsQuestions[5].question }}</h4>
                        <p v-if="ques6">{{ studentsQuestions[5].answer }}</p>
                      </div>
                      <div class="col-md-2 col-2">
                        <div class="icon">
                          <button @click="ques6 = !ques6">
                            <img src="../assets/imgs/add.png" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="ask-ques">
                  <div class="ask-ques-head">
                    <div class="row">
                      <div class="col-md-3 col-3">
                        <img src="../assets/imgs/ask-ques.png" alt />
                      </div>
                      <div class="col-md-9 col-9">
                        <h4>أرسل سؤلك</h4>
                      </div>
                    </div>
                  </div>
                  <div class="ask-ques-head" style="padding-right: 16px">
                    <div class="row">
                      <div class="col-md-3 col-3">
                        <img src="../assets/imgs/chat-avatar.png" alt />
                      </div>
                      <div class="col-md-9 col-9">
                        <p style="margin-top: 23px">
                          قم بأرسال استفسارك و سنجاوب عليك في اسرع وقت
                        </p>
                      </div>
                    </div>
                  </div>
                  <Loading v-if="isLoading" />
                  <div v-else class="send">
                    <div class="form-groub" v-if="$auth.loggedIn">
                      <img
                        @click="sendQuestion"
                        src="../assets/imgs/send.png"
                        style="cursor: pointer"
                        alt
                      />
                      <input
                        v-model="question"
                        placeholder="أرسل سؤالك"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div v-else>
                      <p class="text-center">
                        ولارسال سؤال من فضلك قم بتسجيل الدخول
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="partnars" id="partnars" v-if="$auth.loggedIn">
            <div class="container">
              <div class="head-who">
                <span></span>
                <span></span>
                <span></span>
                <h3>شركاؤنا</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Loading v-if="isLoading" />
              <div class="partnars-item" style v-else>
                <div class="row">
                  <div class="col-md-4" v-for="part in partners" :key="part.id">
                    <div class="partner">
                      <div style="text-align: center">
                        <img
                          style="
                            width: 166px;
                            height: 133px;
                            border-radius: 50%;
                            box-shadow: 0 2px 13px 1px #ddd;
                            margin: auto;
                            text-align: center;
                          "
                          :src="part.image"
                        />
                        <h4
                          style="
                            text-align: center;
                            margin-top: 20px;
                            color: #0989c3;
                          "
                        >
                          {{ part.name }}
                        </h4>
                        <p style="text-align: center; color: #676767">
                          {{ part.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import NoData from '../components/NoData'

export default {
  components: {
    Loading,
    NoData,
  },
  data() {
    return {
      isvalid: false,
      studentsQuestions: [],
      subjectsPopularClasses: [],
      subjectsPopularClassesValue: '',
      swiperOptionBestSeller: {
        slidesPerView: 4,
        spaceBetween: 5,
        slidesPerGroup: 4,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        loopFillGroupWithBlank: false,

        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      currSubject: {},
      eduSystemValue: {},
      levelsEduValue: {},
      classesEduValue: {},
      classesEdu: {},

      levelsEdu: '',
      ques1: false,
      about: [],
      ques2: false,
      ques3: false,
      ques4: false,
      ques5: false,
      ques6: false,
      sent: [],
      question: '',
      isLoading: false,
      subjectCoursesLoading: true,
      students: [],
      studentsQuestions: [],
      partners: [],
      eduSystems: [],
    }
  },
  mounted(){
    this.$bvModal.show("first-secondary-offer");
  },
  created() {
    this.$axios.get(`partners`).then((res) => {
      this.partners = res.data
    })
    this.$axios.get(`about`).then((res) => {
      this.about = res.data
    })
    this.$axios.get(`/systems`).then((res) => {
      this.eduSystems = res.data
      this.eduSystemValue = res.data[0]
      this.getEduLevels(this.eduSystems[0].levels[0], true)
    })
    this.getBestStudents()
    this.getStudentsQuestions()
  },
  methods: {
    changeSubject(subject, isPopular = null) {
      this.subjectCoursesLoading = true
      this.currSubject = subject
      this.$axios
        .get(
          `/subjects/${subject.id}/courses-public${
            isPopular == true || isPopular == false
              ? '?isPopular=' + isPopular
              : ''
          }`
        )
        .then((res) => {
          console.log(res)
          this.subjectsPopularClasses.courses = res.data.docs
        })
        .finally(() => (this.subjectCoursesLoading = false))
    },
    getEduSubjects(item) {
      this.subjectCoursesLoading = true
      this.$axios
        .get(`/classes/${item.id}/subjects-popular-courses`)
        .then((res) => {
          this.subjectsPopularClasses = res.data
          this.currSubject = this.subjectsPopularClasses.subjects[0]
        })
        .finally(() => (this.subjectCoursesLoading = false))
    },
    toggleQuestion(index) {
      let quest = 'ques' + index
      this.quest = !this.quest
    },
    getEduLevels(item, inCreated = false) {
      this.subjectCoursesLoading = true
      this.$axios
        .get(`/systems/${item.id}/levels`)
        .then((res) => {
          this.levelsEdu = res.data
          this.levelsEduValue = res.data[0]
          if (inCreated) {
            this.getEduClasses(this.levelsEdu[0], true)
          }
        })
        .finally(() => (this.subjectCoursesLoading = false))
    },
    getEduClasses(item, inCreated = false) {
      this.subjectCoursesLoading = true
      this.$axios
        .get(`/levels/${item.id}/classes`)
        .then((res) => {
          this.classesEdu = res.data
          this.classesEduValue = res.data[0]
          if (inCreated) {
            this.getEduSubjects(this.classesEduValue)
          }
        })
        .finally(() => (this.subjectCoursesLoading = false))
    },
    getStudentsQuestions() {
      // /questions-admin
      this.isLoading = true
      this.$axios
        .get(`questions-admin`)
        .then((res) => {
          this.studentsQuestions = res.data
        })
        .finally(() => (this.isLoading = false))
    },
    sendQuestion: function () {
      this.isLoading = true
      this.$axios
        .post(`questions-students`, { question: this.question })
        .then((res) => {
          this.question = ''
          this.$snotify.success(`تم إرسال السؤال بنجاح`)
        })
        .finally(() => (this.isLoading = false))
    },
    getBestStudents() {
      // /classes/5/rank
      if (this.$auth.loggedIn && this.$auth?.user?.class?.id) {
        this.isvalid = true
        this.isLoading = true
        this.$axios
          .get(`classes/${this.$auth.user.class.id}/rank`)
          .then((res) => {
            this.students = res.data
          })
          .finally(() => (this.isLoading = false))
      }
    },
  },
  filters: {
    getLevels(val) {
      if (val == 1) {
        return 'الصف الأول الثانوي'
      } else if (val == 2) {
        return 'الصف الثاني الثانوي'
      } else if (val == 3) {
        return 'الصف الثالث الثانوي'
      } else if (val == 4) {
        return 'الصف الرابع الإبتدائي'
      } else if (val == 5) {
        return 'الصف الخامس الإبتدائي'
      } else if (val == 6) {
        return 'الصف السادس الإبتدائي'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/sass/index.scss';

.popular-classes {
  .input-select.vs-select--input {
    padding: 8px 28px !important;
  }
  .con-select {
    margin: auto;
  }
}

.subjects-offer {
  color: transparent;
  background: #4074b5;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px #ffffff80;
  font-size: 20px;
  font-weight: bold;
}
.navbar-before .navbar-big {
  display: none;
}

.blue-ball {
  top: -46px;
  right: -43px;
  content: '';
  height: 97px;
  width: 100px;
  background: #098bc1;
  border-radius: 50%;
  border: 1px solid #098bc1;
}

.head-who h3 {
  text-align: center;
}
span:first-of-type {
  width: 12px;
  height: 12px;
  top: 14px;
  right: 4px;
}
span:nth-of-type(2) {
  width: 12px;
  height: 12px;
  top: 14px;
  left: 4px;
}

span:nth-of-type(3) {
  top: 13px;
  left: 20px;
  height: 14px;
  width: 15px;
}
span:nth-of-type(4) {
  top: 10px;
  left: 40px;
}
span:nth-of-type(5) {
  top: 13px;
  right: 20px;
  height: 14px;
  width: 15px;
}
span:nth-of-type(6) {
  top: 10px;
  right: 40px;
}

.slider {
  min-height: 762px;
  background: url('../assets/home/header-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
  .title-who-we-are p {
  text-align: center;
  font-family: 'CustomFontRegular';
}
.main-content {
  padding: 168px 87px 0 0;
}
.main-content h1 {
  margin-bottom: 21px;
  font-size: 40px;
  font-family: 'CustomFontHeavy';
}
.main-content p {
  font-family: 'CustomFontRegular';
  font-size: 30px;
  font-weight: 600;
  opacity: 0.8;
  width: 83%;
}
.main-content .light-ball {
  width: 270px;
  height: 264px;
  position: absolute;
  background: #058ac67a;
  border: 1px solid #abd8ec36;
  opacity: 0.7;
  border-radius: 50%;
  right: -149px;
  bottom: -126px;
}
.head-who {
  position: relative;
  width: 300px;
  margin: 30px 0;
}
.who-we-are {
  position: relative;
  min-height: 330px;
  margin-top: 67px;
}
.who-we-are .background-who-we-are {
  position: absolute;
  top: 0;
  opacity: 0.1;
  left: 50%;
  transform: translate(-50%);
}
.who-we-are .logo-who-we-are {
  width: 100px;
  height: 100px;
  text-align: center;
  margin: auto;
}
.who-we-are .logo-who-we-are img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
 .our-view .desc-image {
  width: 442px;
  margin: 0 !important;
}
.our-view .desc-image img {
  width: 100%;
  height: 100%;
  margin: 52px 0 0 0;
}
.our-view .desc-cont {
  margin-top: 110px;
}
.our-view .desc-cont h3 {
  font-family: 'CustomFontRegular';
  font-size: 44px;
  font-weight: bold;
}
.our-view .desc-cont p {
  font-size: 27px;
  width: 67%;
}



.subjects-tags {
  .swiper-button-prev {
    transform: rotate(180deg);
  }

  .swiper-container{
    
    padding: 15px 0;

  }

  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 22px;
    background: #f6f6f6;
    padding: 8px 10px;
    font-weight: bold;
    color: #1f74ff;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .course {
       position: relative;
    margin-top: 15px;
    box-shadow: 0 4px 25px 0 #0000001a;
    transition: all 0.5s ease;
    margin: 5px;
    margin-bottom: 15px;
    padding: 0 !important;
    min-height: auto !important;
    &:hover {
      transform: translateY(-10px);
    }
    .status {
      
      color: #fff;
      font-family: 'CustomFontBold';
      display: flex;
      >div {
      
      }
      // background: #0989c3;
      button {
        text-align: center;
      }
      // .more-details{
      //   text-align: center;
      //   flex:1;
      //   margin-right: 2px;
      // }
    }
    .accepted {
      background: #27ae60;
    }
    .refused {
      background: #c0392b;
    }
    .pending {
      background: #0989c3;
    }
    > span {
      display: block;
      text-align: center;
      color: #c5c5c5;
      font-family: 'CustomFontRegular';
    }
    > h5 {
      margin-bottom: 0;
      text-align: center;
    }
    .teacher {
      display: flex;
      margin-top: 19px;
      // background: #f7f7f7;
      // border-top: 1px solid #EEE;
      h6 {
        margin-top: 15px;
        margin-bottom: 0;
      }
    }
  }
}

.view-cont.second {
  overflow: hidden;
  position: relative;
  min-height: 570px;
}
.our-view .view-cont {
  position: relative;
}
.our-view .view-cont .view-ball {
  position: absolute;
  right: -226px;
  top: 3px;
  width: 575px;
  height: 489px;
  background: #098bc1;
  border-radius: 50%;
}
.our-view .view-cont .view-ball .view-ball-inner {
  position: absolute;
  right: 25px;
  top: 24px;
  width: 509px;
  height: 443px;
  background: #098bc1;
  border-radius: 50%;
}

.second .desc-image,
.forth .desc-image {
  margin: 0;
  position: absolute;
  left: 0;
  height: 527px;
}
.second .desc-image img,
.forth .desc-image img {
  width: 100%;
  height: 98%;
  margin-right: 0;
  margin-top: -5px;
}
.send {
  position: absolute;
  bottom: 10px;
  width: 100%;
}
.title-who-we-are p {
  text-align: center;
  font-family: 'CustomFontRegular';
  font-weight: bold;
}
.second .desc-cont,
.forth .desc-cont {
  padding: 0 140px 0 0;
  margin: 85px 0;
}
.second .desc-cont h3,
.forth .desc-cont h3 {
  font-family: 'CustomFontRegular';
  font-size: 44px;
  font-weight: bold;
}
.second .desc-cont p,
.forth .desc-cont p {
  font-size: 27px;
  width: 67%;
}
.second .view-ball,
.forth .view-ball {
  left: -226px;
  right: auto !important;
}
.second .view-ball .view-ball-inner,
.forth .view-ball .view-ball-inner {
  left: 25px;
  right: auto !important;
}
.the-best .head-who {
  width: 264px;
}
.the-best .all-the-best-btn {
  margin: 51px 0;
  text-align: left;
}

.subjects-tags {
  > div {
    button {
      padding: 5px;
      margin: 5px;
      font-family: 'CustomFontRegular';
    }
  }
}

.the-best .all-the-best-btn button {
  background: #058ac6;
  color: #fff;
  font-family: 'CustomFontBold';
}
.best-sort {
  margin-bottom: 50px;
}
.best-sort .user-sort-item {
  position: relative;
}
.best-sort .user-sort-item .profile-pic {
  margin: 118px 0 0;
  text-align: center;
}
.best-sort .user-sort-item .profile-pic span {
  display: inline-block;
  position: absolute;
  top: -50px;
  transform: translateY(-50%);
  z-index: -1;
  /* right: 50%; */
  background: none;
  border: 0;
  width: 100%;
  text-align: center;
}
.best-sort .user-sort-item .profile-pic > img {
  width: 200px;
  text-align: center;

  min-height: 200px;
}
.best-sort .user-sort-item .profile-pic .profile-cont h3 {
  text-align: center;
  margin: 10px 0;
}
.best-sort .user-sort-item .profile-pic .profile-cont h3:last-of-type {
  font-family: 'CustomFontLight';
  font-weight: bold;
  color: #a0a0a0;
  font-size: 24px;
}

.best-sort .user-sort-item .profile-pic .profile-cont-point {
  overflow: hidden;
  position: relative;
  // left: -55px;
  // width: 48%;
  transform: translate(-50%);
}
.best-sort .user-sort-item .profile-pic .profile-cont-point h6 {
  display: block;
  width: 50%;
  float: left;
  margin: 18px 0;
  font-size: 33px;
  color: #098bc1;
}
.best-sort .user-sort-item .profile-pic .profile-cont-point img {
  display: block;
  width: 47px;
  float: left;
}
.best-sort .first-student {
  transform: scale(1.11);
}
.best-sort .first-student span {
  top: -88px !important;
  right: 50%;
  transform: translate(16%) !important;
  margin: 0 -34%;
}

.download-app {
  background: url('../assets/imgs/download-bg.png');
  padding-bottom: 23px;
}
.download-app img {
  width: 100%;
}
.download-app .download-app-cont h3 {
  font-size: 43px;
  margin-top: 100px;
  margin-bottom: 38px;
}
.download-app .download-app-cont .head-who {
  width: 350px;
  margin-top: 116px;
}
.download-app .download-app-cont .head-who h3 {
  font-size: 39px;
}

.download-app .android-ios div {
  text-align: center;
}
.download-app .android-ios div img {
  width: 53px;
  height: 60px;
}
.download-app .android-ios .android {
  overflow: hidden;
  background: #333;
  color: #fff;
  font-family: 'CustomFontBold';
  font-size: 21px;
  padding: 14px 19px;
  border-radius: 7px;
}
.download-app .android-ios .ios {
  overflow: hidden;
  background: #333;
  color: #fff;
  font-family: 'CustomFontBold';
  font-size: 21px;
  padding: 14px 19px;
  border-radius: 7px;
}

.question-and-answer .head-who {
  width: 300px;
}
.question-and-answer .questions-sec .ques .ques-item {
  overflow: hidden;
  transition: all 0.3s linear;
  padding: 6px 18px;
  background: #f0f0f0;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px dashed #ccc;
}
.question-and-answer .questions-sec .ques .ques-item h4 {
  font-size: 17px;
  margin-bottom: 11px;
}
.question-and-answer .questions-sec .ques .ques-item p {
  font-family: 'CustomFontRegular';
  color: #666;
  padding-top: 5px;
}
.question-and-answer .questions-sec .ques .ques-item .icon {
  text-align: left;
  margin: -3px 0;
}
.question-and-answer .questions-sec .ques .ques-item .icon button {
  background: none;
  border: 0;
  outline: 0;
}
.question-and-answer .ask-ques {
  box-shadow: 3px 1px 17px 0 #ddd;
  min-height: 294px;
  position: relative;
  border-radius: 15px;
}
.question-and-answer .ask-ques .ask-ques-head h4 {
  margin: 33px 0 0;
  font-size: 29px;
}
   .send {
  position: absolute;
  bottom: 8px;
  width: 100%;
  padding: 10px 10px 0;
}
.send input {
  padding: 20px 11px;
  box-shadow: 2px 1px 16px 1px #ddd;
  border: 0;
}
.send img {
  position: absolute;
  height: 36px;
  top: 2px;
  left: 7px;
}
.partnars .partnars-item .partner > div {
  padding: 43px;
  box-shadow: 0 2px 13px 1px #ddd;
  border-radius: 14px;
}
@media (max-width: 575px) {
  .contact-with-bassthalk .form{
        padding-right:0px !important;
    }
  .image{
    >div:not(:first-of-type){
      h5{
        font-size: 13px !important;
      }
    }
    .main-text{
      h5{
        font-size: 11px !important;
      }
    }
  }
  .news-notification{
    padding: 0 !important;
  }
  .latest-news-section{
    min-height: 425px !important;
  }
  .apps-img {
    text-align: center !important;
    img {
      width: 329px !important;
    }
  }
  .head-who {
    width: auto !important;
  }
  .footer .copyright[data-v-0d2d6594] {
    margin: 24px auto 0;
    width: 90%;
    text-align: center;
  }

  .navbar-before-small .nav-small .logo  {
    width: 51px;
    float: right;
    height: 34px;
  }
  .home-page .question-and-answer .head-who {
    width: 227px;
  }
  .home-page .download-app .download-app-cont .head-who {
    width: 291px;
    margin-top: 116px;
  }
  .main-content {
    padding: 121px 27px 0 0;
  }
  .our-view .desc-cont {
    margin-top: 80px !important;
  }
  .our-view .desc-cont h3 {
    text-align: center;
  }
  .desc-cont p {
    width: 100% !important;
    text-align: center;
    padding: 10px;
  }
  .main-content p {
    font-size: 24px;
    text-align: center;

    text-align: center;
    padding: 0;
    margin: 0;
  }
  .wierd-paragraph {
    width: 100% !important;
  }
  .slider {
         background-size: 732px 629px;
    background-repeat: no-repeat;
    width: 100%;
    background-position: top;
    margin-top: -20px;
    min-height: 636px;
  }

  .home-page .our-view .desc-cont h3 {
    text-align: center;
  }
  .home-page .our-view .desc-cont p {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    padding: 0 10px;
  }
  .desc-cont .wierd-paragraph {
    margin-bottom: 0 !important;
  }

  .second .desc-image,
  .forth .desc-image {
    margin: 0 0;
    position: static;
    left: 0;
    height: 381px;
    width: auto;
  }

  .home-page .our-view .desc-image {
    width: auto;
  }
  .home-page .our-view .desc-cont {
    margin-top: 0 !important;
    padding-right: 0;
    width: 100%;
    margin-bottom: 0;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    margin-top: -120px !important;
  }
  .home-page .main-content {
    padding: 150px 0 0 0;
  }
  .home-page .main-content h1 {
    text-align: center;
    font-size: 42px;
  }
  .home-page .main-content p {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
  .home-page .download-app .download-app-cont .head-who h3 {
    font-size: 30px;
  }
  .home-page .download-app .download-app-cont h3 {
    font-size: 29px;
  }
  .home-page .download-app .android-ios .android {
    margin-bottom: 30px;
  }
  .home-page .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 9px;
    padding-top: 8px;
  }
  .home-page .question-and-answer .ask-ques {
    height: 433px;
    margin: 19px 0;
  }
  .home-page .question-and-answer .ask-ques .ask-ques-head h4 {
    margin: 0 0 20px;
    margin-top: 26px;
    font-size: 25px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 119px 0 0;
    width: 100%;
  }
  .download-app .android-ios .android {
    margin-bottom: 15px;
  }

  .our-view .desc-image {
    // width: 376px !important;
    margin: 0 !important;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .contact-with-bassthalk .form{
        padding-right:0px !important;
    }
  .image{
    .main-text{
      h5{
        font-size: 15px !important;
      }
    }
  }
  .news-notification{
    padding: 0 !important;
  }
  .apps-img {
    text-align: center !important;
    img {
      width: 329px !important;
    }
  }
  .navbar-before-small .nav-small .logo  {
    width: 68px;
    float: right;
    height: 59px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 0;
    padding-top: 85px;
  }
  .second .desc-image,
  .forth .desc-image {
    margin: 0 0;
    position: static;
    left: 0;
    height: 381px;
    width: auto;
  }

  .home-page .our-view .desc-cont {
    margin-right: 0;
    margin-top: 226px;
    margin-bottom: 0;
  }
  .home-page .second .desc-image,
   .home-page .forth .desc-image {
    position: relative;
    width: auto;
  }
  .home-page .second .desc-image img,
   .home-page .forth .desc-image img {
    width: 100%;
    height: 638px;
  }
  .home-page .our-view .desc-image {
    width: auto;
  }
  .home-page .download-app .android-ios div {
    margin-bottom: 15px;
  }
  .ask-ques {
    margin-top: 34px;
  }
  .home-page .our-view .desc-cont {
    margin-top: 221px;
  }
  .home-page .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 14px;
    padding-top: 5px;
  }

   .home-page .our-view .desc-cont h3 {
    text-align: center;
  }
    .home-page .our-view .desc-cont p {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    padding: 0 10px;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    padding: 0;
  }
  .desc-cont {
    margin-top: 0 !important;
  }
  .home-page .second .desc-cont,
   .home-page .forth .desc-cont {
    margin-top: 200px !important;
  }
  .wierd-paragraph {
    margin-bottom: 0 !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .image{
    
    .main-text{
      h5{
        font-size: 15px !important;
      }
    }
  }
  .question-and-answer .questions-sec .ques .ques-item h4 {
    font-size: 11px;
  }
  .question-and-answer .questions-sec .ques .ques-item {
    height: 44px;
    padding: 13px 18px;
  }
  .question-and-answer .questions-sec .ques .ques-item .icon {
    margin: -6px 0;
  }
  .download-app .android-ios div {
    font-size: 11px;
  }
  .second .desc-cont p,
  .forth .desc-cont p {
    width: 100% !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .download-app .android-ios div {
    font-size: 15px;
  }
  .second .desc-cont,
  .forth .desc-cont {
    padding: 0;
    margin: 0;
    margin-top: 156px;
  }

  .home-page .download-app .android-ios div {
    font-size: 13px;
  }
  .download-app .android-ios div {
    font-size: 15px;
  }
  .test-image-div {
    height: 497px;
  }
  .test-image-div .desc-image img {
    height: 100% !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .outer-slider {
    position: relative;
    top: -118px;
    z-index: -1;
  }
}

@media (min-width: 1200px) {
  .test-image-div {
    height: 497px;
  }
  .test-image-div .desc-image img {
    height: 100% !important;
  }

  .outer-slider {
    position: relative;
    top: -91px;
    z-index: -1;
  }
}

/* Bassthalk-apps section design */
#bassthalk-apps {
  background-image: url('../assets/home/bassthalk-apps.png');
  background-size: cover;

  .apps-text {
    padding: 74px 0;
  }
  .bassthalk-apps-title {
    text-align: center;
    margin: 2px 0 25px;
    color: #fff;
    i {
      &:first-of-type {
        font-size: 12px;
      }
      &:nth-of-type(2) {
        font-size: 15px;
      }

      &:nth-of-type(5) {
        font-size: 15px;
      }
      &:last-of-type {
        font-size: 12px;
      }
    }
  }

  .apps-img {
    overflow: hidden;
    text-align: left;
  }

  p {
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    line-height: 26px;
    font-family: 'CustomFontRegular';
  }
}

#the-best-students {
  padding: 39px 0;
  .best-student-title {
    i {
      color: #058ac6;
    }
  }
  h5 {
    text-align: center;
    padding: 9px 0;
    color: #0989c3;
  }
}

.latest-news-section {
  position: relative;
  min-height: 500px;
  > img {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    max-height: 500px;
  }
  .news-notification {
    padding-top: 222px;
  }
}

#about-bassthalk{
    padding: 36px 0;

  .about-bassthalk-title{

  }
  .about-list{
    .about-feature{
      display: flex;
      margin-bottom: 30px;
      >div{
        img{
          width: 70px;
          margin-left:15px;
          margin-bottom:20px;
        }
        h5{
            margin-top: 13px;
        }
      }
    }
   
  }
}


.our-view-services{
   .image{
      position:relative;

      .main-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-90%,-50%);
        h5{
          font-size: 25px;
        }
      }
      >div{
        position:absolute;
        &:not(:first-of-type){
          color: #585858;
          h5{
          font-family: 'CustomFontRegular';

          }
        }
      }
      .servies-one{
        top: 3%;
    right: 19%;
      }
      .servies-two{
        top: 34%;
    right: 4%;
      }

      .servies-three{
            bottom: 22%;
    right: 3%;
      }

      .servies-four{
          bottom: 2%;
    right: 18%;
      }

      .servies-five{
              bottom: 2%;
    left: 7%;
      }

       .servies-six{
           bottom: 26%;
    left: -4%;
      }

      .servies-seven{
               top: 30%;
    left: -4%;
      }

      .servies-eight{
         top: 5%;
    left: 4%;
      }

      .servies-nine{
            top: -6%;
    left: 50%;
      }

      >img{
        width: 100%;
      }
      
    }
    ul{
      li{
        margin-bottom:20px;
        h6{
          color:#058ac6;
               padding-top: 11px; 
    padding-right: 12px;
        }
        img{
          width:42px
        }
      }
    }
}

.contact-with-bassthalk{
  overflow: hidden;
 
  .contact-with-us{
    background-image:url('../assets/home/form.png');background-size:cover;height:100%;
    ul{
      padding:0 22px;
      li{
        line-height: 2.5;
         font-family: 'CustomFontRegular';
         direction: ltr;
      }
    }
     h5{
        padding: 45px 0 43px !important;
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: 'CustomFontRegular';

  }
  }
  .form{
    padding-right:50px;
    h5{
      font-family: 'CustomFontLight';
    }
    textarea{
          box-shadow: 0px 1px 10px 1px #ddd;
    border: none;
    }
  }

  .social-network{
    text-align: center;
    color: #FFF;
    h5{
      padding: 0 !important;
    }
    ul{
      list-style:none;
    text-align: center;

      li{
        display:inline-block;
        padding:0 5px;
        i{
          font-size:24px
        }
      }
    }
  }
}

.subjects-tags .course .status > div{
  text-align:end !important;
}
.modal-body{
  z-index: 99999;
}
</style>
