<template>
  <input v-bind="$attrs" :value="modelValue" @input="updateValue" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
    placeholder: String,
  },
  setup(props, context) {
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value)
    }

    return {
      updateValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
input{
  outline: none;
  border-radius: 20px;
  border: 1.5px solid #146AB4;
  padding:1.2rem;
  // line-height: 50px;
  font-size: 1.1rem;
  @include maxMedia(500px) {
    font-size: 1rem;
    padding: 1.2rem 1rem;
  }

  &::placeholder {
    color: #002C51;
    font-style: italic;
    font-size: 0.9rem;
  }
}
</style>