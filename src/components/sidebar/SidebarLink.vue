<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    isNested: {
      type: Boolean, 
      default: () => false
    }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    const nested = ref(['nest1, nest2'])
    return { isActive, collapsed, nested }
  }
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" v-if="isNested === false" />
    <i class="iconNested" :class="[icon]" v-else />
    
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

span{
  font-size: 0.9rem;
  white-space: nowrap;
  font-weight: 500;
}
.link {
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: black;
  text-decoration: none;
}

/* .link:hover {
  background-color: var(--sidebar-item-hover);
  color: white;
} */

.link.active {
  color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  color: #00A9DC;
  margin-right: 5px;
}
.link .iconNested {
  flex-shrink: 0;
  width: 25px;
  color: #818181;

  margin-right: 5px;
}
.link .nest1 {
  color: #00A9DC !important;
}
.link .nest2 {
  color: #818181 !important;
}

</style>