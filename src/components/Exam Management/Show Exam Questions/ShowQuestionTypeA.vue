<template>
  <div class="question__cont">
    <div class="sl">
      {{questionNo}}.
    </div>
    <div class="question">
      <p>
        {{examQuestion.question}}
      </p>
      {{JSON.stringify({selectedOption})}}
      <div class="options">
        <CustomRadioButton 
          v-for="option in examQuestion.options" 
          :key="option" 
          :option="option"
          :name="questionNo"
          v-model="selectedOption" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import CustomRadioButton from "../../ui/CustomRadioButton.vue"
import { watchEffect } from '@vue/runtime-core';
export default {
    name: "ShowQuestionTypeA",
    props: {
      examQuestion: {
        type: Object
      }
    },
    setup(props) {
      const selectedOption = ref('')
      const questionNo = computed(() => {
        return props.examQuestion.questionNo
      })
      watchEffect(() => {
        console.log('selected', selectedOption.value)
      })
      return {
        selectedOption,
        questionNo
      };
    },
    components: { CustomRadioButton }
}
</script>

<style scoped lang="scss">
@import '@/styles/config.scss';

.pDefault {
  font-size: 1rem;
  color: rgb(0 0 0 / 70%);
  line-height: 1.25rem;
  font-weight: 500;
}
.question__cont {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.3rem;
  p{
    @extend .pDefault;
  }
  .question {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .options{
      list-style-type: none;
      @include flexVertical;
      gap: 0.4rem;
      justify-content: center;
    }
  }

}
</style>