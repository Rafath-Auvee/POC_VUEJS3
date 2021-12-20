<template>
  <button :disabled="disabled" :class="[type, rounded && 'round']" @click="$emit('onClick')">
    <i v-if="icon" class="icon" :class="icon" />
    <span class="text">
      <slot />
    </span>
  </button>

</template>

<script>
export default {
  name: 'CustomAdminBtn',
  emits: ['onClick'],
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      default: () => 'primary'
    },
    disabled: {
      type: Boolean, 
      default: () => false
    },
    rounded: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
button {
  background: #06A964;
  font-size: 1.05rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  color: #FFFFFF;
  padding: 1rem;
  outline: none;
  border: none;
  width: 100%;
  @include maxMedia(500px) {
    font-size: 0.85rem;
    padding: 0.65rem;
  }
  
  &:active {
    transform: scale(0.99);
  }
  .icon {
    // color: #fff;
    color: inherit;
    width: 22px;
  }
  &[disabled]{
    cursor: not-allowed;
  }
  &.primary {
     background: #06A964;
     color: #fff;
  }
  &.danger {
    background-color: #FF4D4D;
    color: #fff;
  }
  &.info {
    background-color: #00A9DC;
    color: #fff;
  }
  &.round {
    border-radius: 5px;
  }

}
</style>