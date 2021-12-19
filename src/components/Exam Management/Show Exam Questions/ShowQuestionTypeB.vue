<template>
  <div class="question__cont">
    <div class="paragraph" v-if="examQuestion?.paragraph">
      {{examQuestion.paragraph}}
    </div>
    <div class="hints">
      <p class="hints__header">
        <span>{{examQuestion.questionNo}}.</span>
        <span>
          {{examQuestion.hintsHeader}}
        </span>
      </p>
      <div class="hints__option">
        <p v-for="key in Object.keys(examQuestion.hintsOption)" :key="key">
          <span>
            {{key}}.
          </span>
          <span>
            {{examQuestion.hintsOption[key]}}
          </span>
        </p>
      </div>
    </div>

    <div class="options">
      <p class="options__header">
        {{examQuestion.optionsHeader}}
      </p>

      <div class="item__cont">
        <CustomRadioButton
          v-for="option in examQuestion.options"
          :key="option"
          :option="option"
          :name='questionNo'
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
  name: "ShowQuestionTypeB",
  components: { CustomRadioButton },
  props: {
    examQuestion: {
        type: Object
    }
  },
  setup(props) {
    const questionNo = computed(() => {
        return props.examQuestion.questionNo
    })
    const selectedOption = ref('')
    watchEffect(() => {
      console.log('selected', selectedOption.value)
    })
    return {
      selectedOption,
      questionNo
    };
  },
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  
  .paragraph{
    @extend .pDefault;
  }

  .hints{
    @include flexVertical;
    justify-content: center;
    gap: 0.8rem;

    .hints__header{
      @extend .pDefault;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.3rem;
    }

    .hints__option{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.45rem;
      p{
        @extend .pDefault;
      }
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    p{
      @extend .pDefault;
      color: #000;
    }
    .item__cont{
      list-style-type: none;
      @include flexVertical;
      gap: 0.4rem;
      justify-content: center;
    }
  }

}
</style>