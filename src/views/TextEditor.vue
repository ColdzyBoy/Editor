<script setup lang="ts">
  import EditorToolbar from '../components/EditorToolbar.vue'
  import EditorTitle from '../components/EditorTitle.vue'
</script>

<template>
  <div id="editor-container">
    <EditorToolbar/>
    <div class="main-editor-container">
    <EditorTitle/>
      <div
        id="editor-main"
        contenteditable="true"
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
