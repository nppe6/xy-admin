<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

interface IProps {
  height?: string
  placeholder?: string
}

const content = defineModel({ type: String })

const props = withDefaults(defineProps<IProps>(), {
  height: '620px',
  placeholder: '',
})

nextTick(() => {
  const toastValue = new ToastEditor('#editor', `${content.value}`, `${props.height}`)
  toastValue.editor.on('change', (type: string) => {
    const value = type == 'markdown' ? toastValue.editor.getMarkdown() : toastValue.editor.getHTML()
    content.value = value
  })
})
</script>

<template>
  <div id="editor"></div>
</template>

<style scoped lang="scss">
#editor {
  @apply bg-white;
}
</style>
