<script setup lang="ts">
  import { AntDesignOutlined } from '@ant-design/icons-vue';
  import { Input as AInput, message, theme } from 'ant-design-vue';
  import { computed, ref } from 'vue';
  import Highlighter from 'vue-highlight-words';

  import { asyncCopy } from '@/utils/asyncCopy';

  const { useToken } = theme;
  const { token } = useToken();

  const isOpen = ref(false);
  const keywords = ref('color');

  const tokenOptions = computed(() =>
    Object.entries(token.value).map(([key, value]) => ({ key, value })).filter(({ key }) => key.toLowerCase().includes(keywords.value.toLowerCase().trim()))
  );

  /** 判断一个值是否为合法的 css 颜色值 */
  function isCssColorValue(value: any): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    const div = document.createElement('div');
    div.style.color = value;

    return div.style.color !== '';
  }

  /** 点击 token 项 */
  async function handleClickToken(key: string) {
    const cssVariableKey = `var(--ant-${key})`;

    await asyncCopy(cssVariableKey);
    isOpen.value = false;
    message.success(`已复制 ${cssVariableKey}`);
  }
</script>

<template>
  <ADropdown
    v-model:open="isOpen"
    trigger="click"
    placement="bottomRight"
  >
    <ATooltip title="Ant Design Token 快速查询工具">
      <AButton type="text">
        <template #icon><AntDesignOutlined /></template>
      </AButton>
    </ATooltip>
    <template #overlay>
      <ACard
        title="Ant Design Token 快速查询"
        size="small"
        class="w-2xl"
      >
        <div class="space-y-2">
          <div>
            <AInput
              v-model:value.trim="keywords"
              allow-clear
              placeholder="按 token 名进行查询"
            />
          </div>
          <div
            class="h-[295px] overflow-auto border-1 border-[var(--ant-colorBorder)] rounded-[var(--ant-borderRadius)] border-solid"
          >
            <template v-if="tokenOptions.length > 0">
              <div
                v-for="item in tokenOptions"
                :key="item.key"
                class="group flex cursor-pointer border-b-1 border-b-[var(--ant-colorBorder)] border-b-dashed px-4 py-1 last:border-b-0 hover:bg-[var(--ant-controlItemBgHover)]"
                @click="handleClickToken(item.key)"
              >
                <div class="text-md mr-12 flex items-center space-x-2">
                  <div>
                    <Highlighter
                      highlight-class-name="highlight"
                      :search-words="[keywords]"
                      :auto-escape="true"
                      :text-to-highlight="item.key"
                    />
                  </div>
                  <div
                    v-if="isCssColorValue(item.value)"
                    class="h-4 w-4 border-1 border-[var(--ant-colorBorder)] rounded-full border-solid"
                    :style="{ backgroundColor: String(item.value) }"
                  ></div>
                  <span class="hidden text-xs opacity-40 group-hover:inline">
                    点击复制 css 变量名
                  </span>
                </div>
                <pre class="mb-0 flex-1 pt-1.5 text-right text-xs opacity-70">{{ item.value }}</pre>
              </div>
            </template>
            <div
              v-else
              class="h-full flex items-center justify-center"
            >
              <AEmpty>
                <template #description>
                  未查询到与
                  <span class="font-bold">{{ keywords.trim() }}</span>
                  相关的 token 变量
                </template>
              </AEmpty>
            </div>
          </div>
        </div>
      </ACard>
    </template>
  </ADropdown>
</template>

<style lang="less" scoped>
  :deep(.highlight) {
    padding: 0;
    color: var(--ant-colorPrimary);
    font-weight: bold;
    background: none;
  }
</style>
