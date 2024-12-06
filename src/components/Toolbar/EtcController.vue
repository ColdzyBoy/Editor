<script setup lang="ts">

</script>

<template>
  <div class="toolbar etc-controller">
    <div id="create-table">
      <button type="button">
        <span>TABLE</span>
      </button>
    </div>
    <div id="create-calendar">
      <button type="button">
        <span>CALENDAR</span>
      </button>
    </div>
    <div id="create-image">
      <button type="button">
        <span>IMAGE</span>
      </button>
    </div>
    <div id="create-list">
      <button type="button">
        <span>LIST</span>
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
