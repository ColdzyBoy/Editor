<template>
  <div class="image-editor">
    <!-- <canvas></canvas> -->
    <button class="exit-button" type="button" @click="editorOpenHandler(false)">화면 끄기</button>
  </div>
</template>

<script setup lang="ts">
  const { editorOpenHandler } = defineProps(['editorOpenHandler']);
</script>

<style scoped>
  .image-editor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 10;
  }

  .exit-button {
    cursor: pointer;
    border: 0;
    outline: none;
    color: white;
  }
</style>
