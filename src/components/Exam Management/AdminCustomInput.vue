<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>
    <input v-bind="$attrs" :readonly="readonly" :value="modelValue" @input="updateValue" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'AdminCustomInput',
  props: {
    label:{
      type: String,
    },
    modelValue: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: () => false
    }
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
.form-group{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  label {
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    color: #000;
  }

  input {
    border: 1.8px solid #00A9DC;
    box-sizing: border-box; 
    outline: none;
    font-size: 1.03rem;
    width: 100%;
    padding: 1rem 1.2rem;

    &::placeholder {
      color: #002C51;
      font-style: italic;
      font-size: 0.9rem;
    }
  }
}
</style>