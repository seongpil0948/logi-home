<script setup lang="ts">
import type { CustomHTMLRenderer, EditorOptions } from '@toast-ui/editor'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import { StorageReference } from 'firebase/storage';

const props = defineProps<{
  parentPath: string
  initialValue?: string // Initial value. Set Markdown string
}>()

const editor = shallowRef<Editor | undefined>()
const allRefs = ref<StorageReference[]>([])


// >>> 유튜브 삽입을 위한 커스텀 툴바 아이템 생성 >>>
// https://velog.io/@sua_ahn/React-Toast-UI-Editor-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%82%BD%EC%9E%85-%ED%88%B4%EB%B0%94-%EB%B2%84%ED%8A%BC-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0
const myCustomEl = document.createElement('span');
myCustomEl.style.cursor = 'pointer'

const icon = document.createElement('img');
icon.setAttribute('src', 'https://www.youtube.com/favicon.ico');
icon.setAttribute('width', '24');
myCustomEl.appendChild(icon);

// 팝업 바디 생성
const container = document.createElement('div');
const description = document.createElement('p');
description.textContent = "Youtube 주소를 입력하고 Enter를 누르세요!";

const urlInput = document.createElement('input');
urlInput.style.width = '100%';

// 팝업 input 창에 내용 입력 시 호출됨
urlInput.addEventListener('keyup', (e) => {
  // console.log(editor.value, (e.target as any).value, e.target, e.key)
  // 엔터를 누르면, 입력값이 Youtube 주소인지 정규식으로 검사
  if (editor.value && e.target && e.key === 'Enter') {
    const url = (e.target as any).value
    if ((/https:\/\/youtu.be\/.{11,}/).test(url)
      || (/https:\/\/www.youtube.com\/watch\?v=.{11,}/).test(url)) {

      let str = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${url.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

      editor.value.changeMode('markdown');
      editor.value.insertText(str);
      editor.value.eventEmitter.emit('closePopup');
    } else {
      ElMessage.error(`올바르지 못한 URL:  ${url}`)
    }
  }
});

container.appendChild(description);
container.appendChild(urlInput);
// <<< 유튜브 삽입을 위한 커스텀 툴바 아이템 생성 <<<
onBeforeUnmount(clear)

onMounted(() => {
  const editorElement = document.querySelector('#editor')
  if (!editorElement)
    return
  const customHTMLRenderer: CustomHTMLRenderer = {
    htmlBlock: {
      iframe: (node) => [
        {
          type: 'openTag',
          tagName: 'iframe',
          outerNewLine: true,
          attributes: node.attrs
        },
        { type: 'html', content: node.childrenHTML ?? "" },
        { type: 'closeTag', tagName: 'iframe', outerNewLine: true }
      ]
    }
  }
  editor.value = new Editor({
    el: editorElement,
    minHeight: '500px',
    initialEditType: 'markdown',
    initialValue: props.initialValue ?? '내용을 작성 해주세요.',
    previewStyle: 'vertical',
    language: "ko",
    hooks: {
      addImageBlobHook(blob, callback) {
        uploadFile(blob, `${props.parentPath}`).then(({ downloadURL, refer }) => {
          allRefs.value.push(refer);
          callback(downloadURL, "파일 로드중");
        });
        if (!(blob instanceof File)) {
          return console.error("blob not file, type in addImageBlobHook: ", blob instanceof File, blob instanceof Blob, blob);
        }
      },
    },
    toolbarItems: [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      // 유튜브 삽입을 위해 툴바 버튼 커스터마이징
      [{
        name: 'Youtube',
        tooltip: 'Youtube',
        el: myCustomEl,
        popup: {
          body: container,
          style: { width: 'auto' },
        }
      }]
    ],
    customHTMLRenderer
  } as EditorOptions)
})
function getMarkdown() {
  return editor.value?.getMarkdown()
}
function focus() {
  return editor.value?.focus()
}
function clear() {
  return editor.value?.setMarkdown('')
}


defineExpose({
  getMarkdown, focus, clear, getStorageRefs: () => [...allRefs.value], clearStorageRefs: () => {
    allRefs.value = []
  }
})
</script>

<template>
  <link rel="stylesheet" href="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css" />
  <div id="editor" />
</template>

