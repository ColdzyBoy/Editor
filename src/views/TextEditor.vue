<script setup lang="ts">
  import EditorToolbar from '../components/EditorToolbar.vue'
  import EditorTitle from '../components/EditorTitle.vue'
  import ImageElement from '@/components/ImageElement.vue';

  import { useImageState } from '@/function/imageData';
  import { ref, createApp, watch, h } from 'vue';

  const imageState = useImageState();
  
  const editorElement = ref<HTMLDivElement | null>(null);

  watch(() => imageState.image,
    (newImage) => {
      if (newImage && editorElement.value) {
        const container = document.createElement('div');
        editorElement.value.appendChild(container);
        createApp({
          render: () => h(ImageElement, { image: newImage }),
        }).mount(container);
      }
    }
  )
</script>

<template>
  <div id="editor-container">
    <EditorToolbar/>
    <div class="main-editor-container">
      <EditorTitle/>
      <div
        id="editor-main"
        contenteditable="true"
        ref="editorElement"
      >
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-editor-container {
    width: 860px;
    margin: 0 auto;
  }
  #editor-main {
    min-height: 560px;
    padding: 0 30px;
    outline: none;
  }
</style>
