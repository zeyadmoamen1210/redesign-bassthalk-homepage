<template>
  <div>
    <div class="index-page">
      <div>
        <div class="dashboard">
          <div class="container">
            <div class="stats">
              <div class="row">
                <div class="col-md-3" @click="$router.push('/mylessons')">
                  <div class="count-students" style="background-color:#e67e22;border:#e67e22">
                    <h5>عدد الدروس</h5>
                    <i class="fas fa-school"></i>
                    <span>{{stats.numberOfLessons}}</span>
                  </div>
                </div>

                <div class="col-md-3" @click="$router.push('/myexams')">
                  <div class="count-pink" style="background:pink;border-color:pink">
                    <h5> الامتحانات المحلولة</h5>
                    <i class="fas fa-tasks"></i>
                    <span>{{stats.numberOfSolutionsOnExams}}</span>
                  </div>
                </div>

                <div class="col-md-3" @click="$router.push('/myquestions')">
                  <div class="count-lightBlue" style="background:#6c5ce7;border-color:#6c5ce7">
                    <h5>عدد الأسئلة</h5>
                    <i class="fas fa-question"></i>

                    <span>{{stats.numberOfQuestions}}</span>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="count-reports">
                    <h5>عدد التقيمات</h5>
                    <i class="fas fa-star"></i>
                    <span>{{stats.numberOfFeedback}}</span>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="count-students">
                    <h5>عدد التعليقات</h5>
                    <i class="far fa-comment"></i>
                    <span>{{stats.numberOfComments}}</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-teachers">
                    <h5>عدد الكورسات</h5>
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>{{stats.numberOfCourses}}</span>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="count-admins">
                    <h5>عدد المحاضرات</h5>
                    <i class="fas fa-book-reader"></i>
                    <span>{{stats.numberOfLectures}}</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-reports" style="background-color:#40407a">
                    <h5>عدد المنشورات</h5>
                    <i class="fas fa-blog"></i>
                    <span>{{stats.numberOfPosts}}</span>
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
// import Loading from "../components/Loading";
export default {
  // name: "Statistics",
  middleware: 'auth-student',

  data() {
    return {
      stats: [],
    }
  },

  created() {
    this.$axios.get(`statistics/student`).then((res) => {
      console.log(res)
      this.stats = res.data
    })
  },
}
</script>

<style lang="scss">
.table-container {
  font-family: 'CustomFontBold';
  .table-body {
    border: 1px solid #eee;
  }
  .label-search {
    font-family: 'CustomFontMEdium';
    color: #fff;
    padding-top: 17px;
    padding-right: 12px;
  }
  .table-head {
    background: #0689c5;
  }
  font-family: 'CustomFontBold';
  background: #f9f9f9;
  padding: 18px 0;
  .search-15-users {
    width: 100%;
    text-align: left;
    padding-left: 14px;
    input {
      border: 0;
      /* border-radius: 7px; */
      padding: 5px 16px;
      margin-top: 12px;
      border-radius: 4px;
      &::placeholder {
        font-family: 'CustomFontLight';
      }
    }
    h5 {
      font-family: 'CustomFontBold';
      padding-top: 17px;
      font-size: 22px;
    }
  }
}

.con-expand-users {
  width: 100% !important;
}
.dashboard {
  font-family: 'CustomFontBold';
  margin: 45px 0;
  .col-md-3 {
    margin: 10px 0;
    &:hover {
      cursor: pointer;
      i {
        transform: scale(1.2);
      }
    }
  }
  .stats {
    padding: 25px;
    text-align: right;
    i {
      font-size: 62px;
      color: rgba(36, 36, 36, 0.41961);
      transition: all 0.3s linear;
    }
    span {
      display: inline-block;
      font-size: 43px;
      position: absolute;
      bottom: 35px;
      left: 40px;
      color: rgba(36, 36, 36, 0.41961);
    }
    h5 {
      margin-bottom: 30px;
      color: #f5f5f5;
      border-radius: 5px;
      font-size: 21px;
    }
    .count-admins {
      background: #dc3545;
      padding: 23px;
      border: 1px solid #dc3545;
      border-radius: 4px;
    }
    .count-lightBlue {
      padding: 23px;
      border: 1px solid #6c5ce7;
      border-radius: 4px;
      background: #6c5ce7;
      border-color: #6c5ce7;
    }
    .count-pink {
      background: pink;
      padding: 23px;
      border: 1px solid pink;
      border-radius: 4px;
    }
    .count-reports {
      background-color: #ffc107;
      padding: 23px;
      border: 1px solid #ffc107;
      border-radius: 4px;
    }
    .count-students {
      background-color: #17a2b8;
      padding: 23px;
      border: 1px solid #17a2b8;
      border-radius: 4px;
    }
    .count-teachers {
      background-color: #28a745;
      padding: 23px;
      border: 1px solid 28a745;
      border-radius: 4px;
    }
  }

  .vs-con-table {
    table {
      direction: ltr !important;
      width: 100%;
    }
  }
}
</style>
