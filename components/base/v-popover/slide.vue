<template>
  <div class="v-popover v-popover--slide" :style="baseStyle">
    <div class="v-popover__trigger" :style="triggerStyle">
      <img :src="triggerImage" :style="imageStyle" />
    </div>
    <transition name="slide" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
      <div class="v-popover__content" v-show="visible">
        <img :src="contentImage" :style="contentImageStyle" />
      </div>
    </transition>
  </div>
</template>

<script>
import popoverMixin from '@/mixins/base/popover'
export default {
  name: 'v-popover-slide',

  mixins: [popoverMixin],

  beforeCreate() {
    this.defaultTriggerImage = 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/23612285.jpg'
    this.defaultContentImage = 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/23612286.jpg'
  },

  computed: {
    enterActiveClass() {
      let className = ''

      switch (this.direction) {
        case 'top':
          className = 'slideInDown';
          break;
        case 'right':
          className = 'slideInRight';
          break;
        case 'bottom':
          className = 'slideInUp';
          break;
        case 'left':
          className = 'slideInLeft';
          break;
      }

      return 'animated faster ' + className
    },

    leaveActiveClass() {
      let className = ''

      switch (this.direction) {
        case 'top':
          className = 'slideOutUp';
          break;
        case 'right':
          className = 'slideOutRight';
          break;
        case 'bottom':
          className = 'slideOutDown';
          break;
        case 'left':
          className = 'slideOutLeft';
          break;
      }

      return 'animated faster ' + className
    }
  },
}
</script>

<style>
.v-popover--slide {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.v-popover--slide .v-popover__content {
  position: absolute;
  top: 0;
}
</style>