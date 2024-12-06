<script setup lang="ts">

</script>

<template>
  <div class="toolbar line-controller">
    <div id="text-to-left">
      <button type="button">
        <span>L</span>
      </button>
    </div>
    <div id="text-to-middle">
      <button type="button">
        <span>M</span>
      </button>
    </div>
    <div id="text-to-right">
      <button type="button">
        <span>R</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 27px;
    height: 29px;
    font-size: 16px;
    border-radius: 3px;
  }
  button:hover {
    background-color: #bdbdbd;
  }
</style>
