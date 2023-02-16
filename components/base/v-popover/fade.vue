<template>
  <div class="v-popover v-popover--fade" :class="['is-' + direction]" :style="baseStyle">
    <div class="v-popover__trigger" :style="triggerStyle">
      <a><img :src="triggerImage" :style="imageStyle" /></a>
    </div>
    <transition name="fade" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div class="v-popover__content" :style="contentStyle" v-show="visible">
        <img :src="contentImage" />
      </div>
    </transition>
  </div>
</template>

<script>
import popoverMixin from '@/mixins/base/popover'
export default {
  name: 'v-popover-fade',

  mixins: [popoverMixin],
  
  beforeCreate() {
    this.defaultTriggerImage = 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16287194.png'
    this.defaultContentImage = 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16287222.png'
  },
}
</script>

<style>
.v-popover--fade {
  display: inline-block;
  position: relative;
}
.v-popover__trigger {
  display: inline-block;
  overflow: hidden;
}
.v-popover__trigger img,
.v-popover__content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.v-popover--fade .v-popover__content {
  position: absolute;
  /* padding: 10px; */
  background-color: #fff;
  /* border-radius: 4px; */
}
.v-popover--fade.is-top .v-popover__content {
  top: 0;
  transform: translate(0, -100%);
}
.v-popover--fade.is-right .v-popover__content {
  top: 50%;
  transform: translate(100%, -50%);
}
.v-popover--fade.is-left .v-popover__content {
  top: 50%;
  transform: translate(-100%, -50%);
}
</style>