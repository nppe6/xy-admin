import { uploadImage } from '@/apis/upload'

export default class {
  public editor: toastui.Editor
  public isFullscreen: boolean = false

  constructor(
    el: string,
    initialValue: string,
    public height: string,
  ) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height: height,
      initialEditType: 'markdown',
      initialValue: initialValue,
      previewStyle: 'vertical',
      toolbarItems: this.toolbar(),
    })
    this.ImageHook()
  }

  //工具条
  toolbar() {
    return [
      ['heading', 'bold', 'italic'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          name: 'fullscreen',
          tooltip: 'fullscreen',
        },
      ],
    ]
  }

  //全屏设置
  private fullscreen() {
    const button = document.createElement('button')
    button.className = 'toastui-editor-toolbar-icons last'
    button.style.backgroundImage = 'none'
    button.style.margin = '0'
    button.innerHTML = `<span>全屏</span>`

    button.addEventListener('click', () => {
      this.toggleFullScreen()
    })

    document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key == 'Escape' && this.isFullscreen) {
        this.toggleFullScreen()
      }
    })
    return button
  }

  // 全屏的切换事件的函数
  private toggleFullScreen() {
    let ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
    ui.classList.toggle('fullScreen')
    this.editor.focus()
    this.isFullscreen = !this.isFullscreen

    if (this.isFullscreen === false) {
      this.editor.setHeight(this.height)
    } else {
      this.editor.setHeight('100vh')
    }
  }

  // 将图片进行转换操作
  private ImageHook() {
    this.editor.removeHook('addImageBlobHook') // 钩子函数
    this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
      const formData = new FormData()
      //添加post数据
      formData.append('file', blob, blob.name)
      //上传图片
      const response = await uploadImage(formData)
      //更改编辑器内容
      callback(response.data.url, blob.name)
    })
  }
}
