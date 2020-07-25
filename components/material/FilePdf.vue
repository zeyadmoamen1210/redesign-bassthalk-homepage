<template>
  <div class="col-md-3">
    <div class="pdf-cart">
      <div class="overlay">
        <slot name="overlay-pdf-slot"> </slot>
      </div>
      <div class="pdf-bannar">
        <img src="../../assets/imgs/pdf.png" />
      </div>
      <div class="pdf-desc">
        <div class="owner-img">
          <img
            src="https://yt3.ggpht.com/a/AATXAJy8WFXtW5XWItgc96YY7uKiVXlG87gI-7Mamw=s100-c-k-c0xffffffff-no-rj-mo"
          />
        </div>
        <div class="desc-cont">
          <h5 class="mr-2 mt-2">{{ file.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["file"]
};
</script>

<style lang="scss">
$left: left;
$right: right;
$dir: rtl;

@if $dir == rtl {
  $left: right;
  $right: left;
} @else {
  $left: left;
  $right: right;
}
.pdf-cart {
  background: #f9f9f9;
  overflow: hidden;
  box-shadow: 0 3px 25px -7px rgba(204, 203, 203, 0.8);
  transition: all 0.3s ease;
  margin-bottom: 20px;
  position: relative;
  border-radius: 8px 8px 25px 25px;
  overflow: hidden;

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 0;
    background: linear-gradient(45deg, #0570a0, #a5a5a5a8);

    // background: linear-gradient(45deg, #058ac6, rgb(234, 111, 118));
    z-index: 9;
    transition: all 0.7s ease;

    .pdf-icon {
      text-align: center;
      position: relative;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      opacity: 0;
      transition: all 0.5s linear;

      i {
        color: #058ac6;
      }
      i.fa-leanpub {
        font-size: 15px;
        display: inline-block;
        margin-bottom: 0;
      }
      .fas.fa-chalkboard-teacher {
        display: block;
        text-align: center;
        color: #fff;
        font-size: 34px;
        margin-bottom: 20px;
      }

      button {
        text-align: center;
        margin: 4px;
        width: 50%;
        overflow: hidden;
        padding: 7px;
        border: 0;
        color: #058ac6;
        font-weight: bold;
        border-radius: 13px;
        background: #fff;
        font-family: "CustomFontRegular";
        font-size: 19px;
        outline: none;
      }
    }
  }

  &:hover {
    transform: translate(0, -10px);
    cursor: pointer;
    .overlay {
      height: 100%;
      .pdf-icon {
        opacity: 1;
      }
    }
  }
  .pdf-bannar {
    opacity: 0.4;
    height: 100px;
    width: 164px;
    margin: 15px auto;
    transition: all 0.5s linear;
    &:hover {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  .pdf-desc {
    padding: 20px 10px;
    overflow: hidden;
    position: relative;
    > div {
      float: $left;
    }
    div.owner-img {
      width: 30%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 62px;
        height: 51px;
        margin-top: 15px;
        margin: auto;
        text-align: center;
        display: inherit;
        border-radius: 50%;
        border: 1px dashed #ccc;
        padding: 3px;
      }
    }
    div.desc-cont {
      width: 70%;
      h5,
      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      h5 {
        font-size: 16px;
        color: #058ac6;
        padding-top: 7px;
      }
      p {
        color: #c1c1c1;
        font-size: 13px;
      }
    }
  }
  .pdf-date {
    clear: both;
    h6 {
      clear: both;
      font-weight: 400;
      position: relative;
      color: #058ac6;
      font-size: 13px;
      margin-top: 29px;
      &::after {
        position: absolute;
        top: 8px;
        right: -10px;
        height: 7px;
        width: 7px;
        background: #058ac6;
        content: "";
        border-radius: 50%;
      }
    }
  }
  .pdf-time {
    position: absolute;
    bottom: 23px;
    right: 15px;
    background: #058ac6;
    /* right: 0; */
    color: #fff;
    padding: 4px 6px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 6px;
    font-weight: bold;
  }
}
</style>
