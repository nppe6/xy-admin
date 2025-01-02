<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ApiEnum } from '@/enum/apiEnum'

const content = defineModel('editContent', { type: String })
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = ref('default')

// 内容 HTML
const valueHtml = ref(content.value)

const toolbarConfig = {}
const editorConfig = {
  MENU_CONF: {
    uploadImage: {
      server: ApiEnum.UPLOAD_IMAGE_URL,
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor: any) => {
  content.value = valueHtml.value // 记录 editor 实例，重要！
}
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange" />
  </div>
</template>
