<template>
  <div v-if="imgUrl">
    <div class="upload-img" @click="imgShow = !imgShow">
      <img :src="imgUrl" alt />
    </div>

    <transition
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <div class="img-preview" v-if="imgShow">
        <!-- <a target="_blank" :href="imgUrl">
          <i style="font-size:25px" class="fas fa-expand-arrows-alt"></i>
        </a> -->
        <a style="cursor:pointer" @click="imgShow = false">
            <span @click="imgShow = false"><i style="font-size:20px;" class="fas fa-times"></i></span>
        </a>

      <a :href="imgUrl" target="_blank">
            <img  :src="imgUrl" alt />
      </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["imgUrl"],
  data() {
    return {
      imgShow: false,
    };
  },
};
</script>

<style lang="scss">
.img-preview {
  position: fixed;
  top: 100px;
  right: 0;
  width: 400px;
  height: 400px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
    z-index: 9999999;

  img {
    width: 100%;
    height: 100%;
  }
}
.fa-times{
  transition: all .5s ease;
  &:hover{
    color:red;
  }
}
.upload-img {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 10px 0;
  cursor: pointer;
  padding: 7px;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
