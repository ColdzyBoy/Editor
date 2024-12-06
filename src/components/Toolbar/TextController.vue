<script setup lang="ts">

</script>

<template>
  <div class="toolbar text-controller">
    <div id="text-to-bold">
      <button>
        <b>B</b>
      </button>
    </div>
    <div id="text-to-italic">
      <button>
        <i>I</i>
      </button>
    </div>
    <div id="text-to-underline">
      <button>
        <u>U</u>
      </button>
    </div>
    <div id="text-to-strikethrough">
      <button>
        <s>T</s>
      </button>
    </div>
    <div id="text-to-color">
      <button>
        <span>T</span>
      </button>
    </div>
    <div id="text-to-background-color">
      <button>
        <span>T</span>
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
