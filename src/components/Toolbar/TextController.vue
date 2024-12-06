<script setup lang="ts">

</script>

<template>
  <div class="toolbar text-controller">
    <div class="button-box text-to-bold">
      <button type="button" class="click-box">
        <b>B</b>
      </button>
    </div>
    <div class="button-box text-to-italic">
      <button type="button" class="click-box">
        <i>I</i>
      </button>
    </div>
    <div class="button-box text-to-underline">
      <button type="button" class="click-box">
        <u>U</u>
      </button>
    </div>
    <div class="button-box text-to-strikethrough">
      <button type="button" class="click-box">
        <s>S</s>
      </button>
    </div>
    <div class="button-box text-to-color">
      <button type="button" class="click-box">
        <span><font-awesome-icon :icon="['fas', 'eye-dropper']" /></span>
      </button>
    </div>
    <div class="button-box text-to-background-color">
      <button type="button" class="click-box">
        <span><font-awesome-icon :icon="['fas', 'highlighter']" /></span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
