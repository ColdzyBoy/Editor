<script setup lang="ts">
  import TextController from './Toolbar/TextController.vue';
  import LineController from './Toolbar/LineController.vue';
  import EtcController from './Toolbar/EtcController.vue';
  import FontController from './Toolbar/FontController.vue';
</script>

<template>
  <div class="toolbar-container">
    <h1>Editor</h1>
    <FontController/>
    <TextController/>
    <LineController/>
    <EtcController/>
  </div>
</template>

<style>
  .toolbar-container {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
  }
  .toolbar {
    display: flex;
    padding: 0 10px;
    border-left: 1px solid #e8e8e8;
  }
  .button-box {
    padding: 25px 0;
  }
  .click-box {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 27px;
    height: 29px;
    font-size: 16px;
    border-radius: 3px;
  }
  .click-box:hover {
    background-color: #e2dfdf;
  }
  .select-box {
    border: none;
    cursor: pointer;
    padding: 5px 5px;
    background-color: transparent;
  }
  .clicked {
    background-color: #000000;
    color: #ffffff;
  }
</style>
