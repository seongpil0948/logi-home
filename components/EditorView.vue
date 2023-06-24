<script setup lang="ts">
import type { CustomHTMLRenderer, EditorOptions } from '@toast-ui/editor'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const props = defineProps<{
  content: string // Initial value. Set Markdown string
}>()
// eslint-disable-next-line vue/no-dupe-keys
const { content } = toRefs(props)
const viewer = shallowRef<Viewer | undefined>()

watch(() => content.value, (c) => {
  console.log('mark down: ', c)
  console.log('viewer: ', viewer.value)
  if (!viewer.value)
    return

  viewer.value.setMarkdown(c)
})

onMounted(() => {
  const el = document.querySelector('#viewer')
  if (!el)
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
        { type: 'closeTag', tagName: 'iframe', outerNewLine: false }
      ]
    }
  }
  viewer.value = new Viewer({
    el,
    initialValue: props.content,
    viewer: true,
    customHTMLRenderer,

  } as EditorOptions)
})
</script>

<template>
  <div id="viewer" />
</template>
