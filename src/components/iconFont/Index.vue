<template>
  <span class="icon-font" :style="computedStyle" v-bind="$attrs">
    <svg aria-hidden="true" width="1em" height="1em" focusable="false" fill="currentColor">
      <use :xlink:href="'#' + type"></use>
    </svg>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
defineOptions({
  name: 'IconFont'
});
interface IProps {
  type: string;
  // type: Iconfont; // 如果不使用iconify，可以设置成此项，可以自动补全
  fontSize?: string;
  size?: string;
  color?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  fontSize: '',
  size: '',
  color: ''
});
console.log(props)
const computedStyle = computed(() => {
  return {
    color: props.color,
    fontSize: props.fontSize || props.size
  };
});
</script>

<style scoped>
.icon-font {
  width: 1em;
  height: 1em;
  line-height: 1 !important;
  display: inline-block;
  color: inherit;
  vertical-align: -0.125em;
}
</style>
