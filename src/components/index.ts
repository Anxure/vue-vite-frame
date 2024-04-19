import type { Component, App } from 'vue';
import IconFont from './iconFont/Index.vue';
const components: Component[] = [IconFont];

const install = (app: App) => {
  components.forEach((component) => {
    console.log(component)
    app.component(component.name as string, component);
  });
};

export default {
  install
};
