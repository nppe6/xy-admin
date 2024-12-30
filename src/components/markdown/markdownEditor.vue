<script setup lang="ts">
import { onMounted } from 'vue'
import ToastEditor from './toastEditor'

interface IProps {
  height?: string
  placeholder?: string
}

const content = defineModel({ type: String, default: '' })

const props = withDefaults(defineProps<IProps>(), {
  height: '420px',
  placeholder: '',
})

onMounted(() => {
  const toastValue = new ToastEditor('#markdownEditor', `${content.value}`, `${props.height}`)
  toastValue.editor.on('change', (type: string) => {
    const value = type == 'markdown' ? toastValue.editor.getMarkdown() : toastValue.editor.getHTML()
    content.value = value
  })
})
</script>

<template>
  <div>
    <div id="markdownEditor"></div>
  </div>
</template>

<style scoped lang="scss">
#markdownEditor {
  @apply bg-white;

  //全屏控制
  :deep(.fullScreen) {
    position: fixed !important;
    z-index: 60;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
  }

  //隐藏底部编辑器模式切换
  :deep(.toastui-editor-mode-switch) {
    display: none !important;
  }
}
</style>
