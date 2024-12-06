<script setup lang="ts">
  import TextController from './Toolbar/TextController.vue';
  import LineController from './Toolbar/LineController.vue';
  import EtcController from './Toolbar/EtcController.vue';
</script>

<template>
  <div class="container">
    <h1>Editor</h1>
    <TextController/>
    <LineController/>
    <EtcController/>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
  }
  .toolbar {
    display: flex;
    padding: 0 10px;
    border-left: 1px solid #e8e8e8;
  }
</style>
