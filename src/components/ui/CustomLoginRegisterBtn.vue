<template>
  <button v-bind="$attrs" :class="[outline ? 'outline' : '', 'base']">
    {{buttonText}}
  </button>
</template>

<script>
export default {
  name: 'CustomLoginRegisterBtn.vue',
  inheritAttrs: false,
  props: {
    buttonText: {
      type: String,
      default: () => 'label'
    },
    outline: {
      type: String,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.base {
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 56px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  padding: 0.38rem 0;
  outline: none;
  // border: 1.5px solid #146AB4;
  border: none;
  width: 100%;
  @include maxMedia(500px) {
    font-size: 1.2rem;
    padding: 0.3rem 0;
  }
  
  &:active {
    transform: scale(0.99);
  }
}
.outline {
  border: 1.5px solid #146AB4;
  // background: #fff;
  
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}
</style>