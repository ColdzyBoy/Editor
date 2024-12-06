<script setup lang="ts">
  const fontSize = "본문2";
  const fontFamily = "프리텐다드";
  import { ref } from 'vue';

  const isFontSizeActive = ref(false);
  const isFontFamilyActive = ref(false);

  const clickedFontSizeSelectBox = () => {
    if (isFontFamilyActive.value) isFontFamilyActive.value = false;
    isFontSizeActive.value = !isFontSizeActive.value;
  }
  const clickedFontFamilySelectBox = () => {
    if (isFontSizeActive.value) isFontSizeActive.value = false;
    isFontFamilyActive.value = !isFontFamilyActive.value;
  }
</script>

<template>
  <div class="toolbar font-controller">
    <div class="button-box set-font-size">
      <button type="button"
              class="select-box"
              :class="{ 'clicked': isFontSizeActive }"
              @click="clickedFontSizeSelectBox">
        <span>{{ fontSize }}</span>
      </button>
    </div>
    <div class="button-box set-font-family">
      <button type="button"
              class="select-box"
              :class="{ 'clicked': isFontFamilyActive }"
              @click="clickedFontFamilySelectBox">
        <span>{{ fontFamily }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
