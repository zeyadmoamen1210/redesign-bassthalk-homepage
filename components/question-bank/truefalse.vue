<template>
  <div class="check-box-ques" style="float: left; width: 50%;">
    <h6>{{ question.head }}</h6>
    <selectedImg :imgUrl="'https://i.ibb.co/9HSf4R0/logo.png'"></selectedImg>

    <div
      style="
        margin-bottom: 20px;
        margin-top: 20px;
        overflow: hidden;
        display: inline-block;
        width: 100%;
      "
    >
      <div style="overflow: hidden; display: block; float: left; width: 50%;">
        <input
          value="false"
          v-model="truefalseform"
          type="radio"
          name="check-ques-1"
          class="absthalk-radio"
          id=""
        />
        <span>خطأ</span>
      </div>

      <div style="overflow: hidden; display: block; float: left; width: 50%;">
        <input
          value="true"
          v-model="truefalseform"
          type="radio"
          name="check-ques-1"
          class="absthalk-radio"
          id=""
        />
        <span>صح</span>
      </div>
    </div>
  </div>
</template>

<script>
import selectedImg from '../selectedImg'
export default {
  props: ['question'],
  components: {
    selectedImg,
  },
  data() {
    return {
      truefalseform: '',
    }
  },
  watch: {
    truefalseform() {
      console.log(this.truefalseform)
      this.$emit('trueFalse', this.truefalseform)
    },
  },
}
</script>

<style lang="scss" scoped>
.check-box-ques {
  span {
    display: block;
    width: 34px;
    float: right;
    font-size: 18px;
    font-family: 'CustomFontMedium';
    padding-top: 3px;
    margin: 0 6px;
  }
  > img {
    width: 100%;
    height: 207px;
    margin-bottom: 34px;
    box-shadow: 0px 1px 10px -1px #ddd;
    border-radius: 17px;
  }
  h6 {
    margin-bottom: 15px;
    color: 20px;
    margin-top: 22px;
    color: #898989;
  }
  .ques-answer-btns {
    button {
      padding: 14px;
      width: 100%;
      text-align: center;
      background: #fff;
      border: 0;
      box-shadow: 0px 0px 10px 1px #ddd;
      border-radius: 10px;
      font-family: 'CustomFontRegular';
      font-weight: bold;
      color: #333;
      font-size: 16px;
    }
  }
  .file-choose {
    position: relative;
    width: 100%;
    height: 200px;
    margin-top: 13px;
    input[type='file'] {
      position: absolute;
      width: 100%;
      /* visibility: hidden; */
      opacity: 0;
      height: 100%;
      cursor: pointer;
      margin-top: 10px;
    }
    span {
      border: 1px dashed #444444;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      background: #fff;
      z-index: -1;
      margin: 10px 0;
      height: 100%;
      text-align: center;
      cursor: pointer;
      border-radius: 15px;
      line-height: 186px;
      color: #444444;
    }
  }
}

.absthalk-radio {
  -webkit-appearance: none;
  width: 10px;
  display: block;
  height: 10px;
  /* background: #DDD; */
  padding: 15px 15px;
  border: 2px dotted #e3e3e3;
  outline: 0;
  position: relative;
  border-radius: 8px;
  float: right;
  &:checked {
    border: 2px dotted #058ac6;
    &::after {
      background-image: url('../../assets/imgs/check.png');
      position: absolute;
      content: '';
      width: 65%;
      height: 60%;
      top: 4px;
      left: 6px;
      background-size: cover;
    }
  }

  .title {
    overflow: hidden;
    margin-bottom: 5px;
    .sub-name {
      h4 {
        display: block;
        font-size: 34px;
        margin-right: 12px;
        font-family: 'CustomFontMedium';
        margin-bottom: 0;
        width: 87%;
        float: left;
        color: #058ac6;
      }
      img {
        display: block;
        width: 31px;
        float: left;
      }
    }
    .sub-name,
    .exam-level {
      display: block;
      width: 50%;
      float: left;
      padding-top: 13px;
    }
    .exam-level {
      text-align: left;
      padding: 20px 0;
      img {
        display: inline-block;
        width: 40px;
        margin-left: 17px;
        margin-top: -21px;
      }
      h6 {
        display: inline-block;
      }
    }
  }

  .general-exam-head {
    overflow: hidden;
    > div {
      float: left;
      &:first-of-type {
        width: 10%;
      }
      &:last-of-type {
        width: 90%;
        padding: 6px 1px;
        margin: 0;
        box-shadow: none;
        h4 {
          margin-left: 10px;
        }
        img {
          display: block;
          width: 27px;
          float: right;
          margin-left: 11px;
        }
      }
    }
    .unit {
      padding: 0;
    }
  }

  .general-exam-content {
    .exam-cont-item {
      overflow: hidden;
      > div {
        float: right;

        &:first-of-type {
          width: 9%;

          h6 {
            color: #ddd;
            background-color: #058ac6;
            padding: 15px;
            text-align: center;
            border-radius: 0 6px 6px 0;
          }
        }
        &:last-of-type {
          width: 91%;

          h6 {
            color: #058ac6;
            background-color: #f2f2f2;
            padding: 15px;
            margin: 0;
            border-radius: 6px 0 0 6px;
          }
        }
      }
    }
    .check-box-ques {
      span {
        display: block;
        width: 34px;
        float: right;
        font-size: 18px;
        font-family: 'CustomFontMedium';
        padding-top: 3px;
        margin: 0 6px;
      }
      > img {
        width: 100%;
        height: 207px;
        margin-bottom: 34px;
        box-shadow: 0px 1px 10px -1px #ddd;
        border-radius: 17px;
      }
      h6 {
        margin-bottom: 15px;
        color: 20px;
        margin-top: 22px;
        color: #898989;
      }
      .ques-answer-btns {
        button {
          padding: 14px;
          width: 100%;
          text-align: center;
          background: #fff;
          border: 0;
          box-shadow: 0px 0px 10px 1px #ddd;
          border-radius: 10px;
          font-family: 'CustomFontRegular';
          font-weight: bold;
          color: #333;
          font-size: 16px;
        }
      }
      .file-choose {
        position: relative;
        width: 100%;
        height: 200px;
        margin-top: 13px;
        input[type='file'] {
          position: absolute;
          width: 100%;
          /* visibility: hidden; */
          opacity: 0;
          height: 100%;
          cursor: pointer;
          margin-top: 10px;
        }
        span {
          border: 1px dashed #444444;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          background: #fff;
          z-index: -1;
          margin: 10px 0;
          height: 100%;
          text-align: center;
          cursor: pointer;
          border-radius: 15px;
          line-height: 186px;
          color: #444444;
        }
      }
    }
  }
}
</style>
