export default class {
  editor: toastui.Editor
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
    })
  }
}
