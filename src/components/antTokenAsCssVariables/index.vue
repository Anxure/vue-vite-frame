<script lang="ts" setup>
  import { theme } from 'ant-design-vue';
  import { watchEffect } from 'vue';

  const { useToken } = theme;
  const { token } = useToken();

  const id = 'AntTokenAsCssVariables';

  function getCssVariableValue(value: any) {
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'number') {
      return `${value}px`;
    } else {
      return value;
    }
  }

  function setCssVariables(variables: Record<string, any>): void {
    let styleTag = document.head.querySelector(`#${id}`) as HTMLStyleElement;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = id;
      document.head.appendChild(styleTag);
    }

    const cssVars = Object.entries(variables)
      .map(([key, value]) => `--ant-${key}: ${getCssVariableValue(value)};`)
      .join('');

    styleTag.innerHTML = `:root { ${cssVars} }`;
  }

  watchEffect(() => setCssVariables(token.value));
</script>

<template>
  <div
    :id="id"
    class="hidden"
  />
</template>
